[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseField

# Interface: TermbaseField

The termbase field.

## Export

TermbaseField

## Properties

### allowCustomValues?

> `optional` **allowCustomValues**: `boolean`

Specifies if the field allows custom values.

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8576

***

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Specifies if the field can be used multiple times.

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8582

***

### dataType?

> `optional` **dataType**: [`TermbaseFieldDataTypeEnum`](../wiki/Type.TermbaseFieldDataTypeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The data type of the field.</div>

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8564

***

### description?

> `optional` **description**: `string`

The description of the termbase field

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8546

***

### id

> **id**: `string`

The identifier of the termbase field.

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8534

***

### isMandatory?

> `optional` **isMandatory**: `boolean`

Specifies if the field is mandatory.

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8588

***

### level?

> `optional` **level**: [`TermbaseFieldLevelEnum`](../wiki/Type.TermbaseFieldLevelEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The level of which this field applies.</div>

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8558

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase field.</div>

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8540

***

### pickListValues?

> `optional` **pickListValues**: `string`[]

The pick list options. Only if dataType is "picklist".

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8570

***

### type

> **type**: [`TermbaseFieldTypeEnum`](../wiki/Type.TermbaseFieldTypeEnum)

The type of the termbase field - system or userDefined.

#### Memberof

TermbaseField

#### Source

lc-public-api/models/index.ts:8552
