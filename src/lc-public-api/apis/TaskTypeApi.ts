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
  ListTaskTypesResponse,
  TaskType,
} from '../models/index';

export interface GetTaskTypeRequest {
    taskTypeId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListTaskTypesRequest {
    authorization: string;
    xLCTenant: string;
    key?: Array<string>;
    automatic?: boolean;
    top?: number;
    skip?: number;
    location?: Array<string>;
    locationStrategy?: ListTaskTypesLocationStrategyEnum;
    sort?: string;
    fields?: string;
}

/**
 * 
 */
export class TaskTypeApi extends runtime.BaseAPI {

    /**
     * Retrieves a task type by identifier.
     * Get Task Type
     */
    async getTaskTypeRaw(requestParameters: GetTaskTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskType>> {
        if (requestParameters['taskTypeId'] == null) {
            throw new runtime.RequiredError(
                'taskTypeId',
                'Required parameter "taskTypeId" was null or undefined when calling getTaskType().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getTaskType().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getTaskType().'
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
            path: `/task-types/{taskTypeId}`.replace(`{${"taskTypeId"}}`, encodeURIComponent(String(requestParameters['taskTypeId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a task type by identifier.
     * Get Task Type
     */
    async getTaskType(requestParameters: GetTaskTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskType> {
        const response = await this.getTaskTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all the task types in an account.
     * List Task Types
     */
    async listTaskTypesRaw(requestParameters: ListTaskTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTaskTypesResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listTaskTypes().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listTaskTypes().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['automatic'] != null) {
            queryParameters['automatic'] = requestParameters['automatic'];
        }

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
            path: `/task-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves all the task types in an account.
     * List Task Types
     */
    async listTaskTypes(requestParameters: ListTaskTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTaskTypesResponse> {
        const response = await this.listTaskTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListTaskTypesLocationStrategyEnum = {
    Location: 'location',
    Lineage: 'lineage',
    Bloodline: 'bloodline',
    Genealogy: 'genealogy'
} as const;
export type ListTaskTypesLocationStrategyEnum = typeof ListTaskTypesLocationStrategyEnum[keyof typeof ListTaskTypesLocationStrategyEnum];
