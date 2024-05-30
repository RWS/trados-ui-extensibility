import {
  Configuration,
  ConfigurationParameters,
  // APIs
  ProjectApi,
  AccountApi,
  CustomerApi,
  CustomFieldApi,
  FileApi,
  FileProcessingConfigurationApi,
  FolderApi,
  GroupApi,
  LanguageApi,
  LanguageProcessingApi,
  PricingModelApi,
  ProjectGroupApi,
  ProjectTemplateApi,
  PublicKeysApi,
  QuoteApi,
  SourceFileApi,
  TargetFileApi,
  TaskApi,
  TaskTypeApi,
  TermbaseApi,
  TermbaseExportApi,
  TermbaseImportApi,
  TermbaseTemplateApi,
  TQAProfileApi,
  TranslationEngineApi,
  TranslationMemoryApi,
  TranslationMemoryExportApi,
  TranslationMemoryImportApi,
  UserApi,
  WorkflowApi
} from "../lc-public-api";
//import { ApiMiddleware } from "./apiMiddleware";

type ENVIRONMENT = "LOCAL" | "CI" | "QA" | "PTE" | "UAT" | "STG" | "PROD";

const envConfig = {
  ENVIRONMENT: "CI", // used for development; when publishing package, this should be PROD!
  // no trailing slash
  ENVIRONMENTS: {
    LOCAL: {
      apiUrl: "***REMOVED***"
    },
    CI: {
      apiUrl: "***REMOVED***"
    },
    QA: {
      apiUrl: "***REMOVED***"
    },
    PTE: {
      apiUrl: "***REMOVED***"
    },
    UAT: {
      apiUrl: "***REMOVED***"
    },
    STG: {
      apiUrl: "***REMOVED***"
    },
    PROD: {
      apiUrl: "***REMOVED***"
    }
  }
};

const getApiBaseUrl = (environment?: ENVIRONMENT): string => {
  environment = environment || (envConfig.ENVIRONMENT as ENVIRONMENT);
  const config: { apiUrl: string } = envConfig.ENVIRONMENTS[environment];
  return config.apiUrl;
};

const configParams: ConfigurationParameters = {
  basePath: getApiBaseUrl()
  //middleware: [new ApiMiddleware()]
};

const apiConfig = new Configuration(configParams);
/*
export const apiClient = {
  accountApi: () => new AccountApi(apiConfig),
  customFieldApi: () => new CustomFieldApi(apiConfig),
  customerApi: () => new CustomerApi(apiConfig),
  fileApi: () => new FileApi(apiConfig),
  fileProcessingConfigurationApi: () =>
    new FileProcessingConfigurationApi(apiConfig),
  folderApi: () => new FolderApi(apiConfig),
  groupApi: () => new GroupApi(apiConfig),
  languageApi: () => new LanguageApi(apiConfig),
  languageProcessingApi: () => new LanguageProcessingApi(apiConfig),
  pricingModelApi: () => new PricingModelApi(apiConfig),
  projectApi: () => new ProjectApi(apiConfig),
  projectGroupApi: () => new ProjectGroupApi(apiConfig),
  projectTemplateApi: () => new ProjectTemplateApi(apiConfig),
  publicKeysApi: () => new PublicKeysApi(apiConfig),
  quoteApi: () => new QuoteApi(apiConfig),
  sourceFileApi: () => new SourceFileApi(apiConfig),
  tqaProfileApi: () => new TQAProfileApi(apiConfig),
  targetFileApi: () => new TargetFileApi(apiConfig),
  taskApi: () => new TaskApi(apiConfig),
  taskTypeApi: () => new TaskTypeApi(apiConfig),
  termbaseApi: () => new TermbaseApi(apiConfig),
  termbaseExportApi: () => new TermbaseExportApi(apiConfig),
  termbaseImportApi: () => new TermbaseImportApi(apiConfig),
  termbaseTemplateApi: () => new TermbaseTemplateApi(apiConfig),
  translationEngineApi: () => new TranslationEngineApi(apiConfig),
  translationMemoryApi: () => new TranslationMemoryApi(apiConfig),
  translationMemoryExportApi: new TranslationMemoryExportApi(apiConfig),
  translationMemoryImportApi: () => new TranslationMemoryImportApi(apiConfig),
  userApi: () => new UserApi(apiConfig),
  workflowApi: () => new WorkflowApi(apiConfig)
};

export type ApiClient = typeof apiClient;
*/
export const accountApi: AccountApi = new AccountApi(apiConfig);
export const customFieldApi: CustomFieldApi = new CustomFieldApi(apiConfig);
export const customerApi: CustomerApi = new CustomerApi(apiConfig);
export const fileApi: FileApi = new FileApi(apiConfig);
export const fileProcessingConfigurationApi: FileProcessingConfigurationApi =
  new FileProcessingConfigurationApi(apiConfig);
export const folderApi: FolderApi = new FolderApi(apiConfig);
export const groupApi: GroupApi = new GroupApi(apiConfig);
export const languageApi: LanguageApi = new LanguageApi(apiConfig);
export const languageProcessingApi: LanguageProcessingApi =
  new LanguageProcessingApi(apiConfig);
export const pricingModelApi: PricingModelApi = new PricingModelApi(apiConfig);
export const projectApi: ProjectApi = new ProjectApi(apiConfig);
export const projectGroupApi: ProjectGroupApi = new ProjectGroupApi(apiConfig);
export const projectTemplateApi: ProjectTemplateApi = new ProjectTemplateApi(
  apiConfig
);
export const publicKeysApi: PublicKeysApi = new PublicKeysApi(apiConfig);
export const quoteApi: QuoteApi = new QuoteApi(apiConfig);
export const sourceFileApi: SourceFileApi = new SourceFileApi(apiConfig);
export const tqaProfileApi: TQAProfileApi = new TQAProfileApi(apiConfig);
export const targetFileApi: TargetFileApi = new TargetFileApi(apiConfig);
export const taskApi: TaskApi = new TaskApi(apiConfig);
export const taskTypeApi: TaskTypeApi = new TaskTypeApi(apiConfig);
export const termbaseApi: TermbaseApi = new TermbaseApi(apiConfig);
export const termbaseExportApi: TermbaseExportApi = new TermbaseExportApi(
  apiConfig
);
export const termbaseImportApi: TermbaseImportApi = new TermbaseImportApi(
  apiConfig
);
export const termbaseTemplateApi: TermbaseTemplateApi = new TermbaseTemplateApi(
  apiConfig
);
export const translationEngineApi: TranslationEngineApi =
  new TranslationEngineApi(apiConfig);
export const translationMemoryApi: TranslationMemoryApi =
  new TranslationMemoryApi(apiConfig);
export const translationMemoryExportApi: TranslationMemoryExportApi =
  new TranslationMemoryExportApi(apiConfig);
export const translationMemoryImportApi: TranslationMemoryImportApi =
  new TranslationMemoryImportApi(apiConfig);
export const userApi: UserApi = new UserApi(apiConfig);
export const workflowApi: WorkflowApi = new WorkflowApi(apiConfig);
