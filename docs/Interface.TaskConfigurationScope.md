[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskConfigurationScope

# Interface: TaskConfigurationScope

## Export

TaskConfigurationScope

## Properties

### languageDirection?

> `optional` **languageDirection**: [`LanguageDirectionItem`](../wiki/Interface.LanguageDirectionItem)

#### Memberof

TaskConfigurationScope

#### Source

lc-public-api/models/index.ts:7741

***

### sourceLanguage?

> `optional` **sourceLanguage**: [`Language`](../wiki/Interface.Language)

#### Memberof

TaskConfigurationScope

#### Source

lc-public-api/models/index.ts:7729

***

### targetLanguage?

> `optional` **targetLanguage**: [`Language`](../wiki/Interface.Language)

#### Memberof

TaskConfigurationScope

#### Source

lc-public-api/models/index.ts:7735

***

### type

> **type**: [`TaskConfigurationScopeTypeEnum`](../wiki/Type.TaskConfigurationScopeTypeEnum)

The applicability impact of the workflow configuration:
- global: used for global tasks which are not associated to a target language
- sourceLanguage: changes affect only the task associated to the source language specified in **sourceLanguage** field
- targetLanguage: changes affect only the task associated to the target language specified in **targetLanguage** field
- languageDirection: changes affect only the task associated to the language direction specified in **languageDirection** field

#### Memberof

TaskConfigurationScope

#### Source

lc-public-api/models/index.ts:7723
