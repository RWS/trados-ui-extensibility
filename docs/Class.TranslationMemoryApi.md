[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryApi

# Class: TranslationMemoryApi

## Extends

- `BaseAPI`

## Constructors

### new TranslationMemoryApi()

> **new TranslationMemoryApi**(`configuration`): [`TranslationMemoryApi`](../wiki/Class.TranslationMemoryApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TranslationMemoryApi`](../wiki/Class.TranslationMemoryApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### copyTranslationMemory()

> **copyTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>

Creates a copy of a Translation Memory. The name will be suffixed with \' (Copy) \'
Copy Translation Memory

#### Parameters

• **requestParameters**: [`CopyTranslationMemoryRequest`](../wiki/Interface.CopyTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:151

***

### copyTranslationMemoryRaw()

> **copyTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>\>

Creates a copy of a Translation Memory. The name will be suffixed with \' (Copy) \'
Copy Translation Memory

#### Parameters

• **requestParameters**: [`CopyTranslationMemoryRequest`](../wiki/Interface.CopyTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:99

***

### createTranslationMemory()

> **createTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryBase`](../wiki/Interface.TranslationMemoryBase)\>

Create a new Translation Memory.
Create Translation Memory

#### Parameters

• **requestParameters**: [`CreateTranslationMemoryRequest`](../wiki/Interface.CreateTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryBase`](../wiki/Interface.TranslationMemoryBase)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:208

***

### createTranslationMemoryRaw()

> **createTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryBase`](../wiki/Interface.TranslationMemoryBase)\>\>

Create a new Translation Memory.
Create Translation Memory

#### Parameters

• **requestParameters**: [`CreateTranslationMemoryRequest`](../wiki/Interface.CreateTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryBase`](../wiki/Interface.TranslationMemoryBase)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:160

***

### deleteTranslationMemory()

> **deleteTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a Translation Memory.
Delete Translation Memory

#### Parameters

• **requestParameters**: [`DeleteTranslationMemoryRequest`](../wiki/Interface.DeleteTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:265

***

### deleteTranslationMemoryRaw()

> **deleteTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a Translation Memory.
Delete Translation Memory

#### Parameters

• **requestParameters**: [`DeleteTranslationMemoryRequest`](../wiki/Interface.DeleteTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:217

***

### getFieldTemplate()

> **getFieldTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryFieldTemplate`](../wiki/Interface.TranslationMemoryFieldTemplate)\>

Get a single Field Template by identifier.
Get Field Template

#### Parameters

• **requestParameters**: [`GetFieldTemplateRequest`](../wiki/Interface.GetFieldTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryFieldTemplate`](../wiki/Interface.TranslationMemoryFieldTemplate)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:325

***

### getFieldTemplateRaw()

> **getFieldTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryFieldTemplate`](../wiki/Interface.TranslationMemoryFieldTemplate)\>\>

Get a single Field Template by identifier.
Get Field Template

#### Parameters

• **requestParameters**: [`GetFieldTemplateRequest`](../wiki/Interface.GetFieldTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryFieldTemplate`](../wiki/Interface.TranslationMemoryFieldTemplate)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:273

***

### getTranslationMemory()

> **getTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>

Get a single Translation Memory by identifier.
Get Translation Memory

#### Parameters

• **requestParameters**: [`GetTranslationMemoryRequest`](../wiki/Interface.GetTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:386

***

### getTranslationMemoryRaw()

> **getTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>\>

Get a single Translation Memory by identifier.
Get Translation Memory

#### Parameters

• **requestParameters**: [`GetTranslationMemoryRequest`](../wiki/Interface.GetTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemory`](../wiki/Interface.TranslationMemory)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:334

***

### listFieldTemplates()

> **listFieldTemplates**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTranslationMemoryFieldTemplates`](../wiki/Interface.ListTranslationMemoryFieldTemplates)\>

Retrieves all the Field Templates.
List Field Templates

#### Parameters

• **requestParameters**: [`ListFieldTemplatesRequest`](../wiki/Interface.ListFieldTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTranslationMemoryFieldTemplates`](../wiki/Interface.ListTranslationMemoryFieldTemplates)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:460

***

### listFieldTemplatesRaw()

> **listFieldTemplatesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTranslationMemoryFieldTemplates`](../wiki/Interface.ListTranslationMemoryFieldTemplates)\>\>

Retrieves all the Field Templates.
List Field Templates

#### Parameters

• **requestParameters**: [`ListFieldTemplatesRequest`](../wiki/Interface.ListFieldTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTranslationMemoryFieldTemplates`](../wiki/Interface.ListTranslationMemoryFieldTemplates)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:395

***

### listTranslationMemories()

> **listTranslationMemories**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTranslationMemoriesReposne`](../wiki/Interface.ListTranslationMemoriesReposne)\>

Retrieves all the Translation Memories.
List Translation Memories

#### Parameters

• **requestParameters**: [`ListTranslationMemoriesRequest`](../wiki/Interface.ListTranslationMemoriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTranslationMemoriesReposne`](../wiki/Interface.ListTranslationMemoriesReposne)\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:534

***

### listTranslationMemoriesRaw()

> **listTranslationMemoriesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTranslationMemoriesReposne`](../wiki/Interface.ListTranslationMemoriesReposne)\>\>

Retrieves all the Translation Memories.
List Translation Memories

#### Parameters

• **requestParameters**: [`ListTranslationMemoriesRequest`](../wiki/Interface.ListTranslationMemoriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTranslationMemoriesReposne`](../wiki/Interface.ListTranslationMemoriesReposne)\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:469

***

### updateTranslationMemory()

> **updateTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a Translation Memory. We recommend reading this page too [Updating data with PUT](../docs/Updating-data-with-PUT.md).
Update Translation Memory

#### Parameters

• **requestParameters**: [`UpdateTranslationMemoryRequest`](../wiki/Interface.UpdateTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:594

***

### updateTranslationMemoryRaw()

> **updateTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a Translation Memory. We recommend reading this page too [Updating data with PUT](../docs/Updating-data-with-PUT.md).
Update Translation Memory

#### Parameters

• **requestParameters**: [`UpdateTranslationMemoryRequest`](../wiki/Interface.UpdateTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TranslationMemoryApi.ts:543

***

### withMiddleware()

> **withMiddleware**\<`T`\>(`this`, ...`middlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**middlewares**: `Middleware`[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withMiddleware`

#### Source

lc-public-api/runtime.ts:101

***

### withPostMiddleware()

> **withPostMiddleware**\<`T`\>(`this`, ...`postMiddlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**postMiddlewares**: (`undefined` \| (`context`) => `Promise`\<`void` \| `Response`\>)[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withPostMiddleware`

#### Source

lc-public-api/runtime.ts:112

***

### withPreMiddleware()

> **withPreMiddleware**\<`T`\>(`this`, ...`preMiddlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**preMiddlewares**: (`undefined` \| (`context`) => `Promise`\<`void` \| `FetchParams`\>)[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withPreMiddleware`

#### Source

lc-public-api/runtime.ts:107
