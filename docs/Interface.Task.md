[Trados User Interface Extensibility v1.0.0](../wiki/globals) / Task

# Interface: Task

Task.

## Export

Task

## Properties

### applicableOutcomes?

> `optional` **applicableOutcomes**: [`TaskOutcome`](../wiki/Interface.TaskOutcome)[]

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7552

***

### assignees?

> `optional` **assignees**: [`TaskAssignee`](../wiki/Interface.TaskAssignee)[]

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7534

***

### comment?

> `optional` **comment**: `string`

The comment associated with this task at completion.

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7564

***

### completedAt?

> `optional` **completedAt**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7582

***

### createdAt?

> `optional` **createdAt**: `Date`

The date and time when the task was created.  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7546

***

### dueBy?

> `optional` **dueBy**: `Date`

The task due date. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7540

***

### failedTask?

> `optional` **failedTask**: [`FailedTask`](../wiki/Interface.FailedTask)

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7576

***

### id

> **id**: `string`

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7498

***

### input?

> `optional` **input**: [`TaskInput`](../wiki/Interface.TaskInput)

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7516

***

### inputFiles?

> `optional` **inputFiles**: [`TaskInputFile`](../wiki/Interface.TaskInputFile)[]

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7522

***

### outcome?

> `optional` **outcome**: `string`

The outcome of the task type. It is retrieved only if the task is completed. It should match one of the legal outcomes in the task type.

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7558

***

### owner?

> `optional` **owner**: [`User`](../wiki/Interface.User)

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7528

***

### project?

> `optional` **project**: [`Project`](../wiki/Interface.Project)

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7570

***

### status?

> `optional` **status**: [`TaskStatusEnum`](../wiki/Type.TaskStatusEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The task status.</div>

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7504

***

### taskType?

> `optional` **taskType**: [`TaskType`](../wiki/Interface.TaskType)

#### Memberof

Task

#### Source

lc-public-api/models/index.ts:7510
