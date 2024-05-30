[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryLanguageDirection

# Interface: TranslationMemoryLanguageDirection

A language direction representation specific to translation memories.

## Export

TranslationMemoryLanguageDirection

## Properties

### languageDirection?

> `optional` **languageDirection**: [`SimpleLanguageDirection`](../wiki/Interface.SimpleLanguageDirection)

#### Memberof

TranslationMemoryLanguageDirection

#### Source

lc-public-api/models/index.ts:10564

***

### translationUnits?

> `optional` **translationUnits**: `number`

The number of translation units for this language pair. Sum up all language pairs to get the total for the translation memory.

#### Memberof

TranslationMemoryLanguageDirection

#### Source

lc-public-api/models/index.ts:10570

***

### unalignedTranslationUnits?

> `optional` **unalignedTranslationUnits**: `number`

The number of translation units that are unaligned for this language pair. Sum up all language pairs to get the total for the translation memory.

#### Memberof

TranslationMemoryLanguageDirection

#### Source

lc-public-api/models/index.ts:10576
