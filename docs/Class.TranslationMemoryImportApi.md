[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryImportApi

# Class: TranslationMemoryImportApi

## Extends

- `BaseAPI`

## Constructors

### new TranslationMemoryImportApi()

> **new TranslationMemoryImportApi**(`configuration`): [`TranslationMemoryImportApi`](../wiki/Class.TranslationMemoryImportApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TranslationMemoryImportApi`](../wiki/Class.TranslationMemoryImportApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getTMImportHistory()

> **getTMImportHistory**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTranslationMemoryImportHistory`](../wiki/Interface.ListTranslationMemoryImportHistory)\>

Gets the import history for a translation memory.
Get Translation Memory Import History

#### Parameters

• **requestParameters**: [`GetTMImportHistoryRequest`](../wiki/Interface.GetTMImportHistoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTranslationMemoryImportHistory`](../wiki/Interface.ListTranslationMemoryImportHistory)\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:115

***

### getTMImportHistoryRaw()

> **getTMImportHistoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTranslationMemoryImportHistory`](../wiki/Interface.ListTranslationMemoryImportHistory)\>\>

Gets the import history for a translation memory.
Get Translation Memory Import History

#### Parameters

• **requestParameters**: [`GetTMImportHistoryRequest`](../wiki/Interface.GetTMImportHistoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTranslationMemoryImportHistory`](../wiki/Interface.ListTranslationMemoryImportHistory)\>\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:55

***

### importTranslationMemory()

> **importTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>

Generates an asynchronous import operation.  <br> <br> Read more about prerequisites and limitations on the [official documentation center](https://docs.rws.com/791595/741139/trados-enterprise/importing-tm-content). <br> Note: The order of the multipart form parameter must be implemented as such: properties first, file second. <br> Use the Poll Translation Memory Import endpoint to poll until the import status is `done`.<br> To track the progress of the import please refer to [Poll Translation Memory Import](../reference/Public-API.v1.json/paths/~1translation-memory~1imports~1{importId}/get). 
Import Translation Memory

#### Parameters

• **requestParameters**: [`ImportTranslationMemoryRequest`](../wiki/Interface.ImportTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:212

***

### importTranslationMemoryRaw()

> **importTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>\>

Generates an asynchronous import operation.  <br> <br> Read more about prerequisites and limitations on the [official documentation center](https://docs.rws.com/791595/741139/trados-enterprise/importing-tm-content). <br> Note: The order of the multipart form parameter must be implemented as such: properties first, file second. <br> Use the Poll Translation Memory Import endpoint to poll until the import status is `done`.<br> To track the progress of the import please refer to [Poll Translation Memory Import](../reference/Public-API.v1.json/paths/~1translation-memory~1imports~1{importId}/get). 
Import Translation Memory

#### Parameters

• **requestParameters**: [`ImportTranslationMemoryRequest`](../wiki/Interface.ImportTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:124

***

### pollTMImport()

> **pollTMImport**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>

Polls a Translation Memory import operation. The import is finished when the status is `done`.
Poll Translation Memory Import

#### Parameters

• **requestParameters**: [`PollTMImportRequest`](../wiki/Interface.PollTMImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:269

***

### pollTMImportRaw()

> **pollTMImportRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>\>

Polls a Translation Memory import operation. The import is finished when the status is `done`.
Poll Translation Memory Import

#### Parameters

• **requestParameters**: [`PollTMImportRequest`](../wiki/Interface.PollTMImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryImportResponse`](../wiki/Interface.TranslationMemoryImportResponse)\>\>

#### Source

lc-public-api/apis/TranslationMemoryImportApi.ts:221

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
