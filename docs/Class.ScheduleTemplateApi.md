[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ScheduleTemplateApi

# Class: ScheduleTemplateApi

## Extends

- `BaseAPI`

## Constructors

### new ScheduleTemplateApi()

> **new ScheduleTemplateApi**(`configuration`): [`ScheduleTemplateApi`](../wiki/Class.ScheduleTemplateApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`ScheduleTemplateApi`](../wiki/Class.ScheduleTemplateApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### createScheduleTemplate()

> **createScheduleTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>

Creates a new schedule template.
Create Schedule Template

#### Parameters

• **requestParameters**: [`CreateScheduleTemplateRequest`](../wiki/Interface.CreateScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:119

***

### createScheduleTemplateRaw()

> **createScheduleTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>\>

Creates a new schedule template.
Create Schedule Template

#### Parameters

• **requestParameters**: [`CreateScheduleTemplateRequest`](../wiki/Interface.CreateScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:71

***

### deleteScheduleTemplate()

> **deleteScheduleTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a schedule template.
Delete Schedule Template

#### Parameters

• **requestParameters**: [`DeleteScheduleTemplateRequest`](../wiki/Interface.DeleteScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:176

***

### deleteScheduleTemplateRaw()

> **deleteScheduleTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a schedule template.
Delete Schedule Template

#### Parameters

• **requestParameters**: [`DeleteScheduleTemplateRequest`](../wiki/Interface.DeleteScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:128

***

### getScheduleTemplate()

> **getScheduleTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>

Retrieves a schedule template by identifier.
Get Schedule Template

#### Parameters

• **requestParameters**: [`GetScheduleTemplateRequest`](../wiki/Interface.GetScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:236

***

### getScheduleTemplateRaw()

> **getScheduleTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>\>

Retrieves a schedule template by identifier.
Get Schedule Template

#### Parameters

• **requestParameters**: [`GetScheduleTemplateRequest`](../wiki/Interface.GetScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ScheduleTemplate`](../wiki/Interface.ScheduleTemplate)\>\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:184

***

### listScheduleTemplates()

> **listScheduleTemplates**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListScheduleTemplatesResponse`](../wiki/Interface.ListScheduleTemplatesResponse)\>

Retrieves a list of all the schedule templates in an account.
List Schedule Templates

#### Parameters

• **requestParameters**: [`ListScheduleTemplatesRequest`](../wiki/Interface.ListScheduleTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListScheduleTemplatesResponse`](../wiki/Interface.ListScheduleTemplatesResponse)\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:310

***

### listScheduleTemplatesRaw()

> **listScheduleTemplatesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListScheduleTemplatesResponse`](../wiki/Interface.ListScheduleTemplatesResponse)\>\>

Retrieves a list of all the schedule templates in an account.
List Schedule Templates

#### Parameters

• **requestParameters**: [`ListScheduleTemplatesRequest`](../wiki/Interface.ListScheduleTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListScheduleTemplatesResponse`](../wiki/Interface.ListScheduleTemplatesResponse)\>\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:245

***

### updateScheduleTemplate()

> **updateScheduleTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the schedule template identified by `scheduleTemplateId`.
Update Schedule Template

#### Parameters

• **requestParameters**: [`UpdateScheduleTemplateRequest`](../wiki/Interface.UpdateScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:370

***

### updateScheduleTemplateRaw()

> **updateScheduleTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the schedule template identified by `scheduleTemplateId`.
Update Schedule Template

#### Parameters

• **requestParameters**: [`UpdateScheduleTemplateRequest`](../wiki/Interface.UpdateScheduleTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ScheduleTemplateApi.ts:319

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
