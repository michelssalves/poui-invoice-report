param(
  [ValidateSet("dev","prod")]
  [string]$Env = "dev"
)

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$appName = "poui-invoice-report"

# Mapeia env -> configuração Angular
if ($Env -eq "prod") {
  $ngConfig = "production"
  $suffix = "prod"
} else {
  $ngConfig = "development"
  $suffix = "dev"
}

$projeto = $scriptPath
$distPath = Join-Path $projeto "dist\$appName"
$browserPath = Join-Path $distPath "browser"

$resourcePath = Join-Path $projeto "Protheus\Resource"

# ✅ pasta muda conforme ambiente
$folderToZip = Join-Path $resourcePath "$appName"

# ✅ arquivo FINAL sem sufixo
$zipPath = Join-Path $resourcePath "$appName.zip"
$appPath = Join-Path $resourcePath "$appName.app"

cd $projeto

Write-Host "⿡ Executando build ($Env => $ngConfig)..." -ForegroundColor Cyan
ng build -c $ngConfig

if (!(Test-Path $browserPath)) {
  Write-Host "❌ Build falhou ou pasta 'browser' não foi encontrada: $browserPath" -ForegroundColor Red
  exit 1
}

if (Test-Path $folderToZip) { Remove-Item $folderToZip -Recurse -Force }
New-Item -ItemType Directory -Path $folderToZip | Out-Null

Write-Host "⿢ Copiando arquivos do browser para $folderToZip..." -ForegroundColor Cyan
Copy-Item "$browserPath\*" -Destination $folderToZip -Recurse -Force

Write-Host "⿣ Removendo pasta browser..." -ForegroundColor Cyan
Remove-Item $browserPath -Recurse -Force

# remove antigos
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
if (Test-Path $appPath) { Remove-Item $appPath -Force }

Write-Host "⿤ Compactando para ZIP..." -ForegroundColor Cyan
Compress-Archive -Path $folderToZip -DestinationPath $zipPath -Force

Rename-Item -Path $zipPath -NewName (Split-Path $appPath -Leaf) -Force

Write-Host "`n✅ Finalizado ($Env)."
Write-Host "📦 App gerado em: $appPath" -ForegroundColor Green
