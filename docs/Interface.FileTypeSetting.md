[Trados User Interface Extensibility v1.0.0](../wiki/globals) / FileTypeSetting

# Interface: FileTypeSetting

## Export

FileTypeSetting

## Properties

### deprecated?

> `optional` **deprecated**: `boolean`

This file type setting is planned for deprecation and will be removed in the future.

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1332

***

### description?

> `optional` **description**: `string`

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1304

***

### enabled?

> `optional` **enabled**: `boolean`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Is this file type setting enabled. Disabled file types will not be included in operations (ex. Scan)</div>

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1316

***

### excluded?

> `optional` **excluded**: `boolean`

Is this file type setting included in the file processing configuration. 

File types will be added to a configuration as excluded = true by default and can be included by a consumer when needed (via the Language Cloud UI)

Excluded file types will not be included in operations (ex. Scan)

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1326

***

### extensions?

> `optional` **extensions**: `string`[]

A collection of extensions supported by this file type. Ex: "*.xlsx"

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1344

***

### id

> **id**: `string`

The file type setting identifier.

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1292

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file type name.</div>

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1298

***

### orderNumber?

> `optional` **orderNumber**: `number`

The order of the setting in the file type configuration.

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1338

***

### typeId?

> `optional` **typeId**: `string`

A short string representation of the file type identifier. The ID displayed in the Language Cloud UI.

#### Memberof

FileTypeSetting

#### Source

lc-public-api/models/index.ts:1310
