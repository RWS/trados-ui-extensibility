[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectGroupCreateRequest

# Interface: ProjectGroupCreateRequest

Input for project group creation.

## Export

ProjectGroupCreateRequest

## Properties

### description?

> `optional` **description**: `string`

The project group description.

#### Memberof

ProjectGroupCreateRequest

#### Source

lc-public-api/models/index.ts:3336

***

### location?

> `optional` **location**: `string`

The folder identifier where the project group should be created. If it isn't mentioned, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error.

#### Memberof

ProjectGroupCreateRequest

#### Source

lc-public-api/models/index.ts:3342

***

### name

> **name**: `string`

The project group name.\
Must be unique per location.\
Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`

#### Memberof

ProjectGroupCreateRequest

#### Source

lc-public-api/models/index.ts:3330
