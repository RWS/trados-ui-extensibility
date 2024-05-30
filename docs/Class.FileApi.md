[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FileApi

# Class: FileApi

## Extends

- `BaseAPI`

## Constructors

### new FileApi()

> **new FileApi**(`configuration`): [`FileApi`](../wiki/Class.FileApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`FileApi`](../wiki/Class.FileApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### pollUploadZipFile()

> **pollUploadZipFile**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileMetadataResponse`](../wiki/Interface.FileMetadataResponse)\>

Monitors the unzipping operation for a previously uploaded archive and gets details on the extracted files.
Poll Upload Zip File

#### Parameters

• **requestParameters**: [`PollUploadZipFileRequest`](../wiki/Interface.PollUploadZipFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileMetadataResponse`](../wiki/Interface.FileMetadataResponse)\>

#### Source

lc-public-api/apis/FileApi.ts:91

***

### pollUploadZipFileRaw()

> **pollUploadZipFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileMetadataResponse`](../wiki/Interface.FileMetadataResponse)\>\>

Monitors the unzipping operation for a previously uploaded archive and gets details on the extracted files.
Poll Upload Zip File

#### Parameters

• **requestParameters**: [`PollUploadZipFileRequest`](../wiki/Interface.PollUploadZipFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileMetadataResponse`](../wiki/Interface.FileMetadataResponse)\>\>

#### Source

lc-public-api/apis/FileApi.ts:43

***

### uploadZipFile()

> **uploadZipFile**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileUploadResponse`](../wiki/Interface.FileUploadResponse)\>

Uploads an archive with source files in a .zip format, to be extracted and used at project creation.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Upload Zip File

#### Parameters

• **requestParameters**: [`UploadZipFileRequest`](../wiki/Interface.UploadZipFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileUploadResponse`](../wiki/Interface.FileUploadResponse)\>

#### Source

lc-public-api/apis/FileApi.ts:169

***

### uploadZipFileRaw()

> **uploadZipFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileUploadResponse`](../wiki/Interface.FileUploadResponse)\>\>

Uploads an archive with source files in a .zip format, to be extracted and used at project creation.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Upload Zip File

#### Parameters

• **requestParameters**: [`UploadZipFileRequest`](../wiki/Interface.UploadZipFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileUploadResponse`](../wiki/Interface.FileUploadResponse)\>\>

#### Source

lc-public-api/apis/FileApi.ts:100

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
