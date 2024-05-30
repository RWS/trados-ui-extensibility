[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryExportResponse

# Interface: TranslationMemoryExportResponse

## Export

TranslationMemoryExportResponse

## Properties

### id

> **id**: `string`

The translation memory export identifier.

#### Memberof

TranslationMemoryExportResponse

#### Source

lc-public-api/models/index.ts:10030

***

### status

> **status**: [`TranslationMemoryExportResponseStatusEnum`](../wiki/Type.TranslationMemoryExportResponseStatusEnum)

The translation memory export status.
* `queued` - the export has been queued to be processed
* `inProgress` - the export is being processed
* `failed` - the export has failed due to internal errors
* `done` - the export has finished successfully
* `cancelled` - the export has been interrupted

#### Memberof

TranslationMemoryExportResponse

#### Source

lc-public-api/models/index.ts:10041
