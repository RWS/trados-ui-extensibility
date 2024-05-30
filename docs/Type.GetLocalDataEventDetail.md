[Trados User Interface Extensibility v1.0.0](../wiki/globals) / GetLocalDataEventDetail

# Type alias: GetLocalDataEventDetail

> **GetLocalDataEventDetail**: `object`

The base type describing the event detail object for getting local data.

## Type declaration

### context

> **context**: `"projects"` \| `"task-inbox"`

The context within Trados, e.g. "projects" (use trados.context)

### selector?

> `optional` **selector**: `"selectedProjects"` \| `"selectedTasks"` \| `"projectDashboard"` \| `"projectFiles"` \| `"projectStages"` \| `"projectTaskHistory"`

The data portion selector, e.g. "selectedProjects" (use trados.dataSelectors). Optional. If no data selector specified, all available data for context is retrieved.

## Source

models/index.ts:138
