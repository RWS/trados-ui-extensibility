[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationEngineApi

# Class: TranslationEngineApi

## Extends

- `BaseAPI`

## Constructors

### new TranslationEngineApi()

> **new TranslationEngineApi**(`configuration`): [`TranslationEngineApi`](../wiki/Class.TranslationEngineApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TranslationEngineApi`](../wiki/Class.TranslationEngineApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getTranslationEngine()

> **getTranslationEngine**(`requestParameters`, `initOverrides`?): `Promise`\<[`TranslationEngine`](../wiki/Interface.TranslationEngine)\>

Retrieves a translation engine.
Get Translation Engine

#### Parameters

• **requestParameters**: [`GetTranslationEngineRequest`](../wiki/Interface.GetTranslationEngineRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TranslationEngine`](../wiki/Interface.TranslationEngine)\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:109

***

### getTranslationEngineRaw()

> **getTranslationEngineRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TranslationEngine`](../wiki/Interface.TranslationEngine)\>\>

Retrieves a translation engine.
Get Translation Engine

#### Parameters

• **requestParameters**: [`GetTranslationEngineRequest`](../wiki/Interface.GetTranslationEngineRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TranslationEngine`](../wiki/Interface.TranslationEngine)\>\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:57

***

### listTranslationEngines()

> **listTranslationEngines**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTranslationEnginesResponse`](../wiki/Interface.ListTranslationEnginesResponse)\>

Retrieves all the translation engines in an account.
List Translation Engines

#### Parameters

• **requestParameters**: [`ListTranslationEnginesRequest`](../wiki/Interface.ListTranslationEnginesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTranslationEnginesResponse`](../wiki/Interface.ListTranslationEnginesResponse)\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:183

***

### listTranslationEnginesRaw()

> **listTranslationEnginesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTranslationEnginesResponse`](../wiki/Interface.ListTranslationEnginesResponse)\>\>

Retrieves all the translation engines in an account.
List Translation Engines

#### Parameters

• **requestParameters**: [`ListTranslationEnginesRequest`](../wiki/Interface.ListTranslationEnginesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTranslationEnginesResponse`](../wiki/Interface.ListTranslationEnginesResponse)\>\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:118

***

### updateTranslationEngine()

> **updateTranslationEngine**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a translation engine.   It can be used to update a stand-alone translation engine or a project\'s translation engine.  The identifier of a project\'s translation engine can be retrieved only by calling [Get Project endpoint](https://sdl-language-tech.stoplight.io/docs/lcpublicapi/fd9ee0beb37ca-get-project).  Pay special attention that some properties can not be changed for a project\'s translation engine. These include: name, description, definition.languageProcessingId, and language pairs can not be added/removed from definition.languagePairDefinitions.   Pay special attention to how [updating works](https://languagecloud.sdl.com/lc/api-docs/updating-data-with-put).
Update Translation Engine

#### Parameters

• **requestParameters**: [`UpdateTranslationEngineRequest`](../wiki/Interface.UpdateTranslationEngineRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:243

***

### updateTranslationEngineRaw()

> **updateTranslationEngineRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a translation engine.   It can be used to update a stand-alone translation engine or a project\'s translation engine.  The identifier of a project\'s translation engine can be retrieved only by calling [Get Project endpoint](https://sdl-language-tech.stoplight.io/docs/lcpublicapi/fd9ee0beb37ca-get-project).  Pay special attention that some properties can not be changed for a project\'s translation engine. These include: name, description, definition.languageProcessingId, and language pairs can not be added/removed from definition.languagePairDefinitions.   Pay special attention to how [updating works](https://languagecloud.sdl.com/lc/api-docs/updating-data-with-put).
Update Translation Engine

#### Parameters

• **requestParameters**: [`UpdateTranslationEngineRequest`](../wiki/Interface.UpdateTranslationEngineRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TranslationEngineApi.ts:192

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
