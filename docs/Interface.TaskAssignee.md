[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskAssignee

# Interface: TaskAssignee

Task assignee. Based on the "type", the following properties can be retrieved: "user", "group" or "vendorOrderTemplate". For "projectCreator" and "projectManager" no other properties are available.

## Export

TaskAssignee

## Properties

### group?

> `optional` **group**: [`Group`](../wiki/Interface.Group)

#### Memberof

TaskAssignee

#### Source

lc-public-api/models/index.ts:7635

***

### type

> **type**: [`TaskAssigneeTypeEnum`](../wiki/Type.TaskAssigneeTypeEnum)

Type "projectCreator" - reserved for future use. Should be able to handle it and ignore it if received.

#### Memberof

TaskAssignee

#### Source

lc-public-api/models/index.ts:7623

***

### user?

> `optional` **user**: [`User`](../wiki/Interface.User)

#### Memberof

TaskAssignee

#### Source

lc-public-api/models/index.ts:7629

***

### vendorOrderTemplate?

> `optional` **vendorOrderTemplate**: [`VendorOrderTemplate`](../wiki/Interface.VendorOrderTemplate)

#### Memberof

TaskAssignee

#### Source

lc-public-api/models/index.ts:7641
