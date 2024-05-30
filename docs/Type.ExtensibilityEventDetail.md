[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ExtensibilityEventDetail

# Type alias: ExtensibilityEventDetail

> **ExtensibilityEventDetail**: `ProjectSelectors` & `TaskInboxSelectors` & `object`

The type describing a render or click event detail.

## Type declaration

### domElementId

> **domElementId**: `string`

The domElementId of the custom element.

### key

> **key**: `string`

The extension key.

### value?

> `optional` **value**: `string`

The value property of the custom element. Optional.

#### Remark

The value property is included in the event detail for button menu items click event.

## Source

models/index.ts:41
