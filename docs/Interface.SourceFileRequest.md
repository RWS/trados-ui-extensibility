[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileRequest

# Interface: SourceFileRequest

Source file properties sent as a JSON inside a text part.

## Export

SourceFileRequest

## Properties

### language

> **language**: `string`

The language of the file in code 5 (ex. en-US)

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7018

***

### name

> **name**: `string`

The name of the source file.

The character limit is calculated together with the `path` length.

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7000

***

### path?

> `optional` **path**: `string`[]

Path represents the hierarchy of the source file inside the zip. For example `/ZipWithFolders/Finance/2021/Finance_2021_dummy_EN.txt` would be sent as: 

```json 
"path": [ 
  "ZipWithFolders", 
  "Finance", 
  "2021", 
  "Finance_2021_dummy_EN.txt" 
]
```

The character limit is calculated together with the `name` length.

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7041

***

### role

> **role**: [`SourceFileRequestRoleEnum`](../wiki/Type.SourceFileRequestRoleEnum)

The role of the source file. When set to unknown or translatable, the system will try to detect the file type.

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7006

***

### targetLanguages?

> `optional` **targetLanguages**: `string`[]

A list of target languages in code 5 (ex. en-US)

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7024

***

### type

> **type**: [`SourceFileRequestTypeEnum`](../wiki/Type.SourceFileRequestTypeEnum)

The type of the file.

#### Memberof

SourceFileRequest

#### Source

lc-public-api/models/index.ts:7012
