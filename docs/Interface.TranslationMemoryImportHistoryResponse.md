[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TranslationMemoryImportHistoryResponse

# Interface: TranslationMemoryImportHistoryResponse

## Export

TranslationMemoryImportHistoryResponse

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The creation date of the import operation. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10291

***

### displayName?

> `optional` **displayName**: `string`

The assigned name of the import operation.

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10279

***

### id

> **id**: `string`

The unique identifier of the import operation.

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10262

***

### ownerId?

> `optional` **ownerId**: `string`

Owner of the import operation, corresponds with the tenant identifier.

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10303

***

### settings?

> `optional` **settings**: [`TranslationMemoryImportSettings`](../wiki/Interface.TranslationMemoryImportSettings)

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10285

***

### status

> **status**: [`TranslationMemoryImportHistoryResponseStatusEnum`](../wiki/Type.TranslationMemoryImportHistoryResponseStatusEnum)

The status of the import operation.
* `queued` - the import has been queued
* `inPorgress` - the import is being processed
* `failed` - the import has failed
* `done` - the import has finished successfully
* `cancelled` - the import has been cancelled

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10273

***

### updatedAt?

> `optional` **updatedAt**: `Date`

The last update time of the import operation.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

TranslationMemoryImportHistoryResponse

#### Source

lc-public-api/models/index.ts:10297
