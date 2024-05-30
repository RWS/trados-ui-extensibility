[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileApi

# Class: SourceFileApi

## Extends

- `BaseAPI`

## Constructors

### new SourceFileApi()

> **new SourceFileApi**(`configuration`): [`SourceFileApi`](../wiki/Class.SourceFileApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`SourceFileApi`](../wiki/Class.SourceFileApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### addSourceFile()

> **addSourceFile**(`requestParameters`, `initOverrides`?): `Promise`\<[`SourceFile`](../wiki/Interface.SourceFile)\>

Adds a source file to the project. Files can be uploaded before starting a project or after the project has started. When adding a `translatable` file after the project started, a new start project request should be performed.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.  > Note: The maximum character size of the sum between the `name` and the `path` fields must not exceed 255. Otherwise the request cannot be validated.
Add Source File

#### Parameters

• **requestParameters**: [`AddSourceFileRequest`](../wiki/Interface.AddSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`SourceFile`](../wiki/Interface.SourceFile)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:215

***

### addSourceFileRaw()

> **addSourceFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`SourceFile`](../wiki/Interface.SourceFile)\>\>

Adds a source file to the project. Files can be uploaded before starting a project or after the project has started. When adding a `translatable` file after the project started, a new start project request should be performed.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.  > Note: The maximum character size of the sum between the `name` and the `path` fields must not exceed 255. Otherwise the request cannot be validated.
Add Source File

#### Parameters

• **requestParameters**: [`AddSourceFileRequest`](../wiki/Interface.AddSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`SourceFile`](../wiki/Interface.SourceFile)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:127

***

### addSourceFileVersion()

> **addSourceFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<[`SourceFileVersionResponse`](../wiki/Interface.SourceFileVersionResponse)\>

Adds a new version of the source file in [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) or native format. More information about file formats can be found on the [File formats](../docs/File-formats.md) page.  The version is added on the task represented by `taskId`. To successfully  execute the add operation the task should already be assigned and accepted by a user. If the task is automatic, it\'s possible to add a source file version only when the status of task is `inProgress`.  The file versions added need to respect the output file type declared by the task type of the enclosing task. On the [Rules for sequencing tasks correctly](https://docs.rws.com/791595/885137/trados-enterprise/rules-for-sequencing-tasks-correctly) page from the official RWS Documentation Center, you can find out what output file type is supported by each task.  For adding a source file version using an extension task, the configuration of the task must declare the `scope`\'s value as \"file\".  If the file type of the new added file is different than the supported source file type, the new `fileTypeSettingsId` must be specified in the body or an update of file type should be performed after the add operation, using the [Update Source File Properties](../reference/Public-API.v1.json/paths/~1tasks~1{taskId}~1source-files~1{sourceFileId}/put).  The value of `fileTypeSettingsId` is one of the identifiers listed by the [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get) endpoint.  The [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get) endpoint must be called with the File Processing Configuration identifier of your project.  The File Processing Configuration of your project can be retrieved from [Get Project](../reference/Public-API.v1.json/paths/~1projects~1{projectId}/get) endpoint.  The multipart parameters in the body should respect and strictly follow the order specified in our documentation.   Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when adding files. 
Add Source File Version

#### Parameters

• **requestParameters**: [`AddSourceFileVersionRequest`](../wiki/Interface.AddSourceFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`SourceFileVersionResponse`](../wiki/Interface.SourceFileVersionResponse)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:323

***

### addSourceFileVersionRaw()

> **addSourceFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`SourceFileVersionResponse`](../wiki/Interface.SourceFileVersionResponse)\>\>

Adds a new version of the source file in [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) or native format. More information about file formats can be found on the [File formats](../docs/File-formats.md) page.  The version is added on the task represented by `taskId`. To successfully  execute the add operation the task should already be assigned and accepted by a user. If the task is automatic, it\'s possible to add a source file version only when the status of task is `inProgress`.  The file versions added need to respect the output file type declared by the task type of the enclosing task. On the [Rules for sequencing tasks correctly](https://docs.rws.com/791595/885137/trados-enterprise/rules-for-sequencing-tasks-correctly) page from the official RWS Documentation Center, you can find out what output file type is supported by each task.  For adding a source file version using an extension task, the configuration of the task must declare the `scope`\'s value as \"file\".  If the file type of the new added file is different than the supported source file type, the new `fileTypeSettingsId` must be specified in the body or an update of file type should be performed after the add operation, using the [Update Source File Properties](../reference/Public-API.v1.json/paths/~1tasks~1{taskId}~1source-files~1{sourceFileId}/put).  The value of `fileTypeSettingsId` is one of the identifiers listed by the [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get) endpoint.  The [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get) endpoint must be called with the File Processing Configuration identifier of your project.  The File Processing Configuration of your project can be retrieved from [Get Project](../reference/Public-API.v1.json/paths/~1projects~1{projectId}/get) endpoint.  The multipart parameters in the body should respect and strictly follow the order specified in our documentation.   Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when adding files. 
Add Source File Version

#### Parameters

• **requestParameters**: [`AddSourceFileVersionRequest`](../wiki/Interface.AddSourceFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`SourceFileVersionResponse`](../wiki/Interface.SourceFileVersionResponse)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:224

***

### addSourceFiles()

> **addSourceFiles**(`requestParameters`, `initOverrides`?): `Promise`\<[`SourceFileAttachmentResponse`](../wiki/Interface.SourceFileAttachmentResponse)\>

Adds multiple source files to the project. Files must be uploaded before attaching them to a project. When a file is attached after the project was started, a new start project request should be performed.   > Note: The maximum character size of the sum between the `name` and the `path` fields must not exceed 255. Otherwise the request cannot be validated. 
Attach Source Files

#### Parameters

• **requestParameters**: [`AddSourceFilesRequest`](../wiki/Interface.AddSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`SourceFileAttachmentResponse`](../wiki/Interface.SourceFileAttachmentResponse)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:394

***

### addSourceFilesRaw()

> **addSourceFilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`SourceFileAttachmentResponse`](../wiki/Interface.SourceFileAttachmentResponse)\>\>

Adds multiple source files to the project. Files must be uploaded before attaching them to a project. When a file is attached after the project was started, a new start project request should be performed.   > Note: The maximum character size of the sum between the `name` and the `path` fields must not exceed 255. Otherwise the request cannot be validated. 
Attach Source Files

#### Parameters

• **requestParameters**: [`AddSourceFilesRequest`](../wiki/Interface.AddSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`SourceFileAttachmentResponse`](../wiki/Interface.SourceFileAttachmentResponse)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:332

***

### downloadSourceFileVersion()

> **downloadSourceFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads a source file version.
Download Source File Version

#### Parameters

• **requestParameters**: [`DownloadSourceFileVersionRequest`](../wiki/Interface.DownloadSourceFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/SourceFileApi.ts:465

***

### downloadSourceFileVersionRaw()

> **downloadSourceFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads a source file version.
Download Source File Version

#### Parameters

• **requestParameters**: [`DownloadSourceFileVersionRequest`](../wiki/Interface.DownloadSourceFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:403

***

### getSourceFile()

> **getSourceFile**(`requestParameters`, `initOverrides`?): `Promise`\<[`SourceFile`](../wiki/Interface.SourceFile)\>

Retrieves a source file from the project.
Get Source File

#### Parameters

• **requestParameters**: [`GetSourceFileRequest`](../wiki/Interface.GetSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`SourceFile`](../wiki/Interface.SourceFile)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:533

***

### getSourceFileProperties()

> **getSourceFileProperties**(`requestParameters`, `initOverrides`?): `Promise`\<[`SourceFilePropertiesResponse`](../wiki/Interface.SourceFilePropertiesResponse)\>

Retrieves the properties for a source file.
Get Source File Properties

#### Parameters

• **requestParameters**: [`GetSourceFilePropertiesRequest`](../wiki/Interface.GetSourceFilePropertiesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`SourceFilePropertiesResponse`](../wiki/Interface.SourceFilePropertiesResponse)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:597

***

### getSourceFilePropertiesRaw()

> **getSourceFilePropertiesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`SourceFilePropertiesResponse`](../wiki/Interface.SourceFilePropertiesResponse)\>\>

Retrieves the properties for a source file.
Get Source File Properties

#### Parameters

• **requestParameters**: [`GetSourceFilePropertiesRequest`](../wiki/Interface.GetSourceFilePropertiesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`SourceFilePropertiesResponse`](../wiki/Interface.SourceFilePropertiesResponse)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:542

***

### getSourceFileRaw()

> **getSourceFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`SourceFile`](../wiki/Interface.SourceFile)\>\>

Retrieves a source file from the project.
Get Source File

#### Parameters

• **requestParameters**: [`GetSourceFileRequest`](../wiki/Interface.GetSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`SourceFile`](../wiki/Interface.SourceFile)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:474

***

### listSourceFileVersions()

> **listSourceFileVersions**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListSourceFileVersionsResponse`](../wiki/Interface.ListSourceFileVersionsResponse)\>

Retrieves all the versions of a source file.
List Source File Versions

#### Parameters

• **requestParameters**: [`ListSourceFileVersionsRequest`](../wiki/Interface.ListSourceFileVersionsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListSourceFileVersionsResponse`](../wiki/Interface.ListSourceFileVersionsResponse)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:665

***

### listSourceFileVersionsRaw()

> **listSourceFileVersionsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListSourceFileVersionsResponse`](../wiki/Interface.ListSourceFileVersionsResponse)\>\>

Retrieves all the versions of a source file.
List Source File Versions

#### Parameters

• **requestParameters**: [`ListSourceFileVersionsRequest`](../wiki/Interface.ListSourceFileVersionsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListSourceFileVersionsResponse`](../wiki/Interface.ListSourceFileVersionsResponse)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:606

***

### listSourceFiles()

> **listSourceFiles**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListSourceFilesResponse`](../wiki/Interface.ListSourceFilesResponse)\>

Retrieves the source files in a project.
List Source Files

#### Parameters

• **requestParameters**: [`ListSourceFilesRequest`](../wiki/Interface.ListSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListSourceFilesResponse`](../wiki/Interface.ListSourceFilesResponse)\>

#### Source

lc-public-api/apis/SourceFileApi.ts:738

***

### listSourceFilesRaw()

> **listSourceFilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListSourceFilesResponse`](../wiki/Interface.ListSourceFilesResponse)\>\>

Retrieves the source files in a project.
List Source Files

#### Parameters

• **requestParameters**: [`ListSourceFilesRequest`](../wiki/Interface.ListSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListSourceFilesResponse`](../wiki/Interface.ListSourceFilesResponse)\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:674

***

### updateSourceFile()

> **updateSourceFile**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a source file.
Update Source File

#### Parameters

• **requestParameters**: [`UpdateSourceFileRequest`](../wiki/Interface.UpdateSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/SourceFileApi.ts:783

***

### updateSourceFileRaw()

> **updateSourceFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a source file.
Update Source File

#### Parameters

• **requestParameters**: [`UpdateSourceFileRequest`](../wiki/Interface.UpdateSourceFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:747

***

### updateSourceFiles()

> **updateSourceFiles**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates multiple source files. If any of the files fails to be updated, an error will be returned for each file. 
Update Source Files

#### Parameters

• **requestParameters**: [`UpdateSourceFilesRequest`](../wiki/Interface.UpdateSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/SourceFileApi.ts:820

***

### updateSourceFilesRaw()

> **updateSourceFilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates multiple source files. If any of the files fails to be updated, an error will be returned for each file. 
Update Source Files

#### Parameters

• **requestParameters**: [`UpdateSourceFilesRequest`](../wiki/Interface.UpdateSourceFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:791

***

### updateSourceProperties()

> **updateSourceProperties**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the properties of the source file.   The value of `fileTypeSettingsId` should be one of the identifiers listed by the [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get)  endpoint called with an identifier of a File Processing Configuration that exists on the project. The list of File Processing Configurations from a project can be retrieved by using the [List File Processing Configurations](../reference/Public-API.v1.json/paths/~1file-processing-configurations/get) endpoint.
Update Source File Properties

#### Parameters

• **requestParameters**: [`UpdateSourcePropertiesRequest`](../wiki/Interface.UpdateSourcePropertiesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/SourceFileApi.ts:886

***

### updateSourcePropertiesRaw()

> **updateSourcePropertiesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the properties of the source file.   The value of `fileTypeSettingsId` should be one of the identifiers listed by the [List File Type Settings](../reference/Public-API.v1.json/paths/~1file-processing-configurations~1{fileProcessingConfigurationId}~1file-type-settings/get)  endpoint called with an identifier of a File Processing Configuration that exists on the project. The list of File Processing Configurations from a project can be retrieved by using the [List File Processing Configurations](../reference/Public-API.v1.json/paths/~1file-processing-configurations/get) endpoint.
Update Source File Properties

#### Parameters

• **requestParameters**: [`UpdateSourcePropertiesRequest`](../wiki/Interface.UpdateSourcePropertiesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/SourceFileApi.ts:828

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
