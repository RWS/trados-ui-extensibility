[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseImportHistoryResponse

# Interface: TermbaseImportHistoryResponse

## Export

TermbaseImportHistoryResponse

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9049

***

### elapsedTime?

> `optional` **elapsedTime**: `number`

The last modified date of the import.

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9055

***

### fileName?

> `optional` **fileName**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file name of the imported file.</div>

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9024

***

### fileSize?

> `optional` **fileSize**: `number`

The file size of the imported file.

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9030

***

### id

> **id**: `string`

The termbase import identifier.

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9018

***

### status

> **status**: [`TermbaseImportHistoryResponseStatusEnum`](../wiki/Type.TermbaseImportHistoryResponseStatusEnum)

The status of the import operation.<br>
`pending` - The import was just created and it's waiting for user input.<br>
`queued` - The import passed the structural validation and it's waiting to be processed.<br>
`processing` - The import is in progress.<br>
`done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
`cancelled` - The import process was interrupted.<br>
`failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
`error` - The import was unsuccessful due to an internal error.

#### Memberof

TermbaseImportHistoryResponse

#### Source

lc-public-api/models/index.ts:9043
