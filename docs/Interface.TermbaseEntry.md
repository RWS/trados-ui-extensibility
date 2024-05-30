[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntry

# Interface: TermbaseEntry

The termbase entry.

## Export

TermbaseEntry

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the termbase entry was created.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8204

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8210

***

### humanReadableId?

> `optional` **humanReadableId**: `string`

An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system. The format of the generated value is not guaranteed.

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8186

***

### id

> **id**: `string`

The termbase entry identifier.

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8180

***

### languages

> **languages**: [`TermbaseEntryLanguage`](../wiki/Interface.TermbaseEntryLanguage)[]

The termbase entry languages.

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8192

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the termbase entry was last modified. <br> UTC Timezone   <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8216

***

### lastModifiedBy?

> `optional` **lastModifiedBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8222

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValue`](../wiki/Interface.TermbaseFieldValue)[]

#### Memberof

TermbaseEntry

#### Source

lc-public-api/models/index.ts:8198
