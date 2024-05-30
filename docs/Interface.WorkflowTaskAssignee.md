[Trados User Interface Extensibility v1.0.0](../wiki/globals) / WorkflowTaskAssignee

# Interface: WorkflowTaskAssignee

Task assignee. Based on the "type", further details can be retrieved. For ex. for "type"="user", "user" property is available. For "projectCreator" and "projectManager" no other property is available.

## Export

WorkflowTaskAssignee

## Properties

### group?

> `optional` **group**: [`Group`](../wiki/Interface.Group)

#### Memberof

WorkflowTaskAssignee

#### Source

lc-public-api/models/index.ts:10935

***

### type

> **type**: [`WorkflowTaskAssigneeTypeEnum`](../wiki/Type.WorkflowTaskAssigneeTypeEnum)

#### Memberof

WorkflowTaskAssignee

#### Source

lc-public-api/models/index.ts:10923

***

### user?

> `optional` **user**: [`User`](../wiki/Interface.User)

#### Memberof

WorkflowTaskAssignee

#### Source

lc-public-api/models/index.ts:10929

***

### vendorOrderTemplate?

> `optional` **vendorOrderTemplate**: [`VendorOrderTemplate`](../wiki/Interface.VendorOrderTemplate)

#### Memberof

WorkflowTaskAssignee

#### Source

lc-public-api/models/index.ts:10941
