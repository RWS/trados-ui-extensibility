/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The account identifier.
     * @type {string}
     * @memberof Account
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The account name.</div> 
     * @type {string}
     * @memberof Account
     */
    name?: string;
}
/**
 * Input for adding projects to group.
 * @export
 * @interface AddProjectsToGroupRequest
 */
export interface AddProjectsToGroupRequest {
    /**
     * The projects to be added to group.
     * @type {Array<ProjectGroupProjectRequest>}
     * @memberof AddProjectsToGroupRequest
     */
    projects: Array<ProjectGroupProjectRequest>;
}
/**
 * Add Projects To Group response.
 * @export
 * @interface AddProjectsToGroupResponse
 */
export interface AddProjectsToGroupResponse {
    /**
     * The project group identifier.
     * @type {string}
     * @memberof AddProjectsToGroupResponse
     */
    id: string;
    /**
     * The project group name.
     * @type {string}
     * @memberof AddProjectsToGroupResponse
     */
    name?: string;
    /**
     * The project group description.
     * @type {string}
     * @memberof AddProjectsToGroupResponse
     */
    description?: string;
    /**
     * The status of the projects in the project group.
     * 
     * - `new`: the group is new created, or all projects in the group have status New
     * 
     * - `inProgress`: at least one project in the group is in progress
     * 
     * - `completed`: all projects in the group have status Completed
     * 
     * - `deleting`: the group is getting deleted and the projects are removing from it
     * @type {string}
     * @memberof AddProjectsToGroupResponse
     */
    status?: AddProjectsToGroupResponseStatusEnum;
    /**
     * The projects in the project group.
     * @type {Array<ProjectGroupProject>}
     * @memberof AddProjectsToGroupResponse
     */
    projects?: Array<ProjectGroupProject>;
    /**
     * 
     * @type {FolderV2}
     * @memberof AddProjectsToGroupResponse
     */
    location?: FolderV2;
    /**
     * 
     * @type {string}
     * @memberof AddProjectsToGroupResponse
     */
    shortId?: string;
    /**
     * The date and time when the project group was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof AddProjectsToGroupResponse
     */
    createdAt?: Date;
    /**
     * The date and time when the project group was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof AddProjectsToGroupResponse
     */
    lastModifiedAt?: Date;
}


/**
 * @export
 */
export const AddProjectsToGroupResponseStatusEnum = {
    New: 'new',
    InProgress: 'inProgress',
    Completed: 'completed',
    Deleting: 'deleting'
} as const;
export type AddProjectsToGroupResponseStatusEnum = typeof AddProjectsToGroupResponseStatusEnum[keyof typeof AddProjectsToGroupResponseStatusEnum];

/**
 * 
 * @export
 * @interface AdditionalCost
 */
export interface AdditionalCost {
    /**
     * The name of the additional cost. 
     * @type {string}
     * @memberof AdditionalCost
     */
    name: string;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof AdditionalCost
     */
    type: AdditionalCostTypeEnum;
    /**
     * The number of the additional cost.
     * @type {number}
     * @memberof AdditionalCost
     */
    index: number;
    /**
     * The cost of a unit.
     * @type {number}
     * @memberof AdditionalCost
     */
    costPerUnit: number;
    /**
     * The number of units for which a cost is applied.
     * @type {number}
     * @memberof AdditionalCost
     */
    unitCount: number;
    /**
     * The unit type of the 'volume' cost, used as reference for the unit cost.
     * @type {string}
     * @memberof AdditionalCost
     */
    volumeUnitType: AdditionalCostVolumeUnitTypeEnum;
    /**
     * Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCost
     */
    conditionalCostType: AdditionalCostConditionalCostTypeEnum;
    /**
     * Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCost
     */
    costOperator: AdditionalCostCostOperatorEnum;
    /**
     * Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCost
     */
    costVariable: AdditionalCostCostVariableEnum;
    /**
     * Operand of the Conditional type cost.
     * @type {number}
     * @memberof AdditionalCost
     */
    operand: number;
}


/**
 * @export
 */
export const AdditionalCostTypeEnum = {
    Volume: 'volume',
    PerTargetLanguage: 'perTargetLanguage',
    PerFile: 'perFile',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type AdditionalCostTypeEnum = typeof AdditionalCostTypeEnum[keyof typeof AdditionalCostTypeEnum];

/**
 * @export
 */
export const AdditionalCostVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type AdditionalCostVolumeUnitTypeEnum = typeof AdditionalCostVolumeUnitTypeEnum[keyof typeof AdditionalCostVolumeUnitTypeEnum];

/**
 * @export
 */
export const AdditionalCostConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type AdditionalCostConditionalCostTypeEnum = typeof AdditionalCostConditionalCostTypeEnum[keyof typeof AdditionalCostConditionalCostTypeEnum];

/**
 * @export
 */
export const AdditionalCostCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type AdditionalCostCostOperatorEnum = typeof AdditionalCostCostOperatorEnum[keyof typeof AdditionalCostCostOperatorEnum];

/**
 * @export
 */
export const AdditionalCostCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type AdditionalCostCostVariableEnum = typeof AdditionalCostCostVariableEnum[keyof typeof AdditionalCostCostVariableEnum];

/**
 * 
 * @export
 * @interface AdditionalCostLanguage
 */
export interface AdditionalCostLanguage {
    /**
     * The name of the additional cost. 
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    name: string;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    type: AdditionalCostLanguageTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The number of the additional cost.
     * @type {number}
     * @memberof AdditionalCostLanguage
     */
    index?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The cost of a unit.
     * @type {number}
     * @memberof AdditionalCostLanguage
     */
    costPerUnit?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The number of units for which a cost is applied.
     * @type {number}
     * @memberof AdditionalCostLanguage
     */
    unitCount?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The unit type of the 'volume' cost, used as reference for the unit cost.
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    volumeUnitType?: AdditionalCostLanguageVolumeUnitTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    conditionalCostType?: AdditionalCostLanguageConditionalCostTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    costOperator?: AdditionalCostLanguageCostOperatorEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Only for the Conditional type.
     * @type {string}
     * @memberof AdditionalCostLanguage
     */
    costVariable?: AdditionalCostLanguageCostVariableEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Operand of the Conditional type cost.
     * @type {number}
     * @memberof AdditionalCostLanguage
     */
    operand?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div> Array of task type identifiers where this additional cost is applied.
     * @type {Array<string>}
     * @memberof AdditionalCostLanguage
     */
    serviceTypes?: Array<string>;
}


/**
 * @export
 */
export const AdditionalCostLanguageTypeEnum = {
    Volume: 'volume',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type AdditionalCostLanguageTypeEnum = typeof AdditionalCostLanguageTypeEnum[keyof typeof AdditionalCostLanguageTypeEnum];

/**
 * @export
 */
export const AdditionalCostLanguageVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type AdditionalCostLanguageVolumeUnitTypeEnum = typeof AdditionalCostLanguageVolumeUnitTypeEnum[keyof typeof AdditionalCostLanguageVolumeUnitTypeEnum];

/**
 * @export
 */
export const AdditionalCostLanguageConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type AdditionalCostLanguageConditionalCostTypeEnum = typeof AdditionalCostLanguageConditionalCostTypeEnum[keyof typeof AdditionalCostLanguageConditionalCostTypeEnum];

/**
 * @export
 */
export const AdditionalCostLanguageCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type AdditionalCostLanguageCostOperatorEnum = typeof AdditionalCostLanguageCostOperatorEnum[keyof typeof AdditionalCostLanguageCostOperatorEnum];

/**
 * @export
 */
export const AdditionalCostLanguageCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type AdditionalCostLanguageCostVariableEnum = typeof AdditionalCostLanguageCostVariableEnum[keyof typeof AdditionalCostLanguageCostVariableEnum];

/**
 * 
 * @export
 * @interface AnalysisStatistics
 */
export interface AnalysisStatistics {
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    exactMatch?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    inContextExactMatch?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    perfectMatch?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    _new?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    repetitions?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    crossDocumentRepetitions?: Count;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    machineTranslation?: Count;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Statistics count.</div> 
     * @type {Array<FuzzyCount>}
     * @memberof AnalysisStatistics
     */
    fuzzyMatch?: Array<FuzzyCount>;
    /**
     * 
     * @type {Count}
     * @memberof AnalysisStatistics
     */
    total?: Count;
}
/**
 * Project analytics.
 * @export
 * @interface Analytics
 */
export interface Analytics {
    /**
     * 
     * @type {AnalyticsProgress}
     * @memberof Analytics
     */
    progress?: AnalyticsProgress;
    /**
     * 
     * @type {AnalyticsOverdueStatistics}
     * @memberof Analytics
     */
    overdueStatistics?: AnalyticsOverdueStatistics;
    /**
     * 
     * @type {Array<AnalyticsSourceFileStatistics>}
     * @memberof Analytics
     */
    sourceFileStatistics?: Array<AnalyticsSourceFileStatistics>;
    /**
     * 
     * @type {AnalyticsWorkloadStatistics}
     * @memberof Analytics
     */
    workloadStatistics?: AnalyticsWorkloadStatistics;
    /**
     * 
     * @type {Array<AnalyticsTaskTypeStatistics>}
     * @memberof Analytics
     */
    taskTypeStatistics?: Array<AnalyticsTaskTypeStatistics>;
    /**
     * 
     * @type {Array<AnalyticsPhaseStatistics>}
     * @memberof Analytics
     */
    phaseStatistics?: Array<AnalyticsPhaseStatistics>;
}
/**
 * Statistics on overdue work.
 * @export
 * @interface AnalyticsOverdueStatistics
 */
export interface AnalyticsOverdueStatistics {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The number of overdue tasks.</div> 
     * @type {number}
     * @memberof AnalyticsOverdueStatistics
     */
    overdueTasks?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The number of tasks closed after the due date.</div> 
     * @type {number}
     * @memberof AnalyticsOverdueStatistics
     */
    dueDateCloseTasks?: number;
}
/**
 * Statistics for phases grouped.
 * @export
 * @interface AnalyticsPhaseStatistics
 */
export interface AnalyticsPhaseStatistics {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof AnalyticsPhaseStatistics
     */
    name?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsPhaseStatistics
     */
    total?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsPhaseStatistics
     */
    completed?: number;
}
/**
 * Overall progress.
 * @export
 * @interface AnalyticsProgress
 */
export interface AnalyticsProgress {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The overall progress.</div> 
     * @type {number}
     * @memberof AnalyticsProgress
     */
    overall?: number;
}
/**
 * Source file statistics grouped by role.
 * @export
 * @interface AnalyticsSourceFileStatistics
 */
export interface AnalyticsSourceFileStatistics {
    /**
     * 
     * @type {FileRole}
     * @memberof AnalyticsSourceFileStatistics
     */
    role?: FileRole;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file count.</div> 
     * @type {number}
     * @memberof AnalyticsSourceFileStatistics
     */
    count?: number;
}
/**
 * Task Type statistics grouped.
 * @export
 * @interface AnalyticsTaskTypeStatistics
 */
export interface AnalyticsTaskTypeStatistics {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof AnalyticsTaskTypeStatistics
     */
    id?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof AnalyticsTaskTypeStatistics
     */
    key?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsTaskTypeStatistics
     */
    total?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsTaskTypeStatistics
     */
    current?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsTaskTypeStatistics
     */
    completed?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsTaskTypeStatistics
     */
    error?: number;
}
/**
 * Statistics on workload progress.
 * @export
 * @interface AnalyticsWorkloadStatistics
 */
export interface AnalyticsWorkloadStatistics {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsWorkloadStatistics
     */
    completed?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof AnalyticsWorkloadStatistics
     */
    total?: number;
}
/**
 * Represents the result of an asynchronous operation, including status and potential error information.
 * @export
 * @interface AsynchronousResult
 */
export interface AsynchronousResult {
    /**
     * Unique identifier for the asynchronous operation.
     * @type {string}
     * @memberof AsynchronousResult
     */
    id: string;
    /**
     * The status of the asynchronous operation.
     * @type {string}
     * @memberof AsynchronousResult
     */
    status: AsynchronousResultStatusEnum;
    /**
     * When the status is 'failed', it contains the error message explaining what went wrong.
     * @type {string}
     * @memberof AsynchronousResult
     */
    errorMessage?: string;
}


/**
 * @export
 */
export const AsynchronousResultStatusEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed',
    Failed: 'failed'
} as const;
export type AsynchronousResultStatusEnum = typeof AsynchronousResultStatusEnum[keyof typeof AsynchronousResultStatusEnum];

/**
 * Resource configuration properties.
 * @export
 * @interface ConfigurationResourceRequest
 */
export interface ConfigurationResourceRequest {
    /**
     * Configuration resource identifier.
     * @type {string}
     * @memberof ConfigurationResourceRequest
     */
    id: string;
    /**
     * "copy": A copy of the resource will be used for the project execution. This is the default strategy.
     * 
     * "use": The actual resource will be used for the project execution.
     * @type {string}
     * @memberof ConfigurationResourceRequest
     */
    strategy?: ConfigurationResourceRequestStrategyEnum;
}


/**
 * @export
 */
export const ConfigurationResourceRequestStrategyEnum = {
    Copy: 'copy',
    Use: 'use'
} as const;
export type ConfigurationResourceRequestStrategyEnum = typeof ConfigurationResourceRequestStrategyEnum[keyof typeof ConfigurationResourceRequestStrategyEnum];

/**
 * Statistics count.
 * @export
 * @interface Count
 */
export interface Count {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Number of words.</div> 
     * @type {number}
     * @memberof Count
     */
    words?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Number of segments.</div> 
     * @type {number}
     * @memberof Count
     */
    segments?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Number of characters.</div> 
     * @type {number}
     * @memberof Count
     */
    characters?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Number of placeables.</div> 
     * @type {number}
     * @memberof Count
     */
    placeables?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Number of tags.</div> 
     * @type {number}
     * @memberof Count
     */
    tags?: number;
}
/**
 * A Custom Field model.
 * @export
 * @interface CustomField
 */
export interface CustomField {
    /**
     * Custom Field identifier.
     * @type {string}
     * @memberof CustomField
     */
    id: string;
    /**
     * Custom Field name. (Not available for List Projects, Get Project Template and List Project Templates endpoints)
     * @type {string}
     * @memberof CustomField
     */
    name?: string;
    /**
     * Custom Field friendly key.
     * @type {string}
     * @memberof CustomField
     */
    key?: string;
    /**
     * The value of the custom property. A date will be serialised as an ISO_8601 string.
     * @type {object}
     * @memberof CustomField
     */
    value?: object;
}
/**
 * The Custom Field definition.
 * @export
 * @interface CustomFieldDefinition
 */
export interface CustomFieldDefinition {
    /**
     * The identifier of the Custom Field Definition, generated by the service.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The display name of the Custom Field.</div> 
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    name?: string;
    /**
     * The key of the Custom Field, used for querying purposes.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    key?: string;
    /**
     * The description of the Custom Field.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    description?: string;
    /**
     * The value type supported by this Custom Field.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    type?: CustomFieldDefinitionTypeEnum;
    /**
     * Possible values if the type selected is "picklist" or "multiSelectPicklist".
     * @type {Set<string>}
     * @memberof CustomFieldDefinition
     */
    pickListOptions?: Set<string>;
    /**
     * The resource type to which this Custom Field can be applied.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    resourceType?: CustomFieldDefinitionResourceTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CustomFieldDefinition
     */
    isReadOnly?: boolean;
    /**
     * Specifies a default value for this Custom Field. This is required if the "isReadOnly" field is True.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    defaultValue?: string;
    /**
     * Specifies if this Custom Field is mandatory when creating a resource of the supported type.
     * @type {boolean}
     * @memberof CustomFieldDefinition
     */
    isMandatory?: boolean;
    /**
     * 
     * @type {FolderV2}
     * @memberof CustomFieldDefinition
     */
    location?: FolderV2;
}


/**
 * @export
 */
export const CustomFieldDefinitionTypeEnum = {
    Long: 'long',
    Double: 'double',
    Boolean: 'boolean',
    Date: 'date',
    String: 'string',
    Checkbox: 'checkbox',
    Longtext: 'longtext',
    Picklist: 'picklist',
    MultiSelectPicklist: 'multiSelectPicklist'
} as const;
export type CustomFieldDefinitionTypeEnum = typeof CustomFieldDefinitionTypeEnum[keyof typeof CustomFieldDefinitionTypeEnum];

/**
 * @export
 */
export const CustomFieldDefinitionResourceTypeEnum = {
    Project: 'project',
    Customer: 'customer'
} as const;
export type CustomFieldDefinitionResourceTypeEnum = typeof CustomFieldDefinitionResourceTypeEnum[keyof typeof CustomFieldDefinitionResourceTypeEnum];

/**
 * A Custom Field model used at project creation or project update.
 * @export
 * @interface CustomFieldRequest
 */
export interface CustomFieldRequest {
    /**
     * Custom Field friendly key.
     * @type {string}
     * @memberof CustomFieldRequest
     */
    key: string;
    /**
     * The value of the custom field. A date will be serialized as a ISO_8601 string. For read only custom fields (`isReadOnly`), it must be set exactly as the `defaultValue` from custom field definition. 
     * @type {object}
     * @memberof CustomFieldRequest
     */
    value?: object;
}
/**
 * A Custom Field resource model.
 * @export
 * @interface CustomFieldResource
 */
export interface CustomFieldResource {
    /**
     * Custom Field friendly key.
     * @type {string}
     * @memberof CustomFieldResource
     */
    key: string;
    /**
     * The value of the custom property. A date will be serialised as an ISO_8601 string.
     * @type {object}
     * @memberof CustomFieldResource
     */
    value: object;
}
/**
 * 
 * @export
 * @interface CustomFieldUpdateRequest
 */
export interface CustomFieldUpdateRequest {
    /**
     * The value of the custom field. A date will be serialized as a ISO_8601 string. For read only custom fields (`isReadOnly`), it must be set exactly as the `defaultValue` from custom field definition. 
     * @type {object}
     * @memberof CustomFieldUpdateRequest
     */
    value: object;
}
/**
 * Customer resource.
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * Customer identifier.
     * @type {string}
     * @memberof Customer
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Customer name.</div> 
     * @type {string}
     * @memberof Customer
     */
    name?: string;
    /**
     * 
     * @type {User}
     * @memberof Customer
     */
    keyContact?: User;
    /**
     * 
     * @type {FolderV2}
     * @memberof Customer
     */
    location?: FolderV2;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    ragStatus?: CustomerRagStatusEnum;
    /**
     * The custom field definitions.
     * @type {Array<CustomFieldResource>}
     * @memberof Customer
     */
    customFieldDefinitions?: Array<CustomFieldResource>;
}


/**
 * @export
 */
export const CustomerRagStatusEnum = {
    Green: 'green',
    Amber: 'amber',
    Red: 'red'
} as const;
export type CustomerRagStatusEnum = typeof CustomerRagStatusEnum[keyof typeof CustomerRagStatusEnum];

/**
 * Input for Customer creation.
 * 
 *  It will create an invitation for an account user account.
 * @export
 * @interface CustomerCreateRequest
 */
export interface CustomerCreateRequest {
    /**
     * The name of the customer.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    name: string;
    /**
     * The identifier of the parent folder for the customer.
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    location?: string;
    /**
     * Key contact first name. If you provide this field, pleaase also provide email and last name
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    firstName?: string;
    /**
     * Key contact last name. If you provide this field, pleaase also provide email and first name
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    lastName?: string;
    /**
     * Key contact email.. If you provide this field, pleaase also provide first name and last name
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    email?: string;
}
/**
 * Input for Customer update.
 * 
 * 
 * @export
 * @interface CustomerUpdateRequest
 */
export interface CustomerUpdateRequest {
    /**
     * The name of the customer.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof CustomerUpdateRequest
     */
    name?: string;
    /**
     * The ID of the account user set as key contact.
     * @type {string}
     * @memberof CustomerUpdateRequest
     */
    keyContactId?: string;
    /**
     * The color tag used to mark-up a customer in the UI.
     * @type {string}
     * @memberof CustomerUpdateRequest
     */
    ragStatus?: CustomerUpdateRequestRagStatusEnum;
    /**
     * The Custom Fields
     * @type {Array<CustomFieldResource>}
     * @memberof CustomerUpdateRequest
     */
    customFieldDefinitions?: Array<CustomFieldResource>;
    /**
     * The folder visibilty to its subfulders.
     * @type {string}
     * @memberof CustomerUpdateRequest
     */
    folderVisibility?: CustomerUpdateRequestFolderVisibilityEnum;
}


/**
 * @export
 */
export const CustomerUpdateRequestRagStatusEnum = {
    Green: 'green',
    Amber: 'amber',
    Red: 'red'
} as const;
export type CustomerUpdateRequestRagStatusEnum = typeof CustomerUpdateRequestRagStatusEnum[keyof typeof CustomerUpdateRequestRagStatusEnum];

/**
 * @export
 */
export const CustomerUpdateRequestFolderVisibilityEnum = {
    Default: 'default',
    Private: 'private'
} as const;
export type CustomerUpdateRequestFolderVisibilityEnum = typeof CustomerUpdateRequestFolderVisibilityEnum[keyof typeof CustomerUpdateRequestFolderVisibilityEnum];

/**
 * Error detail response properties.
 * @export
 * @interface ErrorDetailResponse
 */
export interface ErrorDetailResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorDetailResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetailResponse
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetailResponse
     */
    value?: string;
}
/**
 * Error response properties.
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Retrieves a descriptive message that shows what went wrong.
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
    /**
     * Concise code that describes the nature of the error.
     * @type {string}
     * @memberof ErrorResponse
     */
    errorCode: string;
    /**
     * 
     * @type {Array<ErrorDetailResponse>}
     * @memberof ErrorResponse
     */
    details?: Array<ErrorDetailResponse>;
}
/**
 * Export quote report response.
 * 
 * The field is optional and will be returned only if a custom quote template is associated with the project.
 * 
 * We currently have this known issue: when the export is not using a Quote Template, the response for this call will be empty. It will be addressed in the future.
 * @export
 * @interface ExportQuoteReportResponse
 */
export interface ExportQuoteReportResponse {
    /**
     * The export quote report identifier.
     * @type {string}
     * @memberof ExportQuoteReportResponse
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface ExportTermbaseRequest
 */
export interface ExportTermbaseRequest {
    /**
     * The file format used to export the termbase.
     * @type {string}
     * @memberof ExportTermbaseRequest
     */
    format?: ExportTermbaseRequestFormatEnum;
    /**
     * 
     * @type {TermbaseExportPropertiesRequest}
     * @memberof ExportTermbaseRequest
     */
    properties?: TermbaseExportPropertiesRequest;
}


/**
 * @export
 */
export const ExportTermbaseRequestFormatEnum = {
    Xml: 'xml',
    Tbx: 'tbx'
} as const;
export type ExportTermbaseRequestFormatEnum = typeof ExportTermbaseRequestFormatEnum[keyof typeof ExportTermbaseRequestFormatEnum];

/**
 * Failed Task.
 * @export
 * @interface FailedTask
 */
export interface FailedTask {
    /**
     * The failed task identifier.
     * @type {string}
     * @memberof FailedTask
     */
    id: string;
    /**
     * The failed task name.
     * @type {string}
     * @memberof FailedTask
     */
    name: string;
    /**
     * The failed task errors.
     * @type {Array<TaskError>}
     * @memberof FailedTask
     */
    errors?: Array<TaskError>;
}
/**
 * 
 * @export
 * @interface FileExtractedResponse
 */
export interface FileExtractedResponse {
    /**
     * The identifier of the extracted file.
     * @type {string}
     * @memberof FileExtractedResponse
     */
    id: string;
    /**
     * The name of the extracted file.
     * @type {string}
     * @memberof FileExtractedResponse
     */
    fileName: string;
    /**
     * The file path of the extracted file. This is relative to the archive root.
     * @type {string}
     * @memberof FileExtractedResponse
     */
    filePath: string;
}
/**
 * 
 * @export
 * @interface FileMetadataResponse
 */
export interface FileMetadataResponse {
    /**
     * The identifier of the uploaded file
     * @type {string}
     * @memberof FileMetadataResponse
     */
    id: string;
    /**
     * The name of the uploaded file
     * @type {string}
     * @memberof FileMetadataResponse
     */
    fileName: string;
    /**
     * The status of the unzipping operation. You can use this to determine if your .zip file has been extracted successfully.
     * @type {string}
     * @memberof FileMetadataResponse
     */
    unzipStatus?: FileMetadataResponseUnzipStatusEnum;
    /**
     * The files that were extracted from the uploaded .zip archive.
     * @type {Array<FileExtractedResponse>}
     * @memberof FileMetadataResponse
     */
    associatedFiles?: Array<FileExtractedResponse>;
}


/**
 * @export
 */
export const FileMetadataResponseUnzipStatusEnum = {
    Queued: 'queued',
    Extracting: 'extracting',
    Extracted: 'extracted',
    UnzipError: 'unzipError'
} as const;
export type FileMetadataResponseUnzipStatusEnum = typeof FileMetadataResponseUnzipStatusEnum[keyof typeof FileMetadataResponseUnzipStatusEnum];

/**
 * File Processing Configuration resource. (Not available for List Projects endpoint)
 * @export
 * @interface FileProcessingConfiguration
 */
export interface FileProcessingConfiguration {
    /**
     * The file processing configuration identifier.
     * @type {string}
     * @memberof FileProcessingConfiguration
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file processing configuration name.</div> 
     * @type {string}
     * @memberof FileProcessingConfiguration
     */
    name?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof FileProcessingConfiguration
     */
    location?: FolderV2;
}

/**
 * 
 * @export
 */
export const FileRole = {
    Translatable: 'translatable',
    Reference: 'reference',
    Localizable: 'localizable',
    Unknown: 'unknown'
} as const;
export type FileRole = typeof FileRole[keyof typeof FileRole];

/**
 * 
 * @export
 * @interface FileTypeSetting
 */
export interface FileTypeSetting {
    /**
     * The file type setting identifier.
     * @type {string}
     * @memberof FileTypeSetting
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file type name.</div> 
     * @type {string}
     * @memberof FileTypeSetting
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FileTypeSetting
     */
    description?: string;
    /**
     * A short string representation of the file type identifier. The ID displayed in the Language Cloud UI.
     * @type {string}
     * @memberof FileTypeSetting
     */
    typeId?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Is this file type setting enabled. Disabled file types will not be included in operations (ex. Scan)</div> 
     * @type {boolean}
     * @memberof FileTypeSetting
     */
    enabled?: boolean;
    /**
     * Is this file type setting included in the file processing configuration. 
     * 
     * File types will be added to a configuration as excluded = true by default and can be included by a consumer when needed (via the Language Cloud UI)
     * 
     * Excluded file types will not be included in operations (ex. Scan)
     * @type {boolean}
     * @memberof FileTypeSetting
     */
    excluded?: boolean;
    /**
     * This file type setting is planned for deprecation and will be removed in the future.
     * @type {boolean}
     * @memberof FileTypeSetting
     */
    deprecated?: boolean;
    /**
     * The order of the setting in the file type configuration.
     * @type {number}
     * @memberof FileTypeSetting
     */
    orderNumber?: number;
    /**
     * A collection of extensions supported by this file type. Ex: "*.xlsx"
     * @type {Array<string>}
     * @memberof FileTypeSetting
     */
    extensions?: Array<string>;
}
/**
 * 
 * @export
 * @interface FileUploadResponse
 */
export interface FileUploadResponse {
    /**
     * The identifier of the uploaded file
     * @type {string}
     * @memberof FileUploadResponse
     */
    id: string;
    /**
     * The name of the uploaded file
     * @type {string}
     * @memberof FileUploadResponse
     */
    fileName: string;
    /**
     * The status of the unzipping operation. You can use this to determine if your .zip file has been extracted successfully.
     * @type {string}
     * @memberof FileUploadResponse
     */
    unzipStatus?: FileUploadResponseUnzipStatusEnum;
}


/**
 * @export
 */
export const FileUploadResponseUnzipStatusEnum = {
    Queued: 'queued',
    Extracting: 'extracting',
    Extracted: 'extracted',
    UnzipError: 'unzipError'
} as const;
export type FileUploadResponseUnzipStatusEnum = typeof FileUploadResponseUnzipStatusEnum[keyof typeof FileUploadResponseUnzipStatusEnum];

/**
 * File Version Export. The resulted version can be downloaded once the status is completed.
 * @export
 * @interface FileVersionExport
 */
export interface FileVersionExport {
    /**
     * Unique identifier for the asynchronous operation.
     * @type {string}
     * @memberof FileVersionExport
     */
    id: string;
    /**
     * The status of the asynchronous operation.
     * @type {string}
     * @memberof FileVersionExport
     */
    status: FileVersionExportStatusEnum;
    /**
     * When the status is 'failed', it contains the error message explaining what went wrong.
     * @type {string}
     * @memberof FileVersionExport
     */
    errorMessage?: string;
    /**
     * The url where the file can be downloaded.
     * @type {string}
     * @memberof FileVersionExport
     */
    downloadUrl?: string;
}


/**
 * @export
 */
export const FileVersionExportStatusEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed',
    Failed: 'failed'
} as const;
export type FileVersionExportStatusEnum = typeof FileVersionExportStatusEnum[keyof typeof FileVersionExportStatusEnum];

/**
 * 
 * @export
 * @interface FileVersionImport
 */
export interface FileVersionImport {
    /**
     * Unique identifier for the asynchronous operation.
     * @type {string}
     * @memberof FileVersionImport
     */
    id: string;
    /**
     * The status of the asynchronous operation.
     * @type {string}
     * @memberof FileVersionImport
     */
    status: FileVersionImportStatusEnum;
    /**
     * When the status is 'failed', it contains the error message explaining what went wrong.
     * @type {string}
     * @memberof FileVersionImport
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FileVersionImport
     */
    fileVersionId?: string;
}


/**
 * @export
 */
export const FileVersionImportStatusEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed',
    Failed: 'failed'
} as const;
export type FileVersionImportStatusEnum = typeof FileVersionImportStatusEnum[keyof typeof FileVersionImportStatusEnum];

/**
 * Folder used for resource storage.
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     * The folder identifier.
     * @type {string}
     * @memberof Folder
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the folder.</div> 
     * @type {string}
     * @memberof Folder
     */
    name?: string;
    /**
     * Indicates if the folder has a parent folder.
     * @type {boolean}
     * @memberof Folder
     */
    hasParent?: boolean;
    /**
     * 
     * @type {ResourceFolder}
     * @memberof Folder
     * @deprecated
     */
    location?: ResourceFolder;
    /**
     * The hierarchical path. It consists of all the items of the path in reverse order, the parent of the current folder being the first in the list, and the root of the account being the last.
     * @type {Array<FolderPath>}
     * @memberof Folder
     */
    path?: Array<FolderPath>;
}
/**
 * Path of a folder.
 * @export
 * @interface FolderPath
 */
export interface FolderPath {
    /**
     * The folder identifier.
     * @type {string}
     * @memberof FolderPath
     */
    id: string;
    /**
     * The name of the folder.
     * @type {string}
     * @memberof FolderPath
     */
    name: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>The location identifier.
     * @type {string}
     * @memberof FolderPath
     */
    location?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Indicates if the folder has a parent folder.
     * @type {boolean}
     * @memberof FolderPath
     */
    hasParent?: boolean;
}
/**
 * Folder used for resource storage.
 * @export
 * @interface FolderV2
 */
export interface FolderV2 {
    /**
     * The folder identifier.
     * @type {string}
     * @memberof FolderV2
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the folder.</div> 
     * @type {string}
     * @memberof FolderV2
     */
    name?: string;
    /**
     * Indicates if the folder has a parent folder.
     * @type {boolean}
     * @memberof FolderV2
     */
    hasParent?: boolean;
    /**
     * The hierarchical path. It consists of all the items of the path in reverse order, the parent of the current folder being the first in the list, and the root of the account being the last.
     * @type {Array<FolderPath>}
     * @memberof FolderV2
     */
    path?: Array<FolderPath>;
}
/**
 * Fuzzy category range. Example of Fuzzy bands: 100-100%, 95-99%, 85-94%, 75-84%, 50-74%.
 * @export
 * @interface FuzzyCategory
 */
export interface FuzzyCategory {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The minimum of the range.</div> 
     * @type {number}
     * @memberof FuzzyCategory
     */
    minimum?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The maximum of the range.</div> 
     * @type {number}
     * @memberof FuzzyCategory
     */
    maximum?: number;
}
/**
 * Statistics count for fuzzy matches.
 * @export
 * @interface FuzzyCount
 */
export interface FuzzyCount {
    /**
     * 
     * @type {Count}
     * @memberof FuzzyCount
     */
    count?: Count;
    /**
     * 
     * @type {FuzzyCategory}
     * @memberof FuzzyCount
     */
    category?: FuzzyCategory;
}
/**
 * Fuzzy match model.
 * @export
 * @interface FuzzyMatch
 */
export interface FuzzyMatch {
    /**
     * Fuzzy match price for the range expressed in the category field.
     * @type {number}
     * @memberof FuzzyMatch
     */
    price: number;
    /**
     * 
     * @type {FuzzyMatchCategory}
     * @memberof FuzzyMatch
     */
    category: FuzzyMatchCategory;
}
/**
 * Fuzzy match category range.
 * @export
 * @interface FuzzyMatchCategory
 */
export interface FuzzyMatchCategory {
    /**
     * Minimum matching value of this range.
     * @type {number}
     * @memberof FuzzyMatchCategory
     */
    minimumMatchValue: number | null;
    /**
     * Maximum matching value of this range.
     * @type {number}
     * @memberof FuzzyMatchCategory
     */
    maximumMatchValue: number | null;
}
/**
 * Group of Users.
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * The group identifier.
     * @type {string}
     * @memberof Group
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The group name.</div> 
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * The group description.
     * @type {string}
     * @memberof Group
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof Group
     */
    location?: FolderV2;
    /**
     * 
     * @type {Array<User>}
     * @memberof Group
     */
    users?: Array<User>;
}
/**
 * Group of users.
 * @export
 * @interface GroupRequest
 */
export interface GroupRequest {
    /**
     * The group identifier.
     * @type {string}
     * @memberof GroupRequest
     */
    id: string;
    /**
     * The group name.
     * @type {string}
     * @memberof GroupRequest
     */
    name?: string;
    /**
     * The group description.
     * @type {string}
     * @memberof GroupRequest
     */
    description?: string;
    /**
     * 
     * @type {ResourceFolderRequest}
     * @memberof GroupRequest
     */
    location?: ResourceFolderRequest;
    /**
     * The group users.
     * @type {Array<UserRequest>}
     * @memberof GroupRequest
     */
    users?: Array<UserRequest>;
}
/**
 * A Json Web Key. 
 * <br>
 * See https://datatracker.ietf.org/doc/html/rfc7517 for details.
 * @export
 * @interface Jwk
 */
export interface Jwk {
    /**
     * The cryptographic algorithm
     *    family used with the key.
     * @type {string}
     * @memberof Jwk
     */
    kty?: string;
    /**
     * The RSA public modulus n.
     * @type {string}
     * @memberof Jwk
     */
    n?: string;
    /**
     * The RSA public exponent e.
     * @type {string}
     * @memberof Jwk
     */
    e?: string;
    /**
     * The algorithm intended for use with the key.
     * @type {string}
     * @memberof Jwk
     */
    alg?: string;
    /**
     * The "kid" (key ID) parameter is used to match a specific key.
     * @type {string}
     * @memberof Jwk
     */
    kid?: string;
    /**
     * The "use" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data.
     * @type {string}
     * @memberof Jwk
     */
    use?: string;
}
/**
 * The language object.
 * @export
 * @interface Language
 */
export interface Language {
    /**
     * Language code. ex: "en-US", "de-DE".
     * @type {string}
     * @memberof Language
     */
    languageCode: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Human readable name.</div> 
     * @type {string}
     * @memberof Language
     */
    englishName?: string;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    direction?: string;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    parentLanguageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    defaultSpecificLanguageCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Language
     */
    isNeutral?: boolean;
}
/**
 * A Language Direction.
 * @export
 * @interface LanguageDirection
 */
export interface LanguageDirection {
    /**
     * The language direction identifier.
     * @type {string}
     * @memberof LanguageDirection
     */
    id: string;
    /**
     * 
     * @type {Language}
     * @memberof LanguageDirection
     */
    sourceLanguage: Language;
    /**
     * 
     * @type {Language}
     * @memberof LanguageDirection
     */
    targetLanguage: Language;
    /**
     * 
     * @type {AnalysisStatistics}
     * @memberof LanguageDirection
     */
    analysisStatistics?: AnalysisStatistics;
}
/**
 * 
 * @export
 * @interface LanguageDirectionItem
 */
export interface LanguageDirectionItem {
    /**
     * The language direction identifier.
     * @type {string}
     * @memberof LanguageDirectionItem
     */
    id: string;
}
/**
 * A Language Direction.
 * @export
 * @interface LanguageDirectionNoStatistics
 */
export interface LanguageDirectionNoStatistics {
    /**
     * The language direction identifier.
     * @type {string}
     * @memberof LanguageDirectionNoStatistics
     */
    id: string;
    /**
     * 
     * @type {Language}
     * @memberof LanguageDirectionNoStatistics
     */
    sourceLanguage: Language;
    /**
     * 
     * @type {Language}
     * @memberof LanguageDirectionNoStatistics
     */
    targetLanguage: Language;
}
/**
 * The language directions model used for creating or updating a project.
 * @export
 * @interface LanguageDirectionRequest
 */
export interface LanguageDirectionRequest {
    /**
     * 
     * @type {SourceLanguageRequest}
     * @memberof LanguageDirectionRequest
     */
    sourceLanguage: SourceLanguageRequest;
    /**
     * 
     * @type {TargetLanguageRequest}
     * @memberof LanguageDirectionRequest
     */
    targetLanguage: TargetLanguageRequest;
}
/**
 * 
 * @export
 * @interface LanguagePair
 */
export interface LanguagePair {
    /**
     * Language code. ex: "en-US", de-DE".
     * @type {string}
     * @memberof LanguagePair
     */
    source: string;
    /**
     * Language code. ex: "en-US", de-DE".
     * @type {string}
     * @memberof LanguagePair
     */
    target: string;
}
/**
 * Resource describing a Translation Memory, Termbase or Machine Translation used in a Translation Engine.
 * @export
 * @interface LanguagePairResource
 */
export interface LanguagePairResource {
    /**
     * The identifier of the Translation Memory, the Termbase or the Machine Translation.
     * @type {string}
     * @memberof LanguagePairResource
     */
    id: string;
    /**
     * The resource type. 
     * @type {string}
     * @memberof LanguagePairResource
     */
    type: LanguagePairResourceTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LanguagePairResource
     */
    penalty?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LanguagePairResource
     */
    lookup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LanguagePairResource
     */
    concordance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LanguagePairResource
     */
    update?: boolean;
    /**
     * Required only for neural Machine Translation resources.
     * @type {string}
     * @memberof LanguagePairResource
     */
    systemId?: string;
}


/**
 * @export
 */
export const LanguagePairResourceTypeEnum = {
    Tm: 'TM',
    Mt: 'MT',
    Tb: 'TB'
} as const;
export type LanguagePairResourceTypeEnum = typeof LanguagePairResourceTypeEnum[keyof typeof LanguagePairResourceTypeEnum];

/**
 * 
 * @export
 * @interface LanguagePrice
 */
export interface LanguagePrice {
    /**
     * The source language code. For example: "en-US", "de-DE".
     * @type {string}
     * @memberof LanguagePrice
     */
    sourceLanguage: string;
    /**
     * The target language code. For example: "en-US", "de-DE".
     * @type {string}
     * @memberof LanguagePrice
     */
    targetLanguage: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of context matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    contextMatch?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> The price of exact matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    exactMatch?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of new matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    _new?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of perfect matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    perfectMatch?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The price of repetition matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    repetition?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> The price of machine translation matches.
     * @type {number}
     * @memberof LanguagePrice
     */
    machineTranslation?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">
     * @type {string}
     * @memberof LanguagePrice
     */
    pricingUnit?: LanguagePricePricingUnitEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">
     * @type {Array<FuzzyMatch>}
     * @memberof LanguagePrice
     */
    fuzzyMatches?: Array<FuzzyMatch>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">
     * @type {Array<AdditionalCostLanguage>}
     * @memberof LanguagePrice
     */
    additionalCosts?: Array<AdditionalCostLanguage>;
}


/**
 * @export
 */
export const LanguagePricePricingUnitEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type LanguagePricePricingUnitEnum = typeof LanguagePricePricingUnitEnum[keyof typeof LanguagePricePricingUnitEnum];

/**
 * 
 * @export
 * @interface LanguageProcessingRule
 */
export interface LanguageProcessingRule {
    /**
     * The language processing rule identifier.
     * @type {string}
     * @memberof LanguageProcessingRule
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The language processing rule name.</div> 
     * @type {string}
     * @memberof LanguageProcessingRule
     */
    name?: string;
    /**
     * The language processing rule description.
     * @type {string}
     * @memberof LanguageProcessingRule
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface LanguageRequest
 */
export interface LanguageRequest {
    /**
     * 
     * @type {string}
     * @memberof LanguageRequest
     */
    languageCode: string;
}
/**
 * A response for the List Custom Field Definitions endpoint.
 * @export
 * @interface ListCustomFieldDefinitionsResponse
 */
export interface ListCustomFieldDefinitionsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListCustomFieldDefinitionsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<CustomFieldDefinition>}
     * @memberof ListCustomFieldDefinitionsResponse
     */
    items: Array<CustomFieldDefinition>;
}
/**
 * A response for the List Customers endpoint.
 * @export
 * @interface ListCustomersResponse
 */
export interface ListCustomersResponse {
    /**
     * 
     * @type {number}
     * @memberof ListCustomersResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Customer>}
     * @memberof ListCustomersResponse
     */
    items: Array<Customer>;
}
/**
 * A response for the List File Processing Configurations endpoint.
 * @export
 * @interface ListFileProcessingConfigurationsResponse
 */
export interface ListFileProcessingConfigurationsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListFileProcessingConfigurationsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<FileProcessingConfiguration>}
     * @memberof ListFileProcessingConfigurationsResponse
     */
    items: Array<FileProcessingConfiguration>;
}
/**
 * A response for the List File Type Settings endpoint.
 * @export
 * @interface ListFileTypeSettingsResponse
 */
export interface ListFileTypeSettingsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListFileTypeSettingsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<FileTypeSetting>}
     * @memberof ListFileTypeSettingsResponse
     */
    items: Array<FileTypeSetting>;
}
/**
 * A response for the List Folders endpoint.
 * @export
 * @interface ListFoldersResponse
 */
export interface ListFoldersResponse {
    /**
     * 
     * @type {number}
     * @memberof ListFoldersResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Folder>}
     * @memberof ListFoldersResponse
     */
    items: Array<Folder>;
}
/**
 * A response for the List Groups endpoint.
 * @export
 * @interface ListGroupsResponse
 */
export interface ListGroupsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListGroupsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Group>}
     * @memberof ListGroupsResponse
     */
    items: Array<Group>;
}
/**
 * 
 * @export
 * @interface ListLanguageProcessingRules
 */
export interface ListLanguageProcessingRules {
    /**
     * 
     * @type {Array<LanguageProcessingRule>}
     * @memberof ListLanguageProcessingRules
     */
    items: Array<LanguageProcessingRule>;
    /**
     * 
     * @type {string}
     * @memberof ListLanguageProcessingRules
     */
    itemCount: string;
}
/**
 * A response for the List Languages endpoint.
 * @export
 * @interface ListLanguagesResponse
 */
export interface ListLanguagesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListLanguagesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Language>}
     * @memberof ListLanguagesResponse
     */
    items: Array<Language>;
}
/**
 * A response for the List Machine Translations endpoint.
 * @export
 * @interface ListMachineTranslationsResponse
 */
export interface ListMachineTranslationsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListMachineTranslationsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<MachineTranslation>}
     * @memberof ListMachineTranslationsResponse
     */
    items: Array<MachineTranslation>;
}
/**
 * A response for the List My Accounts endpoint.
 * @export
 * @interface ListMyAccountsResponse
 */
export interface ListMyAccountsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListMyAccountsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Account>}
     * @memberof ListMyAccountsResponse
     */
    items: Array<Account>;
}
/**
 * A response for the List Pricing Models endpoint.
 * @export
 * @interface ListPricingModelsResponse
 */
export interface ListPricingModelsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListPricingModelsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<PricingModel>}
     * @memberof ListPricingModelsResponse
     */
    items: Array<PricingModel>;
}
/**
 * A response for the List Project Groups endpoint.
 * @export
 * @interface ListProjectGroupsResponse
 */
export interface ListProjectGroupsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListProjectGroupsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<ProjectGroup>}
     * @memberof ListProjectGroupsResponse
     */
    items: Array<ProjectGroup>;
}
/**
 * A response for the List Project Templates endpoint.
 * @export
 * @interface ListProjectTemplatesResponse
 */
export interface ListProjectTemplatesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListProjectTemplatesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<ProjectTemplateResponse>}
     * @memberof ListProjectTemplatesResponse
     */
    items: Array<ProjectTemplateResponse>;
}
/**
 * A response for the List Projects endpoint.
 * @export
 * @interface ListProjectsResponse
 */
export interface ListProjectsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListProjectsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Project>}
     * @memberof ListProjectsResponse
     */
    items: Array<Project>;
}
/**
 * A response for the List Rate Limits endpoint.
 * @export
 * @interface ListRateLimitsResponse
 */
export interface ListRateLimitsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListRateLimitsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<RateLimit>}
     * @memberof ListRateLimitsResponse
     */
    items: Array<RateLimit>;
}
/**
 * A response for the List Schedule Templates endpoint.
 * @export
 * @interface ListScheduleTemplatesResponse
 */
export interface ListScheduleTemplatesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListScheduleTemplatesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<ScheduleTemplate>}
     * @memberof ListScheduleTemplatesResponse
     */
    items: Array<ScheduleTemplate>;
}
/**
 * A response for the List Source File Versions endpoint.
 * @export
 * @interface ListSourceFileVersionsResponse
 */
export interface ListSourceFileVersionsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListSourceFileVersionsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<SourceFileVersion>}
     * @memberof ListSourceFileVersionsResponse
     */
    items: Array<SourceFileVersion>;
}
/**
 * A response for the List Source Files endpoint.
 * @export
 * @interface ListSourceFilesResponse
 */
export interface ListSourceFilesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListSourceFilesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<SourceFile>}
     * @memberof ListSourceFilesResponse
     */
    items: Array<SourceFile>;
}
/**
 * A response for the List Target Files Versions endpoint.
 * @export
 * @interface ListTargetFileVersionsResponse
 */
export interface ListTargetFileVersionsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTargetFileVersionsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TargetFileVersion>}
     * @memberof ListTargetFileVersionsResponse
     */
    items: Array<TargetFileVersion>;
}
/**
 * A response for the List Target Files endpoint.
 * @export
 * @interface ListTargetFilesResponse
 */
export interface ListTargetFilesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTargetFilesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TargetFile>}
     * @memberof ListTargetFilesResponse
     */
    items: Array<TargetFile>;
}
/**
 * A response for the List Task types endpoint.
 * @export
 * @interface ListTaskTypesResponse
 */
export interface ListTaskTypesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTaskTypesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TaskType>}
     * @memberof ListTaskTypesResponse
     */
    items: Array<TaskType>;
}
/**
 * A response for the List Tasks endpoint.
 * @export
 * @interface ListTasksResponse
 */
export interface ListTasksResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTasksResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Task>}
     * @memberof ListTasksResponse
     */
    items: Array<Task>;
}
/**
 * The list termbase entries response.
 * @export
 * @interface ListTermbaseEntriesResponse
 */
export interface ListTermbaseEntriesResponse {
    /**
     * 
     * @type {Array<TermbaseEntry>}
     * @memberof ListTermbaseEntriesResponse
     */
    items: Array<TermbaseEntry>;
    /**
     * 
     * @type {number}
     * @memberof ListTermbaseEntriesResponse
     */
    itemCount: number;
}
/**
 * 
 * @export
 * @interface ListTermbaseImportHistory
 */
export interface ListTermbaseImportHistory {
    /**
     * 
     * @type {Array<TermbaseImportHistoryResponse>}
     * @memberof ListTermbaseImportHistory
     */
    items?: Array<TermbaseImportHistoryResponse>;
    /**
     * 
     * @type {number}
     * @memberof ListTermbaseImportHistory
     */
    itemCount?: number;
}
/**
 * The termbase templates response.
 * @export
 * @interface ListTermbaseTemplatesResponse
 */
export interface ListTermbaseTemplatesResponse {
    /**
     * 
     * @type {Array<TermbaseTemplate>}
     * @memberof ListTermbaseTemplatesResponse
     */
    items: Array<TermbaseTemplate>;
    /**
     * 
     * @type {number}
     * @memberof ListTermbaseTemplatesResponse
     */
    itemCount: number;
}
/**
 * The list termbase terms response.
 * @export
 * @interface ListTermbaseTermsResponse
 */
export interface ListTermbaseTermsResponse {
    /**
     * 
     * @type {Array<TermbaseTerm>}
     * @memberof ListTermbaseTermsResponse
     */
    items: Array<TermbaseTerm>;
    /**
     * 
     * @type {number}
     * @memberof ListTermbaseTermsResponse
     */
    itemCount: number;
}
/**
 * The list termbases response.
 * @export
 * @interface ListTermbasesResponse
 */
export interface ListTermbasesResponse {
    /**
     * 
     * @type {Array<Termbase>}
     * @memberof ListTermbasesResponse
     */
    items: Array<Termbase>;
    /**
     * 
     * @type {number}
     * @memberof ListTermbasesResponse
     */
    itemCount: number;
}
/**
 * 
 * @export
 * @interface ListTqaProfilesResponse
 */
export interface ListTqaProfilesResponse {
    /**
     * 
     * @type {Array<TqaProfile>}
     * @memberof ListTqaProfilesResponse
     */
    items: Array<TqaProfile>;
    /**
     * 
     * @type {number}
     * @memberof ListTqaProfilesResponse
     */
    itemCount: number;
}
/**
 * A response for the List Translation Engines endpoint.
 * @export
 * @interface ListTranslationEnginesResponse
 */
export interface ListTranslationEnginesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTranslationEnginesResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TranslationEngine>}
     * @memberof ListTranslationEnginesResponse
     */
    items: Array<TranslationEngine>;
}
/**
 * A response for the List Translation Memories endpoint.
 * @export
 * @interface ListTranslationMemoriesReposne
 */
export interface ListTranslationMemoriesReposne {
    /**
     * 
     * @type {number}
     * @memberof ListTranslationMemoriesReposne
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TranslationMemory>}
     * @memberof ListTranslationMemoriesReposne
     */
    items: Array<TranslationMemory>;
}
/**
 * A response for the List Translation Memory Field Templates endpoint.
 * @export
 * @interface ListTranslationMemoryFieldTemplates
 */
export interface ListTranslationMemoryFieldTemplates {
    /**
     * 
     * @type {number}
     * @memberof ListTranslationMemoryFieldTemplates
     */
    itemCount: number;
    /**
     * 
     * @type {Array<TranslationMemoryFieldTemplate>}
     * @memberof ListTranslationMemoryFieldTemplates
     */
    items: Array<TranslationMemoryFieldTemplate>;
}
/**
 * 
 * @export
 * @interface ListTranslationMemoryImportHistory
 */
export interface ListTranslationMemoryImportHistory {
    /**
     * 
     * @type {Array<TranslationMemoryImportHistoryResponse>}
     * @memberof ListTranslationMemoryImportHistory
     */
    items?: Array<TranslationMemoryImportHistoryResponse>;
    /**
     * 
     * @type {number}
     * @memberof ListTranslationMemoryImportHistory
     */
    itemCount?: number;
}
/**
 * A response for the List Users endpoint.
 * @export
 * @interface ListUsersResponse
 */
export interface ListUsersResponse {
    /**
     * 
     * @type {number}
     * @memberof ListUsersResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<User>}
     * @memberof ListUsersResponse
     */
    items: Array<User>;
}
/**
 * A response for the List Workflows endpoint.
 * @export
 * @interface ListWorkflowsResponse
 */
export interface ListWorkflowsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListWorkflowsResponse
     */
    itemCount: number;
    /**
     * 
     * @type {Array<Workflow>}
     * @memberof ListWorkflowsResponse
     */
    items: Array<Workflow>;
}
/**
 * Machine translation resource.
 * @export
 * @interface MachineTranslation
 */
export interface MachineTranslation {
    /**
     * 
     * @type {string}
     * @memberof MachineTranslation
     */
    id: string;
    /**
     * <div style="display: inline;">Provider of the machine translation.</div> 
     * @type {string}
     * @memberof MachineTranslation
     */
    provider: string;
    /**
     * Type of the machine translation. Can be generic or neural.
     * @type {string}
     * @memberof MachineTranslation
     */
    type: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div>Appears if the machine translation is neural.
     * @type {string}
     * @memberof MachineTranslation
     */
    systemId?: string;
    /**
     * Model Source language
     * @type {string}
     * @memberof MachineTranslation
     */
    modelSourceLanguage: string;
    /**
     * Model Target language
     * @type {string}
     * @memberof MachineTranslation
     */
    modelTargetLanguage: string;
    /**
     * Specific source language supported by the model, matching the query 
     * @type {string}
     * @memberof MachineTranslation
     */
    matchingSourceLanguage: string;
    /**
     * Specific target languages supported by the model, matching the query 
     * @type {Array<string>}
     * @memberof MachineTranslation
     */
    matchingTargetLanguages: Array<string>;
}
/**
 * An object with identifier.
 * @export
 * @interface ObjectId
 */
export interface ObjectId {
    /**
     * 
     * @type {string}
     * @memberof ObjectId
     */
    id: string;
}
/**
 * An object with identifier.
 * @export
 * @interface ObjectIdRequest
 */
export interface ObjectIdRequest {
    /**
     * 
     * @type {string}
     * @memberof ObjectIdRequest
     */
    id: string;
}
/**
 * 
 * @export
 * @interface PollQuoteReportExport200Response
 */
export interface PollQuoteReportExport200Response {
    /**
     * 
     * @type {string}
     * @memberof PollQuoteReportExport200Response
     */
    status?: PollQuoteReportExport200ResponseStatusEnum;
}


/**
 * @export
 */
export const PollQuoteReportExport200ResponseStatusEnum = {
    InProgress: 'inProgress',
    Completed: 'completed'
} as const;
export type PollQuoteReportExport200ResponseStatusEnum = typeof PollQuoteReportExport200ResponseStatusEnum[keyof typeof PollQuoteReportExport200ResponseStatusEnum];

/**
 * Pricing Model resource.  (Not available for List Projects endpoint)
 * @export
 * @interface PricingModel
 */
export interface PricingModel {
    /**
     * The pricing model identifier.
     * @type {string}
     * @memberof PricingModel
     */
    id: string;
    /**
     * The name of the Pricing Model. 
     * @type {string}
     * @memberof PricingModel
     */
    name: string;
    /**
     * The description of the Pricing Model. 
     * @type {string}
     * @memberof PricingModel
     */
    description?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The currency code (ISO 4217).</div> 
     * @type {string}
     * @memberof PricingModel
     */
    currencyCode?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof PricingModel
     */
    location?: FolderV2;
    /**
     * 
     * @type {Array<LanguagePrice>}
     * @memberof PricingModel
     */
    languageDirectionPricing?: Array<LanguagePrice>;
    /**
     * 
     * @type {Array<AdditionalCost>}
     * @memberof PricingModel
     */
    additionalCosts?: Array<AdditionalCost>;
}
/**
 * Project resource.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The project identifier.
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * The short identifier of the project.
     * @type {string}
     * @memberof Project
     */
    shortId?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project name.</div> 
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     * The project description.
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * The project due date. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof Project
     */
    dueBy?: Date;
    /**
     *  UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof Project
     */
    deliveredBy?: Date;
    /**
     * The project's creation date and time. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof Project
     */
    createdAt?: Date;
    /**
     * The project's status.
     * @type {string}
     * @memberof Project
     */
    status?: ProjectStatusEnum;
    /**
     * The project's status history.
     * @type {Array<ProjectStatusHistory>}
     * @memberof Project
     */
    statusHistory?: Array<ProjectStatusHistory>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project's language directions.</div> 
     * @type {Array<LanguageDirection>}
     * @memberof Project
     */
    languageDirections?: Array<LanguageDirection>;
    /**
     * 
     * @type {Customer}
     * @memberof Project
     */
    customer?: Customer;
    /**
     * 
     * @type {User}
     * @memberof Project
     */
    createdBy?: User;
    /**
     * 
     * @type {FolderV2}
     * @memberof Project
     */
    location?: FolderV2;
    /**
     * 
     * @type {ProjectTemplateResponse}
     * @memberof Project
     */
    projectTemplate?: ProjectTemplateResponse;
    /**
     * 
     * @type {TranslationEngine}
     * @memberof Project
     */
    translationEngine?: TranslationEngine;
    /**
     * 
     * @type {FileProcessingConfiguration}
     * @memberof Project
     */
    fileProcessingConfiguration?: FileProcessingConfiguration;
    /**
     * 
     * @type {PricingModel}
     * @memberof Project
     */
    pricingModel?: PricingModel;
    /**
     * 
     * @type {Workflow}
     * @memberof Project
     */
    workflow?: Workflow;
    /**
     * 
     * @type {ProjectPlan}
     * @memberof Project
     */
    projectPlan?: ProjectPlan;
    /**
     * 
     * @type {Analytics}
     * @memberof Project
     */
    analytics?: Analytics;
    /**
     * 
     * @type {AnalysisStatistics}
     * @memberof Project
     */
    analysisStatistics?: AnalysisStatistics;
    /**
     * 
     * @type {Quote}
     * @memberof Project
     */
    quote?: Quote;
    /**
     * The Custom Fields
     * @type {Array<CustomField>}
     * @memberof Project
     */
    customFields?: Array<CustomField>;
    /**
     * 
     * @type {TqaProfile}
     * @memberof Project
     */
    tqaProfile?: TqaProfile;
    /**
     * This forces the project to be translated using the Language Cloud Online Editor exclusively.
     * @type {boolean}
     * @memberof Project
     */
    forceOnline?: boolean;
    /**
     * 
     * @type {ProjectQuoteTemplate}
     * @memberof Project
     */
    quoteTemplate?: ProjectQuoteTemplate;
    /**
     * 
     * @type {ProjectGroup}
     * @memberof Project
     */
    projectGroup?: ProjectGroup;
    /**
     * 
     * @type {Array<ProjectManagerResponse>}
     * @memberof Project
     */
    projectManagers?: Array<ProjectManagerResponse>;
    /**
     * 
     * @type {ScheduleTemplate}
     * @memberof Project
     */
    scheduleTemplate?: ScheduleTemplate;
}


/**
 * @export
 */
export const ProjectStatusEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed',
    Archived: 'archived'
} as const;
export type ProjectStatusEnum = typeof ProjectStatusEnum[keyof typeof ProjectStatusEnum];

/**
 * The configuration settings for a project.
 * @export
 * @interface ProjectConfiguration
 */
export interface ProjectConfiguration {
    /**
     * 
     * @type {TranslationMemoryFields}
     * @memberof ProjectConfiguration
     */
    translationMemoryFields?: TranslationMemoryFields;
    /**
     * 
     * @type {UpdateTranslationMemory}
     * @memberof ProjectConfiguration
     */
    updateTranslationMemory?: UpdateTranslationMemory;
}
/**
 * A request used to update the configuration settings for a project.
 * @export
 * @interface ProjectConfigurationRequest
 */
export interface ProjectConfigurationRequest {
    /**
     * 
     * @type {TranslationMemoryFieldsUpdateRequest}
     * @memberof ProjectConfigurationRequest
     */
    translationMemoryFieldsSettings?: TranslationMemoryFieldsUpdateRequest;
    /**
     * 
     * @type {UpdateTranslationMemory}
     * @memberof ProjectConfigurationRequest
     */
    updateTranslationMemory?: UpdateTranslationMemory;
}
/**
 * Input for Project creation.
 * 
 * Before starting the project, the required configuration resources (translation engine, file processing configuration and workflow) should be set either explicitly or through a project template that contains references to these configuration resources.
 * @export
 * @interface ProjectCreateRequest
 */
export interface ProjectCreateRequest {
    /**
     * The project name.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof ProjectCreateRequest
     */
    name: string;
    /**
     * The project description.
     * @type {string}
     * @memberof ProjectCreateRequest
     */
    description?: string;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectCreateRequest
     */
    dueBy: Date | null;
    /**
     * 
     * @type {ObjectIdRequest}
     * @memberof ProjectCreateRequest
     */
    projectTemplate?: ObjectIdRequest;
    /**
     * The language directions.
     * 
     * When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.
     * @type {Array<LanguageDirectionRequest>}
     * @memberof ProjectCreateRequest
     */
    languageDirections: Array<LanguageDirectionRequest>;
    /**
     * The folder identifier where the project should be created.
     * @type {string}
     * @memberof ProjectCreateRequest
     */
    location: string;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    translationEngine?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    fileProcessingConfiguration?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    workflow?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    pricingModel?: ConfigurationResourceRequest;
    /**
     * 
     * @type {Array<CustomFieldRequest>}
     * @memberof ProjectCreateRequest
     */
    customFields?: Array<CustomFieldRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    tqaProfile?: ConfigurationResourceRequest;
    /**
     * This forces the project to be translated using the Language Cloud Online Editor exclusively.
     * @type {boolean}
     * @memberof ProjectCreateRequest
     */
    forceOnline?: boolean;
    /**
     * 
     * @type {Array<ProjectManagerRequest>}
     * @memberof ProjectCreateRequest
     */
    projectManagers?: Array<ProjectManagerRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectCreateRequest
     */
    scheduleTemplate?: ConfigurationResourceRequest;
}
/**
 * Project Group resource. (Not available for List Projects endpoint)
 * @export
 * @interface ProjectGroup
 */
export interface ProjectGroup {
    /**
     * The project group identifier.
     * @type {string}
     * @memberof ProjectGroup
     */
    id: string;
    /**
     * The short identifier of the project group.
     * @type {string}
     * @memberof ProjectGroup
     */
    shortId?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project group name.</div> 
     * @type {string}
     * @memberof ProjectGroup
     */
    name?: string;
    /**
     * The project group description.
     * @type {string}
     * @memberof ProjectGroup
     */
    description?: string;
    /**
     * The status of the projects in the project group.
     * 
     * - `new`: the group is new created, or all projects in the group have status New
     * 
     * - `inProgress`: at least one project in the group is in progress
     * 
     * - `completed`: all projects in the group have status Completed
     * 
     * - `deleting`: the group is getting deleted and the projects are removing from it
     * @type {string}
     * @memberof ProjectGroup
     */
    status?: ProjectGroupStatusEnum;
    /**
     * The projects in the project group.
     * @type {Array<ProjectGroupProject>}
     * @memberof ProjectGroup
     */
    projects?: Array<ProjectGroupProject>;
    /**
     * 
     * @type {FolderV2}
     * @memberof ProjectGroup
     */
    location?: FolderV2;
    /**
     * The date and time when the project group was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ" 
     * @type {Date}
     * @memberof ProjectGroup
     */
    createdAt?: Date;
    /**
     * The date and time when the project group was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectGroup
     */
    lastModifiedAt?: Date;
}


/**
 * @export
 */
export const ProjectGroupStatusEnum = {
    New: 'new',
    InProgress: 'inProgress',
    Completed: 'completed',
    Deleting: 'deleting'
} as const;
export type ProjectGroupStatusEnum = typeof ProjectGroupStatusEnum[keyof typeof ProjectGroupStatusEnum];

/**
 * Input for project group creation.
 * @export
 * @interface ProjectGroupCreateRequest
 */
export interface ProjectGroupCreateRequest {
    /**
     * The project group name.\
     * Must be unique per location.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof ProjectGroupCreateRequest
     */
    name: string;
    /**
     * The project group description.
     * @type {string}
     * @memberof ProjectGroupCreateRequest
     */
    description?: string;
    /**
     * The folder identifier where the project group should be created. If it isn't mentioned, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error. 
     * @type {string}
     * @memberof ProjectGroupCreateRequest
     */
    location?: string;
}
/**
 * The Project Group Create response. 
 * @export
 * @interface ProjectGroupCreateResponse
 */
export interface ProjectGroupCreateResponse {
    /**
     * The project group identifier.
     * @type {string}
     * @memberof ProjectGroupCreateResponse
     */
    id: string;
    /**
     * The project group name.
     * @type {string}
     * @memberof ProjectGroupCreateResponse
     */
    name?: string;
    /**
     * The project group description.
     * @type {string}
     * @memberof ProjectGroupCreateResponse
     */
    description?: string;
    /**
     * The status of the projects in the project group.
     * 
     * - `new`: the group is newly created, or all the projects in the group have the "New" status 
     * 
     * - `inProgress`: at least one project in the group is in progress
     * 
     * - `completed`: all projects in the group have the "Completed" status 
     * 
     * - `deleting`: the group is being deleted and the projects will be removed
     * @type {string}
     * @memberof ProjectGroupCreateResponse
     */
    status?: ProjectGroupCreateResponseStatusEnum;
    /**
     * 
     * @type {FolderV2}
     * @memberof ProjectGroupCreateResponse
     */
    location?: FolderV2;
    /**
     * 
     * @type {string}
     * @memberof ProjectGroupCreateResponse
     */
    shortId?: string;
    /**
     * The date and time when the project group was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectGroupCreateResponse
     */
    createdAt?: Date;
    /**
     * The date and time when the project group was modified. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectGroupCreateResponse
     */
    lastModifiedAt?: Date;
}


/**
 * @export
 */
export const ProjectGroupCreateResponseStatusEnum = {
    New: 'new',
    InProgress: 'inProgress',
    Completed: 'completed',
    Deleting: 'deleting'
} as const;
export type ProjectGroupCreateResponseStatusEnum = typeof ProjectGroupCreateResponseStatusEnum[keyof typeof ProjectGroupCreateResponseStatusEnum];

/**
 * Project resource for project group.
 * @export
 * @interface ProjectGroupProject
 */
export interface ProjectGroupProject {
    /**
     * The project identifier.
     * @type {string}
     * @memberof ProjectGroupProject
     */
    id: string;
    /**
     * The project's status.
     * @type {string}
     * @memberof ProjectGroupProject
     */
    status?: ProjectGroupProjectStatusEnum;
}


/**
 * @export
 */
export const ProjectGroupProjectStatusEnum = {
    Attaching: 'attaching',
    Attached: 'attached',
    Detaching: 'detaching',
    Updating: 'updating',
    Failed: 'failed'
} as const;
export type ProjectGroupProjectStatusEnum = typeof ProjectGroupProjectStatusEnum[keyof typeof ProjectGroupProjectStatusEnum];

/**
 * 
 * @export
 * @interface ProjectGroupProjectRequest
 */
export interface ProjectGroupProjectRequest {
    /**
     * A project id.
     * @type {string}
     * @memberof ProjectGroupProjectRequest
     */
    id: string;
}
/**
 * 
 * @export
 * @interface ProjectGroupUpdateRequest
 */
export interface ProjectGroupUpdateRequest {
    /**
     * The project group name.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof ProjectGroupUpdateRequest
     */
    name?: string;
    /**
     * The project group description.
     * @type {string}
     * @memberof ProjectGroupUpdateRequest
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface ProjectManagerRequest
 */
export interface ProjectManagerRequest {
    /**
     * Depending on the type, User identifier or Group identifier.
     * @type {string}
     * @memberof ProjectManagerRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectManagerRequest
     */
    type: ProjectManagerRequestTypeEnum;
}


/**
 * @export
 */
export const ProjectManagerRequestTypeEnum = {
    Group: 'group',
    User: 'user'
} as const;
export type ProjectManagerRequestTypeEnum = typeof ProjectManagerRequestTypeEnum[keyof typeof ProjectManagerRequestTypeEnum];

/**
 * 
 * @export
 * @interface ProjectManagerResponse
 */
export interface ProjectManagerResponse {
    /**
     * 
     * @type {string}
     * @memberof ProjectManagerResponse
     */
    type?: ProjectManagerResponseTypeEnum;
    /**
     * 
     * @type {User}
     * @memberof ProjectManagerResponse
     */
    user?: User;
    /**
     * 
     * @type {Group}
     * @memberof ProjectManagerResponse
     */
    group?: Group;
}


/**
 * @export
 */
export const ProjectManagerResponseTypeEnum = {
    Group: 'group',
    User: 'user'
} as const;
export type ProjectManagerResponseTypeEnum = typeof ProjectManagerResponseTypeEnum[keyof typeof ProjectManagerResponseTypeEnum];

/**
 * The configurations of the tasks that will be created in the future. (Not available for List Projects endpoint)
 * @export
 * @interface ProjectPlan
 */
export interface ProjectPlan {
    /**
     * 
     * @type {Array<ProjectPlanTaskConfiguration>}
     * @memberof ProjectPlan
     */
    taskConfigurations?: Array<ProjectPlanTaskConfiguration>;
}
/**
 * 
 * @export
 * @interface ProjectPlanTaskAssigneeRequest
 */
export interface ProjectPlanTaskAssigneeRequest {
    /**
     * 
     * @type {string}
     * @memberof ProjectPlanTaskAssigneeRequest
     */
    type: ProjectPlanTaskAssigneeRequestTypeEnum;
    /**
     * The user, group or vendor identifier, depending on the type chosen. It is not required for `projectCreator`.
     * @type {string}
     * @memberof ProjectPlanTaskAssigneeRequest
     */
    id?: string;
}


/**
 * @export
 */
export const ProjectPlanTaskAssigneeRequestTypeEnum = {
    User: 'user',
    Group: 'group',
    VendorOrderTemplate: 'vendorOrderTemplate',
    ProjectCreator: 'projectCreator'
} as const;
export type ProjectPlanTaskAssigneeRequestTypeEnum = typeof ProjectPlanTaskAssigneeRequestTypeEnum[keyof typeof ProjectPlanTaskAssigneeRequestTypeEnum];

/**
 * The configuration of a task that will be created in the future.
 * @export
 * @interface ProjectPlanTaskConfiguration
 */
export interface ProjectPlanTaskConfiguration {
    /**
     * 
     * @type {ObjectId}
     * @memberof ProjectPlanTaskConfiguration
     */
    taskTemplate: ObjectId;
    /**
     * 
     * @type {TaskConfigurationScope}
     * @memberof ProjectPlanTaskConfiguration
     */
    scope: TaskConfigurationScope;
    /**
     * 
     * @type {Array<WorkflowTaskAssignee>}
     * @memberof ProjectPlanTaskConfiguration
     */
    assignees?: Array<WorkflowTaskAssignee>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Specifies if the task will be skipped.</div> 
     * @type {boolean}
     * @memberof ProjectPlanTaskConfiguration
     */
    isSkipped?: boolean;
    /**
     * The due date of the future task. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectPlanTaskConfiguration
     */
    dueBy?: Date;
}
/**
 * A project plan task configuration request. Used to update a task that will be created in the future.
 * @export
 * @interface ProjectPlanTaskConfigurationRequest
 */
export interface ProjectPlanTaskConfigurationRequest {
    /**
     * 
     * @type {ObjectIdRequest}
     * @memberof ProjectPlanTaskConfigurationRequest
     */
    taskTemplate: ObjectIdRequest;
    /**
     * Specifies if the task will be skipped. 
     * If you want to skip all the target languages for the given task, set the scope as "global".
     * @type {boolean}
     * @memberof ProjectPlanTaskConfigurationRequest
     */
    isSkipped: boolean;
    /**
     * Specifies the list of assignees for the future task. When the 'isSkipped' field is set to 'true', an empty list of assignees should be specified.
     * @type {Array<ProjectPlanTaskAssigneeRequest>}
     * @memberof ProjectPlanTaskConfigurationRequest
     */
    assignees: Array<ProjectPlanTaskAssigneeRequest>;
    /**
     * 
     * @type {TaskConfigurationScopeRequest}
     * @memberof ProjectPlanTaskConfigurationRequest
     */
    scope: TaskConfigurationScopeRequest;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectPlanTaskConfigurationRequest
     */
    dueBy?: Date;
}
/**
 * Updates the configurations of the tasks that will be created in the future. 
 * For example, you can change the assignee of the "translation" task while the project is in the "preprocessing" phase.
 * @export
 * @interface ProjectPlanUpdateRequest
 */
export interface ProjectPlanUpdateRequest {
    /**
     * 
     * @type {Array<ProjectPlanTaskConfigurationRequest>}
     * @memberof ProjectPlanUpdateRequest
     */
    taskConfigurations: Array<ProjectPlanTaskConfigurationRequest>;
}
/**
 * Project Quote Template resource.
 * @export
 * @interface ProjectQuoteTemplate
 */
export interface ProjectQuoteTemplate {
    /**
     * The identifier of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplate
     */
    id: string;
    /**
     * The name of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplate
     */
    name?: string;
    /**
     * The description of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplate
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof ProjectQuoteTemplate
     */
    location?: FolderV2;
}
/**
 * (Deprecated) moved under settings.general.quoteTemplate
 * @export
 * @interface ProjectQuoteTemplateDeprecated
 */
export interface ProjectQuoteTemplateDeprecated {
    /**
     * The identifier of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplateDeprecated
     */
    id: string;
    /**
     * The name of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplateDeprecated
     */
    name?: string;
    /**
     * The description of the quote template.
     * @type {string}
     * @memberof ProjectQuoteTemplateDeprecated
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof ProjectQuoteTemplateDeprecated
     */
    location?: FolderV2;
}
/**
 * An Item which describes a change in the status of the project.
 * @export
 * @interface ProjectStatusHistory
 */
export interface ProjectStatusHistory {
    /**
     * Specifies the project status previous to the change.
     * @type {string}
     * @memberof ProjectStatusHistory
     */
    from: ProjectStatusHistoryFromEnum;
    /**
     * Specifies the project status post change.
     * @type {string}
     * @memberof ProjectStatusHistory
     */
    to: ProjectStatusHistoryToEnum;
    /**
     * 
     * @type {User}
     * @memberof ProjectStatusHistory
     */
    by?: User;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectStatusHistory
     */
    timestamp?: Date;
}


/**
 * @export
 */
export const ProjectStatusHistoryFromEnum = {
    None: 'none',
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const;
export type ProjectStatusHistoryFromEnum = typeof ProjectStatusHistoryFromEnum[keyof typeof ProjectStatusHistoryFromEnum];

/**
 * @export
 */
export const ProjectStatusHistoryToEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const;
export type ProjectStatusHistoryToEnum = typeof ProjectStatusHistoryToEnum[keyof typeof ProjectStatusHistoryToEnum];

/**
 * Pre-Processing Settings, configure how TMs are applied, are detailed in section 10.b
 * @export
 * @interface ProjectTemplateBatchTasksPreprocessingSettings
 */
export interface ProjectTemplateBatchTasksPreprocessingSettings {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    minimumMatchValue?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Options: 
     * - `keepExisting`: no segments are overwritten, existing segments are kept;
     * - `overwriteIfBetter`: unlocked segments (including confirmed segments) are overwritten, while unlocked Perfect Match segments and locked segments are not overwritten; 
     * - `overwriteAlways`: Perfect Match segments (both locked and unlocked) are overwritten, while other locked segments are not overwritten;
     * - `overwriteExceptPerfectMatch`: unlocked segments (including confirmed segments) and locked segments are overwritten, while unlocked Perfect Match segments are not overwritten; </div> 
     * @type {string}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    translationOverwriteMode?: ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Default: `confirmExactMatches`, `confirmContextMatches`</div> 
     * @type {Array<string>}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    afterApplyingTranslations?: Array<ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    noMatchFoundAction?: ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum;
    /**
     * If enabled repetitions are identified and included in analysis reports.
     * @type {boolean}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    reportCrossFileRepetition?: boolean;
    /**
     * If enabled locked segments (content that must not be translated) are excluded from translation. 
     * @type {boolean}
     * @memberof ProjectTemplateBatchTasksPreprocessingSettings
     */
    excludeLockedSegments?: boolean;
}


/**
 * @export
 */
export const ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum = {
    KeepExisting: 'keepExisting',
    OverwriteIfBetter: 'overwriteIfBetter',
    OverwriteAlways: 'overwriteAlways',
    OverwriteExceptPerfectMatch: 'overwriteExceptPerfectMatch'
} as const;
export type ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum = typeof ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum[keyof typeof ProjectTemplateBatchTasksPreprocessingSettingsTranslationOverwriteModeEnum];

/**
 * @export
 */
export const ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum = {
    ConfirmExactMatches: 'confirmExactMatches',
    ConfirmContextMatches: 'confirmContextMatches',
    LockExactMatches: 'lockExactMatches',
    LockContextMatches: 'lockContextMatches'
} as const;
export type ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum = typeof ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum[keyof typeof ProjectTemplateBatchTasksPreprocessingSettingsAfterApplyingTranslationsEnum];

/**
 * @export
 */
export const ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum = {
    LeaveTargetSegmentsEmpty: 'leaveTargetSegmentsEmpty',
    CopySourceToTarget: 'copySourceToTarget'
} as const;
export type ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum = typeof ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum[keyof typeof ProjectTemplateBatchTasksPreprocessingSettingsNoMatchFoundActionEnum];

/**
 * Project Template Batch Tasks Settings
 * @export
 * @interface ProjectTemplateBatchTasksSettings
 */
export interface ProjectTemplateBatchTasksSettings {
    /**
     * 
     * @type {ProjectTemplateBatchTasksPreprocessingSettings}
     * @memberof ProjectTemplateBatchTasksSettings
     */
    preProcessing?: ProjectTemplateBatchTasksPreprocessingSettings;
    /**
     * 
     * @type {UpdateTranslationMemorySettings}
     * @memberof ProjectTemplateBatchTasksSettings
     */
    updateTranslationMemory?: UpdateTranslationMemorySettings;
}
/**
 * Input for Project Template creation.
 * @export
 * @interface ProjectTemplateCreateRequest
 */
export interface ProjectTemplateCreateRequest {
    /**
     * The project template name.
     * @type {string}
     * @memberof ProjectTemplateCreateRequest
     */
    name: string;
    /**
     * The project description.
     * @type {string}
     * @memberof ProjectTemplateCreateRequest
     */
    description?: string;
    /**
     * The folder identifier where the project should be created.
     * @type {string}
     * @memberof ProjectTemplateCreateRequest
     */
    location: string;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    fileProcessingConfiguration: ConfigurationResourceRequest;
    /**
     * 
     * @type {Array<ProjectManagerRequest>}
     * @memberof ProjectTemplateCreateRequest
     */
    projectManagers?: Array<ProjectManagerRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    scheduleTemplate?: ConfigurationResourceRequest;
    /**
     * The language directions.
     * 
     * When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.
     * @type {Array<LanguageDirectionRequest>}
     * @memberof ProjectTemplateCreateRequest
     */
    languageDirections?: Array<LanguageDirectionRequest>;
    /**
     * 
     * @type {Array<CustomFieldRequest>}
     * @memberof ProjectTemplateCreateRequest
     */
    customFields?: Array<CustomFieldRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    translationEngine?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    pricingModel?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    workflow?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ProjectTemplateSettingsRequest}
     * @memberof ProjectTemplateCreateRequest
     */
    settings?: ProjectTemplateSettingsRequest;
}
/**
 * General settings
 * @export
 * @interface ProjectTemplateGeneralSettingsRequest
 */
export interface ProjectTemplateGeneralSettingsRequest {
    /**
     * This forces the project to be translated using the Language Cloud Online Editor exclusively.
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsRequest
     */
    forceOnline?: boolean;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateGeneralSettingsRequest
     */
    quoteTemplate?: ConfigurationResourceRequest;
    /**
     * Customer Portal visibility
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsRequest
     */
    customerPortalVisibility?: boolean;
}
/**
 * General settings, are detailed in section 10.a
 * @export
 * @interface ProjectTemplateGeneralSettingsResponse
 */
export interface ProjectTemplateGeneralSettingsResponse {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Restrict file downloads.
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsResponse
     */
    forceOnline?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Allow editing of source text in segments.
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsResponse
     */
    allowSourceEdit?: boolean;
    /**
     * 
     * @type {ProjectQuoteTemplate}
     * @memberof ProjectTemplateGeneralSettingsResponse
     */
    quoteTemplate?: ProjectQuoteTemplate;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Customer Portal visibility
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsResponse
     */
    customerPortalVisibility?: boolean;
}
/**
 * General settings
 * @export
 * @interface ProjectTemplateGeneralSettingsUpdate
 */
export interface ProjectTemplateGeneralSettingsUpdate {
    /**
     * This forces the project to be translated using the Language Cloud Online Editor exclusively.
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsUpdate
     */
    forceOnline?: boolean;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateGeneralSettingsUpdate
     */
    quoteTemplate?: ConfigurationResourceRequest;
    /**
     * Customer Portal visibility
     * @type {boolean}
     * @memberof ProjectTemplateGeneralSettingsUpdate
     */
    customerPortalVisibility?: boolean;
}
/**
 * 
 * @export
 * @interface ProjectTemplateQualityManagementSettings
 */
export interface ProjectTemplateQualityManagementSettings {
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateQualityManagementSettings
     */
    tqaProfile?: ConfigurationResourceRequest;
}
/**
 * 
 * @export
 * @interface ProjectTemplateQualityManagementSettingsResponse
 */
export interface ProjectTemplateQualityManagementSettingsResponse {
    /**
     * 
     * @type {TqaProfile}
     * @memberof ProjectTemplateQualityManagementSettingsResponse
     */
    tqaProfile?: TqaProfile;
}
/**
 * Project template resource.  (Not available for the List Projects endpoint.)
 * @export
 * @interface ProjectTemplateResponse
 */
export interface ProjectTemplateResponse {
    /**
     * The project template identifier.
     * @type {string}
     * @memberof ProjectTemplateResponse
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The project template name.</div> 
     * @type {string}
     * @memberof ProjectTemplateResponse
     */
    name?: string;
    /**
     * The project template description.
     * @type {string}
     * @memberof ProjectTemplateResponse
     */
    description?: string;
    /**
     * 
     * @type {Array<LanguageDirectionNoStatistics>}
     * @memberof ProjectTemplateResponse
     */
    languageDirections?: Array<LanguageDirectionNoStatistics>;
    /**
     * 
     * @type {FolderV2}
     * @memberof ProjectTemplateResponse
     */
    location?: FolderV2;
    /**
     * 
     * @type {TranslationEngine}
     * @memberof ProjectTemplateResponse
     */
    translationEngine?: TranslationEngine;
    /**
     * 
     * @type {FileProcessingConfiguration}
     * @memberof ProjectTemplateResponse
     */
    fileProcessingConfiguration?: FileProcessingConfiguration;
    /**
     * 
     * @type {PricingModel}
     * @memberof ProjectTemplateResponse
     */
    pricingModel?: PricingModel;
    /**
     * 
     * @type {Workflow}
     * @memberof ProjectTemplateResponse
     */
    workflow?: Workflow;
    /**
     * The Custom Fields.
     * @type {Array<CustomField>}
     * @memberof ProjectTemplateResponse
     */
    customFields?: Array<CustomField>;
    /**
     * (Deprecated) Moved under settings.general.forceOnline
     * @type {boolean}
     * @memberof ProjectTemplateResponse
     * @deprecated
     */
    forceOnline?: boolean;
    /**
     * 
     * @type {Array<ProjectManagerResponse>}
     * @memberof ProjectTemplateResponse
     */
    projectManagers?: Array<ProjectManagerResponse>;
    /**
     * 
     * @type {ProjectQuoteTemplateDeprecated}
     * @memberof ProjectTemplateResponse
     * @deprecated
     */
    quoteTemplate?: ProjectQuoteTemplateDeprecated;
    /**
     * 
     * @type {ScheduleTemplate}
     * @memberof ProjectTemplateResponse
     */
    scheduleTemplate?: ScheduleTemplate;
    /**
     * 
     * @type {ProjectTemplateSettingsResponse}
     * @memberof ProjectTemplateResponse
     */
    settings?: ProjectTemplateSettingsResponse;
}
/**
 * Input for Project Template settings.
 * @export
 * @interface ProjectTemplateSettingsRequest
 */
export interface ProjectTemplateSettingsRequest {
    /**
     * 
     * @type {ProjectTemplateGeneralSettingsRequest}
     * @memberof ProjectTemplateSettingsRequest
     */
    general?: ProjectTemplateGeneralSettingsRequest;
    /**
     * 
     * @type {ProjectTemplateQualityManagementSettings}
     * @memberof ProjectTemplateSettingsRequest
     */
    qualityManagement?: ProjectTemplateQualityManagementSettings;
}
/**
 * Project Template settings. See detailed description of options on the <a href="https://docs.rws.com/791595/1054430/trados-enterprise---accelerate/creating-project-templates/procedure">Official Documentation</a> page. 
 * 
 (Not available for List Projects/ProjectTemplates endpoint)
 * @export
 * @interface ProjectTemplateSettingsResponse
 */
export interface ProjectTemplateSettingsResponse {
    /**
     * 
     * @type {ProjectTemplateGeneralSettingsResponse}
     * @memberof ProjectTemplateSettingsResponse
     */
    general?: ProjectTemplateGeneralSettingsResponse;
    /**
     * 
     * @type {ProjectTemplateBatchTasksSettings}
     * @memberof ProjectTemplateSettingsResponse
     */
    batchTasks?: ProjectTemplateBatchTasksSettings;
    /**
     * 
     * @type {ProjectTemplateVerificationSettings}
     * @memberof ProjectTemplateSettingsResponse
     */
    verification?: ProjectTemplateVerificationSettings;
    /**
     * 
     * @type {ProjectTemplateQualityManagementSettingsResponse}
     * @memberof ProjectTemplateSettingsResponse
     */
    qualityManagement?: ProjectTemplateQualityManagementSettingsResponse;
    /**
     * 
     * @type {ProjectTemplateTranslationMemorySettings}
     * @memberof ProjectTemplateSettingsResponse
     */
    translationMemorySettings?: ProjectTemplateTranslationMemorySettings;
}
/**
 * Input for Project Template settings.
 * @export
 * @interface ProjectTemplateSettingsUpdateRequest
 */
export interface ProjectTemplateSettingsUpdateRequest {
    /**
     * 
     * @type {ProjectTemplateGeneralSettingsUpdate}
     * @memberof ProjectTemplateSettingsUpdateRequest
     */
    general?: ProjectTemplateGeneralSettingsUpdate;
    /**
     * 
     * @type {ProjectTemplateQualityManagementSettings}
     * @memberof ProjectTemplateSettingsUpdateRequest
     */
    qualityManagement?: ProjectTemplateQualityManagementSettings;
}
/**
 * Translation Memory Penalties
 * @export
 * @interface ProjectTemplateTMPenalties
 */
export interface ProjectTemplateTMPenalties {
    /**
     * 
     * @type {ProjectTemplateTMStandardPenalties}
     * @memberof ProjectTemplateTMPenalties
     */
    standardPenalties?: ProjectTemplateTMStandardPenalties;
    /**
     * 
     * @type {ProjectTemplateTMTranslationUnitStatusPenalties}
     * @memberof ProjectTemplateTMPenalties
     */
    translationUnitStatusPenalties?: ProjectTemplateTMTranslationUnitStatusPenalties;
}
/**
 * Translation Memory Standard Penalties
 * @export
 * @interface ProjectTemplateTMStandardPenalties
 */
export interface ProjectTemplateTMStandardPenalties {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    missingFormatting?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    differentFormatting?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    multipleTranslations?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    autoLocalization?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    textReplacement?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    alignment?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMStandardPenalties
     */
    characterWidthDifference?: number;
}
/**
 * Translation Memory Translation Unit Status Penalties
 * @export
 * @interface ProjectTemplateTMTranslationUnitStatusPenalties
 */
export interface ProjectTemplateTMTranslationUnitStatusPenalties {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    translated?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    rejectedTranslation?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    approvedTranslation?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    rejectedSignOff?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    approvedSignOff?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    notTranslated?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateTMTranslationUnitStatusPenalties
     */
    draft?: number;
}
/**
 * Translation Memory settings
 * @export
 * @interface ProjectTemplateTranslationMemorySettings
 */
export interface ProjectTemplateTranslationMemorySettings {
    /**
     * 
     * @type {ProjectTemplateTMPenalties}
     * @memberof ProjectTemplateTranslationMemorySettings
     */
    penalties?: ProjectTemplateTMPenalties;
}
/**
 * Input for Project Template creation.
 * @export
 * @interface ProjectTemplateUpdateRequest
 */
export interface ProjectTemplateUpdateRequest {
    /**
     * The project template name.
     * @type {string}
     * @memberof ProjectTemplateUpdateRequest
     */
    name?: string;
    /**
     * The project description.
     * @type {string}
     * @memberof ProjectTemplateUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    fileProcessingConfiguration?: ConfigurationResourceRequest;
    /**
     * 
     * @type {Array<ProjectManagerRequest>}
     * @memberof ProjectTemplateUpdateRequest
     */
    projectManagers?: Array<ProjectManagerRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    scheduleTemplate?: ConfigurationResourceRequest;
    /**
     * The language directions.
     * 
     * When creating a project using a project template that supports multiple source languages, you must supply the `languageDirections`.<br> Note: The values for source and targe language must have the same value as the source and target language from project template.
     * @type {Array<LanguageDirectionRequest>}
     * @memberof ProjectTemplateUpdateRequest
     */
    languageDirections?: Array<LanguageDirectionRequest>;
    /**
     * 
     * @type {Array<CustomFieldRequest>}
     * @memberof ProjectTemplateUpdateRequest
     */
    customFields?: Array<CustomFieldRequest>;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    translationEngine?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    pricingModel?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    workflow?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ProjectTemplateSettingsUpdateRequest}
     * @memberof ProjectTemplateUpdateRequest
     */
    settings?: ProjectTemplateSettingsUpdateRequest;
}
/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerAllLanguages
 */
export interface ProjectTemplateVerificationQaCheckerAllLanguages {
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerSegmentsVerification}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    segmentsVerification?: ProjectTemplateVerificationQaCheckerSegmentsVerification;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerSegmentsToExclude}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    segmentsToExclude?: ProjectTemplateVerificationQaCheckerSegmentsToExclude;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerInconsistencies}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    inconsistencies?: ProjectTemplateVerificationQaCheckerInconsistencies;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerPunctuation}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    punctuation?: ProjectTemplateVerificationQaCheckerPunctuation;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerNumbers}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    numbers?: ProjectTemplateVerificationQaCheckerNumbers;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerWordList}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    wordList?: ProjectTemplateVerificationQaCheckerWordList;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerRegularExpressions}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    regularExpressions?: ProjectTemplateVerificationQaCheckerRegularExpressions;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerTrademarkCheck}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    trademarkCheck?: ProjectTemplateVerificationQaCheckerTrademarkCheck;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerLengthVerification}
     * @memberof ProjectTemplateVerificationQaCheckerAllLanguages
     */
    lengthVerification?: ProjectTemplateVerificationQaCheckerLengthVerification;
}
/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerInconsistencies
 */
export interface ProjectTemplateVerificationQaCheckerInconsistencies {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkInconsistentTranslations?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkInconsistentTranslationsSeverity?: ProjectTemplateVerificationQaCheckerInconsistenciesCheckInconsistentTranslationsSeverityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkInconsistentTranslationsIgnoreTags?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkInconsistentTranslationsIgnoreCase?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkRepeatedWords?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkRepeatedWordsSeverity?: ProjectTemplateVerificationQaCheckerInconsistenciesCheckRepeatedWordsSeverityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkRepeatedWordsIgnoreNumbers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkRepeatedWordsIgnoreCase?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkUneditedSegmentsFuzzy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkUneditedSegmentsFuzzySeverity?: ProjectTemplateVerificationQaCheckerInconsistenciesCheckUneditedSegmentsFuzzySeverityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkOnlyConfirmedSegments?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkIfMatchScoresBelow?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerInconsistencies
     */
    checkIfMatchScoresBelowValue?: number;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerInconsistenciesCheckInconsistentTranslationsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerInconsistenciesCheckInconsistentTranslationsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckInconsistentTranslationsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckInconsistentTranslationsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerInconsistenciesCheckRepeatedWordsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: ' Note'
} as const;
export type ProjectTemplateVerificationQaCheckerInconsistenciesCheckRepeatedWordsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckRepeatedWordsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckRepeatedWordsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerInconsistenciesCheckUneditedSegmentsFuzzySeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerInconsistenciesCheckUneditedSegmentsFuzzySeverityEnum = typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckUneditedSegmentsFuzzySeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerInconsistenciesCheckUneditedSegmentsFuzzySeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerLengthVerification
 */
export interface ProjectTemplateVerificationQaCheckerLengthVerification {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerLengthVerification
     */
    checkLengthLimitation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerLengthVerification
     */
    checkLengthLimitationSeverity?: ProjectTemplateVerificationQaCheckerLengthVerificationCheckLengthLimitationSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerLengthVerification
     */
    targetSegmentsVerificationType?: ProjectTemplateVerificationQaCheckerLengthVerificationTargetSegmentsVerificationTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Used in case `targetSegmentsVerificationType = absoluteCharacterCount`</div> 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerLengthVerification
     */
    absoluteCharCountValue?: number;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerLengthVerificationCheckLengthLimitationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerLengthVerificationCheckLengthLimitationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerLengthVerificationCheckLengthLimitationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerLengthVerificationCheckLengthLimitationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerLengthVerificationTargetSegmentsVerificationTypeEnum = {
    FileSpecificLimit: 'fileSpecificLimit',
    AbsoluteCharacterCount: 'absoluteCharacterCount'
} as const;
export type ProjectTemplateVerificationQaCheckerLengthVerificationTargetSegmentsVerificationTypeEnum = typeof ProjectTemplateVerificationQaCheckerLengthVerificationTargetSegmentsVerificationTypeEnum[keyof typeof ProjectTemplateVerificationQaCheckerLengthVerificationTargetSegmentsVerificationTypeEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerNumbers
 */
export interface ProjectTemplateVerificationQaCheckerNumbers {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkNumbers?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkNumbersSeverity?: ProjectTemplateVerificationQaCheckerNumbersCheckNumbersSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkTimes?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkTimesSeverity?: ProjectTemplateVerificationQaCheckerNumbersCheckTimesSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkDates?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkDatesSeverity?: ProjectTemplateVerificationQaCheckerNumbersCheckDatesSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkMeasurements?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerNumbers
     */
    checkMeasurementsSeverity?: ProjectTemplateVerificationQaCheckerNumbersCheckMeasurementsSeverityEnum;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerNumbersCheckNumbersSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerNumbersCheckNumbersSeverityEnum = typeof ProjectTemplateVerificationQaCheckerNumbersCheckNumbersSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerNumbersCheckNumbersSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerNumbersCheckTimesSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerNumbersCheckTimesSeverityEnum = typeof ProjectTemplateVerificationQaCheckerNumbersCheckTimesSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerNumbersCheckTimesSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerNumbersCheckDatesSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerNumbersCheckDatesSeverityEnum = typeof ProjectTemplateVerificationQaCheckerNumbersCheckDatesSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerNumbersCheckDatesSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerNumbersCheckMeasurementsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerNumbersCheckMeasurementsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerNumbersCheckMeasurementsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerNumbersCheckMeasurementsSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerPerTargetLanguage
 */
export interface ProjectTemplateVerificationQaCheckerPerTargetLanguage {
    /**
     * 
     * @type {Language}
     * @memberof ProjectTemplateVerificationQaCheckerPerTargetLanguage
     */
    targetLanguage: Language;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerPunctuation}
     * @memberof ProjectTemplateVerificationQaCheckerPerTargetLanguage
     */
    punctuation?: ProjectTemplateVerificationQaCheckerPunctuation;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerNumbers}
     * @memberof ProjectTemplateVerificationQaCheckerPerTargetLanguage
     */
    numbers?: ProjectTemplateVerificationQaCheckerNumbers;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerWordList}
     * @memberof ProjectTemplateVerificationQaCheckerPerTargetLanguage
     */
    wordList?: ProjectTemplateVerificationQaCheckerWordList;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerRegularExpressions}
     * @memberof ProjectTemplateVerificationQaCheckerPerTargetLanguage
     */
    regularExpressions?: ProjectTemplateVerificationQaCheckerRegularExpressions;
}
/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerPunctuation
 */
export interface ProjectTemplateVerificationQaCheckerPunctuation {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkIdenticalPunctuation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkIdenticalPunctuationSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckIdenticalPunctuationSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkSpanishPunctuation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkSpanishPunctuationSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckSpanishPunctuationSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkUnintentionalSpacesBeforePunctuation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkUnintentionalSpacesBeforePunctuationSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckUnintentionalSpacesBeforePunctuationSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkUnintentionalSpacesBeforePunctuationValues?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    punctuationSpacesFrench?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkMultipleSpaces?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkMultipleSpacesSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleSpacesSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkMultipleDots?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkMultipleDotsSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleDotsSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    ignoreThreeDots?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkExtraSpace?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkExtraSpaceSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckExtraSpaceSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkCapitalizationOfInitials?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkCapitalizationOfInitialsSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckCapitalizationOfInitialsSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkConsistencyOfGlobalCapitalization?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkConsistencyOfGlobalCapitalizationSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckConsistencyOfGlobalCapitalizationSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkBrackets?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerPunctuation
     */
    checkBracketsSeverity?: ProjectTemplateVerificationQaCheckerPunctuationCheckBracketsSeverityEnum;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckIdenticalPunctuationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckIdenticalPunctuationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckIdenticalPunctuationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckIdenticalPunctuationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckSpanishPunctuationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckSpanishPunctuationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckSpanishPunctuationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckSpanishPunctuationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckUnintentionalSpacesBeforePunctuationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckUnintentionalSpacesBeforePunctuationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckUnintentionalSpacesBeforePunctuationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckUnintentionalSpacesBeforePunctuationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleSpacesSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleSpacesSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleSpacesSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleSpacesSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleDotsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleDotsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleDotsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckMultipleDotsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckExtraSpaceSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckExtraSpaceSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckExtraSpaceSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckExtraSpaceSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckCapitalizationOfInitialsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckCapitalizationOfInitialsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckCapitalizationOfInitialsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckCapitalizationOfInitialsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckConsistencyOfGlobalCapitalizationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckConsistencyOfGlobalCapitalizationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckConsistencyOfGlobalCapitalizationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckConsistencyOfGlobalCapitalizationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerPunctuationCheckBracketsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerPunctuationCheckBracketsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerPunctuationCheckBracketsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerPunctuationCheckBracketsSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerRegularExpressions
 */
export interface ProjectTemplateVerificationQaCheckerRegularExpressions {
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressions
     */
    checkRegularExpressions: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressions
     */
    regularExpressionSeverity?: ProjectTemplateVerificationQaCheckerRegularExpressionsRegularExpressionSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {Array<ProjectTemplateVerificationQaCheckerRegularExpressionsModel>}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressions
     */
    regularExpressions?: Array<ProjectTemplateVerificationQaCheckerRegularExpressionsModel>;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerRegularExpressionsRegularExpressionSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerRegularExpressionsRegularExpressionSeverityEnum = typeof ProjectTemplateVerificationQaCheckerRegularExpressionsRegularExpressionSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerRegularExpressionsRegularExpressionSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerRegularExpressionsModel
 */
export interface ProjectTemplateVerificationQaCheckerRegularExpressionsModel {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressionsModel
     */
    description?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressionsModel
     */
    regexSource?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressionsModel
     */
    regexTarget?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressionsModel
     */
    ignoreCase?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerRegularExpressionsModel
     */
    condition?: ProjectTemplateVerificationQaCheckerRegularExpressionsModelConditionEnum;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerRegularExpressionsModelConditionEnum = {
    TargetAndSource: 'targetAndSource',
    TargetNotSource: 'targetNotSource',
    SourceNotTarget: 'sourceNotTarget',
    SourceOnly: 'sourceOnly',
    TargetOnly: 'targetOnly',
    DifferentCount: 'differentCount',
    GroupedTargetAndSource: 'groupedTargetAndSource'
} as const;
export type ProjectTemplateVerificationQaCheckerRegularExpressionsModelConditionEnum = typeof ProjectTemplateVerificationQaCheckerRegularExpressionsModelConditionEnum[keyof typeof ProjectTemplateVerificationQaCheckerRegularExpressionsModelConditionEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerSegmentsToExclude
 */
export interface ProjectTemplateVerificationQaCheckerSegmentsToExclude {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludePerfectMatchSegments?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeExactMatches?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeFuzzyMatches?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeFuzzyMatchesValue?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeNewTranslation?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeConfirmedTranslations?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeLockedSegments?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    excludeIdentical?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    elementContextExclusion?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {Array<string>}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    exclusionContextList?: Array<string>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    reportAllNonExcluded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsToExclude
     */
    reportAllNonExcludedSeverity?: ProjectTemplateVerificationQaCheckerSegmentsToExcludeReportAllNonExcludedSeverityEnum;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerSegmentsToExcludeReportAllNonExcludedSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerSegmentsToExcludeReportAllNonExcludedSeverityEnum = typeof ProjectTemplateVerificationQaCheckerSegmentsToExcludeReportAllNonExcludedSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerSegmentsToExcludeReportAllNonExcludedSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerSegmentsVerification
 */
export interface ProjectTemplateVerificationQaCheckerSegmentsVerification {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    checkForgottenTranslation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    forgottenTranslationSeverity?: ProjectTemplateVerificationQaCheckerSegmentsVerificationForgottenTranslationSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    checkSourceTargetIdentical?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    sourceTargetIdenticalSeverity?: ProjectTemplateVerificationQaCheckerSegmentsVerificationSourceTargetIdenticalSeverityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    identicalSegmentsIgnoreTags?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    identicalSegmentsIgnoreCase?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    checkTargetLonger?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    longerByValue?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    checkTargetShorter?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    shorterByValue?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {number}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    ignoreSegmentsFewerThanCount?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    ignoreSegmentsFewerThanBase?: ProjectTemplateVerificationQaCheckerSegmentsVerificationIgnoreSegmentsFewerThanBaseEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    checkForbiddenChars?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    forbiddenChars?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerSegmentsVerification
     */
    forbiddenCharsSeverity?: ProjectTemplateVerificationQaCheckerSegmentsVerificationForbiddenCharsSeverityEnum;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerSegmentsVerificationForgottenTranslationSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerSegmentsVerificationForgottenTranslationSeverityEnum = typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationForgottenTranslationSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationForgottenTranslationSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerSegmentsVerificationSourceTargetIdenticalSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerSegmentsVerificationSourceTargetIdenticalSeverityEnum = typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationSourceTargetIdenticalSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationSourceTargetIdenticalSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerSegmentsVerificationIgnoreSegmentsFewerThanBaseEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type ProjectTemplateVerificationQaCheckerSegmentsVerificationIgnoreSegmentsFewerThanBaseEnum = typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationIgnoreSegmentsFewerThanBaseEnum[keyof typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationIgnoreSegmentsFewerThanBaseEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerSegmentsVerificationForbiddenCharsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerSegmentsVerificationForbiddenCharsSeverityEnum = typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationForbiddenCharsSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerSegmentsVerificationForbiddenCharsSeverityEnum];

/**
 * QA Checker Settings, are detailed in section 10.e
 * @export
 * @interface ProjectTemplateVerificationQaCheckerSettings
 */
export interface ProjectTemplateVerificationQaCheckerSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerAllLanguages}
     * @memberof ProjectTemplateVerificationQaCheckerSettings
     */
    allLanguages?: ProjectTemplateVerificationQaCheckerAllLanguages;
    /**
     * 
     * @type {Array<ProjectTemplateVerificationQaCheckerPerTargetLanguage>}
     * @memberof ProjectTemplateVerificationQaCheckerSettings
     */
    perTargetLanguage?: Array<ProjectTemplateVerificationQaCheckerPerTargetLanguage>;
}
/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerTrademarkCheck
 */
export interface ProjectTemplateVerificationQaCheckerTrademarkCheck {
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerTrademarkCheck
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerTrademarkCheck
     */
    trademarkSeverity?: ProjectTemplateVerificationQaCheckerTrademarkCheckTrademarkSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {Array<string>}
     * @memberof ProjectTemplateVerificationQaCheckerTrademarkCheck
     */
    trademarkSymbols?: Array<string>;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerTrademarkCheckTrademarkSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerTrademarkCheckTrademarkSeverityEnum = typeof ProjectTemplateVerificationQaCheckerTrademarkCheckTrademarkSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerTrademarkCheckTrademarkSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerWordList
 */
export interface ProjectTemplateVerificationQaCheckerWordList {
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerWordList
     */
    enabled: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerWordList
     */
    searchWholeWords?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationQaCheckerWordList
     */
    ignoreCase?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerWordList
     */
    checkWordListSeverity?: ProjectTemplateVerificationQaCheckerWordListCheckWordListSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {Array<ProjectTemplateVerificationQaCheckerWordListWordListInner>}
     * @memberof ProjectTemplateVerificationQaCheckerWordList
     */
    wordList?: Array<ProjectTemplateVerificationQaCheckerWordListWordListInner>;
}


/**
 * @export
 */
export const ProjectTemplateVerificationQaCheckerWordListCheckWordListSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationQaCheckerWordListCheckWordListSeverityEnum = typeof ProjectTemplateVerificationQaCheckerWordListCheckWordListSeverityEnum[keyof typeof ProjectTemplateVerificationQaCheckerWordListCheckWordListSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectTemplateVerificationQaCheckerWordListWordListInner
 */
export interface ProjectTemplateVerificationQaCheckerWordListWordListInner {
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerWordListWordListInner
     */
    wrongForm?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationQaCheckerWordListWordListInner
     */
    correctForm?: string;
}
/**
 * 
 * @export
 * @interface ProjectTemplateVerificationSettings
 */
export interface ProjectTemplateVerificationSettings {
    /**
     * 
     * @type {ProjectTemplateVerificationTagVerifierSettings}
     * @memberof ProjectTemplateVerificationSettings
     */
    tagVerifier?: ProjectTemplateVerificationTagVerifierSettings;
    /**
     * 
     * @type {ProjectTemplateVerificationQaCheckerSettings}
     * @memberof ProjectTemplateVerificationSettings
     */
    qaChecker?: ProjectTemplateVerificationQaCheckerSettings;
}
/**
 * Tag Verifier Settings, are detailed in section 10.d
 * @export
 * @interface ProjectTemplateVerificationTagVerifierSettings
 */
export interface ProjectTemplateVerificationTagVerifierSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    enabled: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    checkAddedTags?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    addedTagsSeverity?: ProjectTemplateVerificationTagVerifierSettingsAddedTagsSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    checkDeletedTags?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    deletedTagsSeverity?: ProjectTemplateVerificationTagVerifierSettingsDeletedTagsSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    checkTagOrderChanged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    tagOrderChangedSeverity?: ProjectTemplateVerificationTagVerifierSettingsTagOrderChangedSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    checkSpacingAroundTags?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    spaceAroundTagsSeverity?: ProjectTemplateVerificationTagVerifierSettingsSpaceAroundTagsSeverityEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    ignoreFormattingTags?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    ignoreLockedSegments?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof ProjectTemplateVerificationTagVerifierSettings
     */
    ignoreDifferenceBetweenNormalAndNonBreakingSpace?: boolean;
}


/**
 * @export
 */
export const ProjectTemplateVerificationTagVerifierSettingsAddedTagsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationTagVerifierSettingsAddedTagsSeverityEnum = typeof ProjectTemplateVerificationTagVerifierSettingsAddedTagsSeverityEnum[keyof typeof ProjectTemplateVerificationTagVerifierSettingsAddedTagsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationTagVerifierSettingsDeletedTagsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationTagVerifierSettingsDeletedTagsSeverityEnum = typeof ProjectTemplateVerificationTagVerifierSettingsDeletedTagsSeverityEnum[keyof typeof ProjectTemplateVerificationTagVerifierSettingsDeletedTagsSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationTagVerifierSettingsTagOrderChangedSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationTagVerifierSettingsTagOrderChangedSeverityEnum = typeof ProjectTemplateVerificationTagVerifierSettingsTagOrderChangedSeverityEnum[keyof typeof ProjectTemplateVerificationTagVerifierSettingsTagOrderChangedSeverityEnum];

/**
 * @export
 */
export const ProjectTemplateVerificationTagVerifierSettingsSpaceAroundTagsSeverityEnum = {
    Error: 'error',
    Warning: 'warning',
    Note: 'note'
} as const;
export type ProjectTemplateVerificationTagVerifierSettingsSpaceAroundTagsSeverityEnum = typeof ProjectTemplateVerificationTagVerifierSettingsSpaceAroundTagsSeverityEnum[keyof typeof ProjectTemplateVerificationTagVerifierSettingsSpaceAroundTagsSeverityEnum];

/**
 * 
 * @export
 * @interface ProjectUpdateRequest
 */
export interface ProjectUpdateRequest {
    /**
     * The project name.\
     * Unsupported characters in the name: `\` `/` `:` ` *` `?` `"` `<` `>` `|`
     * @type {string}
     * @memberof ProjectUpdateRequest
     */
    name?: string;
    /**
     * The project description.
     * @type {string}
     * @memberof ProjectUpdateRequest
     */
    description?: string;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectUpdateRequest
     */
    dueBy?: Date;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof ProjectUpdateRequest
     */
    deliveredBy?: Date;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectUpdateRequest
     */
    translationEngine?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectUpdateRequest
     */
    fileProcessingConfiguration?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectUpdateRequest
     */
    pricingModel?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectUpdateRequest
     */
    workflow?: ConfigurationResourceRequest;
    /**
     * 
     * @type {ProjectPlanUpdateRequest}
     * @memberof ProjectUpdateRequest
     */
    projectPlan?: ProjectPlanUpdateRequest;
    /**
     * 
     * @type {ConfigurationResourceRequest}
     * @memberof ProjectUpdateRequest
     */
    tqaProfile?: ConfigurationResourceRequest;
    /**
     * 
     * @type {QuoteUpdateRequest}
     * @memberof ProjectUpdateRequest
     */
    quote?: QuoteUpdateRequest;
    /**
     * 
     * @type {Array<CustomFieldRequest>}
     * @memberof ProjectUpdateRequest
     */
    customFields?: Array<CustomFieldRequest>;
    /**
     * 
     * @type {Array<ProjectManagerRequest>}
     * @memberof ProjectUpdateRequest
     */
    projectManagers?: Array<ProjectManagerRequest>;
}
/**
 * Project quote.
 * @export
 * @interface Quote
 */
export interface Quote {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Total translation fee.</div> 
     * @type {number}
     * @memberof Quote
     */
    totalAmount?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The currency code (ISO 4217).</div> 
     * @type {string}
     * @memberof Quote
     */
    currencyCode?: string;
    /**
     * 
     * @type {Array<QuoteTranslationCost>}
     * @memberof Quote
     */
    translationCosts?: Array<QuoteTranslationCost>;
    /**
     * 
     * @type {Array<QuoteLanguageCost>}
     * @memberof Quote
     */
    languageCosts?: Array<QuoteLanguageCost>;
    /**
     * 
     * @type {Array<QuoteAdditionalCost>}
     * @memberof Quote
     */
    additionalCosts?: Array<QuoteAdditionalCost>;
}
/**
 * Other extra fees not captured by translationCosts and languageCosts.
 * @export
 * @interface QuoteAdditionalCost
 */
export interface QuoteAdditionalCost {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the additional cost.</div> 
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    name?: string;
    /**
     * The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    count?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The computed cost.</div> 
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    total?: number;
    /**
     * The cost of a unit.
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    cost?: number;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    costType?: QuoteAdditionalCostCostTypeEnum;
    /**
     * The unit type of the 'volume' cost, used as a reference for the unit cost.
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    volumeUnitType?: QuoteAdditionalCostVolumeUnitTypeEnum;
    /**
     * Indicates the order in which the additional cost is computed.
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    costOrder?: number;
    /**
     * Describes how the cost of type 'conditional' will be added to total cost.
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    conditionalCostType?: QuoteAdditionalCostConditionalCostTypeEnum;
    /**
     * The operator applied between the 'costVariable' and 'operand'.
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    conditionalCostOperator?: QuoteAdditionalCostConditionalCostOperatorEnum;
    /**
     * The variable that is evaluated against the 'operand' based on the 'costOperator'.
     * @type {string}
     * @memberof QuoteAdditionalCost
     */
    conditionalCostVariable?: QuoteAdditionalCostConditionalCostVariableEnum;
    /**
     * The value that is evaluated against the 'costVariable' based on the 'costOperator'.
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    conditionalCostThreshold?: number;
    /**
     * The sum of all the previously computed costs.
     * @type {number}
     * @memberof QuoteAdditionalCost
     */
    runningTotal?: number;
}


/**
 * @export
 */
export const QuoteAdditionalCostCostTypeEnum = {
    Volume: 'volume',
    PerTargetLanguage: 'perTargetLanguage',
    PerFile: 'perFile',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type QuoteAdditionalCostCostTypeEnum = typeof QuoteAdditionalCostCostTypeEnum[keyof typeof QuoteAdditionalCostCostTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type QuoteAdditionalCostVolumeUnitTypeEnum = typeof QuoteAdditionalCostVolumeUnitTypeEnum[keyof typeof QuoteAdditionalCostVolumeUnitTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type QuoteAdditionalCostConditionalCostTypeEnum = typeof QuoteAdditionalCostConditionalCostTypeEnum[keyof typeof QuoteAdditionalCostConditionalCostTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostConditionalCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type QuoteAdditionalCostConditionalCostOperatorEnum = typeof QuoteAdditionalCostConditionalCostOperatorEnum[keyof typeof QuoteAdditionalCostConditionalCostOperatorEnum];

/**
 * @export
 */
export const QuoteAdditionalCostConditionalCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type QuoteAdditionalCostConditionalCostVariableEnum = typeof QuoteAdditionalCostConditionalCostVariableEnum[keyof typeof QuoteAdditionalCostConditionalCostVariableEnum];

/**
 * 
 * @export
 * @interface QuoteAdditionalCostRequest
 */
export interface QuoteAdditionalCostRequest {
    /**
     * The name of the additional cost.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    name: string;
    /**
     * The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.
     * @type {number}
     * @memberof QuoteAdditionalCostRequest
     */
    count: number;
    /**
     * The cost of a unit.
     * @type {number}
     * @memberof QuoteAdditionalCostRequest
     */
    cost: number;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    costType?: QuoteAdditionalCostRequestCostTypeEnum;
    /**
     * The unit type of the 'volume' cost, used for counting the units.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    volumeUnitType?: QuoteAdditionalCostRequestVolumeUnitTypeEnum;
    /**
     * Indicates the order in which the additional cost is computed.
     * @type {number}
     * @memberof QuoteAdditionalCostRequest
     */
    costOrder: number;
    /**
     * Describes how the cost of type 'conditional' will be added to total cost.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    conditionalCostType?: QuoteAdditionalCostRequestConditionalCostTypeEnum;
    /**
     * The operator applied between the 'costVariable' and 'operand'.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    conditionalCostOperator?: QuoteAdditionalCostRequestConditionalCostOperatorEnum;
    /**
     * The variable that is evaluated against the 'operand' based on the 'costOperator'.
     * @type {string}
     * @memberof QuoteAdditionalCostRequest
     */
    conditionalCostVariable?: QuoteAdditionalCostRequestConditionalCostVariableEnum;
    /**
     * The value that is evaluated against the 'costVariable' based on the 'costOperator'.
     * @type {number}
     * @memberof QuoteAdditionalCostRequest
     */
    conditionalCostThreshold: number;
}


/**
 * @export
 */
export const QuoteAdditionalCostRequestCostTypeEnum = {
    Volume: 'volume',
    PerTargetLanguage: 'perTargetLanguage',
    PerFile: 'perFile',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type QuoteAdditionalCostRequestCostTypeEnum = typeof QuoteAdditionalCostRequestCostTypeEnum[keyof typeof QuoteAdditionalCostRequestCostTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostRequestVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type QuoteAdditionalCostRequestVolumeUnitTypeEnum = typeof QuoteAdditionalCostRequestVolumeUnitTypeEnum[keyof typeof QuoteAdditionalCostRequestVolumeUnitTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostRequestConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type QuoteAdditionalCostRequestConditionalCostTypeEnum = typeof QuoteAdditionalCostRequestConditionalCostTypeEnum[keyof typeof QuoteAdditionalCostRequestConditionalCostTypeEnum];

/**
 * @export
 */
export const QuoteAdditionalCostRequestConditionalCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type QuoteAdditionalCostRequestConditionalCostOperatorEnum = typeof QuoteAdditionalCostRequestConditionalCostOperatorEnum[keyof typeof QuoteAdditionalCostRequestConditionalCostOperatorEnum];

/**
 * @export
 */
export const QuoteAdditionalCostRequestConditionalCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type QuoteAdditionalCostRequestConditionalCostVariableEnum = typeof QuoteAdditionalCostRequestConditionalCostVariableEnum[keyof typeof QuoteAdditionalCostRequestConditionalCostVariableEnum];

/**
 * Fees relevant for a specific target language.
 * @export
 * @interface QuoteLanguageCost
 */
export interface QuoteLanguageCost {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the additional cost.</div> 
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    name?: string;
    /**
     * The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    count?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The computed cost.</div> 
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    total?: number;
    /**
     * The cost of a unit.
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    cost?: number;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    costType?: QuoteLanguageCostCostTypeEnum;
    /**
     * The unit type of the 'volume' cost, used as a reference for the unit cost.
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    volumeUnitType?: QuoteLanguageCostVolumeUnitTypeEnum;
    /**
     * 
     * @type {Language}
     * @memberof QuoteLanguageCost
     */
    targetLanguage?: Language;
    /**
     * Indicates the order in which the additional cost is computed.
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    costOrder?: number;
    /**
     * The condition type of the conditional cost.
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    conditionalCostType?: QuoteLanguageCostConditionalCostTypeEnum;
    /**
     * The operator applied between the 'costVariable' and 'operand'.
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    conditionalCostOperator?: QuoteLanguageCostConditionalCostOperatorEnum;
    /**
     * The variable that is evaluated against the 'operand' based on the 'costOperator'.
     * @type {string}
     * @memberof QuoteLanguageCost
     */
    conditionalCostVariable?: QuoteLanguageCostConditionalCostVariableEnum;
    /**
     * The value that is evaluated against the 'costVariable' based on the 'costOperator'.
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    conditionalCostThreshold?: number;
    /**
     * The sum of all the previously computed costs.
     * @type {number}
     * @memberof QuoteLanguageCost
     */
    runningTotal?: number;
}


/**
 * @export
 */
export const QuoteLanguageCostCostTypeEnum = {
    Volume: 'volume',
    PerTargetLanguage: 'perTargetLanguage',
    PerFile: 'perFile',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type QuoteLanguageCostCostTypeEnum = typeof QuoteLanguageCostCostTypeEnum[keyof typeof QuoteLanguageCostCostTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type QuoteLanguageCostVolumeUnitTypeEnum = typeof QuoteLanguageCostVolumeUnitTypeEnum[keyof typeof QuoteLanguageCostVolumeUnitTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type QuoteLanguageCostConditionalCostTypeEnum = typeof QuoteLanguageCostConditionalCostTypeEnum[keyof typeof QuoteLanguageCostConditionalCostTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostConditionalCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type QuoteLanguageCostConditionalCostOperatorEnum = typeof QuoteLanguageCostConditionalCostOperatorEnum[keyof typeof QuoteLanguageCostConditionalCostOperatorEnum];

/**
 * @export
 */
export const QuoteLanguageCostConditionalCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type QuoteLanguageCostConditionalCostVariableEnum = typeof QuoteLanguageCostConditionalCostVariableEnum[keyof typeof QuoteLanguageCostConditionalCostVariableEnum];

/**
 * 
 * @export
 * @interface QuoteLanguageCostRequest
 */
export interface QuoteLanguageCostRequest {
    /**
     * The name of the additional cost.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    name: string;
    /**
     * The number of units used to compute the total. Used only for 'volume', 'hourly', 'perPage' and 'percentage' cost types.
     * @type {number}
     * @memberof QuoteLanguageCostRequest
     */
    count: number;
    /**
     * The cost of a unit.
     * @type {number}
     * @memberof QuoteLanguageCostRequest
     */
    cost: number;
    /**
     * The type of the additional cost.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    costType?: QuoteLanguageCostRequestCostTypeEnum;
    /**
     * The unit type of the 'volume' cost, used for counting the units.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    volumeUnitType?: QuoteLanguageCostRequestVolumeUnitTypeEnum;
    /**
     * 
     * @type {TargetLanguageRequest}
     * @memberof QuoteLanguageCostRequest
     */
    targetLanguage?: TargetLanguageRequest;
    /**
     * Indicates the order in which the additional cost is computed.
     * @type {number}
     * @memberof QuoteLanguageCostRequest
     */
    costOrder: number;
    /**
     * Describes how the cost of type 'conditional' will be added to total cost.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    conditionalCostType?: QuoteLanguageCostRequestConditionalCostTypeEnum;
    /**
     * The operator applied between the 'costVariable' and 'operand'.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    conditionalCostOperator?: QuoteLanguageCostRequestConditionalCostOperatorEnum;
    /**
     * The variable that is evaluated against the 'operand' based on the 'costOperator'.
     * @type {string}
     * @memberof QuoteLanguageCostRequest
     */
    conditionalCostVariable?: QuoteLanguageCostRequestConditionalCostVariableEnum;
    /**
     * The value that is evaluated against the 'costVariable' based on the 'costOperator'.
     * @type {number}
     * @memberof QuoteLanguageCostRequest
     */
    conditionalCostThreshold: number;
}


/**
 * @export
 */
export const QuoteLanguageCostRequestCostTypeEnum = {
    Volume: 'volume',
    PerTargetLanguage: 'perTargetLanguage',
    PerFile: 'perFile',
    Hourly: 'hourly',
    Percentage: 'percentage',
    PerPage: 'perPage',
    Conditional: 'conditional'
} as const;
export type QuoteLanguageCostRequestCostTypeEnum = typeof QuoteLanguageCostRequestCostTypeEnum[keyof typeof QuoteLanguageCostRequestCostTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostRequestVolumeUnitTypeEnum = {
    Words: 'words',
    Characters: 'characters'
} as const;
export type QuoteLanguageCostRequestVolumeUnitTypeEnum = typeof QuoteLanguageCostRequestVolumeUnitTypeEnum[keyof typeof QuoteLanguageCostRequestVolumeUnitTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostRequestConditionalCostTypeEnum = {
    Absolute: 'absolute',
    Relative: 'relative',
    Percentage: 'percentage'
} as const;
export type QuoteLanguageCostRequestConditionalCostTypeEnum = typeof QuoteLanguageCostRequestConditionalCostTypeEnum[keyof typeof QuoteLanguageCostRequestConditionalCostTypeEnum];

/**
 * @export
 */
export const QuoteLanguageCostRequestConditionalCostOperatorEnum = {
    Less: 'less',
    LessOrEqual: 'lessOrEqual',
    Greater: 'greater',
    GreaterOrEqual: 'greaterOrEqual'
} as const;
export type QuoteLanguageCostRequestConditionalCostOperatorEnum = typeof QuoteLanguageCostRequestConditionalCostOperatorEnum[keyof typeof QuoteLanguageCostRequestConditionalCostOperatorEnum];

/**
 * @export
 */
export const QuoteLanguageCostRequestConditionalCostVariableEnum = {
    WordCount: 'wordCount',
    RunningTotal: 'runningTotal'
} as const;
export type QuoteLanguageCostRequestConditionalCostVariableEnum = typeof QuoteLanguageCostRequestConditionalCostVariableEnum[keyof typeof QuoteLanguageCostRequestConditionalCostVariableEnum];

/**
 * Fees calculated based on segment status (new, translated, signed off) and previous leverage (100% match and identical context, 100% match, <100%match, cross-file repetitions).
 * @export
 * @interface QuoteTranslationCost
 */
export interface QuoteTranslationCost {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total cost for the current target language.</div> 
     * @type {number}
     * @memberof QuoteTranslationCost
     */
    total?: number;
    /**
     * 
     * @type {Language}
     * @memberof QuoteTranslationCost
     */
    targetLanguage?: Language;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    exactMatch?: TranslationCostItem;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    inContextExactMatch?: TranslationCostItem;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    _new?: TranslationCostItem;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    perfectMatch?: TranslationCostItem;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    repetitions?: TranslationCostItem;
    /**
     * 
     * @type {TranslationCostItem}
     * @memberof QuoteTranslationCost
     */
    machineTranslation?: TranslationCostItem;
    /**
     * 
     * @type {Array<TranslationCostFuzzyItem>}
     * @memberof QuoteTranslationCost
     */
    fuzzyMatch?: Array<TranslationCostFuzzyItem>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The sum of all the previously computed costs.</div> 
     * @type {number}
     * @memberof QuoteTranslationCost
     */
    runningTotal?: number;
}
/**
 * 
 * @export
 * @interface QuoteUpdateRequest
 */
export interface QuoteUpdateRequest {
    /**
     * 
     * @type {Array<QuoteLanguageCostRequest>}
     * @memberof QuoteUpdateRequest
     */
    languageCosts?: Array<QuoteLanguageCostRequest>;
    /**
     * 
     * @type {Array<QuoteAdditionalCostRequest>}
     * @memberof QuoteUpdateRequest
     */
    additionalCosts?: Array<QuoteAdditionalCostRequest>;
}
/**
 * Rate Limit entry
 * @export
 * @interface RateLimit
 */
export interface RateLimit {
    /**
     * Name of the rate limit policy.
     * @type {string}
     * @memberof RateLimit
     */
    policyName: string;
    /**
     * Describes which endpoints are affected by this limit, and for which time frame.
     * @type {string}
     * @memberof RateLimit
     */
    description: string;
    /**
     * The limit in effect for the endpoint and time frame.
     * @type {number}
     * @memberof RateLimit
     */
    limit: number;
    /**
     * The remaining quota in effect for the endpoint and time frame.
     * @type {number}
     * @memberof RateLimit
     */
    remainingQuota: number;
}
/**
 * Input for removing projects from group.
 * @export
 * @interface RemoveProjectsFromGroupRequest
 */
export interface RemoveProjectsFromGroupRequest {
    /**
     * The projects to be removed from group.
     * @type {Array<ProjectGroupProjectRequest>}
     * @memberof RemoveProjectsFromGroupRequest
     */
    projects: Array<ProjectGroupProjectRequest>;
}
/**
 * The resource folder.
 * @export
 * @interface ResourceFolder
 */
export interface ResourceFolder {
    /**
     * 
     * @type {string}
     * @memberof ResourceFolder
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the folder.</div> 
     * @type {string}
     * @memberof ResourceFolder
     */
    name?: string;
}
/**
 * Resource folder.
 * @export
 * @interface ResourceFolderRequest
 */
export interface ResourceFolderRequest {
    /**
     * The folder identifier.
     * @type {string}
     * @memberof ResourceFolderRequest
     */
    id: string;
    /**
     * The name of the folder.
     * @type {string}
     * @memberof ResourceFolderRequest
     */
    name?: string;
}
/**
 * Schedule Template resource
 * @export
 * @interface ScheduleTemplate
 */
export interface ScheduleTemplate {
    /**
     * 
     * @type {string}
     * @memberof ScheduleTemplate
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Schedule Template name.</div> 
     * @type {string}
     * @memberof ScheduleTemplate
     */
    name?: string;
    /**
     * Schedule Template description.
     * @type {string}
     * @memberof ScheduleTemplate
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof ScheduleTemplate
     */
    location?: FolderV2;
    /**
     * 
     * @type {Array<ScheduleTemplateConfiguration>}
     * @memberof ScheduleTemplate
     */
    configurations?: Array<ScheduleTemplateConfiguration>;
    /**
     * 
     * @type {ScheduleTemplateProjectConfiguration}
     * @memberof ScheduleTemplate
     */
    projectScheduleConfiguration?: ScheduleTemplateProjectConfiguration;
}
/**
 * Schedule Template Configuration resource
 * @export
 * @interface ScheduleTemplateConfiguration
 */
export interface ScheduleTemplateConfiguration {
    /**
     * The identifier of the human task type. 
     * @type {string}
     * @memberof ScheduleTemplateConfiguration
     */
    taskTypeId: string;
    /**
     * The name of the task type.
     * @type {string}
     * @memberof ScheduleTemplateConfiguration
     */
    taskTypeName?: string;
    /**
     * 
     * @type {Array<ScheduleTemplateConfigurationSchedules>}
     * @memberof ScheduleTemplateConfiguration
     */
    schedules?: Array<ScheduleTemplateConfigurationSchedules>;
}
/**
 * Schedule Template Configuration resource
 * @export
 * @interface ScheduleTemplateConfigurationRequest
 */
export interface ScheduleTemplateConfigurationRequest {
    /**
     * The identifier of the human task type. 
     * @type {string}
     * @memberof ScheduleTemplateConfigurationRequest
     */
    taskTypeId: string;
    /**
     * 
     * @type {Array<ScheduleTemplateConfigurationSchedules>}
     * @memberof ScheduleTemplateConfigurationRequest
     */
    schedules?: Array<ScheduleTemplateConfigurationSchedules>;
}
/**
 * The Configuration Schedules resource.
 * @export
 * @interface ScheduleTemplateConfigurationSchedules
 */
export interface ScheduleTemplateConfigurationSchedules {
    /**
     * The scope of this configuration schedule. \
     * global -> schedule of the task \
     * sourceLanguage -> schedule of the specific task when the sourceLanguage matches this object's sourceLanguage\
     * languageDirection -> schedule of the specific task when the languageDirection matches this object's languageDirection
     * @type {string}
     * @memberof ScheduleTemplateConfigurationSchedules
     */
    scope: ScheduleTemplateConfigurationSchedulesScopeEnum;
    /**
     * Expressed in minutes.
     * @type {number}
     * @memberof ScheduleTemplateConfigurationSchedules
     */
    duration?: number;
    /**
     * Expressed in minutes.
     * 
     * 
     * @type {number}
     * @memberof ScheduleTemplateConfigurationSchedules
     */
    reminder?: ScheduleTemplateConfigurationSchedulesReminderEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduleTemplateConfigurationSchedules
     */
    sourceLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleTemplateConfigurationSchedules
     */
    targetLanguage?: string;
}


/**
 * @export
 */
export const ScheduleTemplateConfigurationSchedulesScopeEnum = {
    Global: 'global',
    SourceLanguage: 'sourceLanguage',
    LanguageDirection: 'languageDirection'
} as const;
export type ScheduleTemplateConfigurationSchedulesScopeEnum = typeof ScheduleTemplateConfigurationSchedulesScopeEnum[keyof typeof ScheduleTemplateConfigurationSchedulesScopeEnum];

/**
 * @export
 */
export const ScheduleTemplateConfigurationSchedulesReminderEnum = {
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_60: 60,
    NUMBER_120: 120,
    NUMBER_480: 480,
    NUMBER_1440: 1440,
    NUMBER_2880: 2880
} as const;
export type ScheduleTemplateConfigurationSchedulesReminderEnum = typeof ScheduleTemplateConfigurationSchedulesReminderEnum[keyof typeof ScheduleTemplateConfigurationSchedulesReminderEnum];

/**
 * Schedule Template create request model
 * @export
 * @interface ScheduleTemplateCreateRequest
 */
export interface ScheduleTemplateCreateRequest {
    /**
     * <div style="display: inline;">Schedule Template name.</div> 
     * @type {string}
     * @memberof ScheduleTemplateCreateRequest
     */
    name: string;
    /**
     * Schedule Template description.
     * @type {string}
     * @memberof ScheduleTemplateCreateRequest
     */
    description?: string;
    /**
     * The folder identifier where the schedule template should be created. 
     * @type {string}
     * @memberof ScheduleTemplateCreateRequest
     */
    location?: string;
    /**
     * 
     * @type {Array<ScheduleTemplateConfigurationRequest>}
     * @memberof ScheduleTemplateCreateRequest
     */
    configurations?: Array<ScheduleTemplateConfigurationRequest>;
    /**
     * 
     * @type {ScheduleTemplateProjectConfiguration}
     * @memberof ScheduleTemplateCreateRequest
     */
    projectScheduleConfiguration?: ScheduleTemplateProjectConfiguration;
}
/**
 * Schedule Template Project Configuration resource
 * @export
 * @interface ScheduleTemplateProjectConfiguration
 */
export interface ScheduleTemplateProjectConfiguration {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Expressed in minutes.</div> 
     * @type {number}
     * @memberof ScheduleTemplateProjectConfiguration
     */
    duration?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Expressed in minutes.</div> 
     * @type {number}
     * @memberof ScheduleTemplateProjectConfiguration
     */
    reminder?: ScheduleTemplateProjectConfigurationReminderEnum;
}


/**
 * @export
 */
export const ScheduleTemplateProjectConfigurationReminderEnum = {
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_60: 60,
    NUMBER_120: 120,
    NUMBER_480: 480,
    NUMBER_1440: 1440,
    NUMBER_2880: 2880
} as const;
export type ScheduleTemplateProjectConfigurationReminderEnum = typeof ScheduleTemplateProjectConfigurationReminderEnum[keyof typeof ScheduleTemplateProjectConfigurationReminderEnum];

/**
 * Schedule Template update request model
 * @export
 * @interface ScheduleTemplateUpdateRequest
 */
export interface ScheduleTemplateUpdateRequest {
    /**
     * <div style="display: inline;">Schedule Template name.</div> 
     * @type {string}
     * @memberof ScheduleTemplateUpdateRequest
     */
    name?: string;
    /**
     * Schedule Template description.
     * @type {string}
     * @memberof ScheduleTemplateUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<ScheduleTemplateConfigurationRequest>}
     * @memberof ScheduleTemplateUpdateRequest
     */
    configurations?: Array<ScheduleTemplateConfigurationRequest>;
    /**
     * 
     * @type {ScheduleTemplateProjectConfiguration}
     * @memberof ScheduleTemplateUpdateRequest
     */
    projectScheduleConfiguration?: ScheduleTemplateProjectConfiguration;
}
/**
 * A basic language direction.
 * @export
 * @interface SimpleLanguageDirection
 */
export interface SimpleLanguageDirection {
    /**
     * The language direction identifier.
     * @type {string}
     * @memberof SimpleLanguageDirection
     */
    id?: string;
    /**
     * 
     * @type {Language}
     * @memberof SimpleLanguageDirection
     */
    sourceLanguage?: Language;
    /**
     * 
     * @type {Language}
     * @memberof SimpleLanguageDirection
     */
    targetLanguage?: Language;
}
/**
 * Source File.
 * @export
 * @interface SourceFile
 */
export interface SourceFile {
    /**
     * 
     * @type {string}
     * @memberof SourceFile
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file name.</div> 
     * @type {string}
     * @memberof SourceFile
     */
    name?: string;
    /**
     * 
     * @type {FileRole}
     * @memberof SourceFile
     */
    role?: FileRole;
    /**
     * 
     * @type {Language}
     * @memberof SourceFile
     */
    language?: Language;
    /**
     * The source file versions. (Not available for List endpoints).
     * @type {Array<SourceFileVersion>}
     * @memberof SourceFile
     */
    versions?: Array<SourceFileVersion>;
    /**
     * 
     * @type {Array<Language>}
     * @memberof SourceFile
     */
    targetLanguages?: Array<Language>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SourceFile
     */
    path?: Array<string>;
}
/**
 * 
 * @export
 * @interface SourceFileAttachmentRequest
 */
export interface SourceFileAttachmentRequest {
    /**
     * List of Attached Source File properties referencing previously uploaded file
     * @type {Array<SourceFileAttachmentRequestItem>}
     * @memberof SourceFileAttachmentRequest
     */
    sourceFilesAttachment?: Array<SourceFileAttachmentRequestItem>;
}
/**
 * Attached Source File properties referencing previously uploaded file
 * @export
 * @interface SourceFileAttachmentRequestItem
 */
export interface SourceFileAttachmentRequestItem {
    /**
     * The name of the source file.
     * 
     * The character limit is calculated together with the `path` length.
     * @type {string}
     * @memberof SourceFileAttachmentRequestItem
     */
    name: string;
    /**
     * The role of the source file. When set to unknown or translatable, the system will try to detect the file type.
     * @type {string}
     * @memberof SourceFileAttachmentRequestItem
     */
    role: SourceFileAttachmentRequestItemRoleEnum;
    /**
     * The identifier of the previously uploaded file.
     * @type {string}
     * @memberof SourceFileAttachmentRequestItem
     */
    fileUrl: string;
    /**
     * The type of the file.
     * @type {string}
     * @memberof SourceFileAttachmentRequestItem
     */
    type: SourceFileAttachmentRequestItemTypeEnum;
    /**
     * 
     * @type {SourceLanguageRequest}
     * @memberof SourceFileAttachmentRequestItem
     */
    language: SourceLanguageRequest;
    /**
     * A list of target languages in code 5 (ex. en-US)
     * @type {Array<TargetLanguageRequest>}
     * @memberof SourceFileAttachmentRequestItem
     */
    targetLanguages?: Array<TargetLanguageRequest>;
    /**
     * Path represents the hierarchy of the source file inside the zip. For example `/ZipWithFolders/Finance/2021/Finance_2021_dummy_EN.txt` would be sent as: 
     * 
     * ```json 
     * "path": [ 
     *   "ZipWithFolders", 
     *   "Finance", 
     *   "2021", 
     *   "Finance_2021_dummy_EN.txt" 
     * ]
     * ```
     * 
     * The character limit is calculated together with the   `name` length.
     * @type {Array<string>}
     * @memberof SourceFileAttachmentRequestItem
     */
    path?: Array<string>;
}


/**
 * @export
 */
export const SourceFileAttachmentRequestItemRoleEnum = {
    Translatable: 'translatable',
    Reference: 'reference',
    Unknown: 'unknown'
} as const;
export type SourceFileAttachmentRequestItemRoleEnum = typeof SourceFileAttachmentRequestItemRoleEnum[keyof typeof SourceFileAttachmentRequestItemRoleEnum];

/**
 * @export
 */
export const SourceFileAttachmentRequestItemTypeEnum = {
    Native: 'native',
    Bcm: 'bcm',
    Sdlxliff: 'sdlxliff'
} as const;
export type SourceFileAttachmentRequestItemTypeEnum = typeof SourceFileAttachmentRequestItemTypeEnum[keyof typeof SourceFileAttachmentRequestItemTypeEnum];

/**
 * 
 * @export
 * @interface SourceFileAttachmentResponse
 */
export interface SourceFileAttachmentResponse {
    /**
     * 
     * @type {Array<SourceFile>}
     * @memberof SourceFileAttachmentResponse
     */
    sourceFiles?: Array<SourceFile>;
}
/**
 * 
 * @export
 * @interface SourceFilePropertiesResponse
 */
export interface SourceFilePropertiesResponse {
    /**
     * The file's role.
     * @type {string}
     * @memberof SourceFilePropertiesResponse
     */
    fileRole: SourceFilePropertiesResponseFileRoleEnum;
    /**
     * The file type settings identifier.
     * @type {string}
     * @memberof SourceFilePropertiesResponse
     */
    fileTypeSettingsId: string;
}


/**
 * @export
 */
export const SourceFilePropertiesResponseFileRoleEnum = {
    Translatable: 'translatable',
    Reference: 'reference'
} as const;
export type SourceFilePropertiesResponseFileRoleEnum = typeof SourceFilePropertiesResponseFileRoleEnum[keyof typeof SourceFilePropertiesResponseFileRoleEnum];

/**
 * 
 * @export
 * @interface SourceFilePropertiesUpdateRequest
 */
export interface SourceFilePropertiesUpdateRequest {
    /**
     * The file role.
     * @type {string}
     * @memberof SourceFilePropertiesUpdateRequest
     */
    fileRole?: SourceFilePropertiesUpdateRequestFileRoleEnum;
    /**
     * The file type settings identifier.
     * @type {string}
     * @memberof SourceFilePropertiesUpdateRequest
     */
    fileTypeSettingsId?: string;
}


/**
 * @export
 */
export const SourceFilePropertiesUpdateRequestFileRoleEnum = {
    Translatable: 'translatable',
    Reference: 'reference'
} as const;
export type SourceFilePropertiesUpdateRequestFileRoleEnum = typeof SourceFilePropertiesUpdateRequestFileRoleEnum[keyof typeof SourceFilePropertiesUpdateRequestFileRoleEnum];

/**
 * 
 * @export
 * @interface SourceFileRenameRequest
 */
export interface SourceFileRenameRequest {
    /**
     * The name of the source file.\
     * The name should not contain the extension.\
     * Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.
     * @type {string}
     * @memberof SourceFileRenameRequest
     */
    name: string;
    /**
     * Option for renaming also the target files.
     * @type {boolean}
     * @memberof SourceFileRenameRequest
     */
    updateTargetFilesName?: boolean;
}
/**
 * Source file properties sent as a JSON inside a text part.
 * @export
 * @interface SourceFileRequest
 */
export interface SourceFileRequest {
    /**
     * The name of the source file.
     * 
     * 
     * The character limit is calculated together with the `path` length.
     * @type {string}
     * @memberof SourceFileRequest
     */
    name: string;
    /**
     * The role of the source file. When set to unknown or translatable, the system will try to detect the file type.
     * @type {string}
     * @memberof SourceFileRequest
     */
    role: SourceFileRequestRoleEnum;
    /**
     * The type of the file.
     * @type {string}
     * @memberof SourceFileRequest
     */
    type: SourceFileRequestTypeEnum;
    /**
     * The language of the file in code 5 (ex. en-US)
     * @type {string}
     * @memberof SourceFileRequest
     */
    language: string;
    /**
     * A list of target languages in code 5 (ex. en-US)
     * @type {Array<string>}
     * @memberof SourceFileRequest
     */
    targetLanguages?: Array<string>;
    /**
     * Path represents the hierarchy of the source file inside the zip. For example `/ZipWithFolders/Finance/2021/Finance_2021_dummy_EN.txt` would be sent as: 
     * 
     * ```json 
     * "path": [ 
     *   "ZipWithFolders", 
     *   "Finance", 
     *   "2021", 
     *   "Finance_2021_dummy_EN.txt" 
     * ]
     * ```
     * 
     * The character limit is calculated together with the `name` length.
     * @type {Array<string>}
     * @memberof SourceFileRequest
     */
    path?: Array<string>;
}


/**
 * @export
 */
export const SourceFileRequestRoleEnum = {
    Translatable: 'translatable',
    Reference: 'reference',
    Unknown: 'unknown'
} as const;
export type SourceFileRequestRoleEnum = typeof SourceFileRequestRoleEnum[keyof typeof SourceFileRequestRoleEnum];

/**
 * @export
 */
export const SourceFileRequestTypeEnum = {
    Native: 'native',
    Bcm: 'bcm',
    Sdlxliff: 'sdlxliff'
} as const;
export type SourceFileRequestTypeEnum = typeof SourceFileRequestTypeEnum[keyof typeof SourceFileRequestTypeEnum];

/**
 * 
 * @export
 * @interface SourceFileUpdateRequest
 */
export interface SourceFileUpdateRequest {
    /**
     * The source file identifier.
     * @type {string}
     * @memberof SourceFileUpdateRequest
     */
    id: string;
    /**
     * The source file name.\
     * The name should not contain the extension.\
     * Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.
     * @type {string}
     * @memberof SourceFileUpdateRequest
     */
    name: string;
    /**
     * Option for renaming the target files too.
     * @type {boolean}
     * @memberof SourceFileUpdateRequest
     */
    updateTargetFilesName?: boolean;
}
/**
 * Source File Version.
 * @export
 * @interface SourceFileVersion
 */
export interface SourceFileVersion {
    /**
     * The source file version identifier.
     * @type {string}
     * @memberof SourceFileVersion
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div> 
     * @type {string}
     * @memberof SourceFileVersion
     */
    type?: SourceFileVersionTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file version name. This is a synthetic value, typically constructed from the version number and the originating task name.</div>
     * @type {string}
     * @memberof SourceFileVersion
     */
    name?: string;
    /**
     * A numeric value, incremented for each new version.
     * @type {number}
     * @memberof SourceFileVersion
     */
    version: number;
    /**
     * The identifier of the task that generated the file.
     * @type {string}
     * @memberof SourceFileVersion
     */
    originatingTaskId?: string;
}


/**
 * @export
 */
export const SourceFileVersionTypeEnum = {
    Native: 'native',
    Bcm: 'bcm'
} as const;
export type SourceFileVersionTypeEnum = typeof SourceFileVersionTypeEnum[keyof typeof SourceFileVersionTypeEnum];

/**
 * 
 * @export
 * @interface SourceFileVersionPropertiesCreateRequest
 */
export interface SourceFileVersionPropertiesCreateRequest {
    /**
     * The version type.
     * @type {string}
     * @memberof SourceFileVersionPropertiesCreateRequest
     */
    type: SourceFileVersionPropertiesCreateRequestTypeEnum;
    /**
     * The file type settings identifier.
     * @type {string}
     * @memberof SourceFileVersionPropertiesCreateRequest
     */
    fileTypeSettingsId?: string;
}


/**
 * @export
 */
export const SourceFileVersionPropertiesCreateRequestTypeEnum = {
    Bcm: 'bcm',
    Native: 'native'
} as const;
export type SourceFileVersionPropertiesCreateRequestTypeEnum = typeof SourceFileVersionPropertiesCreateRequestTypeEnum[keyof typeof SourceFileVersionPropertiesCreateRequestTypeEnum];

/**
 * 
 * @export
 * @interface SourceFileVersionResponse
 */
export interface SourceFileVersionResponse {
    /**
     * The source file version identifier.
     * @type {string}
     * @memberof SourceFileVersionResponse
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div> 
     * @type {string}
     * @memberof SourceFileVersionResponse
     */
    type?: SourceFileVersionResponseTypeEnum;
}


/**
 * @export
 */
export const SourceFileVersionResponseTypeEnum = {
    Native: 'native',
    Bcm: 'bcm'
} as const;
export type SourceFileVersionResponseTypeEnum = typeof SourceFileVersionResponseTypeEnum[keyof typeof SourceFileVersionResponseTypeEnum];

/**
 * 
 * @export
 * @interface SourceFilesUpdateRequest
 */
export interface SourceFilesUpdateRequest {
    /**
     * 
     * @type {Array<SourceFileUpdateRequest>}
     * @memberof SourceFilesUpdateRequest
     */
    files: Array<SourceFileUpdateRequest>;
}
/**
 * 
 * @export
 * @interface SourceLanguageRequest
 */
export interface SourceLanguageRequest {
    /**
     * The language code.
     * @type {string}
     * @memberof SourceLanguageRequest
     */
    languageCode: string;
}
/**
 * Target File.
 * @export
 * @interface TargetFile
 */
export interface TargetFile {
    /**
     * 
     * @type {string}
     * @memberof TargetFile
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The target file name.</div> 
     * @type {string}
     * @memberof TargetFile
     */
    name?: string;
    /**
     * 
     * @type {LanguageDirection}
     * @memberof TargetFile
     */
    languageDirection?: LanguageDirection;
    /**
     * 
     * @type {SourceFile}
     * @memberof TargetFile
     */
    sourceFile?: SourceFile;
    /**
     * 
     * @type {TargetFileLatestVersion}
     * @memberof TargetFile
     */
    latestVersion?: TargetFileLatestVersion;
    /**
     * 
     * @type {AnalysisStatistics}
     * @memberof TargetFile
     */
    analysisStatistics?: AnalysisStatistics;
    /**
     * Shows if the file is still being processed (inProgress) or if it has been fully processed (finished) by the workflow. A target file is automatically marked as finished by the workflow engine, once there are no more tasks to be performed on it.
     * @type {string}
     * @memberof TargetFile
     */
    status?: TargetFileStatusEnum;
}


/**
 * @export
 */
export const TargetFileStatusEnum = {
    InProgress: 'inProgress',
    Finished: 'finished',
    Canceled: 'canceled'
} as const;
export type TargetFileStatusEnum = typeof TargetFileStatusEnum[keyof typeof TargetFileStatusEnum];

/**
 * Target File Latest Version.
 * @export
 * @interface TargetFileLatestVersion
 */
export interface TargetFileLatestVersion {
    /**
     * The target file version identifier.
     * @type {string}
     * @memberof TargetFileLatestVersion
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div> 
     * @type {string}
     * @memberof TargetFileLatestVersion
     */
    type?: TargetFileLatestVersionTypeEnum;
    /**
     * A numeric value, incremented for each new version.
     * @type {number}
     * @memberof TargetFileLatestVersion
     */
    version: number;
}


/**
 * @export
 */
export const TargetFileLatestVersionTypeEnum = {
    Native: 'native',
    Bcm: 'bcm'
} as const;
export type TargetFileLatestVersionTypeEnum = typeof TargetFileLatestVersionTypeEnum[keyof typeof TargetFileLatestVersionTypeEnum];

/**
 * 
 * @export
 * @interface TargetFileRenameRequest
 */
export interface TargetFileRenameRequest {
    /**
     * The name of the target file.\
     * The name should not contain the extension.\
     * Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.
     * @type {string}
     * @memberof TargetFileRenameRequest
     */
    name: string;
}
/**
 * 
 * @export
 * @interface TargetFileUpdateRequest
 */
export interface TargetFileUpdateRequest {
    /**
     * The target file identifier.
     * @type {string}
     * @memberof TargetFileUpdateRequest
     */
    id: string;
    /**
     * The target file name.\
     * The name should not contain the extension.\
     * Unsupported characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`.
     * @type {string}
     * @memberof TargetFileUpdateRequest
     */
    name: string;
}
/**
 * Target File Version.
 * @export
 * @interface TargetFileVersion
 */
export interface TargetFileVersion {
    /**
     * The target file version identifier.
     * @type {string}
     * @memberof TargetFileVersion
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div> 
     * @type {string}
     * @memberof TargetFileVersion
     */
    type?: TargetFileVersionTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file version name. This is a synthetic value, typically constructed from the version number and the originating task name.</div>
     * @type {string}
     * @memberof TargetFileVersion
     */
    name?: string;
    /**
     * A numeric value, incremented for each new version.
     * @type {number}
     * @memberof TargetFileVersion
     */
    version: number;
    /**
     * The identifier of the task that generated the file.
     * @type {string}
     * @memberof TargetFileVersion
     */
    originatingTaskId?: string;
}


/**
 * @export
 */
export const TargetFileVersionTypeEnum = {
    Native: 'native',
    Bcm: 'bcm'
} as const;
export type TargetFileVersionTypeEnum = typeof TargetFileVersionTypeEnum[keyof typeof TargetFileVersionTypeEnum];

/**
 * 
 * @export
 * @interface TargetFileVersionPropertiesCreateRequest
 */
export interface TargetFileVersionPropertiesCreateRequest {
    /**
     * The version type.
     * @type {string}
     * @memberof TargetFileVersionPropertiesCreateRequest
     */
    type: TargetFileVersionPropertiesCreateRequestTypeEnum;
}


/**
 * @export
 */
export const TargetFileVersionPropertiesCreateRequestTypeEnum = {
    Bcm: 'bcm',
    Native: 'native'
} as const;
export type TargetFileVersionPropertiesCreateRequestTypeEnum = typeof TargetFileVersionPropertiesCreateRequestTypeEnum[keyof typeof TargetFileVersionPropertiesCreateRequestTypeEnum];

/**
 * 
 * @export
 * @interface TargetFileVersionResponse
 */
export interface TargetFileVersionResponse {
    /**
     * The target file version identifier.
     * @type {string}
     * @memberof TargetFileVersionResponse
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The version type.</div> 
     * @type {string}
     * @memberof TargetFileVersionResponse
     */
    type?: TargetFileVersionResponseTypeEnum;
}


/**
 * @export
 */
export const TargetFileVersionResponseTypeEnum = {
    Native: 'native',
    Bcm: 'bcm'
} as const;
export type TargetFileVersionResponseTypeEnum = typeof TargetFileVersionResponseTypeEnum[keyof typeof TargetFileVersionResponseTypeEnum];

/**
 * 
 * @export
 * @interface TargetFilesUpdateRequest
 */
export interface TargetFilesUpdateRequest {
    /**
     * 
     * @type {Array<TargetFileUpdateRequest>}
     * @memberof TargetFilesUpdateRequest
     */
    files: Array<TargetFileUpdateRequest>;
}
/**
 * 
 * @export
 * @interface TargetLanguageRequest
 */
export interface TargetLanguageRequest {
    /**
     * The language code.
     * @type {string}
     * @memberof TargetLanguageRequest
     */
    languageCode: string;
}
/**
 * Task.
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The task status.</div> 
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
    /**
     * 
     * @type {TaskType}
     * @memberof Task
     */
    taskType?: TaskType;
    /**
     * 
     * @type {TaskInput}
     * @memberof Task
     */
    input?: TaskInput;
    /**
     * 
     * @type {Array<TaskInputFile>}
     * @memberof Task
     */
    inputFiles?: Array<TaskInputFile>;
    /**
     * 
     * @type {User}
     * @memberof Task
     */
    owner?: User;
    /**
     * 
     * @type {Array<TaskAssignee>}
     * @memberof Task
     */
    assignees?: Array<TaskAssignee>;
    /**
     * The task due date. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof Task
     */
    dueBy?: Date;
    /**
     * The date and time when the task was created.  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ" 
     * @type {Date}
     * @memberof Task
     */
    createdAt?: Date;
    /**
     * 
     * @type {Array<TaskOutcome>}
     * @memberof Task
     */
    applicableOutcomes?: Array<TaskOutcome>;
    /**
     * The outcome of the task type. It is retrieved only if the task is completed. It should match one of the legal outcomes in the task type.
     * @type {string}
     * @memberof Task
     */
    outcome?: string;
    /**
     * The comment associated with this task at completion.
     * @type {string}
     * @memberof Task
     */
    comment?: string;
    /**
     * 
     * @type {Project}
     * @memberof Task
     */
    project?: Project;
    /**
     * 
     * @type {FailedTask}
     * @memberof Task
     */
    failedTask?: FailedTask;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof Task
     */
    completedAt?: Date;
}


/**
 * @export
 */
export const TaskStatusEnum = {
    Created: 'created',
    InProgress: 'inProgress',
    Completed: 'completed',
    Failed: 'failed',
    Skipped: 'skipped',
    Canceled: 'canceled'
} as const;
export type TaskStatusEnum = typeof TaskStatusEnum[keyof typeof TaskStatusEnum];

/**
 * Properties of task assignment.
 * @export
 * @interface TaskAssignRequest
 */
export interface TaskAssignRequest {
    /**
     * 
     * @type {Array<TaskAssigneeRequest>}
     * @memberof TaskAssignRequest
     */
    assignees?: Array<TaskAssigneeRequest>;
}
/**
 * Task assignee. Based on the "type", the following properties can be retrieved: "user", "group" or "vendorOrderTemplate". For "projectCreator" and "projectManager" no other properties are available.
 * @export
 * @interface TaskAssignee
 */
export interface TaskAssignee {
    /**
     * Type "projectCreator" - reserved for future use. Should be able to handle it and ignore it if received.
     * @type {string}
     * @memberof TaskAssignee
     */
    type: TaskAssigneeTypeEnum;
    /**
     * 
     * @type {User}
     * @memberof TaskAssignee
     */
    user?: User;
    /**
     * 
     * @type {Group}
     * @memberof TaskAssignee
     */
    group?: Group;
    /**
     * 
     * @type {VendorOrderTemplate}
     * @memberof TaskAssignee
     */
    vendorOrderTemplate?: VendorOrderTemplate;
}


/**
 * @export
 */
export const TaskAssigneeTypeEnum = {
    User: 'user',
    Group: 'group',
    VendorOrderTemplate: 'vendorOrderTemplate',
    ProjectCreator: 'projectCreator'
} as const;
export type TaskAssigneeTypeEnum = typeof TaskAssigneeTypeEnum[keyof typeof TaskAssigneeTypeEnum];

/**
 * 
 * @export
 * @interface TaskAssigneeRequest
 */
export interface TaskAssigneeRequest {
    /**
     * The identifier of the assignee that should correspond to a resource based on the “type” field. Only required for the `user`, `group`, and `vendorOrderTemplate` types.
     * @type {string}
     * @memberof TaskAssigneeRequest
     */
    id?: string;
    /**
     * The assignee type.
     * @type {string}
     * @memberof TaskAssigneeRequest
     */
    type: TaskAssigneeRequestTypeEnum;
}


/**
 * @export
 */
export const TaskAssigneeRequestTypeEnum = {
    User: 'user',
    Group: 'group',
    VendorOrderTemplate: 'vendorOrderTemplate',
    ProjectManager: 'projectManager',
    ProjectCreator: 'projectCreator'
} as const;
export type TaskAssigneeRequestTypeEnum = typeof TaskAssigneeRequestTypeEnum[keyof typeof TaskAssigneeRequestTypeEnum];

/**
 * Properties of task completion.
 * @export
 * @interface TaskCompleteRequest
 */
export interface TaskCompleteRequest {
    /**
     * The outcome should be one of the valid applicable outcomes of the task. If not specified, the default one will be taken.
     * @type {string}
     * @memberof TaskCompleteRequest
     */
    outcome: string;
    /**
     * The comment associated with this task completion.
     * @type {string}
     * @memberof TaskCompleteRequest
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface TaskConfigurationScope
 */
export interface TaskConfigurationScope {
    /**
     * The applicability impact of the workflow configuration:
     * - global: used for global tasks which are not associated to a target language
     * - sourceLanguage: changes affect only the task associated to the source language specified in **sourceLanguage** field
     * - targetLanguage: changes affect only the task associated to the target language specified in **targetLanguage** field
     * - languageDirection: changes affect only the task associated to the language direction specified in **languageDirection** field
     * @type {string}
     * @memberof TaskConfigurationScope
     */
    type: TaskConfigurationScopeTypeEnum;
    /**
     * 
     * @type {Language}
     * @memberof TaskConfigurationScope
     */
    sourceLanguage?: Language;
    /**
     * 
     * @type {Language}
     * @memberof TaskConfigurationScope
     */
    targetLanguage?: Language;
    /**
     * 
     * @type {LanguageDirectionItem}
     * @memberof TaskConfigurationScope
     */
    languageDirection?: LanguageDirectionItem;
}


/**
 * @export
 */
export const TaskConfigurationScopeTypeEnum = {
    Global: 'global',
    SourceLanguage: 'sourceLanguage',
    TargetLanguage: 'targetLanguage',
    LanguageDirection: 'languageDirection'
} as const;
export type TaskConfigurationScopeTypeEnum = typeof TaskConfigurationScopeTypeEnum[keyof typeof TaskConfigurationScopeTypeEnum];

/**
 * 
 * @export
 * @interface TaskConfigurationScopeRequest
 */
export interface TaskConfigurationScopeRequest {
    /**
     * The applicability impact of the workflow configuration:
     * - global: used for global tasks, that are not associated to a target language 
     * - sourceLanguage: changes affect only the task associated to the source language specified in `sourceLanguage` field. For using this type, must include the `sourceLanguage` field.
     * - targetLanguage: changes affect only the task associated to the target language specified in `targetLanguage` field. For using this type, must include the `targetLanguage` field.
     * - languageDirection: changes affect only the task associated to the language direction specified in `languageDirection` field. For using this type, must include the `languageDirection` field.
     * @type {string}
     * @memberof TaskConfigurationScopeRequest
     */
    type: TaskConfigurationScopeRequestTypeEnum;
    /**
     * 
     * @type {SourceLanguageRequest}
     * @memberof TaskConfigurationScopeRequest
     */
    sourceLanguage?: SourceLanguageRequest;
    /**
     * 
     * @type {TargetLanguageRequest}
     * @memberof TaskConfigurationScopeRequest
     */
    targetLanguage?: TargetLanguageRequest;
    /**
     * 
     * @type {LanguageDirectionItem}
     * @memberof TaskConfigurationScopeRequest
     */
    languageDirection?: LanguageDirectionItem;
}


/**
 * @export
 */
export const TaskConfigurationScopeRequestTypeEnum = {
    Global: 'global',
    SourceLanguage: 'sourceLanguage',
    TargetLanguage: 'targetLanguage',
    LanguageDirection: 'languageDirection'
} as const;
export type TaskConfigurationScopeRequestTypeEnum = typeof TaskConfigurationScopeRequestTypeEnum[keyof typeof TaskConfigurationScopeRequestTypeEnum];

/**
 * Task Error.
 * @export
 * @interface TaskError
 */
export interface TaskError {
    /**
     * The task error name.
     * @type {string}
     * @memberof TaskError
     */
    name?: string;
    /**
     * The task error code.
     * @type {string}
     * @memberof TaskError
     */
    code?: string;
    /**
     * The task error value.
     * @type {string}
     * @memberof TaskError
     */
    value?: string;
}
/**
 * Task input. Based on the "type", the following fields can be retrieved: "project", "sourceFile", "targetFile".
 * @export
 * @interface TaskInput
 */
export interface TaskInput {
    /**
     * The input type.
     * @type {string}
     * @memberof TaskInput
     */
    type: TaskInputTypeEnum;
    /**
     * 
     * @type {Project}
     * @memberof TaskInput
     */
    project?: Project;
    /**
     * 
     * @type {SourceFile}
     * @memberof TaskInput
     */
    sourceFile?: SourceFile;
    /**
     * 
     * @type {TargetFile}
     * @memberof TaskInput
     */
    targetFile?: TargetFile;
    /**
     * 
     * @type {LanguageDirection}
     * @memberof TaskInput
     */
    languageDirection?: LanguageDirection;
    /**
     * 
     * @type {VendorOrder}
     * @memberof TaskInput
     */
    vendorOrder?: VendorOrder;
}


/**
 * @export
 */
export const TaskInputTypeEnum = {
    Project: 'project',
    SourceFile: 'sourceFile',
    TargetFile: 'targetFile',
    LanguageDirection: 'languageDirection'
} as const;
export type TaskInputTypeEnum = typeof TaskInputTypeEnum[keyof typeof TaskInputTypeEnum];

/**
 * Task input file. Based on the "type", only the "sourceFile" or "targetFile" can be retrieved.
 * @export
 * @interface TaskInputFile
 */
export interface TaskInputFile {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof TaskInputFile
     */
    type?: TaskInputFileTypeEnum;
    /**
     * 
     * @type {SourceFile}
     * @memberof TaskInputFile
     */
    sourceFile?: SourceFile;
    /**
     * 
     * @type {TargetFile}
     * @memberof TaskInputFile
     */
    targetFile?: TargetFile;
}


/**
 * @export
 */
export const TaskInputFileTypeEnum = {
    SourceFile: 'sourceFile',
    TargetFile: 'targetFile'
} as const;
export type TaskInputFileTypeEnum = typeof TaskInputFileTypeEnum[keyof typeof TaskInputFileTypeEnum];

/**
 * Outcome a task can be completed with. List will be populated after the task is accepted.
 * @export
 * @interface TaskOutcome
 */
export interface TaskOutcome {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> Outcome to be used with complete endpoint.
     * @type {string}
     * @memberof TaskOutcome
     */
    name?: string;
    /**
     * A human-friendly form of the outcome.
     * @type {string}
     * @memberof TaskOutcome
     */
    description?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> Specifies if the outcome is the default one for the task.
     * @type {boolean}
     * @memberof TaskOutcome
     */
    _default?: boolean;
}
/**
 * Task type.
 * @export
 * @interface TaskType
 */
export interface TaskType {
    /**
     * 
     * @type {string}
     * @memberof TaskType
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Identifier key for the task.</div> 
     * @type {string}
     * @memberof TaskType
     */
    key?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof TaskType
     */
    name?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"> Unique identifier of custom task types. Null for default task types.
     * @type {string}
     * @memberof TaskType
     */
    apiInternalId?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskType
     */
    description?: string;
    /**
     * This indicates whether the task is automatic or human.
     * @type {boolean}
     * @memberof TaskType
     */
    automatic?: boolean;
    /**
     * The resource type scope for the task.
     * @type {string}
     * @memberof TaskType
     */
    scope?: TaskTypeScopeEnum;
    /**
     * 
     * @type {Array<TaskTypeOutcome>}
     * @memberof TaskType
     */
    outcomes?: Array<TaskTypeOutcome>;
    /**
     * 
     * @type {FolderV2}
     * @memberof TaskType
     */
    location?: FolderV2;
}


/**
 * @export
 */
export const TaskTypeScopeEnum = {
    File: 'file',
    TargetLanguage: 'targetLanguage',
    Batch: 'batch',
    VendorOrder: 'vendorOrder',
    Task: 'task'
} as const;
export type TaskTypeScopeEnum = typeof TaskTypeScopeEnum[keyof typeof TaskTypeScopeEnum];

/**
 * The task type outcome.
 * @export
 * @interface TaskTypeOutcome
 */
export interface TaskTypeOutcome {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof TaskTypeOutcome
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskTypeOutcome
     */
    description?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof TaskTypeOutcome
     */
    _default?: boolean;
}
/**
 * The termbase.
 * @export
 * @interface Termbase
 */
export interface Termbase {
    /**
     * The identifier of the termbase.
     * @type {string}
     * @memberof Termbase
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase.</div> 
     * @type {string}
     * @memberof Termbase
     */
    name?: string;
    /**
     * The description of the termbase.
     * @type {string}
     * @memberof Termbase
     */
    description?: string;
    /**
     * The copyright of the termbase.
     * @type {string}
     * @memberof Termbase
     */
    copyright?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof Termbase
     */
    location?: FolderV2;
    /**
     * 
     * @type {TermbaseStructure}
     * @memberof Termbase
     */
    termbaseStructure?: TermbaseStructure;
    /**
     * The number of entries included in the termbase. (Not available for List Termbases endpoint)
     * @type {number}
     * @memberof Termbase
     */
    numberOfEntries?: number;
    /**
     * The status of the termbase. (Not available for List Termbases endpoint)
     * @type {string}
     * @memberof Termbase
     */
    status?: TermbaseStatusEnum;
    /**
     * The date and time when the termbase was created. (Not available for List Termbases endpoint) <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof Termbase
     */
    createdAt?: Date;
    /**
     * The date and time when the termbase was last updated. (Not available for List Termbases endpoint) <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof Termbase
     */
    lastModifiedAt?: Date;
}


/**
 * @export
 */
export const TermbaseStatusEnum = {
    Ready: 'ready',
    ProcessingContent: 'processingContent',
    ExportingContent: 'exportingContent',
    DeletingContent: 'deletingContent'
} as const;
export type TermbaseStatusEnum = typeof TermbaseStatusEnum[keyof typeof TermbaseStatusEnum];

/**
 * Termbase create request.
 * @export
 * @interface TermbaseCreateRequest
 */
export interface TermbaseCreateRequest {
    /**
     * The name of the termbase.
     * @type {string}
     * @memberof TermbaseCreateRequest
     */
    name: string;
    /**
     * The description of the termbase.
     * @type {string}
     * @memberof TermbaseCreateRequest
     */
    description?: string;
    /**
     * The copyright of the termbase.
     * @type {string}
     * @memberof TermbaseCreateRequest
     */
    copyright?: string;
    /**
     * The folder identifier where the termbase should be created. If not specified, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error.
     * @type {string}
     * @memberof TermbaseCreateRequest
     */
    location?: string;
    /**
     * The termbase template identifier.
     * @type {string}
     * @memberof TermbaseCreateRequest
     */
    termbaseTemplateId?: string;
    /**
     * 
     * @type {TermbaseStructureCreateRequest}
     * @memberof TermbaseCreateRequest
     */
    termbaseStructure?: TermbaseStructureCreateRequest;
}
/**
 * The termbase entry.
 * @export
 * @interface TermbaseEntry
 */
export interface TermbaseEntry {
    /**
     * The termbase entry identifier.
     * @type {string}
     * @memberof TermbaseEntry
     */
    id: string;
    /**
     * An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system. The format of the generated value is not guaranteed.
     * @type {string}
     * @memberof TermbaseEntry
     */
    humanReadableId?: string;
    /**
     * The termbase entry languages.
     * @type {Array<TermbaseEntryLanguage>}
     * @memberof TermbaseEntry
     */
    languages: Array<TermbaseEntryLanguage>;
    /**
     * 
     * @type {Array<TermbaseFieldValue>}
     * @memberof TermbaseEntry
     */
    termbaseFieldValues?: Array<TermbaseFieldValue>;
    /**
     * The date and time when the termbase entry was created.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntry
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntry
     */
    createdBy?: User;
    /**
     * The date and time when the termbase entry was last modified. <br> UTC Timezone   <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntry
     */
    lastModifiedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntry
     */
    lastModifiedBy?: User;
}
/**
 * The termbase entry create request.
 * @export
 * @interface TermbaseEntryCreateRequest
 */
export interface TermbaseEntryCreateRequest {
    /**
     * An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system.
     * The format of the generated value is not guaranteed.
     * @type {string}
     * @memberof TermbaseEntryCreateRequest
     */
    humanReadableId?: string;
    /**
     * The termbase entry languages.
     * @type {Array<TermbaseEntryLanguageCreateRequest>}
     * @memberof TermbaseEntryCreateRequest
     */
    languages: Array<TermbaseEntryLanguageCreateRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldValueCreateRequest>}
     * @memberof TermbaseEntryCreateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueCreateRequest>;
}
/**
 * The termbase entry language.
 * @export
 * @interface TermbaseEntryLanguage
 */
export interface TermbaseEntryLanguage {
    /**
     * The termbase language identifier.
     * @type {string}
     * @memberof TermbaseEntryLanguage
     */
    id: string;
    /**
     * 
     * @type {Language}
     * @memberof TermbaseEntryLanguage
     */
    language: Language;
    /**
     * 
     * @type {Array<TermbaseEntryTerm>}
     * @memberof TermbaseEntryLanguage
     */
    terms?: Array<TermbaseEntryTerm>;
    /**
     * 
     * @type {Array<TermbaseFieldValue>}
     * @memberof TermbaseEntryLanguage
     */
    termbaseFieldValues?: Array<TermbaseFieldValue>;
    /**
     * The date and time when the language entry was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntryLanguage
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntryLanguage
     */
    createdBy?: User;
    /**
     * The date and time when the language entry was last modified. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntryLanguage
     */
    lastModifiedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntryLanguage
     */
    lastModifedBy?: User;
}
/**
 * The termbase entry language create request.
 * @export
 * @interface TermbaseEntryLanguageCreateRequest
 */
export interface TermbaseEntryLanguageCreateRequest {
    /**
     * 
     * @type {LanguageRequest}
     * @memberof TermbaseEntryLanguageCreateRequest
     */
    language: LanguageRequest;
    /**
     * 
     * @type {Array<TermbaseTermCreateRequest>}
     * @memberof TermbaseEntryLanguageCreateRequest
     */
    terms: Array<TermbaseTermCreateRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldValueCreateRequest>}
     * @memberof TermbaseEntryLanguageCreateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueCreateRequest>;
}
/**
 * The termbase entry language update request.
 * @export
 * @interface TermbaseEntryLanguageUpdateRequest
 */
export interface TermbaseEntryLanguageUpdateRequest {
    /**
     * The termbase language identifier.
     * @type {string}
     * @memberof TermbaseEntryLanguageUpdateRequest
     */
    id?: string;
    /**
     * 
     * @type {LanguageRequest}
     * @memberof TermbaseEntryLanguageUpdateRequest
     */
    language: LanguageRequest;
    /**
     * 
     * @type {Array<TermbaseEntryTermUpdateRequest>}
     * @memberof TermbaseEntryLanguageUpdateRequest
     */
    terms: Array<TermbaseEntryTermUpdateRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldValueUpdateRequest>}
     * @memberof TermbaseEntryLanguageUpdateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueUpdateRequest>;
}
/**
 * The termbase entry term.
 * @export
 * @interface TermbaseEntryTerm
 */
export interface TermbaseEntryTerm {
    /**
     * The term identifier.
     * @type {string}
     * @memberof TermbaseEntryTerm
     */
    id: string;
    /**
     * The term text.
     * @type {string}
     * @memberof TermbaseEntryTerm
     */
    text: string;
    /**
     * 
     * @type {Array<TermbaseFieldValue>}
     * @memberof TermbaseEntryTerm
     */
    termbaseFieldValues?: Array<TermbaseFieldValue>;
    /**
     * The date and time when the term entry was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntryTerm
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntryTerm
     */
    createdBy?: User;
    /**
     * The date and time when the term entry was last modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseEntryTerm
     */
    lastModifiedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseEntryTerm
     */
    lastModifiedBy?: User;
}
/**
 * The termbase entry term update request.
 * @export
 * @interface TermbaseEntryTermUpdateRequest
 */
export interface TermbaseEntryTermUpdateRequest {
    /**
     * The term identifier that will be updated. If not supplied, a new term will be created.
     * @type {string}
     * @memberof TermbaseEntryTermUpdateRequest
     */
    id?: string;
    /**
     * The term text.
     * @type {string}
     * @memberof TermbaseEntryTermUpdateRequest
     */
    text: string;
    /**
     * 
     * @type {Array<TermbaseFieldValueUpdateRequest>}
     * @memberof TermbaseEntryTermUpdateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueUpdateRequest>;
}
/**
 * The termbase entry update request.
 * @export
 * @interface TermbaseEntryUpdateRequest
 */
export interface TermbaseEntryUpdateRequest {
    /**
     * An identifier that can be provided externally, or generated automatically by Language Cloud, used for creating cross-references. You can use it to set its value to be correlated to your system. The format of the generated value is not guaranteed.
     * @type {string}
     * @memberof TermbaseEntryUpdateRequest
     */
    humanReadableId?: string;
    /**
     * The termbase entry languages.
     * @type {Array<TermbaseEntryLanguageUpdateRequest>}
     * @memberof TermbaseEntryUpdateRequest
     */
    languages: Array<TermbaseEntryLanguageUpdateRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldValueUpdateRequest>}
     * @memberof TermbaseEntryUpdateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueUpdateRequest>;
}
/**
 * 
 * @export
 * @interface TermbaseExportPropertiesRequest
 */
export interface TermbaseExportPropertiesRequest {
    /**
     * Download compressed ( zipped ).
     * @type {boolean}
     * @memberof TermbaseExportPropertiesRequest
     */
    downloadCompressed?: boolean;
}
/**
 * 
 * @export
 * @interface TermbaseExportResponse
 */
export interface TermbaseExportResponse {
    /**
     * The termbase export identifier.
     * @type {string}
     * @memberof TermbaseExportResponse
     */
    id: string;
    /**
     * The status of the export operation.<br>
     * `queued` - The export passed the structural validation and it's waiting to be processed.<br>
     * `processing` - The export is in progress.<br>
     * `done` - The export was successfully processed .<br>
     * `cancelled` - The export process was interrupted.<br>
     * `error` - The export was unsuccessful due to an internal error.
     * @type {string}
     * @memberof TermbaseExportResponse
     */
    status: TermbaseExportResponseStatusEnum;
    /**
     * When status is 'error', contains the error message explaining what went wrong.
     * @type {string}
     * @memberof TermbaseExportResponse
     */
    errorMessage?: string;
    /**
     * The url where the file can be downloaded.
     * @type {string}
     * @memberof TermbaseExportResponse
     */
    downloadUrl?: string;
}


/**
 * @export
 */
export const TermbaseExportResponseStatusEnum = {
    Queued: 'queued',
    Processing: 'processing',
    Done: 'done',
    Cancelled: 'cancelled',
    Error: 'error'
} as const;
export type TermbaseExportResponseStatusEnum = typeof TermbaseExportResponseStatusEnum[keyof typeof TermbaseExportResponseStatusEnum];

/**
 * The termbase field.
 * @export
 * @interface TermbaseField
 */
export interface TermbaseField {
    /**
     * The identifier of the termbase field.
     * @type {string}
     * @memberof TermbaseField
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase field.</div> 
     * @type {string}
     * @memberof TermbaseField
     */
    name?: string;
    /**
     * The description of the termbase field
     * @type {string}
     * @memberof TermbaseField
     */
    description?: string;
    /**
     * The type of the termbase field - system or userDefined.
     * @type {string}
     * @memberof TermbaseField
     */
    type: TermbaseFieldTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The level of which this field applies.</div> 
     * @type {string}
     * @memberof TermbaseField
     */
    level?: TermbaseFieldLevelEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The data type of the field.</div> 
     * @type {string}
     * @memberof TermbaseField
     */
    dataType?: TermbaseFieldDataTypeEnum;
    /**
     * The pick list options. Only if dataType is "picklist".
     * @type {Array<string>}
     * @memberof TermbaseField
     */
    pickListValues?: Array<string>;
    /**
     * Specifies if the field allows custom values.
     * @type {boolean}
     * @memberof TermbaseField
     */
    allowCustomValues?: boolean;
    /**
     * Specifies if the field can be used multiple times.
     * @type {boolean}
     * @memberof TermbaseField
     */
    allowMultiple?: boolean;
    /**
     * Specifies if the field is mandatory.
     * @type {boolean}
     * @memberof TermbaseField
     */
    isMandatory?: boolean;
}


/**
 * @export
 */
export const TermbaseFieldTypeEnum = {
    System: 'system',
    UserDefined: 'userDefined'
} as const;
export type TermbaseFieldTypeEnum = typeof TermbaseFieldTypeEnum[keyof typeof TermbaseFieldTypeEnum];

/**
 * @export
 */
export const TermbaseFieldLevelEnum = {
    Entry: 'entry',
    Language: 'language',
    Term: 'term'
} as const;
export type TermbaseFieldLevelEnum = typeof TermbaseFieldLevelEnum[keyof typeof TermbaseFieldLevelEnum];

/**
 * @export
 */
export const TermbaseFieldDataTypeEnum = {
    Text: 'text',
    Double: 'double',
    Date: 'date',
    Picklist: 'picklist',
    Boolean: 'boolean'
} as const;
export type TermbaseFieldDataTypeEnum = typeof TermbaseFieldDataTypeEnum[keyof typeof TermbaseFieldDataTypeEnum];

/**
 * The termbase field request.
 * 
 * If dataType is `picklist` and pickListValues array is empty `allowCustomValues` must be true.
 * @export
 * @interface TermbaseFieldCreateRequest
 */
export interface TermbaseFieldCreateRequest {
    /**
     * The name of the termbase field. Must be unique.
     * @type {string}
     * @memberof TermbaseFieldCreateRequest
     */
    name: string;
    /**
     * The description of the termbase field.
     * @type {string}
     * @memberof TermbaseFieldCreateRequest
     */
    description?: string;
    /**
     * The level of which this field applies.
     * @type {string}
     * @memberof TermbaseFieldCreateRequest
     */
    level: TermbaseFieldCreateRequestLevelEnum;
    /**
     * The data type of the field.
     * @type {string}
     * @memberof TermbaseFieldCreateRequest
     */
    dataType: TermbaseFieldCreateRequestDataTypeEnum;
    /**
     * The pick list values. Only if dataType is "picklist". Values must be unique.
     * @type {Set<string>}
     * @memberof TermbaseFieldCreateRequest
     */
    pickListValues?: Set<string>;
    /**
     * Specifies if the field allows custom values. Must be true if pickListValues is empty.
     * @type {boolean}
     * @memberof TermbaseFieldCreateRequest
     */
    allowCustomValues?: boolean;
    /**
     * Specifies if the field can be used multiple times.
     * @type {boolean}
     * @memberof TermbaseFieldCreateRequest
     */
    allowMultiple?: boolean;
    /**
     * Specifies if the field is mandatory.
     * @type {boolean}
     * @memberof TermbaseFieldCreateRequest
     */
    isMandatory?: boolean;
}


/**
 * @export
 */
export const TermbaseFieldCreateRequestLevelEnum = {
    Entry: 'entry',
    Language: 'language',
    Term: 'term'
} as const;
export type TermbaseFieldCreateRequestLevelEnum = typeof TermbaseFieldCreateRequestLevelEnum[keyof typeof TermbaseFieldCreateRequestLevelEnum];

/**
 * @export
 */
export const TermbaseFieldCreateRequestDataTypeEnum = {
    Text: 'text',
    Double: 'double',
    Date: 'date',
    Picklist: 'picklist',
    Boolean: 'boolean'
} as const;
export type TermbaseFieldCreateRequestDataTypeEnum = typeof TermbaseFieldCreateRequestDataTypeEnum[keyof typeof TermbaseFieldCreateRequestDataTypeEnum];

/**
 * The termbase field update request.
 * 
 * If dataType is `picklist` and pickListValues array is empty `allowCustomValues` must be true.
 * @export
 * @interface TermbaseFieldUpdateRequest
 */
export interface TermbaseFieldUpdateRequest {
    /**
     * The identifier of the termbase field to updated. If missing will add a new field.
     * @type {string}
     * @memberof TermbaseFieldUpdateRequest
     */
    id?: string;
    /**
     * The name of the termbase field. Must be unique.
     * @type {string}
     * @memberof TermbaseFieldUpdateRequest
     */
    name: string;
    /**
     * The description of the termbase field.
     * @type {string}
     * @memberof TermbaseFieldUpdateRequest
     */
    description?: string;
    /**
     * The level of which this field applies.
     * @type {string}
     * @memberof TermbaseFieldUpdateRequest
     */
    level: TermbaseFieldUpdateRequestLevelEnum;
    /**
     * The data type of the field.
     * @type {string}
     * @memberof TermbaseFieldUpdateRequest
     */
    dataType: TermbaseFieldUpdateRequestDataTypeEnum;
    /**
     * The pick list options. Only if dataType is "picklist".
     * @type {Set<string>}
     * @memberof TermbaseFieldUpdateRequest
     */
    pickListValues?: Set<string>;
    /**
     * Specifies if the field allows custom values. Must be true if pickListValues is empty.
     * @type {boolean}
     * @memberof TermbaseFieldUpdateRequest
     */
    allowCustomValues?: boolean;
    /**
     * Specifies if the field can be used multiple times.
     * @type {boolean}
     * @memberof TermbaseFieldUpdateRequest
     */
    allowMultiple?: boolean;
    /**
     * Specifies if the field is mandatory.
     * @type {boolean}
     * @memberof TermbaseFieldUpdateRequest
     */
    isMandatory?: boolean;
}


/**
 * @export
 */
export const TermbaseFieldUpdateRequestLevelEnum = {
    Entry: 'entry',
    Language: 'language',
    Term: 'term'
} as const;
export type TermbaseFieldUpdateRequestLevelEnum = typeof TermbaseFieldUpdateRequestLevelEnum[keyof typeof TermbaseFieldUpdateRequestLevelEnum];

/**
 * @export
 */
export const TermbaseFieldUpdateRequestDataTypeEnum = {
    Text: 'text',
    Double: 'double',
    Date: 'date',
    Picklist: 'picklist',
    Boolean: 'boolean'
} as const;
export type TermbaseFieldUpdateRequestDataTypeEnum = typeof TermbaseFieldUpdateRequestDataTypeEnum[keyof typeof TermbaseFieldUpdateRequestDataTypeEnum];

/**
 * The termbase field value.
 * @export
 * @interface TermbaseFieldValue
 */
export interface TermbaseFieldValue {
    /**
     * The field value identifier.
     * @type {string}
     * @memberof TermbaseFieldValue
     */
    id: string;
    /**
     * The field value name.
     * @type {string}
     * @memberof TermbaseFieldValue
     */
    name: string;
    /**
     * The termbase field identifier.
     * @type {string}
     * @memberof TermbaseFieldValue
     */
    termbaseFieldId: string;
    /**
     * The value of the field.
     * @type {string}
     * @memberof TermbaseFieldValue
     */
    value: string;
    /**
     * 
     * @type {Array<TermbaseFieldValueLink>}
     * @memberof TermbaseFieldValue
     */
    fieldValueLinks?: Array<TermbaseFieldValueLink>;
    /**
     * The date and time when the termbase field value was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseFieldValue
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseFieldValue
     */
    createdBy?: User;
    /**
     * The date and time when the termbase field value was last modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseFieldValue
     */
    lastModifiedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TermbaseFieldValue
     */
    lastModifiedBy?: User;
}
/**
 * The termbase field value create request.
 * @export
 * @interface TermbaseFieldValueCreateRequest
 */
export interface TermbaseFieldValueCreateRequest {
    /**
     * The termbase field identifier. It must match the `fieldId` from the termbase.
     * @type {string}
     * @memberof TermbaseFieldValueCreateRequest
     */
    termbaseFieldId: string;
    /**
     * The value of the field.
     * @type {string}
     * @memberof TermbaseFieldValueCreateRequest
     */
    value: string;
    /**
     * 
     * @type {Array<TermbaseFieldValueLinkCreateRequest>}
     * @memberof TermbaseFieldValueCreateRequest
     */
    fieldValueLinks?: Array<TermbaseFieldValueLinkCreateRequest>;
}
/**
 * The field value link.
 * @export
 * @interface TermbaseFieldValueLink
 */
export interface TermbaseFieldValueLink {
    /**
     * The type of the link.
     * @type {string}
     * @memberof TermbaseFieldValueLink
     */
    type: TermbaseFieldValueLinkTypeEnum;
    /**
     * The value of the link.
     * @type {string}
     * @memberof TermbaseFieldValueLink
     */
    value: string;
}


/**
 * @export
 */
export const TermbaseFieldValueLinkTypeEnum = {
    Term: 'term',
    Entry: 'entry',
    External: 'external'
} as const;
export type TermbaseFieldValueLinkTypeEnum = typeof TermbaseFieldValueLinkTypeEnum[keyof typeof TermbaseFieldValueLinkTypeEnum];

/**
 * The field value link create request.
 * @export
 * @interface TermbaseFieldValueLinkCreateRequest
 */
export interface TermbaseFieldValueLinkCreateRequest {
    /**
     * The type of link.
     * @type {string}
     * @memberof TermbaseFieldValueLinkCreateRequest
     */
    type: TermbaseFieldValueLinkCreateRequestTypeEnum;
    /**
     * The value of the link.
     * @type {string}
     * @memberof TermbaseFieldValueLinkCreateRequest
     */
    value: string;
}


/**
 * @export
 */
export const TermbaseFieldValueLinkCreateRequestTypeEnum = {
    Term: 'term',
    Entry: 'entry',
    External: 'external'
} as const;
export type TermbaseFieldValueLinkCreateRequestTypeEnum = typeof TermbaseFieldValueLinkCreateRequestTypeEnum[keyof typeof TermbaseFieldValueLinkCreateRequestTypeEnum];

/**
 * The field value link update request.
 * @export
 * @interface TermbaseFieldValueLinkUpdateRequest
 */
export interface TermbaseFieldValueLinkUpdateRequest {
    /**
     * The type of the link.
     * @type {string}
     * @memberof TermbaseFieldValueLinkUpdateRequest
     */
    type?: TermbaseFieldValueLinkUpdateRequestTypeEnum;
    /**
     * The value of the link.
     * @type {string}
     * @memberof TermbaseFieldValueLinkUpdateRequest
     */
    value?: string;
}


/**
 * @export
 */
export const TermbaseFieldValueLinkUpdateRequestTypeEnum = {
    Term: 'term',
    Entry: 'entry',
    External: 'external'
} as const;
export type TermbaseFieldValueLinkUpdateRequestTypeEnum = typeof TermbaseFieldValueLinkUpdateRequestTypeEnum[keyof typeof TermbaseFieldValueLinkUpdateRequestTypeEnum];

/**
 * The termbase field value update request.
 * @export
 * @interface TermbaseFieldValueUpdateRequest
 */
export interface TermbaseFieldValueUpdateRequest {
    /**
     * The field value identifier. Either the `id` or the `name` is mandatory to be provided.
     * @type {string}
     * @memberof TermbaseFieldValueUpdateRequest
     */
    id?: string;
    /**
     * The field value name. Either the `id` or the `name` is mandatory to be provided.
     * @type {string}
     * @memberof TermbaseFieldValueUpdateRequest
     */
    name?: string;
    /**
     * The termbase field value identifier. Must match with the fieldId from the termbase.
     * @type {string}
     * @memberof TermbaseFieldValueUpdateRequest
     */
    termbaseFieldId: string;
    /**
     * The value of the field.
     * @type {string}
     * @memberof TermbaseFieldValueUpdateRequest
     */
    value: string;
    /**
     * 
     * @type {Array<TermbaseFieldValueLinkUpdateRequest>}
     * @memberof TermbaseFieldValueUpdateRequest
     */
    fieldValueLinks?: Array<TermbaseFieldValueLinkUpdateRequest>;
}
/**
 * 
 * @export
 * @interface TermbaseImportHistoryResponse
 */
export interface TermbaseImportHistoryResponse {
    /**
     * The termbase import identifier.
     * @type {string}
     * @memberof TermbaseImportHistoryResponse
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The file name of the imported file.</div> 
     * @type {string}
     * @memberof TermbaseImportHistoryResponse
     */
    fileName?: string;
    /**
     * The file size of the imported file.
     * @type {number}
     * @memberof TermbaseImportHistoryResponse
     */
    fileSize?: number;
    /**
     * The status of the import operation.<br>
     * `pending` - The import was just created and it's waiting for user input.<br>
     * `queued` - The import passed the structural validation and it's waiting to be processed.<br>
     * `processing` - The import is in progress.<br>
     * `done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
     * `cancelled` - The import process was interrupted.<br>
     * `failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
     * `error` - The import was unsuccessful due to an internal error.
     * @type {string}
     * @memberof TermbaseImportHistoryResponse
     */
    status: TermbaseImportHistoryResponseStatusEnum;
    /**
     * UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sssZ"
     * @type {Date}
     * @memberof TermbaseImportHistoryResponse
     */
    createdAt?: Date;
    /**
     * The last modified date of the import.
     * @type {number}
     * @memberof TermbaseImportHistoryResponse
     */
    elapsedTime?: number;
}


/**
 * @export
 */
export const TermbaseImportHistoryResponseStatusEnum = {
    Pending: 'pending',
    Queued: 'queued',
    Processing: 'processing',
    Done: 'done',
    Cancelled: 'cancelled',
    Failed: 'failed',
    Error: 'error'
} as const;
export type TermbaseImportHistoryResponseStatusEnum = typeof TermbaseImportHistoryResponseStatusEnum[keyof typeof TermbaseImportHistoryResponseStatusEnum];

/**
 * 
 * @export
 * @interface TermbaseImportResponse
 */
export interface TermbaseImportResponse {
    /**
     * The unique identifier of the import operation.
     * @type {string}
     * @memberof TermbaseImportResponse
     */
    id: string;
    /**
     * The status of the import operation.<br>
     * `queued` - The import passed the structural validation and it's waiting to be processed.<br>
     * `processing` - The import is in progress.<br>
     * `done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
     * `cancelled` - The import process was interrupted.<br>
     * `failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
     * `error` - The import was unsuccessful due to an internal error.
     * @type {string}
     * @memberof TermbaseImportResponse
     */
    status: TermbaseImportResponseStatusEnum;
}


/**
 * @export
 */
export const TermbaseImportResponseStatusEnum = {
    Queued: 'queued',
    Processing: 'processing',
    Done: 'done',
    Cancelled: 'cancelled',
    Failed: 'failed',
    Error: 'error'
} as const;
export type TermbaseImportResponseStatusEnum = typeof TermbaseImportResponseStatusEnum[keyof typeof TermbaseImportResponseStatusEnum];

/**
 * The termbase poll import response.<br>
 * The import was successfully processed when the status is `done`.
 * @export
 * @interface TermbasePollImportResponse
 */
export interface TermbasePollImportResponse {
    /**
     * The unique identifier of the import operation.
     * @type {string}
     * @memberof TermbasePollImportResponse
     */
    id: string;
    /**
     * The status of the import operation.<br>
     * `queued` - The import passed the structural validation and it's waiting to be processed.<br>
     * `processing` - The import is in progress.<br>
     * `done` - The import was successfully processed and at least an entry changed its structure ( either inserted or modified )<br>
     * `cancelled` - The import process was interrupted.<br>
     * `failed` - The import was unsuccessful. Either one of the import files is not compliant with the TBX structure or no entry changed during the import process.<br>
     * `error` - The import was unsuccessful due to an internal error.
     * @type {string}
     * @memberof TermbasePollImportResponse
     */
    status: TermbasePollImportResponseStatusEnum;
}


/**
 * @export
 */
export const TermbasePollImportResponseStatusEnum = {
    Queued: 'queued',
    Processing: 'processing',
    Done: 'done',
    Cancelled: 'cancelled',
    Failed: 'failed',
    Error: 'error'
} as const;
export type TermbasePollImportResponseStatusEnum = typeof TermbasePollImportResponseStatusEnum[keyof typeof TermbasePollImportResponseStatusEnum];

/**
 * The termbase structure.
 * @export
 * @interface TermbaseStructure
 */
export interface TermbaseStructure {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The languages of the termbase.</div> 
     * @type {Array<Language>}
     * @memberof TermbaseStructure
     */
    languages?: Array<Language>;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The termbase fields.  (Not available for List Termbases endpoint).</div> 
     * @type {Array<TermbaseField>}
     * @memberof TermbaseStructure
     */
    fields?: Array<TermbaseField>;
}
/**
 * The termbase structure create request.
 * @export
 * @interface TermbaseStructureCreateRequest
 */
export interface TermbaseStructureCreateRequest {
    /**
     * The languages of the termbase. If not supplied, the termbase will be created using the languages from the specified template. Otherwise it will override the  languages from the template.
     * @type {Array<LanguageRequest>}
     * @memberof TermbaseStructureCreateRequest
     */
    languages?: Array<LanguageRequest>;
    /**
     * Describes the field structure. If not supplied, the termbase will be created using the fields from the specified template. Otherwise it will override the fields from the template.
     * @type {Array<TermbaseFieldCreateRequest>}
     * @memberof TermbaseStructureCreateRequest
     */
    fields?: Array<TermbaseFieldCreateRequest>;
}
/**
 * The termbase structure update request.
 * @export
 * @interface TermbaseStructureUpdateRequest
 */
export interface TermbaseStructureUpdateRequest {
    /**
     * The languages of the termbase. If not supplied, the termbase will be updated using the languages from the specified template. Otherwise it will override the  languages from the template.
     * @type {Array<LanguageRequest>}
     * @memberof TermbaseStructureUpdateRequest
     */
    languages?: Array<LanguageRequest>;
    /**
     * Describes the field structure. If not supplied, the termbase will be updated using the fields from the specified template. Otherwise it will override the fields from the template.
     * @type {Array<TermbaseFieldUpdateRequest>}
     * @memberof TermbaseStructureUpdateRequest
     */
    fields?: Array<TermbaseFieldUpdateRequest>;
}
/**
 * The termbase template.
 * @export
 * @interface TermbaseTemplate
 */
export interface TermbaseTemplate {
    /**
     * The identifier of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplate
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the termbase template.</div> 
     * @type {string}
     * @memberof TermbaseTemplate
     */
    name?: string;
    /**
     * The description of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplate
     */
    description?: string;
    /**
     * The copyright of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplate
     */
    copyright?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof TermbaseTemplate
     */
    location?: FolderV2;
    /**
     * The date and time when the termbase template was created. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseTemplate
     */
    createdAt?: Date;
    /**
     * The date and time when the termbase template was modified. <br> UTC Timezone <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TermbaseTemplate
     */
    lastModifiedAt?: Date;
    /**
     * The type of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplate
     */
    type: TermbaseTemplateTypeEnum;
    /**
     * The languages of the termbase template.
     * @type {Array<Language>}
     * @memberof TermbaseTemplate
     */
    languages?: Array<Language>;
    /**
     * 
     * @type {Array<TermbaseField>}
     * @memberof TermbaseTemplate
     */
    fields?: Array<TermbaseField>;
}


/**
 * @export
 */
export const TermbaseTemplateTypeEnum = {
    System: 'system',
    UserDefined: 'userDefined'
} as const;
export type TermbaseTemplateTypeEnum = typeof TermbaseTemplateTypeEnum[keyof typeof TermbaseTemplateTypeEnum];

/**
 * The termbase template create request.
 * @export
 * @interface TermbaseTemplateCreateRequest
 */
export interface TermbaseTemplateCreateRequest {
    /**
     * The name of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplateCreateRequest
     */
    name: string;
    /**
     * The description of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplateCreateRequest
     */
    description?: string;
    /**
     * The copyright of the termbase template.
     * @type {string}
     * @memberof TermbaseTemplateCreateRequest
     */
    copyright?: string;
    /**
     * The folder identifier where the termbase template should be created. If not mentioned, it will be created in the Root folder. If the user does not have access in Root, the request will fail with forbidden error.
     * @type {string}
     * @memberof TermbaseTemplateCreateRequest
     */
    location?: string;
    /**
     * The languages of the termbase template.
     * @type {Array<LanguageRequest>}
     * @memberof TermbaseTemplateCreateRequest
     */
    languages?: Array<LanguageRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldCreateRequest>}
     * @memberof TermbaseTemplateCreateRequest
     */
    fields?: Array<TermbaseFieldCreateRequest>;
}
/**
 * The termbase template update request.
 * @export
 * @interface TermbaseTemplateUpdateRequest
 */
export interface TermbaseTemplateUpdateRequest {
    /**
     * The name of the Termbase template.
     * @type {string}
     * @memberof TermbaseTemplateUpdateRequest
     */
    name?: string;
    /**
     * The description of the Termbase template.
     * @type {string}
     * @memberof TermbaseTemplateUpdateRequest
     */
    description?: string;
    /**
     * The copyright of the Termbase template.
     * @type {string}
     * @memberof TermbaseTemplateUpdateRequest
     */
    copyright?: string;
    /**
     * The languages of the termbase template.
     * @type {Array<LanguageRequest>}
     * @memberof TermbaseTemplateUpdateRequest
     */
    languages?: Array<LanguageRequest>;
    /**
     * 
     * @type {Array<TermbaseFieldUpdateRequest>}
     * @memberof TermbaseTemplateUpdateRequest
     */
    fields?: Array<TermbaseFieldUpdateRequest>;
}
/**
 * The termbase term.
 * @export
 * @interface TermbaseTerm
 */
export interface TermbaseTerm {
    /**
     * The term identifier.
     * @type {string}
     * @memberof TermbaseTerm
     */
    id: string;
    /**
     * The entry identifier.
     * @type {string}
     * @memberof TermbaseTerm
     */
    entryId: string;
    /**
     * The term text.
     * @type {string}
     * @memberof TermbaseTerm
     */
    text: string;
}
/**
 * The termbase entry term request.
 * @export
 * @interface TermbaseTermCreateRequest
 */
export interface TermbaseTermCreateRequest {
    /**
     * The term text.
     * @type {string}
     * @memberof TermbaseTermCreateRequest
     */
    text: string;
    /**
     * 
     * @type {Array<TermbaseFieldValueCreateRequest>}
     * @memberof TermbaseTermCreateRequest
     */
    termbaseFieldValues?: Array<TermbaseFieldValueCreateRequest>;
}
/**
 * Termbase update request.
 * @export
 * @interface TermbaseUpdateRequest
 */
export interface TermbaseUpdateRequest {
    /**
     * The name of the termbase.
     * @type {string}
     * @memberof TermbaseUpdateRequest
     */
    name?: string;
    /**
     * The description of the termbase.
     * @type {string}
     * @memberof TermbaseUpdateRequest
     */
    description?: string;
    /**
     * The copyright of the termbase.
     * @type {string}
     * @memberof TermbaseUpdateRequest
     */
    copyright?: string;
    /**
     * The termbase template identifier.
     * @type {string}
     * @memberof TermbaseUpdateRequest
     */
    termbaseTemplateId?: string;
    /**
     * 
     * @type {TermbaseStructureUpdateRequest}
     * @memberof TermbaseUpdateRequest
     */
    termbaseStructure?: TermbaseStructureUpdateRequest;
}
/**
 * As a project manager, you choose a TQA configuration and use it to automatically assess the quality of a translation document.
 * 
 * The TQA configuration specifies:
 *  - Categories and subcategories that reviewers will use to classify the translation issues in a document.
 *  - Severities to define custom metrics you want to use to assess translation quality.
 *  - Score to measure the importance of each category or subcategory of an issue.
 *  - Pass/Fail Threshold to define the maximum number of penalty points admitted before failing the translation document.
 * @export
 * @interface TqaProfile
 */
export interface TqaProfile {
    /**
     * The identifier of the TQA profile.
     * @type {string}
     * @memberof TqaProfile
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the TQA Profile.</div> 
     * @type {string}
     * @memberof TqaProfile
     */
    name?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The TQA Profile description.</div> 
     * @type {string}
     * @memberof TqaProfile
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof TqaProfile
     */
    location?: FolderV2;
    /**
     * 
     * @type {TqaProfilePassFailThreshold}
     * @memberof TqaProfile
     */
    passFailThreshold?: TqaProfilePassFailThreshold;
    /**
     * Categories and subcategories are assessment options that reviewers can use to classify any translation-related issue that they find in a file.
     * @type {Array<TqaProfileCategory>}
     * @memberof TqaProfile
     */
    categories?: Array<TqaProfileCategory>;
    /**
     * Severities are custom metrics that reviewers can use to measure the importance of any translation-related issues that they find in a file.
     * @type {Array<TqaProfileSeverity>}
     * @memberof TqaProfile
     */
    severities?: Array<TqaProfileSeverity>;
    /**
     * The TQA scoring indicates whether translations pass or fail the acceptance threshold.
     * @type {Array<TqaProfileScore>}
     * @memberof TqaProfile
     */
    scores?: Array<TqaProfileScore>;
    /**
     * 
     * @type {Array<Folder>}
     * @memberof TqaProfile
     * @deprecated
     */
    path?: Array<Folder>;
}
/**
 * 
 * @export
 * @interface TqaProfileCategory
 */
export interface TqaProfileCategory {
    /**
     * The category identifier.
     * @type {string}
     * @memberof TqaProfileCategory
     */
    id?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The category name.</div> 
     * @type {string}
     * @memberof TqaProfileCategory
     */
    name?: string;
    /**
     * The category description.
     * @type {string}
     * @memberof TqaProfileCategory
     */
    description?: string;
    /**
     * The category abbreviation.
     * @type {string}
     * @memberof TqaProfileCategory
     */
    abbreviation?: string;
}
/**
 * Pass/Fail Threshold is used to define the maximum number of penalty points admitted before failing the translation document.
 * @export
 * @interface TqaProfilePassFailThreshold
 */
export interface TqaProfilePassFailThreshold {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The penalty points.</div> 
     * @type {number}
     * @memberof TqaProfilePassFailThreshold
     */
    points?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The quantity against which the points are measured.</div> 
     * @type {number}
     * @memberof TqaProfilePassFailThreshold
     */
    quantity?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Words or characters.</div> 
     * @type {string}
     * @memberof TqaProfilePassFailThreshold
     */
    scope?: string;
}
/**
 * The TQA scoring indicates whether translations pass or fail the acceptance threshold.
 * @export
 * @interface TqaProfileScore
 */
export interface TqaProfileScore {
    /**
     * 
     * @type {TqaProfileCategory}
     * @memberof TqaProfileScore
     */
    category?: TqaProfileCategory;
    /**
     * 
     * @type {TqaProfileSeverity}
     * @memberof TqaProfileScore
     */
    severity?: TqaProfileSeverity;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The associated penalty for this score's category and severity.</div> 
     * @type {number}
     * @memberof TqaProfileScore
     */
    penalty?: number;
}
/**
 * Severities are custom metrics that reviewers can use to measure the importance of any translation-related issues that they find in a file.
 * @export
 * @interface TqaProfileSeverity
 */
export interface TqaProfileSeverity {
    /**
     * The severity identifier.
     * @type {string}
     * @memberof TqaProfileSeverity
     */
    id?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The severity name.</div> 
     * @type {string}
     * @memberof TqaProfileSeverity
     */
    name?: string;
    /**
     * The severity type.
     * @type {string}
     * @memberof TqaProfileSeverity
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface TranslationCostFuzzyItem
 */
export interface TranslationCostFuzzyItem {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total number of units.</div> 
     * @type {number}
     * @memberof TranslationCostFuzzyItem
     */
    count?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The cost of a unit.</div> 
     * @type {number}
     * @memberof TranslationCostFuzzyItem
     */
    rate?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total cost for the current item.</div> 
     * @type {number}
     * @memberof TranslationCostFuzzyItem
     */
    total?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The sum of all the previously computed costs.</div> 
     * @type {number}
     * @memberof TranslationCostFuzzyItem
     */
    runningTotal?: number;
    /**
     * 
     * @type {FuzzyCategory}
     * @memberof TranslationCostFuzzyItem
     */
    fuzzyCategory?: FuzzyCategory;
}
/**
 * 
 * @export
 * @interface TranslationCostItem
 */
export interface TranslationCostItem {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total number of units.</div> 
     * @type {number}
     * @memberof TranslationCostItem
     */
    count?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The cost of a unit.</div> 
     * @type {number}
     * @memberof TranslationCostItem
     */
    rate?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The total cost for the current item.</div> 
     * @type {number}
     * @memberof TranslationCostItem
     */
    total?: number;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The sum of all the previously computed costs.</div> 
     * @type {number}
     * @memberof TranslationCostItem
     */
    runningTotal?: number;
}
/**
 * Translation Engine resource. (Not available for List Projects endpoint)
 * @export
 * @interface TranslationEngine
 */
export interface TranslationEngine {
    /**
     * The translation engine identifier.
     * @type {string}
     * @memberof TranslationEngine
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The translation engine name.</div> 
     * @type {string}
     * @memberof TranslationEngine
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationEngine
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof TranslationEngine
     */
    location?: FolderV2;
    /**
     * 
     * @type {TranslationEngineDefinition}
     * @memberof TranslationEngine
     */
    definition?: TranslationEngineDefinition;
}
/**
 * The definition of a translation engine.
 * @export
 * @interface TranslationEngineDefinition
 */
export interface TranslationEngineDefinition {
    /**
     * 
     * @type {string}
     * @memberof TranslationEngineDefinition
     */
    languageProcessingRuleId?: string;
    /**
     * 
     * @type {Array<TranslationEngineDefinitionLanguagePair>}
     * @memberof TranslationEngineDefinition
     */
    languagePairDefinitions?: Array<TranslationEngineDefinitionLanguagePair>;
}
/**
 * 
 * @export
 * @interface TranslationEngineDefinitionLanguagePair
 */
export interface TranslationEngineDefinitionLanguagePair {
    /**
     * 
     * @type {LanguagePair}
     * @memberof TranslationEngineDefinitionLanguagePair
     */
    languagePair: LanguagePair;
    /**
     * 
     * @type {Array<LanguagePairResource>}
     * @memberof TranslationEngineDefinitionLanguagePair
     */
    resources: Array<LanguagePairResource>;
}
/**
 * Translation Engine resource update request
 * @export
 * @interface TranslationEngineUpdateRequest
 */
export interface TranslationEngineUpdateRequest {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The translation engine name.</div> 
     * @type {string}
     * @memberof TranslationEngineUpdateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationEngineUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {TranslationEngineDefinition}
     * @memberof TranslationEngineUpdateRequest
     */
    definition?: TranslationEngineDefinition;
}
/**
 * 
 * @export
 * @interface TranslationMemory
 */
export interface TranslationMemory {
    /**
     * Unique identifier of the translation memory.
     * @type {string}
     * @memberof TranslationMemory
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The translation memory name.</div> 
     * @type {string}
     * @memberof TranslationMemory
     */
    name?: string;
    /**
     * The translation memory description.
     * @type {string}
     * @memberof TranslationMemory
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationMemory
     */
    copyright?: string;
    /**
     * 
     * @type {Folder}
     * @memberof TranslationMemory
     */
    location?: Folder;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">A collection of language directions</div> 
     * @type {Array<TranslationMemoryLanguageDirection>}
     * @memberof TranslationMemory
     */
    languageDirections?: Array<TranslationMemoryLanguageDirection>;
    /**
     * 
     * @type {LanguageProcessingRule}
     * @memberof TranslationMemory
     */
    languageProcessingRule?: LanguageProcessingRule;
    /**
     * 
     * @type {TranslationMemoryFieldTemplate}
     * @memberof TranslationMemory
     */
    fieldTemplate?: TranslationMemoryFieldTemplate;
    /**
     * The `DateTime` when the translation memory was created. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TranslationMemory
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof TranslationMemory
     */
    createdBy?: User;
    /**
     * The `DateTime` when the translation memory statistics were last updated.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TranslationMemory
     */
    lastRecomputedAt?: Date;
    /**
     * The `DateTime` when the translation memory reindexing was performed.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TranslationMemory
     */
    lastReIndexedAt?: Date;
}
/**
 * 
 * @export
 * @interface TranslationMemoryBase
 */
export interface TranslationMemoryBase {
    /**
     * The unique translation memory identifier.
     * @type {string}
     * @memberof TranslationMemoryBase
     */
    id: string;
    /**
     * The translation memory name.
     * @type {string}
     * @memberof TranslationMemoryBase
     */
    name?: string;
    /**
     * The translation memory description
     * @type {string}
     * @memberof TranslationMemoryBase
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationMemoryBase
     */
    copyright?: string;
    /**
     * 
     * @type {Folder}
     * @memberof TranslationMemoryBase
     */
    location?: Folder;
    /**
     * 
     * @type {Array<TranslationMemoryLanguageDirection>}
     * @memberof TranslationMemoryBase
     */
    languageDirections?: Array<TranslationMemoryLanguageDirection>;
    /**
     * 
     * @type {LanguageProcessingRule}
     * @memberof TranslationMemoryBase
     */
    languageProcessingRule?: LanguageProcessingRule;
    /**
     * 
     * @type {TranslationMemoryFieldTemplate}
     * @memberof TranslationMemoryBase
     */
    fieldTemplate?: TranslationMemoryFieldTemplate;
    /**
     * The `DateTime` when the translation memory was created.
     * @type {Date}
     * @memberof TranslationMemoryBase
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {User}
     * @memberof TranslationMemoryBase
     */
    createdBy?: User;
}
/**
 * The model to use when creating a new Translation Memory.
 * @export
 * @interface TranslationMemoryCreateRequest
 */
export interface TranslationMemoryCreateRequest {
    /**
     * The Translation Memory name.
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    name: string;
    /**
     * The Translation Memory description.
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    copyright?: string;
    /**
     * The folder identifier where the translation memory should be created.
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    location?: string;
    /**
     * 
     * @type {Array<LanguageDirectionRequest>}
     * @memberof TranslationMemoryCreateRequest
     */
    languageDirections: Array<LanguageDirectionRequest>;
    /**
     * The Language Processing Rule to be associated with the Translation Memory.
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    languageProcessingRuleId: string;
    /**
     * A Field Template to be associated with the Translation Memory.
     * @type {string}
     * @memberof TranslationMemoryCreateRequest
     */
    fieldTemplateId: string;
}
/**
 * 
 * @export
 * @interface TranslationMemoryExportLanguageDirection
 */
export interface TranslationMemoryExportLanguageDirection {
    /**
     * 
     * @type {SourceLanguageRequest}
     * @memberof TranslationMemoryExportLanguageDirection
     */
    sourceLanguage: SourceLanguageRequest;
    /**
     * 
     * @type {TargetLanguageRequest}
     * @memberof TranslationMemoryExportLanguageDirection
     */
    targetLanguage: TargetLanguageRequest;
}
/**
 * 
 * @export
 * @interface TranslationMemoryExportRequest
 */
export interface TranslationMemoryExportRequest {
    /**
     * 
     * @type {TranslationMemoryExportLanguageDirection}
     * @memberof TranslationMemoryExportRequest
     */
    languageDirection: TranslationMemoryExportLanguageDirection;
}
/**
 * 
 * @export
 * @interface TranslationMemoryExportResponse
 */
export interface TranslationMemoryExportResponse {
    /**
     * The translation memory export identifier.
     * @type {string}
     * @memberof TranslationMemoryExportResponse
     */
    id: string;
    /**
     * The translation memory export status.
     * * `queued` - the export has been queued to be processed
     * * `inProgress` - the export is being processed
     * * `failed` - the export has failed due to internal errors
     * * `done` - the export has finished successfully
     * * `cancelled` - the export has been interrupted
     * @type {string}
     * @memberof TranslationMemoryExportResponse
     */
    status: TranslationMemoryExportResponseStatusEnum;
}


/**
 * @export
 */
export const TranslationMemoryExportResponseStatusEnum = {
    Queued: 'queued',
    InProgress: 'inProgress',
    Failed: 'failed',
    Done: 'done',
    Cancelled: 'cancelled'
} as const;
export type TranslationMemoryExportResponseStatusEnum = typeof TranslationMemoryExportResponseStatusEnum[keyof typeof TranslationMemoryExportResponseStatusEnum];

/**
 * The unique identifier of the field.
 * @export
 * @interface TranslationMemoryField
 */
export interface TranslationMemoryField {
    /**
     * The unique identifier of the field.
     * @type {string}
     * @memberof TranslationMemoryField
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the field.</div> 
     * @type {string}
     * @memberof TranslationMemoryField
     */
    name?: string;
    /**
     * The data type of the field.
     * @type {string}
     * @memberof TranslationMemoryField
     */
    type?: TranslationMemoryFieldTypeEnum;
    /**
     * A collection of values for this field.
     * @type {Array<TranslationMemoryFieldValue>}
     * @memberof TranslationMemoryField
     */
    values?: Array<TranslationMemoryFieldValue>;
}


/**
 * @export
 */
export const TranslationMemoryFieldTypeEnum = {
    Unknown: 'unknown',
    SingleString: 'singleString',
    MultipleString: 'multipleString',
    DateTime: 'dateTime',
    SinglePicklist: 'singlePicklist',
    MultiplePicklist: 'multiplePicklist',
    Integer: 'integer'
} as const;
export type TranslationMemoryFieldTypeEnum = typeof TranslationMemoryFieldTypeEnum[keyof typeof TranslationMemoryFieldTypeEnum];

/**
 * 
 * @export
 * @interface TranslationMemoryFieldTemplate
 */
export interface TranslationMemoryFieldTemplate {
    /**
     * The unique identifier of the translation memory field template.
     * @type {string}
     * @memberof TranslationMemoryFieldTemplate
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The name of the field template.</div> 
     * @type {string}
     * @memberof TranslationMemoryFieldTemplate
     */
    name?: string;
    /**
     * The field template description.
     * @type {string}
     * @memberof TranslationMemoryFieldTemplate
     */
    description?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof TranslationMemoryFieldTemplate
     */
    location?: FolderV2;
    /**
     * A collection of translation memory fields.
     * @type {Array<TranslationMemoryField>}
     * @memberof TranslationMemoryFieldTemplate
     */
    fieldDefinitions?: Array<TranslationMemoryField>;
}

/**
 * The data type of the value.
 * @export
 */
export const TranslationMemoryFieldUpdateType = {
    DateTime: 'dateTime',
    SinglePicklist: 'singlePicklist',
    MultiplePicklist: 'multiplePicklist',
    Integer: 'integer',
    SingleString: 'singleString',
    MultipleString: 'multipleString'
} as const;
export type TranslationMemoryFieldUpdateType = typeof TranslationMemoryFieldUpdateType[keyof typeof TranslationMemoryFieldUpdateType];

/**
 * 
 * @export
 * @interface TranslationMemoryFieldValue
 */
export interface TranslationMemoryFieldValue {
    /**
     * The unique identifier associated with this value.
     * @type {string}
     * @memberof TranslationMemoryFieldValue
     */
    id: string;
    /**
     * A translation memory field value.
     * @type {string}
     * @memberof TranslationMemoryFieldValue
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface TranslationMemoryFields
 */
export interface TranslationMemoryFields {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {Array<TranslationMemoryFieldsSettings>}
     * @memberof TranslationMemoryFields
     */
    settings?: Array<TranslationMemoryFieldsSettings>;
}
/**
 * The configuration settings for Translation Memory Fields.
 * @export
 * @interface TranslationMemoryFieldsSettings
 */
export interface TranslationMemoryFieldsSettings {
    /**
     * The name of the translation memory field.
     * @type {string}
     * @memberof TranslationMemoryFieldsSettings
     */
    name: string;
    /**
     * A collection of values.
     * @type {Array<string>}
     * @memberof TranslationMemoryFieldsSettings
     */
    values: Array<string>;
    /**
     * 
     * @type {TranslationMemoryFieldUpdateType}
     * @memberof TranslationMemoryFieldsSettings
     */
    type: TranslationMemoryFieldUpdateType;
}
/**
 * 
 * @export
 * @interface TranslationMemoryFieldsSettingsRequest
 */
export interface TranslationMemoryFieldsSettingsRequest {
    /**
     * The name of the translation memory field.
     * @type {string}
     * @memberof TranslationMemoryFieldsSettingsRequest
     */
    name: string;
    /**
     * A collection of values.
     * @type {Array<string>}
     * @memberof TranslationMemoryFieldsSettingsRequest
     */
    values: Array<string>;
    /**
     * 
     * @type {TranslationMemoryFieldUpdateType}
     * @memberof TranslationMemoryFieldsSettingsRequest
     */
    type: TranslationMemoryFieldUpdateType;
}
/**
 * 
 * @export
 * @interface TranslationMemoryFieldsUpdateRequest
 */
export interface TranslationMemoryFieldsUpdateRequest {
    /**
     * The configuration settings for Translation Memory Fields.
     * @type {Array<TranslationMemoryFieldsSettingsRequest>}
     * @memberof TranslationMemoryFieldsUpdateRequest
     */
    settings: Array<TranslationMemoryFieldsSettingsRequest>;
}
/**
 * 
 * @export
 * @interface TranslationMemoryImportHistoryResponse
 */
export interface TranslationMemoryImportHistoryResponse {
    /**
     * The unique identifier of the import operation.
     * @type {string}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    id: string;
    /**
     * The status of the import operation.
     * * `queued` - the import has been queued
     * * `inPorgress` - the import is being processed
     * * `failed` - the import has failed
     * * `done` - the import has finished successfully
     * * `cancelled` - the import has been cancelled
     * @type {string}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    status: TranslationMemoryImportHistoryResponseStatusEnum;
    /**
     * The assigned name of the import operation.
     * @type {string}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    displayName?: string;
    /**
     * 
     * @type {TranslationMemoryImportSettings}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    settings?: TranslationMemoryImportSettings;
    /**
     * The creation date of the import operation. <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    createdAt?: Date;
    /**
     * The last update time of the import operation.  <br> UTC Timezone  <br> Allowed formats: <br> "YYYY-MM-DDThh:mmZ" <br> "YYYY-MM-DDThh:mm:ssZ" <br> "YYYY-MM-DDThh:mm:ss.sZ" <br> "YYYY-MM-DDThh:mm:ss.ssZ" <br> "YYYY-MM-DDThh:mm:ss.sss
     * @type {Date}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    updatedAt?: Date;
    /**
     * Owner of the import operation, corresponds with the tenant identifier.
     * @type {string}
     * @memberof TranslationMemoryImportHistoryResponse
     */
    ownerId?: string;
}


/**
 * @export
 */
export const TranslationMemoryImportHistoryResponseStatusEnum = {
    Queued: 'queued',
    InProgress: 'inProgress',
    Failed: 'failed',
    Done: 'done',
    Cancelled: 'cancelled'
} as const;
export type TranslationMemoryImportHistoryResponseStatusEnum = typeof TranslationMemoryImportHistoryResponseStatusEnum[keyof typeof TranslationMemoryImportHistoryResponseStatusEnum];

/**
 * Translation Memory Import properties sent as a JSON inside a text part.
 * @export
 * @interface TranslationMemoryImportRequest
 */
export interface TranslationMemoryImportRequest {
    /**
     * The code of the source language  of the translation memory.
     * @type {string}
     * @memberof TranslationMemoryImportRequest
     */
    sourceLanguageCode: string;
    /**
     * The code of the target language  of the translation memory.
     * @type {string}
     * @memberof TranslationMemoryImportRequest
     */
    targetLanguageCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationMemoryImportRequest
     */
    importAsPlainText?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationMemoryImportRequest
     */
    exportInvalidTranslationUnits?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationMemoryImportRequest
     */
    triggerRecomputeStatistics?: boolean;
    /**
     * Option to specify how to handle translation units in the Translation Memory, if target segments differ.
     * @type {string}
     * @memberof TranslationMemoryImportRequest
     */
    targetSegmentsDifferOption?: TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum;
    /**
     * Option to specify how to handle translation units and unknown fields in the Translation Memory.
     * @type {string}
     * @memberof TranslationMemoryImportRequest
     */
    unknownFieldsOption?: TranslationMemoryImportRequestUnknownFieldsOptionEnum;
    /**
     * Only segments with the these confirmation levels will be imported. Default if the field is not set or null: [translated, approvedSignOff, approvedTranslation]. Empty array will be treated as not specified.
     * @type {Array<string>}
     * @memberof TranslationMemoryImportRequest
     */
    onlyImportSegmentsWithConfirmationLevels?: Array<TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum>;
}


/**
 * @export
 */
export const TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum = {
    AddNew: 'addNew',
    Overwrite: 'overwrite',
    LeaveUnchanged: 'leaveUnchanged',
    KeepMostRecent: 'keepMostRecent'
} as const;
export type TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum = typeof TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum[keyof typeof TranslationMemoryImportRequestTargetSegmentsDifferOptionEnum];

/**
 * @export
 */
export const TranslationMemoryImportRequestUnknownFieldsOptionEnum = {
    SkipTranslationUnit: 'skipTranslationUnit',
    Ignore: 'ignore',
    AddToTranslationMemory: 'addToTranslationMemory',
    FailTranslationUnitImport: 'failTranslationUnitImport'
} as const;
export type TranslationMemoryImportRequestUnknownFieldsOptionEnum = typeof TranslationMemoryImportRequestUnknownFieldsOptionEnum[keyof typeof TranslationMemoryImportRequestUnknownFieldsOptionEnum];

/**
 * @export
 */
export const TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum = {
    Translated: 'translated',
    ApprovedTranslation: 'approvedTranslation',
    ApprovedSignOff: 'approvedSignOff',
    Draft: 'draft',
    RejectedTranslation: 'rejectedTranslation',
    RejectedSignOff: 'rejectedSignOff'
} as const;
export type TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum = typeof TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum[keyof typeof TranslationMemoryImportRequestOnlyImportSegmentsWithConfirmationLevelsEnum];

/**
 * 
 * @export
 * @interface TranslationMemoryImportResponse
 */
export interface TranslationMemoryImportResponse {
    /**
     * The unique identifier of the import operation.
     * @type {string}
     * @memberof TranslationMemoryImportResponse
     */
    id: string;
    /**
     * The status of the import operation.
     * * `queued` - the import has been queued and is waiting to be processed
     * * `inProgress` - the import is being processed
     * * `failed` - the import has failed due to internal errors
     * * `done` - the import has finished successfully
     * * `cancelled` - the import has been interrupted
     * @type {string}
     * @memberof TranslationMemoryImportResponse
     */
    status: TranslationMemoryImportResponseStatusEnum;
}


/**
 * @export
 */
export const TranslationMemoryImportResponseStatusEnum = {
    Queued: 'queued',
    InProgress: 'inProgress',
    Failed: 'failed',
    Done: 'done',
    Cancelled: 'cancelled'
} as const;
export type TranslationMemoryImportResponseStatusEnum = typeof TranslationMemoryImportResponseStatusEnum[keyof typeof TranslationMemoryImportResponseStatusEnum];

/**
 * The properties provided by the client, when the Import Operation was triggered.
 * @export
 * @interface TranslationMemoryImportSettings
 */
export interface TranslationMemoryImportSettings {
    /**
     * Only segments with the these confirmation levels were be imported.
     * @type {Array<string>}
     * @memberof TranslationMemoryImportSettings
     */
    onlyImportSegmentsWithConfirmationLevels: Array<TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum>;
    /**
     * This option describes how were the translation units handled when there were unknown fields in the request.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    unknownFieldsOption: TranslationMemoryImportSettingsUnknownFieldsOptionEnum;
    /**
     * This option describes how were the translation units handled when there were differences in target segments.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    targetSegmentsDifferOption: TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum;
    /**
     * This option describes if the translation units were imported as plain text.
     * @type {boolean}
     * @memberof TranslationMemoryImportSettings
     */
    importAsPlainText: boolean;
    /**
     * This option describes if the invalid translation units were exported during the original translation memory import operation.
     * @type {boolean}
     * @memberof TranslationMemoryImportSettings
     */
    exportInvalidTranslationUnits: boolean;
    /**
     * This option describes if fuzzy index statistics were  recomputed after the original import operation.
     * @type {boolean}
     * @memberof TranslationMemoryImportSettings
     */
    triggerRecomputeStatistics: boolean;
    /**
     * The name of the file attached to the import request.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    fileName: string;
    /**
     * The source language code of the import request.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    sourceLanguageCode: string;
    /**
     * The target language code of the import request.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    targetLanguageCode: string;
    /**
     * The trace identifier of the import operation.
     * @type {string}
     * @memberof TranslationMemoryImportSettings
     */
    traceId: string;
}


/**
 * @export
 */
export const TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum = {
    Translated: 'translated',
    ApprovedTranslation: 'approvedTranslation',
    ApprovedSignOff: 'approvedSignOff',
    Draft: 'draft',
    RejectedTranslation: 'rejectedTranslation',
    RejectedSignOff: 'rejectedSignOff'
} as const;
export type TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum = typeof TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum[keyof typeof TranslationMemoryImportSettingsOnlyImportSegmentsWithConfirmationLevelsEnum];

/**
 * @export
 */
export const TranslationMemoryImportSettingsUnknownFieldsOptionEnum = {
    SkipTranslationUnit: 'skipTranslationUnit',
    Ignore: 'ignore',
    AddToTranslationMemory: 'addToTranslationMemory',
    FailTranslationUnitImport: 'failTranslationUnitImport'
} as const;
export type TranslationMemoryImportSettingsUnknownFieldsOptionEnum = typeof TranslationMemoryImportSettingsUnknownFieldsOptionEnum[keyof typeof TranslationMemoryImportSettingsUnknownFieldsOptionEnum];

/**
 * @export
 */
export const TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum = {
    AddNew: 'addNew',
    Overwrite: 'overwrite',
    LeaveUnchanged: 'leaveUnchanged',
    KeepMostRecent: 'keepMostRecent'
} as const;
export type TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum = typeof TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum[keyof typeof TranslationMemoryImportSettingsTargetSegmentsDifferOptionEnum];

/**
 * A language direction representation specific to translation memories.
 * @export
 * @interface TranslationMemoryLanguageDirection
 */
export interface TranslationMemoryLanguageDirection {
    /**
     * 
     * @type {SimpleLanguageDirection}
     * @memberof TranslationMemoryLanguageDirection
     */
    languageDirection?: SimpleLanguageDirection;
    /**
     * The number of translation units for this language pair. Sum up all language pairs to get the total for the translation memory.
     * @type {number}
     * @memberof TranslationMemoryLanguageDirection
     */
    translationUnits?: number;
    /**
     * The number of translation units that are unaligned for this language pair. Sum up all language pairs to get the total for the translation memory.
     * @type {number}
     * @memberof TranslationMemoryLanguageDirection
     */
    unalignedTranslationUnits?: number;
}
/**
 * 
 * @export
 * @interface TranslationMemoryUpdateRequest
 */
export interface TranslationMemoryUpdateRequest {
    /**
     * The translation memory name
     * @type {string}
     * @memberof TranslationMemoryUpdateRequest
     */
    name?: string;
    /**
     * The translation memory description
     * @type {string}
     * @memberof TranslationMemoryUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationMemoryUpdateRequest
     */
    copyright?: string;
    /**
     * 
     * @type {Array<LanguageDirectionRequest>}
     * @memberof TranslationMemoryUpdateRequest
     */
    languageDirections?: Array<LanguageDirectionRequest>;
    /**
     * The language processing rule to be associated with the translation memory.
     * @type {string}
     * @memberof TranslationMemoryUpdateRequest
     */
    languageProcessingRuleId?: string;
    /**
     * A field template to be associated with the translation memory.
     * @type {string}
     * @memberof TranslationMemoryUpdateRequest
     */
    fieldTemplateId?: string;
}
/**
 * 
 * @export
 * @interface UpdateTranslationMemory
 */
export interface UpdateTranslationMemory {
    /**
     * 
     * @type {UpdateTranslationMemorySettings}
     * @memberof UpdateTranslationMemory
     */
    settings: UpdateTranslationMemorySettings;
}
/**
 * 
 * @export
 * @interface UpdateTranslationMemorySettings
 */
export interface UpdateTranslationMemorySettings {
    /**
     * Default values are: 
     * 
 [`translated`, `approvedTranslation`, `approvedSignOff`].
     * @type {Array<string>}
     * @memberof UpdateTranslationMemorySettings
     */
    segmentsConfirmationLevels: Array<UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum>;
    /**
     * Options:
     * - `merge`: replace (update) only the TU (from which a match was retrieved for the edited TU) with the latest available translation AND keep the other duplicates as they are. Use this option to have multiple translations for the same source together with Multiple Translation Penalty = 0.
     * - `addNew`: add translations as new TUs to the TM. Specify the status of the TUs (which will be added) under Segment status. This means that the existing TUs in the TM are not overwritten.
     * - `overwriteExisting`: delete all TUs (which have the same source, all TU duplicates) and keep only the last added TU (the latest available translation). Use this option to prevent inconsistent translations.
     * - `leaveUnchanged`: keep the existing TUs and do not add any new ones.
     * - `keepMostRecent`: replace (update) only the most recent TU (from which a match was retrieved for the edited TU) with the latest available translation AND delete all other duplicates.
     * 
     * @type {string}
     * @memberof UpdateTranslationMemorySettings
     */
    targetSegmentsDifferOption: UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum;
}


/**
 * @export
 */
export const UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum = {
    ApprovedTranslation: 'approvedTranslation',
    ApprovedSignOff: 'approvedSignOff',
    Draft: 'draft',
    NotTranslated: 'notTranslated',
    Translated: 'translated',
    RejectedTranslation: 'rejectedTranslation',
    RejectedSignOff: 'rejectedSignOff'
} as const;
export type UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum = typeof UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum[keyof typeof UpdateTranslationMemorySettingsSegmentsConfirmationLevelsEnum];

/**
 * @export
 */
export const UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum = {
    AddNew: 'addNew',
    Overwrite: 'overwrite',
    KeepMostRecent: 'keepMostRecent',
    LeaveUnchanged: 'leaveUnchanged',
    Merge: 'merge'
} as const;
export type UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum = typeof UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum[keyof typeof UpdateTranslationMemorySettingsTargetSegmentsDifferOptionEnum];

/**
 * User in the account.
 * @export
 * @interface User
 */
export interface User {
    /**
     * User account identifier.
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's email address. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div> 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's first name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div> 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The user's last name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.</div> 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">This shows if the authenticated entity has access to read the details of the user or not. If true, then the 'anonymizedUserName' should be retrieved.</div> 
     * @type {boolean}
     * @memberof User
     */
    anonymized?: boolean;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Retrieved if the authenticated entity does not have access to read the User.</div> 
     * @type {string}
     * @memberof User
     */
    anonymizedUserName?: string;
    /**
     * 
     * @type {FolderV2}
     * @memberof User
     */
    location?: FolderV2;
    /**
     * 
     * @type {Array<Group>}
     * @memberof User
     */
    groups?: Array<Group>;
}
/**
 * User in the account.
 * @export
 * @interface UserRequest
 */
export interface UserRequest {
    /**
     * The user identifier.
     * @type {string}
     * @memberof UserRequest
     */
    id: string;
    /**
     * User’s email. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.
     * @type {string}
     * @memberof UserRequest
     */
    email?: string;
    /**
     * User’s first name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.
     * @type {string}
     * @memberof UserRequest
     */
    firstName?: string;
    /**
     * User’s last name. Retrieved only for RWS ID (formerly SDL ID) users (not service users) that the authenticated entity is authorized to read.
     * @type {string}
     * @memberof UserRequest
     */
    lastName?: string;
    /**
     * 
     * @type {ResourceFolderRequest}
     * @memberof UserRequest
     */
    location?: ResourceFolderRequest;
    /**
     * The groups.
     * @type {Array<GroupRequest>}
     * @memberof UserRequest
     */
    groups?: Array<GroupRequest>;
    /**
     * Shows if the authenticated entity has access to read the details of the user or not. If true then the ‘anonymizedUserName’ should be retrieved.
     * @type {boolean}
     * @memberof UserRequest
     */
    anonymized?: boolean;
    /**
     * Retrieved if the authenticated entity does not have access to read the User.
     * @type {string}
     * @memberof UserRequest
     */
    anonymizedUserName?: string;
}
/**
 * A vendor order resource.
 * @export
 * @interface VendorOrder
 */
export interface VendorOrder {
    /**
     * 
     * @type {string}
     * @memberof VendorOrder
     */
    id: string;
    /**
     * 
     * @type {Quote}
     * @memberof VendorOrder
     */
    quote?: Quote;
}
/**
 * The vendor order template.
 * @export
 * @interface VendorOrderTemplate
 */
export interface VendorOrderTemplate {
    /**
     * 
     * @type {string}
     * @memberof VendorOrderTemplate
     */
    id: string;
}
/**
 * 
 * @export
 * @interface VendorOrderTemplateRequest
 */
export interface VendorOrderTemplateRequest {
    /**
     * 
     * @type {string}
     * @memberof VendorOrderTemplateRequest
     */
    id: string;
}
/**
 * The steps a project goes through. (Not available for List Projects endpoint)
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * The workflow identifier.
     * @type {string}
     * @memberof Workflow
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The workflow name.</div> 
     * @type {string}
     * @memberof Workflow
     */
    name?: string;
    /**
     * The workflow description.
     * @type {string}
     * @memberof Workflow
     */
    description?: string;
    /**
     * 
     * @type {Folder}
     * @memberof Workflow
     */
    location?: Folder;
    /**
     * 
     * @type {WorkflowTemplate}
     * @memberof Workflow
     */
    workflowTemplate?: WorkflowTemplate;
    /**
     * 
     * @type {Array<WorkflowTaskConfiguration>}
     * @memberof Workflow
     */
    taskConfigurations?: Array<WorkflowTaskConfiguration>;
    /**
     * 
     * @type {Array<LanguageDirectionNoStatistics>}
     * @memberof Workflow
     */
    languageDirections?: Array<LanguageDirectionNoStatistics>;
}
/**
 * A set of workflow steps which work together towards a localization outcome.
 * @export
 * @interface WorkflowPhase
 */
export interface WorkflowPhase {
    /**
     * The phase identfier.
     * @type {string}
     * @memberof WorkflowPhase
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The phase name.</div> 
     * @type {string}
     * @memberof WorkflowPhase
     */
    name?: string;
}
/**
 * Task assignee. Based on the "type", further details can be retrieved. For ex. for "type"="user", "user" property is available. For "projectCreator" and "projectManager" no other property is available.
 * @export
 * @interface WorkflowTaskAssignee
 */
export interface WorkflowTaskAssignee {
    /**
     * 
     * @type {string}
     * @memberof WorkflowTaskAssignee
     */
    type: WorkflowTaskAssigneeTypeEnum;
    /**
     * 
     * @type {User}
     * @memberof WorkflowTaskAssignee
     */
    user?: User;
    /**
     * 
     * @type {Group}
     * @memberof WorkflowTaskAssignee
     */
    group?: Group;
    /**
     * 
     * @type {VendorOrderTemplate}
     * @memberof WorkflowTaskAssignee
     */
    vendorOrderTemplate?: VendorOrderTemplate;
}


/**
 * @export
 */
export const WorkflowTaskAssigneeTypeEnum = {
    User: 'user',
    Group: 'group',
    VendorOrderTemplate: 'vendorOrderTemplate',
    ProjectCreator: 'projectCreator',
    ProjectManager: 'projectManager'
} as const;
export type WorkflowTaskAssigneeTypeEnum = typeof WorkflowTaskAssigneeTypeEnum[keyof typeof WorkflowTaskAssigneeTypeEnum];

/**
 * 
 * @export
 * @interface WorkflowTaskAssigneeRequest
 */
export interface WorkflowTaskAssigneeRequest {
    /**
     * 
     * @type {string}
     * @memberof WorkflowTaskAssigneeRequest
     */
    type: WorkflowTaskAssigneeRequestTypeEnum;
    /**
     * 
     * @type {UserRequest}
     * @memberof WorkflowTaskAssigneeRequest
     */
    user?: UserRequest;
    /**
     * 
     * @type {GroupRequest}
     * @memberof WorkflowTaskAssigneeRequest
     */
    group?: GroupRequest;
    /**
     * 
     * @type {VendorOrderTemplateRequest}
     * @memberof WorkflowTaskAssigneeRequest
     */
    vendorOrderTemplate?: VendorOrderTemplateRequest;
}


/**
 * @export
 */
export const WorkflowTaskAssigneeRequestTypeEnum = {
    User: 'user',
    Group: 'group',
    VendorOrderTemplate: 'vendorOrderTemplate',
    ProjectCreator: 'projectCreator',
    ProjectManager: 'projectManager'
} as const;
export type WorkflowTaskAssigneeRequestTypeEnum = typeof WorkflowTaskAssigneeRequestTypeEnum[keyof typeof WorkflowTaskAssigneeRequestTypeEnum];

/**
 * Properties of a workflow task.
 * @export
 * @interface WorkflowTaskConfiguration
 */
export interface WorkflowTaskConfiguration {
    /**
     * 
     * @type {TaskConfigurationScope}
     * @memberof WorkflowTaskConfiguration
     */
    scope: TaskConfigurationScope;
    /**
     * 
     * @type {WorkflowTaskAssignee}
     * @memberof WorkflowTaskConfiguration
     */
    assignees?: WorkflowTaskAssignee;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {boolean}
     * @memberof WorkflowTaskConfiguration
     */
    isSkipped?: boolean;
    /**
     * 
     * @type {WorkflowTaskTemplate}
     * @memberof WorkflowTaskConfiguration
     */
    taskTemplate: WorkflowTaskTemplate;
}
/**
 * A task configuration request.
 * @export
 * @interface WorkflowTaskConfigurationRequest
 */
export interface WorkflowTaskConfigurationRequest {
    /**
     * 
     * @type {ObjectId}
     * @memberof WorkflowTaskConfigurationRequest
     */
    taskTemplate: ObjectId;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTaskConfigurationRequest
     */
    isSkipped: boolean;
    /**
     * 
     * @type {Array<WorkflowTaskAssigneeRequest>}
     * @memberof WorkflowTaskConfigurationRequest
     */
    assignees: Array<WorkflowTaskAssigneeRequest>;
    /**
     * 
     * @type {TaskConfigurationScopeRequest}
     * @memberof WorkflowTaskConfigurationRequest
     */
    scope: TaskConfigurationScopeRequest;
}
/**
 * 
 * @export
 * @interface WorkflowTaskTemplate
 */
export interface WorkflowTaskTemplate {
    /**
     * The workflow task template identifier.
     * @type {string}
     * @memberof WorkflowTaskTemplate
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The workflow task template name.</div> 
     * @type {string}
     * @memberof WorkflowTaskTemplate
     */
    name?: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">Unique identifier of workflow task templates
     * </div> 
     * @type {string}
     * @memberof WorkflowTaskTemplate
     */
    apiInternalId?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTaskTemplate
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTaskTemplate
     */
    canSkip?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTaskTemplate
     */
    requiresAssignment?: boolean;
    /**
     * 
     * @type {TaskType}
     * @memberof WorkflowTaskTemplate
     */
    taskType?: TaskType;
    /**
     * 
     * @type {WorkflowPhase}
     * @memberof WorkflowTaskTemplate
     */
    phase?: WorkflowPhase;
}
/**
 * 
 * @export
 * @interface WorkflowTemplate
 */
export interface WorkflowTemplate {
    /**
     * The workflow template identifier.
     * @type {string}
     * @memberof WorkflowTemplate
     */
    id: string;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;">The workflow template name.</div> 
     * @type {string}
     * @memberof WorkflowTemplate
     */
    name?: string;
    /**
     * The workflow template description.
     * @type {string}
     * @memberof WorkflowTemplate
     */
    description?: string;
    /**
     * 
     * @type {Array<WorkflowTaskTemplate>}
     * @memberof WorkflowTemplate
     */
    taskTemplates?: Array<WorkflowTaskTemplate>;
    /**
     * 
     * @type {Array<WorkflowPhase>}
     * @memberof WorkflowTemplate
     */
    phases?: Array<WorkflowPhase>;
    /**
     * 
     * @type {Array<WorkflowTemplateTransition>}
     * @memberof WorkflowTemplate
     */
    transitions?: Array<WorkflowTemplateTransition>;
}
/**
 * 
 * @export
 * @interface WorkflowTemplateTransition
 */
export interface WorkflowTemplateTransition {
    /**
     * 
     * @type {WorkflowTemplateTransitionNode}
     * @memberof WorkflowTemplateTransition
     */
    from?: WorkflowTemplateTransitionNode;
    /**
     * 
     * @type {WorkflowTemplateTransitionNode}
     * @memberof WorkflowTemplateTransition
     */
    to?: WorkflowTemplateTransitionNode;
    /**
     * 
     * @type {WorkflowTemplateTransitionCondition}
     * @memberof WorkflowTemplateTransition
     */
    condition?: WorkflowTemplateTransitionCondition;
}
/**
 * 
 * @export
 * @interface WorkflowTemplateTransitionCondition
 */
export interface WorkflowTemplateTransitionCondition {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof WorkflowTemplateTransitionCondition
     */
    type?: WorkflowTemplateTransitionConditionTypeEnum;
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof WorkflowTemplateTransitionCondition
     */
    value?: string;
}


/**
 * @export
 */
export const WorkflowTemplateTransitionConditionTypeEnum = {
    Outcome: 'outcome',
    Expression: 'expression'
} as const;
export type WorkflowTemplateTransitionConditionTypeEnum = typeof WorkflowTemplateTransitionConditionTypeEnum[keyof typeof WorkflowTemplateTransitionConditionTypeEnum];

/**
 * 
 * @export
 * @interface WorkflowTemplateTransitionNode
 */
export interface WorkflowTemplateTransitionNode {
    /**
     * <div style="display:inline; float:right; color:#008080; margin-top:-23px; font-size:11px">default</div><div style="display: inline;"></div> 
     * @type {string}
     * @memberof WorkflowTemplateTransitionNode
     */
    type?: WorkflowTemplateTransitionNodeTypeEnum;
    /**
     * 
     * @type {WorkflowTaskTemplate}
     * @memberof WorkflowTemplateTransitionNode
     */
    taskTemplate?: WorkflowTaskTemplate;
}


/**
 * @export
 */
export const WorkflowTemplateTransitionNodeTypeEnum = {
    TaskTemplate: 'taskTemplate',
    Start: 'start',
    End: 'end'
} as const;
export type WorkflowTemplateTransitionNodeTypeEnum = typeof WorkflowTemplateTransitionNodeTypeEnum[keyof typeof WorkflowTemplateTransitionNodeTypeEnum];

/**
 * A model to update a workflow.
 * @export
 * @interface WorkflowUpdateRequest
 */
export interface WorkflowUpdateRequest {
    /**
     * The workflow name.
     * @type {string}
     * @memberof WorkflowUpdateRequest
     */
    name?: string;
    /**
     * The workflow description.
     * @type {string}
     * @memberof WorkflowUpdateRequest
     */
    description?: string;
    /**
     * The task configurations.
     * @type {Array<WorkflowTaskConfigurationRequest>}
     * @memberof WorkflowUpdateRequest
     */
    taskConfigurations?: Array<WorkflowTaskConfigurationRequest>;
}
