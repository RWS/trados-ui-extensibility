[Trados User Interface Extensibility v1.0.0](../wiki/globals) / UserApi

# Class: UserApi

## Extends

- `BaseAPI`

## Constructors

### new UserApi()

> **new UserApi**(`configuration`): [`UserApi`](../wiki/Class.UserApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`UserApi`](../wiki/Class.UserApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getMyUser()

> **getMyUser**(`requestParameters`, `initOverrides`?): `Promise`\<[`User`](../wiki/Interface.User)\>

Retrieves the authenticated user.
Get my User

#### Parameters

• **requestParameters**: [`GetMyUserRequest`](../wiki/Interface.GetMyUserRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`User`](../wiki/Interface.User)\>

#### Source

lc-public-api/apis/UserApi.ts:100

***

### getMyUserRaw()

> **getMyUserRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`User`](../wiki/Interface.User)\>\>

Retrieves the authenticated user.
Get my User

#### Parameters

• **requestParameters**: [`GetMyUserRequest`](../wiki/Interface.GetMyUserRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`User`](../wiki/Interface.User)\>\>

#### Source

lc-public-api/apis/UserApi.ts:55

***

### getUser()

> **getUser**(`requestParameters`, `initOverrides`?): `Promise`\<[`User`](../wiki/Interface.User)\>

Retrieves a user by identifier.
Get User

#### Parameters

• **requestParameters**: [`GetUserRequest`](../wiki/Interface.GetUserRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`User`](../wiki/Interface.User)\>

#### Source

lc-public-api/apis/UserApi.ts:161

***

### getUserRaw()

> **getUserRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`User`](../wiki/Interface.User)\>\>

Retrieves a user by identifier.
Get User

#### Parameters

• **requestParameters**: [`GetUserRequest`](../wiki/Interface.GetUserRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`User`](../wiki/Interface.User)\>\>

#### Source

lc-public-api/apis/UserApi.ts:109

***

### listUsers()

> **listUsers**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListUsersResponse`](../wiki/Interface.ListUsersResponse)\>

Retrieves a list of all the users in an account.
List Users

#### Parameters

• **requestParameters**: [`ListUsersRequest`](../wiki/Interface.ListUsersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListUsersResponse`](../wiki/Interface.ListUsersResponse)\>

#### Source

lc-public-api/apis/UserApi.ts:235

***

### listUsersRaw()

> **listUsersRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListUsersResponse`](../wiki/Interface.ListUsersResponse)\>\>

Retrieves a list of all the users in an account.
List Users

#### Parameters

• **requestParameters**: [`ListUsersRequest`](../wiki/Interface.ListUsersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListUsersResponse`](../wiki/Interface.ListUsersResponse)\>\>

#### Source

lc-public-api/apis/UserApi.ts:170

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
