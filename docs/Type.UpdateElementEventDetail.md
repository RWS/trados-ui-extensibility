[Trados User Interface Extensibility v1.0.0](../wiki/globals) / UpdateElementEventDetail

# Type alias: UpdateElementEventDetail

> **UpdateElementEventDetail**: `object`

The base type describing the event detail object for updating a custom element.

## Type declaration

### elementId

> **elementId**: `string`

The element identifier.

### update

> **update**: `object`

The object containing the custom element's new properties values. Properties are optional. One or more can be updated. Properties that do not apply to the custom element type will be ignored.

### update.disabled?

> `optional` **disabled**: `boolean`

The disabled state. Applicable to button and tab. Optional.

### update.hidden?

> `optional` **hidden**: `boolean`

The hidden state. Applicable to all custom element types. Optional.

### update.icon?

> `optional` **icon**: `string`

The icon. Applicable to button. Optional.

#### Remark

Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".

### update.menuItems?

> `optional` **menuItems**: `object`[]

The menu items array. Applicable to buttons. Adds a dropdown to the custom button. Optional.

### update.text?

> `optional` **text**: `string`

The text. Applicable to all custom element types. Optional.

## Source

models/index.ts:214
