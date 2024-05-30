[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemory

# Interface: TranslationMemory

## Export

TranslationMemory

## Properties

### copyright?

> `optional` **copyright**: `string`

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9821

***

### createdAt?

> `optional` **createdAt**: `Date`

The `DateTime` when the translation memory was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9851

***

### createdBy?

> `optional` **createdBy**: [`User`](../wiki/Interface.User)

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9857

***

### description?

> `optional` **description**: `string`

The translation memory description.

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9815

***

### fieldTemplate?

> `optional` **fieldTemplate**: [`TranslationMemoryFieldTemplate`](../wiki/Interface.TranslationMemoryFieldTemplate)

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9845

***

### id

> **id**: `string`

Unique identifier of the translation memory.

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9803

***

### languageDirections?

> `optional` **languageDirections**: [`TranslationMemoryLanguageDirection`](../wiki/Interface.TranslationMemoryLanguageDirection)[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">A collection of language directions</div>

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9833

***

### languageProcessingRule?

> `optional` **languageProcessingRule**: [`LanguageProcessingRule`](../wiki/Interface.LanguageProcessingRule)

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9839

***

### lastReIndexedAt?

> `optional` **lastReIndexedAt**: `Date`

The `DateTime` when the translation memory reindexing was performed.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9869

***

### lastRecomputedAt?

> `optional` **lastRecomputedAt**: `Date`

The `DateTime` when the translation memory statistics were last updated.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9863

***

### location?

> `optional` **location**: [`Folder`](../wiki/Interface.Folder)

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9827

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The translation memory name.</div>

#### Memberof

TranslationMemory

#### Source

lc-public-api/models/index.ts:9809
