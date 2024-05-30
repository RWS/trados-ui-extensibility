[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectGroupApi

# Class: ProjectGroupApi

## Extends

- `BaseAPI`

## Constructors

### new ProjectGroupApi()

> **new ProjectGroupApi**(`configuration`): [`ProjectGroupApi`](../wiki/Class.ProjectGroupApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`ProjectGroupApi`](../wiki/Class.ProjectGroupApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### addProjectsToGroup()

> **addProjectsToGroup**(`requestParameters`, `initOverrides`?): `Promise`\<[`AddProjectsToGroupResponse`](../wiki/Interface.AddProjectsToGroupResponse)\>

Adds projects to the project group.  The projects are not added instantly. To check the status use the [Get Project Group](../reference/Public-API.v1.json/paths/~1project-groups~1{projectGroupId}/get) endpoint.
Add Projects To Group

#### Parameters

• **requestParameters**: [`AddProjectsToGroupOperationRequest`](../wiki/Interface.AddProjectsToGroupOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`AddProjectsToGroupResponse`](../wiki/Interface.AddProjectsToGroupResponse)\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:151

***

### addProjectsToGroupRaw()

> **addProjectsToGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`AddProjectsToGroupResponse`](../wiki/Interface.AddProjectsToGroupResponse)\>\>

Adds projects to the project group.  The projects are not added instantly. To check the status use the [Get Project Group](../reference/Public-API.v1.json/paths/~1project-groups~1{projectGroupId}/get) endpoint.
Add Projects To Group

#### Parameters

• **requestParameters**: [`AddProjectsToGroupOperationRequest`](../wiki/Interface.AddProjectsToGroupOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`AddProjectsToGroupResponse`](../wiki/Interface.AddProjectsToGroupResponse)\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:89

***

### createProjectGroup()

> **createProjectGroup**(`requestParameters`, `initOverrides`?): `Promise`\<[`ProjectGroupCreateResponse`](../wiki/Interface.ProjectGroupCreateResponse)\>

Creates a new project group.
Create Project Group

#### Parameters

• **requestParameters**: [`CreateProjectGroupRequest`](../wiki/Interface.CreateProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ProjectGroupCreateResponse`](../wiki/Interface.ProjectGroupCreateResponse)\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:215

***

### createProjectGroupRaw()

> **createProjectGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ProjectGroupCreateResponse`](../wiki/Interface.ProjectGroupCreateResponse)\>\>

Creates a new project group.
Create Project Group

#### Parameters

• **requestParameters**: [`CreateProjectGroupRequest`](../wiki/Interface.CreateProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ProjectGroupCreateResponse`](../wiki/Interface.ProjectGroupCreateResponse)\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:160

***

### deleteProjectGroup()

> **deleteProjectGroup**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a project group.
Delete Project Group

#### Parameters

• **requestParameters**: [`DeleteProjectGroupRequest`](../wiki/Interface.DeleteProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:272

***

### deleteProjectGroupRaw()

> **deleteProjectGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a project group.
Delete Project Group

#### Parameters

• **requestParameters**: [`DeleteProjectGroupRequest`](../wiki/Interface.DeleteProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:224

***

### getProjectGroup()

> **getProjectGroup**(`requestParameters`, `initOverrides`?): `Promise`\<[`ProjectGroup`](../wiki/Interface.ProjectGroup)\>

Retrieves a project group by identifier.
Get Project Group

#### Parameters

• **requestParameters**: [`GetProjectGroupRequest`](../wiki/Interface.GetProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ProjectGroup`](../wiki/Interface.ProjectGroup)\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:332

***

### getProjectGroupRaw()

> **getProjectGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ProjectGroup`](../wiki/Interface.ProjectGroup)\>\>

Retrieves a project group by identifier.
Get Project Group

#### Parameters

• **requestParameters**: [`GetProjectGroupRequest`](../wiki/Interface.GetProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ProjectGroup`](../wiki/Interface.ProjectGroup)\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:280

***

### listProjectGroups()

> **listProjectGroups**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListProjectGroupsResponse`](../wiki/Interface.ListProjectGroupsResponse)\>

Retrieves a list of all the project groups in an account.
List Project Groups

#### Parameters

• **requestParameters**: [`ListProjectGroupsRequest`](../wiki/Interface.ListProjectGroupsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListProjectGroupsResponse`](../wiki/Interface.ListProjectGroupsResponse)\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:402

***

### listProjectGroupsRaw()

> **listProjectGroupsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListProjectGroupsResponse`](../wiki/Interface.ListProjectGroupsResponse)\>\>

Retrieves a list of all the project groups in an account.
List Project Groups

#### Parameters

• **requestParameters**: [`ListProjectGroupsRequest`](../wiki/Interface.ListProjectGroupsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListProjectGroupsResponse`](../wiki/Interface.ListProjectGroupsResponse)\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:341

***

### removeProjectsFromGroup()

> **removeProjectsFromGroup**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Removes projects from the project group.  The projects are not removed instantly. To check the status use the [Get Project Group](../reference/Public-API.v1.json/paths/~1project-groups~1{projectGroupId}/get) endpoint.
Remove Projects From Group

#### Parameters

• **requestParameters**: [`RemoveProjectsFromGroupOperationRequest`](../wiki/Interface.RemoveProjectsFromGroupOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:462

***

### removeProjectsFromGroupRaw()

> **removeProjectsFromGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Removes projects from the project group.  The projects are not removed instantly. To check the status use the [Get Project Group](../reference/Public-API.v1.json/paths/~1project-groups~1{projectGroupId}/get) endpoint.
Remove Projects From Group

#### Parameters

• **requestParameters**: [`RemoveProjectsFromGroupOperationRequest`](../wiki/Interface.RemoveProjectsFromGroupOperationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:411

***

### updateProjectGroup()

> **updateProjectGroup**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the project group.
Update Project Group

#### Parameters

• **requestParameters**: [`UpdateProjectGroupRequest`](../wiki/Interface.UpdateProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:528

***

### updateProjectGroupRaw()

> **updateProjectGroupRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the project group.
Update Project Group

#### Parameters

• **requestParameters**: [`UpdateProjectGroupRequest`](../wiki/Interface.UpdateProjectGroupRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectGroupApi.ts:470

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
