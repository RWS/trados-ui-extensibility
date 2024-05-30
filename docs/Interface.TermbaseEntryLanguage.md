[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntryLanguage

# Interface: TermbaseEntryLanguage

The termbase entry language.

## Export

TermbaseEntryLanguage

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the language entry was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8285

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8291

***

### id

> **id**: `string`

The termbase language identifier.

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8261

***

### language

> **language**: [`Language`](../wiki/Interface.Language)

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8267

***

### lastModifedBy?

> `optional` **lastModifedBy**: [`User`](../wiki/Interface.User)

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8303

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the language entry was last modified. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8297

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValue`](../wiki/Interface.TermbaseFieldValue)[]

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8279

***

### terms?

> `optional` **terms**: [`TermbaseEntryTerm`](../wiki/Interface.TermbaseEntryTerm)[]

#### Memberof

TermbaseEntryLanguage

#### Source

lc-public-api/models/index.ts:8273
