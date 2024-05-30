[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CallApiEventDetail

# Interface: CallApiEventDetail

The base interface describing the object which configures an API call.

## Extends

- `RestRequest`

## Extended by

- [`CallApiEventDetailExtended`](../wiki/Interface.CallApiEventDetailExtended)

## Properties

### blobRequest?

> `optional` **blobRequest**: `boolean`

Flag indicating whether the request contains a Blob. Optional.

#### Inherited from

`RestRequest.blobRequest`

#### Source

models/index.ts:94

***

### blobResponse?

> `optional` **blobResponse**: `boolean`

Flag indicating whether the expected response is a Blob. Optional.

#### Inherited from

`RestRequest.blobResponse`

#### Source

models/index.ts:92

***

### body?

> `optional` **body**: `string`

The JSON body of the request. Optional.

#### Inherited from

`RestRequest.body`

#### Source

models/index.ts:100

***

### fileName?

> `optional` **fileName**: `string`

#### Source

models/index.ts:266

***

### formData?

> `optional` **formData**: `any`

The form data object. Optional.

#### Inherited from

`RestRequest.formData`

#### Source

models/index.ts:96

***

### headers?

> `optional` **headers**: `any`

Object containing request headers. Optional.

#### Inherited from

`RestRequest.headers`

#### Source

models/index.ts:102

***

### meta?

> `optional` **meta**: `any`

Object containing additional data to be passed with the request. Optional.

#### Inherited from

`RestRequest.meta`

#### Source

models/index.ts:104

***

### method

> **method**: `METHOD`

The HTTP request method.

#### Inherited from

`RestRequest.method`

#### Source

models/index.ts:88

***

### params?

> `optional` **params**: `string`

The query parameters as key value pairs, joined by "&". Optional.

#### Inherited from

`RestRequest.params`

#### Source

models/index.ts:90

***

### url

> **url**: `string`

The URL of the request.

#### Inherited from

`RestRequest.url`

#### Source

models/index.ts:98
