import { provideRouter, withHashLocation } from '@angular/router';
import { I18N_CONFIG, PoHttpRequestModule, PoI18nConfig, PoI18nService, PoModule } from '@po-ui/ng-components';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RuntimeConfigService } from './core/services/runtime-config.service';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': {
        hello: 'Olá',
        welcome: 'Bem-vindo'
      }
    }
  }
};

function initializeRuntimeConfig(runtimeConfigService: RuntimeConfigService): () => Promise<void> {
  return () => runtimeConfigService.loadFromBackend();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom([
      BrowserAnimationsModule,
      PoHttpRequestModule,
      PoModule
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: I18N_CONFIG, useValue: i18nConfig },
    PoI18nService, // ✅ registra explicitamente o serviço
    { provide: "Window", useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeRuntimeConfig,
      deps: [RuntimeConfigService],
      multi: true
    },

  ],
};
