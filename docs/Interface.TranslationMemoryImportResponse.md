[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryImportResponse

# Interface: TranslationMemoryImportResponse

## Export

TranslationMemoryImportResponse

## Properties

### id

> **id**: `string`

The unique identifier of the import operation.

#### Memberof

TranslationMemoryImportResponse

#### Source

lc-public-api/models/index.ts:10422

***

### status

> **status**: [`TranslationMemoryImportResponseStatusEnum`](../wiki/Type.TranslationMemoryImportResponseStatusEnum)

The status of the import operation.
* `queued` - the import has been queued and is waiting to be processed
* `inProgress` - the import is being processed
* `failed` - the import has failed due to internal errors
* `done` - the import has finished successfully
* `cancelled` - the import has been interrupted

#### Memberof

TranslationMemoryImportResponse

#### Source

lc-public-api/models/index.ts:10433
