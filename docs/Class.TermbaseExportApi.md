[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseExportApi

# Class: TermbaseExportApi

## Extends

- `BaseAPI`

## Constructors

### new TermbaseExportApi()

> **new TermbaseExportApi**(`configuration`): [`TermbaseExportApi`](../wiki/Class.TermbaseExportApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TermbaseExportApi`](../wiki/Class.TermbaseExportApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### downloadExportedTermbase()

> **downloadExportedTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads the exported termbase when the poll operation status is `done`.
Download Exported Termbase

#### Parameters

• **requestParameters**: [`DownloadExportedTermbaseRequest`](../wiki/Interface.DownloadExportedTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:113

***

### downloadExportedTermbaseRaw()

> **downloadExportedTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads the exported termbase when the poll operation status is `done`.
Download Exported Termbase

#### Parameters

• **requestParameters**: [`DownloadExportedTermbaseRequest`](../wiki/Interface.DownloadExportedTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:58

***

### downloadTermbaseDefinition()

> **downloadTermbaseDefinition**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads the termbase definition.
Export Termbase Template

#### Parameters

• **requestParameters**: [`DownloadTermbaseDefinitionRequest`](../wiki/Interface.DownloadTermbaseDefinitionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:170

***

### downloadTermbaseDefinitionRaw()

> **downloadTermbaseDefinitionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads the termbase definition.
Export Termbase Template

#### Parameters

• **requestParameters**: [`DownloadTermbaseDefinitionRequest`](../wiki/Interface.DownloadTermbaseDefinitionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:122

***

### exportTermbase()

> **exportTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>

Generates an asynchronous export operation.<br> Use the Poll Export Termbase endpoint to poll until the export status is `done`.
Export Termbase

#### Parameters

• **requestParameters**: [`ExportTermbaseOperationRequest`](../wiki/Interface.ExportTermbaseOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:230

***

### exportTermbaseRaw()

> **exportTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>\>

Generates an asynchronous export operation.<br> Use the Poll Export Termbase endpoint to poll until the export status is `done`.
Export Termbase

#### Parameters

• **requestParameters**: [`ExportTermbaseOperationRequest`](../wiki/Interface.ExportTermbaseOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:179

***

### pollExportTermbase()

> **pollExportTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>

Polls a termbase via an export operation. The exported termbase can be downloaded once the status is `done`.
Poll Termbase Export

#### Parameters

• **requestParameters**: [`PollExportTermbaseRequest`](../wiki/Interface.PollExportTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:294

***

### pollExportTermbaseRaw()

> **pollExportTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>\>

Polls a termbase via an export operation. The exported termbase can be downloaded once the status is `done`.
Poll Termbase Export

#### Parameters

• **requestParameters**: [`PollExportTermbaseRequest`](../wiki/Interface.PollExportTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseExportResponse`](../wiki/Interface.TermbaseExportResponse)\>\>

#### Source

lc-public-api/apis/TermbaseExportApi.ts:239

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
