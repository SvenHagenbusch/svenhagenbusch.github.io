// Parses locally saved ALMA course detail pages (_scrape/pages/*.html).
import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const hier = dirname(fileURLToPath(import.meta.url));
const PAGES = join(hier, "pages");

const strip = (s) => String(s)
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#160;/g, " ")
  .replace(/&auml;/g, "ä").replace(/&ouml;/g, "ö").replace(/&uuml;/g, "ü")
  .replace(/&Auml;/g, "Ä").replace(/&Ouml;/g, "Ö").replace(/&Uuml;/g, "Ü").replace(/&szlig;/g, "ß")
  .replace(/\s+/g, " ").trim();

const kurz = (d) => { const m = /^\s*(\d{2}\.\d{2}\.)(\d{4})\s*$/.exec(d); return m ? m[1] + m[2].slice(2) : d.trim(); };
function spanne(txt) {
  const m = /(\d{2}\.\d{2}\.\d{4})\s*-\s*(\d{2}\.\d{2}\.\d{4})/.exec(txt);
  if (m) return { start: kurz(m[1]), ende: kurz(m[2]) };
  const e = /(\d{2}\.\d{2}\.\d{4})/.exec(txt);          // Einzeltermin
  return e ? { start: kurz(e[1]), ende: kurz(e[1]) } : { start: "", ende: "" };
}
function feld(html, label) {
  const re = new RegExp(`<label[^>]*>\\s*${label}\\s*</label>\\s*<div[^>]*class="answer"[^>]*>([\\s\\S]*?)</div>`, "i");
  const m = re.exec(html);
  return m ? strip(m[1]) : "";
}
function parseTermine(html) {
  const gruppen = [];
  const re = /id="[^"]*parallelGroupSchedule_(\d+):[^"]*?appointmentSeriesTableTable:tbody_element"[^>]*>([\s\S]*?)<\/tbody>/g;
  let m; const seen = new Set();
  while ((m = re.exec(html))) {
    if (seen.has(m[1])) continue; seen.add(m[1]);
    const termine = [];
    for (const row of m[2].split(/<tr class="listRow/).slice(1)) {
      const tds = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(x => x[1]);
      if (tds.length < 8) continue;
      const zeit = strip(tds[3]).split(/\s*-\s*/);
      const raumM = /<span[^>]*>([\s\S]*?)<\/span>/.exec(tds[9] || "");
      const sp = spanne(strip(tds[5]));
      termine.push({
        tag: strip(tds[2]), von: (zeit[0] || "").trim(), bis: (zeit[1] || "").trim(),
        raum: raumM ? strip(raumM[1]) : "", bemerkung: strip(tds[7]),
        start: sp.start, ende: sp.ende, rhythmus: strip(tds[1])
      });
    }
    if (termine.length) gruppen.push({ idx: +m[1], termine });
  }
  gruppen.sort((a, b) => a.idx - b.idx);
  return gruppen;
}

const out = {};
const dateien = (await readdir(PAGES)).filter(f => f.endsWith(".html")).sort();
for (const datei of dateien) {
  const nr = datei.replace(/\.html$/, "");
  const html = await readFile(join(PAGES, datei), "utf8");
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
  const cpTxt = feld(html, "Kurzkommentar");
  out[nr] = {
    nr,
    titel: feld(html, "Titel") || (h1 ? strip(h1[1]) : ""),
    nummer: feld(html, "Nummer"),
    cp: (cpTxt.match(/(\d+)\s*(?:CP|LP)/) || [])[1] ? Number((cpTxt.match(/(\d+)\s*(?:CP|LP)/) || [])[1]) : null,
    art: feld(html, "Veranstaltungsart"),
    verantw: feld(html, "Verantwortliche/-r"),
    haeufig: feld(html, "Angebotshäufigkeit"),
    gruppen: parseTermine(html)
  };
  console.log(nr.padEnd(9), "|", String(out[nr].cp).padStart(2), "CP |", out[nr].gruppen.length, "Gruppe(n) |", out[nr].titel);
}
await writeFile(join(hier, "alma.json"), JSON.stringify(out, null, 2), "utf8");
console.log("\ngeschrieben:", join(PAGES, "..", "alma.json"));
