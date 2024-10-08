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
  CustomFieldDefinition,
  ListCustomFieldDefinitionsResponse,
} from '../models/index';

export interface GetCustomFieldRequest {
    customFieldDefinitionId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListCustomFieldsRequest {
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
    location?: Array<string>;
    locationStrategy?: ListCustomFieldsLocationStrategyEnum;
    sort?: string;
    fields?: string;
}

/**
 * 
 */
export class CustomFieldApi extends runtime.BaseAPI {

    /**
     * Retrieves a Custom Field by identifier.
     * Get Custom Field Definition
     */
    async getCustomFieldRaw(requestParameters: GetCustomFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomFieldDefinition>> {
        if (requestParameters['customFieldDefinitionId'] == null) {
            throw new runtime.RequiredError(
                'customFieldDefinitionId',
                'Required parameter "customFieldDefinitionId" was null or undefined when calling getCustomField().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getCustomField().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getCustomField().'
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
            path: `/custom-field-definitions/{customFieldDefinitionId}`.replace(`{${"customFieldDefinitionId"}}`, encodeURIComponent(String(requestParameters['customFieldDefinitionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a Custom Field by identifier.
     * Get Custom Field Definition
     */
    async getCustomField(requestParameters: GetCustomFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomFieldDefinition> {
        const response = await this.getCustomFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all the custom field definitions.
     * List Custom Field Definitions
     */
    async listCustomFieldsRaw(requestParameters: ListCustomFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCustomFieldDefinitionsResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listCustomFields().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listCustomFields().'
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
            path: `/custom-field-definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all the custom field definitions.
     * List Custom Field Definitions
     */
    async listCustomFields(requestParameters: ListCustomFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCustomFieldDefinitionsResponse> {
        const response = await this.listCustomFieldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListCustomFieldsLocationStrategyEnum = {
    Location: 'location',
    Lineage: 'lineage',
    Bloodline: 'bloodline',
    Genealogy: 'genealogy'
} as const;
export type ListCustomFieldsLocationStrategyEnum = typeof ListCustomFieldsLocationStrategyEnum[keyof typeof ListCustomFieldsLocationStrategyEnum];
