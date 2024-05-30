[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CallApiEventDetailExtended

# Interface: CallApiEventDetailExtended

The interface describing the object which configures an API call.

## Extends

- [`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail)

## Properties

### blobRequest?

> `optional` **blobRequest**: `boolean`

Flag indicating whether the request contains a Blob. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`blobRequest`](../wiki/Interface.CallApiEventDetail#blobrequest)

#### Source

models/index.ts:94

***

### blobResponse?

> `optional` **blobResponse**: `boolean`

Flag indicating whether the expected response is a Blob. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`blobResponse`](../wiki/Interface.CallApiEventDetail#blobresponse)

#### Source

models/index.ts:92

***

### body?

> `optional` **body**: `string`

The JSON body of the request. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`body`](../wiki/Interface.CallApiEventDetail#body)

#### Source

models/index.ts:100

***

### fileName?

> `optional` **fileName**: `string`

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`fileName`](../wiki/Interface.CallApiEventDetail#filename)

#### Source

models/index.ts:266

***

### formData?

> `optional` **formData**: `any`

The form data object. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`formData`](../wiki/Interface.CallApiEventDetail#formdata)

#### Source

models/index.ts:96

***

### headers?

> `optional` **headers**: `any`

Object containing request headers. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`headers`](../wiki/Interface.CallApiEventDetail#headers)

#### Source

models/index.ts:102

***

### key

> **key**: `string`

The extension key.

#### Source

models/index.ts:274

***

### meta?

> `optional` **meta**: `any`

Object containing additional data to be passed with the request. Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`meta`](../wiki/Interface.CallApiEventDetail#meta)

#### Source

models/index.ts:104

***

### method

> **method**: `METHOD`

The HTTP request method.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`method`](../wiki/Interface.CallApiEventDetail#method)

#### Source

models/index.ts:88

***

### params?

> `optional` **params**: `string`

The query parameters as key value pairs, joined by "&". Optional.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`params`](../wiki/Interface.CallApiEventDetail#params)

#### Source

models/index.ts:90

***

### reject()

> **reject**: (`reason`) => `void`

The function to be called in case the event's Promise is rejected.

#### Parameters

• **reason**: `any`

#### Returns

`void`

#### Source

models/index.ts:278

***

### resolve()

> **resolve**: (`value`) => `void`

The function to be called once the event's Promise is resolved.

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Source

models/index.ts:276

***

### url

> **url**: `string`

The URL of the request.

#### Inherited from

[`CallApiEventDetail`](../wiki/Interface.CallApiEventDetail).[`url`](../wiki/Interface.CallApiEventDetail#url)

#### Source

models/index.ts:98
