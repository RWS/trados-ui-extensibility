//import { apiClient } from "./api/apiClient";
// re-export apis
export * from "./api/apiClient";

import {
  contexts,
  notificationTypes,
  navigationTypes,
  dataSelectors
} from "./utils";
import {
  onReady,
  getLocalData,
  callApi,
  callAddonApi,
  updateElement,
  navigate,
  showNotification,
  getRegistrationResult
} from "./events";

export const trados = {
  // httpClient for Public API
  //apiClient,
  onReady,
  getLocalData,
  callApi,
  callAddonApi,
  updateElement,
  navigate,
  showNotification,
  // function that returns the registration details (extension activation id, auth token, tenant id)
  getRegistrationResult,
  // faux-enums from utils
  contexts,
  dataSelectors,
  notificationTypes,
  navigationTypes
};

// re-export apis
export * from "./lc-public-api/apis";
// models
export * from "./lc-public-api/models";
export * from "./models";
/*
export type ExtensibilityModels = typeof ExtensibilityModels;
export type ProjectsModels = typeof ProjectsModels;
export type TaskInboxModels = typeof TaskInboxModels;
*/
//export * from "./models";

//export default trados;

//export type Trados = typeof trados;

// should we export Public API types and interfaces?
// problematic because openapi generator places some in /models folder, other end up in /apis folder
//export * from "./lc-public-api/models";
// ideally /apis isn't exported as generated, but in contains interfaces which should live in the /models folder
//export * from "./lc-public-api/apis";
