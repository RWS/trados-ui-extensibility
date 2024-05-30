[Trados User Interface Extensibility v1.0.0](../wiki/globals) / RateLimit

# Interface: RateLimit

Rate Limit entry

## Export

RateLimit

## Properties

### description

> **description**: `string`

Describes which endpoints are affected by this limit, and for which time frame.

#### Memberof

RateLimit

#### Source

lc-public-api/models/index.ts:6398

***

### limit

> **limit**: `number`

The limit in effect for the endpoint and time frame.

#### Memberof

RateLimit

#### Source

lc-public-api/models/index.ts:6404

***

### policyName

> **policyName**: `string`

Name of the rate limit policy.

#### Memberof

RateLimit

#### Source

lc-public-api/models/index.ts:6392

***

### remainingQuota

> **remainingQuota**: `number`

The remaining quota in effect for the endpoint and time frame.

#### Memberof

RateLimit

#### Source

lc-public-api/models/index.ts:6410
