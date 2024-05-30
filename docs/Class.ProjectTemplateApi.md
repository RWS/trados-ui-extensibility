[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectTemplateApi

# Class: ProjectTemplateApi

## Extends

- `BaseAPI`

## Constructors

### new ProjectTemplateApi()

> **new ProjectTemplateApi**(`configuration`): [`ProjectTemplateApi`](../wiki/Class.ProjectTemplateApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`ProjectTemplateApi`](../wiki/Class.ProjectTemplateApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### createProjectTemplate()

> **createProjectTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>

Creates a new project template.
Create Project Template

#### Parameters

• **requestParameters**: [`CreateProjectTemplateRequest`](../wiki/Interface.CreateProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:127

***

### createProjectTemplateRaw()

> **createProjectTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>\>

Creates a new project template.
Create Project Template

#### Parameters

• **requestParameters**: [`CreateProjectTemplateRequest`](../wiki/Interface.CreateProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:72

***

### deleteProjectTemplate()

> **deleteProjectTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a project template by id.
Delete Project Template

#### Parameters

• **requestParameters**: [`DeleteProjectTemplateRequest`](../wiki/Interface.DeleteProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:184

***

### deleteProjectTemplateRaw()

> **deleteProjectTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a project template by id.
Delete Project Template

#### Parameters

• **requestParameters**: [`DeleteProjectTemplateRequest`](../wiki/Interface.DeleteProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:136

***

### getProjectTemplate()

> **getProjectTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>

Retrieves a project template by identifier.
Get Project Template

#### Parameters

• **requestParameters**: [`GetProjectTemplateRequest`](../wiki/Interface.GetProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:244

***

### getProjectTemplateRaw()

> **getProjectTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>\>

Retrieves a project template by identifier.
Get Project Template

#### Parameters

• **requestParameters**: [`GetProjectTemplateRequest`](../wiki/Interface.GetProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ProjectTemplateResponse`](../wiki/Interface.ProjectTemplateResponse)\>\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:192

***

### listProjectTemplates()

> **listProjectTemplates**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListProjectTemplatesResponse`](../wiki/Interface.ListProjectTemplatesResponse)\>

Retrieves a list of all the project templates in an account.
List Project Templates

#### Parameters

• **requestParameters**: [`ListProjectTemplatesRequest`](../wiki/Interface.ListProjectTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListProjectTemplatesResponse`](../wiki/Interface.ListProjectTemplatesResponse)\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:322

***

### listProjectTemplatesRaw()

> **listProjectTemplatesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListProjectTemplatesResponse`](../wiki/Interface.ListProjectTemplatesResponse)\>\>

Retrieves a list of all the project templates in an account.
List Project Templates

#### Parameters

• **requestParameters**: [`ListProjectTemplatesRequest`](../wiki/Interface.ListProjectTemplatesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListProjectTemplatesResponse`](../wiki/Interface.ListProjectTemplatesResponse)\>\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:253

***

### updateProjectTemplate()

> **updateProjectTemplate**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a project template by id.
Update Project Template

#### Parameters

• **requestParameters**: [`UpdateProjectTemplateRequest`](../wiki/Interface.UpdateProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:389

***

### updateProjectTemplateRaw()

> **updateProjectTemplateRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a project template by id.
Update Project Template

#### Parameters

• **requestParameters**: [`UpdateProjectTemplateRequest`](../wiki/Interface.UpdateProjectTemplateRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/ProjectTemplateApi.ts:331

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
