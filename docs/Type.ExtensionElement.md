[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ExtensionElement

# Type alias: ExtensionElement

> **ExtensionElement**: `ExtensionElementBase` & `ExtensionButton`\<`"projects-list-toolbar"`\> \| `ExtensionButton`\<`"project-details-toolbar"`\> \| `ExtensionTab`\<`"project-details-tabpanel"`\> \| `ExtensionButton`\<`"project-details-dashboard-toolbar"`\> \| `ExtensionPanel`\<`"project-details-dashboard-main"`\> \| `ExtensionSidebarBox`\<`"project-details-dashboard-sidebar"`\> \| `ExtensionButton`\<`"project-details-stages-toolbar"`\> \| `ExtensionButton`\<`"project-details-files-toolbar"`\> \| `ExtensionButton`\<`"project-details-task-history-toolbar"`\> \| `ExtensionSidebarBox`\<`"project-details-task-history-sidebar"`\> \| `ExtensionButton`\<`"new-tasks-list-toolbar"`\> \| `ExtensionButton`\<`"active-tasks-list-toolbar"`\> \| `ExtensionButton`\<`"completed-tasks-list-toolbar"`\> \| `ExtensionSidebarBox`\<`"new-tasks-list-sidebar"`\> \| `ExtensionSidebarBox`\<`"active-tasks-list-sidebar"`\> \| `ExtensionSidebarBox`\<`"completed-tasks-list-sidebar"`\> \| `ExtensionButton`\<`"task-toolbar"`\> \| `ExtensionTab`\<`"task-tabpanel"`\> \| `ExtensionSidebarBox`\<`"task-sidebar"`\> \| `ExtensionButton`\<`"task-details-toolbar"`\> \| `ExtensionPanel`\<`"task-details-main"`\> \| `ExtensionButton`\<`"task-files-toolbar"`\>

The type describing a custom element.

## Remark

The custom element type decides the allowed locations, e.g. custom elements of type "button" can only have toolbar locations.

## Source

models/index.ts:437
