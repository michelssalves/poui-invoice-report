$ErrorActionPreference = "Stop"

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$appName = "poui-invoice-report"
$ngConfig = "protheus"

$projeto = Resolve-Path (Join-Path $scriptPath "..")
$distPath = Join-Path $projeto "dist\$appName"
$browserPath = Join-Path $distPath "browser"
$resourcePath = Join-Path $projeto "Protheus\Resource"

$folderToZip = Join-Path $resourcePath $appName
$zipPath = Join-Path $resourcePath "$appName.zip"
$appPath = Join-Path $resourcePath "$appName.app"

Push-Location $projeto

Write-Host "Executando build (single => $ngConfig)..." -ForegroundColor Cyan
ng build -c $ngConfig

if (!(Test-Path $distPath)) {
  Pop-Location
  Write-Host "Build falhou ou pasta de saida nao foi encontrada: $distPath" -ForegroundColor Red
  exit 1
}

$sourcePath = $browserPath
if (!(Test-Path $sourcePath)) {
  $sourcePath = $distPath
}

if (!(Test-Path $resourcePath)) {
  New-Item -ItemType Directory -Path $resourcePath -Force | Out-Null
}

if (Test-Path $folderToZip) { Remove-Item $folderToZip -Recurse -Force }
New-Item -ItemType Directory -Path $folderToZip -Force | Out-Null

Write-Host "Copiando arquivos de $sourcePath para $folderToZip..." -ForegroundColor Cyan
Copy-Item "$sourcePath\*" -Destination $folderToZip -Recurse -Force

if (Test-Path $browserPath) {
  Write-Host "Removendo pasta browser..." -ForegroundColor Cyan
  Remove-Item $browserPath -Recurse -Force
}

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
if (Test-Path $appPath) { Remove-Item $appPath -Force }

Write-Host "Compactando para ZIP..." -ForegroundColor Cyan
Compress-Archive -Path $folderToZip -DestinationPath $zipPath -Force

Rename-Item -Path $zipPath -NewName (Split-Path $appPath -Leaf) -Force

Pop-Location

Write-Host "`nFinalizado."
Write-Host "App gerado em: $appPath" -ForegroundColor Green
