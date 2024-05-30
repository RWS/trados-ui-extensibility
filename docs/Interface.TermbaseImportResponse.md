[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseImportResponse

# Interface: TermbaseImportResponse

## Export

TermbaseImportResponse

## Properties

### id

> **id**: `string`

The unique identifier of the import operation.

#### Memberof

TermbaseImportResponse

#### Source

lc-public-api/models/index.ts:9084

***

### status

> **status**: [`TermbaseImportResponseStatusEnum`](../wiki/Type.TermbaseImportResponseStatusEnum)

The status of the import operation.<br>
`queued` - The import passed the structural validation and it's waiting to be processed.<br>
`processing` - The import is in progress.<br>
`done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
`cancelled` - The import process was interrupted.<br>
`failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
`error` - The import was unsuccessful due to an internal error.

#### Memberof

TermbaseImportResponse

#### Source

lc-public-api/models/index.ts:9096
