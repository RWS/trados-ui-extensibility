[Trados User Interface Extensibility v1.0.0](../wiki/globals) / User

# Interface: User

User in the account.

## Export

User

## Properties

### anonymized?

> `optional` **anonymized**: `boolean`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">This shows if the authenticated entity has access to read the details of the user or not. If true, then the 'anonymizedUserName' should be retrieved.</div>

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10724

***

### anonymizedUserName?

> `optional` **anonymizedUserName**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Retrieved if the authenticated entity does not have access to read the User.</div>

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10730

***

### email?

> `optional` **email**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's email address. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div>

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10706

***

### firstName?

> `optional` **firstName**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's first name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div>

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10712

***

### groups?

> `optional` **groups**: [`Group`](../wiki/Interface.Group)[]

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10742

***

### id

> **id**: `string`

User account identifier.

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10700

***

### lastName?

> `optional` **lastName**: `string`

<div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's last name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div>

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10718

***

### location?

> `optional` **location**: [`FolderV2`](../wiki/Interface.FolderV2)

#### Memberof

User

#### Source

lc-public-api/models/index.ts:10736
