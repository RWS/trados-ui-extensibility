[Trados User Interface Extensibility v1.0.0](../wiki/globals) / AdditionalCostLanguage

# Interface: AdditionalCostLanguage

## Export

AdditionalCostLanguage

## Properties

### conditionalCostType?

> `optional` **conditionalCostType**: [`AdditionalCostLanguageConditionalCostTypeEnum`](../wiki/Type.AdditionalCostLanguageConditionalCostTypeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:286

***

### costOperator?

> `optional` **costOperator**: [`AdditionalCostLanguageCostOperatorEnum`](../wiki/Type.AdditionalCostLanguageCostOperatorEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:292

***

### costPerUnit?

> `optional` **costPerUnit**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The cost of a unit.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:268

***

### costVariable?

> `optional` **costVariable**: [`AdditionalCostLanguageCostVariableEnum`](../wiki/Type.AdditionalCostLanguageCostVariableEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:298

***

### index?

> `optional` **index**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The number of the additional cost.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:262

***

### name

> **name**: `string`

The name of the additional cost.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:250

***

### operand?

> `optional` **operand**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Operand of the Conditional type cost.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:304

***

### serviceTypes?

> `optional` **serviceTypes**: `string`[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div> Array of task type identifiers where this additional cost is applied.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:310

***

### type

> **type**: [`AdditionalCostLanguageTypeEnum`](../wiki/Type.AdditionalCostLanguageTypeEnum)

The type of the additional cost.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:256

***

### unitCount?

> `optional` **unitCount**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The number of units for which a cost is applied.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:274

***

### volumeUnitType?

> `optional` **volumeUnitType**: [`AdditionalCostLanguageVolumeUnitTypeEnum`](../wiki/Type.AdditionalCostLanguageVolumeUnitTypeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The unit type of the 'volume' cost, used as reference for the unit cost.

#### Memberof

AdditionalCostLanguage

#### Source

lc-public-api/models/index.ts:280
