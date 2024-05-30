[Trados User Interface Extensibility v1.0.0](../wiki/globals) / QuoteAdditionalCostRequest

# Interface: QuoteAdditionalCostRequest

## Export

QuoteAdditionalCostRequest

## Properties

### conditionalCostOperator?

> `optional` **conditionalCostOperator**: [`QuoteAdditionalCostRequestConditionalCostOperatorEnum`](../wiki/Type.QuoteAdditionalCostRequestConditionalCostOperatorEnum)

The operator applied between the 'costVariable' and 'operand'.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5958

***

### conditionalCostThreshold

> **conditionalCostThreshold**: `number`

The value that is evaluated against the 'costVariable' based on the 'costOperator'.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5970

***

### conditionalCostType?

> `optional` **conditionalCostType**: [`QuoteAdditionalCostRequestConditionalCostTypeEnum`](../wiki/Type.QuoteAdditionalCostRequestConditionalCostTypeEnum)

Describes how the cost of type 'conditional' will be added to total cost.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5952

***

### conditionalCostVariable?

> `optional` **conditionalCostVariable**: [`QuoteAdditionalCostRequestConditionalCostVariableEnum`](../wiki/Type.QuoteAdditionalCostRequestConditionalCostVariableEnum)

The variable that is evaluated against the 'operand' based on the 'costOperator'.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5964

***

### cost

> **cost**: `number`

The cost of a unit.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5928

***

### costOrder

> **costOrder**: `number`

Indicates the order in which the additional cost is computed.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5946

***

### costType?

> `optional` **costType**: [`QuoteAdditionalCostRequestCostTypeEnum`](../wiki/Type.QuoteAdditionalCostRequestCostTypeEnum)

The type of the additional cost.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5934

***

### count

> **count**: `number`

The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5922

***

### name

> **name**: `string`

The name of the additional cost.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5916

***

### volumeUnitType?

> `optional` **volumeUnitType**: [`QuoteAdditionalCostRequestVolumeUnitTypeEnum`](../wiki/Type.QuoteAdditionalCostRequestVolumeUnitTypeEnum)

The unit type of the 'volume' cost, used for counting the units.

#### Memberof

QuoteAdditionalCostRequest

#### Source

lc-public-api/models/index.ts:5940
