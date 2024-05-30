[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntryTerm

# Interface: TermbaseEntryTerm

The termbase entry term.

## Export

TermbaseEntryTerm

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the term entry was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8390

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8396

***

### id

> **id**: `string`

The term identifier.

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8372

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the term entry was last modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8402

***

### lastModifiedBy?

> `optional` **lastModifiedBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8408

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValue`](../wiki/Interface.TermbaseFieldValue)[]

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8384

***

### text

> **text**: `string`

The term text.

#### Memberof

TermbaseEntryTerm

#### Source

lc-public-api/models/index.ts:8378
