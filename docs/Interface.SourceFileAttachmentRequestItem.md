[Trados User Interface Extensibility v1.0.0](../wiki/globals) / SourceFileAttachmentRequestItem

# Interface: SourceFileAttachmentRequestItem

Attached Source File properties referencing previously uploaded file

## Export

SourceFileAttachmentRequestItem

## Properties

### fileUrl

> **fileUrl**: `string`

The identifier of the previously uploaded file.

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6833

***

### language

> **language**: [`SourceLanguageRequest`](../wiki/Interface.SourceLanguageRequest)

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6845

***

### name

> **name**: `string`

The name of the source file.

The character limit is calculated together with the `path` length.

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6821

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

The character limit is calculated together with the   `name` length.

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6868

***

### role

> **role**: [`SourceFileAttachmentRequestItemRoleEnum`](../wiki/Type.SourceFileAttachmentRequestItemRoleEnum)

The role of the source file. When set to unknown or translatable, the system will try to detect the file type.

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6827

***

### targetLanguages?

> `optional` **targetLanguages**: [`TargetLanguageRequest`](../wiki/Interface.TargetLanguageRequest)[]

A list of target languages in code 5 (ex. en-US)

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6851

***

### type

> **type**: [`SourceFileAttachmentRequestItemTypeEnum`](../wiki/Type.SourceFileAttachmentRequestItemTypeEnum)

The type of the file.

#### Memberof

SourceFileAttachmentRequestItem

#### Source

lc-public-api/models/index.ts:6839
