[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntryUpdateRequest

# Interface: TermbaseEntryUpdateRequest

The termbase entry update request.

## Export

TermbaseEntryUpdateRequest

## Properties

### humanReadableId?

> `optional` **humanReadableId**: `string`

An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system. The format of the generated value is not guaranteed.

#### Memberof

TermbaseEntryUpdateRequest

#### Source

lc-public-api/models/index.ts:8446

***

### languages

> **languages**: [`TermbaseEntryLanguageUpdateRequest`](../wiki/Interface.TermbaseEntryLanguageUpdateRequest)[]

The termbase entry languages.

#### Memberof

TermbaseEntryUpdateRequest

#### Source

lc-public-api/models/index.ts:8452

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValueUpdateRequest`](../wiki/Interface.TermbaseFieldValueUpdateRequest)[]

#### Memberof

TermbaseEntryUpdateRequest

#### Source

lc-public-api/models/index.ts:8458
