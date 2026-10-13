# Scraper: Bachelor-Module für INFO-BASIS

Erzeugt `../alma/bachelor-daten.js` – die Bachelor-Module (INF3xxx), die im
M.Sc. Informatik im Studienbereich **INFO BASIS** (Konto 100) belegt werden können.

## Quellen

| Quelle | Wofür |
| --- | --- |
| Studienplaner Master (ALMA), Bereich `1.5.1 INFO-BASIS` | Auswahl der Module (45) + Zuordnung zum Bereich |
| Modulverzeichnis Bachelor, `courses.cs.uni-tuebingen.de/main/module/list-bachelor/` | CP, Inhalt, Prüfung, Dozent, Geplant für … |
| Modul-Detailseiten `courses.cs.uni-tuebingen.de/main/module/detail/<id>/` | Lehrform (fehlt in der Listenansicht) |
| ALMA Veranstaltungsdetails (`detailView-flow&unitId=…&periodId=237`) | Termine (WiSe 2026/27) |

Alle Seiten sind **ohne Login** abrufbar. Node-`fetch` scheitert hier am Proxy,
deshalb läuft der Download über PowerShell.

## Ablauf

```powershell
powershell -File _scrape/download.ps1   # 1) Seiten -> pages/, details/, list-bachelor.html
node _scrape/parse-module.mjs           # -> bachelor-raw.json  (CP, Inhalt, ...)
node _scrape/parse.mjs                  # -> alma.json          (Termine)
node _scrape/gen.mjs                    # -> ../alma/bachelor-daten.js
```

Die heruntergeladenen HTML-Dateien sind nur Cache und nicht eingecheckt
(werden von `download.ps1` neu erzeugt).

## Hinweise

- `gen.mjs` überschreibt **keine** Einträge, die bereits in `alma-daten.js` stehen
  (die meisten INF3-Termine stammen von dort). Neu ist derzeit nur `INF3339c`.
- `periodId=237` entspricht **Winter 2026/27** – für ein anderes Semester in
  `download.ps1`/`gen.mjs` anpassen.
- `unitId`s ändern sich pro Semester und stehen in `download.ps1`; sie werden über
  ALMA → *Studienangebot → Veranstaltungen suchen* (Suche nach der Modulnummer) ermittelt.
- Module ohne Katalog-/ALMA-Daten (`INF3422`, `INF3213a`, `INF3213b`, `INF3614`)
  bekommen Titel + CP aus dem Studienplaner; weitere Felder bleiben leer.
- Das Label `INFO-BASIS` (Badge) und der Filterchip setzen `infoBasis: true` bzw.
  `bereiche: ["FREI"]`; die Zuordnung passiert in `gen.mjs`.

