[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ScheduleTemplateConfigurationSchedules

# Interface: ScheduleTemplateConfigurationSchedules

The Configuration Schedules resource.

## Export

ScheduleTemplateConfigurationSchedules

## Properties

### duration?

> `optional` **duration**: `number`

Expressed in minutes.

#### Memberof

ScheduleTemplateConfigurationSchedules

#### Source

lc-public-api/models/index.ts:6570

***

### reminder?

> `optional` **reminder**: [`ScheduleTemplateConfigurationSchedulesReminderEnum`](../wiki/Type.ScheduleTemplateConfigurationSchedulesReminderEnum)

Expressed in minutes.

#### Memberof

ScheduleTemplateConfigurationSchedules

#### Source

lc-public-api/models/index.ts:6578

***

### scope

> **scope**: [`ScheduleTemplateConfigurationSchedulesScopeEnum`](../wiki/Type.ScheduleTemplateConfigurationSchedulesScopeEnum)

The scope of this configuration schedule. \
global -> schedule of the task \
sourceLanguage -> schedule of the specific task when the sourceLanguage matches this object's sourceLanguage\
languageDirection -> schedule of the specific task when the languageDirection matches this object's languageDirection

#### Memberof

ScheduleTemplateConfigurationSchedules

#### Source

lc-public-api/models/index.ts:6564

***

### sourceLanguage?

> `optional` **sourceLanguage**: `string`

#### Memberof

ScheduleTemplateConfigurationSchedules

#### Source

lc-public-api/models/index.ts:6584

***

### targetLanguage?

> `optional` **targetLanguage**: `string`

#### Memberof

ScheduleTemplateConfigurationSchedules

#### Source

lc-public-api/models/index.ts:6590
