[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ProjectTemplateBatchTasksPreprocessingSettings

# Interface: ProjectTemplateBatchTasksPreprocessingSettings

Pre-Processing Settings, configure how TMs are applied, are detailed in section 10.b

## Export

ProjectTemplateBatchTasksPreprocessingSettings

## Properties

### afterApplyingTranslations?

> `optional` **afterApplyingTranslations**: [`ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum`](../wiki/Type.ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum)[]

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Default: `confirmExactMatches`, `confirmContextMatches`</div>

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3829

***

### excludeLockedSegments?

> `optional` **excludeLockedSegments**: `boolean`

If enabled locked segments (content that must not be translated) are excluded from translation.

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3847

***

### minimumMatchValue?

> `optional` **minimumMatchValue**: `number`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div>

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3813

***

### noMatchFoundAction?

> `optional` **noMatchFoundAction**: [`ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum`](../wiki/Type.ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div>

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3835

***

### reportCrossFileRepetition?

> `optional` **reportCrossFileRepetition**: `boolean`

If enabled repetitions are identified and included in analysis reports.

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3841

***

### translationOverwriteMode?

> `optional` **translationOverwriteMode**: [`ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum`](../wiki/Type.ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum)

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Options: 
- `keepExisting`: no segments are overwritten, existing segments are kept;
- `overwriteIfBetter`: unlocked segments (including confirmed segments) are overwritten, while unlocked Perfect Match segments and locked segments are not overwritten; 
- `overwriteAlways`: Perfect Match segments (both locked and unlocked) are overwritten, while other locked segments are not overwritten;
- `overwriteExceptPerfectMatch`: unlocked segments (including confirmed segments) and locked segments are overwritten, while unlocked Perfect Match segments are not overwritten; </div>

#### Memberof

ProjectTemplateBatchTasksPreprocessingSettings

#### Source

lc-public-api/models/index.ts:3823
