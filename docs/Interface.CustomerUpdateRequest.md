[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomerUpdateRequest

# Interface: CustomerUpdateRequest

Input for Customer update.

## Export

CustomerUpdateRequest

## Properties

### customFieldDefinitions?

> `optional` **customFieldDefinitions**: [`CustomFieldResource`](../wiki/Interface.CustomFieldResource)[]

The Custom Fields

#### Memberof

CustomerUpdateRequest

#### Source

lc-public-api/models/index.ts:1023

***

### folderVisibility?

> `optional` **folderVisibility**: [`CustomerUpdateRequestFolderVisibilityEnum`](../wiki/Type.CustomerUpdateRequestFolderVisibilityEnum)

The folder visibilty to its subfulders.

#### Memberof

CustomerUpdateRequest

#### Source

lc-public-api/models/index.ts:1029

***

### keyContactId?

> `optional` **keyContactId**: `string`

The ID of the account user set as key contact.

#### Memberof

CustomerUpdateRequest

#### Source

lc-public-api/models/index.ts:1011

***

### name?

> `optional` **name**: `string`

The name of the customer.\
Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`

#### Memberof

CustomerUpdateRequest

#### Source

lc-public-api/models/index.ts:1005

***

### ragStatus?

> `optional` **ragStatus**: [`CustomerUpdateRequestRagStatusEnum`](../wiki/Type.CustomerUpdateRequestRagStatusEnum)

The color tag used to mark-up a customer in the UI.

#### Memberof

CustomerUpdateRequest

#### Source

lc-public-api/models/index.ts:1017
