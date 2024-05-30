[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TQAProfileApi

# Class: TQAProfileApi

## Extends

- `BaseAPI`

## Constructors

### new TQAProfileApi()

> **new TQAProfileApi**(`configuration`): [`TQAProfileApi`](../wiki/Class.TQAProfileApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TQAProfileApi`](../wiki/Class.TQAProfileApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getTqaProfile()

> **getTqaProfile**(`requestParameters`, `initOverrides`?): `Promise`\<[`TqaProfile`](../wiki/Interface.TqaProfile)\>

Get a TQA Profile By identifier.
Get TQA Profile

#### Parameters

• **requestParameters**: [`GetTqaProfileRequest`](../wiki/Interface.GetTqaProfileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TqaProfile`](../wiki/Interface.TqaProfile)\>

#### Source

lc-public-api/apis/TQAProfileApi.ts:101

***

### getTqaProfileRaw()

> **getTqaProfileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TqaProfile`](../wiki/Interface.TqaProfile)\>\>

Get a TQA Profile By identifier.
Get TQA Profile

#### Parameters

• **requestParameters**: [`GetTqaProfileRequest`](../wiki/Interface.GetTqaProfileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TqaProfile`](../wiki/Interface.TqaProfile)\>\>

#### Source

lc-public-api/apis/TQAProfileApi.ts:49

***

### listTqaProfiles()

> **listTqaProfiles**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTqaProfilesResponse`](../wiki/Interface.ListTqaProfilesResponse)\>

List TQA Profiles.
List TQA Profiles

#### Parameters

• **requestParameters**: [`ListTqaProfilesRequest`](../wiki/Interface.ListTqaProfilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTqaProfilesResponse`](../wiki/Interface.ListTqaProfilesResponse)\>

#### Source

lc-public-api/apis/TQAProfileApi.ts:175

***

### listTqaProfilesRaw()

> **listTqaProfilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTqaProfilesResponse`](../wiki/Interface.ListTqaProfilesResponse)\>\>

List TQA Profiles.
List TQA Profiles

#### Parameters

• **requestParameters**: [`ListTqaProfilesRequest`](../wiki/Interface.ListTqaProfilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTqaProfilesResponse`](../wiki/Interface.ListTqaProfilesResponse)\>\>

#### Source

lc-public-api/apis/TQAProfileApi.ts:110

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
