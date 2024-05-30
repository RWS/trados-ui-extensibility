[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ConfigurationResourceRequest

# Interface: ConfigurationResourceRequest

Resource configuration properties.

## Export

ConfigurationResourceRequest

## Properties

### id

> **id**: `string`

Configuration resource identifier.

#### Memberof

ConfigurationResourceRequest

#### Source

lc-public-api/models/index.ts:656

***

### strategy?

> `optional` **strategy**: [`ConfigurationResourceRequestStrategyEnum`](../wiki/Type.ConfigurationResourceRequestStrategyEnum)

"copy": A copy of the resource will be used for the project execution. This is the default strategy.

"use": The actual resource will be used for the project execution.

#### Memberof

ConfigurationResourceRequest

#### Source

lc-public-api/models/index.ts:664
