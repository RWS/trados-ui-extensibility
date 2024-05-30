[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseFieldValueUpdateRequest

# Interface: TermbaseFieldValueUpdateRequest

The termbase field value update request.

## Export

TermbaseFieldValueUpdateRequest

## Properties

### fieldValueLinks?

> `optional` **fieldValueLinks**: [`TermbaseFieldValueLinkUpdateRequest`](../wiki/Interface.TermbaseFieldValueLinkUpdateRequest)[]

#### Memberof

TermbaseFieldValueUpdateRequest

#### Source

lc-public-api/models/index.ts:9005

***

### id?

> `optional` **id**: `string`

The field value identifier. Either the `id` or the `name` is mandatory to be provided.

#### Memberof

TermbaseFieldValueUpdateRequest

#### Source

lc-public-api/models/index.ts:8981

***

### name?

> `optional` **name**: `string`

The field value name. Either the `id` or the `name` is mandatory to be provided.

#### Memberof

TermbaseFieldValueUpdateRequest

#### Source

lc-public-api/models/index.ts:8987

***

### termbaseFieldId

> **termbaseFieldId**: `string`

The termbase field value identifier. Must match with the fieldId from the termbase.

#### Memberof

TermbaseFieldValueUpdateRequest

#### Source

lc-public-api/models/index.ts:8993

***

### value

> **value**: `string`

The value of the field.

#### Memberof

TermbaseFieldValueUpdateRequest

#### Source

lc-public-api/models/index.ts:8999
