[Trados User Interface Extensibility v1.0.0](../wiki/globals) / LanguageApi

# Class: LanguageApi

## Extends

- `BaseAPI`

## Constructors

### new LanguageApi()

> **new LanguageApi**(`configuration`): [`LanguageApi`](../wiki/Class.LanguageApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`LanguageApi`](../wiki/Class.LanguageApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### listLanguages()

> **listLanguages**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListLanguagesResponse`](../wiki/Interface.ListLanguagesResponse)\>

Retrieves a list of all the languages.  The supported values for language `type` filter are: \"all\", \"specific\" or \"neutral\".\\ The \"neutral\" languages are the generic languages, e.g.: en -> English.\\ The \"specific\" languages are the sub-languages, e.g.: en-150 -> English (Europe), en-us -> English (United States).
List Languages

#### Parameters

• **requestParameters**: [`ListLanguagesRequest`](../wiki/Interface.ListLanguagesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListLanguagesResponse`](../wiki/Interface.ListLanguagesResponse)\>

#### Source

lc-public-api/apis/LanguageApi.ts:91

***

### listLanguagesRaw()

> **listLanguagesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListLanguagesResponse`](../wiki/Interface.ListLanguagesResponse)\>\>

Retrieves a list of all the languages.  The supported values for language `type` filter are: \"all\", \"specific\" or \"neutral\".\\ The \"neutral\" languages are the generic languages, e.g.: en -> English.\\ The \"specific\" languages are the sub-languages, e.g.: en-150 -> English (Europe), en-us -> English (United States).
List Languages

#### Parameters

• **requestParameters**: [`ListLanguagesRequest`](../wiki/Interface.ListLanguagesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListLanguagesResponse`](../wiki/Interface.ListLanguagesResponse)\>\>

#### Source

lc-public-api/apis/LanguageApi.ts:38

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
