[Trados User Interface Extensibility v1.0.0](../wiki/globals) / LanguagePrice

# Interface: LanguagePrice

## Export

LanguagePrice

## Properties

### \_new?

> `optional` **\_new**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of new matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2014

***

### additionalCosts?

> `optional` **additionalCosts**: [`AdditionalCostLanguage`](../wiki/Interface.AdditionalCostLanguage)[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2050

***

### contextMatch?

> `optional` **contextMatch**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of context matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2002

***

### exactMatch?

> `optional` **exactMatch**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> The price of exact matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2008

***

### fuzzyMatches?

> `optional` **fuzzyMatches**: [`FuzzyMatch`](../wiki/Interface.FuzzyMatch)[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2044

***

### machineTranslation?

> `optional` **machineTranslation**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> The price of machine translation matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2032

***

### perfectMatch?

> `optional` **perfectMatch**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of perfect matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2020

***

### pricingUnit?

> `optional` **pricingUnit**: [`LanguagePricePricingUnitEnum`](../wiki/Type.LanguagePricePricingUnitEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2038

***

### repetition?

> `optional` **repetition**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of repetition matches.

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:2026

***

### sourceLanguage

> **sourceLanguage**: `string`

The source language code. For example: "en-US", "de-DE".

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:1990

***

### targetLanguage

> **targetLanguage**: `string`

The target language code. For example: "en-US", "de-DE".

#### Memberof

LanguagePrice

#### Source

lc-public-api/models/index.ts:1996
