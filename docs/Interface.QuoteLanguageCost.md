[Trados User Interface Extensibility v1.0.0](../wiki/globals) / QuoteLanguageCost

# Interface: QuoteLanguageCost

Fees relevant for a specific target language.

## Export

QuoteLanguageCost

## Properties

### conditionalCostOperator?

> `optional` **conditionalCostOperator**: [`QuoteLanguageCostConditionalCostOperatorEnum`](../wiki/Type.QuoteLanguageCostConditionalCostOperatorEnum)

The operator applied between the 'costVariable' and 'operand'.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6092

***

### conditionalCostThreshold?

> `optional` **conditionalCostThreshold**: `number`

The value that is evaluated against the 'costVariable' based on the 'costOperator'.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6104

***

### conditionalCostType?

> `optional` **conditionalCostType**: [`QuoteLanguageCostConditionalCostTypeEnum`](../wiki/Type.QuoteLanguageCostConditionalCostTypeEnum)

The condition type of the conditional cost.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6086

***

### conditionalCostVariable?

> `optional` **conditionalCostVariable**: [`QuoteLanguageCostConditionalCostVariableEnum`](../wiki/Type.QuoteLanguageCostConditionalCostVariableEnum)

The variable that is evaluated against the 'operand' based on the 'costOperator'.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6098

***

### cost?

> `optional` **cost**: `number`

The cost of a unit.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6056

***

### costOrder?

> `optional` **costOrder**: `number`

Indicates the order in which the additional cost is computed.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6080

***

### costType?

> `optional` **costType**: [`QuoteLanguageCostCostTypeEnum`](../wiki/Type.QuoteLanguageCostCostTypeEnum)

The type of the additional cost.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6062

***

### count?

> `optional` **count**: `number`

The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6044

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the additional cost.</div>

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6038

***

### runningTotal?

> `optional` **runningTotal**: `number`

The sum of all the previously computed costs.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6110

***

### targetLanguage?

> `optional` **targetLanguage**: [`Language`](../wiki/Interface.Language)

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6074

***

### total?

> `optional` **total**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The computed cost.</div>

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6050

***

### volumeUnitType?

> `optional` **volumeUnitType**: [`QuoteLanguageCostVolumeUnitTypeEnum`](../wiki/Type.QuoteLanguageCostVolumeUnitTypeEnum)

The unit type of the 'volume' cost, used as a reference for the unit cost.

#### Memberof

QuoteLanguageCost

#### Source

lc-public-api/models/index.ts:6068
