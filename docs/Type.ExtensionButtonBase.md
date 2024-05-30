[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ExtensionButtonBase

# Type alias: ExtensionButtonBase

> **ExtensionButtonBase**: `object`

The base type describing a custom button.

## Type declaration

### actions?

> `optional` **actions**: [`ExtensionElementAction`](../wiki/Type.ExtensionElementAction) & `object`[]

The actions array. Optional.

### disabled?

> `optional` **disabled**: `boolean`

The disabled state. Optional.

### hidden?

> `optional` **hidden**: `boolean`

The hidden state. Optional.

### icon?

> `optional` **icon**: `string`

The icon. Optional.

#### Remark

Use (Font Awesome 5 icons)[https://fontawesome.com/v5/search]. PRO icons supported. Light version of icons recommended, e.g. "fal fa-check".

### iconAlign?

> `optional` **iconAlign**: `"top"` \| `"right"` \| `"bottom"` \| `"left"`

The icon alignment. Optional. Defaults to "left".

### text?

> `optional` **text**: `string`

The text. Optional.

## Source

models/index.ts:326
