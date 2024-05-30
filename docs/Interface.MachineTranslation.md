[Trados User Interface Extensibility v1.0.0](../wiki/globals) / MachineTranslation

# Interface: MachineTranslation

Machine translation resource.

## Export

MachineTranslation

## Properties

### id

> **id**: `string`

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2758

***

### matchingSourceLanguage

> **matchingSourceLanguage**: `string`

Specific source language supported by the model, matching the query

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2794

***

### matchingTargetLanguages

> **matchingTargetLanguages**: `string`[]

Specific target languages supported by the model, matching the query

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2800

***

### modelSourceLanguage

> **modelSourceLanguage**: `string`

Model Source language

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2782

***

### modelTargetLanguage

> **modelTargetLanguage**: `string`

Model Target language

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2788

***

### provider

> **provider**: `string`

<div style="display: inline;">Provider of the machine translation.</div>

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2764

***

### systemId?

> `optional` **systemId**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Appears if the machine translation is neural.

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2776

***

### type

> **type**: `string`

Type of the machine translation. Can be generic or neural.

#### Memberof

MachineTranslation

#### Source

lc-public-api/models/index.ts:2770
