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
  ListTranslationEnginesResponse,
  TranslationEngine,
  TranslationEngineUpdateRequest,
} from '../models/index';

export interface GetTranslationEngineRequest {
    translationEngineId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListTranslationEnginesRequest {
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
    location?: Array<string>;
    locationStrategy?: ListTranslationEnginesLocationStrategyEnum;
    sort?: string;
    fields?: string;
}

export interface UpdateTranslationEngineRequest {
    translationEngineId: string;
    authorization: string;
    xLCTenant: string;
    translationEngineUpdateRequest?: TranslationEngineUpdateRequest;
}

/**
 * 
 */
export class TranslationEngineApi extends runtime.BaseAPI {

    /**
     * Retrieves a translation engine.
     * Get Translation Engine
     */
    async getTranslationEngineRaw(requestParameters: GetTranslationEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TranslationEngine>> {
        if (requestParameters['translationEngineId'] == null) {
            throw new runtime.RequiredError(
                'translationEngineId',
                'Required parameter "translationEngineId" was null or undefined when calling getTranslationEngine().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getTranslationEngine().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getTranslationEngine().'
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
            path: `/translation-engines/{translationEngineId}`.replace(`{${"translationEngineId"}}`, encodeURIComponent(String(requestParameters['translationEngineId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a translation engine.
     * Get Translation Engine
     */
    async getTranslationEngine(requestParameters: GetTranslationEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TranslationEngine> {
        const response = await this.getTranslationEngineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all the translation engines in an account.
     * List Translation Engines
     */
    async listTranslationEnginesRaw(requestParameters: ListTranslationEnginesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTranslationEnginesResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listTranslationEngines().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listTranslationEngines().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['top'] != null) {
            queryParameters['top'] = requestParameters['top'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['location'] != null) {
            queryParameters['location'] = requestParameters['location']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['locationStrategy'] != null) {
            queryParameters['locationStrategy'] = requestParameters['locationStrategy'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

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
            path: `/translation-engines`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves all the translation engines in an account.
     * List Translation Engines
     */
    async listTranslationEngines(requestParameters: ListTranslationEnginesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTranslationEnginesResponse> {
        const response = await this.listTranslationEnginesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a translation engine.   It can be used to update a stand-alone translation engine or a project\'s translation engine.  The identifier of a project\'s translation engine can be retrieved only by calling [Get Project endpoint](https://sdl-language-tech.stoplight.io/docs/lcpublicapi/fd9ee0beb37ca-get-project).  Pay special attention that some properties can not be changed for a project\'s translation engine. These include: name, description, definition.languageProcessingId, and language pairs can not be added/removed from definition.languagePairDefinitions.   Pay special attention to how [updating works](https://languagecloud.sdl.com/lc/api-docs/updating-data-with-put).
     * Update Translation Engine
     */
    async updateTranslationEngineRaw(requestParameters: UpdateTranslationEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['translationEngineId'] == null) {
            throw new runtime.RequiredError(
                'translationEngineId',
                'Required parameter "translationEngineId" was null or undefined when calling updateTranslationEngine().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling updateTranslationEngine().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling updateTranslationEngine().'
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
            path: `/translation-engines/{translationEngineId}`.replace(`{${"translationEngineId"}}`, encodeURIComponent(String(requestParameters['translationEngineId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['translationEngineUpdateRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a translation engine.   It can be used to update a stand-alone translation engine or a project\'s translation engine.  The identifier of a project\'s translation engine can be retrieved only by calling [Get Project endpoint](https://sdl-language-tech.stoplight.io/docs/lcpublicapi/fd9ee0beb37ca-get-project).  Pay special attention that some properties can not be changed for a project\'s translation engine. These include: name, description, definition.languageProcessingId, and language pairs can not be added/removed from definition.languagePairDefinitions.   Pay special attention to how [updating works](https://languagecloud.sdl.com/lc/api-docs/updating-data-with-put).
     * Update Translation Engine
     */
    async updateTranslationEngine(requestParameters: UpdateTranslationEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateTranslationEngineRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const ListTranslationEnginesLocationStrategyEnum = {
    Location: 'location',
    Lineage: 'lineage',
    Bloodline: 'bloodline',
    Genealogy: 'genealogy'
} as const;
export type ListTranslationEnginesLocationStrategyEnum = typeof ListTranslationEnginesLocationStrategyEnum[keyof typeof ListTranslationEnginesLocationStrategyEnum];
