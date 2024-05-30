[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomFieldRequest

# Interface: CustomFieldRequest

A Custom Field model used at project creation or project update.

## Export

CustomFieldRequest

## Properties

### key

> **key**: `string`

Custom Field friendly key.

#### Memberof

CustomFieldRequest

#### Source

lc-public-api/models/index.ts:856

***

### value?

> `optional` **value**: `object`

The value of the custom field. A date will be serialized as a ISO_8601 string. For read only custom fields (`isReadOnly`), it must be set exactly as the `defaultValue` from custom field definition.

#### Memberof

CustomFieldRequest

#### Source

lc-public-api/models/index.ts:862
