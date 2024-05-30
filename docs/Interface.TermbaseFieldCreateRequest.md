[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseFieldCreateRequest

# Interface: TermbaseFieldCreateRequest

The termbase field request.

If dataType is `picklist` and pickListValues array is empty `allowCustomValues` must be true.

## Export

TermbaseFieldCreateRequest

## Properties

### allowCustomValues?

> `optional` **allowCustomValues**: `boolean`

Specifies if the field allows custom values. Must be true if pickListValues is empty.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8666

***

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Specifies if the field can be used multiple times.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8672

***

### dataType

> **dataType**: [`TermbaseFieldCreateRequestDataTypeEnum`](../wiki/Type.TermbaseFieldCreateRequestDataTypeEnum)

The data type of the field.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8654

***

### description?

> `optional` **description**: `string`

The description of the termbase field.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8642

***

### isMandatory?

> `optional` **isMandatory**: `boolean`

Specifies if the field is mandatory.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8678

***

### level

> **level**: [`TermbaseFieldCreateRequestLevelEnum`](../wiki/Type.TermbaseFieldCreateRequestLevelEnum)

The level of which this field applies.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8648

***

### name

> **name**: `string`

The name of the termbase field. Must be unique.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8636

***

### pickListValues?

> `optional` **pickListValues**: `Set`\<`string`\>

The pick list values. Only if dataType is "picklist". Values must be unique.

#### Memberof

TermbaseFieldCreateRequest

#### Source

lc-public-api/models/index.ts:8660
