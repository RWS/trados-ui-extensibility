[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseEntryTermUpdateRequest

# Interface: TermbaseEntryTermUpdateRequest

The termbase entry term update request.

## Export

TermbaseEntryTermUpdateRequest

## Properties

### id?

> `optional` **id**: `string`

The term identifier that will be updated. If not supplied, a new term will be created.

#### Memberof

TermbaseEntryTermUpdateRequest

#### Source

lc-public-api/models/index.ts:8421

***

### termbaseFieldValues?

> `optional` **termbaseFieldValues**: [`TermbaseFieldValueUpdateRequest`](../wiki/Interface.TermbaseFieldValueUpdateRequest)[]

#### Memberof

TermbaseEntryTermUpdateRequest

#### Source

lc-public-api/models/index.ts:8433

***

### text

> **text**: `string`

The term text.

#### Memberof

TermbaseEntryTermUpdateRequest

#### Source

lc-public-api/models/index.ts:8427
