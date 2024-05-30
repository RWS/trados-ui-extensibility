[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectStatusHistory

# Interface: ProjectStatusHistory

An Item which describes a change in the status of the project.

## Export

ProjectStatusHistory

## Properties

### by?

> `optional` **by**: [`User`](../wiki/Interface.User)

#### Memberof

ProjectStatusHistory

#### Source

lc-public-api/models/index.ts:3771

***

### from

> **from**: [`ProjectStatusHistoryFromEnum`](../wiki/Type.ProjectStatusHistoryFromEnum)

Specifies the project status previous to the change.

#### Memberof

ProjectStatusHistory

#### Source

lc-public-api/models/index.ts:3759

***

### timestamp?

> `optional` **timestamp**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectStatusHistory

#### Source

lc-public-api/models/index.ts:3777

***

### to

> **to**: [`ProjectStatusHistoryToEnum`](../wiki/Type.ProjectStatusHistoryToEnum)

Specifies the project status post change.

#### Memberof

ProjectStatusHistory

#### Source

lc-public-api/models/index.ts:3765
