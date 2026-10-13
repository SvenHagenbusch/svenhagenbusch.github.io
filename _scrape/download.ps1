# Lädt alle Seiten, die _scrape/parse*.mjs brauchen (ohne Login, nutzt den System-Proxy).
# Aufruf:  powershell -File _scrape/download.ps1
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$pages = Join-Path $root 'pages'
$details = Join-Path $root 'details'
New-Item -ItemType Directory -Force -Path $pages, $details | Out-Null

# --- 1) ALMA: Veranstaltungsdetails WiSe 2026/27 (periodId=237) ---
# nr -> unitId (aus ALMA: Veranstaltungen suchen)
$units = [ordered]@{
  INF3142 = 26367;  INF3188 = 95934;  INF3411 = 25358;  INF3223 = 25313
  INF3156 = 47293;  INF3143 = 14754;  INF3351 = 14749;  INF3172 = 14750
  INF3331 = 10214;  INF3164 = 25338;  INF3213 = 87566;  INF3146 = 14752
  INF3147 = 71188;  INF3332 = 25337;  INF3187 = 89628;  INF3433 = 113216
  INF3184 = 25356;  INF3240 = 60356;  INF3339c = 63627
}
foreach ($k in $units.Keys) {
  $u = "https://alma.uni-tuebingen.de/alma/pages/startFlow.xhtml?_flowId=detailView-flow&unitId=$($units[$k])&periodId=237&navigationPosition=searchCourses"
  Write-Host "ALMA   $k"
  Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 40 -OutFile (Join-Path $pages "$k.html")
}

# --- 2) Modulverzeichnis Bachelor (Liste + Detailseiten) ---
$liste = Join-Path $root 'list-bachelor.html'
Write-Host "Liste  list-bachelor.html"
Invoke-WebRequest -Uri "https://courses.cs.uni-tuebingen.de/main/module/list-bachelor/" -UseBasicParsing -TimeoutSec 60 -OutFile $liste

if (Test-Path (Join-Path $root 'bachelor-raw.json')) {
  $j = [System.Text.Encoding]::UTF8.GetString([System.IO.File]::ReadAllBytes((Join-Path $root 'bachelor-raw.json'))) | ConvertFrom-Json
  foreach ($p in $j.PSObject.Properties) {
    if (-not $p.Value.detailId) { continue }
    $file = Join-Path $details ($p.Name + '.html')
    if (Test-Path $file) { continue }
    Write-Host "Detail $($p.Name)"
    Invoke-WebRequest -Uri "https://courses.cs.uni-tuebingen.de/main/module/detail/$($p.Value.detailId)/" -UseBasicParsing -TimeoutSec 40 -OutFile $file
  }
}
Write-Host "fertig."
