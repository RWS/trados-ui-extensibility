[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FolderV2

# Interface: FolderV2

Folder used for resource storage.

## Export

FolderV2

## Properties

### hasParent?

> `optional` **hasParent**: `boolean`

Indicates if the folder has a parent folder.

#### Memberof

FolderV2

#### Source

lc-public-api/models/index.ts:1564

***

### id

> **id**: `string`

The folder identifier.

#### Memberof

FolderV2

#### Source

lc-public-api/models/index.ts:1552

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the folder.</div>

#### Memberof

FolderV2

#### Source

lc-public-api/models/index.ts:1558

***

### path?

> `optional` **path**: [`FolderPath`](../wiki/Interface.FolderPath)[]

The hierarchical path. It consists of all the items of the path in reverse order, the parent of the current folder being the first in the list, and the root of the account being the last.

#### Memberof

FolderV2

#### Source

lc-public-api/models/index.ts:1570
