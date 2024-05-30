[Trados User Interface Extensibility v1.0.0](../wiki/globals) / MachineTranslationApi

# Class: MachineTranslationApi

## Extends

- `BaseAPI`

## Constructors

### new MachineTranslationApi()

> **new MachineTranslationApi**(`configuration`): [`MachineTranslationApi`](../wiki/Class.MachineTranslationApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`MachineTranslationApi`](../wiki/Class.MachineTranslationApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### listMachineTranslations()

> **listMachineTranslations**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListMachineTranslationsResponse`](../wiki/Interface.ListMachineTranslationsResponse)\>

Retrieves a list of machine translations that can be used in a translation engine.
List Machine Translations

#### Parameters

• **requestParameters**: [`ListMachineTranslationsRequest`](../wiki/Interface.ListMachineTranslationsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListMachineTranslationsResponse`](../wiki/Interface.ListMachineTranslationsResponse)\>

#### Source

lc-public-api/apis/MachineTranslationApi.ts:100

***

### listMachineTranslationsRaw()

> **listMachineTranslationsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListMachineTranslationsResponse`](../wiki/Interface.ListMachineTranslationsResponse)\>\>

Retrieves a list of machine translations that can be used in a translation engine.
List Machine Translations

#### Parameters

• **requestParameters**: [`ListMachineTranslationsRequest`](../wiki/Interface.ListMachineTranslationsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListMachineTranslationsResponse`](../wiki/Interface.ListMachineTranslationsResponse)\>\>

#### Source

lc-public-api/apis/MachineTranslationApi.ts:37

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
