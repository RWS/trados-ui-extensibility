[Trados User Interface Extensibility v1.0.0](../wiki/globals) / LanguageProcessingApi

# Class: LanguageProcessingApi

## Extends

- `BaseAPI`

## Constructors

### new LanguageProcessingApi()

> **new LanguageProcessingApi**(`configuration`): [`LanguageProcessingApi`](../wiki/Class.LanguageProcessingApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`LanguageProcessingApi`](../wiki/Class.LanguageProcessingApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getLanguageProcessingRule()

> **getLanguageProcessingRule**(`requestParameters`, `initOverrides`?): `Promise`\<[`LanguageProcessingRule`](../wiki/Interface.LanguageProcessingRule)\>

Returns a Language Processing Rule by identifier.
Get Language Processing Rule

#### Parameters

• **requestParameters**: [`GetLanguageProcessingRuleRequest`](../wiki/Interface.GetLanguageProcessingRuleRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`LanguageProcessingRule`](../wiki/Interface.LanguageProcessingRule)\>

#### Source

lc-public-api/apis/LanguageProcessingApi.ts:101

***

### getLanguageProcessingRuleRaw()

> **getLanguageProcessingRuleRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`LanguageProcessingRule`](../wiki/Interface.LanguageProcessingRule)\>\>

Returns a Language Processing Rule by identifier.
Get Language Processing Rule

#### Parameters

• **requestParameters**: [`GetLanguageProcessingRuleRequest`](../wiki/Interface.GetLanguageProcessingRuleRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`LanguageProcessingRule`](../wiki/Interface.LanguageProcessingRule)\>\>

#### Source

lc-public-api/apis/LanguageProcessingApi.ts:49

***

### listLanguageProcessingRules()

> **listLanguageProcessingRules**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListLanguageProcessingRules`](../wiki/Interface.ListLanguageProcessingRules)\>

Returns a list of Language Processing Rules.
List Language Processing Rules

#### Parameters

• **requestParameters**: [`ListLanguageProcessingRulesRequest`](../wiki/Interface.ListLanguageProcessingRulesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListLanguageProcessingRules`](../wiki/Interface.ListLanguageProcessingRules)\>

#### Source

lc-public-api/apis/LanguageProcessingApi.ts:175

***

### listLanguageProcessingRulesRaw()

> **listLanguageProcessingRulesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListLanguageProcessingRules`](../wiki/Interface.ListLanguageProcessingRules)\>\>

Returns a list of Language Processing Rules.
List Language Processing Rules

#### Parameters

• **requestParameters**: [`ListLanguageProcessingRulesRequest`](../wiki/Interface.ListLanguageProcessingRulesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListLanguageProcessingRules`](../wiki/Interface.ListLanguageProcessingRules)\>\>

#### Source

lc-public-api/apis/LanguageProcessingApi.ts:110

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
