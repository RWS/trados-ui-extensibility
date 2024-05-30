[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectPlanTaskConfiguration

# Interface: ProjectPlanTaskConfiguration

The configuration of a task that will be created in the future.

## Export

ProjectPlanTaskConfiguration

## Properties

### assignees?

> `optional` **assignees**: [`WorkflowTaskAssignee`](../wiki/Interface.WorkflowTaskAssignee)[]

#### Memberof

ProjectPlanTaskConfiguration

#### Source

lc-public-api/models/index.ts:3620

***

### dueBy?

> `optional` **dueBy**: `Date`

The due date of the future task. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectPlanTaskConfiguration

#### Source

lc-public-api/models/index.ts:3632

***

### isSkipped?

> `optional` **isSkipped**: `boolean`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Specifies if the task will be skipped.</div>

#### Memberof

ProjectPlanTaskConfiguration

#### Source

lc-public-api/models/index.ts:3626

***

### scope

> **scope**: [`TaskConfigurationScope`](../wiki/Interface.TaskConfigurationScope)

#### Memberof

ProjectPlanTaskConfiguration

#### Source

lc-public-api/models/index.ts:3614

***

### taskTemplate

> **taskTemplate**: [`ObjectId`](../wiki/Interface.ObjectId)

#### Memberof

ProjectPlanTaskConfiguration

#### Source

lc-public-api/models/index.ts:3608
