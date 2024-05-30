[Trados User Interface Extensibility v1.0.0](../wiki/globals) / UpdateElementEventDetailExtended

# Interface: UpdateElementEventDetailExtended

The type describing the event detail object for updating a custom element.

## Extends

- [`UpdateElementEventDetail`](../wiki/Type.UpdateElementEventDetail)

## Properties

### elementId

> **elementId**: `string`

The element identifier.

#### Inherited from

`UpdateElementEventDetail.elementId`

#### Source

models/index.ts:216

***

### key

> **key**: `string`

The extension key.

#### Source

models/index.ts:254

***

### reject()

> **reject**: (`reason`) => `void`

The function to be called in case the event's Promise is rejected.

#### Parameters

• **reason**: `any`

#### Returns

`void`

#### Source

models/index.ts:258

***

### resolve()

> **resolve**: (`value`) => `void`

The function to be called once the event's Promise is resolved.

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Source

models/index.ts:256

***

### update

> **update**: `object`

The object containing the custom element's new properties values. Properties are optional. One or more can be updated. Properties that do not apply to the custom element type will be ignored.

#### disabled?

> `optional` **disabled**: `boolean`

The disabled state. Applicable to button and tab. Optional.

#### hidden?

> `optional` **hidden**: `boolean`

The hidden state. Applicable to all custom element types. Optional.

#### icon?

> `optional` **icon**: `string`

The icon. Applicable to button. Optional.

##### Remark

Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".

#### menuItems?

> `optional` **menuItems**: `object`[]

The menu items array. Applicable to buttons. Adds a dropdown to the custom button. Optional.

#### text?

> `optional` **text**: `string`

The text. Applicable to all custom element types. Optional.

#### Inherited from

`UpdateElementEventDetail.update`

#### Source

models/index.ts:218
