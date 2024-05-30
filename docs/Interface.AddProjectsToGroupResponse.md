[Trados User Interface Extensibility v1.0.0](../wiki/globals) / AddProjectsToGroupResponse

# Interface: AddProjectsToGroupResponse

Add Projects To Group response.

## Export

AddProjectsToGroupResponse

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the project group was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:96

***

### description?

> `optional` **description**: `string`

The project group description.

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:58

***

### id

> **id**: `string`

The project group identifier.

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:46

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the project group was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:102

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:84

***

### name?

> `optional` **name**: `string`

The project group name.

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:52

***

### projects?

> `optional` **projects**: [`ProjectGroupProject`](../wiki/Interface.ProjectGroupProject)[]

The projects in the project group.

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:78

***

### shortId?

> `optional` **shortId**: `string`

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:90

***

### status?

> `optional` **status**: [`AddProjectsToGroupResponseStatusEnum`](../wiki/Type.AddProjectsToGroupResponseStatusEnum)

The status of the projects in the project group.

- `new`: the group is new created, or all projects in the group have status New

- `inProgress`: at least one project in the group is in progress

- `completed`: all projects in the group have status Completed

- `deleting`: the group is getting deleted and the projects are removing from it

#### Memberof

AddProjectsToGroupResponse

#### Source

lc-public-api/models/index.ts:72
