[Trados User Interface Extensibility v1.0.0](../wiki/globals) / Folder

# Interface: Folder

Folder used for resource storage.

## Export

Folder

## Properties

### hasParent?

> `optional` **hasParent**: `boolean`

Indicates if the folder has a parent folder.

#### Memberof

Folder

#### Source

lc-public-api/models/index.ts:1495

***

### id

> **id**: `string`

The folder identifier.

#### Memberof

Folder

#### Source

lc-public-api/models/index.ts:1483

***

### ~~location?~~

> `optional` **location**: [`ResourceFolder`](../wiki/Interface.ResourceFolder)

#### Memberof

Folder

#### Deprecated

#### Source

lc-public-api/models/index.ts:1502

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the folder.</div>

#### Memberof

Folder

#### Source

lc-public-api/models/index.ts:1489

***

### path?

> `optional` **path**: [`FolderPath`](../wiki/Interface.FolderPath)[]

The hierarchical path. It consists of all the items of the path in reverse order, the parent of the current folder being the first in the list, and the root of the account being the last.

#### Memberof

Folder

#### Source

lc-public-api/models/index.ts:1508
