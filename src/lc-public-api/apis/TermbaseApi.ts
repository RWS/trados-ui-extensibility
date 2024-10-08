/* tslint:disable */
/* eslint-disable */
/**
 * RWS Language Cloud API
 * The RWS Language Cloud public API.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ListTermbaseEntriesResponse,
  ListTermbaseTermsResponse,
  ListTermbasesResponse,
  Termbase,
  TermbaseCreateRequest,
  TermbaseEntry,
  TermbaseEntryCreateRequest,
  TermbaseEntryUpdateRequest,
  TermbaseUpdateRequest,
} from '../models/index';

export interface CreateTermbaseRequest {
    authorization: string;
    xLCTenant: string;
    fields?: string;
    termbaseCreateRequest?: TermbaseCreateRequest;
}

export interface CreateTermbaseEntryRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
    termbaseEntryCreateRequest?: TermbaseEntryCreateRequest;
}

export interface DeleteTermbaseRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
}

export interface DeleteTermbaseEntriesRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
}

export interface DeleteTermbaseEntryRequest {
    termbaseId: string;
    entryId: string;
    authorization: string;
    xLCTenant: string;
}

export interface GetTermbaseRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface GetTermbaseEntryRequest {
    termbaseId: string;
    entryId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListTermbaseRequest {
    authorization: string;
    xLCTenant: string;
    location?: Array<string>;
    locationStrategy?: ListTermbaseLocationStrategyEnum;
    fields?: string;
    top?: number;
    skip?: number;
}

export interface ListTermbaseEntriesRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
    fields?: string;
    humanReadableIds?: Array<string>;
}

export interface ListTermbaseTermsRequest {
    termbaseId: string;
    sourceLanguageCode: string;
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
    search?: string;
    searchType?: ListTermbaseTermsSearchTypeEnum;
    targetLanguageCode?: string;
}

export interface UpdateTermbaseRequest {
    termbaseId: string;
    authorization: string;
    xLCTenant: string;
    termbaseUpdateRequest?: TermbaseUpdateRequest;
}

export interface UpdateTermbaseEntryRequest {
    termbaseId: string;
    entryId: string;
    authorization: string;
    xLCTenant: string;
    termbaseEntryUpdateRequest?: TermbaseEntryUpdateRequest;
}

/**
 * 
 */
export class TermbaseApi extends runtime.BaseAPI {

    /**
     * Creates a new termbase. The termbase can be created with a termbase template by providing the templateId or by providing a custom termbaseStructure.  If only a `termbaseTemplateId` was provided, the termbase will be created using data from the template.  If only a `termbaseStructure` was provided, the termbase will be created using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
     * Create Termbase
     */
    async createTermbaseRaw(requestParameters: CreateTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Termbase>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling createTermbase().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling createTermbase().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['termbaseCreateRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new termbase. The termbase can be created with a termbase template by providing the templateId or by providing a custom termbaseStructure.  If only a `termbaseTemplateId` was provided, the termbase will be created using data from the template.  If only a `termbaseStructure` was provided, the termbase will be created using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
     * Create Termbase
     */
    async createTermbase(requestParameters: CreateTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Termbase> {
        const response = await this.createTermbaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new termbase entry. For more information about how to use `fieldValueLinks` see [`Create termbase entry`](../docs/termbase/Termbase-entries.md#creating-a-termbase-entry).
     * Create Termbase Entry
     */
    async createTermbaseEntryRaw(requestParameters: CreateTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TermbaseEntry>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling createTermbaseEntry().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling createTermbaseEntry().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling createTermbaseEntry().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['termbaseEntryCreateRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new termbase entry. For more information about how to use `fieldValueLinks` see [`Create termbase entry`](../docs/termbase/Termbase-entries.md#creating-a-termbase-entry).
     * Create Termbase Entry
     */
    async createTermbaseEntry(requestParameters: CreateTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TermbaseEntry> {
        const response = await this.createTermbaseEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a termbase by identifier.
     * Delete Termbase
     */
    async deleteTermbaseRaw(requestParameters: DeleteTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling deleteTermbase().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteTermbase().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling deleteTermbase().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a termbase by identifier.
     * Delete Termbase
     */
    async deleteTermbase(requestParameters: DeleteTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTermbaseRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes all the entries in the termbase.
     * Delete Termbase Entries
     */
    async deleteTermbaseEntriesRaw(requestParameters: DeleteTermbaseEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling deleteTermbaseEntries().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteTermbaseEntries().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling deleteTermbaseEntries().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all the entries in the termbase.
     * Delete Termbase Entries
     */
    async deleteTermbaseEntries(requestParameters: DeleteTermbaseEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTermbaseEntriesRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a termbase entry.
     * Delete Termbase Entry
     */
    async deleteTermbaseEntryRaw(requestParameters: DeleteTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling deleteTermbaseEntry().'
            );
        }

        if (requestParameters['entryId'] == null) {
            throw new runtime.RequiredError(
                'entryId',
                'Required parameter "entryId" was null or undefined when calling deleteTermbaseEntry().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling deleteTermbaseEntry().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling deleteTermbaseEntry().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries/{entryId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters['entryId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a termbase entry.
     * Delete Termbase Entry
     */
    async deleteTermbaseEntry(requestParameters: DeleteTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTermbaseEntryRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a termbase by identifier.
     * Get Termbase
     */
    async getTermbaseRaw(requestParameters: GetTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Termbase>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling getTermbase().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getTermbase().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getTermbase().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a termbase by identifier.
     * Get Termbase
     */
    async getTermbase(requestParameters: GetTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Termbase> {
        const response = await this.getTermbaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a termbase entry by identifier.
     * Get Termbase Entry
     */
    async getTermbaseEntryRaw(requestParameters: GetTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TermbaseEntry>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling getTermbaseEntry().'
            );
        }

        if (requestParameters['entryId'] == null) {
            throw new runtime.RequiredError(
                'entryId',
                'Required parameter "entryId" was null or undefined when calling getTermbaseEntry().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getTermbaseEntry().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getTermbaseEntry().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries/{entryId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters['entryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a termbase entry by identifier.
     * Get Termbase Entry
     */
    async getTermbaseEntry(requestParameters: GetTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TermbaseEntry> {
        const response = await this.getTermbaseEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List termbases.
     * List Termbases
     */
    async listTermbaseRaw(requestParameters: ListTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTermbasesResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listTermbase().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listTermbase().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['location'] != null) {
            queryParameters['location'] = requestParameters['location']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['locationStrategy'] != null) {
            queryParameters['locationStrategy'] = requestParameters['locationStrategy'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['top'] != null) {
            queryParameters['top'] = requestParameters['top'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List termbases.
     * List Termbases
     */
    async listTermbase(requestParameters: ListTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTermbasesResponse> {
        const response = await this.listTermbaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all the entries in a termbase.
     * List Termbase Entries
     */
    async listTermbaseEntriesRaw(requestParameters: ListTermbaseEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTermbaseEntriesResponse>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling listTermbaseEntries().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listTermbaseEntries().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listTermbaseEntries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['top'] != null) {
            queryParameters['top'] = requestParameters['top'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['humanReadableIds'] != null) {
            queryParameters['humanReadableIds'] = requestParameters['humanReadableIds'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all the entries in a termbase.
     * List Termbase Entries
     */
    async listTermbaseEntries(requestParameters: ListTermbaseEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTermbaseEntriesResponse> {
        const response = await this.listTermbaseEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all the terms of the termbase. Search types: - normal: Use normal search to look for terms that match the text exactly as entered. - linguistic: Use linguistic search to look for terms that are similar to the search term. Linguistic search is based on stemming and other language-dependent aspects. - fuzzy: Use fuzzy search to look for terms that are similar to the search term. Fuzzy search is more fault-tolerant than linguistic search.
     * List Termbase Terms
     */
    async listTermbaseTermsRaw(requestParameters: ListTermbaseTermsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTermbaseTermsResponse>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling listTermbaseTerms().'
            );
        }

        if (requestParameters['sourceLanguageCode'] == null) {
            throw new runtime.RequiredError(
                'sourceLanguageCode',
                'Required parameter "sourceLanguageCode" was null or undefined when calling listTermbaseTerms().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listTermbaseTerms().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listTermbaseTerms().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['top'] != null) {
            queryParameters['top'] = requestParameters['top'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['searchType'] != null) {
            queryParameters['searchType'] = requestParameters['searchType'];
        }

        if (requestParameters['targetLanguageCode'] != null) {
            queryParameters['targetLanguageCode'] = requestParameters['targetLanguageCode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/terms/{sourceLanguageCode}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))).replace(`{${"sourceLanguageCode"}}`, encodeURIComponent(String(requestParameters['sourceLanguageCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all the terms of the termbase. Search types: - normal: Use normal search to look for terms that match the text exactly as entered. - linguistic: Use linguistic search to look for terms that are similar to the search term. Linguistic search is based on stemming and other language-dependent aspects. - fuzzy: Use fuzzy search to look for terms that are similar to the search term. Fuzzy search is more fault-tolerant than linguistic search.
     * List Termbase Terms
     */
    async listTermbaseTerms(requestParameters: ListTermbaseTermsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTermbaseTermsResponse> {
        const response = await this.listTermbaseTermsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the termbase. The termbase can be updated with a termbase template by providing the termbaseTemplateId or by providing a custom termbaseStructure.   If only a `termbaseTemplateId ` was provided, the termbase will be updated using data from the template.  If only a `termbaseStructure` was provided, the termbase will be updated using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
     * Update Termbase
     */
    async updateTermbaseRaw(requestParameters: UpdateTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling updateTermbase().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling updateTermbase().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling updateTermbase().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['termbaseUpdateRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the termbase. The termbase can be updated with a termbase template by providing the termbaseTemplateId or by providing a custom termbaseStructure.   If only a `termbaseTemplateId ` was provided, the termbase will be updated using data from the template.  If only a `termbaseStructure` was provided, the termbase will be updated using data from the structure.  If both, `termbaseTemplateId` and `termbaseStructure` are added in the request, the `termbaseStructure` takes precedence.
     * Update Termbase
     */
    async updateTermbase(requestParameters: UpdateTermbaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateTermbaseRaw(requestParameters, initOverrides);
    }

    /**
     * Updates a termbase entry by identifier. The request body will overwrite the existing data.
     * Update Termbase Entry
     */
    async updateTermbaseEntryRaw(requestParameters: UpdateTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['termbaseId'] == null) {
            throw new runtime.RequiredError(
                'termbaseId',
                'Required parameter "termbaseId" was null or undefined when calling updateTermbaseEntry().'
            );
        }

        if (requestParameters['entryId'] == null) {
            throw new runtime.RequiredError(
                'entryId',
                'Required parameter "entryId" was null or undefined when calling updateTermbaseEntry().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling updateTermbaseEntry().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling updateTermbaseEntry().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['xLCTenant'] != null) {
            headerParameters['X-LC-Tenant'] = String(requestParameters['xLCTenant']);
        }

        const response = await this.request({
            path: `/termbases/{termbaseId}/entries/{entryId}`.replace(`{${"termbaseId"}}`, encodeURIComponent(String(requestParameters['termbaseId']))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters['entryId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['termbaseEntryUpdateRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a termbase entry by identifier. The request body will overwrite the existing data.
     * Update Termbase Entry
     */
    async updateTermbaseEntry(requestParameters: UpdateTermbaseEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateTermbaseEntryRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const ListTermbaseLocationStrategyEnum = {
    Location: 'location',
    Lineage: 'lineage',
    Bloodline: 'bloodline',
    Genealogy: 'genealogy'
} as const;
export type ListTermbaseLocationStrategyEnum = typeof ListTermbaseLocationStrategyEnum[keyof typeof ListTermbaseLocationStrategyEnum];
/**
 * @export
 */
export const ListTermbaseTermsSearchTypeEnum = {
    Normal: 'normal',
    Linguistic: 'linguistic',
    Fuzzy: 'fuzzy'
} as const;
export type ListTermbaseTermsSearchTypeEnum = typeof ListTermbaseTermsSearchTypeEnum[keyof typeof ListTermbaseTermsSearchTypeEnum];
