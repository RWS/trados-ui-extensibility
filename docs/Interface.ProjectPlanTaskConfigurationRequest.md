[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectPlanTaskConfigurationRequest

# Interface: ProjectPlanTaskConfigurationRequest

A project plan task configuration request. Used to update a task that will be created in the future.

## Export

ProjectPlanTaskConfigurationRequest

## Properties

### assignees

> **assignees**: [`ProjectPlanTaskAssigneeRequest`](../wiki/Interface.ProjectPlanTaskAssigneeRequest)[]

Specifies the list of assignees for the future task. When the 'isSkipped' field is set to 'true', an empty list of assignees should be specified.

#### Memberof

ProjectPlanTaskConfigurationRequest

#### Source

lc-public-api/models/index.ts:3658

***

### dueBy?

> `optional` **dueBy**: `Date`

UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"

#### Memberof

ProjectPlanTaskConfigurationRequest

#### Source

lc-public-api/models/index.ts:3670

***

### isSkipped

> **isSkipped**: `boolean`

Specifies if the task will be skipped. 
If you want to skip all the target languages for the given task, set the scope as "global".

#### Memberof

ProjectPlanTaskConfigurationRequest

#### Source

lc-public-api/models/index.ts:3652

***

### scope

> **scope**: [`TaskConfigurationScopeRequest`](../wiki/Interface.TaskConfigurationScopeRequest)

#### Memberof

ProjectPlanTaskConfigurationRequest

#### Source

lc-public-api/models/index.ts:3664

***

### taskTemplate

> **taskTemplate**: [`ObjectIdRequest`](../wiki/Interface.ObjectIdRequest)

#### Memberof

ProjectPlanTaskConfigurationRequest

#### Source

lc-public-api/models/index.ts:3645
