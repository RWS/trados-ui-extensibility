[Trados User Interface Extensibility v1.0.0](../wiki/globals) / NavigateEventDetailExtended

# Interface: NavigateEventDetailExtended

The type describing the event detail object for navigating within the application.

## Extends

- [`NavigateEventDetail`](../wiki/Type.NavigateEventDetail)

## Properties

### key

> **key**: `string`

The extension key.

#### Source

models/index.ts:204

***

### path

> **path**: `string`

The path to which to navigate.

#### Inherited from

`NavigateEventDetail.path`

#### Source

models/index.ts:196

***

### reject()

> **reject**: (`reason`) => `void`

The function to be called in case the event's Promise is rejected.

#### Parameters

• **reason**: `any`

#### Returns

`void`

#### Source

models/index.ts:208

***

### resolve()

> **resolve**: (`value`) => `void`

The function to be called once the event's Promise is resolved.

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Source

models/index.ts:206

***

### type

> **type**: `"load"` \| `"route"`

The navigation type (use trados.navigationTypes).

#### Inherited from

`NavigateEventDetail.type`

#### Source

models/index.ts:194
