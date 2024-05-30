[Trados User Interface Extensibility v1.0.0](../wiki/globals) / UpdateTranslationMemorySettings

# Interface: UpdateTranslationMemorySettings

## Export

UpdateTranslationMemorySettings

## Properties

### segmentsConfirmationLevels

> **segmentsConfirmationLevels**: [`UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum`](../wiki/Type.UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum)[]

Default values are: 
 [`translated`, `approvedTranslation`, `approvedSignOff`].

#### Memberof

UpdateTranslationMemorySettings

#### Source

lc-public-api/models/index.ts:10647

***

### targetSegmentsDifferOption

> **targetSegmentsDifferOption**: [`UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum`](../wiki/Type.UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum)

Options:
- `merge`: replace (update) only the TU (from which a match was retrieved for the edited TU) with the latest available translation AND keep the other duplicates as they are. Use this option to have multiple translations for the same source together with Multiple Translation Penalty = 0.
- `addNew`: add translations as new TUs to the TM. Specify the status of the TUs (which will be added) under Segment status. This means that the existing TUs in the TM are not overwritten.
- `overwriteExisting`: delete all TUs (which have the same source, all TU duplicates) and keep only the last added TU (the latest available translation). Use this option to prevent inconsistent translations.
- `leaveUnchanged`: keep the existing TUs and do not add any new ones.
- `keepMostRecent`: replace (update) only the most recent TU (from which a match was retrieved for the edited TU) with the latest available translation AND delete all other duplicates.

#### Memberof

UpdateTranslationMemorySettings

#### Source

lc-public-api/models/index.ts:10659
