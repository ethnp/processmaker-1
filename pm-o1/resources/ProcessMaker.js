import { createApp } from 'vue'
import axios from "axios";

window.ProcessMaker = {
  vueComponents: {},
  mountComponent: (componentName, selector, props) => {
    const el = document.querySelector(selector);
    const component = window.ProcessMaker.vueComponents[componentName];
    if (!el) {
      throw new Error(`Element ${selector} not found`);
    }

    if (!component) {
      throw new Error(`Component ${componentName} not found`);
    }

    const app = createApp(component, props);
    app.mount(el);

    return app;
  },
  registerComponent: (componentName, component) => {
    window.ProcessMaker.vueComponents[componentName] = component;
  },
};

/**
 * Create a axios instance which any vue component can bring in to call
 * REST api endpoints through oauth authentication
 *
 */
window.ProcessMaker.apiClient = axios;

window.ProcessMaker.apiClient.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

const token = document.head.querySelector("meta[name=\"csrf-token\"]");
const isProd = document.head.querySelector("meta[name=\"is-prod\"]")?.content === "true";

if (token) {
  window.ProcessMaker.apiClient.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
  console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token");
}

// Setup api versions
const apiVersionConfig = [
  { version: "1.0", baseURL: "/api/1.0/" },
  { version: "1.1", baseURL: "/api/1.1/" },
];

window.ProcessMaker.apiClient.defaults.baseURL = apiVersionConfig[0].baseURL;
window.ProcessMaker.apiClient.interceptors.request.use((config) => {
  if (typeof config.url !== "string" || !config.url) {
    throw new Error("Invalid URL in the request configuration");
  }

  apiVersionConfig.forEach(({ version, baseURL }) => {
    const versionPrefix = `/api/${version}/`;
    if (config.url.startsWith(versionPrefix)) {
      // eslint-disable-next-line no-param-reassign
      config.baseURL = baseURL;
      // eslint-disable-next-line no-param-reassign
      config.url = config.url.replace(versionPrefix, "");
    }
  });

  return config;
});

// Set the default API timeout
let apiTimeout = 5000;
if (window.Processmaker && window.Processmaker.apiTimeout !== undefined) {
  apiTimeout = window.Processmaker.apiTimeout;
}
window.ProcessMaker.apiClient.defaults.timeout = apiTimeout;

