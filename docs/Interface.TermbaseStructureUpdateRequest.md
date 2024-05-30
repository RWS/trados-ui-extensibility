[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseStructureUpdateRequest

# Interface: TermbaseStructureUpdateRequest

The termbase structure update request.

## Export

TermbaseStructureUpdateRequest

## Properties

### fields?

> `optional` **fields**: [`TermbaseFieldUpdateRequest`](../wiki/Interface.TermbaseFieldUpdateRequest)[]

Describes the field structure. If not supplied, the termbase will be updated using the fields from the specified template. Otherwise it will override the fields from the template.

#### Memberof

TermbaseStructureUpdateRequest

#### Source

lc-public-api/models/index.ts:9209

***

### languages?

> `optional` **languages**: [`LanguageRequest`](../wiki/Interface.LanguageRequest)[]

The languages of the termbase. If not supplied, the termbase will be updated using the languages from the specified template. Otherwise it will override the  languages from the template.

#### Memberof

TermbaseStructureUpdateRequest

#### Source

lc-public-api/models/index.ts:9203
