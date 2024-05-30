[Trados User Interface Extensibility v1.0.0](../wiki/globals) / TermbaseApi

# Class: TermbaseApi

## Extends

- `BaseAPI`

## Constructors

### new TermbaseApi()

> **new TermbaseApi**(`configuration`): [`TermbaseApi`](../wiki/Class.TermbaseApi)

#### Parameters

• **configuration**: `Configuration`= `DefaultConfig`

#### Returns

[`TermbaseApi`](../wiki/Class.TermbaseApi)

#### Inherited from

`runtime.BaseAPI.constructor`

#### Source

lc-public-api/runtime.ts:97

## Methods

### createTermbase()

> **createTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`Termbase`](../wiki/Interface.Termbase)\>

Creates a new termbase. The termbase can be created with a termbase template by providing the templateId or by providing a custom termbaseStructure.  If only a `termbaseTemplateId` was provided, the termbase will be created using data from the template.  If only a `termbaseStructure` was provided, the termbase will be created using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
Create Termbase

#### Parameters

• **requestParameters**: [`CreateTermbaseRequest`](../wiki/Interface.CreateTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Termbase`](../wiki/Interface.Termbase)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:182

***

### createTermbaseEntry()

> **createTermbaseEntry**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>

Creates a new termbase entry. For more information about how to use `fieldValueLinks` see [`Create termbase entry`](../docs/termbase/Termbase-entries.md#creating-a-termbase-entry).
Create Termbase Entry

#### Parameters

• **requestParameters**: [`CreateTermbaseEntryRequest`](../wiki/Interface.CreateTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:246

***

### createTermbaseEntryRaw()

> **createTermbaseEntryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>\>

Creates a new termbase entry. For more information about how to use `fieldValueLinks` see [`Create termbase entry`](../docs/termbase/Termbase-entries.md#creating-a-termbase-entry).
Create Termbase Entry

#### Parameters

• **requestParameters**: [`CreateTermbaseEntryRequest`](../wiki/Interface.CreateTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:191

***

### createTermbaseRaw()

> **createTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Termbase`](../wiki/Interface.Termbase)\>\>

Creates a new termbase. The termbase can be created with a termbase template by providing the templateId or by providing a custom termbaseStructure.  If only a `termbaseTemplateId` was provided, the termbase will be created using data from the template.  If only a `termbaseStructure` was provided, the termbase will be created using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
Create Termbase

#### Parameters

• **requestParameters**: [`CreateTermbaseRequest`](../wiki/Interface.CreateTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Termbase`](../wiki/Interface.Termbase)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:134

***

### deleteTermbase()

> **deleteTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a termbase by identifier.
Delete Termbase

#### Parameters

• **requestParameters**: [`DeleteTermbaseRequest`](../wiki/Interface.DeleteTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseApi.ts:303

***

### deleteTermbaseEntries()

> **deleteTermbaseEntries**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes all the entries in the termbase.
Delete Termbase Entries

#### Parameters

• **requestParameters**: [`DeleteTermbaseEntriesRequest`](../wiki/Interface.DeleteTermbaseEntriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseApi.ts:359

***

### deleteTermbaseEntriesRaw()

> **deleteTermbaseEntriesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes all the entries in the termbase.
Delete Termbase Entries

#### Parameters

• **requestParameters**: [`DeleteTermbaseEntriesRequest`](../wiki/Interface.DeleteTermbaseEntriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:311

***

### deleteTermbaseEntry()

> **deleteTermbaseEntry**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Deletes a termbase entry.
Delete Termbase Entry

#### Parameters

• **requestParameters**: [`DeleteTermbaseEntryRequest`](../wiki/Interface.DeleteTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseApi.ts:422

***

### deleteTermbaseEntryRaw()

> **deleteTermbaseEntryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a termbase entry.
Delete Termbase Entry

#### Parameters

• **requestParameters**: [`DeleteTermbaseEntryRequest`](../wiki/Interface.DeleteTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:367

***

### deleteTermbaseRaw()

> **deleteTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Deletes a termbase by identifier.
Delete Termbase

#### Parameters

• **requestParameters**: [`DeleteTermbaseRequest`](../wiki/Interface.DeleteTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:255

***

### getTermbase()

> **getTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`Termbase`](../wiki/Interface.Termbase)\>

Retrieves a termbase by identifier.
Get Termbase

#### Parameters

• **requestParameters**: [`GetTermbaseRequest`](../wiki/Interface.GetTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`Termbase`](../wiki/Interface.Termbase)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:482

***

### getTermbaseEntry()

> **getTermbaseEntry**(`requestParameters`, `initOverrides`?): `Promise`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>

Retrieves a termbase entry by identifier.
Get Termbase Entry

#### Parameters

• **requestParameters**: [`GetTermbaseEntryRequest`](../wiki/Interface.GetTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:550

***

### getTermbaseEntryRaw()

> **getTermbaseEntryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>\>

Retrieves a termbase entry by identifier.
Get Termbase Entry

#### Parameters

• **requestParameters**: [`GetTermbaseEntryRequest`](../wiki/Interface.GetTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`TermbaseEntry`](../wiki/Interface.TermbaseEntry)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:491

***

### getTermbaseRaw()

> **getTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`Termbase`](../wiki/Interface.Termbase)\>\>

Retrieves a termbase by identifier.
Get Termbase

#### Parameters

• **requestParameters**: [`GetTermbaseRequest`](../wiki/Interface.GetTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`Termbase`](../wiki/Interface.Termbase)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:430

***

### listTermbase()

> **listTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTermbasesResponse`](../wiki/Interface.ListTermbasesResponse)\>

List termbases.
List Termbases

#### Parameters

• **requestParameters**: [`ListTermbaseRequest`](../wiki/Interface.ListTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTermbasesResponse`](../wiki/Interface.ListTermbasesResponse)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:620

***

### listTermbaseEntries()

> **listTermbaseEntries**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTermbaseEntriesResponse`](../wiki/Interface.ListTermbaseEntriesResponse)\>

Retrieves a list of all the entries in a termbase.
List Termbase Entries

#### Parameters

• **requestParameters**: [`ListTermbaseEntriesRequest`](../wiki/Interface.ListTermbaseEntriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTermbaseEntriesResponse`](../wiki/Interface.ListTermbaseEntriesResponse)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:693

***

### listTermbaseEntriesRaw()

> **listTermbaseEntriesRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTermbaseEntriesResponse`](../wiki/Interface.ListTermbaseEntriesResponse)\>\>

Retrieves a list of all the entries in a termbase.
List Termbase Entries

#### Parameters

• **requestParameters**: [`ListTermbaseEntriesRequest`](../wiki/Interface.ListTermbaseEntriesRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTermbaseEntriesResponse`](../wiki/Interface.ListTermbaseEntriesResponse)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:629

***

### listTermbaseRaw()

> **listTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTermbasesResponse`](../wiki/Interface.ListTermbasesResponse)\>\>

List termbases.
List Termbases

#### Parameters

• **requestParameters**: [`ListTermbaseRequest`](../wiki/Interface.ListTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTermbasesResponse`](../wiki/Interface.ListTermbasesResponse)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:559

***

### listTermbaseTerms()

> **listTermbaseTerms**(`requestParameters`, `initOverrides`?): `Promise`\<[`ListTermbaseTermsResponse`](../wiki/Interface.ListTermbaseTermsResponse)\>

Retrieves a list of all the terms of the termbase. Search types: - normal: Use normal search to look for terms that match the text exactly as entered. - linguistic: Use linguistic search to look for terms that are similar to the search term. Linguistic search is based on stemming and other language-dependent aspects. - fuzzy: Use fuzzy search to look for terms that are similar to the search term. Fuzzy search is more fault-tolerant than linguistic search.
List Termbase Terms

#### Parameters

• **requestParameters**: [`ListTermbaseTermsRequest`](../wiki/Interface.ListTermbaseTermsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<[`ListTermbaseTermsResponse`](../wiki/Interface.ListTermbaseTermsResponse)\>

#### Source

lc-public-api/apis/TermbaseApi.ts:777

***

### listTermbaseTermsRaw()

> **listTermbaseTermsRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<[`ListTermbaseTermsResponse`](../wiki/Interface.ListTermbaseTermsResponse)\>\>

Retrieves a list of all the terms of the termbase. Search types: - normal: Use normal search to look for terms that match the text exactly as entered. - linguistic: Use linguistic search to look for terms that are similar to the search term. Linguistic search is based on stemming and other language-dependent aspects. - fuzzy: Use fuzzy search to look for terms that are similar to the search term. Fuzzy search is more fault-tolerant than linguistic search.
List Termbase Terms

#### Parameters

• **requestParameters**: [`ListTermbaseTermsRequest`](../wiki/Interface.ListTermbaseTermsRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<[`ListTermbaseTermsResponse`](../wiki/Interface.ListTermbaseTermsResponse)\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:702

***

### updateTermbase()

> **updateTermbase**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates the termbase. The termbase can be updated with a termbase template by providing the termbaseTemplateId or by providing a custom termbaseStructure.   If only a `termbaseTemplateId ` was provided, the termbase will be updated using data from the template.  If only a `termbaseStructure` was provided, the termbase will be updated using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
Update Termbase

#### Parameters

• **requestParameters**: [`UpdateTermbaseRequest`](../wiki/Interface.UpdateTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseApi.ts:837

***

### updateTermbaseEntry()

> **updateTermbaseEntry**(`requestParameters`, `initOverrides`?): `Promise`\<`void`\>

Updates a termbase entry by identifier. The request body will overwrite the existing data.
Update Termbase Entry

#### Parameters

• **requestParameters**: [`UpdateTermbaseEntryRequest`](../wiki/Interface.UpdateTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`void`\>

#### Source

lc-public-api/apis/TermbaseApi.ts:903

***

### updateTermbaseEntryRaw()

> **updateTermbaseEntryRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates a termbase entry by identifier. The request body will overwrite the existing data.
Update Termbase Entry

#### Parameters

• **requestParameters**: [`UpdateTermbaseEntryRequest`](../wiki/Interface.UpdateTermbaseEntryRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:845

***

### updateTermbaseRaw()

> **updateTermbaseRaw**(`requestParameters`, `initOverrides`?): `Promise`\<`ApiResponse`\<`void`\>\>

Updates the termbase. The termbase can be updated with a termbase template by providing the termbaseTemplateId or by providing a custom termbaseStructure.   If only a `termbaseTemplateId ` was provided, the termbase will be updated using data from the template.  If only a `termbaseStructure` was provided, the termbase will be updated using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
Update Termbase

#### Parameters

• **requestParameters**: [`UpdateTermbaseRequest`](../wiki/Interface.UpdateTermbaseRequest)

• **initOverrides?**: `RequestInit` \| `InitOverrideFunction`

#### Returns

`Promise`\<`ApiResponse`\<`void`\>\>

#### Source

lc-public-api/apis/TermbaseApi.ts:786

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
