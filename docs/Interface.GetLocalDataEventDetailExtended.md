[Trados User Interface Extensibility v1.0.0](../wiki/globals) / GetLocalDataEventDetailExtended

# Interface: GetLocalDataEventDetailExtended

The type describing the event detail object for getting local data.

## Extends

- [`GetLocalDataEventDetail`](../wiki/Type.GetLocalDataEventDetail)

## Properties

### context

> **context**: `"projects"` \| `"task-inbox"`

The context within Trados, e.g. "projects" (use trados.context)

#### Inherited from

`GetLocalDataEventDetail.context`

#### Source

models/index.ts:140

***

### key

> **key**: `string`

The extension key.

#### Source

models/index.ts:157

***

### reject()

> **reject**: (`reason`) => `void`

The function to be called in case the event's Promise is rejected.

#### Parameters

• **reason**: `any`

#### Returns

`void`

#### Source

models/index.ts:161

***

### resolve()

> **resolve**: (`localData`) => `void`

The function to be called once the event's Promise is resolved.

#### Parameters

• **localData**: `any`

#### Returns

`void`

#### Source

models/index.ts:159

***

### selector?

> `optional` **selector**: `"selectedProjects"` \| `"selectedTasks"` \| `"projectDashboard"` \| `"projectFiles"` \| `"projectStages"` \| `"projectTaskHistory"`

The data portion selector, e.g. "selectedProjects" (use trados.dataSelectors). Optional. If no data selector specified, all available data for context is retrieved.

#### Inherited from

`GetLocalDataEventDetail.selector`

#### Source

models/index.ts:142
