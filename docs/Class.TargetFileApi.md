[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TargetFileApi

# Class: TargetFileApi

## Extends

- `BaseAPI`

## Constructors

### new TargetFileApi()

> **new TargetFileApi**(`configuration`): [`TargetFileApi`](../wiki/Class.TargetFileApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TargetFileApi`](../wiki/Class.TargetFileApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### addTargetFileVersion()

> **addTargetFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<[`TargetFileVersionResponse`](../wiki/Interface.TargetFileVersionResponse)\>

Adds a new  version of the target file. Only the `native` and `bcm` file formats are accepted. For the `sdlxliff` files, you should use the [Import Target File endpoint](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1imports/post). More information about file formats can be found on the [File formats](../docs/File-formats.md) page. Additional details on BCM files can be found [here](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html).  The version is added on the task represented by `taskId`. To be able to execute the add operation the task should be assigned and accepted by user. If the task is automatic, it is possible to add a target file version only if the status is `inProgress`.  The added file versions need to respect the output file type declared by the task type of the enclosing task. On the [Rules for sequencing tasks correctly](https://docs.rws.com/791595/885137/trados-enterprise/rules-for-sequencing-tasks-correctly) page from the official RWS Documentation Center, you can find out what output file type is supported by each task.  For adding a target file version using an extension task, the configuration of the task type must declare the `scope`\'s value as \"file\".  The multipart parameters in the body should respect and strictly follow the order specified in our documentation.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Add Target File Version

#### Parameters

• **requestParameters**: [`AddTargetFileVersionRequest`](../wiki/Interface.AddTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TargetFileVersionResponse`](../wiki/Interface.TargetFileVersionResponse)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:246

***

### addTargetFileVersionRaw()

> **addTargetFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TargetFileVersionResponse`](../wiki/Interface.TargetFileVersionResponse)\>\>

Adds a new  version of the target file. Only the `native` and `bcm` file formats are accepted. For the `sdlxliff` files, you should use the [Import Target File endpoint](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1imports/post). More information about file formats can be found on the [File formats](../docs/File-formats.md) page. Additional details on BCM files can be found [here](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html).  The version is added on the task represented by `taskId`. To be able to execute the add operation the task should be assigned and accepted by user. If the task is automatic, it is possible to add a target file version only if the status is `inProgress`.  The added file versions need to respect the output file type declared by the task type of the enclosing task. On the [Rules for sequencing tasks correctly](https://docs.rws.com/791595/885137/trados-enterprise/rules-for-sequencing-tasks-correctly) page from the official RWS Documentation Center, you can find out what output file type is supported by each task.  For adding a target file version using an extension task, the configuration of the task type must declare the `scope`\'s value as \"file\".  The multipart parameters in the body should respect and strictly follow the order specified in our documentation.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Add Target File Version

#### Parameters

• **requestParameters**: [`AddTargetFileVersionRequest`](../wiki/Interface.AddTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TargetFileVersionResponse`](../wiki/Interface.TargetFileVersionResponse)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:147

***

### downloadExportedTargetFileVersion()

> **downloadExportedTargetFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads a completed target file version via an export operation.
Download Exported Target File Version

#### Parameters

• **requestParameters**: [`DownloadExportedTargetFileVersionRequest`](../wiki/Interface.DownloadExportedTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TargetFileApi.ts:324

***

### downloadExportedTargetFileVersionRaw()

> **downloadExportedTargetFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads a completed target file version via an export operation.
Download Exported Target File Version

#### Parameters

• **requestParameters**: [`DownloadExportedTargetFileVersionRequest`](../wiki/Interface.DownloadExportedTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:255

***

### downloadFileVersion()

> **downloadFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<`Blob`\>

Downloads the file version (native or BCM).   If the `fileVersionId` path parameter represents a native file version, the native file will be downloaded. If the `fileVersionId` is an identifier of a version in [BCM format](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html), the BCM file will be downloaded.
Download Target File Version

#### Parameters

• **requestParameters**: [`DownloadFileVersionRequest`](../wiki/Interface.DownloadFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`Blob`\>

#### Source

lc-public-api/apis/TargetFileApi.ts:395

***

### downloadFileVersionRaw()

> **downloadFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`Blob`\>\>

Downloads the file version (native or BCM).   If the `fileVersionId` path parameter represents a native file version, the native file will be downloaded. If the `fileVersionId` is an identifier of a version in [BCM format](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html), the BCM file will be downloaded.
Download Target File Version

#### Parameters

• **requestParameters**: [`DownloadFileVersionRequest`](../wiki/Interface.DownloadFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`Blob`\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:333

***

### exportTargetFileVersion()

> **exportTargetFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>

Generates an asynchronous export operation. Use the [Get Target File Version Export](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1{fileVersionId}~1exports~1{exportId}/get) endpoint to poll until the export is completed. Used only for [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) file versions.  This operation triggers a conversion of the BCM target file version in a native or SDLXLIFF format, based on the value of the `format` query parameter used.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Export Target File Version

#### Parameters

• **requestParameters**: [`ExportTargetFileVersionRequest`](../wiki/Interface.ExportTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:470

***

### exportTargetFileVersionRaw()

> **exportTargetFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>\>

Generates an asynchronous export operation. Use the [Get Target File Version Export](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1{fileVersionId}~1exports~1{exportId}/get) endpoint to poll until the export is completed. Used only for [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) file versions.  This operation triggers a conversion of the BCM target file version in a native or SDLXLIFF format, based on the value of the `format` query parameter used.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Export Target File Version

#### Parameters

• **requestParameters**: [`ExportTargetFileVersionRequest`](../wiki/Interface.ExportTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:404

***

### getTargetFile()

> **getTargetFile**(`requestParameters`, `initOverrides`?): `Promise`\<[`TargetFile`](../wiki/Interface.TargetFile)\>

Retrieves a target file from a project.
Get Target File

#### Parameters

• **requestParameters**: [`GetTargetFileRequest`](../wiki/Interface.GetTargetFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TargetFile`](../wiki/Interface.TargetFile)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:538

***

### getTargetFileRaw()

> **getTargetFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TargetFile`](../wiki/Interface.TargetFile)\>\>

Retrieves a target file from a project.
Get Target File

#### Parameters

• **requestParameters**: [`GetTargetFileRequest`](../wiki/Interface.GetTargetFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TargetFile`](../wiki/Interface.TargetFile)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:479

***

### getTargetFileVersion()

> **getTargetFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<[`TargetFileVersion`](../wiki/Interface.TargetFileVersion)\>

Retrieves one version of a target file.
Get Target File Version

#### Parameters

• **requestParameters**: [`GetTargetFileVersionRequest`](../wiki/Interface.GetTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TargetFileVersion`](../wiki/Interface.TargetFileVersion)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:613

***

### getTargetFileVersionRaw()

> **getTargetFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TargetFileVersion`](../wiki/Interface.TargetFileVersion)\>\>

Retrieves one version of a target file.
Get Target File Version

#### Parameters

• **requestParameters**: [`GetTargetFileVersionRequest`](../wiki/Interface.GetTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TargetFileVersion`](../wiki/Interface.TargetFileVersion)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:547

***

### importTargetFileVersion()

> **importTargetFileVersion**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>

Generates an asynchronous import operation. Use [Poll Target File Version Import endpoint](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1imports~1{importId}/get) to poll until the import is completed. Only `sdlxliff` files can be imported.  Import should be used when a file is downloaded as an `sdlxliff`, processed and then, replaced.  The import operation triggers internally the update of the [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) file associated with the imported file. It should mostly be used for offline work.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Import Target File Version

#### Parameters

• **requestParameters**: [`ImportTargetFileVersionRequest`](../wiki/Interface.ImportTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:705

***

### importTargetFileVersionRaw()

> **importTargetFileVersionRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>\>

Generates an asynchronous import operation. Use [Poll Target File Version Import endpoint](../reference/Public-API.v1.json/paths/~1projects~1{projectId}~1target-files~1{targetFileId}~1versions~1imports~1{importId}/get) to poll until the import is completed. Only `sdlxliff` files can be imported.  Import should be used when a file is downloaded as an `sdlxliff`, processed and then, replaced.  The import operation triggers internally the update of the [BCM](https://developers.rws.com/languagecloud-api-docs/articles/BCM.NET_client_API.html) file associated with the imported file. It should mostly be used for offline work.  Consider the [file and project size limit](https://docs.rws.com/791595/815967/trados-enterprise---accelerate/file-and-project-size-limit) when uploading files.
Import Target File Version

#### Parameters

• **requestParameters**: [`ImportTargetFileVersionRequest`](../wiki/Interface.ImportTargetFileVersionRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:622

***

### listTargetFileVersions()

> **listTargetFileVersions**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTargetFileVersionsResponse`](../wiki/Interface.ListTargetFileVersionsResponse)\>

Retrieves the versions of a target file.
List Target File Versions

#### Parameters

• **requestParameters**: [`ListTargetFileVersionsRequest`](../wiki/Interface.ListTargetFileVersionsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTargetFileVersionsResponse`](../wiki/Interface.ListTargetFileVersionsResponse)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:773

***

### listTargetFileVersionsRaw()

> **listTargetFileVersionsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTargetFileVersionsResponse`](../wiki/Interface.ListTargetFileVersionsResponse)\>\>

Retrieves the versions of a target file.
List Target File Versions

#### Parameters

• **requestParameters**: [`ListTargetFileVersionsRequest`](../wiki/Interface.ListTargetFileVersionsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTargetFileVersionsResponse`](../wiki/Interface.ListTargetFileVersionsResponse)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:714

***

### listTargetFiles()

> **listTargetFiles**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTargetFilesResponse`](../wiki/Interface.ListTargetFilesResponse)\>

Retrieves the target files for a project.
List Target Files

#### Parameters

• **requestParameters**: [`ListTargetFilesRequest`](../wiki/Interface.ListTargetFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTargetFilesResponse`](../wiki/Interface.ListTargetFilesResponse)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:850

***

### listTargetFilesRaw()

> **listTargetFilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTargetFilesResponse`](../wiki/Interface.ListTargetFilesResponse)\>\>

Retrieves the target files for a project.
List Target Files

#### Parameters

• **requestParameters**: [`ListTargetFilesRequest`](../wiki/Interface.ListTargetFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTargetFilesResponse`](../wiki/Interface.ListTargetFilesResponse)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:782

***

### pollTargetFileVersionExport()

> **pollTargetFileVersionExport**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>

Polls a target file version via an export operation. The new version can be downloaded once the status is \"completed\".
Poll Target File Version Export

#### Parameters

• **requestParameters**: [`PollTargetFileVersionExportRequest`](../wiki/Interface.PollTargetFileVersionExportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:928

***

### pollTargetFileVersionExportRaw()

> **pollTargetFileVersionExportRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>\>

Polls a target file version via an export operation. The new version can be downloaded once the status is \"completed\".
Poll Target File Version Export

#### Parameters

• **requestParameters**: [`PollTargetFileVersionExportRequest`](../wiki/Interface.PollTargetFileVersionExportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileVersionExport`](../wiki/Interface.FileVersionExport)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:859

***

### pollTargetFileVersionImport()

> **pollTargetFileVersionImport**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>

Polls a target file version via an import operation. The new version can be seen on the file versions once the status is \"completed\".
Poll Target File Version Import

#### Parameters

• **requestParameters**: [`PollTargetFileVersionImportRequest`](../wiki/Interface.PollTargetFileVersionImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>

#### Source

lc-public-api/apis/TargetFileApi.ts:999

***

### pollTargetFileVersionImportRaw()

> **pollTargetFileVersionImportRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>\>

Polls a target file version via an import operation. The new version can be seen on the file versions once the status is \"completed\".
Poll Target File Version Import

#### Parameters

• **requestParameters**: [`PollTargetFileVersionImportRequest`](../wiki/Interface.PollTargetFileVersionImportRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileVersionImport`](../wiki/Interface.FileVersionImport)\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:937

***

### updateTargetFile()

> **updateTargetFile**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a target file.
Update Target File

#### Parameters

• **requestParameters**: [`UpdateTargetFileRequest`](../wiki/Interface.UpdateTargetFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TargetFileApi.ts:1044

***

### updateTargetFileRaw()

> **updateTargetFileRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a target file.
Update Target File

#### Parameters

• **requestParameters**: [`UpdateTargetFileRequest`](../wiki/Interface.UpdateTargetFileRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:1008

***

### updateTargetFiles()

> **updateTargetFiles**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates multiple target files. If any of the files fails to be updated, an error will be returned for each file. 
Update Target Files

#### Parameters

• **requestParameters**: [`UpdateTargetFilesRequest`](../wiki/Interface.UpdateTargetFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TargetFileApi.ts:1081

***

### updateTargetFilesRaw()

> **updateTargetFilesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates multiple target files. If any of the files fails to be updated, an error will be returned for each file. 
Update Target Files

#### Parameters

• **requestParameters**: [`UpdateTargetFilesRequest`](../wiki/Interface.UpdateTargetFilesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TargetFileApi.ts:1052

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
