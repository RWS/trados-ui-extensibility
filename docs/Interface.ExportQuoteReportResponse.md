[Trados User Interface Extensibility v1.0.0](../wiki/globals) / ExportQuoteReportResponse

# Interface: ExportQuoteReportResponse

Export quote report response.

The field is optional and will be returned only if a custom quote template is associated with the project.

We currently have this known issue: when the export is not using a Quote Template, the response for this call will be empty. It will be addressed in the future.

## Export

ExportQuoteReportResponse

## Properties

### id?

> `optional` **id**: `string`

The export quote report identifier.

#### Memberof

ExportQuoteReportResponse

#### Source

lc-public-api/models/index.ts:1117
