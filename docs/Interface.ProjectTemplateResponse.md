[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectTemplateResponse

# Interface: ProjectTemplateResponse

Project template resource.  (Not available for the List Projects endpoint.)

## Export

ProjectTemplateResponse

## Properties

### customFields?

> `optional` **customFields**: [`CustomField`](../wiki/Interface.CustomField)[]

The Custom Fields.

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4154

***

### description?

> `optional` **description**: `string`

The project template description.

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4112

***

### fileProcessingConfiguration?

> `optional` **fileProcessingConfiguration**: [`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4136

***

### ~~forceOnline?~~

> `optional` **forceOnline**: `boolean`

(Deprecated) Moved under settings.general.forceOnline

#### Memberof

ProjectTemplateResponse

#### Deprecated

#### Source

lc-public-api/models/index.ts:4161

***

### id

> **id**: `string`

The project template identifier.

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4100

***

### languageDirections?

> `optional` **languageDirections**: [`LanguageDirectionNoStatistics`](../wiki/Interface.LanguageDirectionNoStatistics)[]

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4118

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4124

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project template name.</div>

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4106

***

### pricingModel?

> `optional` **pricingModel**: [`PricingModel`](../wiki/Interface.PricingModel)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4142

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerResponse`](../wiki/Interface.ProjectManagerResponse)[]

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4167

***

### ~~quoteTemplate?~~

> `optional` **quoteTemplate**: [`ProjectQuoteTemplateDeprecated`](../wiki/Interface.ProjectQuoteTemplateDeprecated)

#### Memberof

ProjectTemplateResponse

#### Deprecated

#### Source

lc-public-api/models/index.ts:4174

***

### scheduleTemplate?

> `optional` **scheduleTemplate**: [`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4180

***

### settings?

> `optional` **settings**: [`ProjectTemplateSettingsResponse`](../wiki/Interface.ProjectTemplateSettingsResponse)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4186

***

### translationEngine?

> `optional` **translationEngine**: [`TranslationEngine`](../wiki/Interface.TranslationEngine)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4130

***

### workflow?

> `optional` **workflow**: [`Workflow`](../wiki/Interface.Workflow)

#### Memberof

ProjectTemplateResponse

#### Source

lc-public-api/models/index.ts:4148
