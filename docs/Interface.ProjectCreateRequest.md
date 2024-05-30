[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectCreateRequest

# Interface: ProjectCreateRequest

Input for Project creation.

Before starting the project, the required configuration resources (translation engine, file processing configuration and workflow) should be set either explicitly or through a project template that contains references to these configuration resources.

## Export

ProjectCreateRequest

## Properties

### customFields?

> `optional` **customFields**: [`CustomFieldRequest`](../wiki/Interface.CustomFieldRequest)[]

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3209

***

### description?

> `optional` **description**: `string`

The project description.

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3153

***

### dueBy

> **dueBy**: `null` \| `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3159

***

### fileProcessingConfiguration?

> `optional` **fileProcessingConfiguration**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3191

***

### forceOnline?

> `optional` **forceOnline**: `boolean`

This forces the project to be translated using the Language Cloud Online Editor exclusively.

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3221

***

### languageDirections

> **languageDirections**: [`LanguageDirectionRequest`](../wiki/Interface.LanguageDirectionRequest)[]

The language directions.

When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3173

***

### location

> **location**: `string`

The folder identifier where the project should be created.

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3179

***

### name

> **name**: `string`

The project name.\
Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3147

***

### pricingModel?

> `optional` **pricingModel**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3203

***

### projectManagers?

> `optional` **projectManagers**: [`ProjectManagerRequest`](../wiki/Interface.ProjectManagerRequest)[]

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3227

***

### projectTemplate?

> `optional` **projectTemplate**: [`ObjectIdRequest`](../wiki/Interface.ObjectIdRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3165

***

### scheduleTemplate?

> `optional` **scheduleTemplate**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3233

***

### tqaProfile?

> `optional` **tqaProfile**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3215

***

### translationEngine?

> `optional` **translationEngine**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3185

***

### workflow?

> `optional` **workflow**: [`ConfigurationResourceRequest`](../wiki/Interface.ConfigurationResourceRequest)

#### Memberof

ProjectCreateRequest

#### Source

lc-public-api/models/index.ts:3197
