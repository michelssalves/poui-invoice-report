import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { resolveRuntimeEnvironment } from '../../../environments/runtime-environment';

type BaseEnvironment = ReturnType<typeof resolveRuntimeEnvironment>;

interface RuntimeConfigAuth {
  user?: string;
  password?: string;
}

interface RuntimeConfigResponse {
  ok?: boolean;
  production?: boolean;
  apiUrl?: string;
  useMocks?: boolean;
  erpModule?: string;
  auth?: RuntimeConfigAuth;
}

@Injectable({ providedIn: 'root' })
export class RuntimeConfigService {
  private environment: BaseEnvironment = resolveRuntimeEnvironment();

  constructor(private http: HttpClient) {}

  getRuntimeEnvironment(): BaseEnvironment {
    return this.environment;
  }

  async loadFromBackend(): Promise<void> {
    const fallback = this.environment;
    const endpoints = [
      '/rest/protheus/v1/poui/runtime-config',
      `${fallback.apiUrl}/runtime-config`
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await firstValueFrom(
          this.http.get<RuntimeConfigResponse>(endpoint)
        );

        if (this.applyResponse(response)) {
          return;
        }
      } catch {
        // fallback para o próximo endpoint
      }
    }
  }

  private applyResponse(response?: RuntimeConfigResponse): boolean {
    if (!response || response.ok === false) {
      return false;
    }

    const apiUrl = (response.apiUrl || '').trim().replace(/\/+$/, '');
    if (!apiUrl) {
      return false;
    }

    const current = this.environment;
    this.environment = {
      ...current,
      production:
        typeof response.production === 'boolean'
          ? response.production
          : current.production,
      apiUrl,
      useMocks:
        typeof response.useMocks === 'boolean'
          ? response.useMocks
          : current.useMocks,
      erpModule: (response.erpModule || current.erpModule || 'COM').trim(),
      auth: {
        user: (response.auth?.user || current.auth.user || '').trim(),
        password: response.auth?.password || current.auth.password || ''
      }
    };

    return true;
  }
}
