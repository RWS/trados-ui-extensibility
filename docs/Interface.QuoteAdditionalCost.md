[Trados User Interface Extensibility v1.0.0](../wiki/globals) / QuoteAdditionalCost

# Interface: QuoteAdditionalCost

Other extra fees not captured by translationCosts and languageCosts.

## Export

QuoteAdditionalCost

## Properties

### conditionalCostOperator?

> `optional` **conditionalCostOperator**: [`QuoteAdditionalCostConditionalCostOperatorEnum`](../wiki/Type.QuoteAdditionalCostConditionalCostOperatorEnum)

The operator applied between the 'costVariable' and 'operand'.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5830

***

### conditionalCostThreshold?

> `optional` **conditionalCostThreshold**: `number`

The value that is evaluated against the 'costVariable' based on the 'costOperator'.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5842

***

### conditionalCostType?

> `optional` **conditionalCostType**: [`QuoteAdditionalCostConditionalCostTypeEnum`](../wiki/Type.QuoteAdditionalCostConditionalCostTypeEnum)

Describes how the cost of type 'conditional' will be added to total cost.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5824

***

### conditionalCostVariable?

> `optional` **conditionalCostVariable**: [`QuoteAdditionalCostConditionalCostVariableEnum`](../wiki/Type.QuoteAdditionalCostConditionalCostVariableEnum)

The variable that is evaluated against the 'operand' based on the 'costOperator'.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5836

***

### cost?

> `optional` **cost**: `number`

The cost of a unit.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5800

***

### costOrder?

> `optional` **costOrder**: `number`

Indicates the order in which the additional cost is computed.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5818

***

### costType?

> `optional` **costType**: [`QuoteAdditionalCostCostTypeEnum`](../wiki/Type.QuoteAdditionalCostCostTypeEnum)

The type of the additional cost.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5806

***

### count?

> `optional` **count**: `number`

The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5788

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the additional cost.</div>

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5782

***

### runningTotal?

> `optional` **runningTotal**: `number`

The sum of all the previously computed costs.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5848

***

### total?

> `optional` **total**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The computed cost.</div>

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5794

***

### volumeUnitType?

> `optional` **volumeUnitType**: [`QuoteAdditionalCostVolumeUnitTypeEnum`](../wiki/Type.QuoteAdditionalCostVolumeUnitTypeEnum)

The unit type of the 'volume' cost, used as a reference for the unit cost.

#### Memberof

QuoteAdditionalCost

#### Source

lc-public-api/models/index.ts:5812
