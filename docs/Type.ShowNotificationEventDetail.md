[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ShowNotificationEventDetail

# Type alias: ShowNotificationEventDetail

> **ShowNotificationEventDetail**: `object`

The base type describing the event detail object for showing a notification.

## Type declaration

### context

> **context**: [`Context`](../wiki/Type.Context)

The context within Trados, e.g. "projects" (use trados.context).

### text

> **text**: `string`

The text to be displayed in the notification.

### type

> **type**: [`NotificationType`](../wiki/Type.NotificationType)

The notification type.

## Source

models/index.ts:167
