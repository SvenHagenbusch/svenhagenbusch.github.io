// Erzeugt alma/bachelor-daten.js aus den gescrapten Daten.
import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const hier = dirname(fileURLToPath(import.meta.url));
const ALMA_DIR = join(hier, "..", "alma");

const strip = (s) => String(s)
  .replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#160;/g, " ")
  .replace(/\s+/g, " ").trim();

// nr, Titel (aus dem Studienplaner), Pool (0=9CP, 1=6CP, 2=3CP)
const PLANER = [
  ["INF3181", "Programmiersprachen I", 0],
  ["INF3131", "Einführung in relationale Datenbanksysteme (Datenbanksysteme I)", 0],
  ["INF3142", "Computer Graphics (Grafische Datenverarbeitung)", 0],
  ["INF3182", "Compilerbau", 0],
  ["INF3188", "Parallele, nebenläufige und verteilte Programmierung", 0],
  ["INF3171", "Einführung in Internettechnologien (Grundlagen der Internettechnologien)", 1],
  ["INF3341", "Grundlagen der Rechnerarchitektur", 1],
  ["INF3154", "Introduction to Neural Networks", 1],
  ["INF3411", "Methoden der Algorithmik", 1],
  ["INF3179", "Realtime- and On Demand-Mediendienste im Internet", 1],
  ["INF3212", "Functional Programming", 1],
  ["INF3483", "Einführung in die Logik", 1],
  ["INF3413", "Algorithmische Geometrie", 1],
  ["INF3223", "Angewandte Statistik I", 1],
  ["INF3156", "Artificial Intelligence", 1],
  ["INF3143", "Bildverarbeitung", 1],
  ["INF3351", "Grundlagen der Robotik", 1],
  ["INF3172", "Grundlagen der Webentwicklung", 1],
  ["INF3331", "Grundlagen des Internets", 1],
  ["INF3460", "Information Theory", 1],
  ["INF3164", "User Experience (früher User Interface Design)", 1],
  ["INF3144", "Bildverarbeitung", 1],
  ["INF3213", "Programmiertechniken", 1],
  ["INF3422", "Lambda-Kalkül und Kombinatorische Logik", 1],
  ["INF3186", "Programmieren mit Abhängigen Typen", 1],
  ["INF3146", "Computerspiele / Special Effects 1", 1],
  ["INF3147", "Computerspiele/ Special Effects 2", 1],
  ["INF3185", "C++-Programming", 1],
  ["INF3152", "Grundlagen des Maschinellen Lernens", 1],
  ["INF3213a", "Implementierung von Programmiersprachen: Algorithm Design with Haskell", 1],
  ["INF3332", "Internet-Praktikum I", 1],
  ["INF3213b", "Object Meets Function", 1],
  ["INF3151", "Grundlagen des Maschinellen Lernens", 1],
  ["INF3145", "Wissenschaftliche Visualisierung", 1],
  ["INF3432", "Graphentheorie", 1],
  ["INF3183", "Implementierung von Programmiersprachen", 1],
  ["INF3187", "Effective Programming with Effects", 1],
  ["INF3132", "Tabular Database Systems", 1],
  ["INF3470", "Introduction to Quantum Computing", 1],
  ["INF3433", "Kombinatorische Geometrie und Graphenzeichnen", 1],
  ["INF3614", "Linux für Fortgeschrittene", 2],
  ["INF3184", "Einführung in Linux", 2],
  ["INF3333", "IT Service and Security Management", 2],
  ["INF3240", "Natural Language Processing (NLP): Praktische Einführung mit Python", 2],
  ["INF3339c", "Spezielle Kapitel der Praktischen Informatik: Compilerbau", 2]
];
const POOL_CP = [9, 6, 3];
const MEINFM = { INF3142: "MEINFM3142", INF3171: "MEINFM3171", INF3143: "MEINFM3143", INF3164: "MEINFM3164" };

const katalog = JSON.parse(await readFile(join(hier, "bachelor-raw.json"), "utf8"));
const alma = JSON.parse(await readFile(join(hier, "alma.json"), "utf8"));

// Bereits in alma-daten.js vorhandene Schlüssel nicht überschreiben
const almaJs = await readFile(join(ALMA_DIR, "alma-daten.js"), "utf8");
const vorhanden = new Set([...almaJs.matchAll(/^\s{2}"([^"]+)":\s*\{/gm)].map(m => m[1]));
const uebersprungen = [];

function felderAusHtml(html) {
  const teil = html.split("</table>")[0];
  const f = {};
  for (const m of html.matchAll(/<th class="th-lightred[^"]*">([\s\S]*?)<\/th>\s*<td[^>]*>([\s\S]*?)<\/td>/g))
    f[strip(m[1])] = strip(m[2]);
  return { f, teil };
}

function formAusLehrform(lf) {
  const t = (lf || "").toLowerCase();
  if (!t) return "";
  if (t.includes("forschungsprojekt")) return "F";
  if (t.includes("praktikum") && !t.includes("vorlesung")) return "P";
  if (t.includes("vorlesung") && t.includes("seminar")) return "VS";
  if (t.includes("vorlesung")) return "VU";
  if (t.includes("seminar")) return "S";
  if (t.includes("projekt")) return "F";
  return "";
}
function workloadAus(txt) {
  const g = /Arbeitsaufwand:\s*(\d+)/.exec(txt), k = /Kontaktzeit:\s*(\d+)/.exec(txt),
        s = /Selbststudium:\s*(\d+)/.exec(txt), sws = /(\d+)\s*SWS/.exec(txt);
  return { gesamt: g ? +g[1] : null, kontakt: k ? +k[1] : null, sws: sws ? +sws[1] : null, selbst: s ? +s[1] : null };
}
function turnusAus(h) {
  const t = (h || "").toLowerCase();
  if (t.includes("jedes semester")) return "J";
  if (t.includes("wintersemester")) return "W";
  if (t.includes("sommersemester")) return "S";
  return "U";
}

const module = [];
const almaAus = {};
for (const [nr, titel, pool] of PLANER) {
  const key = katalog[nr] ? nr : MEINFM[nr];
  const kat = key ? katalog[key] : null;
  const a = alma[nr] || null;

  // Detailseite (enthält Lehrform)
  let detailFelder = null;
  try { detailFelder = felderAusHtml(await readFile(join(hier, "details", nr + ".html"), "utf8")).f; }
  catch { /* keine Detailseite */ }

  const quelle = { ...(kat || {}), ...(detailFelder || {}) };
  const cp = Number(quelle.ects) || (a && a.cp) || POOL_CP[pool];
  const lehrformLang = quelle["Lehrform(en)"] || (a && a.art) || "";
  const h = quelle["Häufigkeit des Angebots"] || (a && a.haeufig) || "";

  module.push({
    nr,
    titel,
    lehrformLang,
    form: formAusLehrform(lehrformLang),
    cp,
    workload: workloadAus(quelle["Arbeitsaufwand - Kontaktzeit - Selbststudium"] || ""),
    dauer: quelle["Veranstaltungsdauer"] || "",
    turnusLang: h,
    turnus: turnusAus(h),
    sprache: quelle["Unterrichtssprache"] || "",
    pruefung: quelle["Prüfungsform"] || "",
    inhalt: quelle["Inhalt"] || "",
    ziele: quelle["Qualifikationsziele"] || "",
    voraussetzungen: quelle["Teilnahmevoraussetzungen"] || "",
    dozent: quelle["Dozent/in"] || (a && a.verantw) || "",
    literatur: quelle["Literatur / Sonstiges"] || "",
    zuletzt: quelle["Zuletzt angeboten"] || "",
    geplant: quelle["Geplant für"] || "",
    alleBereiche: ["INFO-BASIS"],
    bereiche: ["FREI"],
    leistungen: [],
    infoBasis: true
  });

  if (a && a.gruppen && a.gruppen.length) {
    if (vorhanden.has(nr)) { uebersprungen.push(nr); }
    else {
      almaAus[nr] = {
        titel,
        gruppen: a.gruppen.map((g, i) => ({ name: `${titel} - ${i + 1}. Parallelgruppe`, termine: g.termine }))
      };
    }
  }
}

const js = `/* AUTOMATISCH ERZEUGT – nicht von Hand bearbeiten.
 * Erzeugt von _scrape/gen.mjs.
 *
 * Bachelor-Module (INF3xxx) der Fakultät Informatik, die im M.Sc. Informatik im
 * Studienbereich "INFO BASIS" (Konto 100) belegt werden können.
 *
 * Quellen:
 *   - Studienplaner Master Informatik (ALMA), Bereich 1.5.1 INFO-BASIS
 *     -> Auswahl der Module und Zuordnung zum Bereich INFO-BASIS
 *   - Modulverzeichnis Bachelor (courses.cs.uni-tuebingen.de)
 *     -> Lehrform, CP, Inhalt, Prüfung, Dozent, Geplant für, ...
 *   - ALMA Veranstaltungsdetails (WiSe 2026/27)
 *     -> Termine (Vorlesung/Übung/Klausur)
 */
(function(){
  var module = ${JSON.stringify(module, null, 2).replace(/\n/g, "\n  ")};
  var alma = ${JSON.stringify(almaAus, null, 2).replace(/\n/g, "\n  ")};

  window.MODULE_DATEN = (window.MODULE_DATEN || []).concat(module);
  window.ALMA_DATEN = Object.assign(window.ALMA_DATEN || {}, alma);
})();
`;

await writeFile(join(ALMA_DIR, "bachelor-daten.js"), js, "utf8");
console.log("Module:", module.length, "| neue Termine:", Object.keys(almaAus).length);
console.log("Termine schon in alma-daten.js (übersprungen):", uebersprungen.join(", ") || "–");
console.log("ohne Lehrform:", module.filter(m => !m.lehrformLang).map(m => m.nr).join(", ") || "–");
console.log("ohne CP(Katalog/ALMA):", module.filter(m => !m.inhalt).map(m => m.nr).join(", ") || "–");
console.log("geschrieben: alma/bachelor-daten.js");
