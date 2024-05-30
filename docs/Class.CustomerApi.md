[Trados User Interface Extensibility v1.0.0](../wiki/globals) / CustomerApi

# Class: CustomerApi

## Extends

- `BaseAPI`

## Constructors

### new CustomerApi()

> **new CustomerApi**(`configuration`): [`CustomerApi`](../wiki/Class.CustomerApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`CustomerApi`](../wiki/Class.CustomerApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### createCustomer()

> **createCustomer**(`requestParameters`, `initOverrides`?): `Promise`\<[`Customer`](../wiki/Interface.Customer)\>

Create customer in a tenant.  For adding a customer to a tenant the authenticated user must have \'Create Customer\' permission.  To also create an account for the key contact, you need to have the specific entitlements.
Create Customer

#### Parameters

• **requestParameters**: [`CreateCustomerRequest`](../wiki/Interface.CreateCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Customer`](../wiki/Interface.Customer)\>

#### Source

lc-public-api/apis/CustomerApi.ts:126

***

### createCustomerRaw()

> **createCustomerRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Customer`](../wiki/Interface.Customer)\>\>

Create customer in a tenant.  For adding a customer to a tenant the authenticated user must have \'Create Customer\' permission.  To also create an account for the key contact, you need to have the specific entitlements.
Create Customer

#### Parameters

• **requestParameters**: [`CreateCustomerRequest`](../wiki/Interface.CreateCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Customer`](../wiki/Interface.Customer)\>\>

#### Source

lc-public-api/apis/CustomerApi.ts:71

***

### deleteCustomer()

> **deleteCustomer**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a customer.
Delete Customer

#### Parameters

• **requestParameters**: [`DeleteCustomerRequest`](../wiki/Interface.DeleteCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/CustomerApi.ts:183

***

### deleteCustomerRaw()

> **deleteCustomerRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a customer.
Delete Customer

#### Parameters

• **requestParameters**: [`DeleteCustomerRequest`](../wiki/Interface.DeleteCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/CustomerApi.ts:135

***

### getCustomer()

> **getCustomer**(`requestParameters`, `initOverrides`?): `Promise`\<[`Customer`](../wiki/Interface.Customer)\>

Retrieves a customer by identifier.
Get Customer

#### Parameters

• **requestParameters**: [`GetCustomerRequest`](../wiki/Interface.GetCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Customer`](../wiki/Interface.Customer)\>

#### Source

lc-public-api/apis/CustomerApi.ts:243

***

### getCustomerRaw()

> **getCustomerRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Customer`](../wiki/Interface.Customer)\>\>

Retrieves a customer by identifier.
Get Customer

#### Parameters

• **requestParameters**: [`GetCustomerRequest`](../wiki/Interface.GetCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Customer`](../wiki/Interface.Customer)\>\>

#### Source

lc-public-api/apis/CustomerApi.ts:191

***

### listCustomers()

> **listCustomers**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListCustomersResponse`](../wiki/Interface.ListCustomersResponse)\>

Retrieves a list of all the customers in an account.
List Customers

#### Parameters

• **requestParameters**: [`ListCustomersRequest`](../wiki/Interface.ListCustomersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListCustomersResponse`](../wiki/Interface.ListCustomersResponse)\>

#### Source

lc-public-api/apis/CustomerApi.ts:317

***

### listCustomersRaw()

> **listCustomersRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListCustomersResponse`](../wiki/Interface.ListCustomersResponse)\>\>

Retrieves a list of all the customers in an account.
List Customers

#### Parameters

• **requestParameters**: [`ListCustomersRequest`](../wiki/Interface.ListCustomersRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListCustomersResponse`](../wiki/Interface.ListCustomersResponse)\>\>

#### Source

lc-public-api/apis/CustomerApi.ts:252

***

### updateCustomer()

> **updateCustomer**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a customer by identifier.
Update Customer

#### Parameters

• **requestParameters**: [`UpdateCustomerRequest`](../wiki/Interface.UpdateCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/CustomerApi.ts:384

***

### updateCustomerRaw()

> **updateCustomerRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a customer by identifier.
Update Customer

#### Parameters

• **requestParameters**: [`UpdateCustomerRequest`](../wiki/Interface.UpdateCustomerRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/CustomerApi.ts:326

***

### withMiddleware()

> **withMiddleware**\<`T`\>(`this`, ...`middlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**middlewares**: `Middleware`[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withMiddleware`

#### Source

lc-public-api/runtime.ts:101

***

### withPostMiddleware()

> **withPostMiddleware**\<`T`\>(`this`, ...`postMiddlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**postMiddlewares**: (`undefined` \| (`context`) => `Promise`\<`void` \| `Response`\>)[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withPostMiddleware`

#### Source

lc-public-api/runtime.ts:112

***

### withPreMiddleware()

> **withPreMiddleware**\<`T`\>(`this`, ...`preMiddlewares`): `T`

#### Type parameters

• **T** *extends* `BaseAPI`

#### Parameters

• **this**: `T`

• ...**preMiddlewares**: (`undefined` \| (`context`) => `Promise`\<`void` \| `FetchParams`\>)[]

#### Returns

`T`

#### Inherited from

`runtime.BaseAPI.withPreMiddleware`

#### Source

lc-public-api/runtime.ts:107
