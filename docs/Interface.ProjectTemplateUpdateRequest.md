[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectTemplateUpdateRequest

# Interface: ProjectTemplateUpdateRequest

Input for Project Template creation.

## Export

ProjectTemplateUpdateRequest

## Properties

### customFields?

> `optional` **customFields**: [`CustomFieldRequest`](../wiki/Interface.CustomFieldRequest)[]

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4444

***

### description?

> `optional` **description**: `string`

The project description.

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4412

***

### fileProcessingConfiguration?

> `optional` **fileProcessingConfiguration**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4418

***

### languageDirections?

> `optional` **languageDirections**: [`LanguageDirectionRequest`](../wiki/Interface.LanguageDirectionRequest)[]

The language directions.

When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4438

***

### name?

> `optional` **name**: `string`

The project template name.

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4406

***

### pricingModel?

> `optional` **pricingModel**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4456

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerRequest`](../wiki/Interface.ProjectManagerRequest)[]

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4424

***

### scheduleTemplate?

> `optional` **scheduleTemplate**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4430

***

### settings?

> `optional` **settings**: [`ProjectTemplateSettingsUpdateRequest`](../wiki/Interface.ProjectTemplateSettingsUpdateRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4468

***

### translationEngine?

> `optional` **translationEngine**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4450

***

### workflow?

> `optional` **workflow**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectTemplateUpdateRequest

#### Source

lc-public-api/models/index.ts:4462
