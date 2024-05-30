// todo: add models from core as they are - split; export only models that are used by selectors;
// look into removing "export" statement, e.g. "type ProjectDetailsTab", and how to make them available globally, without the need to use "import" :-?

/** The type describing the default tabs in the Trados project details view. */
export type ProjectDetailsTab =
  | "dashboard"
  | "stages"
  | "workflow"
  | "reports"
  | "costs"
  | "files"
  | "tasksHistory"
  | "settings"
  | "notes";
