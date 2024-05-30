[Trados User Interface Extensibility v1.0.0](../wiki/globals) / Project

# Interface: Project

Project resource.

## Export

Project

## Properties

### analysisStatistics?

> `optional` **analysisStatistics**: [`AnalysisStatistics`](../wiki/Interface.AnalysisStatistics)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3032

***

### analytics?

> `optional` **analytics**: [`Analytics`](../wiki/Interface.Analytics)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3026

***

### createdAt?

> `optional` **createdAt**: `Date`

The project's creation date and time. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2948

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2978

***

### customFields?

> `optional` **customFields**: [`CustomField`](../wiki/Interface.CustomField)[]

The Custom Fields

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3044

***

### customer?

> `optional` **customer**: [`Customer`](../wiki/Interface.Customer)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2972

***

### deliveredBy?

> `optional` **deliveredBy**: `Date`

UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2942

***

### description?

> `optional` **description**: `string`

The project description.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2930

***

### dueBy?

> `optional` **dueBy**: `Date`

The project due date. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2936

***

### fileProcessingConfiguration?

> `optional` **fileProcessingConfiguration**: [`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3002

***

### forceOnline?

> `optional` **forceOnline**: `boolean`

This forces the project to be translated using the Language Cloud Online Editor exclusively.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3056

***

### id

> **id**: `string`

The project identifier.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2912

***

### languageDirections?

> `optional` **languageDirections**: [`LanguageDirection`](../wiki/Interface.LanguageDirection)[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project's language directions.</div>

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2966

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2984

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project name.</div>

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2924

***

### pricingModel?

> `optional` **pricingModel**: [`PricingModel`](../wiki/Interface.PricingModel)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3008

***

### projectGroup?

> `optional` **projectGroup**: [`ProjectGroup`](../wiki/Interface.ProjectGroup)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3068

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerResponse`](../wiki/Interface.ProjectManagerResponse)[]

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3074

***

### projectPlan?

> `optional` **projectPlan**: [`ProjectPlan`](../wiki/Interface.ProjectPlan)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3020

***

### projectTemplate?

> `optional` **projectTemplate**: [`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2990

***

### quote?

> `optional` **quote**: [`Quote`](../wiki/Interface.Quote)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3038

***

### quoteTemplate?

> `optional` **quoteTemplate**: [`ProjectQuoteTemplate`](../wiki/Interface.ProjectQuoteTemplate)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3062

***

### scheduleTemplate?

> `optional` **scheduleTemplate**: [`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3080

***

### shortId?

> `optional` **shortId**: `string`

The short identifier of the project.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2918

***

### status?

> `optional` **status**: [`ProjectStatusEnum`](../wiki/Type.ProjectStatusEnum)

The project's status.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2954

***

### statusHistory?

> `optional` **statusHistory**: [`ProjectStatusHistory`](../wiki/Interface.ProjectStatusHistory)[]

The project's status history.

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2960

***

### tqaProfile?

> `optional` **tqaProfile**: [`TqaProfile`](../wiki/Interface.TqaProfile)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3050

***

### translationEngine?

> `optional` **translationEngine**: [`TranslationEngine`](../wiki/Interface.TranslationEngine)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:2996

***

### workflow?

> `optional` **workflow**: [`Workflow`](../wiki/Interface.Workflow)

#### Memberof

Project

#### Source

lc-public-api/models/index.ts:3014
