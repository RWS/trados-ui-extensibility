[Trados User Interface Extensibility v1.0.0](../wiki/globals) / PublicKeysApi

# Class: PublicKeysApi

## Extends

- `BaseAPI`

## Constructors

### new PublicKeysApi()

> **new PublicKeysApi**(`configuration`): [`PublicKeysApi`](../wiki/Class.PublicKeysApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`PublicKeysApi`](../wiki/Class.PublicKeysApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getPublicKey()

> **getPublicKey**(`requestParameters`, `initOverrides`?): `Promise`\<[`Jwk`](../wiki/Interface.Jwk)\>

Retrieves a public key by it\'s identifier.
Get Public Key

#### Parameters

• **requestParameters**: [`GetPublicKeyRequest`](../wiki/Interface.GetPublicKeyRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Jwk`](../wiki/Interface.Jwk)\>

#### Source

lc-public-api/apis/PublicKeysApi.ts:60

***

### getPublicKeyRaw()

> **getPublicKeyRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Jwk`](../wiki/Interface.Jwk)\>\>

Retrieves a public key by it\'s identifier.
Get Public Key

#### Parameters

• **requestParameters**: [`GetPublicKeyRequest`](../wiki/Interface.GetPublicKeyRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Jwk`](../wiki/Interface.Jwk)\>\>

#### Source

lc-public-api/apis/PublicKeysApi.ts:34

***

### listPublicKeys()

> **listPublicKeys**(`initOverrides`?): `Promise`\<[`Jwk`](../wiki/Interface.Jwk)[]\>

List all available Public Keys.
List Public Keys

#### Parameters

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Jwk`](../wiki/Interface.Jwk)[]\>

#### Source

lc-public-api/apis/PublicKeysApi.ts:88

***

### listPublicKeysRaw()

> **listPublicKeysRaw**(`initOverrides`?): `Promise`\<`ApiResponse`\<[`Jwk`](../wiki/Interface.Jwk)[]\>\>

List all available Public Keys.
List Public Keys

#### Parameters

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Jwk`](../wiki/Interface.Jwk)[]\>\>

#### Source

lc-public-api/apis/PublicKeysApi.ts:69

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
