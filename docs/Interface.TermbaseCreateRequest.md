[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseCreateRequest

# Interface: TermbaseCreateRequest

Termbase create request.

## Export

TermbaseCreateRequest

## Properties

### copyright?

> `optional` **copyright**: `string`

The copyright of the termbase.

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8149

***

### description?

> `optional` **description**: `string`

The description of the termbase.

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8143

***

### location?

> `optional` **location**: `string`

The folder identifier where the termbase should be created. If not specified, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error.

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8155

***

### name

> **name**: `string`

The name of the termbase.

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8137

***

### termbaseStructure?

> `optional` **termbaseStructure**: [`TermbaseStructureCreateRequest`](../wiki/Interface.TermbaseStructureCreateRequest)

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8167

***

### termbaseTemplateId?

> `optional` **termbaseTemplateId**: `string`

The termbase template identifier.

#### Memberof

TermbaseCreateRequest

#### Source

lc-public-api/models/index.ts:8161
