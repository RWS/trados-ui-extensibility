[Trados User Interface Extensibility v1.0.0](../wiki/globals) / PricingModelApi

# Class: PricingModelApi

## Extends

- `BaseAPI`

## Constructors

### new PricingModelApi()

> **new PricingModelApi**(`configuration`): [`PricingModelApi`](../wiki/Class.PricingModelApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`PricingModelApi`](../wiki/Class.PricingModelApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getPricingModel()

> **getPricingModel**(`requestParameters`, `initOverrides`?): `Promise`\<[`PricingModel`](../wiki/Interface.PricingModel)\>

Retrieves a pricing model by identifier.
Get Pricing Model

#### Parameters

• **requestParameters**: [`GetPricingModelRequest`](../wiki/Interface.GetPricingModelRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`PricingModel`](../wiki/Interface.PricingModel)\>

#### Source

lc-public-api/apis/PricingModelApi.ts:101

***

### getPricingModelRaw()

> **getPricingModelRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`PricingModel`](../wiki/Interface.PricingModel)\>\>

Retrieves a pricing model by identifier.
Get Pricing Model

#### Parameters

• **requestParameters**: [`GetPricingModelRequest`](../wiki/Interface.GetPricingModelRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`PricingModel`](../wiki/Interface.PricingModel)\>\>

#### Source

lc-public-api/apis/PricingModelApi.ts:49

***

### listPricingModels()

> **listPricingModels**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListPricingModelsResponse`](../wiki/Interface.ListPricingModelsResponse)\>

Retrieves a list of all the pricing models in an account.
List Pricing Models

#### Parameters

• **requestParameters**: [`ListPricingModelsRequest`](../wiki/Interface.ListPricingModelsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListPricingModelsResponse`](../wiki/Interface.ListPricingModelsResponse)\>

#### Source

lc-public-api/apis/PricingModelApi.ts:175

***

### listPricingModelsRaw()

> **listPricingModelsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListPricingModelsResponse`](../wiki/Interface.ListPricingModelsResponse)\>\>

Retrieves a list of all the pricing models in an account.
List Pricing Models

#### Parameters

• **requestParameters**: [`ListPricingModelsRequest`](../wiki/Interface.ListPricingModelsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListPricingModelsResponse`](../wiki/Interface.ListPricingModelsResponse)\>\>

#### Source

lc-public-api/apis/PricingModelApi.ts:110

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
