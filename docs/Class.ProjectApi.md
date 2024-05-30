[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectApi

# Class: ProjectApi

## Extends

- `BaseAPI`

## Constructors

### new ProjectApi()

> **new ProjectApi**(`configuration`): [`ProjectApi`](../wiki/Class.ProjectApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`ProjectApi`](../wiki/Class.ProjectApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### cancelProjectFile()

> **cancelProjectFile**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Cancels a project file.
Cancel Project File

#### Parameters

• **requestParameters**: [`CancelProjectFileRequest`](../wiki/Interface.CancelProjectFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:186

***

### cancelProjectFileRaw()

> **cancelProjectFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Cancels a project file.
Cancel Project File

#### Parameters

• **requestParameters**: [`CancelProjectFileRequest`](../wiki/Interface.CancelProjectFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:131

***

### completeProject()

> **completeProject**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Marks a project as \"completed\".
Complete Project

#### Parameters

• **requestParameters**: [`CompleteProjectRequest`](../wiki/Interface.CompleteProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:242

***

### completeProjectRaw()

> **completeProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Marks a project as \"completed\".
Complete Project

#### Parameters

• **requestParameters**: [`CompleteProjectRequest`](../wiki/Interface.CompleteProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:194

***

### createProject()

> **createProject**(`requestParameters`, `initOverrides`?): `Promise`\<[`Project`](../wiki/Interface.Project)\>

Creates a new project.  When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when creating projects.  The values from a selected project template will take precedence over the individual resources when creating a new project.
Create Project

#### Parameters

• **requestParameters**: [`CreateProjectRequest`](../wiki/Interface.CreateProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Project`](../wiki/Interface.Project)\>

#### Source

lc-public-api/apis/ProjectApi.ts:305

***

### createProjectRaw()

> **createProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Project`](../wiki/Interface.Project)\>\>

Creates a new project.  When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when creating projects.  The values from a selected project template will take precedence over the individual resources when creating a new project.
Create Project

#### Parameters

• **requestParameters**: [`CreateProjectRequest`](../wiki/Interface.CreateProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Project`](../wiki/Interface.Project)\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:250

***

### deleteProject()

> **deleteProject**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a project.
Delete Project

#### Parameters

• **requestParameters**: [`DeleteProjectRequest`](../wiki/Interface.DeleteProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:362

***

### deleteProjectRaw()

> **deleteProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a project.
Delete Project

#### Parameters

• **requestParameters**: [`DeleteProjectRequest`](../wiki/Interface.DeleteProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:314

***

### getProject()

> **getProject**(`requestParameters`, `initOverrides`?): `Promise`\<[`Project`](../wiki/Interface.Project)\>

Retrieves a project by identifier.
Get Project

#### Parameters

• **requestParameters**: [`GetProjectRequest`](../wiki/Interface.GetProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Project`](../wiki/Interface.Project)\>

#### Source

lc-public-api/apis/ProjectApi.ts:422

***

### getProjectConfiguration()

> **getProjectConfiguration**(`requestParameters`, `initOverrides`?): `Promise`\<[`ProjectConfiguration`](../wiki/Interface.ProjectConfiguration)\>

Get the configuration settings of an existing project.
Get Project Configuration

#### Parameters

• **requestParameters**: [`GetProjectConfigurationRequest`](../wiki/Interface.GetProjectConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ProjectConfiguration`](../wiki/Interface.ProjectConfiguration)\>

#### Source

lc-public-api/apis/ProjectApi.ts:483

***

### getProjectConfigurationRaw()

> **getProjectConfigurationRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ProjectConfiguration`](../wiki/Interface.ProjectConfiguration)\>\>

Get the configuration settings of an existing project.
Get Project Configuration

#### Parameters

• **requestParameters**: [`GetProjectConfigurationRequest`](../wiki/Interface.GetProjectConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ProjectConfiguration`](../wiki/Interface.ProjectConfiguration)\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:431

***

### getProjectRaw()

> **getProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Project`](../wiki/Interface.Project)\>\>

Retrieves a project by identifier.
Get Project

#### Parameters

• **requestParameters**: [`GetProjectRequest`](../wiki/Interface.GetProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Project`](../wiki/Interface.Project)\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:370

***

### listProjectTasks()

> **listProjectTasks**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>

Lists the tasks of a specific project.
List Project\'s Tasks

#### Parameters

• **requestParameters**: [`ListProjectTasksRequest`](../wiki/Interface.ListProjectTasksRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>

#### Source

lc-public-api/apis/ProjectApi.ts:564

***

### listProjectTasksRaw()

> **listProjectTasksRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>\>

Lists the tasks of a specific project.
List Project\'s Tasks

#### Parameters

• **requestParameters**: [`ListProjectTasksRequest`](../wiki/Interface.ListProjectTasksRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTasksResponse`](../wiki/Interface.ListTasksResponse)\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:492

***

### listProjects()

> **listProjects**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListProjectsResponse`](../wiki/Interface.ListProjectsResponse)\>

Retrieves a list of all the projects in the account.
List Projects

#### Parameters

• **requestParameters**: [`ListProjectsRequest`](../wiki/Interface.ListProjectsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListProjectsResponse`](../wiki/Interface.ListProjectsResponse)\>

#### Source

lc-public-api/apis/ProjectApi.ts:658

***

### listProjectsRaw()

> **listProjectsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListProjectsResponse`](../wiki/Interface.ListProjectsResponse)\>\>

Retrieves a list of all the projects in the account.
List Projects

#### Parameters

• **requestParameters**: [`ListProjectsRequest`](../wiki/Interface.ListProjectsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListProjectsResponse`](../wiki/Interface.ListProjectsResponse)\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:573

***

### startProject()

> **startProject**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Starts a project. Translatable files should be uploaded before starting the project. If the action is executed on an already started project, the new translatable files should be uploaded first.
Start Project

#### Parameters

• **requestParameters**: [`StartProjectRequest`](../wiki/Interface.StartProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:715

***

### startProjectRaw()

> **startProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Starts a project. Translatable files should be uploaded before starting the project. If the action is executed on an already started project, the new translatable files should be uploaded first.
Start Project

#### Parameters

• **requestParameters**: [`StartProjectRequest`](../wiki/Interface.StartProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:667

***

### updateCustomField()

> **updateCustomField**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Allows updating individual custom fields on a project.
Update Custom Field

#### Parameters

• **requestParameters**: [`UpdateCustomFieldRequest`](../wiki/Interface.UpdateCustomFieldRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:759

***

### updateCustomFieldRaw()

> **updateCustomFieldRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Allows updating individual custom fields on a project.
Update Custom Field

#### Parameters

• **requestParameters**: [`UpdateCustomFieldRequest`](../wiki/Interface.UpdateCustomFieldRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:723

***

### updateProject()

> **updateProject**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the project in terms of: name, description, due date, quote, and project resources. Observe the rules of [JSON Merge Patch Semantics](https://tools.ietf.org/html/rfc7386).    Project rescheduling (updating dueBy) is permitted only if:  * there is no Customer Quote Approval task in the associated flow  * at least one Customer Quote Approval was closed(in case multiple project batches) 
Update Project

#### Parameters

• **requestParameters**: [`UpdateProjectRequest`](../wiki/Interface.UpdateProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:825

***

### updateProjectConfiguration()

> **updateProjectConfiguration**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the configuration settings for an existing project.
Update Project Configuration

#### Parameters

• **requestParameters**: [`UpdateProjectConfigurationRequest`](../wiki/Interface.UpdateProjectConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectApi.ts:884

***

### updateProjectConfigurationRaw()

> **updateProjectConfigurationRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the configuration settings for an existing project.
Update Project Configuration

#### Parameters

• **requestParameters**: [`UpdateProjectConfigurationRequest`](../wiki/Interface.UpdateProjectConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:833

***

### updateProjectRaw()

> **updateProjectRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the project in terms of: name, description, due date, quote, and project resources. Observe the rules of [JSON Merge Patch Semantics](https://tools.ietf.org/html/rfc7386).    Project rescheduling (updating dueBy) is permitted only if:  * there is no Customer Quote Approval task in the associated flow  * at least one Customer Quote Approval was closed(in case multiple project batches) 
Update Project

#### Parameters

• **requestParameters**: [`UpdateProjectRequest`](../wiki/Interface.UpdateProjectRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectApi.ts:767

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
