[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileVersion

# Interface: SourceFileVersion

Source File Version.

## Export

SourceFileVersion

## Properties

### id

> **id**: `string`

The source file version identifier.

#### Memberof

SourceFileVersion

#### Source

lc-public-api/models/index.ts:7103

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file version name. This is a synthetic value, typically constructed from the version number and the originating task name.</div>

#### Memberof

SourceFileVersion

#### Source

lc-public-api/models/index.ts:7115

***

### originatingTaskId?

> `optional` **originatingTaskId**: `string`

The identifier of the task that generated the file.

#### Memberof

SourceFileVersion

#### Source

lc-public-api/models/index.ts:7127

***

### type?

> `optional` **type**: [`SourceFileVersionTypeEnum`](../wiki/Type.SourceFileVersionTypeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div>

#### Memberof

SourceFileVersion

#### Source

lc-public-api/models/index.ts:7109

***

### version

> **version**: `number`

A numeric value, incremented for each new version.

#### Memberof

SourceFileVersion

#### Source

lc-public-api/models/index.ts:7121
