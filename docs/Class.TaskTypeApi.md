[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskTypeApi

# Class: TaskTypeApi

## Extends

- `BaseAPI`

## Constructors

### new TaskTypeApi()

> **new TaskTypeApi**(`configuration`): [`TaskTypeApi`](../wiki/Class.TaskTypeApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TaskTypeApi`](../wiki/Class.TaskTypeApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getTaskType()

> **getTaskType**(`requestParameters`, `initOverrides`?): `Promise`\<[`TaskType`](../wiki/Interface.TaskType)\>

Retrieves a task type by identifier.
Get Task Type

#### Parameters

• **requestParameters**: [`GetTaskTypeRequest`](../wiki/Interface.GetTaskTypeRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TaskType`](../wiki/Interface.TaskType)\>

#### Source

lc-public-api/apis/TaskTypeApi.ts:103

***

### getTaskTypeRaw()

> **getTaskTypeRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TaskType`](../wiki/Interface.TaskType)\>\>

Retrieves a task type by identifier.
Get Task Type

#### Parameters

• **requestParameters**: [`GetTaskTypeRequest`](../wiki/Interface.GetTaskTypeRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TaskType`](../wiki/Interface.TaskType)\>\>

#### Source

lc-public-api/apis/TaskTypeApi.ts:51

***

### listTaskTypes()

> **listTaskTypes**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTaskTypesResponse`](../wiki/Interface.ListTaskTypesResponse)\>

Retrieves all the task types in an account.
List Task Types

#### Parameters

• **requestParameters**: [`ListTaskTypesRequest`](../wiki/Interface.ListTaskTypesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTaskTypesResponse`](../wiki/Interface.ListTaskTypesResponse)\>

#### Source

lc-public-api/apis/TaskTypeApi.ts:185

***

### listTaskTypesRaw()

> **listTaskTypesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTaskTypesResponse`](../wiki/Interface.ListTaskTypesResponse)\>\>

Retrieves all the task types in an account.
List Task Types

#### Parameters

• **requestParameters**: [`ListTaskTypesRequest`](../wiki/Interface.ListTaskTypesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTaskTypesResponse`](../wiki/Interface.ListTaskTypesResponse)\>\>

#### Source

lc-public-api/apis/TaskTypeApi.ts:112

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
