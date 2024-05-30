[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryExportApi

# Class: TranslationMemoryExportApi

## Extends

- `BaseAPI`

## Constructors

### new TranslationMemoryExportApi()

> **new TranslationMemoryExportApi**(`configuration`): [`TranslationMemoryExportApi`](../wiki/Class.TranslationMemoryExportApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TranslationMemoryExportApi`](../wiki/Class.TranslationMemoryExportApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### downloadExportedTranslationMemory()

> **downloadExportedTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads the exported translation memory in the `tmx.gz` format when the poll operation status is `done`.
Download Exported Translation Memory

#### Parameters

• **requestParameters**: [`DownloadExportedTranslationMemoryRequest`](../wiki/Interface.DownloadExportedTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:98

***

### downloadExportedTranslationMemoryRaw()

> **downloadExportedTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads the exported translation memory in the `tmx.gz` format when the poll operation status is `done`.
Download Exported Translation Memory

#### Parameters

• **requestParameters**: [`DownloadExportedTranslationMemoryRequest`](../wiki/Interface.DownloadExportedTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:50

***

### exportTranslationMemory()

> **exportTranslationMemory**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>

Generates an asynchronous export operation. Use the [Poll Translation Memory Export](../reference/Public-API.v1.json/paths/~1translation-memory~1exports~1{exportId}/get) endpoint to poll until the export status is `done`.
Export Translation Memory

#### Parameters

• **requestParameters**: [`ExportTranslationMemoryRequest`](../wiki/Interface.ExportTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:158

***

### exportTranslationMemoryRaw()

> **exportTranslationMemoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>\>

Generates an asynchronous export operation. Use the [Poll Translation Memory Export](../reference/Public-API.v1.json/paths/~1translation-memory~1exports~1{exportId}/get) endpoint to poll until the export status is `done`.
Export Translation Memory

#### Parameters

• **requestParameters**: [`ExportTranslationMemoryRequest`](../wiki/Interface.ExportTranslationMemoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:107

***

### pollTranslationMemoryExport()

> **pollTranslationMemoryExport**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>

Polls a translation memory via an export operation. The exported translation memory can be downloaded once the status is `done`.
Poll Translation Memory Export

#### Parameters

• **requestParameters**: [`PollTranslationMemoryExportRequest`](../wiki/Interface.PollTranslationMemoryExportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:215

***

### pollTranslationMemoryExportRaw()

> **pollTranslationMemoryExportRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>\>

Polls a translation memory via an export operation. The exported translation memory can be downloaded once the status is `done`.
Poll Translation Memory Export

#### Parameters

• **requestParameters**: [`PollTranslationMemoryExportRequest`](../wiki/Interface.PollTranslationMemoryExportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationMemoryExportResponse`](../wiki/Interface.TranslationMemoryExportResponse)\>\>

#### Source

lc-public-api/apis/TranslationMemoryExportApi.ts:167

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
