[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TargetFile

# Interface: TargetFile

Target File.

## Export

TargetFile

## Properties

### analysisStatistics?

> `optional` **analysisStatistics**: [`AnalysisStatistics`](../wiki/Interface.AnalysisStatistics)

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7267

***

### id

> **id**: `string`

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7237

***

### languageDirection?

> `optional` **languageDirection**: [`LanguageDirection`](../wiki/Interface.LanguageDirection)

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7249

***

### latestVersion?

> `optional` **latestVersion**: [`TargetFileLatestVersion`](../wiki/Interface.TargetFileLatestVersion)

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7261

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The target file name.</div>

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7243

***

### sourceFile?

> `optional` **sourceFile**: [`SourceFile`](../wiki/Interface.SourceFile)

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7255

***

### status?

> `optional` **status**: [`TargetFileStatusEnum`](../wiki/Type.TargetFileStatusEnum)

Shows if the file is still being processed (inProgress) or if it has been fully processed (finished) by the workflow. A target file is automatically marked as finished by the workflow engine, once there are no more tasks to be performed on it.

#### Memberof

TargetFile

#### Source

lc-public-api/models/index.ts:7273
