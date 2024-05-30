[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ExtensionElementAction

# Type alias: ExtensionElementAction

> **ExtensionElementAction**: `object`

The type describing a custom element action.

## Remark

When a custom element's eventType is triggered in the Trados user interface as a result of a user action, the eventHandler function is called and the payload data selectors are passed inside the function's eventDetail argument.

## Type declaration

### eventHandler()

> **eventHandler**: (`detail`) => `void`

The function to be executed when the custom element event is triggered.

#### Parameters

• **detail**: [`ExtensibilityEventDetail`](../wiki/Type.ExtensibilityEventDetail)

#### Returns

`void`

### eventType

> **eventType**: `"onrender"` \| `"onclick"`

The event type.

#### Remark

"onrender" and "onclick" are both supported events for buttons. All other custom element types only support the "onrender" event.

### payload

> **payload**: [`ExtensionElementActionSelector`](../wiki/Type.ExtensionElementActionSelector)[]

The data portion selectors array.

## Source

models/index.ts:314
