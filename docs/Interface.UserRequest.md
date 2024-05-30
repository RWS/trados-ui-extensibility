[Trados User Interface Extensibility v1.0.0](../wiki/globals) / UserRequest

# Interface: UserRequest

User in the account.

## Export

UserRequest

## Properties

### anonymized?

> `optional` **anonymized**: `boolean`

Shows if the authenticated entity has access to read the details of the user or not. If true then the ‘anonymizedUserName’ should be retrieved.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10791

***

### anonymizedUserName?

> `optional` **anonymizedUserName**: `string`

Retrieved if the authenticated entity does not have access to read the User.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10797

***

### email?

> `optional` **email**: `string`

User’s email. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10761

***

### firstName?

> `optional` **firstName**: `string`

User’s first name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10767

***

### groups?

> `optional` **groups**: [`GroupRequest`](../wiki/Interface.GroupRequest)[]

The groups.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10785

***

### id

> **id**: `string`

The user identifier.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10755

***

### lastName?

> `optional` **lastName**: `string`

User’s last name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10773

***

### location?

> `optional` **location**: [`ResourceFolderRequest`](../wiki/Interface.ResourceFolderRequest)

#### Memberof

UserRequest

#### Source

lc-public-api/models/index.ts:10779
