[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectGroupCreateResponse

# Interface: ProjectGroupCreateResponse

The Project Group Create response.

## Export

ProjectGroupCreateResponse

## Properties

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the project group was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3399

***

### description?

> `optional` **description**: `string`

The project group description.

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3367

***

### id

> **id**: `string`

The project group identifier.

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3355

***

### lastModifiedAt?

> `optional` **lastModifiedAt**: `Date`

The date and time when the project group was modified. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3405

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3387

***

### name?

> `optional` **name**: `string`

The project group name.

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3361

***

### shortId?

> `optional` **shortId**: `string`

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3393

***

### status?

> `optional` **status**: [`ProjectGroupCreateResponseStatusEnum`](../wiki/Type.ProjectGroupCreateResponseStatusEnum)

The status of the projects in the project group.

- `new`: the group is newly created, or all the projects in the group have the "New" status 

- `inProgress`: at least one project in the group is in progress

- `completed`: all projects in the group have the "Completed" status 

- `deleting`: the group is being deleted and the projects will be removed

#### Memberof

ProjectGroupCreateResponse

#### Source

lc-public-api/models/index.ts:3381
