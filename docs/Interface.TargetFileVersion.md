[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TargetFileVersion

# Interface: TargetFileVersion

Target File Version.

## Export

TargetFileVersion

## Properties

### id

> **id**: `string`

The target file version identifier.

#### Memberof

TargetFileVersion

#### Source

lc-public-api/models/index.ts:7370

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file version name. This is a synthetic value, typically constructed from the version number and the originating task name.</div>

#### Memberof

TargetFileVersion

#### Source

lc-public-api/models/index.ts:7382

***

### originatingTaskId?

> `optional` **originatingTaskId**: `string`

The identifier of the task that generated the file.

#### Memberof

TargetFileVersion

#### Source

lc-public-api/models/index.ts:7394

***

### type?

> `optional` **type**: [`TargetFileVersionTypeEnum`](../wiki/Type.TargetFileVersionTypeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div>

#### Memberof

TargetFileVersion

#### Source

lc-public-api/models/index.ts:7376

***

### version

> **version**: `number`

A numeric value, incremented for each new version.

#### Memberof

TargetFileVersion

#### Source

lc-public-api/models/index.ts:7388
