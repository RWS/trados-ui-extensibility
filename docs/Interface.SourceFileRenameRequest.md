[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileRenameRequest

# Interface: SourceFileRenameRequest

## Export

SourceFileRenameRequest

## Properties

### name

> **name**: `string`

The name of the source file.\
The name should not contain the extension.\
Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.

#### Memberof

SourceFileRenameRequest

#### Source

lc-public-api/models/index.ts:6978

***

### updateTargetFilesName?

> `optional` **updateTargetFilesName**: `boolean`

Option for renaming also the target files.

#### Memberof

SourceFileRenameRequest

#### Source

lc-public-api/models/index.ts:6984
