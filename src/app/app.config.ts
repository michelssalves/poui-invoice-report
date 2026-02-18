import { provideRouter, withHashLocation } from '@angular/router';
import { I18N_CONFIG, PoHttpRequestModule, PoI18nConfig, PoI18nService, PoModule } from '@po-ui/ng-components';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

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

  ],
};
