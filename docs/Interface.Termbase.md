[Trados User Interface Extensibility v1.0.0](../wiki/globals) / Termbase

# Interface: Termbase

The termbase.

## Export

Termbase

## Properties

### copyright?

> `optional` **copyright**: `string`

The copyright of the termbase.

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8075

***

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the termbase was created. (Not available for List Termbases endpoint) <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8105

***

### description?

> `optional` **description**: `string`

The description of the termbase.

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8069

***

### id

> **id**: `string`

The identifier of the termbase.

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8057

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the termbase was last updated. (Not available for List Termbases endpoint) <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8111

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8081

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase.</div>

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8063

***

### numberOfEntries?

> `optional` **numberOfEntries**: `number`

The number of entries included in the termbase. (Not available for List Termbases endpoint)

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8093

***

### status?

> `optional` **status**: [`TermbaseStatusEnum`](../wiki/Type.TermbaseStatusEnum)

The status of the termbase. (Not available for List Termbases endpoint)

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8099

***

### termbaseStructure?

> `optional` **termbaseStructure**: [`TermbaseStructure`](../wiki/Interface.TermbaseStructure)

#### Memberof

Termbase

#### Source

lc-public-api/models/index.ts:8087
