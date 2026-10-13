// Parses the saved bachelor catalog page -> module details for the requested INF3 modules.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const hier = dirname(fileURLToPath(import.meta.url));
const ZIEL = ["INF3181","INF3131","INF3142","INF3182","INF3188","INF3171","INF3341","INF3154","INF3411","INF3179","INF3212","INF3483","INF3413","INF3223","INF3156","INF3143","INF3351","INF3172","INF3331","INF3460","INF3164","INF3144","INF3213","INF3422","INF3186","INF3146","INF3147","INF3185","INF3152","INF3213a","INF3332","INF3213b","INF3151","INF3145","INF3432","INF3183","INF3187","INF3132","INF3470","INF3433","INF3614","INF3184","INF3333","INF3240","INF3339c"];

const strip = (s) => String(s)
  .replace(/<br\s*\/?>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#160;/g, " ")
  .replace(/\s+/g, " ").trim();

const html = await readFile(join(hier, "list-bachelor.html"), "utf8");
const bloecke = html.split(/<table[^>]*class="detailsTable"/).slice(1);

const gefunden = {};
for (const block of bloecke) {
  const teil = block.split("</table>")[0];
  const nummer = strip((/<th class="th-red content">([\s\S]*?)<\/th>/.exec(teil) || [, ""])[1]).replace(/^Nummer\s*/, "").trim();
  if (!nummer) continue;

  const thRed = [...teil.matchAll(/<th class="th-red content">([\s\S]*?)<\/th>/g)].map(m => strip(m[1]));
  const titel = (thRed[1] || "").replace(/^Titel\s*/, "").trim();
  const lehrform = (thRed[2] || "").replace(/^Lehrform\(en\)\s*/, "").trim();

  const felder = {};
  for (const m of teil.matchAll(/<th class="th-lightred[^"]*">([\s\S]*?)<\/th>\s*<td[^>]*>([\s\S]*?)<\/td>/g)) {
    felder[strip(m[1])] = strip(m[2]);
  }
  const detail = /\/main\/module\/detail\/(\d+)\//.exec(teil);

  gefunden[nummer] = {
    nr: nummer, titel, lehrform,
    ects: felder["ECTS"] || "",
    workload: felder["Arbeitsaufwand - Kontaktzeit - Selbststudium"] || "",
    dauer: felder["Veranstaltungsdauer"] || "",
    haeufig: felder["Häufigkeit des Angebots"] || "",
    sprache: felder["Unterrichtssprache"] || "",
    pruefung: felder["Prüfungsform"] || "",
    inhalt: felder["Inhalt"] || "",
    ziele: felder["Qualifikationsziele"] || "",
    voraussetzungen: felder["Teilnahmevoraussetzungen"] || "",
    dozent: felder["Dozent/in"] || "",
    literatur: felder["Literatur / Sonstiges"] || "",
    zuletzt: felder["Zuletzt angeboten"] || "",
    geplant: felder["Geplant für"] || "",
    bereiche: felder["Zugeordnete Studienbereiche"] || "",
    detailId: detail ? detail[1] : null
  };
}

const fehlend = ZIEL.filter(n => !gefunden[n] && !Object.keys(gefunden).some(k => k.startsWith(n + " ") || k.startsWith(n + "/") || k === n));
const vorhanden = ZIEL.filter(n => gefunden[n] || Object.keys(gefunden).some(k => k.startsWith(n)));
console.log("Module im Bachelor-Katalog gefunden:", vorhanden.length, "von", ZIEL.length);
console.log("Fehlend:", fehlend.join(", ") || "–");
console.log("Alle Katalog-Nummern (Auszug INF3):", Object.keys(gefunden).filter(k => /^INF3/.test(k)).join(", "));

await writeFile(join(hier, "bachelor-raw.json"), JSON.stringify(gefunden, null, 2), "utf8");
console.log("\ngeschrieben: _scrape/bachelor-raw.json");
