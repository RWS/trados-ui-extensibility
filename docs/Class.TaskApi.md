[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskApi

# Class: TaskApi

## Extends

- `BaseAPI`

## Constructors

### new TaskApi()

> **new TaskApi**(`configuration`): [`TaskApi`](../wiki/Class.TaskApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TaskApi`](../wiki/Class.TaskApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### acceptTask()

> **acceptTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Accepts a task. The authenticated user becomes the owner of the accepted task and can start work on it.
Accept Task

#### Parameters

• **requestParameters**: [`AcceptTaskRequest`](../wiki/Interface.AcceptTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:138

***

### acceptTaskRaw()

> **acceptTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Accepts a task. The authenticated user becomes the owner of the accepted task and can start work on it.
Accept Task

#### Parameters

• **requestParameters**: [`AcceptTaskRequest`](../wiki/Interface.AcceptTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:90

***

### assignTask()

> **assignTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Assigns a task. The task assignees will be updated.
Assign Task

#### Parameters

• **requestParameters**: [`AssignTaskRequest`](../wiki/Interface.AssignTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:204

***

### assignTaskRaw()

> **assignTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Assigns a task. The task assignees will be updated.
Assign Task

#### Parameters

• **requestParameters**: [`AssignTaskRequest`](../wiki/Interface.AssignTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:146

***

### completeTask()

> **completeTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Completes a task. The task is required to be in \"inProgress\" state and will be marked as \"completed\".
Complete Task

#### Parameters

• **requestParameters**: [`CompleteTaskRequest`](../wiki/Interface.CompleteTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:270

***

### completeTaskRaw()

> **completeTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Completes a task. The task is required to be in \"inProgress\" state and will be marked as \"completed\".
Complete Task

#### Parameters

• **requestParameters**: [`CompleteTaskRequest`](../wiki/Interface.CompleteTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:212

***

### getTask()

> **getTask**(`requestParameters`, `initOverrides`?): `Promise`\<[`Task`](../wiki/Interface.Task)\>

Retrieves a task.
Get Task

#### Parameters

• **requestParameters**: [`GetTaskRequest`](../wiki/Interface.GetTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Task`](../wiki/Interface.Task)\>

#### Source

lc-public-api/apis/TaskApi.ts:330

***

### getTaskRaw()

> **getTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Task`](../wiki/Interface.Task)\>\>

Retrieves a task.
Get Task

#### Parameters

• **requestParameters**: [`GetTaskRequest`](../wiki/Interface.GetTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Task`](../wiki/Interface.Task)\>\>

#### Source

lc-public-api/apis/TaskApi.ts:278

***

### listTasksAssignedToMe()

> **listTasksAssignedToMe**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>

Retrieves the tasks assigned to the authenticated user.
List Tasks assigned to me

#### Parameters

• **requestParameters**: [`ListTasksAssignedToMeRequest`](../wiki/Interface.ListTasksAssignedToMeRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>

#### Source

lc-public-api/apis/TaskApi.ts:408

***

### listTasksAssignedToMeRaw()

> **listTasksAssignedToMeRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>\>

Retrieves the tasks assigned to the authenticated user.
List Tasks assigned to me

#### Parameters

• **requestParameters**: [`ListTasksAssignedToMeRequest`](../wiki/Interface.ListTasksAssignedToMeRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>\>

#### Source

lc-public-api/apis/TaskApi.ts:339

***

### reclaimTask()

> **reclaimTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

The current owner of task is removed so that other assignees can accept it.  The task is not reassigned automatically.
Reclaim Task

#### Parameters

• **requestParameters**: [`ReclaimTaskRequest`](../wiki/Interface.ReclaimTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:465

***

### reclaimTaskRaw()

> **reclaimTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

The current owner of task is removed so that other assignees can accept it.  The task is not reassigned automatically.
Reclaim Task

#### Parameters

• **requestParameters**: [`ReclaimTaskRequest`](../wiki/Interface.ReclaimTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:417

***

### rejectTask()

> **rejectTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Rejects a task. The authenticated user will be removed from the task\'s list of available assignee users.
Reject Task

#### Parameters

• **requestParameters**: [`RejectTaskRequest`](../wiki/Interface.RejectTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:521

***

### rejectTaskRaw()

> **rejectTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Rejects a task. The authenticated user will be removed from the task\'s list of available assignee users.
Reject Task

#### Parameters

• **requestParameters**: [`RejectTaskRequest`](../wiki/Interface.RejectTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:473

***

### releaseTask()

> **releaseTask**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Releases the task from its owner so that other task assignees will be able to accept it.
Release Task

#### Parameters

• **requestParameters**: [`ReleaseTaskRequest`](../wiki/Interface.ReleaseTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TaskApi.ts:577

***

### releaseTaskRaw()

> **releaseTaskRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Releases the task from its owner so that other task assignees will be able to accept it.
Release Task

#### Parameters

• **requestParameters**: [`ReleaseTaskRequest`](../wiki/Interface.ReleaseTaskRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TaskApi.ts:529

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
