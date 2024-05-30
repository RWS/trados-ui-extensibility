[Trados User Interface Extensibility v1.0.0](../wiki/globals) / RegisterEventDetail

# Type alias: RegisterEventDetail

> **RegisterEventDetail**: `object`

The type describing the registration event detail.

## Remark

When registering a user interface extension, the custom elements array is passed along with a callback function to be executed once registration is complete.

## Type declaration

### callback()

> **callback**: (`result`) => `void`

The function to be called once registration is complete.

#### Parameters

• **result**: [`RegistrationResult`](../wiki/Type.RegistrationResult)

#### Returns

`void`

### elements

> **elements**: [`ExtensionElement`](../wiki/Type.ExtensionElement)[]

The custom elements array

## Source

models/index.ts:112
