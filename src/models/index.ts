/////////////////////////////////////////////////////////
// extension incoming events: events dispatched by the LC Extensibility service, listened to by the extension
import { ProjectDetailsTab } from "./projects";
import { TaskDetailsTab, TasksListTab } from "./task-inbox";

import type {
  Project,
  SourceFile,
  TargetFile,
  Task
} from "../lc-public-api/models/index";

export * from "./projects";
export * from "./task-inbox";

// properties names must be the same as the projects appExtensibilityConfig.selectors names
/** The type describing supported data portion selectors for the "projects" context. */
type ProjectSelectors = Partial<{
  selectedProjects: Project[];
  project: Project;
  selectedFile: SourceFile | TargetFile;
  selectedFiles: (SourceFile | TargetFile)[];
  selectedTaskHistoryTask: Task;
  selectedStagesTasks: Task[];
  projectActiveTab: ProjectDetailsTab;
}>;

// properties names must be the same as the task-inbox appExtensibilityConfig.selectors names
/** The type describing supported data portion selectors for the "task-inbox" context. */
type TaskInboxSelectors = Partial<{
  selectedNewTasks: Task[];
  selectedActiveTasks: Task[];
  selectedCompletedTasks: Task[];
  newTaskPreview: Task;
  activeTaskPreview: Task;
  completedTaskPreview: Task;
  inboxActiveTab: TasksListTab;
  task: Task;
  selectedFiles: (SourceFile | TargetFile)[];
  taskActiveTab: TaskDetailsTab;
}>;

/** The type describing a render or click event detail. */
export type ExtensibilityEventDetail = ProjectSelectors &
  TaskInboxSelectors & {
    /** The extension key. */
    key: string;
    /** The domElementId of the custom element. */
    domElementId: string;
    /** The value property of the custom element. Optional.
     * @remark The value property is included in the event detail for button menu items click event.
     */
    value?: string;
  };

/////////////////////////////////////////////////////////
// extension outgoing events: events dispatched by the extension, listened to by the LC Extensibility Service
// based on https://divotion.com/blog/creating-type-safe-events
// see nimbus-ui/packages/extensibility: functionality package that should also be public - the publish function should be imported in 3rd party extension code

/** The type describing the context keys. */
export type ContextKeys = "projects" | "taskInbox";

/** The type describing the contexts. */
export type Context = "projects" | "task-inbox";

/** The type describing the notification types. */
export type NotificationType = "success" | "fail" | "warning" | "info";

/** The type describing the navigation types. */
export type NavigationType = "load" | "route";

/** The type describing the data portion selectors. */
export type DataSelector =
  | "selectedProjects"
  | "selectedTasks"
  | "projectDashboard"
  | "projectFiles"
  | "projectStages"
  | "projectTaskHistory";

// helper types from sdl/core-types or utils: todo: remove?!? depending on whether we expose trados.apiCalls
/** The type describing the HTTP request methods. */
type METHOD = "GET" | "PUT" | "POST" | "DELETE" | "PATCH";

/**
 * The type describing the object which configures an API call.
 */
type RestRequest = {
  /** The HTTP request method. */
  method: METHOD;
  /** The query parameters as key value pairs, joined by "&". Optional. */
  params?: string;
  /** Flag indicating whether the expected response is a Blob. Optional. */
  blobResponse?: boolean;
  /** Flag indicating whether the request contains a Blob. Optional. */
  blobRequest?: boolean;
  /** The form data object. Optional. */
  formData?: any;
  /** The URL of the request. */
  url: string;
  /** The JSON body of the request. Optional. */
  body?: string; // | File | FormData | Blob;  // only support string for now
  /** Object containing request headers. Optional. */
  headers?: any;
  /** Object containing additional data to be passed with the request. Optional. */
  meta?: any;
};

// event detail types - use as category/group in docs?

/** The type describing the registration event detail.
 * @remark When registering a user interface extension, the custom elements array is passed along with a callback function to be executed once registration is complete.
 */
export type RegisterEventDetail = {
  /** The custom elements array */
  elements: ExtensionElement[];
  /** The function to be called once registration is complete. */
  callback: (result: RegistrationResult) => void;
};

/**
 * The type describing the registration result object.
 */
export type RegistrationResult = {
  /** The extension key. */
  key: string;
  /** The user's tenant identifier.
   * @remark The user is the currently logged in user who is using the Trados user interface extension.
   */
  xLCTenant: string;
  /** The user's authorization token.
   * @remark The user is the currently logged in user who is using the Trados user interface extension.
   */
  authorization: string;
  /** The Public API URL. */
  publicApiUrl: string;
};

/**
 * The base type describing the event detail object for getting local data.
 */
export type GetLocalDataEventDetail = {
  /** The context within Trados, e.g. "projects" (use trados.context) */
  context: "projects" | "task-inbox";
  /** The data portion selector, e.g. "selectedProjects" (use trados.dataSelectors). Optional. If no data selector specified, all available data for context is retrieved. */
  selector?:
    | "selectedProjects"
    | "selectedTasks"
    | "projectDashboard"
    | "projectFiles"
    | "projectStages"
    | "projectTaskHistory";
};

/**
 * The type describing the event detail object for getting local data.
 */
export interface GetLocalDataEventDetailExtended
  extends GetLocalDataEventDetail {
  /** The extension key. */
  key: string;
  /** The function to be called once the event's Promise is resolved. */
  resolve: (localData: any) => void; // todo: localData return type?!?
  /** The function to be called in case the event's Promise is rejected. */
  reject: (reason: any) => void;
}

/**
 * The base type describing the event detail object for showing a notification.
 */
export type ShowNotificationEventDetail = {
  /** The context within Trados, e.g. "projects" (use trados.context). */
  context: Context;
  /** The notification type. */
  type: NotificationType;
  /** The text to be displayed in the notification. */
  text: string;
};

/**
 * The type describing the event detail object for showing a notification.
 */
export interface ShowNotificationEventDetailExtended
  extends ShowNotificationEventDetail {
  /** The extension key. */
  key: string;
  /** The function to be called once the event's Promise is resolved. */
  resolve: (value: any) => void;
  /** The function to be called in case the event's Promise is rejected. */
  reject: (reason: any) => void;
}

/**
 * The base type describing the event detail object for navigating within the application.
 */
export type NavigateEventDetail = {
  /** The navigation type (use trados.navigationTypes). */
  type: "load" | "route";
  /** The path to which to navigate. */
  path: string;
};

/**
 * The type describing the event detail object for navigating within the application.
 */
export interface NavigateEventDetailExtended extends NavigateEventDetail {
  /** The extension key. */
  key: string;
  /** The function to be called once the event's Promise is resolved. */
  resolve: (value: any) => void;
  /** The function to be called in case the event's Promise is rejected. */
  reject: (reason: any) => void;
}

/**
 * The base type describing the event detail object for updating a custom element.
 */
export type UpdateElementEventDetail = {
  /** The element identifier. */
  elementId: string;
  /** The object containing the custom element's new properties values. Properties are optional. One or more can be updated. Properties that do not apply to the custom element type will be ignored. */
  update: {
    /** The disabled state. Applicable to button and tab. Optional. */
    disabled?: boolean;
    /** The hidden state. Applicable to all custom element types. Optional. */
    hidden?: boolean;
    /** The icon. Applicable to button. Optional.
     * @remark Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".
     */
    icon?: string;
    /** The text. Applicable to all custom element types. Optional. */
    text?: string;
    //title?: string; // todo: when publishing new public package version, use "title" for containers instead of "text"; also update mock extension & Frontend Add-on
    /** The menu items array. Applicable to buttons. Adds a dropdown to the custom button. Optional. */
    menuItems?: {
      /** The index of the menu item */
      index: number;
      /** The disabled state. Optional. */
      disabled?: boolean;
      /** The hidden state. Optional. */
      hidden?: boolean;
      /** The icon. Optional.
       * @remark Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".
       */
      icon?: string;
      /** The text. Optional. */
      text?: string;
    }[];
  };
};

/**
 * The type describing the event detail object for updating a custom element.
 */
export interface UpdateElementEventDetailExtended
  extends UpdateElementEventDetail {
  /** The extension key. */
  key: string;
  /** The function to be called once the event's Promise is resolved. */
  resolve: (value: any) => void;
  /** The function to be called in case the event's Promise is rejected. */
  reject: (reason: any) => void;
}

/**
 * The base interface describing the object which configures an API call.
 */
export interface CallApiEventDetail extends RestRequest {
  //** filename?: The name of the file to download. Optional. /*
  fileName?: string; // when fileName exists, FileDownloader will be used in extensibility service to make the LC Public API call
}

/**
 * The interface describing the object which configures an API call.
 */
export interface CallApiEventDetailExtended extends CallApiEventDetail {
  /** The extension key. */
  key: string;
  /** The function to be called once the event's Promise is resolved. */
  resolve: (value: any) => void;
  /** The function to be called in case the event's Promise is rejected. */
  reject: (reason: any) => void;
}

// events definition - use as category/group in docs?
/** The supported event details definitions. */
export type EventsDefinition = {
  register: RegisterEventDetail;
  getLocalData: GetLocalDataEventDetailExtended;
  showNotification: ShowNotificationEventDetailExtended;
  navigate: NavigateEventDetailExtended;
  updateElement: UpdateElementEventDetailExtended;
  callAppApi: CallApiEventDetailExtended;
};

// event types
/** The supported event details types. */
export type EventsTypes = keyof EventsDefinition;

// extension event handler type - currently only used in projects extension - todo: remove this section?
export type ApiCallCompleteDetail<T = any> = {
  callId: string;
  success: boolean;
  data?: T; // todo?!? Public API TypeScript client?
  error?: any; // todo? does error have a specific structure?
};

export type GetDataCompleteDetail<T = any> = {
  eventId: string;
  data?: T; // todo?!? types used in LC UI for state selectors
};

// extension element action type
/** The type describing a custom element action.
 * @remark When a custom element's eventType is triggered in the Trados user interface as a result of a user action, the eventHandler function is called and the payload data selectors are passed inside the function's eventDetail argument.
 */
export type ExtensionElementAction = {
  /** The function to be executed when the custom element event is triggered. */
  eventHandler: (detail: ExtensibilityEventDetail) => void;
  /** The data portion selectors array. */
  payload: ExtensionElementActionSelector[];
  /** The event type.
   * @remark "onrender" and "onclick" are both supported events for buttons. All other custom element types only support the "onrender" event.
   */
  eventType: "onrender" | "onclick";
};

/** The base type describing a custom button.  */
export type ExtensionButtonBase = {
  /** The text. Optional. */
  text?: string;
  /** The icon. Optional.
   * @remark Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".
   */
  icon?: string; // todo: font-awesome v4.7 icons or custom from 3rd party - document this
  /** The icon alignment. Optional. Defaults to "left". */
  iconAlign?: "top" | "right" | "bottom" | "left";
  /** The disabled state. Optional. */
  disabled?: boolean;
  /** The hidden state. Optional. */
  hidden?: boolean;
  /** The actions array. Optional. */
  actions?: (ExtensionElementAction & {
    /** The event type.
     * @remark "onrender" and "onclick" are both supported events for buttons.
     */
    eventType: "onrender" | "onclick";
  })[];
};

/** The type describing a custom button. */
type ExtensionButton<T extends ElementLocation> = ExtensionButtonBase & {
  /** The type is always "button". */
  type: "button";
  /** The location. */
  location: T;
  /** The flag indicating whether the button should be displayed as a link. Optional. */
  isLink?: boolean; // todo: if isLink & href moves to ExtensionButtonBasicConfig, see what needs to be refactored so it works as expected; check disabled too
  /** The href of the button link. Optional. */
  href?: string;
  /** The menu to be displayed as a dropdown. Optional. */
  menu?: (ExtensionButtonBase & {
    /** The menu item's value. Optional. */
    value?: string;
    /** The flag indicating whether the menu item is a separator. Optional. */
    separator?: boolean;
  })[];
};

/** The type describing a custom tab. */
type ExtensionTab<T extends ElementLocation> = {
  /** The type is always "tab". */
  type: "tab";
  /** The location. */
  location: T;
  /** The text. */
  text: string;
  /** The hidden state. Optional. */
  hidden?: boolean;
  /** The actions array. Optional. */
  actions?: (ExtensionElementAction & {
    /** The event type.
     * @remark "onrender" is the only supported event for tabs.
     */
    eventType: "onrender";
  })[];
};

/** The type describing a custom panel. */
type ExtensionPanel<T extends ElementLocation> = {
  /** The type is always "panel". */
  type: "panel";
  /** The location. */
  location: T;
  /** The text. */
  text: string;
  /** The hidden state. Optional. */
  hidden?: boolean;
  /** The actions array. Optional. */
  actions?: (ExtensionElementAction & {
    /** The event type.
     * @remark "onrender" is the only supported event for panels.
     */
    eventType: "onrender";
  })[];
};

type ExtensionSidebarBox<T extends ElementLocation> = {
  /** The type is always "sidebarBox". */
  type: "sidebarBox";
  /** The location. */
  location: T;
  /** The text. */
  text: string;
  /** The hidden state. Optional. */
  hidden?: boolean;
  /** The actions array. Optional. */
  actions?: (ExtensionElementAction & {
    /** The event type.
     * @remark "onrender" is the only supported event for sidebar boxes.
     */
    eventType: "onrender";
  })[];
};

/** The base type describing a custom element. */
type ExtensionElementBase = {
  /** The element identifier. */
  elementId: string;
  /** The location. */
  location: ElementLocation;
  /** The type. */
  type: ElementType;
};

// todo: can ExtensionElement be improved so we don't use discrimination by location property?
/** The type describing a custom element.
 * @remark The custom element type decides the allowed locations, e.g. custom elements of type "button" can only have toolbar locations.
 */
export type ExtensionElement = ExtensionElementBase &
  // projects
  (| ExtensionButton<"projects-list-toolbar">
    | ExtensionButton<"project-details-toolbar">
    | ExtensionTab<"project-details-tabpanel">
    | ExtensionButton<"project-details-dashboard-toolbar">
    | ExtensionPanel<"project-details-dashboard-main">
    | ExtensionSidebarBox<"project-details-dashboard-sidebar">
    | ExtensionButton<"project-details-stages-toolbar">
    | ExtensionButton<"project-details-files-toolbar">
    | ExtensionButton<"project-details-task-history-toolbar">
    | ExtensionSidebarBox<"project-details-task-history-sidebar">

    // task-inbox
    | ExtensionButton<"new-tasks-list-toolbar">
    | ExtensionButton<"active-tasks-list-toolbar">
    | ExtensionButton<"completed-tasks-list-toolbar">
    | ExtensionSidebarBox<"new-tasks-list-sidebar">
    | ExtensionSidebarBox<"active-tasks-list-sidebar">
    | ExtensionSidebarBox<"completed-tasks-list-sidebar">
    | ExtensionButton<"task-toolbar">
    | ExtensionTab<"task-tabpanel">
    | ExtensionSidebarBox<"task-sidebar">
    | ExtensionButton<"task-details-toolbar">
    | ExtensionPanel<"task-details-main">
    | ExtensionButton<"task-files-toolbar">
  );

// supported element types
/** The type describing the supported custom element types. */
export type ElementType = "button" | "tab" | "panel" | "sidebarBox";

// supported location points (physical places in the application)
/** The type describing the supported locations that can host custom elements. */
export type ElementLocation =
  // projects
  | "projects-list-toolbar"
  | "project-details-toolbar"
  | "project-details-tabpanel"
  | "project-details-dashboard-toolbar"
  | "project-details-dashboard-main"
  | "project-details-dashboard-sidebar"
  | "project-details-stages-toolbar"
  | "project-details-files-toolbar"
  | "project-details-task-history-toolbar"
  | "project-details-task-history-sidebar"
  // task-inbox
  | "new-tasks-list-toolbar"
  | "active-tasks-list-toolbar"
  | "completed-tasks-list-toolbar"
  | "new-tasks-list-sidebar"
  | "active-tasks-list-sidebar"
  | "completed-tasks-list-sidebar"
  | "task-toolbar"
  | "task-tabpanel"
  | "task-sidebar"
  | "task-details-toolbar"
  | "task-details-main"
  | "task-files-toolbar";

/** The type describing the supported data portion selector that can be used as payload in custom element actions. */
export type ExtensionElementActionSelector =
  // projects
  | "selectedProjects"
  | "project"
  | "selectedFile"
  | "selectedFiles"
  | "selectedTaskHistoryTask"
  | "selectedStagesTasks"
  | "projectActiveTab"

  // task-inbox
  | "selectedNewTasks"
  | "selectedActiveTasks"
  | "selectedCompletedTasks"
  | "newTaskPreview"
  | "activeTaskPreview"
  | "completedTaskPreview"
  | "inboxActiveTab"
  | "task"
  | "selectedFiles"
  | "taskActiveTab";
