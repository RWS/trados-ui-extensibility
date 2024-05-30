[Trados User Interface Extensibility v1.0.0](../wiki/globals) / QuoteLanguageCostRequest

# Interface: QuoteLanguageCostRequest

## Export

QuoteLanguageCostRequest

## Properties

### conditionalCostOperator?

> `optional` **conditionalCostOperator**: [`QuoteLanguageCostRequestConditionalCostOperatorEnum`](../wiki/Type.QuoteLanguageCostRequestConditionalCostOperatorEnum)

The operator applied between the 'costVariable' and 'operand'.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6226

***

### conditionalCostThreshold

> **conditionalCostThreshold**: `number`

The value that is evaluated against the 'costVariable' based on the 'costOperator'.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6238

***

### conditionalCostType?

> `optional` **conditionalCostType**: [`QuoteLanguageCostRequestConditionalCostTypeEnum`](../wiki/Type.QuoteLanguageCostRequestConditionalCostTypeEnum)

Describes how the cost of type 'conditional' will be added to total cost.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6220

***

### conditionalCostVariable?

> `optional` **conditionalCostVariable**: [`QuoteLanguageCostRequestConditionalCostVariableEnum`](../wiki/Type.QuoteLanguageCostRequestConditionalCostVariableEnum)

The variable that is evaluated against the 'operand' based on the 'costOperator'.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6232

***

### cost

> **cost**: `number`

The cost of a unit.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6190

***

### costOrder

> **costOrder**: `number`

Indicates the order in which the additional cost is computed.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6214

***

### costType?

> `optional` **costType**: [`QuoteLanguageCostRequestCostTypeEnum`](../wiki/Type.QuoteLanguageCostRequestCostTypeEnum)

The type of the additional cost.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6196

***

### count

> **count**: `number`

The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6184

***

### name

> **name**: `string`

The name of the additional cost.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6178

***

### targetLanguage?

> `optional` **targetLanguage**: [`TargetLanguageRequest`](../wiki/Interface.TargetLanguageRequest)

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6208

***

### volumeUnitType?

> `optional` **volumeUnitType**: [`QuoteLanguageCostRequestVolumeUnitTypeEnum`](../wiki/Type.QuoteLanguageCostRequestVolumeUnitTypeEnum)

The unit type of the 'volume' cost, used for counting the units.

#### Memberof

QuoteLanguageCostRequest

#### Source

lc-public-api/models/index.ts:6202
