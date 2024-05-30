[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseTemplate

# Interface: TermbaseTemplate

The termbase template.

## Export

TermbaseTemplate

## Properties

### copyright?

> `optional` **copyright**: `string`

The copyright of the termbase template.

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9240

***

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the termbase template was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9252

***

### description?

> `optional` **description**: `string`

The description of the termbase template.

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9234

***

### fields?

> `optional` **fields**: [`TermbaseField`](../wiki/Interface.TermbaseField)[]

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9276

***

### id

> **id**: `string`

The identifier of the termbase template.

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9222

***

### languages?

> `optional` **languages**: [`Language`](../wiki/Interface.Language)[]

The languages of the termbase template.

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9270

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the termbase template was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9258

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9246

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase template.</div>

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9228

***

### type

> **type**: [`TermbaseTemplateTypeEnum`](../wiki/Type.TermbaseTemplateTypeEnum)

The type of the termbase template.

#### Memberof

TermbaseTemplate

#### Source

lc-public-api/models/index.ts:9264
