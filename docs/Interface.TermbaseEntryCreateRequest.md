[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntryCreateRequest

# Interface: TermbaseEntryCreateRequest

The termbase entry create request.

## Export

TermbaseEntryCreateRequest

## Properties

### humanReadableId?

> `optional` **humanReadableId**: `string`

An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system.
The format of the generated value is not guaranteed.

#### Memberof

TermbaseEntryCreateRequest

#### Source

lc-public-api/models/index.ts:8236

***

### languages

> **languages**: [`TermbaseEntryLanguageCreateRequest`](../wiki/Interface.TermbaseEntryLanguageCreateRequest)[]

The termbase entry languages.

#### Memberof

TermbaseEntryCreateRequest

#### Source

lc-public-api/models/index.ts:8242

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValueCreateRequest`](../wiki/Interface.TermbaseFieldValueCreateRequest)[]

#### Memberof

TermbaseEntryCreateRequest

#### Source

lc-public-api/models/index.ts:8248
