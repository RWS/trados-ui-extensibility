import {
  Context,
  EventsDefinition,
  EventsTypes,
  ExtensionElement,
  NavigateEventDetailExtended,
  ShowNotificationEventDetailExtended,
  UpdateElementEventDetailExtended,
  NavigationType,
  NotificationType,
  RegistrationResult,
  GetLocalDataEventDetailExtended,
  DataSelector,
  CallApiEventDetail,
  CallApiEventDetailExtended
} from "../models";
import { navigationTypes, notificationTypes } from "../utils";

let currentRegistrationResult: RegistrationResult;

// todo: clean-install and generate LC Public API TypeScript client before continuing work on this
// use scripts with 3.0.1! the live Public-API.v1.json uses OpenAPI v3.1.0 which is not yet supported by openapi generator
// npm run clean-install && npm run generate-3.0.1

// internally used to publish events listened by the core LC
function publish<T extends EventsTypes>(
  eventName: T,
  detail: EventsDefinition[T] // includes callback (for "register" and "getLocalData" events)
): void {
  const event = new CustomEvent(eventName, { detail: detail });
  window.dispatchEvent(event);
}

/**
 * Gets the extension registration result object containing the extension identifier, and the user's tenant identifier and authorization token.
 *
 * @returns The registration result object.
 */
export function getRegistrationResult() {
  return currentRegistrationResult;
}

/**
 * Registers the extension in the Trados user interface and performs a callback function once registration complete.
 *
 * @param elements The custom elements array to be added to the Trados user interface.
 * @param callback The function to be executed when the current extension is registered in the Trados user interface.
 */
export function onReady(elements: ExtensionElement[], callback: () => void) {
  publish("register", {
    elements,
    callback: (registrationResult: RegistrationResult) => {
      currentRegistrationResult = registrationResult;
      callback();
    }
  });
}

/**
 * Gets portions of data available in the Trados user interface.
 *
 * @param context The context of the application, e.g. "projects" (use trados.contexts).
 * @param selector The data selector identifies a portion of the data available in a context, e.g. "selectedProjects" (use trados.dataSelectors).
 * @returns A promise that resolves with the currently available data portion from the Trados user interface.
 */
export function getLocalData(context: Context, selector?: DataSelector) {
  return new Promise((resolve: (localData: any) => void, reject) => {
    const getLocalDataEvent: GetLocalDataEventDetailExtended = {
      context,
      selector,
      ...getRegistrationResult(),
      resolve,
      reject
    };
    publish("getLocalData", getLocalDataEvent);
  });
}

/**
 * Updates properties of an element belonging to the current extension.
 *
 * @param elementId The element identifier used when registering the extension with the Trados user interface.
 * @param update An object containing the properties to be updated. Some properties are only available for certain element types, e.g. menuItems can only be set for buttons.
 * @returns A promise that resolves when the custom element properties have been updated.
 */
export function updateElement(
  elementId: string,
  update: {
    disabled?: boolean;
    hidden?: boolean;
    icon?: string;
    text?: string;
    menuItems?: {
      index: number;
      disabled?: boolean;
      hidden?: boolean;
      icon?: string;
      text?: string;
    }[];
  }
) {
  return new Promise((resolve: (value: any) => void, reject) => {
    const updateElementEvent: UpdateElementEventDetailExtended = {
      elementId,
      update,
      ...getRegistrationResult(),
      resolve,
      reject
    };
    publish("updateElement", updateElementEvent);
  });
}

/**
 * Navigates within the Trados user interface.
 *
 * @param path The portion of the relative path, e.g. `resources/project-templates/${projectTemplateId}`
 * @param type The navigation type: "route" for internal routing mechanism or "load" for browser page load. Optional, defaults to "route".
 * @returns A promise.
 */
export function navigate(path: string, type?: NavigationType) {
  return new Promise((resolve: (value: any) => void, reject) => {
    const navigateEvent: NavigateEventDetailExtended = {
      type: type || navigationTypes.route,
      path,
      ...getRegistrationResult(),
      resolve,
      reject
    };
    publish("navigate", navigateEvent);
  });
}

/**
 * Shows a notification message in the top right of the page.
 *
 * @param text The text message.
 * @param context The context of the application (use trados.contexts).
 * @param type The notification type (use trados.notificationTypes). Optional, defaults to "info".
 * @returns A promise which resolves when the notification has been displayed.
 */
export function showNotification(
  text: string,
  context: Context,
  type?: NotificationType
) {
  return new Promise((resolve: (value: any) => void, reject) => {
    const showNotificationEvent: ShowNotificationEventDetailExtended = {
      context,
      type: type || notificationTypes.info,
      text,
      ...getRegistrationResult(),
      resolve,
      reject
    };
    publish("showNotification", showNotificationEvent);
  });
}

/**
 * Performs a call to the extension's app API.
 *
 * @param requestConfiguration The request configuration object.
 * @returns A promise which resolves when the call has been completed.
 */
export function callAppApi(requestConfiguration: CallApiEventDetail) {
  return new Promise((resolve: (value: any) => void, reject) => {
    const callApiEvent: CallApiEventDetailExtended = {
      ...requestConfiguration,
      ...getRegistrationResult(),
      resolve,
      reject
    };
    publish("callAppApi", callApiEvent);
  });
}
