[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbasePollImportResponse

# Interface: TermbasePollImportResponse

The termbase poll import response.<br>
The import was successfully processed when the status is `done`.

## Export

TermbasePollImportResponse

## Properties

### id

> **id**: `string`

The unique identifier of the import operation.

#### Memberof

TermbasePollImportResponse

#### Source

lc-public-api/models/index.ts:9125

***

### status

> **status**: [`TermbasePollImportResponseStatusEnum`](../wiki/Type.TermbasePollImportResponseStatusEnum)

The status of the import operation.<br>
`queued` - The import passed the structural validation and it's waiting to be processed.<br>
`processing` - The import is in progress.<br>
`done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
`cancelled` - The import process was interrupted.<br>
`failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
`error` - The import was unsuccessful due to an internal error.

#### Memberof

TermbasePollImportResponse

#### Source

lc-public-api/models/index.ts:9137
