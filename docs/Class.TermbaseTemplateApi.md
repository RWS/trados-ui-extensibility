[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseTemplateApi

# Class: TermbaseTemplateApi

## Extends

- `BaseAPI`

## Constructors

### new TermbaseTemplateApi()

> **new TermbaseTemplateApi**(`configuration`): [`TermbaseTemplateApi`](../wiki/Class.TermbaseTemplateApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TermbaseTemplateApi`](../wiki/Class.TermbaseTemplateApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### convertTermbaseTemplate()

> **convertTermbaseTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseStructure`](../wiki/Interface.TermbaseStructure)\>

Converts a termbase definition (XDT file) to a termbase structure that will be returned in the response.<br> The structure will not be stored in Language Cloud.
Convert XDT to Termbase Structure

#### Parameters

• **requestParameters**: [`ConvertTermbaseTemplateRequest`](../wiki/Interface.ConvertTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseStructure`](../wiki/Interface.TermbaseStructure)\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:151

***

### convertTermbaseTemplateRaw()

> **convertTermbaseTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseStructure`](../wiki/Interface.TermbaseStructure)\>\>

Converts a termbase definition (XDT file) to a termbase structure that will be returned in the response.<br> The structure will not be stored in Language Cloud.
Convert XDT to Termbase Structure

#### Parameters

• **requestParameters**: [`ConvertTermbaseTemplateRequest`](../wiki/Interface.ConvertTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseStructure`](../wiki/Interface.TermbaseStructure)\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:78

***

### createTermbaseTemplate()

> **createTermbaseTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>

Creates a new termbase template.
Create Termbase Template

#### Parameters

• **requestParameters**: [`CreateTermbaseTemplateRequest`](../wiki/Interface.CreateTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:208

***

### createTermbaseTemplateRaw()

> **createTermbaseTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>\>

Creates a new termbase template.
Create Termbase Template

#### Parameters

• **requestParameters**: [`CreateTermbaseTemplateRequest`](../wiki/Interface.CreateTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:160

***

### deleteTermbaseTemplate()

> **deleteTermbaseTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a termbase template by identifier.
Delete Termbase Template

#### Parameters

• **requestParameters**: [`DeleteTermbaseTemplateRequest`](../wiki/Interface.DeleteTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:265

***

### deleteTermbaseTemplateRaw()

> **deleteTermbaseTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a termbase template by identifier.
Delete Termbase Template

#### Parameters

• **requestParameters**: [`DeleteTermbaseTemplateRequest`](../wiki/Interface.DeleteTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:217

***

### getTermbaseTemplate()

> **getTermbaseTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>

Get a termbase template by identifier.
Get Termbase Template

#### Parameters

• **requestParameters**: [`GetTermbaseTemplateRequest`](../wiki/Interface.GetTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:325

***

### getTermbaseTemplateRaw()

> **getTermbaseTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>\>

Get a termbase template by identifier.
Get Termbase Template

#### Parameters

• **requestParameters**: [`GetTermbaseTemplateRequest`](../wiki/Interface.GetTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseTemplate`](../wiki/Interface.TermbaseTemplate)\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:273

***

### listTermbaseTemplates()

> **listTermbaseTemplates**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTermbaseTemplatesResponse`](../wiki/Interface.ListTermbaseTemplatesResponse)\>

List termbase templates.
List Termbase Templates

#### Parameters

• **requestParameters**: [`ListTermbaseTemplatesRequest`](../wiki/Interface.ListTermbaseTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTermbaseTemplatesResponse`](../wiki/Interface.ListTermbaseTemplatesResponse)\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:395

***

### listTermbaseTemplatesRaw()

> **listTermbaseTemplatesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTermbaseTemplatesResponse`](../wiki/Interface.ListTermbaseTemplatesResponse)\>\>

List termbase templates.
List Termbase Templates

#### Parameters

• **requestParameters**: [`ListTermbaseTemplatesRequest`](../wiki/Interface.ListTermbaseTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTermbaseTemplatesResponse`](../wiki/Interface.ListTermbaseTemplatesResponse)\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:334

***

### updateTermbaseTemplate()

> **updateTermbaseTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the termbase template.
Update Termbase Template

#### Parameters

• **requestParameters**: [`UpdateTermbaseTemplateRequest`](../wiki/Interface.UpdateTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:455

***

### updateTermbaseTemplateRaw()

> **updateTermbaseTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the termbase template.
Update Termbase Template

#### Parameters

• **requestParameters**: [`UpdateTermbaseTemplateRequest`](../wiki/Interface.UpdateTermbaseTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseTemplateApi.ts:404

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
