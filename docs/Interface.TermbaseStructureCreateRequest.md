[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseStructureCreateRequest

# Interface: TermbaseStructureCreateRequest

The termbase structure create request.

## Export

TermbaseStructureCreateRequest

## Properties

### fields?

> `optional` **fields**: [`TermbaseFieldCreateRequest`](../wiki/Interface.TermbaseFieldCreateRequest)[]

Describes the field structure. If not supplied, the termbase will be created using the fields from the specified template. Otherwise it will override the fields from the template.

#### Memberof

TermbaseStructureCreateRequest

#### Source

lc-public-api/models/index.ts:9190

***

### languages?

> `optional` **languages**: [`LanguageRequest`](../wiki/Interface.LanguageRequest)[]

The languages of the termbase. If not supplied, the termbase will be created using the languages from the specified template. Otherwise it will override the  languages from the template.

#### Memberof

TermbaseStructureCreateRequest

#### Source

lc-public-api/models/index.ts:9184
