[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseImportApi

# Class: TermbaseImportApi

## Extends

- `BaseAPI`

## Constructors

### new TermbaseImportApi()

> **new TermbaseImportApi**(`configuration`): [`TermbaseImportApi`](../wiki/Class.TermbaseImportApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TermbaseImportApi`](../wiki/Class.TermbaseImportApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### downloadTermbaseImportLog()

> **downloadTermbaseImportLog**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads the termbase import logs.
Download Termbase Import Logs

#### Parameters

• **requestParameters**: [`DownloadTermbaseImportLogRequest`](../wiki/Interface.DownloadTermbaseImportLogRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:119

***

### downloadTermbaseImportLogRaw()

> **downloadTermbaseImportLogRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads the termbase import logs.
Download Termbase Import Logs

#### Parameters

• **requestParameters**: [`DownloadTermbaseImportLogRequest`](../wiki/Interface.DownloadTermbaseImportLogRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:64

***

### getImportHistory()

> **getImportHistory**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTermbaseImportHistory`](../wiki/Interface.ListTermbaseImportHistory)\>

Gets the import history for a termbase.
Get Termbase Import History

#### Parameters

• **requestParameters**: [`GetImportHistoryRequest`](../wiki/Interface.GetImportHistoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTermbaseImportHistory`](../wiki/Interface.ListTermbaseImportHistory)\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:188

***

### getImportHistoryRaw()

> **getImportHistoryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTermbaseImportHistory`](../wiki/Interface.ListTermbaseImportHistory)\>\>

Gets the import history for a termbase.
Get Termbase Import History

#### Parameters

• **requestParameters**: [`GetImportHistoryRequest`](../wiki/Interface.GetImportHistoryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTermbaseImportHistory`](../wiki/Interface.ListTermbaseImportHistory)\>\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:128

***

### importTermbase()

> **importTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseImportResponse`](../wiki/Interface.TermbaseImportResponse)\>

Generates an asynchronous import operation.<br> Use the Poll Import Termbase endpoint to poll until the import status is `done`.<br>
Import Termbase

#### Parameters

• **requestParameters**: [`ImportTermbaseRequest`](../wiki/Interface.ImportTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseImportResponse`](../wiki/Interface.TermbaseImportResponse)\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:281

***

### importTermbaseRaw()

> **importTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseImportResponse`](../wiki/Interface.TermbaseImportResponse)\>\>

Generates an asynchronous import operation.<br> Use the Poll Import Termbase endpoint to poll until the import status is `done`.<br>
Import Termbase

#### Parameters

• **requestParameters**: [`ImportTermbaseRequest`](../wiki/Interface.ImportTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseImportResponse`](../wiki/Interface.TermbaseImportResponse)\>\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:197

***

### pollTermbaseImport()

> **pollTermbaseImport**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbasePollImportResponse`](../wiki/Interface.TermbasePollImportResponse)\>

Polls a termbase import operation.
Poll Termbase Import

#### Parameters

• **requestParameters**: [`PollTermbaseImportRequest`](../wiki/Interface.PollTermbaseImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbasePollImportResponse`](../wiki/Interface.TermbasePollImportResponse)\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:345

***

### pollTermbaseImportRaw()

> **pollTermbaseImportRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbasePollImportResponse`](../wiki/Interface.TermbasePollImportResponse)\>\>

Polls a termbase import operation.
Poll Termbase Import

#### Parameters

• **requestParameters**: [`PollTermbaseImportRequest`](../wiki/Interface.PollTermbaseImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbasePollImportResponse`](../wiki/Interface.TermbasePollImportResponse)\>\>

#### Source

lc-public-api/apis/TermbaseImportApi.ts:290

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
