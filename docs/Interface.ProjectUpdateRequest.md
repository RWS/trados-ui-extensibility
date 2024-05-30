[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectUpdateRequest

# Interface: ProjectUpdateRequest

## Export

ProjectUpdateRequest

## Properties

### customFields?

> `optional` **customFields**: [`CustomFieldRequest`](../wiki/Interface.CustomFieldRequest)[]

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5726

***

### deliveredBy?

> `optional` **deliveredBy**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5678

***

### description?

> `optional` **description**: `string`

The project description.

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5666

***

### dueBy?

> `optional` **dueBy**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5672

***

### fileProcessingConfiguration?

> `optional` **fileProcessingConfiguration**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5690

***

### name?

> `optional` **name**: `string`

The project name.\
Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5660

***

### pricingModel?

> `optional` **pricingModel**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5696

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerRequest`](../wiki/Interface.ProjectManagerRequest)[]

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5732

***

### projectPlan?

> `optional` **projectPlan**: [`ProjectPlanUpdateRequest`](../wiki/Interface.ProjectPlanUpdateRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5708

***

### quote?

> `optional` **quote**: [`QuoteUpdateRequest`](../wiki/Interface.QuoteUpdateRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5720

***

### tqaProfile?

> `optional` **tqaProfile**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5714

***

### translationEngine?

> `optional` **translationEngine**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5684

***

### workflow?

> `optional` **workflow**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectUpdateRequest

#### Source

lc-public-api/models/index.ts:5702
