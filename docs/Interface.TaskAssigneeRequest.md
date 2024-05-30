[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskAssigneeRequest

# Interface: TaskAssigneeRequest

## Export

TaskAssigneeRequest

## Properties

### id?

> `optional` **id**: `string`

The identifier of the assignee that should correspond to a resource based on the “type” field. Only required for the `user`, `group`, and `vendorOrderTemplate` types.

#### Memberof

TaskAssigneeRequest

#### Source

lc-public-api/models/index.ts:7667

***

### type

> **type**: [`TaskAssigneeRequestTypeEnum`](../wiki/Type.TaskAssigneeRequestTypeEnum)

The assignee type.

#### Memberof

TaskAssigneeRequest

#### Source

lc-public-api/models/index.ts:7673
