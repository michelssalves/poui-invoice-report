window.jsToAdvpl = function (type, content) {
  if (typeof twebchannel !== 'undefined' && typeof twebchannel.jsToAdvpl === 'function') {
    twebchannel.jsToAdvpl(type, content);
    return true;
  }

  console.warn('[oWebChannel] twebchannel indisponivel para envio JS -> ADVPL', { type, content });
  return false;
};

function saveSessionValue(key, value) {
  try {
    sessionStorage.setItem(key, String(value ?? ''));
  } catch (e) {
    console.warn('[oWebChannel] falha ao salvar sessionStorage', { key, value, error: e });
  }
}

window.advplToJs = function (type, content) {
  switch (type) {
    case 'setCompany':
      saveSessionValue('ProCompany', content);
      break;
    case 'setBranch':
      saveSessionValue('ProBranch', content);
      break;
    case 'setUserBranches':
      saveSessionValue('ProUserBranches', content);
      break;
    case 'setPaisLoc':
      saveSessionValue('ProPaisLoc', content);
      break;
    case 'entityId':
      saveSessionValue('entityId', content);
      break;
    case 'branchId':
      saveSessionValue('branchId', content);
      break;
    case 'objectId':
      saveSessionValue('objectId', content);
      break;
    case 'userName':
      saveSessionValue('userName', content);
      break;
    case 'userMail':
      saveSessionValue('userMail', content);
      break;
    case 'apiProtheus':
      window.__POUI_API_URL = String(content || '').trim();
      saveSessionValue('apiProtheus', window.__POUI_API_URL);
      console.log('[oWebChannel] API recebida do Protheus', window.__POUI_API_URL);
      break;
    case 'setProduction':
      window.__POUI_PRODUCTION = String(content || '').trim();
      saveSessionValue('setProduction', window.__POUI_PRODUCTION);
      console.log('[oWebChannel] production recebida do Protheus', window.__POUI_PRODUCTION);
      break;
    case 'setEnvironment':
      window.__POUI_ENVIRONMENT = String(content || '').trim().toUpperCase();
      saveSessionValue('setEnvironment', window.__POUI_ENVIRONMENT);
      console.log('[oWebChannel] environment recebido do Protheus', window.__POUI_ENVIRONMENT);
      break;
    case 'mensagemProtheus':
      alert('O que veio do ADVPL: ' + content);
      break;
    default:
      console.log('[oWebChannel] Evento ADVPL -> JS', { type, content });
      break;
  }
};
