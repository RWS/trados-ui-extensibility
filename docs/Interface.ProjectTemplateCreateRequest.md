[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectTemplateCreateRequest

# Interface: ProjectTemplateCreateRequest

Input for Project Template creation.

## Export

ProjectTemplateCreateRequest

## Properties

### customFields?

> `optional` **customFields**: [`CustomFieldRequest`](../wiki/Interface.CustomFieldRequest)[]

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3956

***

### description?

> `optional` **description**: `string`

The project description.

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3918

***

### fileProcessingConfiguration

> **fileProcessingConfiguration**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3930

***

### languageDirections?

> `optional` **languageDirections**: [`LanguageDirectionRequest`](../wiki/Interface.LanguageDirectionRequest)[]

The language directions.

When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3950

***

### location

> **location**: `string`

The folder identifier where the project should be created.

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3924

***

### name

> **name**: `string`

The project template name.

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3912

***

### pricingModel?

> `optional` **pricingModel**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3968

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerRequest`](../wiki/Interface.ProjectManagerRequest)[]

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3936

***

### scheduleTemplate?

> `optional` **scheduleTemplate**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3942

***

### settings?

> `optional` **settings**: [`ProjectTemplateSettingsRequest`](../wiki/Interface.ProjectTemplateSettingsRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3980

***

### translationEngine?

> `optional` **translationEngine**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3962

***

### workflow?

> `optional` **workflow**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:3974
