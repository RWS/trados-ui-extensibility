[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FileMetadataResponse

# Interface: FileMetadataResponse

## Export

FileMetadataResponse

## Properties

### associatedFiles?

> `optional` **associatedFiles**: [`FileExtractedResponse`](../wiki/Interface.FileExtractedResponse)[]

The files that were extracted from the uploaded .zip archive.

#### Memberof

FileMetadataResponse

#### Source

lc-public-api/models/index.ts:1228

***

### fileName

> **fileName**: `string`

The name of the uploaded file

#### Memberof

FileMetadataResponse

#### Source

lc-public-api/models/index.ts:1216

***

### id

> **id**: `string`

The identifier of the uploaded file

#### Memberof

FileMetadataResponse

#### Source

lc-public-api/models/index.ts:1210

***

### unzipStatus?

> `optional` **unzipStatus**: [`FileMetadataResponseUnzipStatusEnum`](../wiki/Type.FileMetadataResponseUnzipStatusEnum)

The status of the unzipping operation. You can use this to determine if your .zip file has been extracted successfully.

#### Memberof

FileMetadataResponse

#### Source

lc-public-api/models/index.ts:1222
