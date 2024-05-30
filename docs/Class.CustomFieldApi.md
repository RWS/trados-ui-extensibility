[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomFieldApi

# Class: CustomFieldApi

## Extends

- `BaseAPI`

## Constructors

### new CustomFieldApi()

> **new CustomFieldApi**(`configuration`): [`CustomFieldApi`](../wiki/Class.CustomFieldApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`CustomFieldApi`](../wiki/Class.CustomFieldApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getCustomField()

> **getCustomField**(`requestParameters`, `initOverrides`?): `Promise`\<[`CustomFieldDefinition`](../wiki/Interface.CustomFieldDefinition)\>

Retrieves a Custom Field by identifier.
Get Custom Field Definition

#### Parameters

• **requestParameters**: [`GetCustomFieldRequest`](../wiki/Interface.GetCustomFieldRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`CustomFieldDefinition`](../wiki/Interface.CustomFieldDefinition)\>

#### Source

lc-public-api/apis/CustomFieldApi.ts:101

***

### getCustomFieldRaw()

> **getCustomFieldRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`CustomFieldDefinition`](../wiki/Interface.CustomFieldDefinition)\>\>

Retrieves a Custom Field by identifier.
Get Custom Field Definition

#### Parameters

• **requestParameters**: [`GetCustomFieldRequest`](../wiki/Interface.GetCustomFieldRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`CustomFieldDefinition`](../wiki/Interface.CustomFieldDefinition)\>\>

#### Source

lc-public-api/apis/CustomFieldApi.ts:49

***

### listCustomFields()

> **listCustomFields**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListCustomFieldDefinitionsResponse`](../wiki/Interface.ListCustomFieldDefinitionsResponse)\>

Retrieves a list of all the custom field definitions.
List Custom Field Definitions

#### Parameters

• **requestParameters**: [`ListCustomFieldsRequest`](../wiki/Interface.ListCustomFieldsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListCustomFieldDefinitionsResponse`](../wiki/Interface.ListCustomFieldDefinitionsResponse)\>

#### Source

lc-public-api/apis/CustomFieldApi.ts:175

***

### listCustomFieldsRaw()

> **listCustomFieldsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListCustomFieldDefinitionsResponse`](../wiki/Interface.ListCustomFieldDefinitionsResponse)\>\>

Retrieves a list of all the custom field definitions.
List Custom Field Definitions

#### Parameters

• **requestParameters**: [`ListCustomFieldsRequest`](../wiki/Interface.ListCustomFieldsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListCustomFieldDefinitionsResponse`](../wiki/Interface.ListCustomFieldDefinitionsResponse)\>\>

#### Source

lc-public-api/apis/CustomFieldApi.ts:110

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
