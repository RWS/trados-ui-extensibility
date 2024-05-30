[Trados User Interface Extensibility v1.0.0](../wiki/globals) / AccountApi

# Class: AccountApi

## Extends

- `BaseAPI`

## Constructors

### new AccountApi()

> **new AccountApi**(`configuration`): [`AccountApi`](../wiki/Class.AccountApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`AccountApi`](../wiki/Class.AccountApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### listMyAccounts()

> **listMyAccounts**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListMyAccountsResponse`](../wiki/Interface.ListMyAccountsResponse)\>

Retrieves the accounts the authenticated user is part of.  Note: for service users only the account where the user is defined is returned.
List my Accounts

#### Parameters

• **requestParameters**: [`ListMyAccountsRequest`](../wiki/Interface.ListMyAccountsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListMyAccountsResponse`](../wiki/Interface.ListMyAccountsResponse)\>

#### Source

lc-public-api/apis/AccountApi.ts:76

***

### listMyAccountsRaw()

> **listMyAccountsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListMyAccountsResponse`](../wiki/Interface.ListMyAccountsResponse)\>\>

Retrieves the accounts the authenticated user is part of.  Note: for service users only the account where the user is defined is returned.
List my Accounts

#### Parameters

• **requestParameters**: [`ListMyAccountsRequest`](../wiki/Interface.ListMyAccountsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListMyAccountsResponse`](../wiki/Interface.ListMyAccountsResponse)\>\>

#### Source

lc-public-api/apis/AccountApi.ts:35

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
