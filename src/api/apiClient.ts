import { getRegistrationResult } from "../events";
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
import { RegistrationResult } from "../models";
//import { ApiMiddleware } from "./apiMiddleware";

const getApiConfig = () => {
  const registrationResult: RegistrationResult = getRegistrationResult();
  if (!registrationResult || !registrationResult.publicApiUrl) {
    throw new Error(
      "Use trados.onReady function before calling the Public API"
    );
  }

  const configParams: ConfigurationParameters = {
    basePath: registrationResult.publicApiUrl
    //middleware: [new ApiMiddleware()]
  };

  return new Configuration(configParams);
};

export const tradosAccountApi = () => new AccountApi(getApiConfig());
export const tradosCustomFieldApi = () => new CustomFieldApi(getApiConfig());
export const tradosCustomerApi = () => new CustomerApi(getApiConfig());
export const tradosFileApi = () => new FileApi(getApiConfig());
export const tradosFileProcessingConfigurationApi = () =>
  new FileProcessingConfigurationApi(getApiConfig());
export const tradosFolderApi = () => new FolderApi(getApiConfig());
export const tradosGroupApi = () => new GroupApi(getApiConfig());
export const tradosLanguageApi = () => new LanguageApi(getApiConfig());
export const tradosLanguageProcessingApi = () =>
  new LanguageProcessingApi(getApiConfig());
export const tradosPricingModelApi = () => new PricingModelApi(getApiConfig());
export const tradosProjectApi = () => new ProjectApi(getApiConfig());
export const tradosProjectGroupApi = () => new ProjectGroupApi(getApiConfig());
export const tradosProjectTemplateApi = () =>
  new ProjectTemplateApi(getApiConfig());
export const tradosPublicKeysApi = () => new PublicKeysApi(getApiConfig());
export const tradosQuoteApi = () => new QuoteApi(getApiConfig());
export const tradosSourceFileApi = () => new SourceFileApi(getApiConfig());
export const tradosTqaProfileApi = () => new TQAProfileApi(getApiConfig());
export const tradosTargetFileApi = () => new TargetFileApi(getApiConfig());
export const tradosTaskApi = () => new TaskApi(getApiConfig());
export const tradosTaskTypeApi = () => new TaskTypeApi(getApiConfig());
export const tradosTermbaseApi = () => new TermbaseApi(getApiConfig());
export const tradosTermbaseExportApi = () =>
  new TermbaseExportApi(getApiConfig());
export const tradosTermbaseImportApi = () =>
  new TermbaseImportApi(getApiConfig());
export const tradosTermbaseTemplateApi = () =>
  new TermbaseTemplateApi(getApiConfig());
export const tradosTranslationEngineApi = () =>
  new TranslationEngineApi(getApiConfig());
export const tradosTranslationMemoryApi = () =>
  new TranslationMemoryApi(getApiConfig());
export const tradosTranslationMemoryExportApi = () =>
  new TranslationMemoryExportApi(getApiConfig());
export const tradosTranslationMemoryImportApi = () =>
  new TranslationMemoryImportApi(getApiConfig());
export const tradosUserApi = () => new UserApi(getApiConfig());
export const tradosWorkflowApi = () => new WorkflowApi(getApiConfig());
