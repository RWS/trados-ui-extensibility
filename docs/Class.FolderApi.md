[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FolderApi

# Class: FolderApi

## Extends

- `BaseAPI`

## Constructors

### new FolderApi()

> **new FolderApi**(`configuration`): [`FolderApi`](../wiki/Class.FolderApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`FolderApi`](../wiki/Class.FolderApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getFolder()

> **getFolder**(`requestParameters`, `initOverrides`?): `Promise`\<[`Folder`](../wiki/Interface.Folder)\>

Retrieves a folder by identifier.
Get Folder

#### Parameters

• **requestParameters**: [`GetFolderRequest`](../wiki/Interface.GetFolderRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Folder`](../wiki/Interface.Folder)\>

#### Source

lc-public-api/apis/FolderApi.ts:103

***

### getFolderRaw()

> **getFolderRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Folder`](../wiki/Interface.Folder)\>\>

Retrieves a folder by identifier.
Get Folder

#### Parameters

• **requestParameters**: [`GetFolderRequest`](../wiki/Interface.GetFolderRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Folder`](../wiki/Interface.Folder)\>\>

#### Source

lc-public-api/apis/FolderApi.ts:51

***

### getRootFolder()

> **getRootFolder**(`requestParameters`, `initOverrides`?): `Promise`\<[`Folder`](../wiki/Interface.Folder)\>

Retrieves the Root folder in the account.
Get Root Folder

#### Parameters

• **requestParameters**: [`GetRootFolderRequest`](../wiki/Interface.GetRootFolderRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Folder`](../wiki/Interface.Folder)\>

#### Source

lc-public-api/apis/FolderApi.ts:157

***

### getRootFolderRaw()

> **getRootFolderRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Folder`](../wiki/Interface.Folder)\>\>

Retrieves the Root folder in the account.
Get Root Folder

#### Parameters

• **requestParameters**: [`GetRootFolderRequest`](../wiki/Interface.GetRootFolderRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Folder`](../wiki/Interface.Folder)\>\>

#### Source

lc-public-api/apis/FolderApi.ts:112

***

### listFolders()

> **listFolders**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListFoldersResponse`](../wiki/Interface.ListFoldersResponse)\>

Retrieves a list of all the folders in an account. Max 500.
List Folders

#### Parameters

• **requestParameters**: [`ListFoldersRequest`](../wiki/Interface.ListFoldersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListFoldersResponse`](../wiki/Interface.ListFoldersResponse)\>

#### Source

lc-public-api/apis/FolderApi.ts:215

***

### listFoldersRaw()

> **listFoldersRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListFoldersResponse`](../wiki/Interface.ListFoldersResponse)\>\>

Retrieves a list of all the folders in an account. Max 500.
List Folders

#### Parameters

• **requestParameters**: [`ListFoldersRequest`](../wiki/Interface.ListFoldersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListFoldersResponse`](../wiki/Interface.ListFoldersResponse)\>\>

#### Source

lc-public-api/apis/FolderApi.ts:166

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
