# powershell script adds a ts-nocheck comment
# at the beginning of each ts file in the generated
# Public API TypeScript client

# The @ts-nocheck is to ignore the typescript compiler itself, otherwise the 
# language server would analyze and throw errors, mostly unused imports 
# and variables, on the generated code.
# The issue can be found on their github repo.
# https://github.com/OpenAPITools/openapi-generator/issues/1880

Param ($path)
if (-not ($PSBoundParameters.ContainsKey("path") -and $path)) {
	Write-Error "Error: 'path' not set or empty. Use -path './your/path' when calling script."
	return
}

Write-Host "Adding ts-nocheck comment to all .ts files in $path..."

$tsFilesCount = 0
$changedTsFilesCount = 0

$tsNoCheckCode = @"
// @ts-nocheck

"@

Get-ChildItem -Path $path -Recurse -Force -Filter *.ts | ForEach-Object {
	$tsFilesCount++
	
	$fileContent = Get-Content -Path $_.FullName -Raw

	If ($fileContent.StartsWith($tsNoCheckCode)) { return }
	
	$changedTsFilesCount++
	
	$newContent = $tsNoCheckCode + $fileContent
	Set-Content -Path $_.FullName -Value $newContent
}

Write-Host "Adding ts-nocheck to all .ts files in $path complete. $changedTsFilesCount/$tsFilesCount .ts files affected." -ForegroundColor DarkGreen