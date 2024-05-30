[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskType

# Interface: TaskType

Task type.

## Export

TaskType

## Properties

### apiInternalId?

> `optional` **apiInternalId**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> Unique identifier of custom task types. Null for default task types.

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7975

***

### automatic?

> `optional` **automatic**: `boolean`

This indicates whether the task is automatic or human.

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7987

***

### description?

> `optional` **description**: `string`

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7981

***

### id

> **id**: `string`

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7957

***

### key?

> `optional` **key**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Identifier key for the task.</div>

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7963

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:8005

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div>

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7969

***

### outcomes?

> `optional` **outcomes**: [`TaskTypeOutcome`](../wiki/Interface.TaskTypeOutcome)[]

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7999

***

### scope?

> `optional` **scope**: [`TaskTypeScopeEnum`](../wiki/Type.TaskTypeScopeEnum)

The resource type scope for the task.

#### Memberof

TaskType

#### Source

lc-public-api/models/index.ts:7993
