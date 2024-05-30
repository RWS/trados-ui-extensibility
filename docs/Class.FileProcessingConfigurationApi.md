[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FileProcessingConfigurationApi

# Class: FileProcessingConfigurationApi

## Extends

- `BaseAPI`

## Constructors

### new FileProcessingConfigurationApi()

> **new FileProcessingConfigurationApi**(`configuration`): [`FileProcessingConfigurationApi`](../wiki/Class.FileProcessingConfigurationApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`FileProcessingConfigurationApi`](../wiki/Class.FileProcessingConfigurationApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### getFileProcessingConfiguration()

> **getFileProcessingConfiguration**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)\>

Retrieves a file processing configuration by identifier.
Get File Processing Configuration

#### Parameters

• **requestParameters**: [`GetFileProcessingConfigurationRequest`](../wiki/Interface.GetFileProcessingConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:118

***

### getFileProcessingConfigurationRaw()

> **getFileProcessingConfigurationRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)\>\>

Retrieves a file processing configuration by identifier.
Get File Processing Configuration

#### Parameters

• **requestParameters**: [`GetFileProcessingConfigurationRequest`](../wiki/Interface.GetFileProcessingConfigurationRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileProcessingConfiguration`](../wiki/Interface.FileProcessingConfiguration)\>\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:66

***

### getFileTypeSetting()

> **getFileTypeSetting**(`requestParameters`, `initOverrides`?): `Promise`\<[`FileTypeSetting`](../wiki/Interface.FileTypeSetting)\>

Retrieves a file type setting by identifier.
Get File Type Setting

#### Parameters

• **requestParameters**: [`GetFileTypeSettingRequest`](../wiki/Interface.GetFileTypeSettingRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`FileTypeSetting`](../wiki/Interface.FileTypeSetting)\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:186

***

### getFileTypeSettingRaw()

> **getFileTypeSettingRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`FileTypeSetting`](../wiki/Interface.FileTypeSetting)\>\>

Retrieves a file type setting by identifier.
Get File Type Setting

#### Parameters

• **requestParameters**: [`GetFileTypeSettingRequest`](../wiki/Interface.GetFileTypeSettingRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`FileTypeSetting`](../wiki/Interface.FileTypeSetting)\>\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:127

***

### listFileProcessingConfigurations()

> **listFileProcessingConfigurations**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListFileProcessingConfigurationsResponse`](../wiki/Interface.ListFileProcessingConfigurationsResponse)\>

Retrieves a list of all the file processing configurations in an account.
List File Processing Configurations

#### Parameters

• **requestParameters**: [`ListFileProcessingConfigurationsRequest`](../wiki/Interface.ListFileProcessingConfigurationsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListFileProcessingConfigurationsResponse`](../wiki/Interface.ListFileProcessingConfigurationsResponse)\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:260

***

### listFileProcessingConfigurationsRaw()

> **listFileProcessingConfigurationsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListFileProcessingConfigurationsResponse`](../wiki/Interface.ListFileProcessingConfigurationsResponse)\>\>

Retrieves a list of all the file processing configurations in an account.
List File Processing Configurations

#### Parameters

• **requestParameters**: [`ListFileProcessingConfigurationsRequest`](../wiki/Interface.ListFileProcessingConfigurationsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListFileProcessingConfigurationsResponse`](../wiki/Interface.ListFileProcessingConfigurationsResponse)\>\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:195

***

### listFileTypeSettings()

> **listFileTypeSettings**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListFileTypeSettingsResponse`](../wiki/Interface.ListFileTypeSettingsResponse)\>

Retrieves a list of all the file type settings in a file processing configuration.
List File Type Settings

#### Parameters

• **requestParameters**: [`ListFileTypeSettingsRequest`](../wiki/Interface.ListFileTypeSettingsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListFileTypeSettingsResponse`](../wiki/Interface.ListFileTypeSettingsResponse)\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:321

***

### listFileTypeSettingsRaw()

> **listFileTypeSettingsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListFileTypeSettingsResponse`](../wiki/Interface.ListFileTypeSettingsResponse)\>\>

Retrieves a list of all the file type settings in a file processing configuration.
List File Type Settings

#### Parameters

• **requestParameters**: [`ListFileTypeSettingsRequest`](../wiki/Interface.ListFileTypeSettingsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListFileTypeSettingsResponse`](../wiki/Interface.ListFileTypeSettingsResponse)\>\>

#### Source

lc-public-api/apis/FileProcessingConfigurationApi.ts:269

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
