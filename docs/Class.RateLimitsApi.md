[Trados User Interface Extensibility v1.0.0](../wiki/globals) / RateLimitsApi

# Class: RateLimitsApi

## Extends

- `BaseAPI`

## Constructors

### new RateLimitsApi()

> **new RateLimitsApi**(`configuration`): [`RateLimitsApi`](../wiki/Class.RateLimitsApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`RateLimitsApi`](../wiki/Class.RateLimitsApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### listRateLimits()

> **listRateLimits**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListRateLimitsResponse`](../wiki/Interface.ListRateLimitsResponse)\>

Retrieves a list of all rate limits applicable for an account.
List Rate Limits

#### Parameters

• **requestParameters**: [`ListRateLimitsRequest`](../wiki/Interface.ListRateLimitsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListRateLimitsResponse`](../wiki/Interface.ListRateLimitsResponse)\>

#### Source

lc-public-api/apis/RateLimitsApi.ts:86

***

### listRateLimitsRaw()

> **listRateLimitsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListRateLimitsResponse`](../wiki/Interface.ListRateLimitsResponse)\>\>

Retrieves a list of all rate limits applicable for an account.
List Rate Limits

#### Parameters

• **requestParameters**: [`ListRateLimitsRequest`](../wiki/Interface.ListRateLimitsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListRateLimitsResponse`](../wiki/Interface.ListRateLimitsResponse)\>\>

#### Source

lc-public-api/apis/RateLimitsApi.ts:37

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
