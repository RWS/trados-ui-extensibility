import {
  Context,
  ContextKeys,
  NotificationType,
  NavigationType,
  DataSelector
} from "../models";

export const contexts: { [key in ContextKeys]: Context } = {
  projects: "projects",
  taskInbox: "task-inbox"
};

export const notificationTypes: {
  [key in NotificationType]: NotificationType;
} = {
  success: "success",
  fail: "fail",
  warning: "warning",
  info: "info"
};

export const navigationTypes: {
  [key in NavigationType]: NavigationType;
} = {
  load: "load",
  route: "route"
};

export const dataSelectors: {
  [key in DataSelector]: DataSelector;
} = {
  selectedProjects: "selectedProjects",
  selectedTasks: "selectedTasks",
  projectDashboard: "projectDashboard",
  projectFiles: "projectFiles",
  projectStages: "projectStages",
  projectTaskHistory: "projectTaskHistory"
};
