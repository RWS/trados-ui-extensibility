[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomFieldUpdateRequest

# Interface: CustomFieldUpdateRequest

## Export

CustomFieldUpdateRequest

## Properties

### value

> **value**: `object`

The value of the custom field. A date will be serialized as a ISO_8601 string. For read only custom fields (`isReadOnly`), it must be set exactly as the `defaultValue` from custom field definition.

#### Memberof

CustomFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:894
