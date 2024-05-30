[Trados User Interface Extensibility v1.0.0](../wiki/globals) / AsynchronousResult

# Interface: AsynchronousResult

Represents the result of an asynchronous operation, including status and potential error information.

## Export

AsynchronousResult

## Properties

### errorMessage?

> `optional` **errorMessage**: `string`

When the status is 'failed', it contains the error message explaining what went wrong.

#### Memberof

AsynchronousResult

#### Source

lc-public-api/models/index.ts:630

***

### id

> **id**: `string`

Unique identifier for the asynchronous operation.

#### Memberof

AsynchronousResult

#### Source

lc-public-api/models/index.ts:618

***

### status

> **status**: [`AsynchronousResultStatusEnum`](../wiki/Type.AsynchronousResultStatusEnum)

The status of the asynchronous operation.

#### Memberof

AsynchronousResult

#### Source

lc-public-api/models/index.ts:624
