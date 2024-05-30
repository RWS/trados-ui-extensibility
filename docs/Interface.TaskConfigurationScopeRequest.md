[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskConfigurationScopeRequest

# Interface: TaskConfigurationScopeRequest

## Export

TaskConfigurationScopeRequest

## Properties

### languageDirection?

> `optional` **languageDirection**: [`LanguageDirectionItem`](../wiki/Interface.LanguageDirectionItem)

#### Memberof

TaskConfigurationScopeRequest

#### Source

lc-public-api/models/index.ts:7789

***

### sourceLanguage?

> `optional` **sourceLanguage**: [`SourceLanguageRequest`](../wiki/Interface.SourceLanguageRequest)

#### Memberof

TaskConfigurationScopeRequest

#### Source

lc-public-api/models/index.ts:7777

***

### targetLanguage?

> `optional` **targetLanguage**: [`TargetLanguageRequest`](../wiki/Interface.TargetLanguageRequest)

#### Memberof

TaskConfigurationScopeRequest

#### Source

lc-public-api/models/index.ts:7783

***

### type

> **type**: [`TaskConfigurationScopeRequestTypeEnum`](../wiki/Type.TaskConfigurationScopeRequestTypeEnum)

The applicability impact of the workflow configuration:
- global: used for global tasks, that are not associated to a target language 
- sourceLanguage: changes affect only the task associated to the source language specified in `sourceLanguage` field. For using this type, must include the `sourceLanguage` field.
- targetLanguage: changes affect only the task associated to the target language specified in `targetLanguage` field. For using this type, must include the `targetLanguage` field.
- languageDirection: changes affect only the task associated to the language direction specified in `languageDirection` field. For using this type, must include the `languageDirection` field.

#### Memberof

TaskConfigurationScopeRequest

#### Source

lc-public-api/models/index.ts:7771
