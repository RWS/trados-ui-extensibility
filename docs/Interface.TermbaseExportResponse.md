[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseExportResponse

# Interface: TermbaseExportResponse

## Export

TermbaseExportResponse

## Properties

### downloadUrl?

> `optional` **downloadUrl**: `string`

The url where the file can be downloaded.

#### Memberof

TermbaseExportResponse

#### Source

lc-public-api/models/index.ts:8507

***

### errorMessage?

> `optional` **errorMessage**: `string`

When status is 'error', contains the error message explaining what went wrong.

#### Memberof

TermbaseExportResponse

#### Source

lc-public-api/models/index.ts:8501

***

### id

> **id**: `string`

The termbase export identifier.

#### Memberof

TermbaseExportResponse

#### Source

lc-public-api/models/index.ts:8484

***

### status

> **status**: [`TermbaseExportResponseStatusEnum`](../wiki/Type.TermbaseExportResponseStatusEnum)

The status of the export operation.<br>
`queued` - The export passed the structural validation and it's waiting to be processed.<br>
`processing` - The export is in progress.<br>
`done` - The export was successfully processed .<br>
`cancelled` - The export process was interrupted.<br>
`error` - The export was unsuccessful due to an internal error.

#### Memberof

TermbaseExportResponse

#### Source

lc-public-api/models/index.ts:8495
