[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileUpdateRequest

# Interface: SourceFileUpdateRequest

## Export

SourceFileUpdateRequest

## Properties

### id

> **id**: `string`

The source file identifier.

#### Memberof

SourceFileUpdateRequest

#### Source

lc-public-api/models/index.ts:7076

***

### name

> **name**: `string`

The source file name.\
The name should not contain the extension.\
Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.

#### Memberof

SourceFileUpdateRequest

#### Source

lc-public-api/models/index.ts:7084

***

### updateTargetFilesName?

> `optional` **updateTargetFilesName**: `boolean`

Option for renaming the target files too.

#### Memberof

SourceFileUpdateRequest

#### Source

lc-public-api/models/index.ts:7090
