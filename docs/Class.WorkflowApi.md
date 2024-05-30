[Trados User Interface Extensibility v1.0.0](../wiki/globals) / WorkflowApi

# Class: WorkflowApi

## Extends

- `BaseAPI`

## Constructors

### new WorkflowApi()

> **new WorkflowApi**(`configuration`): [`WorkflowApi`](../wiki/Class.WorkflowApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`WorkflowApi`](../wiki/Class.WorkflowApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getWorkflow()

> **getWorkflow**(`requestParameters`, `initOverrides`?): `Promise`\<[`Workflow`](../wiki/Interface.Workflow)\>

Retrieves a workflow by identifier.
Get Workflow

#### Parameters

• **requestParameters**: [`GetWorkflowRequest`](../wiki/Interface.GetWorkflowRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Workflow`](../wiki/Interface.Workflow)\>

#### Source

lc-public-api/apis/WorkflowApi.ts:109

***

### getWorkflowRaw()

> **getWorkflowRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Workflow`](../wiki/Interface.Workflow)\>\>

Retrieves a workflow by identifier.
Get Workflow

#### Parameters

• **requestParameters**: [`GetWorkflowRequest`](../wiki/Interface.GetWorkflowRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Workflow`](../wiki/Interface.Workflow)\>\>

#### Source

lc-public-api/apis/WorkflowApi.ts:57

***

### listWorkflows()

> **listWorkflows**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListWorkflowsResponse`](../wiki/Interface.ListWorkflowsResponse)\>

Retrieves all the workflows in an account.
List Workflows

#### Parameters

• **requestParameters**: [`ListWorkflowsRequest`](../wiki/Interface.ListWorkflowsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListWorkflowsResponse`](../wiki/Interface.ListWorkflowsResponse)\>

#### Source

lc-public-api/apis/WorkflowApi.ts:183

***

### listWorkflowsRaw()

> **listWorkflowsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListWorkflowsResponse`](../wiki/Interface.ListWorkflowsResponse)\>\>

Retrieves all the workflows in an account.
List Workflows

#### Parameters

• **requestParameters**: [`ListWorkflowsRequest`](../wiki/Interface.ListWorkflowsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListWorkflowsResponse`](../wiki/Interface.ListWorkflowsResponse)\>\>

#### Source

lc-public-api/apis/WorkflowApi.ts:118

***

### updateWorkflow()

> **updateWorkflow**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the workflow in terms of: name, description, and task configuration (and its details). Observe the rules of [JSON Merge Patch Semantics](https://tools.ietf.org/html/rfc7386).
Update Workflow

#### Parameters

• **requestParameters**: [`UpdateWorkflowRequest`](../wiki/Interface.UpdateWorkflowRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/WorkflowApi.ts:250

***

### updateWorkflowRaw()

> **updateWorkflowRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the workflow in terms of: name, description, and task configuration (and its details). Observe the rules of [JSON Merge Patch Semantics](https://tools.ietf.org/html/rfc7386).
Update Workflow

#### Parameters

• **requestParameters**: [`UpdateWorkflowRequest`](../wiki/Interface.UpdateWorkflowRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/WorkflowApi.ts:192

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
