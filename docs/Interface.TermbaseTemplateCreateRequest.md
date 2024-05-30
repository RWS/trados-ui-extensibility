[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseTemplateCreateRequest

# Interface: TermbaseTemplateCreateRequest

The termbase template create request.

## Export

TermbaseTemplateCreateRequest

## Properties

### copyright?

> `optional` **copyright**: `string`

The copyright of the termbase template.

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9312

***

### description?

> `optional` **description**: `string`

The description of the termbase template.

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9306

***

### fields?

> `optional` **fields**: [`TermbaseFieldCreateRequest`](../wiki/Interface.TermbaseFieldCreateRequest)[]

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9330

***

### languages?

> `optional` **languages**: [`LanguageRequest`](../wiki/Interface.LanguageRequest)[]

The languages of the termbase template.

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9324

***

### location?

> `optional` **location**: `string`

The folder identifier where the termbase template should be created. If not mentioned, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error.

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9318

***

### name

> **name**: `string`

The name of the termbase template.

#### Memberof

TermbaseTemplateCreateRequest

#### Source

lc-public-api/models/index.ts:9300
