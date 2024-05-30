[Trados User Interface Extensibility v1.0.0](../wiki/globals) / trados

# Variable: trados

> `const` **trados**: `object`

## Type declaration

### callAddonApi()

> **callAddonApi**: (`requestConfiguration`) => `Promise`\<`any`\>

Performs a call to the extension's app API.

#### Parameters

• **requestConfiguration**: [`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail)

The request configuration object.

#### Returns

`Promise`\<`any`\>

A promise which resolves when the call has been completed.

### callApi()

> **callApi**: (`requestConfiguration`) => `Promise`\<`any`\>

Performs a call to the Public API.

#### Parameters

• **requestConfiguration**: [`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail)

The request configuration object.

#### Returns

`Promise`\<`any`\>

A promise which resolves when the call has been completed.

### contexts

> **contexts**: `object`

### contexts.projects

> **projects**: [`Context`](../wiki/Type.Context)

### contexts.taskInbox

> **taskInbox**: [`Context`](../wiki/Type.Context)

### dataSelectors

> **dataSelectors**: `object`

### dataSelectors.projectDashboard

> **projectDashboard**: [`DataSelector`](../wiki/Type.DataSelector)

### dataSelectors.projectFiles

> **projectFiles**: [`DataSelector`](../wiki/Type.DataSelector)

### dataSelectors.projectStages

> **projectStages**: [`DataSelector`](../wiki/Type.DataSelector)

### dataSelectors.projectTaskHistory

> **projectTaskHistory**: [`DataSelector`](../wiki/Type.DataSelector)

### dataSelectors.selectedProjects

> **selectedProjects**: [`DataSelector`](../wiki/Type.DataSelector)

### dataSelectors.selectedTasks

> **selectedTasks**: [`DataSelector`](../wiki/Type.DataSelector)

### getLocalData()

> **getLocalData**: (`context`, `selector`?) => `Promise`\<`any`\>

Gets portions of data available in the Trados user interface.

#### Parameters

• **context**: [`Context`](../wiki/Type.Context)

The context of the application, e.g. "projects" (use trados.contexts).

• **selector?**: [`DataSelector`](../wiki/Type.DataSelector)

The data selector identifies a portion of the data available in a context, e.g. "selectedProjects" (use trados.dataSelectors).

#### Returns

`Promise`\<`any`\>

A promise that resolves with the currently available data portion from the Trados user interface.

### getRegistrationResult()

> **getRegistrationResult**: () => [`RegistrationResult`](../wiki/Type.RegistrationResult)

Gets the extension registration result object containing the extension identifier, and the user's tenant identifier and authorization token.

#### Returns

[`RegistrationResult`](../wiki/Type.RegistrationResult)

The registration result object.

### navigate()

> **navigate**: (`path`, `type`?) => `Promise`\<`any`\>

Navigates within the Trados user interface.

#### Parameters

• **path**: `string`

The portion of the relative path, e.g. `resources/project-templates/${projectTemplateId}`

• **type?**: [`NavigationType`](../wiki/Type.NavigationType)

The navigation type: "route" for internal routing mechanism or "load" for browser page load. Optional, defaults to "route".

#### Returns

`Promise`\<`any`\>

A promise.

### navigationTypes

> **navigationTypes**: `object`

### navigationTypes.load

> **load**: [`NavigationType`](../wiki/Type.NavigationType)

### navigationTypes.route

> **route**: [`NavigationType`](../wiki/Type.NavigationType)

### notificationTypes

> **notificationTypes**: `object`

### notificationTypes.fail

> **fail**: [`NotificationType`](../wiki/Type.NotificationType)

### notificationTypes.info

> **info**: [`NotificationType`](../wiki/Type.NotificationType)

### notificationTypes.success

> **success**: [`NotificationType`](../wiki/Type.NotificationType)

### notificationTypes.warning

> **warning**: [`NotificationType`](../wiki/Type.NotificationType)

### onReady()

> **onReady**: (`elements`, `callback`) => `void`

Registers the extension in the Trados user interface and performs a callback function once registration complete.

#### Parameters

• **elements**: [`ExtensionElement`](../wiki/Type.ExtensionElement)[]

The custom elements array to be added to the Trados user interface.

• **callback**

The function to be executed when the current extension is registered in the Trados user interface.

#### Returns

`void`

### showNotification()

> **showNotification**: (`text`, `context`, `type`?) => `Promise`\<`any`\>

Shows a notification message in the top right of the page.

#### Parameters

• **text**: `string`

The text message.

• **context**: [`Context`](../wiki/Type.Context)

The context of the application (use trados.contexts).

• **type?**: [`NotificationType`](../wiki/Type.NotificationType)

The notification type (use trados.notificationTypes). Optional, defaults to "info".

#### Returns

`Promise`\<`any`\>

A promise which resolves when the notification has been displayed.

### updateElement()

> **updateElement**: (`elementId`, `update`) => `Promise`\<`any`\>

Updates properties of an element belonging to the current extension.

#### Parameters

• **elementId**: `string`

The element identifier used when registering the extension with the Trados user interface.

• **update**

An object containing the properties to be updated. Some properties are only available for certain element types, e.g. menuItems can only be set for buttons.

• **update.disabled?**: `boolean`

• **update.hidden?**: `boolean`

• **update.icon?**: `string`

• **update.menuItems?**: `object`[]

• **update.text?**: `string`

#### Returns

`Promise`\<`any`\>

A promise that resolves when the custom element properties have been updated.

## Source

index.ts:22
