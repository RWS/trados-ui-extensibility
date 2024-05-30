[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomField

# Interface: CustomField

A Custom Field model.

## Export

CustomField

## Properties

### id

> **id**: `string`

Custom Field identifier.

#### Memberof

CustomField

#### Source

lc-public-api/models/index.ts:725

***

### key?

> `optional` **key**: `string`

Custom Field friendly key.

#### Memberof

CustomField

#### Source

lc-public-api/models/index.ts:737

***

### name?

> `optional` **name**: `string`

Custom Field name. (Not available for List Projects, Get Project Template and List Project Templates endpoints)

#### Memberof

CustomField

#### Source

lc-public-api/models/index.ts:731

***

### value?

> `optional` **value**: `object`

The value of the custom property. A date will be serialised as an ISO_8601 string.

#### Memberof

CustomField

#### Source

lc-public-api/models/index.ts:743
