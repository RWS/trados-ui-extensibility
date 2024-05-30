[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectGroup

# Interface: ProjectGroup

Project Group resource. (Not available for List Projects endpoint)

## Export

ProjectGroup

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the project group was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3296

***

### description?

> `optional` **description**: `string`

The project group description.

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3264

***

### id

> **id**: `string`

The project group identifier.

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3246

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the project group was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3302

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3290

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project group name.</div>

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3258

***

### projects?

> `optional` **projects**: [`ProjectGroupProject`](../wiki/Interface.ProjectGroupProject)[]

The projects in the project group.

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3284

***

### shortId?

> `optional` **shortId**: `string`

The short identifier of the project group.

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3252

***

### status?

> `optional` **status**: [`ProjectGroupStatusEnum`](../wiki/Type.ProjectGroupStatusEnum)

The status of the projects in the project group.

- `new`: the group is new created, or all projects in the group have status New

- `inProgress`: at least one project in the group is in progress

- `completed`: all projects in the group have status Completed

- `deleting`: the group is getting deleted and the projects are removing from it

#### Memberof

ProjectGroup

#### Source

lc-public-api/models/index.ts:3278
