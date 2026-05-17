const questions = [
  {
    "frage": "Welche Rolle übernimmt die Community-Psycholog*in laut Nastasi et al. (2000) in Phase 3 (Datenerhebung und Analyse)?",
    "a": "Facilitator – unterstützt das Team ohne Parteinahme",
    "b": "Moderator des Interpretations- und Diagnoseprozesses",
    "c": "Schlüsselfunktion bei der Beratung des Forschungsteams bzgl. Methodenauswahl, Datenerhebung und Datenanalyse",
    "d": "Change Agent – unterstützt Community-Mitglieder bei aktiver Partizipation",
    "richtig": "c",
    "begruendung": "In Phase 3 hat die CP eine Schlüsselfunktion bei der Beratung – nicht nur Moderation oder Facilitation. Klausurfalle: Option B beschreibt die Rolle in Phase 4, nicht Phase 3."
  },
  {
    "frage": "Was wird in Phase 3 laut Nastasi et al. (2000) als „Ist-Zustand” bezeichnet?",
    "a": "Die Planung zukünftiger Interventionen",
    "b": "Die Evaluation bereits durchgeführter Maßnahmen",
    "c": "Die Datensammlung unter Nutzung angemessener Methoden der empirischen Sozialforschung",
    "d": "Die Zusammenfassung der Ergebnisse für die Community",
    "richtig": "c",
    "begruendung": "Phase 3 erfasst den aktuellen Zustand der Community durch Datenerhebung. Klausurfalle: Evaluation gehört zu Phase 6, Interventionsplanung zu Phase 5."
  },
  {
    "frage": "Welche besonderen Techniken werden laut Vorlesung in der formativen Forschungsphase (Phase 3) eingesetzt?",
    "a": "Randomisierte Kontrollexperimente",
    "b": "Ethnografische Techniken zur Erfassung der Besonderheiten einer Community",
    "c": "Standardisierte Fragebögen mit geschlossenen Items",
    "d": "Regressionsanalysen und Faktorenanalysen",
    "richtig": "b",
    "begruendung": "Ethnografische Techniken (z.B. Beobachtung) erfassen community-spezifische Kontexte, die standardisierte Methoden nicht abbilden können. Klausurfalle: Standardisierte Fragebögen sind quantitative Methoden – typisch für Phase 3, aber nicht das Besondere der formativen Phase."
  },
  {
    "frage": "Was beschreibt der Full-Cycle-Ansatz laut Vorlesung?",
    "a": "Einen linearen Forschungsablauf von Theorie zur Praxis",
    "b": "Das Wechselspiel zwischen Feldbeobachtung, Theorie und Experiment mit gegenseitiger Rückkopplung",
    "c": "Einen zyklischen Evaluationsprozess nach Abschluss einer Intervention",
    "d": "Die Abfolge der sechs Forschungsphasen nach Nastasi et al.",
    "richtig": "b",
    "begruendung": "Der Full-Cycle-Ansatz zeigt das iterative Wechselspiel der drei Elemente – keine lineare Abfolge. Klausurfalle: Option D beschreibt das Phasenmodell, nicht den Full-Cycle-Ansatz."
  },
  {
    "frage": "Welche Funktion hat die Feldbeobachtung im Full-Cycle-Ansatz laut Vorlesung?",
    "a": "Sie verifiziert theoretische Annahmen im Labor",
    "b": "Sie bestimmt, ob ein Effekt im natürlichen Setting vorliegt",
    "c": "Sie ersetzt das Experiment bei fehlenden Ressourcen",
    "d": "Sie leitet direkt Handlungsempfehlungen ab",
    "richtig": "b",
    "begruendung": "Feldbeobachtung prüft, ob ein Phänomen in der Realität existiert – das ist ihr spezifischer Beitrag im Full-Cycle. Klausurfalle: Verifizierung ist Aufgabe des Experiments, nicht der Feldbeobachtung."
  },
  {
    "frage": "Welche Funktion hat das Experiment im Full-Cycle-Ansatz laut Vorlesung?",
    "a": "Den Ist-Zustand einer Community zu erfassen",
    "b": "Ethnografische Beobachtungen durchzuführen",
    "c": "Das Vorliegen des Effektes und die zugrundeliegenden Prozesse zu verifizieren",
    "d": "Handlungsempfehlungen für die Community abzuleiten",
    "richtig": "c",
    "begruendung": "Das Experiment verifiziert sowohl den Effekt als auch die zugrundeliegenden Prozesse – das ist seine spezifische Rolle. Klausurfalle: Den Ist-Zustand erfassen ist Aufgabe der Feldbeobachtung in Phase 3."
  },
  {
    "frage": "Was ist laut Vorlesung das Ziel quantitativer Methoden?",
    "a": "Exploration eines unbekannten Gegenstandes",
    "b": "Erfassung individueller Erfahrungen und Perspektiven",
    "c": "Messung von Merkmalsausprägungen",
    "d": "Entwicklung neuer Theorien aus dem Feld heraus",
    "richtig": "c",
    "begruendung": "Quantitativ = Messen. Qualitativ = Explorieren. Diese Unterscheidung ist grundlegend. Klausurfalle: Option A beschreibt das Ziel qualitativer Methoden – eine klassische Verwechslung."
  },
  {
    "frage": "Was ist laut Vorlesung das Ziel qualitativer Methoden?",
    "a": "Exploration eines Gegenstandes",
    "b": "Messung von Merkmalsausprägungen mit hohem Standardisierungsgrad",
    "c": "Replizierbarkeit und Verallgemeinerbarkeit",
    "d": "Statistische Überprüfung von Hypothesen",
    "richtig": "a",
    "begruendung": "Qualitativ = explorativ, offen, flexibel. Klausurfalle: Replizierbarkeit und Verallgemeinerbarkeit sind Vorteile quantitativer Methoden."
  },
  {
    "frage": "Welche der folgenden Methoden werden laut Vorlesung explizit den qualitativen Methoden zugeordnet?",
    "a": "Standardisierte Fragebögen und Experimente",
    "b": "Fokusgruppen und Photovoice",
    "c": "Regressionsanalysen und Faktorenanalysen",
    "d": "Längsschnittstudien und RCTs",
    "richtig": "b",
    "begruendung": "Fokusgruppen und Photovoice sind die beiden in der Vorlesung explizit genannten qualitativen Spezialformen. Klausurfalle: RCTs (Randomized Controlled Trials) sind quantitative Methoden."
  },
  {
    "frage": "Was ist laut Vorlesung die Methode Photovoice und wann wird sie besonders eingesetzt?",
    "a": "Eine standardisierte Beobachtungsmethode für Laborsettings",
    "b": "Eine Methode die über Bilder statt Sprache arbeitet und besonders bei sprachlichen Barrieren geeignet ist",
    "c": "Eine quantitative Methode zur Messung von Einstellungen",
    "d": "Ein Interviewverfahren für Einzelpersonen",
    "richtig": "b",
    "begruendung": "Photovoice nutzt Fotografie als Kommunikationsmittel – besonders wertvoll wenn Sprachbarrieren bestehen. In der Vorlesung: Geflüchtete fotografierten Zugehörigkeit/Nicht-Zugehörigkeit. Klausurfalle: Es ist keine Einzelmethode – Gruppenauswertung der Fotos ist ein zentrales Element."
  },
  {
    "frage": "Was sind laut Vorlesung (Mietzel, 2008) Vorteile qualitativer Methoden?",
    "a": "Größere Objektivität, Verallgemeinerung, Replizierbarkeit",
    "b": "Offenheit und Flexibilität ermöglichen Exploration, Betrachtung des Einzelfalls, tieferer Informationsgehalt",
    "c": "Hoher Standardisierungsgrad, geschlossene Items, statistische Auswertbarkeit",
    "d": "Keine Flexibilität während der Untersuchung, Antwortrahmen vorgegeben",
    "richtig": "b",
    "begruendung": "Die drei Vorteile qualitativer Methoden aus der Tabelle: Offenheit/Flexibilität, Einzelfallbetrachtung, tieferer Informationsgehalt. Klausurfalle: Option D beschreibt Nachteile quantitativer Methoden."
  },
  {
    "frage": "Was sind laut Vorlesung (Mietzel, 2008) Nachteile qualitativer Methoden?",
    "a": "Sozialer Kontext kaum berücksichtigt, Antwortrahmen vorgegeben",
    "b": "Kleine Zahl von Untersuchungspersonen, zeit- und kostenintensiv, keine Verallgemeinerung",
    "c": "Keine Flexibilität, hoher Standardisierungsgrad",
    "d": "Geringe Replizierbarkeit ist ein Vorteil, keine Objektivität ist ein Nachteil",
    "richtig": "b",
    "begruendung": "Die drei Nachteile qualitativer Methoden aus der Tabelle: kleine N, zeit-/kostenintensiv, keine Verallgemeinerung. Klausurfalle: „Sozialer Kontext kaum berücksichtigt” ist ein Nachteil quantitativer Methoden."
  },
  {
    "frage": "Was sind laut Vorlesung (Mietzel, 2008) Vorteile quantitativer Methoden?",
    "a": "Tieferer Informationsgehalt, Betrachtung des Einzelfalls",
    "b": "Größere Objektivität und Vergleichbarkeit, Verallgemeinerung möglich, Replizierbarkeit",
    "c": "Offenheit und Flexibilität, keine Standardisierung",
    "d": "Kleine Stichproben, Exploration unbekannter Bereiche",
    "richtig": "b",
    "begruendung": "Die drei Vorteile quantitativer Methoden: Objektivität/Vergleichbarkeit, Verallgemeinerung, Replizierbarkeit. Klausurfalle: Tieferer Informationsgehalt ist ein Vorteil qualitativer Methoden."
  },
  {
    "frage": "Was sind laut Vorlesung (Mietzel, 2008) Nachteile quantitativer Methoden?",
    "a": "Kleine Stichproben, keine Verallgemeinerung, zeit- und kostenintensiv",
    "b": "Sozialer Kontext kaum berücksichtigt, Antwortrahmen vorgegeben, keine Flexibilität während der Untersuchung",
    "c": "Tieferer Informationsgehalt, Betrachtung des Einzelfalls",
    "d": "Offenheit und Flexibilität ermöglichen Exploration",
    "richtig": "b",
    "begruendung": "Die drei Nachteile quantitativer Methoden: sozialer Kontext kaum berücksichtigt, vorgegebener Antwortrahmen, keine Flexibilität. Klausurfalle: Optionen C und D beschreiben Vorteile qualitativer Methoden."
  },
  {
    "frage": "Als was wird Mixed-Methods laut Johnson & Onwuegbuzie (2004) bezeichnet?",
    "a": "Als Unterform qualitativer Forschung",
    "b": "Als veraltetes Forschungsparadigma",
    "c": "Als drittes Forschungsparadigma neben qualitativer und quantitativer Forschung",
    "d": "Als rein explorative Methode",
    "richtig": "c",
    "begruendung": "Mixed-Methods ist ein eigenständiges drittes Paradigma – nicht nur eine Kombination. Klausurfalle: Option A reduziert Mixed-Methods auf Qualitatives – das ist falsch."
  },
  {
    "frage": "Was charakterisiert das Sequentielle Exploratorische Design im Mixed-Methods-Ansatz laut Vorlesung?",
    "a": "Zuerst QUAN, dann QUAL – QUAN steht im Fokus",
    "b": "Zuerst QUAL, dann QUAN – QUAL steht im Fokus, zur Erforschung unbekannter Bereiche",
    "c": "QUAN und QUAL finden gleichzeitig statt – beide von gleicher Bedeutung",
    "d": "Zuerst QUAN, dann QUAL – zur Erforschung von Wirkmechanismen",
    "richtig": "b",
    "begruendung": "Exploratorisch = erst qualitativ erkunden, dann quantitativ prüfen. Klausurfalle: Option D beschreibt das Explanatorische Design (QUAN zuerst)."
  },
  {
    "frage": "Wann ist das Sequentielle Explanatorische Design laut Vorlesung besonders nützlich?",
    "a": "Wenn ein unbekanntes Forschungsfeld erstmals erkundet wird",
    "b": "Bei unerwarteten quantitativen Ergebnissen und zur Erforschung von Wirkmechanismen nach Interventionen",
    "c": "Wenn beide Methoden gleichzeitig eingesetzt werden sollen",
    "d": "Wenn ausschließlich qualitative Daten vorliegen",
    "richtig": "b",
    "begruendung": "Explanatorisch = QUAN zuerst, dann QUAL zur Erklärung. Besonders nützlich wenn quantitative Ergebnisse überraschend sind oder Wirkmechanismen verstanden werden sollen. Klausurfalle: Option A beschreibt den Einsatz des exploratorischen Designs."
  },
  {
    "frage": "Was ist das Ziel des gleichzeitigen Triangulations-Designs laut Vorlesung?",
    "a": "QUAL soll die Ergebnisse von QUAN erklären",
    "b": "QUAN soll auf QUAL aufbauen",
    "c": "Vergleich der Ergebnisse verschiedener Methoden – beide von gleicher Bedeutung",
    "d": "Schnellstmögliche Datenerhebung durch Parallelisierung",
    "richtig": "c",
    "begruendung": "Triangulation = gleichzeitig, gleichwertig, Vergleich der Ergebnisse. Klausurfalle: Option A beschreibt das explanatorische Design."
  },
  {
    "frage": "Welche drei Eigenschaften von Mixed-Methods-Ansätzen machen sie laut Campbell, Shaw & Gregory (2017) besonders geeignet für die Community Psychology?",
    "a": "Schnelligkeit, Kosteneffizienz, Standardisierung",
    "b": "Förderung interdisziplinärer Forschung, Erfassung von Kontexten und Diversität, Überschreitung der Individualebene",
    "c": "Hohe interne Validität, Replizierbarkeit, statistische Power",
    "d": "Einfache Auswertung, geringe Kosten, universelle Anwendbarkeit",
    "richtig": "b",
    "begruendung": "Diese drei Eigenschaften verbinden Mixed-Methods direkt mit den Werten der Community Psychology. Klausurfalle: Hohe interne Validität ist eher ein Vorteil experimenteller Designs, nicht von Mixed-Methods."
  },
  {
    "frage": "Können Mixed-Methods-Prozesse laut Vorlesung auch zirkulär ablaufen?",
    "a": "Nein, sie verlaufen immer streng sequentiell",
    "b": "Nur beim Triangulations-Design",
    "c": "Ja, die Prozesse können zirkulär ablaufen",
    "d": "Nur wenn dies vorab im Forschungsplan festgelegt wurde",
    "richtig": "c",
    "begruendung": "Explizit auf Folie 9 vermerkt: „Prozesse können zirkulär ablaufen.” Klausurfalle: Die sequentiellen Designs implizieren keine strikte Einbahnstraße."
  },
  {
    "frage": "Was versteht man laut Vorlesung unter Multilevel Modeling (Mehrebenenanalyse)?",
    "a": "Eine qualitative Methode zur Analyse von Gruppeninterviews",
    "b": "Eine statistische Methode zur Erfassung kontextueller Effekte, bei der Personen und Settings auf verschiedenen Ebenen gleichzeitig berücksichtigt werden",
    "c": "Ein Verfahren zur Messung individueller Persönlichkeitsmerkmale",
    "d": "Ein Design zur Durchführung von Interventionen auf mehreren Ebenen gleichzeitig",
    "richtig": "b",
    "begruendung": "Multilevel Modeling erfasst die wechselseitige Beeinflussung von Personen und Settings auf verschiedenen Ebenen (z.B. Schüler*in – Klasse – Schule). Klausurfalle: Es ist eine statistische Analysemethode, kein Interventionsdesign."
  },
  {
    "frage": "Welches Beispiel für Analyseebenen wird laut Vorlesung im Schulkontext genannt?",
    "a": "Lehrerin (Level 1), Schülerin (Level 2), Eltern (Level 3)",
    "b": "Schüler*innen (Level 1), Klasse (Level 2), Schule (Level 3)",
    "c": "Individuum (Level 1), Gruppe (Level 2), Gesellschaft (Level 3)",
    "d": "Schule (Level 1), Gemeinde (Level 2), Staat (Level 3)",
    "richtig": "b",
    "begruendung": "Direkt aus Folie 12: Level 1 = Schüler*innen, Level 2 = Klasse, Level 3 = Schule. Klausurfalle: Die Reihenfolge ist entscheidend – das Individuum ist immer Level 1."
  },
  {
    "frage": "Warum sind laut Vorlesung nested designs (geschachtelte Designs) wertvoll?",
    "a": "Weil sie kostengünstiger sind als einfache Designs",
    "b": "Weil man mehr Information erhält wenn man Kontextebenen berücksichtigt statt nur Individuen zu befragen",
    "c": "Weil sie die Replizierbarkeit erhöhen",
    "d": "Weil sie keine ethnografischen Techniken benötigen",
    "richtig": "b",
    "begruendung": "Nicht alle Klassen und Schulen sind gleich – der Kontext liefert zusätzliche wertvolle Information. Klausurfalle: Replizierbarkeit ist ein Vorteil quantitativer Methoden, nicht spezifisch von Multilevel-Designs."
  },
  {
    "frage": "Was ist laut Vorlesung in Phase 4 (Datenzusammenfassung) besonders wichtig bei der Aufbereitung der Ergebnisse?",
    "a": "Möglichst technische und fachsprachliche Darstellung",
    "b": "Adressat*innenorientierte Aufbereitung, sodass Ergebnisse auch ohne Methodenausbildung verständlich sind",
    "c": "Ausschließlich schriftliche Berichte für Fachpublikum",
    "d": "Schnellstmögliche Weitergabe ohne Diskussion",
    "richtig": "b",
    "begruendung": "Die Ergebnisse müssen für alle Beteiligten verständlich aufbereitet werden – z.B. in Workshops. Klausurfalle: Fachsprache würde Community-Mitglieder ausschließen und widerspricht dem Partizipationsgedanken."
  },
  {
    "frage": "Welche Rolle übernimmt die CP laut Nastasi et al. (2000) in Phase 4?",
    "a": "Schlüsselfunktion bei der Methodenberatung",
    "b": "Facilitator ohne Parteinahme",
    "c": "Unterstützung bei der Datenpräsentation, Moderation des Interpretations- und Diagnoseprozesses, Unterstützung der Entwicklung von Handlungsempfehlungen",
    "d": "Change Agent zur Förderung aktiver Partizipation",
    "richtig": "c",
    "begruendung": "Phase 4 hat eine spezifische Rollenbeschreibung für die CP: Präsentation, Moderation UND Empfehlungsentwicklung. Klausurfalle: Option A beschreibt Phase 3, Option B beschreibt Phase 1."
  },
  {
    "frage": "Wofür werden die Ergebnisse aus Phase 4 laut Vorlesung genutzt?",
    "a": "Für die statistische Auswertung weiterer Datensätze",
    "b": "Um passende Inhalte und Techniken der geplanten Intervention abzuleiten",
    "c": "Für die Evaluation bereits abgeschlossener Maßnahmen",
    "d": "Für die Identifikation neuer Schlüsselfiguren",
    "richtig": "b",
    "begruendung": "Phase 4 schließt den Bogen zur Interventionsplanung: Ergebnisse → Handlungsempfehlungen → Interventionsinhalte. Klausurfalle: Evaluation kommt erst in Phase 6."
  },
  {
    "frage": "Was beschreibt laut Vorlesung den Unterschied zwischen Sequentiellem Exploratorischem und Sequentiellem Explanatorischem Design?",
    "a": "Beim exploratorischen Design werden beide Methoden gleichzeitig eingesetzt",
    "b": "Beim exploratorischen Design steht QUAL im Fokus (QUAL zuerst), beim explanatorischen steht QUAN im Fokus (QUAN zuerst)",
    "c": "Beim explanatorischen Design werden nur qualitative Methoden eingesetzt",
    "d": "Beim exploratorischen Design gibt es keine quantitative Phase",
    "richtig": "b",
    "begruendung": "Der Unterschied liegt im Fokus und der Reihenfolge: exploratorisch = QUAL→QUAN, explanatorisch = QUAN→QUAL. Klausurfalle: Option D ist falsch – beide Designs kombinieren beide Methoden."
  },
  {
    "frage": "Was nennt Campbell, Shaw & Gregory (2017) als besonderen Vorteil von Mixed-Methods-Designs?",
    "a": "Sie sind besonders kostengünstig und zeitsparend",
    "b": "Sie sind besonders geeignet für komplexe Phänomene in realen Settings, die mit einer einzigen Methode nicht vollständig erfasst werden könnten",
    "c": "Sie erhöhen die interne Validität gegenüber Experimenten",
    "d": "Sie ersetzen die Notwendigkeit von Längsschnittstudien",
    "richtig": "b",
    "begruendung": "Das direkte Zitat aus Folie 11: komplexe Phänomene in realen Settings können mit einer Methode allein kein vollständiges Bild liefern. Klausurfalle: Interne Validität ist eine Stärke experimenteller Designs, nicht von Mixed-Methods."
  },
  {
    "frage": "Was versteht man laut Vorlesung unter „Datenrückkopplung” in Phase 4?",
    "a": "Die statistische Überprüfung der erhobenen Daten",
    "b": "Die Rückspiegelung der aufbereiteten Ergebnisse an die beteiligten Interessensgruppen, z.B. in einem Workshop zur Ergebnisdiskussion",
    "c": "Die erneute Datenerhebung zur Überprüfung der Ergebnisse",
    "d": "Die Weitergabe der Rohdaten an externe Fachleute",
    "richtig": "b",
    "begruendung": "Datenrückkopplung bedeutet, die Ergebnisse verständlich an die Community zurückzuspielen – ein zentrales partizipatives Element. Klausurfalle: Es ist keine erneute Erhebung und keine statistische Prüfung."
  },
  {
    "frage": "Was sind Fokusgruppen laut Vorlesung und was ist ihre besondere Eignung?",
    "a": "Standardisierte Einzelinterviews mit hohem Strukturierungsgrad",
    "b": "Interviews mit kleineren Gruppen zu bestimmten Themen, angeleitet und moderiert, besonders geeignet zur Exploration gemeinschaftlicher Perspektiven",
    "c": "Quantitative Befragungen mit geschlossenen Items in Gruppenform",
    "d": "Statistische Auswertungsverfahren für Gruppenunterschiede",
    "richtig": "b",
    "begruendung": "Fokusgruppen sind moderierte Gruppeninterviews – qualitativ, explorativ, diskursiv. Das Beispiel aus der Vorlesung: Fokusgruppen mit geflüchteten jungen Menschen zu Identität und Diskriminierung. Klausurfalle: Sie sind kein quantitatives Instrument."
  },
  {
    "frage": "Welche Aufgabe übernimmt die CP laut Vorlesung beim Einsatz von Forschungsmethoden in Phase 3 zusätzlich zur Methodenberatung?",
    "a": "Die alleinige Durchführung aller Erhebungen",
    "b": "Die Schulung des Forschungsteams in der korrekten Durchführung der gewählten Methoden, damit Standards eingehalten werden",
    "c": "Die statistische Auswertung ohne Beteiligung des Teams",
    "d": "Die Auswahl der Stichprobe ohne Rücksprache mit Interessensgruppen",
    "richtig": "b",
    "begruendung": "Die CP schult das Team – z.B. wie ein Interview korrekt durchgeführt wird. Methodenstandards müssen eingehalten werden. Klausurfalle: Die CP macht nicht alles allein – das widerspräche dem partizipativen Ansatz."
  },
  {
    "frage": "Wie beschreibt die Vorlesung die wechselseitige Beeinflussung im Multilevel Modeling?",
    "a": "Nur das Setting beeinflusst die Personen, nicht umgekehrt",
    "b": "Nur Personen beeinflussen das Setting, nicht umgekehrt",
    "c": "Personen beeinflussen das Setting UND das Setting beeinflusst gleichzeitig die Personen",
    "d": "Personen und Setting sind voneinander unabhängig",
    "richtig": "c",
    "begruendung": "Die Wechselseitigkeit ist das Kernprinzip: Schülerinnen beeinflussen die Klassenkultur UND die Klasse beeinflusst die Schülerinnen. Klausurfalle: Einseitige Beschreibungen (nur eine Richtung) sind falsch."
  }
  ];