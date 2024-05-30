[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseFieldUpdateRequest

# Interface: TermbaseFieldUpdateRequest

The termbase field update request.

If dataType is `picklist` and pickListValues array is empty `allowCustomValues` must be true.

## Export

TermbaseFieldUpdateRequest

## Properties

### allowCustomValues?

> `optional` **allowCustomValues**: `boolean`

Specifies if the field allows custom values. Must be true if pickListValues is empty.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8753

***

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Specifies if the field can be used multiple times.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8759

***

### dataType

> **dataType**: [`TermbaseFieldUpdateRequestDataTypeEnum`](../wiki/Type.TermbaseFieldUpdateRequestDataTypeEnum)

The data type of the field.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8741

***

### description?

> `optional` **description**: `string`

The description of the termbase field.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8729

***

### id?

> `optional` **id**: `string`

The identifier of the termbase field to updated. If missing will add a new field.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8717

***

### isMandatory?

> `optional` **isMandatory**: `boolean`

Specifies if the field is mandatory.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8765

***

### level

> **level**: [`TermbaseFieldUpdateRequestLevelEnum`](../wiki/Type.TermbaseFieldUpdateRequestLevelEnum)

The level of which this field applies.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8735

***

### name

> **name**: `string`

The name of the termbase field. Must be unique.

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8723

***

### pickListValues?

> `optional` **pickListValues**: `Set`\<`string`\>

The pick list options. Only if dataType is "picklist".

#### Memberof

TermbaseFieldUpdateRequest

#### Source

lc-public-api/models/index.ts:8747
