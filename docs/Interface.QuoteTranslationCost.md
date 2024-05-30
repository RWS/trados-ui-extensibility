[Trados User Interface Extensibility v1.0.0](../wiki/globals) / QuoteTranslationCost

# Interface: QuoteTranslationCost

Fees calculated based on segment status (new, translated, signed off) and previous leverage (100% match and identical context, 100% match, <100%match, cross-file repetitions).

## Export

QuoteTranslationCost

## Properties

### \_new?

> `optional` **\_new**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6330

***

### exactMatch?

> `optional` **exactMatch**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6318

***

### fuzzyMatch?

> `optional` **fuzzyMatch**: [`TranslationCostFuzzyItem`](../wiki/Interface.TranslationCostFuzzyItem)[]

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6354

***

### inContextExactMatch?

> `optional` **inContextExactMatch**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6324

***

### machineTranslation?

> `optional` **machineTranslation**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6348

***

### perfectMatch?

> `optional` **perfectMatch**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6336

***

### repetitions?

> `optional` **repetitions**: [`TranslationCostItem`](../wiki/Interface.TranslationCostItem)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6342

***

### runningTotal?

> `optional` **runningTotal**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The sum of all the previously computed costs.</div>

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6360

***

### targetLanguage?

> `optional` **targetLanguage**: [`Language`](../wiki/Interface.Language)

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6312

***

### total?

> `optional` **total**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total cost for the current target language.</div>

#### Memberof

QuoteTranslationCost

#### Source

lc-public-api/models/index.ts:6306
