[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomerCreateRequest

# Interface: CustomerCreateRequest

Input for Customer creation.

 It will create an invitation for an account user account.

## Export

CustomerCreateRequest

## Properties

### email?

> `optional` **email**: `string`

Key contact email.. If you provide this field, pleaase also provide first name and last name

#### Memberof

CustomerCreateRequest

#### Source

lc-public-api/models/index.ts:989

***

### firstName?

> `optional` **firstName**: `string`

Key contact first name. If you provide this field, pleaase also provide email and last name

#### Memberof

CustomerCreateRequest

#### Source

lc-public-api/models/index.ts:977

***

### lastName?

> `optional` **lastName**: `string`

Key contact last name. If you provide this field, pleaase also provide email and first name

#### Memberof

CustomerCreateRequest

#### Source

lc-public-api/models/index.ts:983

***

### location?

> `optional` **location**: `string`

The identifier of the parent folder for the customer.

#### Memberof

CustomerCreateRequest

#### Source

lc-public-api/models/index.ts:971

***

### name

> **name**: `string`

The name of the customer.\
Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`

#### Memberof

CustomerCreateRequest

#### Source

lc-public-api/models/index.ts:965
