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
  ListRateLimitsResponse,
} from '../models/index';

export interface ListRateLimitsRequest {
    authorization: string;
    xLCTenant: string;
    top?: number;
    skip?: number;
}

/**
 * 
 */
export class RateLimitsApi extends runtime.BaseAPI {

    /**
     * Retrieves a list of all rate limits applicable for an account.
     * List Rate Limits
     */
    async listRateLimitsRaw(requestParameters: ListRateLimitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListRateLimitsResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listRateLimits().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listRateLimits().'
            );
        }

        const queryParameters: any = {};

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
            path: `/rate-limits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all rate limits applicable for an account.
     * List Rate Limits
     */
    async listRateLimits(requestParameters: ListRateLimitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListRateLimitsResponse> {
        const response = await this.listRateLimitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
