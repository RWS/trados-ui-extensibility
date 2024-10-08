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
  LanguageProcessingRule,
  ListLanguageProcessingRules,
} from '../models/index';

export interface GetLanguageProcessingRuleRequest {
    languageProcessingRuleId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListLanguageProcessingRulesRequest {
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
    sort?: string;
    location?: Array<string>;
    locationStrategy?: ListLanguageProcessingRulesLocationStrategyEnum;
    fields?: string;
}

/**
 * 
 */
export class LanguageProcessingApi extends runtime.BaseAPI {

    /**
     * Returns a Language Processing Rule by identifier.
     * Get Language Processing Rule
     */
    async getLanguageProcessingRuleRaw(requestParameters: GetLanguageProcessingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LanguageProcessingRule>> {
        if (requestParameters['languageProcessingRuleId'] == null) {
            throw new runtime.RequiredError(
                'languageProcessingRuleId',
                'Required parameter "languageProcessingRuleId" was null or undefined when calling getLanguageProcessingRule().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getLanguageProcessingRule().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getLanguageProcessingRule().'
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
            path: `/language-processing-rules/{languageProcessingRuleId}`.replace(`{${"languageProcessingRuleId"}}`, encodeURIComponent(String(requestParameters['languageProcessingRuleId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a Language Processing Rule by identifier.
     * Get Language Processing Rule
     */
    async getLanguageProcessingRule(requestParameters: GetLanguageProcessingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LanguageProcessingRule> {
        const response = await this.getLanguageProcessingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of Language Processing Rules.
     * List Language Processing Rules
     */
    async listLanguageProcessingRulesRaw(requestParameters: ListLanguageProcessingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListLanguageProcessingRules>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listLanguageProcessingRules().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listLanguageProcessingRules().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['top'] != null) {
            queryParameters['top'] = requestParameters['top'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['location'] != null) {
            queryParameters['location'] = requestParameters['location']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['locationStrategy'] != null) {
            queryParameters['locationStrategy'] = requestParameters['locationStrategy'];
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
            path: `/language-processing-rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of Language Processing Rules.
     * List Language Processing Rules
     */
    async listLanguageProcessingRules(requestParameters: ListLanguageProcessingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListLanguageProcessingRules> {
        const response = await this.listLanguageProcessingRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListLanguageProcessingRulesLocationStrategyEnum = {
    Location: 'location',
    Lineage: 'lineage',
    Bloodline: 'bloodline',
    Genealogy: 'genealogy'
} as const;
export type ListLanguageProcessingRulesLocationStrategyEnum = typeof ListLanguageProcessingRulesLocationStrategyEnum[keyof typeof ListLanguageProcessingRulesLocationStrategyEnum];
