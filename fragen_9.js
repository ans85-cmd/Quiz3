const questions = [
  {
    "frage": "Was ist laut Balzer (2005) Evaluation/Evaluationsforschung?",
    "a": "Die statistische Auswertung von Programmdaten durch unabhängige Institutionen",
    "b": "Die Bewertung eines Gegenstands auf Grundlage sozialwissenschaftlich gewonnener Informationen von qualifizierten Personen",
    "c": "Die Planung und Durchführung von Interventionsmaßnahmen im Community-Kontext",
    "d": "Die Überprüfung wissenschaftlicher Hypothesen mittels experimenteller Designs",
    "richtig": "b",
    "begruendung": "Merke: Drei Kernelemente: Bewertung eines Gegenstands + sozialwissenschaftliche Methoden + qualifizierte Personen. Alle drei müssen zusammen kommen. „Statistische Auswertung” allein reicht nicht — das ist nur ein Methodenmittel."
  },
  {
    "frage": "Welche Funktion der Evaluation ist gemeint, wenn durch Evaluationsergebnisse entschieden wird, ob ein Programm weitergeführt, ausgeweitet oder eingestellt werden soll?",
    "a": "Erkenntnisfunktion",
    "b": "Optimierungsfunktion",
    "c": "Legitimationsfunktion",
    "d": "Entscheidungsfunktion",
    "richtig": "d",
    "begruendung": "Merke: Die Entscheidungsfunktion = Weiterführen oder Beenden? Die Legitimationsfunktion klingt ähnlich, bezieht sich aber auf die Rechtfertigung nach außen (z.B. gegenüber Geldgebern). Klausurfalle: Beide werden oft verwechselt."
  },
  {
    "frage": "Eine Evaluation soll sicherstellen, dass die erhobenen Informationen zuverlässig sind, die Berichterstattung unparteiisch erfolgt und das Vorgehen genau dokumentiert wird. Welchem Evaluationsstandard (DeGEval, 2016) entspricht das?",
    "a": "Fairness",
    "b": "Durchführbarkeit",
    "c": "Genauigkeit",
    "d": "Nützlichkeit",
    "richtig": "c",
    "begruendung": "Merke: Die vier Standards: Nützlichkeit, Genauigkeit, Durchführbarkeit, Fairness. Genauigkeit bedeutet zuverlässig, unparteiisch und dokumentiert. Eselsbrücke: N-G-D-F."
  },
  {
    "frage": "Was unterscheidet formative von summativer Evaluation?",
    "a": "Formative Evaluation wird von externen Personen durchgeführt, summative von internen",
    "b": "Formative Evaluation erhebt Zwischenergebnisse und ermöglicht laufende Anpassungen; summative bewertet abschließend die Wirksamkeit",
    "c": "Summative Evaluation findet vor Beginn einer Maßnahme statt, formative danach",
    "d": "Formative Evaluation ist quantitativ, summative qualitativ ausgerichtet",
    "richtig": "b",
    "begruendung": "Merke: Formativ = begleitend (während der Durchführung, Korrekturen möglich). Summativ = abschließend (Endergebnis). Klausurfalle: Intern/extern ist eine andere Dimension."
  },
  {
    "frage": "Ein externer Evaluator wird beauftragt, ein Programm zu bewerten. Welcher Vorteil ist mit externer Evaluation typischerweise verbunden?",
    "a": "Tiefere Kenntnis der organisationsinternen Abläufe",
    "b": "Geringere Kosten als bei interner Evaluation",
    "c": "Verringerte Gefahr einer verzerrten Perspektive durch Eigeninteressen",
    "d": "Höhere Akzeptanz der Ergebnisse bei den Programmbeteiligten",
    "richtig": "c",
    "begruendung": "Merke: Extern = mehr Objektivität, weniger Eigeninteresse. Nachteil: weniger Kontextwissen. Klausurfalle: Höhere Akzeptanz entsteht eher durch partizipative oder interne Ansätze."
  },
  {
    "frage": "Welche der folgenden Aussagen beschreibt eine Restriktion im Bereich Zeit bei Evaluationen (Bamberger et al., 2004)?",
    "a": "Kontrollgruppen können nicht identifiziert werden",
    "b": "Sensible Daten sind schwer zu erhalten",
    "c": "Evaluierende werden zu spät hinzugezogen und Baseline-Daten fehlen",
    "d": "Bestehende Datensätze sind nicht vergleichbar",
    "richtig": "c",
    "begruendung": "Merke: Zeitproblem = zu spät → keine Baseline-Daten. Andere Optionen gehören zur Kategorie Datenprobleme."
  },
  {
    "frage": "Warum ist es laut Vorlesung wichtig, die Evaluation bereits zu Beginn eines Projekts zu planen?",
    "a": "Weil externe Evaluatoren sonst keine Finanzierung erhalten",
    "b": "Weil nur so Baseline-Daten erhoben werden können, die einen Vorher-Nachher-Vergleich ermöglichen",
    "c": "Weil summative Evaluation nur vor Beginn der Maßnahme möglich ist",
    "d": "Weil die DeGEval-Standards einen Evaluationsplan als Pflichtdokument vorschreiben",
    "richtig": "b",
    "begruendung": "Merke: Baseline-Daten = Ausgangspunkt vor Intervention. Ohne diese kein echter Vorher-Nachher-Vergleich möglich."
  },
  {
    "frage": "Was ist die Rolle des/der Community-Psycholog*in in Phase 6 (Evaluation der Maßnahmen)?",
    "a": "Alleinige Durchführung der Evaluation ohne Beteiligung der Community",
    "b": "Unterstützung bei der Auswahl und Entwicklung von Evaluationsverfahren sowie Beratung von Schlüsselfiguren",
    "c": "Verfassen des Abschlussberichts und Entscheidung über Projektfortführung",
    "d": "Statistische Auswertung der Daten und Publikation der Ergebnisse",
    "richtig": "b",
    "begruendung": "Merke: Rolle ist beratend und unterstützend, nicht allein entscheidend. Community bleibt eingebunden."
  },
  {
    "frage": "Was versteht man unter indikatorgestützter Bewertung im Kontext von Evaluation?",
    "a": "Die Bewertung anhand von Zufallsstichproben aus der Bevölkerung",
    "b": "Die Ableitung relevanter Messkriterien aus dem Wirkmodell, um die Wirksamkeit der Maßnahme zu beurteilen",
    "c": "Die ausschließliche Nutzung standardisierter Fragebögen als Messinstrument",
    "d": "Die Bewertung durch eine unabhängige Expertenkommission anhand von Checklisten",
    "richtig": "b",
    "begruendung": "Merke: Indikatoren = messbare Merkmale aus dem Wirkmodell, die Zielerreichung anzeigen."
  },
  {
    "frage": "Evaluation in der Community Psychology dient laut Cook (2015) und Miller (2017) einem übergeordneten Ziel. Welchem?",
    "a": "Der Maximierung externer Fördermittel für Community-Projekte",
    "b": "Der Förderung sozialer Veränderung und sozialer Gerechtigkeit",
    "c": "Der Standardisierung von Interventionsprogrammen auf nationaler Ebene",
    "d": "Der wissenschaftlichen Publikation community-psychologischer Forschungsergebnisse",
    "richtig": "b",
    "begruendung": "Merke: Ziel ist soziale Veränderung und soziale Gerechtigkeit – zentrales Merkmal der Community Psychology."
  },
  {
    "frage": "Das Modell von Cousins & Whitmore (1998) beschreibt drei Dimensionen partizipativer Evaluation. Welche Dimension beschreibt, wer die Kontrolle über den Evaluationsprozess hat?",
    "a": "Dimension B — Auswahl der partizipierenden Interessensgruppen",
    "b": "Dimension C — Tiefe der Partizipation",
    "c": "Dimension A — Kontrolle des Evaluationsprozesses",
    "d": "Dimension D — Methodenwahl in der Evaluation",
    "richtig": "c",
    "begruendung": "Merke: Die drei Dimensionen: A = Kontrolle, B = Auswahl, C = Tiefe. Dimension D existiert nicht."
  },
  {
    "frage": "Auf Dimension C (Tiefe der Partizipation) des Modells von Cousins & Whitmore (1998) bildet Konsultation das eine Extrem. Was bildet das andere?",
    "a": "Vollständige Kontrolle durch externe Evaluierende",
    "b": "Tiefe/vollständige Partizipation der Community",
    "c": "Summative Fremdevaluation",
    "d": "Rein quantitative Datenerhebung",
    "richtig": "b",
    "begruendung": "Merke: Konsultation = minimale Beteiligung, volle Partizipation = maximale Beteiligung. Kontinuum ist prüfungsrelevant."
  },
  {
    "frage": "Was ist das zentrale Merkmal der Empowerment Evaluation nach Fetterman (2015)?",
    "a": "Eine externe Fachperson führt die Evaluation unabhängig von der Community durch",
    "b": "Die Community hat die Kontrolle über die Evaluation; Evaluierende sind „critical friends”",
    "c": "Die Evaluation folgt ausschließlich randomisierten Kontrollgruppendesigns",
    "d": "Empowerment Evaluation ist identisch mit summativer Fremdevaluation",
    "richtig": "b",
    "begruendung": "Merke: Empowerment Evaluation = Community kontrolliert, Evaluierende begleiten als „critical friends“."
  },
  {
    "frage": "Welcher Begriff beschreibt das Ziel der Empowerment Evaluation, Fähigkeiten und Kompetenzen innerhalb der Community aufzubauen?",
    "a": "Community Organizing",
    "b": "Capacity Building",
    "c": "Social Bridging",
    "d": "Partizipative Forschung",
    "richtig": "b",
    "begruendung": "Merke: Capacity Building = Aufbau von Fähigkeiten, um langfristig selbstständig handeln und evaluieren zu können."
  },
  {
    "frage": "Welcher Kritikpunkt wird gegenüber der Empowerment Evaluation vorgebracht?",
    "a": "Sie ist zu teuer und ressourcenintensiv für kleine Communities",
    "b": "Sie produziert keine verwertbaren Daten für die Wissenschaft",
    "c": "Es fehlt eine unabhängige externe Perspektive und empirische Belege für tatsächliches Empowerment sind rar",
    "d": "Sie kann nur in quantitativen Designs eingesetzt werden",
    "richtig": "c",
    "begruendung": "Merke: Kritik = fehlende externe Perspektive, eher Organisationsentwicklung, wenig empirische Evidenz."
  },
  {
    "frage": "Welche Aussage beschreibt ein Budget-Problem als Restriktion bei Evaluationen nach Bamberger et al. (2004)?",
    "a": "Evaluierende werden erst nach Beginn der Maßnahme einbezogen",
    "b": "Bestehende Daten beziehen sich nur auf bestimmte Bevölkerungsgruppen",
    "c": "Erforderliche Messinstrumente können aufgrund fehlender finanzieller Mittel nicht eingesetzt werden",
    "d": "Die Kontrollgruppe ist schwer erreichbar",
    "richtig": "c",
    "begruendung": "Merke: Budget = fehlende Ressourcen für Methoden oder Datenerhebung."
  },
  {
    "frage": "Worin besteht laut Vorlesung die besondere Herausforderung bei der Evaluation in Community Settings im Vergleich zu Laborstudien?",
    "a": "Community Settings erlauben keine Verwendung quantitativer Methoden",
    "b": "Wirkungen können viele verschiedene Ursachen haben und Bedingungen sind weniger kontrollierbar",
    "c": "In Community Settings dürfen keine Kontrollgruppen gebildet werden",
    "d": "Community-Projekte sind zu klein, um statistisch aussagekräftige Ergebnisse zu liefern",
    "richtig": "b",
    "begruendung": "Merke: Viele Störvariablen, geringe Kontrolle → erschwerte Kausalzuschreibung."
  },
  {
    "frage": "Evaluation in Community Settings sollte sich laut Green et al. (2013) an drei Kriterien orientieren. Welches ist KEIN solches Kriterium?",
    "a": "Orientierung an den Bedarfen der Nutzenden (Auftraggebende und Stakeholder)",
    "b": "Berücksichtigung verfügbarer Ressourcen",
    "c": "Orientierung an Kontext und Logik des Programms",
    "d": "Ausschluss qualitativer Methoden zugunsten standardisierter Verfahren",
    "richtig": "d",
    "begruendung": "Merke: Ausschluss qualitativer Methoden widerspricht dem community-psychologischen Ansatz."
  },
  {
    "frage": "Wofür steht die Legitimationsfunktion der Evaluation?",
    "a": "Für die Optimierung laufender Programme auf Basis von Zwischenergebnissen",
    "b": "Für die Förderung des Dialogs zwischen Programmbeteiligten und Betroffenen",
    "c": "Für die Rechtfertigung der Entwicklung und Durchführung einer Intervention nach außen, z.B. gegenüber Geldgebern",
    "d": "Für die wissenschaftliche Erkenntnisgewinnung über Programmeigenschaften",
    "richtig": "c",
    "begruendung": "Merke: Legitimation = Rechtfertigung nach außen (z.B. Fördermittel)."
  },
  {
    "frage": "Welche Methodenkompetenz gehört laut DeGEval (2008) zu den Anforderungen an Evaluierende?",
    "a": "Kenntnisse über Akkulturationsmodelle und interkulturelle Trainings",
    "b": "Ein breites Methodenrepertoire und die Fähigkeit, geeignete Methoden für spezifische Fragestellungen auszuwählen",
    "c": "Ausschließlich quantitative Statistikkenntnisse auf Masterniveau",
    "d": "Zertifizierung durch eine staatlich anerkannte Evaluationskommission",
    "richtig": "b",
    "begruendung": "Merke: Zentrale Kompetenz = breites Methodenwissen, nicht nur Statistik."
  },
  {
    "frage": "Warum kann es bei Empowerment Evaluation problematisch sein, dass keine unabhängige externe Perspektive eingenommen wird?",
    "a": "Weil externe Perspektiven nach DeGEval-Standards rechtlich vorgeschrieben sind",
    "b": "Weil Eigeninteressen (z.B. Fortführung des Programms) die Bewertung verzerren könnten",
    "c": "Weil die Community dadurch keinen Zugang zu wissenschaftlichen Methoden erhält",
    "d": "Weil externe Evaluierende immer kostengünstiger arbeiten als interne",
    "richtig": "b",
    "begruendung": "Merke: Eigeninteressen können zu Verzerrungen führen – klassisches Problem interner bzw. partizipativer Evaluation."
  },
  {
    "frage": "Welche Aussage zur Optimierungsfunktion von Evaluation ist korrekt?",
    "a": "Sie dient der Entscheidung, ob ein Programm weiterfinanziert werden soll",
    "b": "Sie zielt auf die Identifikation von Stärken und Schwächen einer Maßnahme sowie auf nicht intendierte Nebenwirkungen",
    "c": "Sie soll die Evaluation so durchführen, dass Kosten minimiert werden",
    "d": "Sie bezieht sich ausschließlich auf die Verbesserung der verwendeten Messinstrumente",
    "richtig": "b",
    "begruendung": "Merke: Optimierung = Stärken, Schwächen und Nebenwirkungen erkennen und verbessern."
  },
  {
    "frage": "Auf welcher Dimension des Partizipationsmodells von Cousins & Whitmore (1998) wird beschrieben, ob alle legitimen Interessensgruppen oder nur primäre Nutzende in die Evaluation einbezogen werden?",
    "a": "Dimension A — Kontrolle des Evaluationsprozesses",
    "b": "Dimension C — Tiefe der Partizipation",
    "c": "Dimension B — Auswahl der partizipierenden Interessensgruppen",
    "d": "Dimension D — Ressourcenverteilung in der Evaluation",
    "richtig": "c",
    "begruendung": "Merke: Dimension B = Wer nimmt teil (alle vs. primäre Nutzende). Dimension D existiert nicht."
  },
  {
    "frage": "Was bedeutet es, wenn eine Evaluation dem Standard der Fairness (DeGEval, 2016) entspricht?",
    "a": "Dass alle Beteiligten gleich viele Ressourcen für die Evaluation bereitstellen",
    "b": "Dass alle Evaluationskosten gerecht auf Auftraggeber und Community aufgeteilt werden",
    "c": "Dass verschiedene Perspektiven einbezogen, ethische Richtlinien beachtet und unparteilich agiert wird",
    "d": "Dass ausschließlich anonymisierte Daten erhoben werden dürfen",
    "richtig": "c",
    "begruendung": "Merke: Fairness = Perspektivenvielfalt, Unparteilichkeit und Einhaltung ethischer Richtlinien."
  },
  {
    "frage": "Warum kann die Akzeptanz und Nutzung von Evaluationsergebnissen durch partizipative Ansätze gefördert werden?",
    "a": "Weil partizipative Evaluationen zwingend zu positiveren Ergebnissen führen",
    "b": "Weil Beteiligte und Betroffene, die aktiv mitgewirkt haben, die Ergebnisse eher annehmen und umsetzen",
    "c": "Weil externe Evaluierende bei partizipativen Designs auf Honorar verzichten",
    "d": "Weil DeGEval-Standards die Nutzung von Ergebnissen gesetzlich vorschreiben",
    "richtig": "b",
    "begruendung": "Merke: Beteiligung erhöht Identifikation und damit Umsetzung der Ergebnisse."
  },
  {
    "frage": "Welche Funktion erfüllt Evaluation, wenn durch die Ergebnisse ein Dialog zwischen Auftraggebenden, Beteiligten und Betroffenen über Stärken und Schwächen eines Programms angestoßen wird?",
    "a": "Entscheidungsfunktion",
    "b": "Legitimationsfunktion",
    "c": "Lern- und Dialogfunktion",
    "d": "Erkenntnisfunktion",
    "richtig": "c",
    "begruendung": "Merke: Dialog ist das Schlüsselwort – Austausch zwischen Beteiligten steht im Fokus."
  },
  {
    "frage": "Warum sollte eine Evaluation laut Vorlesung auch nicht intendierte Nebenwirkungen im Blick behalten?",
    "a": "Weil DeGEval-Standards dies als Pflichtbestandteil jedes Evaluationsberichts vorschreiben",
    "b": "Weil nicht intendierte Effekte — positiv wie negativ — nur erkannt werden können, wenn gezielt danach gefragt wird",
    "c": "Weil negative Nebenwirkungen automatisch zur Einstellung des Programms führen müssen",
    "d": "Weil Nebenwirkungen ausschließlich bei pharmakologischen Interventionen relevant sind",
    "richtig": "b",
    "begruendung": "Merke: Nebenwirkungen erkennt man nur, wenn aktiv danach gesucht wird."
  },
  {
    "frage": "Was ist Pseudopartizipation und warum sollte sie vermieden werden?",
    "a": "Eine Evaluationsform, bei der ausschließlich quantitative Methoden eingesetzt werden",
    "b": "Eine Form scheinbarer Beteiligung, bei der Community-Mitglieder formal einbezogen werden, aber keinen echten Einfluss haben — was negative Auswirkungen auf Vertrauen und Zusammenarbeit haben kann",
    "c": "Eine externe Evaluation, die ohne Wissen der Community durchgeführt wird",
    "d": "Eine Evaluationsform, die ausschließlich in der Empowerment Evaluation vorkommt",
    "richtig": "b",
    "begruendung": "Merke: Pseudo = scheinbar. Kein echter Einfluss → Vertrauensverlust."
  },
  {
    "frage": "Welche Rolle spielt das Wirkmodell in der Evaluation (Phase 6)?",
    "a": "Das Wirkmodell wird erst nach Abschluss der Evaluation entwickelt, um die Ergebnisse zu interpretieren",
    "b": "Das Wirkmodell liefert die theoretische Grundlage für die Ableitung relevanter Indikatoren und sollte bereits zu Beginn des Projekts vorliegen",
    "c": "Das Wirkmodell ersetzt die Notwendigkeit einer Kontrollgruppe im Evaluationsdesign",
    "d": "Das Wirkmodell beschreibt ausschließlich die eingesetzten Messinstrumente",
    "richtig": "b",
    "begruendung": "Merke: Wirkmodell = Theorie der Veränderung → Grundlage für Indikatoren."
  },
  {
    "frage": "Warum ist die Bildung einer Kontrollgruppe in Community-Settings oft nicht umsetzbar?",
    "a": "Weil DeGEval-Standards den Einsatz von Kontrollgruppen im Feld untersagen",
    "b": "Weil alle von einem Problem Betroffenen häufig in das Programm aufgenommen werden und niemand für eine Wartebedingung zurückgehalten werden kann",
    "c": "Weil Kontrollgruppen ausschließlich in Laborstudien rechtlich zulässig sind",
    "d": "Weil Kontrollgruppen bei qualitativen Designs grundsätzlich nicht vorgesehen sind",
    "richtig": "b",
    "begruendung": "Merke: Praktisches und ethisches Problem – alle sollen Intervention erhalten."
  },
  {
    "frage": "Was wird unter einer Wartekontrollgruppe verstanden und warum gilt sie methodisch als Kompromiss im Feld?",
    "a": "Eine Gruppe, die dauerhaft keine Intervention erhält, um Langzeiteffekte zu messen",
    "b": "Eine Gruppe, die die Intervention erst zu einem späteren Zeitpunkt erhält — so erhalten alle letztlich Zugang, und ein temporärer Vergleich ist trotzdem möglich",
    "c": "Eine Kontrollgruppe, die nur an der Baselinemessung, nicht aber an der Nachbefragung teilnimmt",
    "d": "Eine externe Vergleichsgruppe aus einem anderen Community-Setting",
    "richtig": "b",
    "begruendung": "Merke: Wartekontrollgruppe = alle bekommen Intervention, aber zeitversetzt → ethischer Kompromiss mit Vergleichsmöglichkeit."
  }
  ];