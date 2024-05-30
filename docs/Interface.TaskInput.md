[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TaskInput

# Interface: TaskInput

Task input. Based on the "type", the following fields can be retrieved: "project", "sourceFile", "targetFile".

## Export

TaskInput

## Properties

### languageDirection?

> `optional` **languageDirection**: [`LanguageDirection`](../wiki/Interface.LanguageDirection)

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7864

***

### project?

> `optional` **project**: [`Project`](../wiki/Interface.Project)

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7846

***

### sourceFile?

> `optional` **sourceFile**: [`SourceFile`](../wiki/Interface.SourceFile)

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7852

***

### targetFile?

> `optional` **targetFile**: [`TargetFile`](../wiki/Interface.TargetFile)

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7858

***

### type

> **type**: [`TaskInputTypeEnum`](../wiki/Type.TaskInputTypeEnum)

The input type.

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7840

***

### vendorOrder?

> `optional` **vendorOrder**: [`VendorOrder`](../wiki/Interface.VendorOrder)

#### Memberof

TaskInput

#### Source

lc-public-api/models/index.ts:7870
