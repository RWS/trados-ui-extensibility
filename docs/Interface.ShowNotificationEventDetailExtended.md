[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ShowNotificationEventDetailExtended

# Interface: ShowNotificationEventDetailExtended

The type describing the event detail object for showing a notification.

## Extends

- [`ShowNotificationEventDetail`](../wiki/Type.ShowNotificationEventDetail)

## Properties

### context

> **context**: [`Context`](../wiki/Type.Context)

The context within Trados, e.g. "projects" (use trados.context).

#### Inherited from

`ShowNotificationEventDetail.context`

#### Source

models/index.ts:169

***

### key

> **key**: `string`

The extension key.

#### Source

models/index.ts:182

***

### reject()

> **reject**: (`reason`) => `void`

The function to be called in case the event's Promise is rejected.

#### Parameters

• **reason**: `any`

#### Returns

`void`

#### Source

models/index.ts:186

***

### resolve()

> **resolve**: (`value`) => `void`

The function to be called once the event's Promise is resolved.

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Source

models/index.ts:184

***

### text

> **text**: `string`

The text to be displayed in the notification.

#### Inherited from

`ShowNotificationEventDetail.text`

#### Source

models/index.ts:173

***

### type

> **type**: [`NotificationType`](../wiki/Type.NotificationType)

The notification type.

#### Inherited from

`ShowNotificationEventDetail.type`

#### Source

models/index.ts:171
