/* AUTOMATISCH ERZEUGT – nicht von Hand bearbeiten.
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
  var module = [
    {
      "nr": "INF3181",
      "titel": "Programmiersprachen I",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 9,
      "workload": {
        "gesamt": 270,
        "kontakt": 90,
        "sws": 6,
        "selbst": 180
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur oder mündliche Prüfung; erfolgreiche Übungsteilnahme ist Prüfungsvoraussetzung.",
      "inhalt": "Programmiersprachen sind eine der bedeutendsten intellektuellen Erfindungen des 20. Jahrhunderts. Das Thema dieser Veranstaltung sind die Grundlagen der Programmiersprachen: Was für Sprachkonzepte gibt es, was bedeuten sie, wie benutzt man sie. Einige Stichworte zu den behandelten Themen: Lambda- Kalkül, Interpreter, Auswertungsstrategien, Continuations, Fixpunkte und Rekursion, Monaden, Objekte und Klassen, Typsysteme, Modulsysteme, Makros, domänenspezifische Sprachen, Scheme, Haskell, Scala, Java.",
      "ziele": "Die Studierenden sind in der Lage, Programmiersprachen fachlich zu beurteilen und zu vergleichen. Sie können die Bedeutung oben genannter Programmiersprachenkonstrukte präzise mit Fachterminologie beschreiben und in der Form von Interpretern implementieren. Sie können die Bedeutung der unterschiedlichen Programmiersprachenkonzepte für den Programmierer einschätzen und in sinnvoller Art und Weise anwenden.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung",
      "dozent": "Ostermann",
      "literatur": "wird in der Vorlesung bekanntgegeben.",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3131",
      "titel": "Einführung in relationale Datenbanksysteme (Datenbanksysteme I)",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 9,
      "workload": {
        "gesamt": 270,
        "kontakt": 90,
        "sws": 6,
        "selbst": 180
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur + Übungsnote",
      "inhalt": "Datenbankeinsatz; Datenbankmodelle und -sprachen (Typen, Deklarativität, Datenunabhängigkeit, Persistenz); Relationales Datenmodell und SQL; Normalformen, funktionale Abhängigkeiten; Entity-Relationship-Modell; Relationale Algebra; Rekursive Anfragen; Praktischer Einsatz (PostgreSQL)",
      "ziele": "Dieses Modul vermittelt eine breite Basis von Datenbanksystemgrundlagen (vor allem: relationaler Datenbanksysteme). Die Studierenden können Datenbanksysteme anfragen, ändern. Die Studierenden erlernen die Grundlagen relationaler Datenmodelle und deren Implementation in Form von SQL-basierten Datenbanksystemen. Die Studierenden können Datenbankschemata entwerfen und bewerten sowie Datenbankinstanzen anfragen und ändern. Bestehende Datenbanksysteme können bzgl. ihrer Qualität und Effizienz eingeschätzt werden.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Grust",
      "literatur": "Kemper/Eickler: Datenbanksysteme: Eine Einführung Heuer/Saake: Datenbanksysteme – Konzepte und Sprachen Relationale Datenbanksysteme (Software und Manuals), u.a. PostgreSQL",
      "zuletzt": "Wintersemester 2021",
      "geplant": "Sommersemester 2023",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3142",
      "titel": "Computer Graphics (Grafische Datenverarbeitung)",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 9,
      "workload": {
        "gesamt": 270,
        "kontakt": 90,
        "sws": 6,
        "selbst": 180
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "Einführung und Motivation grundlegender Konzepte und Techniken in der Computergrafik. Aus vielen Bereichen werden elementare Datenstrukturen und Algorithmen vorgestellt. Behandelt werden: Ray Tracing, Lichttransport, Signalverarbeitung, Texturen, Bildfilter, Farbdarstellung und Wahrnehmung, OpenGL-Programmierung, 3D-Splines und Oberfläche sowie Visualisierungstechniken.",
      "ziele": "Die Studierenden kennen die wichtigsten Algorithmen und Datenstrukturen zur Repräsentation dreidimensionaler Szenen (Geometrie, Lichtquellen, optische Materialeigenschaften, Texturen) sowie Operationen und Methoden zur Erzeugung realistischer Bilder aus 3D-Szenenbeschreibungen (Rendering-Gleichung und OpenGL). Sie können einfache Rendering- und Interaktionstechniken implementieren.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung",
      "dozent": "Lensch",
      "literatur": "-",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3182",
      "titel": "Compilerbau",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 9,
      "workload": {
        "gesamt": 270,
        "kontakt": 90,
        "sws": 6,
        "selbst": 180
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur oder mündliche Prüfung; erfolgreiche Übungsteilnahme ist Prüfungsvoraussetzung.",
      "inhalt": "Wie funktioniert die Übersetzung einer hochsprachlichen Programmiersprache in Maschineninstruktionen? Ein Verständnis davon ist nicht nur für die Entwickler von Compilern interessant, sondern jeder gute Programmierer sollte wissen, wie moderne Compiler und virtuelle Maschinen funktionieren: Auf der einen Seite ermöglicht es ein tieferes Verständnis davon, was passiert, wenn ein Programm ausgeführt wird; auf der anderen Seite sind viele der Technologien aus dem Compilerbau auch in vielen anderen Programmen sinnvoll verwendbar. Einige Stichworte zum Inhalt: Parsing, Abstrakte Syntaxbäume, Zwischenrepräsentationen, Datenflussanalyse, Registerallokation, Optimierungen, Laufzeitsysteme und virtuelle Maschinen, Compiler für objektorientierte und funktionale Sprachen.",
      "ziele": "Die Studierenden sind in der Lage, die unterschiedlichen Phasen eines Compilers zu verstehen. Sie können selbstständig Compiler für einfache Programmiersprachen implementieren und verstehen die Abwägungen und Alternativen, die es beim Design und der Auswahl von Compilertechnologien gibt.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Brachthäuser , Ostermann",
      "literatur": "Andrew W. Appel, Modern Compiler Implementation in ML, Cambridge University Press.",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3188",
      "titel": "Parallele, nebenläufige und verteilte Programmierung",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 9,
      "workload": {
        "gesamt": 270,
        "kontakt": 90,
        "sws": 6,
        "selbst": 180
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur oder mündliche Prüfung",
      "inhalt": "Hohe Anforderungen an die Latenz oder den Durchsatz von Software erfordern das Erstellen von parallelen, nebenläufigen oder verteilten Programmen. Sie stehen im Kontrast zu sequentiellen Programmen und bringen eine Vielzahl an zusätzlichen abstrakten Konzepten und konkreten Techniken mit sich. Diese Vorlesung mit Übung vermittelt sowohl die notwendigen theoretischen Grundlagen, als auch den praktischen Umgang mit aktuellen Technologien zur parallelen, nebenläufigen und verteilten Programmierung.",
      "ziele": "Die Studierenden kennen einfache theoretische Begriffe, die für die parallele, nebenläufige und verteilte Programmierung relevant sind, und verwenden diese korrekt in Diskussionen. Sie kennen grundlegende theoretische Vor- und Nachteile verschiedener Technologien und können diese abwägen und eine fundierte Auswahl treffen. Sie haben erste praktische Erfahrungen mit der parallelen, nebenläufigen und verteilten Programmierung gesammelt und sind bereit diese auf neue praktische Programmieraufgaben zu übertragen.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung , INFM2111 Praktische Informatik 3: Software Engineering",
      "dozent": "Schuster",
      "literatur": "wird in der Veranstaltung bekannt gegeben / will be announced in the course",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3171",
      "titel": "Einführung in Internettechnologien (Grundlagen der Internettechnologien)",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Entwicklung und Protokolle für das Web, Prinzip dynamischer Web-Sites auf dem Client und auf dem Server, XML sowie XHTML, CSS, HTML5, CGI-Mechanismus, PERL als CGI-Sprache, Dynamische Web-Sites mit PHP, Datenbankanbindung mit PHP, Die Smarty- Template-Engine, Clientseitige Web-Entwicklung mit JavaScript, Document-Object-Model (DOM), Gemischte Web-Applikationen mit AJAX, Elektronische Lernmaterialien und Kommunikationsforen in Moodle",
      "ziele": "Die Studierenden können nach diesem Modul selbständig einfache Web-Applikationen entwickeln. Sie verstehen die gängigen server- und clientseitigen Techniken dafür. Die Studierenden beherrschen dafür verschiedene, weit verbreitete Programmiersprachen. Ebenfalls können die Studierenden einfache Web-Applikationen mit Datenbankanbindung selbständig realisieren.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Walter",
      "literatur": "-",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3341",
      "titel": "Grundlagen der Rechnerarchitektur",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Dieses Modul befasst sich mit dem grundlegenden Aufbau moderner Rechnersysteme. Themen sind u.a. Methoden zur Klassifikation und Bewertung von Rechnerarchitekturen, Pipelining zur beschleunigten Befehlsverarbeitung, Speicherhierarchie und Caches, Hauptspeichertechnologien, virtuelle Speicherverwaltung, Techniken zur Sprungvorhersage, Kommunikation zwischen Prozessor und Peripherie und Grundprinzipien des Hardware- und Rechnerentwurfs.",
      "ziele": "Die Studierenden haben ein grundlegendes Verständnis über den Aufbau, die Organisation und das Operationsprinzip von Rechnersystemen. Dies befähigt sie dazu Mikroprozessorsysteme für verschiedene Einsatzgebiete zu bewerten, zu vergleichen und auszuwählen. Des Weiteren versetzen die erworbenen Kenntnisse die Studierenden in die Lage, den Zusammenhang zwischen Hardware-Konzepten und deren Auswirkungen auf die Software zu verstehen. Dies ermöglicht es den Veranstaltungsteilnehmenden systemnahe Funktionen sowie effiziente Programme zu entwickeln. Durch die begleitenden Übungen vertiefen die Studierenden das in der Vorlesung vermittelte Wissen durch Anwendung auf konkrete Problemstellungen. Da die Übungen selbsttätige in kleinen Gruppen zu bearbeiten sind, wird neben der Eigenverantwortung auch die Teamfähigkeit der Studierenden geschult.",
      "voraussetzungen": "INFM1310 Technische Informatik 1: Digitaltechnik , INFM2310 Technische Informatik 2: Informatik der Systeme",
      "dozent": "Bringmann",
      "literatur": "• David A. Patterson & John L. Hennessy; Computer Organization and Design RISC-V Edition: The Hardware / Software Interface 2. Auflage; Morgan Kaufmann, Elsevier, 2020. • D. A. Patterson, J. L. Hennessy: Rechnerorganisation und Rechnerentwurf: Die Hardware/Software-Schnittstelle; Oldenbourg Wissenschaftsverlag, 4. Auflage, 2011. • J. L. Hennessy, D. A. Patterson: Computer Architecture: A Quantitive Approach; Morgan Kaufmann Publishers Inc., 6. Auflage, 2018.",
      "zuletzt": "Wintersemester 2021",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3154",
      "titel": "Introduction to Neural Networks",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Englisch",
      "pruefung": "Klausur",
      "inhalt": "In der Vorlesung werden nach einer kurzen Einführung in die biologischen Grundlagen die wichtigsten Algorithmen künstlicher neuronaler Netze und ihre Theorie vorgestellt. In der Übung werden die theoretischen Kenntnisse durch Lösung praktischer Aufgaben mit Simulatoren für neuronale Netze vertieft.",
      "ziele": "Ziel dieses Moduls ist, Grundlagenwissen über neuronale Netze zu vermitteln. Die Studierenden lernen die wichtigsten Netzmodelle und ihre Eigenschaften kennen. Sie lernen, damit Mustererkennungsprobleme (Klassifikation, Regression) zu lösen. Teilweise programmieren sie auch Netzmodelle selbst bzw. nutzen moderne Simulatoren (JavaNNS, JMatlab).",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Zell",
      "literatur": "Skriptum zur Vorlesung, und Lehrbuch A. Zell: Simulation neuronaler Netze, Oldenbourg-Verlag",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3411",
      "titel": "Methoden der Algorithmik",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "In diesem Modul geht es um die Bereitstellung der Grundlagen für den Bereich Algorithmik. Dieses Modul schließt thematisch und methodisch an das Pflichtmodul Algorithmen an. Es umfasst eine weite Palette, die von der theoretischen Konzeption von Problemlösungsverfahren, verschiedenen Komplexitätsklassen und Anwendungsbereiche bis hin zu praktischen Aspekten wie Algorithm Engineering reichen. Themen sind u.a. Graphen und Netzwerke, Randomisierte Algorithmen, Lineares Programmieren, Approximationen, Parametrisierung und Parallelität",
      "ziele": "Die Studierenden weisen erweiterte Kenntnisse über Methoden für Datenstrukturen und Algorithmen auf, insbesondere für verschiedene Algorithmenklassen wie Graphenalgorithmen, randomisierte Algorithmen, parametrisierte Algorithmen, geometrische Algorithmen und parallele Algorithmen. Zu den einzelnen Themen können die Studierenden die Methoden selbständig auf Fallbeispiele anwenden und diese lösen, dazu gehören insbesondere die Anwendung von Korrektheitsbeweisen und Effizienzanalysen. Die Studierenden können einfache Algorithmenideen selbst entwickeln und die dazugehörigen Analysen und praktischen Umsetzungen entwerfen.",
      "voraussetzungen": "INFM2420 Theoretische Informatik 1: Algorithmen und Datenstrukturen (früher: Algorithmen)",
      "dozent": "Klost",
      "literatur": "Cormen, Leiserson, Rivest, Stein: Introduction to Algorithms; Mehlhorn, Näher: LEDA - A platform for combinatorial and geometric computation; Papadimitriou, Steiglitz: Combinatorial optimization : algorithms and complexity",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3179",
      "titel": "Realtime- and On Demand-Mediendienste im Internet",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "inhalt INF3179",
      "ziele": "goals INF3179",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Abele , Walter",
      "literatur": "-",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3212",
      "titel": "Functional Programming",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Jedes Semester",
      "turnus": "J",
      "sprache": "Deutsch",
      "pruefung": "Klausur + Übungsnote",
      "inhalt": "Diese Lehrveranstaltung nutzt die Programmiersprache Haskell, um grundlegende und praxisrelevante Konzepte der funktionalen Programmierung zu explorieren. Die ersten drei Wochen des Kurses führen die Teilnehmer in Haskell ein, danach werden weiterführende Ideen des funktionalen Paradigmas thematisiert: algebraische Datentypen; parametrische Polymorphie; Typklassen; domänenspezifische Sprachen und ihre Einbettung; Monaden; Parallelität. Das Material wird mittels Foliensatz, Tafelanschrieben und \\emph{Live Coding} vermittelt.",
      "ziele": "Die Studierenden können grundlegende und weiterführende Konzepte der funktionalen Programmierung in Haskell nachvollziehen. Die Studierenden beschreiben komplexe Datenstrukturen mit den Mitteln des Haskell-Typsystems und entwickeln selbständig Programme, um anspruchsvolle algorithmische Probleme zu lösen. Fortgeschrittene Methoden zur Abstraktion sowohl von Daten (bspw. generalisierte algebraische Datentypen) als auch von Verhalten (z.B. Monad-Transformer) können analysiert und neu geschaffen werden. Die Studierende erschließen sich den Zugang zur weiterführenden Literatur und zu Forschungsthemen in der funktionalen Programmierung.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Grust",
      "literatur": "Bird: Thinking Functionally Hutton: Programming in Haskell Bird/Wadler: Introduction to Functional Programming",
      "zuletzt": "Wintersemester 2021",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3483",
      "titel": "Einführung in die Logik",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Es werden elementare Grundlagen der Logik dargestellt. Hierzu gehören die Syntax und Semantik der Aussagenlogik und der Prädikatenlogik erster Stufe, Normalformen sowie Logikkalküle wie z.B. der Resolutionskalkül und der Kalkül des natürlichen Schließens.",
      "ziele": "Erwerb von logischen Grundkenntnissen, die für die Informatik unabdingbar sind.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Piecha",
      "literatur": "Literatur: siehe Homepage des jeweiligen Veranstalters. Hinweis: Diese Veranstaltung entspricht der früheren Veranstaltung INF2620 (Pflicht für Studierende des B.Sc. Informatik nach PO 2015 Pflicht; zu belegen im Modul \"Logik & Proseminar (übK)\" [INFM2620]).",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3413",
      "titel": "Algorithmische Geometrie",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "inhalt 3413",
      "ziele": "goals 3413",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Schlipf",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3223",
      "titel": "Angewandte Statistik I",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Einführung und Motivation grundlegender statistischer Methoden anhand von praktischen Beispielen aus den Neurowissenschaften, der Wahrnehmungsforschung und der Bildverarbeitung. Der Schwerpunkt liegt auf der praktischen Anwendung aller Methoden und deren Implementation in der Programmiersprache Python. Behandelt werden diskrete und kontinuierliche Wahrscheinlichkeitsverteilungen, deskriptive Statistik (z.B. Lage-, Streuungs- und Zusammenhangsmaße, Korrelationen), induktive Statistik (z.B. Tests, Regression) sowie explorative Statistik. Wahrscheinlichkeitsverteilungen werden theoretisch eingeführt und praktisch angewendet. Eine Kurzeinführung in die Programmiersprache Python und die Verwendung von Notebooks erleichtert die Anwendung von Statistik-Paketen.",
      "ziele": "Die Studierenden kennen grundlegende statistische Methoden, können diese korrrekt anwenden und in Software implementieren. Die Studierenden sind in der Lage, Versuche selbst zu planen und auszuwerten und dabei typische Fehler zu vermeiden. Sie können der Literatur dargestellte Ergebnisse kritisch hinterfragen.",
      "voraussetzungen": "INFM1010 Mathematik für Informatik 1: Analysis , INFM1020 Mathematik für Informatik 2: Lineare Algebra",
      "dozent": "Wannek",
      "literatur": "Fahrmeir, Künstler, Pigeot, Tutz: Statistik; Springer-Verlag. / Stahel: Statistische Datenanalyse; Vieweg & Sohn. / Zusatzliteratur wird in der Vorlesung bekannt gegeben.",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3156",
      "titel": "Artificial Intelligence",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Englisch",
      "pruefung": "Klausur",
      "inhalt": "Das Modul behandelt ungefähr die erste Hälfte des Buches von Stuart Russel, Peter Norvig: Artificial Intelligence, A Modern Approach, 3rd. Edition. Dazu gehören: Einführung, Grundlagen und Geschichte der KI, Intelligente Agenten, Problemlösen durch Suche, Heuristische Suchverfahren, lokale Suchverfahren, Suchen mit nichtdeterministischen Aktionen und partiellen Beobachtungen, Suchverfahren mit Gegnern (adversarial search), Suchverfahren für Spiele, Alpha-Beta-Pruning, Stochastische Spiele, Constraint Satisfaction-Probleme, Backtracking-Suche, Logische Agenten, Agenten basierend auf Aussagenlogik, Prädikatenlogik und Wissensrepräsentation darin, Unifikation und Lifting, Forward Chaining, Backward Chaining, Prolog, klassisches Planen, Hierarchisches Planen und Multiagenten-Planen, Wissensrepräsentation. Die Konzepte der Vorlesung werden in Übungen und Programmieraufgaben mit Lisp bzw. Java vertieft. Studierende lernen damit, Probleme mit KI-Techniken selbständig zu lösen.",
      "ziele": "Die Studierenden besitzen Grundlagenwissen über künstliche Intelligenz basierend auf dem international bekanntesten KI-Lehrbuch von Russel/Norvig.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Zell",
      "literatur": "Skriptum zur Vorlesung, und Lehrbuch S. Russel, P. Norvig: Artifi- cial Intelligence: A Modern Approach, 3rd Edition, Pearson",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3143",
      "titel": "Bildverarbeitung",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "U. a. werden folgende Themen behandelt: Fourierreihen, Fouriertransformation, Eigenschaften der Fouriertransformation, Diskrete Fouriertransformation, Abtastung und Aliasing, Lineare Operationen, PSF, LSI- Systeme, FIRund IIR-Filter, Bildrekonstruktion (Wiener Filter), Multiskalenrepräsentation, Wavelets, Kantendetektion, Segmentierung, Bildzuordnung, Cross-Correlation, morphologische Operationen",
      "ziele": "Die Studierenden kennen die mathematischen Grundlagen der Bildverarbeitung und wissen, welche Algorithmen für die grundlegenden Aufgaben bei der Bildverarbeitung existieren und wie diese angewandt werden. In den Übungen haben die Studierenden gelernt, ihre theoretischen Kenntnisse zur Lösung konkreter Probleme aus der Bildverarbeitung anzuwenden und entsprechende Algorithmen zu implementieren.",
      "voraussetzungen": "INFM1010 Mathematik für Informatik 1: Analysis , INFM1020 Mathematik für Informatik 2: Lineare Algebra , INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung",
      "dozent": "Schilling",
      "literatur": "Es soll entweder (INFM1110 oder INFM1120) und (INFM1010 oder INFM1020) bestanden worden sein.",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3351",
      "titel": "Grundlagen der Robotik",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Englisch",
      "pruefung": "Klausur (mündliche Prüfung bei geringer Teilnehmeranzahl)",
      "inhalt": "Das Modul Grundlagen der Robotik konzentriert sich insbesondere auf stationäre Roboter (Manipulatoren). Einführung, Ziele und Einsatzgebiete von Robotern, Raumkoordinaten und Transformationen, Manipulator-Kinematik, Inverse Manipulator-Kinematik, Geschwindigkeiten und statische Kräfte, Manipulatordynamik",
      "ziele": "Ziel dieses Moduls ist, Grundlagenwissen über Robotik zu vermitteln. Die Studierenden lernen Methoden zur Beschreibung der Kinematik von Robotern und zur Lösung von Aufgaben zur Positions- und Pfadplanung. Sie lernen Einsatzgebiete, Antriebsformen und Charakteristika von Industrierobotern kennen und können dies auf reale Probleme anwenden.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Zell",
      "literatur": "Skriptum Robotik 1 (Zell) nach Lehrbuch, weitere Lit. wird zu Beginn der Vorlesung bekanntgegeben",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3172",
      "titel": "Grundlagen der Webentwicklung",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Protokolle und Netzwerktechnik für das Web, der ApacheWebserver im Detail, Content-Management-Systeme, insb. TYPO3, Frameworks, insbesondere ZEND-Framework, CakePHP und Ruby on Rails, Software-Architekturen für das Web, Klassifikation von Web-Applikationen, Webservices, Mediaformate für das Web (MIME), Performance-Test für Web-Applikationen, Projektmanagement für das WWW, Techniken des Internet 2: Shibboleth und mehr, Web-Sicherheit, rechtliche Aspekte im Netz: TKG, DSG, TMG und mehr",
      "ziele": "Die Studierenden verstehen die Prinzipien des Webs und wissen, verschiedene Techniken zu beurteilen. Sie verstehen die Arbeitsweise des Web-Servers und können selbständig Web-Server installieren, konfigurieren und betreiben. Sie kennen verschiedene Software-Architekturen im Web und können einfache Anwendungen nach diesen umsetzen. Die Arbeitsweise und Einsatzbereiche verschiedener Frameworks und Content-Management-Systeme ist den Studierenden aktiv vertraut. Darüber hinaus kennt der Studierende die aktuellen rechtlichen Rahmenbedingungen für den Betrieb eines Web-Servers und ist in der Lage, die wichtigsten Sicherheitslücken zu erkennen und zu schließen.",
      "voraussetzungen": "MEINFM3171 Einführung in Internettechnologien (Grundlagen der Internettechnologien)",
      "dozent": "Walter",
      "literatur": "Walter, T.: Kompendium derWeb-Programmierung, Springer 2007 Kappel, G., Pröll, B., Reich, S., Retschitzegger: Web-Engineering, dpunkt 2004",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3331",
      "titel": "Grundlagen des Internets",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Deutsch",
      "pruefung": "Klausur, Übungsleistungen können als Bonuspunkte in die Klausur einfließen",
      "inhalt": "Protokolle und Standards, OSI-Modell, Vermittlungsprinzipien: Bridges, Switches, Routers; IP-Adressen, IPv4/IPv6, ARP/NDP, DHCP, ICMP, Intradomain- und Interdomain-Routing, Fluss- und Lastkontrolle, Transportprotokolle, UDP, TCP, Sockets, Domain Name System (DNS), Anwendungsprotokolle, Firewalls, Network Address Translation (NAT), Peer-to-Peer Networking",
      "ziele": "Die Studierenden haben ein grundlegendes Verständnis über das Funktionsprinzip und die Organisation des Internets. Sie können wichtige Begriffe des Fachgebiets richtig anwenden und haben eine fundierte Grundlage für ein vertiefendes Studium im Bereich Kommunikationsnetze.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Menth",
      "literatur": "Kurose, Ross: “Computer Networking: A Top-Down Approach” O. Bonaventure: “Computer Networking : Principles, Protocols and Practice”, http://inl.info.ucl.ac.be/cnp3",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3460",
      "titel": "Information Theory",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Englisch",
      "pruefung": "Regelmäßige Übungen (mit Lösungen im Anschluss), aber keine kontinuierliche Bewertung. Eine schriftliche Abschlussprüfung. Die Prüfung findet in geschlossener Form statt, Sie können jedoch ein doppelseitiges A4-Blatt mit Notizen mitnehmen.",
      "inhalt": "Wie der Name schon sagt, handelt es sich um einen Theoriekurs, der im Wesentlichen mathematisch ist, wenn auch stark durch praktische Probleme der Informationsverarbeitung motiviert. Es wird keine Programmieraufgaben geben. Wir werden einige Beweise (in den Vorlesungen) erbringen, insbesondere die Theoreme der Quellen- und Kanalcodierung beweisen. In einigen Übungen und Prüfungsfragen werden Sie (einfache) Beweise erbringen müssen. Sie müssen in der Lage sein, eine Reihe von mathematischen Berechnungen von Hand durchzuführen.",
      "ziele": "Das allgemeine Ziel des Kurses ist es, die Grundlagen der Informationstheorie zu vermitteln. Konkret bedeutet dies die Theoreme der Quellen- und Kanalcodierung, die beschreiben, wie man Informationen komprimieren und übertragen kann. Wir werden auch einige der Verbindungen zwischen der Informationstheorie und dem maschinellen Lernen kennenlernen. Je nachdem, wie schnell ich arbeiten kann, werden wir uns auch mit der Kolmogorov-Komplexität (Informationstheorie für endliche Folgen) beschäftigen. Sie werden einige praktische Kompressionsverfahren (Huffman- und arithmetische Kodierung) und einfache Blockcodes für die Kanalcodierung kennen lernen. Sie werden einige der Ideen der Bayes&#x27;schen Inferenz kennenlernen. Dabei lernen Sie einige der Kernbegriffe der Informationstheorie kennen, darunter die mathematische Definition von Information, die Entropie, die relative Entropie und die asymptotische Äquipartitionseigenschaft, die mit dem Gesetz der großen Zahlen zusammenhängt und mit der wir die wichtigsten Theoreme des Kurses beweisen werden.",
      "voraussetzungen": "INF2021 (BIOINFM2021) Mathematik für Informatik 4: Stochastik (Stochastik)",
      "dozent": "Williamson",
      "literatur": "Text: David McKay, Information Theory, Inference and learning Algorithms. Freely available online at https://www.inference.org.uk/itprnn/book.pdf -- Pre-requisite : Probability theory – you need to know (elementary) probability theory. By “elementary” I do not mean having only an elementary understanding, but rather the style of probability theory usually learned by engineers – i.e. without the measure-theoretic machinery. If you have passed the course &#x27;INF2021 Stochastik&#x27; you should be fine. If you have not done it, but reckon you know the material anyway, I provide a self-administered test to help you judge your degree of preparedness.",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3164",
      "titel": "User Experience (früher User Interface Design)",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "User-centered Design, Analysemethoden, Prototyping, Usability Heuristiken, Heuristische Evaluation, Ästhetische Gestaltungsprinzipien, Durchführung und Auswertung von Nutzertests",
      "ziele": "Die Studierenden lernen Grundlagen des Interaction-Designs und können Entwurfsprozesse verstehen und anwenden. Im Fokus dieser Lehrveranstaltung steht eine benutzerzentrierte Sicht auf neue technologische Systeme. Die Studierenden kennen Methoden zur Problemanalyse und zum Erstellen von Prototypen, grundlegende ästhetische Prinzipien für den Entwurf von Nutzeroberflächen, und Umsetzungsmöglichkeiten mit Markup-Sprachen. Sie können heuristische Evaluationen und Nutzertests durchführen und auswerten.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Henze",
      "literatur": "-",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3144",
      "titel": "Bildverarbeitung",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Implementierung von Algorithmen aus dem Bereich der Bildverarbeitung.",
      "ziele": "Die Studierenden können selbständig Algorithmen zur Lösung einfacher Probleme auf der Gebiet der Bildverarbeitung planen und erstellen und dabei ihre theoretischen Kenntnisse anwenden.",
      "voraussetzungen": "MEINFM3143 Bildverarbeitung",
      "dozent": "Schilling",
      "literatur": "-",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3213",
      "titel": "Programmiertechniken",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Jedes Semester",
      "turnus": "J",
      "sprache": "Deutsch",
      "pruefung": "Abnahme des Praktikumsprojekts im Verlauf des Semesters, Präsentation und Ausarbeitung",
      "inhalt": "Das Ziel dieses Praktikums ist das Erlernen des praktischen Umgangs mit fortgeschrittenen Programmiertechniken, beispielsweise aus dem Bereich der funktionalen Programmierung oder der Compilertechnologie. Zu diesem Zweck wird im Rahmen des Praktikums eine größeres Projekt zum Erlernen der jeweiligen Programmiertechniken durchgeführt.",
      "ziele": "Die Studierenden sind in der Lage, die Komplexität eines mittelgroßen Programmierprojekts zu beherrschen. Sie sind in der Lage, fortgeschrittene Programmiertechniken in dem Themengebiet des Praktikums sinnvoll und zielgerichtet einzusetzen. Die Studierenden können den Stand ihres Projekts adäquat präsentieren und effektiv im Team arbeiten.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Ostermann",
      "literatur": "-",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2024",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3422",
      "titel": "Lambda-Kalkül und Kombinatorische Logik",
      "lehrformLang": "",
      "form": "",
      "cp": 6,
      "workload": {
        "gesamt": null,
        "kontakt": null,
        "sws": null,
        "selbst": null
      },
      "dauer": "",
      "turnusLang": "",
      "turnus": "U",
      "sprache": "",
      "pruefung": "",
      "inhalt": "",
      "ziele": "",
      "voraussetzungen": "",
      "dozent": "",
      "literatur": "",
      "zuletzt": "",
      "geplant": "",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3186",
      "titel": "Programmieren mit Abhängigen Typen",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Bewertung des Praktikumsergebnisses",
      "inhalt": "Typsysteme helfen Programmierern, Eigenschaften von Programmen über alle Ausführungen des Programms hinweg sicherzustellen. Je ausdrucksstärker das Typsystem ist, desto mehr Eigenschaften lassen sich auf diese Weise abdecken. Eine besonders ausdrucksstarke Klasse von Typsystemen sind solche mit abhängigen Typen. Bei diesen kann der Typ von Programmen von konkreten Laufzeitwerten abhängen. Das Programmieren in solchen Programmiersprachen erfordert theoretisches Wissen und vor allem praktische Erfahrung. Beides wird in diesem Praktikum vermittelt.",
      "ziele": "Die Studierenden wissen, was eine Programmiersprache mit abhängigen Typen ausmacht, welche zusätzliche Ausdrucksstärke auf der Typebene verfügbar ist und können diese praktisch in konkreten Programmen nutzen. Sie erkennen, welche Eigenschaften des Programms durch abhängige Typen sichergestellt werden können und welche Fehlerquellen vermieden werden können. Sie verstehen auch, welcher zusätzliche Aufwand dazu betrieben werden muss und können so eine informierte Entscheidung über die Nutzung einer Programmiersprache mit abhängigen Typen treffen.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung",
      "dozent": "Brachthäuser",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2023",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3146",
      "titel": "Computerspiele / Special Effects 1",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "Praktikum mit wechselnden Schwerpunkten: Implementierung von Computerspielen oder interaktiven 3D-Anwendungen, Verwendung spezieller VR/ARHardware, Programmierung von mobilen Grafikanwendungen, Umsetzung visueller Spezialeffekte in Animationen",
      "ziele": "Die Studierenden können selbständig in Gruppen ein Programmierprojekt planen und durchführen. Techniken zur Erstellung von interaktiven Anwendungen und Spielen und die Benutzung geeigneter Bibliotheken sind bekannt und eingeübt.",
      "voraussetzungen": "MEINFM3142 Graphische Datenverarbeitung",
      "dozent": "Lensch",
      "literatur": "Entwicklungsumgebung wird zur Verfügung gestellt",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3147",
      "titel": "Computerspiele/ Special Effects 2",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "Computerspiele / Special Effects 2: Praktikum mit wechselnden Schwerpunkten: Implementierung von Computerspielen oder interaktiven 3D-Anwendungen, Verwendung spezieller VR/ARHardware, Programmierung von mobilen Grafikanwendungen, Umsetzung visueller Spezialeffekte in Animationen",
      "ziele": "Computerspiele / Special Effects 2: Die Studierenden können selbständig in Gruppen ein Programmierprojekt planen und durchführen. Techniken zur Erstellung von interaktiven Anwendungen und Spielen und die Benutzung geeigneter Bibliotheken sind bekannt und eingeübt.",
      "voraussetzungen": "MEINFM3142 Graphische Datenverarbeitung",
      "dozent": "Lensch",
      "literatur": "Entwicklungsumgebung wird zur Verfügung gestellt",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3185",
      "titel": "C++-Programming",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Englisch",
      "pruefung": "Abnahme des praktischen Teils, gegebenenfalls schriftliche Prüfung",
      "inhalt": "Einführung in C++, Syntax und Semantik der imperativen und objektorientierten Sprachelemente von C++, Standardbibliotheken, Entwicklungsumgebungen, Entwicklung eigener Programme",
      "ziele": "Die Studierenden haben durch Übungen und anhand eines Programmierprojekts gelernt selbständig Programme zu entwerfen und zu implementieren. Sie kennen die Syntax und Semantik der Sprachen C++ und können diese anwenden.",
      "voraussetzungen": "INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung",
      "dozent": "Kohlbacher , Lensch",
      "literatur": "Wird im Kurs zur Verfügung gestellt.",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3152",
      "titel": "Grundlagen des Maschinellen Lernens",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Wird noch bekannt gegeben.",
      "inhalt": "Implementierung von Programmen mit Algorithmen aus dem Bereich des maschinellen Lernens.",
      "ziele": "Die Studierenden können selbständig (in kleinen Gruppen) Programme zur Lösung einfacher Probleme auf dem Gebiet des maschinellen Lernens planen und erstellen und dabei ihre theoretischen Kenntnisse anwenden.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Schilling",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2024",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3213a",
      "titel": "Implementierung von Programmiersprachen: Algorithm Design with Haskell",
      "lehrformLang": "",
      "form": "",
      "cp": 6,
      "workload": {
        "gesamt": null,
        "kontakt": null,
        "sws": null,
        "selbst": null
      },
      "dauer": "",
      "turnusLang": "",
      "turnus": "U",
      "sprache": "",
      "pruefung": "",
      "inhalt": "",
      "ziele": "",
      "voraussetzungen": "",
      "dozent": "",
      "literatur": "",
      "zuletzt": "",
      "geplant": "",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3332",
      "titel": "Internet-Praktikum I",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Deutsch",
      "pruefung": "Benotete Praktikumsversuche bestehend aus Theorie und Praxis mit abschließender Klausur oder mündlicher Prüfung",
      "inhalt": "Einführende Vorlesungseinheiten zu jedem Versuch, praktische Übungen zuhause zum Kennenlernen der Experimentierumgebung (Linux-Kommandozeile, Basisbefehle für Netzadministration, Mitschneiden und Analyse von Verkehr) sowie benotete Präsenzübungen im Experimentallabor zu folgenden Themen: Adressierung von Geräten im Internet, Routingprotokolle, DNS, Email, Datenübertragung mit TCP/UDP. Studierende lernen den praktischen Umgang mit zentralen Protokollen und Anwendungen des globalen Internets.",
      "ziele": "Die Studierenden vertiefen ihre praktischen Kenntnisse zu Kommunikationsnetzen wesentlich, insbesondere um praktische Aspekte. Sie können sich selbständig neues Wissen und Können aneignen und ihre Fähigkeiten zur Problemlösung auch in neuen und unvertrauten Kontexten anwenden. Sie lernen ihr Wissen in klarer und eindeutiger Weise zu kommunizieren und auf wissenschaftlichem Niveau auszutauschen.",
      "voraussetzungen": "INF3331 Grundlagen des Internets",
      "dozent": "Menth",
      "literatur": "Wird während des Praktikums zur Verfügung gestellt. / Will be handed out during the course.",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3213b",
      "titel": "Object Meets Function",
      "lehrformLang": "",
      "form": "",
      "cp": 6,
      "workload": {
        "gesamt": null,
        "kontakt": null,
        "sws": null,
        "selbst": null
      },
      "dauer": "",
      "turnusLang": "",
      "turnus": "U",
      "sprache": "",
      "pruefung": "",
      "inhalt": "",
      "ziele": "",
      "voraussetzungen": "",
      "dozent": "",
      "literatur": "",
      "zuletzt": "",
      "geplant": "",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3151",
      "titel": "Grundlagen des Maschinellen Lernens",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Deutsch und Englisch",
      "pruefung": "Klausur",
      "inhalt": "In diesem Modul werden grundlegende Prinzipien, mathematische Grundlagen und Algorithmen aus dem Bereich des maschinellen Lernens vermittelt. Themen sind u.a.: Verschiedene Lernprobleme und Ansätze zur Lösung, Grundprinzipien des statistischen Lernens, verschiedene Methoden zum überwachten Lernen (Klassifizierung und Regression) und unüberwachten Lernen (Clustering und Dimensionalitätsreduktion), Neuronale Netze und Deep Learning und ein Überblick über moderne Maschinelle Lernenmethoden.",
      "ziele": "Die Studierenden kennen grundlegende Prinzipien und Verfahren des maschinellen Lernens und wissen um deren prinzipiellen Grenzen. In den Übungen haben sie gelernt, kleine praktische Probleme mit den behandelten Verfahren zu lösen und entsprechende Algorithmen praktisch zu implementieren.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung , INFM2010 Mathematik für Informatik 3: Fortgeschrittene Themen",
      "dozent": "Martius",
      "literatur": "It is strongly recommended that students have passed the modules INFM1110, INFM1120 und INFM2010 in advance. Literature: &#x27;Introduction to Machine Learning&#x27;, 4th Edition, Ethem Alpaydin, MIT Press. Chapters 1-12 and 20. &#x27;Pattern Recognition and Machine Learning&#x27; by Christopher Bishop, https://www.microsoft.com/en-us/research/people/cmbishop/prml-book",
      "zuletzt": "Sommersemester 2022",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3145",
      "titel": "Wissenschaftliche Visualisierung",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Sommersemester",
      "turnus": "S",
      "sprache": "Englisch",
      "pruefung": "Mündliche Prüfung (bei großer Teilnehmerzahl Klausur)",
      "inhalt": "Die Fortschritte in der modernen Hochleistungsrechner- und Sensortechnologie führen zu immer größeren und komplexeren Daten in vielen Bereichen wie den (Lebens-)Wissenschaften, der Medizin, der Physik oder dem Ingenieurwesen. Interaktive Visualisierung ist oft ein entscheidender Schritt, um diese Daten zu analysieren. Die wissenschaftliche Visualisierung befasst sich mit der Darstellung von Daten, die eine räumliche Struktur (meist dreidimensional) aufweisen, z.B. medizinische Volumina aus CT- oder MRT-Scannern oder molekulare Strukturen. In dieser Vorlesung werden die Schritte der Visualisierungspipeline besprochen, die von den Eingabedaten bis zum endgültigen Bild oder der interaktiven Darstellung des Datensatzes führen. Dazu gehören Interpolation und Filterung, Mapping-Techniken sowie die Grundlagen der (Farb-)Wahrnehmung, Computergrafik/Rendering und Interaktion. Es werden Visualisierungsmethoden für verschiedene Arten von wissenschaftlichen Daten vorgestellt, darunter Teilchen, 3D-Skalarfelder (Volumen), Vektorfelder und Tensorfelder. Insbesondere wird die Anwendung dieser Methoden für die Visualisierung von biologischen sowie medizinischen Daten diskutiert. Methoden aus der Informationsvisualisierung (d.h. die Visualisierung abstrakter, nicht-räumlicher Daten) sind nicht Teil dieser Vorlesung, da diese in BIO4364 - Visualisierung biologischer Daten besprochen werden.",
      "ziele": "Die Studierenden - kennen die wichtigsten Konzepte der wissenschaftlichen Visualisierung (z.B. die grafische Darstellung verschiedener Arten von räumlichen Daten, Sampling, Interpolation) - kennen Visualisierungstechniken für wissenschaftliche Daten (z.B. Teilchen, 3D-Skalar-/Vektor-/Tenorfelder) - sind in der Lage, diese Techniken selbständig zu implementieren - wissen, wie man wissenschaftliche Visualisierung effektiv für die Analyse von biologischen und medizinischen Daten einsetzt",
      "voraussetzungen": "MEINFM3142 Graphische Datenverarbeitung",
      "dozent": "Krone",
      "literatur": "Lecture slides will be made available for download. C. Hansen, C. R. Johnson, “The Visualization Handbook,” Academic Press, 2005. H. Schumann, W. Müller, “Visualisierung: Grundlagen und allgemeine Methoden,” Springer, 2000. A. C. Telea, “Data Visualization: Principles and Practice,” A K Peters/CRC Press, 2nd edition, 2014. M. O. Ward, G. Grinstein, D. Keim, “Interactive Data Visualization: Foundations, Techniques, and Applications,” CRC Press, 2nd edition, 2015.",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2024",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3432",
      "titel": "Graphentheorie",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "In diesem Modul geht es um die Grundlagen in der Graphentheorie. Viele Probleme, insbesondere in der Algorithmik, können auf Graphen zurück geführt werden, daher spielt die Graphentheorie sowohl in der Mathematik als auch in der Informatik eine grosse Rolle. Die Studierenden lernen u.a. Themen wie Planarität, Färbbarkeit, Matchings, Faktoren und Hamiltonkreise kennen.",
      "ziele": "Die Studierenden kennen die wichtigsten Grundlagen in der Graphentheorie und können graphentheoretische Konzepte in geeignetem Kontext anwenden. Sie kennen grundlegende Begriffe wie Planarität, Teilgraphen, Faktoren, Graphenfärbarkeit. Sie sind in der Lage einfache Probleme auf Graphen zurückzuführen und diese selbstständig zu lösen.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Schlipf",
      "literatur": "Wird in der 1. Sitzung bekannt gegeben. / Will be announced in the first session.",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3183",
      "titel": "Implementierung von Programmiersprachen",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Bewertung des Praktikumsergebnisses",
      "inhalt": "Ziel dieses Praktikums ist die Implementierung eines Teils einer Programmiersprache. Dazu erarbeiten wir in der ersten Semesterhälfte verschiedene Aspekte der Implementierung einer Programmiersprache (z.B. syntaktische Prüfung, Typprüfung, Zwischenstufen (ANF, SSA, CPS), Kontrollfluss) mit Hilfe von Programmieraufgaben. Danach wählen die Studierenden in Absprache mit dem Veranstalter einen Teil einer existierenden oder selbst entworfenen Programmiersprache aus und implementieren diesen Teil in der zweiten Semesterhälfte.",
      "ziele": "Die Teilnehmer verstehen den Aufbau und die Funktionsweise von Compilern und verwandten Programmen zur Implementierung von Programmiersprachen und können diese mit Fachterminologie beschreiben. Sie sind in der Lage, eine einfache Programmiersprache selbstständig korrekt und fachgerecht zu implementieren und die gewählte Lösung darzustellen und zu begründen.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Brachthäuser",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2024",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3187",
      "titel": "Effective Programming with Effects",
      "lehrformLang": "Praktikum",
      "form": "P",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Englisch",
      "pruefung": "Bewertung des Praktikumsergebnisses",
      "inhalt": "Das Ziel dieses Praktikums ist es, das Programmieren mit algebraischen Effekten und Handlern kennenzulernen. Effektsysteme unterstützen die Entwicklung korrekter Software, Effektbehandlung ermöglicht eine sinnvolle Strukturierung von komplexem Kontrollfluss. Im Rahmen des Praktikums programmieren Studierende in der am Lehrstuhl entwickelten Forschungssprache \"Effekt\". Die erlernten Konzepte sind jedoch universell anwendbar und können zur Strukturierung von Programmen unabhängig von der verwendeten Programmiersprache genutzt werden und dienen so zum Beispiel als mentales Modell für verbreitete Bibliotheken wie \"React\" oder \"Pyro\". Der erste Teil des Semesters konzentriert sich auf das Verständnis der verschiedenen Aspekte von algebraischen Effekten und Handlern durch praktische Programmieraufgaben. Anschließend wählen die Studierenden in Absprache mit dem Veranstalter ein Thema aus und entwickeln im zweiten Teil des Semesters selbstständig ein Softwareprojekt, wobei sie ihr erworbenes Wissen in realistischen Szenarien anwenden. Wichtige Vorabinformation: Studierende, die dieses Praktikum belegen möchten, sollten folgende Veranstaltung erfolgreich absolviert haben: - INFM1110 Praktische Informatik 1: Deklarative Programmierung - INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung - INFM2111 Praktische Informatik 3: Software Engineering",
      "ziele": "Die Teilnehmer erhalten ein umfassendes Verständnis der theoretischen Grundlagen und praktischen Auswirkungen von Effekten und Handlern. Sie werden die Fähigkeit entwickeln, diese Konzepte effektiv zu nutzen, um Softwarelösungen zu entwerfen und zu implementieren. Darüber hinaus verbessern die Teilnehmer ihre Kommunikationsfähigkeiten, indem sie Lösungsansätze formulieren und sich an Diskussionen über die Anwendung und die Auswirkungen von Effekten und Handlern beteiligen.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Brachthäuser",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3132",
      "titel": "Tabular Database Systems",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "- Datenbanksysteme für Tabellendaten (Relationale Datenbanksysteme) - Praktische Arbeit mit dem Datenbanksystem DuckDB - Tabellendaten ausserhalb (CSV + Parquet) und innerhalb des Datenbanksystems (Column Storage + Kompression) - Datenbanksysteme und moderne Rechnerarchitektur - SQL-Grundlagen und Anfrageformulierung - Repräsentation nicht-tabellarischer Daten in Tabellen - Anfrageausführung und -optimierung - Transaktionen und Persistenz",
      "ziele": "Diese Vorlesung fokussiert die Grundlagen von Datenbanksystemen, die für die Verarbeitung von tabellarischen Daten konzipiert sind (Relationale Datenbanksysteme). Die Studierenden verstehen, wie das Tabellenmodell die Repräsentation vieler Formen von Daten ermöglicht und gleichzeitig eine sehr effiziente Implementation von Speicherung und Anfragen erlaubt. SQL wird den Studierenden als moderne und ausdrucksstarke Anfragesprache vermittelt. Während der gesamten Vorlesung kommt das Datenbanksystem DuckDB zum Einsatz. Die Studierenden lernen sowohl den breiten SQL-Dialekt als auch ausgewählte Internas von DuckDB kennen und können die praktischen Vorteile (und Defizite) dieses Systems einschätzen.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Grust",
      "literatur": "Hinweis: Die Unterrichtssprache ist deutsch; alle Materialien zu dieser Vorlesung sind auf Englisch. Teilnahmevoraussetzungen - empfohlen (aber optional): - Grundlegende Kenntnisse in Python - Grundlegende Kenntnisse in C oder C++ --- Note: This lecture will be taught in German; the materials will be in English. Prerequisites - recommended (but optional): - Basic knowledge in Python - Basic knowledge in C or C++",
      "zuletzt": "nicht bekannt",
      "geplant": "Sommersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3470",
      "titel": "Introduction to Quantum Computing",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": 180,
        "kontakt": 60,
        "sws": 4,
        "selbst": 120
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Englisch",
      "pruefung": "Written exam",
      "inhalt": "The lecture will cover the following topics: 1) Foundations of quantum information (qubits, entanglement, no-cloning), then the circuit model. 2) Quantum algorithms: Deutsch–Jozsa (quantum-enhanced oracle/query problem), Grover’s algorithm (quantum-enhanced database search), Shor’s algorithm (quantum-enhanced factorization). 3) Quantum complexity theory (BQP etc.). 4) Quantum errors, noise models, and quantum error correction. 5) NISQ (near-term) approaches and quantum machine learning primitives, and non-circuit model quantum computing (quantum adiabatic systems, measurement-based quantum computing). The lecture will be augmented with exercises in which we demonstrate concrete quantum software (e.g. Qiskit) to quickly evaluate and design quantum circuits. The exercises will consist to a large extent of practical programming.",
      "ziele": "-",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Krenn",
      "literatur": "No specific prerequisites",
      "zuletzt": "nicht bekannt",
      "geplant": "derzeit nicht geplant",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3433",
      "titel": "Kombinatorische Geometrie und Graphenzeichnen",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 6,
      "workload": {
        "gesamt": null,
        "kontakt": null,
        "sws": null,
        "selbst": null
      },
      "dauer": "",
      "turnusLang": "unregelmäßig",
      "turnus": "U",
      "sprache": "",
      "pruefung": "",
      "inhalt": "",
      "ziele": "",
      "voraussetzungen": "",
      "dozent": "",
      "literatur": "",
      "zuletzt": "",
      "geplant": "",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3614",
      "titel": "Linux für Fortgeschrittene",
      "lehrformLang": "",
      "form": "",
      "cp": 3,
      "workload": {
        "gesamt": null,
        "kontakt": null,
        "sws": null,
        "selbst": null
      },
      "dauer": "",
      "turnusLang": "",
      "turnus": "U",
      "sprache": "",
      "pruefung": "",
      "inhalt": "",
      "ziele": "",
      "voraussetzungen": "",
      "dozent": "",
      "literatur": "",
      "zuletzt": "",
      "geplant": "",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3184",
      "titel": "Einführung in Linux",
      "lehrformLang": "Vorlesung, Übung",
      "form": "VU",
      "cp": 3,
      "workload": {
        "gesamt": 90,
        "kontakt": 30,
        "sws": 2,
        "selbst": 60
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Themen sind u.a. eine kurze allgemeine Einführung in Linux, Hardware und Festplattenaufteilung, Arbeiten an der Konsole, Textprocessing, Prozessmanagement, Arbeiten mit Dateisystemen, Rechteverwaltung, Dokumentation, Administrative Tätigkeiten und Installieren von Software.",
      "ziele": "Die Studierenden kennen den grundlegenden Aufbau und Struktur eines Linux Betriebssystems. Sie sind in der Lage ein solches System effizient zu bedienen und zu administrieren. Durch die begleitenden Übungen vertiefen die Studierenden das in der Vorlesung vermittelte Wissen durch Anwendung auf konkrete Problemstellungen. Das selbstständige Arbeiten fördert die Eigenverantwortung und Kommunikationsfähigkeit der Studierenden.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Dozenten/Arbeitsgruppenleiter , Kockler",
      "literatur": "Steffen Wendzel, Johannes Plötner. Einstieg in Linux: Eine distributionsunabhängige Einführung. Galileo Press, 3. Auflage, 2007",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3333",
      "titel": "IT Service and Security Management",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 3,
      "workload": {
        "gesamt": 90,
        "kontakt": 30,
        "sws": 2,
        "selbst": 60
      },
      "dauer": "1 Semester",
      "turnusLang": "Unregelmäßig",
      "turnus": "U",
      "sprache": "Deutsch",
      "pruefung": "Klausur (mündliche Prüfung bei geringer Teilnehmeranzahl)",
      "inhalt": "IT Service Management umfasst alle Methoden und Maßnahmen zur zielgerichteten Steuerung von IT. Die Ziele für die IT entstammen dem unterstützten Business und die Unterstützung erfolgt in Form von IT-Services. Ein wesentlicher qualitativer Aspekt ist die Bereitstellung von IT Services mit einem erforderlichen Sicherheitsniveau. Durch die Verschmelzung von IT mit vielen anderen Bereichen in Unternehmen und im Alltag entstehen neue Herausforderungen und Chancen. In dieser Vorlesung werden die Methoden und Maßnahmen für ein IT Service Management behandelt und das notwendige organisatorische Wissen durch Anwendungsbeispiele im Bereich von Schnittstellen vermittelt. Der Grundpfeiler Informationssicherheitsmanagement wird mit den Bestandteilen IT-Sicherheit und Datenschutz sowohl methodisch, als auch praxisnah betrachtet. Die Inhalte sind: Methoden im IT Service Management, Schnittstellen im Bereich ITSM (methodisch und praktisch), Projektmanagement in der IT, Anforderungsmanagement, Portfolio-Management eines IT-Service-Providers, Informationssicherheitsmanagement, Datenschutz und Datensicherheit, Anwendungsbereiche der IT Security, Zertifizierungen, Normen und Gesetze",
      "ziele": "Die Studierenden besitzen grundlegende Kenntnisse von IT-Organisation, deren Aufbau, Abläufe sowie grundlegende Kenntnisse zu IT-Projekten und dem Thema Projektmanagement. Anhand etablierter Frameworks (ITIL) und Standards (ISO 20000) können die Studierenden komplexe IT-Servicestrukturen verstehen und managen. Dabei können sie die eingesetzten Prozesse beschreiben, steuern und weiterentwickeln.",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Menth",
      "literatur": "-",
      "zuletzt": "nicht bekannt",
      "geplant": "Wintersemester 2024",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3240",
      "titel": "Natural Language Processing (NLP): Praktische Einführung mit Python",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 3,
      "workload": {
        "gesamt": 90,
        "kontakt": 30,
        "sws": 2,
        "selbst": 60
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Übung, Abschlussprojekt",
      "inhalt": "Unter den Begriff der maschinellen Sprachverarbeitung (Natural Language Processing, NLP) fasst man die maschinelle Analyse und Generierung von natürlichen Sprachdaten. Zu den prominente NLP-Anwendungen zählen etwa Spracherkennung, Rechtschreib- und Grammatikkorrektur, maschinelle Übersetzung, Chatbots und Sprachassistenzsysteme. Diese Veranstaltung bietet eine Einführung in Grundbegriffe und -techniken aus den Teilbereichen der Wort- , Satz- und Textanalyse, z.B. Wort-Normalisierung, semantische Wortnetze, Tagging, Chunking, Parsing, Textklassifikation. Die Veranstaltung ist als praktische Einführung konzipiert und setzt sich aus Vorlesungen und Programmierübungen zusammen. Es werden keine linguistischen oder computerlinguistischen Kenntnisse vorausgesetzt; allgemeine Programmierkenntnisse müssen aber bereits vorhanden sein. Dies ist kein Programmierkurs! Die Veranstaltung richtet sich daher an fortgeschrittene Bachelorstudierende der Informatik.",
      "ziele": "Die Studierenden besitzen grundlegende Kenntnisse über allgemeine Konzepte, Ressourcen und Verfahren im Bereich der maschinellen Sprachverarbeitung (Natural Language Processing, NLP) und können diese in Form kleiner Programme praktisch umsetzen.",
      "voraussetzungen": "INFM1110 Praktische Informatik 1: Deklarative Programmierung , INFM1120 Praktische Informatik 2: Imperative und objektorientierte Programmierung",
      "dozent": "Lichte",
      "literatur": "-",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    },
    {
      "nr": "INF3339c",
      "titel": "Spezielle Kapitel der Praktischen Informatik: Compilerbau",
      "lehrformLang": "Vorlesung",
      "form": "VU",
      "cp": 3,
      "workload": {
        "gesamt": 90,
        "kontakt": 30,
        "sws": 2,
        "selbst": 60
      },
      "dauer": "1 Semester",
      "turnusLang": "Im Wintersemester",
      "turnus": "W",
      "sprache": "Deutsch",
      "pruefung": "Klausur",
      "inhalt": "Regelmäßig im Wintersemester wird in diesem Modul die Vorlesung \"Compilerbau\" angeboten: In der Vorlesung werden anwendungsnahe Konzepte und Techniken zu Programmiersprachen und Compilerbau vermittelt. Konkret werden zunächst die Phasen des Compilerbaus anhand eines Java-Compilers eingeführt. Als Implementierungstechnik wird die funktionale Programmiersprache Haskell verwendet. Dazu werden die notwendigen Grundlagen der funktionalen Programmierung aufbauend auf den Kenntnissen der Grundvorlesung vermittelt. Im 2. Teil der Lehrveranstaltung werden die Studierenden in Gruppenarbeit einen Mini-Java-Compiler mit den gelernten Techniken implementieren.",
      "ziele": "wird noch hinzugefügt",
      "voraussetzungen": "Es gibt keine besonderen Voraussetzungen.",
      "dozent": "Alle Dozenten , Plümicke",
      "literatur": "-",
      "zuletzt": "Wintersemester 2022",
      "geplant": "Wintersemester 2025",
      "alleBereiche": [
        "INFO-BASIS"
      ],
      "bereiche": [
        "FREI"
      ],
      "leistungen": [],
      "infoBasis": true
    }
  ];
  var alma = {
    "INF3339c": {
      "titel": "Spezielle Kapitel der Praktischen Informatik: Compilerbau",
      "gruppen": [
        {
          "name": "Spezielle Kapitel der Praktischen Informatik: Compilerbau - 1. Parallelgruppe",
          "termine": [
            {
              "tag": "Do",
              "von": "17:00",
              "bis": "19:00",
              "raum": "Hörsaal TTR2 (Cyber Valley Campus, MVL6)",
              "bemerkung": "",
              "start": "15.10.26",
              "ende": "04.02.27",
              "rhythmus": "wöchentlich"
            }
          ]
        }
      ]
    }
  };

  window.MODULE_DATEN = (window.MODULE_DATEN || []).concat(module);
  window.ALMA_DATEN = Object.assign(window.ALMA_DATEN || {}, alma);
})();
