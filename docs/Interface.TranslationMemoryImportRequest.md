[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryImportRequest

# Interface: TranslationMemoryImportRequest

Translation Memory Import properties sent as a JSON inside a text part.

## Export

TranslationMemoryImportRequest

## Properties

### exportInvalidTranslationUnits?

> `optional` **exportInvalidTranslationUnits**: `boolean`

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10348

***

### importAsPlainText?

> `optional` **importAsPlainText**: `boolean`

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10342

***

### onlyImportSegmentsWithConfirmationLevels?

> `optional` **onlyImportSegmentsWithConfirmationLevels**: [`TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum`](../wiki/Type.TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum)[]

Only segments with the these confirmation levels will be imported. Default if the field is not set or null: [translated, approvedSignOff, approvedTranslation]. Empty array will be treated as not specified.

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10372

***

### sourceLanguageCode

> **sourceLanguageCode**: `string`

The code of the source language  of the translation memory.

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10330

***

### targetLanguageCode

> **targetLanguageCode**: `string`

The code of the target language  of the translation memory.

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10336

***

### targetSegmentsDifferOption?

> `optional` **targetSegmentsDifferOption**: [`TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum`](../wiki/Type.TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum)

Option to specify how to handle translation units in the Translation Memory, if target segments differ.

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10360

***

### triggerRecomputeStatistics?

> `optional` **triggerRecomputeStatistics**: `boolean`

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10354

***

### unknownFieldsOption?

> `optional` **unknownFieldsOption**: [`TranslationMemoryImportRequestUnknownFieldsOptionEnum`](../wiki/Type.TranslationMemoryImportRequestUnknownFieldsOptionEnum)

Option to specify how to handle translation units and unknown fields in the Translation Memory.

#### Memberof

TranslationMemoryImportRequest

#### Source

lc-public-api/models/index.ts:10366
