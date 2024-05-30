[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseFieldValue

# Interface: TermbaseFieldValue

The termbase field value.

## Export

TermbaseFieldValue

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the termbase field value was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8832

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8838

***

### fieldValueLinks?

> `optional` **fieldValueLinks**: [`TermbaseFieldValueLink`](../wiki/Interface.TermbaseFieldValueLink)[]

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8826

***

### id

> **id**: `string`

The field value identifier.

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8802

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the termbase field value was last modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8844

***

### lastModifiedBy?

> `optional` **lastModifiedBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8850

***

### name

> **name**: `string`

The field value name.

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8808

***

### termbaseFieldId

> **termbaseFieldId**: `string`

The termbase field identifier.

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8814

***

### value

> **value**: `string`

The value of the field.

#### Memberof

TermbaseFieldValue

#### Source

lc-public-api/models/index.ts:8820
