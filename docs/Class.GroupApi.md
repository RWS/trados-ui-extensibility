[Trados User Interface Extensibility v1.0.0](../wiki/globals) / GroupApi

# Class: GroupApi

## Extends

- `BaseAPI`

## Constructors

### new GroupApi()

> **new GroupApi**(`configuration`): [`GroupApi`](../wiki/Class.GroupApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`GroupApi`](../wiki/Class.GroupApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getGroup()

> **getGroup**(`requestParameters`, `initOverrides`?): `Promise`\<[`Group`](../wiki/Interface.Group)\>

Retrieves a group by identifier.
Get Group

#### Parameters

• **requestParameters**: [`GetGroupRequest`](../wiki/Interface.GetGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Group`](../wiki/Interface.Group)\>

#### Source

lc-public-api/apis/GroupApi.ts:101

***

### getGroupRaw()

> **getGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Group`](../wiki/Interface.Group)\>\>

Retrieves a group by identifier.
Get Group

#### Parameters

• **requestParameters**: [`GetGroupRequest`](../wiki/Interface.GetGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Group`](../wiki/Interface.Group)\>\>

#### Source

lc-public-api/apis/GroupApi.ts:49

***

### listGroups()

> **listGroups**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListGroupsResponse`](../wiki/Interface.ListGroupsResponse)\>

Retrieves a list of all the groups in an account.
List Groups

#### Parameters

• **requestParameters**: [`ListGroupsRequest`](../wiki/Interface.ListGroupsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListGroupsResponse`](../wiki/Interface.ListGroupsResponse)\>

#### Source

lc-public-api/apis/GroupApi.ts:175

***

### listGroupsRaw()

> **listGroupsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListGroupsResponse`](../wiki/Interface.ListGroupsResponse)\>\>

Retrieves a list of all the groups in an account.
List Groups

#### Parameters

• **requestParameters**: [`ListGroupsRequest`](../wiki/Interface.ListGroupsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListGroupsResponse`](../wiki/Interface.ListGroupsResponse)\>\>

#### Source

lc-public-api/apis/GroupApi.ts:110

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
