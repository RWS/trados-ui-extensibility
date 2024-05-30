[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FileVersionExport

# Interface: FileVersionExport

File Version Export. The resulted version can be downloaded once the status is completed.

## Export

FileVersionExport

## Properties

### downloadUrl?

> `optional` **downloadUrl**: `string`

The url where the file can be downloaded.

#### Memberof

FileVersionExport

#### Source

lc-public-api/models/index.ts:1413

***

### errorMessage?

> `optional` **errorMessage**: `string`

When the status is 'failed', it contains the error message explaining what went wrong.

#### Memberof

FileVersionExport

#### Source

lc-public-api/models/index.ts:1407

***

### id

> **id**: `string`

Unique identifier for the asynchronous operation.

#### Memberof

FileVersionExport

#### Source

lc-public-api/models/index.ts:1395

***

### status

> **status**: [`FileVersionExportStatusEnum`](../wiki/Type.FileVersionExportStatusEnum)

The status of the asynchronous operation.

#### Memberof

FileVersionExport

#### Source

lc-public-api/models/index.ts:1401
