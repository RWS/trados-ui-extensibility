[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryImportSettings

# Interface: TranslationMemoryImportSettings

The properties provided by the client, when the Import Operation was triggered.

## Export

TranslationMemoryImportSettings

## Properties

### exportInvalidTranslationUnits

> **exportInvalidTranslationUnits**: `boolean`

This option describes if the invalid translation units were exported during the original translation memory import operation.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10484

***

### fileName

> **fileName**: `string`

The name of the file attached to the import request.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10496

***

### importAsPlainText

> **importAsPlainText**: `boolean`

This option describes if the translation units were imported as plain text.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10478

***

### onlyImportSegmentsWithConfirmationLevels

> **onlyImportSegmentsWithConfirmationLevels**: [`TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum`](../wiki/Type.TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum)[]

Only segments with the these confirmation levels were be imported.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10460

***

### sourceLanguageCode

> **sourceLanguageCode**: `string`

The source language code of the import request.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10502

***

### targetLanguageCode

> **targetLanguageCode**: `string`

The target language code of the import request.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10508

***

### targetSegmentsDifferOption

> **targetSegmentsDifferOption**: [`TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum`](../wiki/Type.TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum)

This option describes how were the translation units handled when there were differences in target segments.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10472

***

### traceId

> **traceId**: `string`

The trace identifier of the import operation.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10514

***

### triggerRecomputeStatistics

> **triggerRecomputeStatistics**: `boolean`

This option describes if fuzzy index statistics were  recomputed after the original import operation.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10490

***

### unknownFieldsOption

> **unknownFieldsOption**: [`TranslationMemoryImportSettingsUnknownFieldsOptionEnum`](../wiki/Type.TranslationMemoryImportSettingsUnknownFieldsOptionEnum)

This option describes how were the translation units handled when there were unknown fields in the request.

#### Memberof

TranslationMemoryImportSettings

#### Source

lc-public-api/models/index.ts:10466
