// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://vhwin1065:9023/rest/protheus/v1/poui",
  useMocks: false,
  auth: {
    user: "admin",
    password: "tcp_tcp"
  },
  erpModule: "COM"
};

// src/environments/environment.prod.ts
var environment2 = {
  production: true,
  apiUrl: "http://vprotheus04:9110/rest/protheus/v1/poui",
  useMocks: false,
  auth: {
    user: "tcpauthrest",
    password: "tcp_authrest"
  },
  erpModule: "COM"
};

// src/environments/environment.test.ts
var environment3 = {
  production: false,
  apiUrl: "http://vhwin1065:9023/rest/protheus/v1/poui",
  useMocks: false,
  auth: {
    user: "admin",
    password: "tcp_tcp"
  },
  erpModule: "COM"
};

// src/environments/runtime-environment.ts
function readEnvFromQueryString() {
  if (typeof window === "undefined")
    return "";
  const env = new URLSearchParams(window.location.search).get("env");
  return (env || "").trim().toLowerCase();
}
function resolveRuntimeEnvironment() {
  const env = readEnvFromQueryString();
  if (env === "prod" || env === "production") {
    return environment2;
  }
  if (env === "test" || env === "qa" || env === "homolog" || env === "hml" || env === "dev" || env === "development") {
    return environment3;
  }
  return environment;
}

export {
  resolveRuntimeEnvironment
};
//# sourceMappingURL=chunk-GA3HLPZQ.js.map
