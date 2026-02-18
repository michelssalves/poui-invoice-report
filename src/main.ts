import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@totvs/twebchannel-js';

function parseProductionValue(value: unknown): boolean | null {
  const normalized = String(value ?? '').trim().toUpperCase();
  if (!normalized) return null;
  if (['TRUE', '1', 'S', 'Y', 'PROD', 'PRODUCTION'].includes(normalized)) return true;
  if (['FALSE', '0', 'N', 'NO', 'DEV', 'HML', 'HOMOLOG'].includes(normalized)) return false;
  return null;
}

function setupWebChannelBridge(): void {
  const w = window as any;

  if (typeof w.jsToAdvpl !== 'function') {
    w.jsToAdvpl = (type: string, content: string) => {
      if (typeof w.twebchannel !== 'undefined' && typeof w.twebchannel.jsToAdvpl === 'function') {
        w.twebchannel.jsToAdvpl(type, content);
        return true;
      }
      console.warn('[oWebChannel] twebchannel indisponivel para envio JS -> ADVPL', { type, content });
      return false;
    };
  }

  const previousAdvplToJs = typeof w.advplToJs === 'function' ? w.advplToJs.bind(w) : null;

  // Sempre garante o tratamento de apiProtheus, mesmo se o ambiente ja definir advplToJs.
  w.advplToJs = (type: string, content: string) => {
    if (type === 'apiProtheus') {
      w.__POUI_API_URL = String(content || '').trim();
      console.log('[oWebChannel] API recebida do Protheus', w.__POUI_API_URL);
      return;
    }

    if (type === 'setProduction') {
      const parsed = parseProductionValue(content);
      if (parsed !== null) {
        w.__POUI_PRODUCTION = parsed;
        console.log('[oWebChannel] production recebida do Protheus', w.__POUI_PRODUCTION);
      }
      return;
    }

    if (type === 'setEnvironment') {
      w.__POUI_ENVIRONMENT = String(content || '').trim().toUpperCase();
      console.log('[oWebChannel] environment recebido do Protheus', w.__POUI_ENVIRONMENT);
      return;
    }

    if (previousAdvplToJs) {
      previousAdvplToJs(type, content);
      return;
    }

    switch (type) {
      case 'mensagemProtheus':
        alert('O que veio do ADVPL: ' + content);
        break;
      default:
        console.log('[oWebChannel] Evento ADVPL -> JS', { type, content });
        break;
    }
  };
}

function initTwebchannelPackage(): void {
  const w = window as any;
  const twc = w.twebchannel;

  if (!twc || typeof twc.connect !== 'function') {
    console.warn('[oWebChannel] pacote @totvs/twebchannel-js indisponivel');
    return;
  }

  twc.advplToJs = (type: string, content: string) => {
    if (typeof w.advplToJs === 'function') {
      w.advplToJs(type, content);
    }
  };

  try {
    twc.connect(() => {
      console.log('[oWebChannel] connect OK');
    });
  } catch (e) {
    console.warn('[oWebChannel] connect falhou', e);
  }
}

function waitApiFromProtheus(timeoutMs = 2500): Promise<void> {
  const w = window as any;
  const startedAt = Date.now();

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      if (w.__POUI_API_URL) {
        clearInterval(timer);
        resolve();
        return;
      }

      if (typeof w.jsToAdvpl === 'function') {
        w.jsToAdvpl('mensagemJavascript', 'getApiUrl');
      }

      if ((Date.now() - startedAt) >= timeoutMs) {
        clearInterval(timer);
        resolve();
      }
    }, 100);
  });
}

setupWebChannelBridge();
initTwebchannelPackage();

waitApiFromProtheus()
  .finally(() => {
    bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err));
  });
