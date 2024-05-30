[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TqaProfile

# Interface: TqaProfile

As a project manager, you choose a TQA configuration and use it to automatically assess the quality of a translation document.

The TQA configuration specifies:
 - Categories and subcategories that reviewers will use to classify the translation issues in a document.
 - Severities to define custom metrics you want to use to assess translation quality.
 - Score to measure the importance of each category or subcategory of an issue.
 - Pass/Fail Threshold to define the maximum number of penalty points admitted before failing the translation document.

## Export

TqaProfile

## Properties

### categories?

> `optional` **categories**: [`TqaProfileCategory`](../wiki/Interface.TqaProfileCategory)[]

Categories and subcategories are assessment options that reviewers can use to classify any translation-related issue that they find in a file.

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9497

***

### description?

> `optional` **description**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The TQA Profile description.</div>

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9479

***

### id

> **id**: `string`

The identifier of the TQA profile.

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9467

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9485

***

### name?

> `optional` **name**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the TQA Profile.</div>

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9473

***

### passFailThreshold?

> `optional` **passFailThreshold**: [`TqaProfilePassFailThreshold`](../wiki/Interface.TqaProfilePassFailThreshold)

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9491

***

### ~~path?~~

> `optional` **path**: [`Folder`](../wiki/Interface.Folder)[]

#### Memberof

TqaProfile

#### Deprecated

#### Source

lc-public-api/models/index.ts:9516

***

### scores?

> `optional` **scores**: [`TqaProfileScore`](../wiki/Interface.TqaProfileScore)[]

The TQA scoring indicates whether translations pass or fail the acceptance threshold.

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9509

***

### severities?

> `optional` **severities**: [`TqaProfileSeverity`](../wiki/Interface.TqaProfileSeverity)[]

Severities are custom metrics that reviewers can use to measure the importance of any translation-related issues that they find in a file.

#### Memberof

TqaProfile

#### Source

lc-public-api/models/index.ts:9503
