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
  Folder,
  ListFoldersResponse,
} from '../models/index';

export interface GetFolderRequest {
    folderId: string;
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface GetRootFolderRequest {
    authorization: string;
    xLCTenant: string;
    fields?: string;
}

export interface ListFoldersRequest {
    authorization: string;
    xLCTenant: string;
    name?: string;
    fields?: string;
}

/**
 * 
 */
export class FolderApi extends runtime.BaseAPI {

    /**
     * Retrieves a folder by identifier.
     * Get Folder
     */
    async getFolderRaw(requestParameters: GetFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Folder>> {
        if (requestParameters['folderId'] == null) {
            throw new runtime.RequiredError(
                'folderId',
                'Required parameter "folderId" was null or undefined when calling getFolder().'
            );
        }

        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getFolder().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getFolder().'
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
            path: `/folders/{folderId}`.replace(`{${"folderId"}}`, encodeURIComponent(String(requestParameters['folderId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a folder by identifier.
     * Get Folder
     */
    async getFolder(requestParameters: GetFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Folder> {
        const response = await this.getFolderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the Root folder in the account.
     * Get Root Folder
     */
    async getRootFolderRaw(requestParameters: GetRootFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Folder>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getRootFolder().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling getRootFolder().'
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
            path: `/folders/root`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the Root folder in the account.
     * Get Root Folder
     */
    async getRootFolder(requestParameters: GetRootFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Folder> {
        const response = await this.getRootFolderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all the folders in an account. Max 500.
     * List Folders
     */
    async listFoldersRaw(requestParameters: ListFoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFoldersResponse>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling listFolders().'
            );
        }

        if (requestParameters['xLCTenant'] == null) {
            throw new runtime.RequiredError(
                'xLCTenant',
                'Required parameter "xLCTenant" was null or undefined when calling listFolders().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
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
            path: `/folders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of all the folders in an account. Max 500.
     * List Folders
     */
    async listFolders(requestParameters: ListFoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFoldersResponse> {
        const response = await this.listFoldersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
