const questions = [
{
  "frage": "Welche Aussage entspricht der Definition interkultureller Kompetenz nach Mazziotta et al. (2016)?",
  "a": "Sie ist eine genetisch verankerte Disposition, sich in fremden Kulturen schnell anzupassen.",
  "b": "Sie ist die Fähigkeit, möglichst viele Fremdsprachen zu beherrschen und Verhaltensregeln auswendig zu kennen.",
  "c": "Sie beschreibt ausschließlich die Fähigkeit, sich in beruflichen Auslandseinsätzen mit der jeweiligen Nationalkultur zu identifizieren.",
  "d": "Sie ist die Fähigkeit, die eigenen kulturell geprägten Denk- und Verhaltensweisen zu reflektieren, sensibel für interkulturelle Unterschiede zu sein und sich kulturangemessen und flexibel zu verhalten.",
  "richtig": "d",
  "begruendung": "Drei Bestandteile merken: Selbstreflexion, Sensibilität für Unterschiede, flexibles Verhalten. Klausurfalle: B klingt vernünftig, ist aber zu eng (Sprache ≠ Kompetenz)."
},
{
  "frage": "Welche Aussage zu den Modellen interkultureller Kompetenz ist korrekt?",
  "a": "Listenmodelle fassen Teilkompetenzen zu übergeordneten Dimensionen zusammen.",
  "b": "Strukturmodelle bestehen aus einer reinen Aufzählung von Teilkompetenzen ohne weitere Zuordnung.",
  "c": "Prozessuale Modelle (Bolten, 2006) verstehen interkulturelle Kompetenz als Zusammenspiel individueller, fachlicher, strategischer und sozialer Kompetenzen, die je nach Kontext neu zu definieren sind.",
  "d": "Alle drei Modelltypen wurden zugunsten eines einheitlichen, international anerkannten Modells aufgegeben.",
  "richtig": "c",
  "begruendung": "A und B vertauschen die Definitionen — Listenmodelle = Aufzählung, Strukturmodelle = Zuordnung zu Dimensionen. Klausurfalle: Es hat sich KEIN einheitliches Modell durchgesetzt, das Feld ist multidisziplinär."
},
{
  "frage": "Welche drei Dimensionen werden in Strukturmodellen häufig zur Klassifikation interkultureller Kompetenz herangezogen?",
  "a": "individuell – sozial – strategisch",
  "b": "affektiv – kognitiv – verhaltensbezogen",
  "c": "national – regional – global",
  "d": "fachlich – methodisch – persönlich",
  "richtig": "b",
  "begruendung": "Standardtriade: affektiv (Wertschätzung), kognitiv (Wissen), verhaltensbezogen (Problemlösung). Option A gehört zu Boltens prozessualem Modell — typischer Distraktor."
},
{
  "frage": "Was ist ein typisches Beispiel für eine AFFEKTIVE Komponente interkultureller Kompetenz?",
  "a": "Wertschätzung und Sensibilisierung",
  "b": "Wissen und Kenntnisse über eine fremde Kultur",
  "c": "Kulturspezifische Problemlöse- und Entscheidungstechniken",
  "d": "Fremdsprachenkenntnisse auf C1-Niveau",
  "richtig": "a",
  "begruendung": "Affektiv = Gefühle/Einstellungen. Kognitiv = Wissen. Verhaltensbezogen = konkrete Handlungstechniken. Fremdwort: affektiv kommt von 'Affekt' = Gefühl, Emotion."
},
{
  "frage": "Welches zentrale Ergebnis lieferte die Befragung von 172 Diversity-Trainer*innen?",
  "a": "Trainer*innen vermieden interaktive Methoden zugunsten reiner Wissensvermittlung.",
  "b": "Trainer*innen lehnten den Begriff der Diversity-Kompetenz vollständig ab.",
  "c": "Die impliziten Theorien der Trainer*innen bezogen sich überwiegend auf kognitive Kompetenzen.",
  "d": "Die impliziten Theorien und Trainingsinhalte bezogen sich überwiegend auf affektive Kompetenzen; kognitive und verhaltensbezogene Aspekte wurden seltener genannt.",
  "richtig": "d",
  "begruendung": "Trainer*innen fokussieren AFFEKTIVES, obwohl Meta-Analysen zeigen, dass KOGNITIVE Maßnahmen am wirksamsten sind → Forschungs-Praxis-Lücke. Fremdwort: implizit = unbewusst, nicht ausgesprochen."
},
{
  "frage": "Wie werden interkulturelle Trainings nach Mazziotta et al. (2016) definiert?",
  "a": "Unstrukturierte, zeitlich unbegrenzte Maßnahmen zur kulturellen Assimilation.",
  "b": "Strukturierte und zeitlich begrenzte Interventionen, die Personen darauf vorbereiten sollen, sich angemessen in kulturell diversen Situationen zu verhalten.",
  "c": "Langfristige Therapien zur Behandlung kulturbedingter Anpassungsstörungen.",
  "d": "Akademische Vorlesungsreihen ohne praktischen Anwendungsbezug.",
  "richtig": "b",
  "begruendung": "Drei Schlüsselwörter: STRUKTURIERT, ZEITLICH BEGRENZT, vorbereiten auf VERHALTEN. Klausurfalle: Assimilation ist explizit NICHT das Ziel."
},
{
  "frage": "Welches der folgenden ist KEIN typisches Ziel interkultureller Trainings?",
  "a": "Sensibilität für die eigene kulturelle Identität entwickeln",
  "b": "Vorurteile und Stereotype erkennen",
  "c": "Vollständige Assimilation an die Mehrheitskultur durchsetzen",
  "d": "Fähigkeit zur Perspektivübernahme erweitern",
  "richtig": "c",
  "begruendung": "Achtung: Frage umgekehrt formuliert ('KEIN'). Trainings zielen NICHT auf Assimilation, sondern auf flexibles, reflektiertes Verhalten. Bei 'KEIN'/'AUSSER'-Fragen immer doppelt prüfen."
},
{
  "frage": "Wie definiert Lott den Begriff 'Kultur'?",
  "a": "Als Lebenswelt einer sozialen Gruppe, gekennzeichnet durch gemeinsame Interpretationsmuster, Normen, Werte, Praktiken und Gewohnheiten auf Basis gemeinsamer Erfahrungen.",
  "b": "Als Nationalkultur eines Staates, genetisch weitergegeben.",
  "c": "Als statische, unveränderliche Eigenschaft eines Individuums.",
  "d": "Als rein politisches Konstrukt ohne psychologische Relevanz.",
  "richtig": "a",
  "begruendung": "Lott versteht Kultur BREIT — jede Person gehört gleichzeitig mehreren Kulturen an. Klausurfalle: Beschränkung auf Nationalkultur (B) ist typischer Distraktor."
},
{
  "frage": "Welche Aussage entspricht dem Kulturbegriff von Lott (2010)?",
  "a": "Jede Person gehört genau einer Kultur an, die durch ihre Herkunft determiniert ist.",
  "b": "Kulturzugehörigkeit ist nur im internationalen Kontext relevant.",
  "c": "Mehrfache kulturelle Zugehörigkeiten schließen sich gegenseitig aus.",
  "d": "Jede Person gehört gleichzeitig unterschiedlichen Kulturen an, z. B. einer ethnischen Gruppe, einem Geschlecht, einer Berufsgruppe oder einer Weltanschauung.",
  "richtig": "d",
  "begruendung": "Mehrfachzugehörigkeit ist zentral — je nach Kontext steht eine andere Zugehörigkeit im Vordergrund. A entspricht einem essentialistischen Kulturverständnis (Fremdwort: Essentialismus = Annahme einer festen 'Wesensnatur'), das Lott ablehnt."
},
{
  "frage": "In welcher Reihenfolge verläuft der idealtypische Ablauf eines interkulturellen Trainings nach Brislin & Yoshida (1984)?",
  "a": "Rollenspiele → Wissensaneignung → Bewusstwerdung → Verhalten",
  "b": "Verhalten → Reflexion → Wissen → Sensibilisierung",
  "c": "Bewusstwerdung kultureller Differenzen → Aneignung kulturspezifischen Wissens → Erfahrung emotionaler Herausforderungen in Rollenspielen → Lernen neuer Verhaltensweisen",
  "d": "Wissensvermittlung → Prüfung → Zertifikat → Follow-Up",
  "richtig": "c",
  "begruendung": "Merksatz: BEWUSSTSEIN → WISSEN → EMOTION → VERHALTEN. Die Reihenfolge ist NICHT beliebig — erst Sensibilisierung, dann Wissen, dann emotionales Erleben, dann neues Verhalten."
},
{
  "frage": "Welche Phase ist KEIN Bestandteil von Kolbs Lernzirkel (1984)?",
  "a": "Auswendiglernen kulturspezifischer Verhaltenscodes",
  "b": "Erfahrung durch Aktivität",
  "c": "Reflexion durch Beobachten, Vergleichen, Kontrastieren",
  "d": "Generalisierung durch Schlussfolgern und Anwenden von Prinzipien",
  "richtig": "a",
  "begruendung": "Kolbs Zyklus hat 4 Phasen: ERFAHRUNG → REFLEXION → GENERALISIERUNG → ANWENDUNG. Reines Auswendiglernen passt nicht zum erfahrungsbasierten Ansatz. Fremdwort: Generalisierung = aus konkreten Erfahrungen abstrakte Prinzipien ableiten."
},
{
  "frage": "Nach welchen zwei Dimensionen klassifiziert Bolten (2006) interkulturelle Trainings?",
  "a": "Dauer (kurz vs. lang) und Zielgruppe (Studierende vs. Berufstätige)",
  "b": "Inhalt (kulturübergreifend vs. kulturspezifisch) und Methode (didaktischer vs. erfahrungsbasierter Ansatz)",
  "c": "Sprache (Muttersprache vs. Fremdsprache) und Ort (Inland vs. Ausland)",
  "d": "Bezahlung (kostenfrei vs. kostenpflichtig) und Format (Präsenz vs. online)",
  "richtig": "b",
  "begruendung": "Die 2×2-Matrix ist klausurrelevant. Inhalt: kulturübergreifend = allgemeine Sensibilisierung, kulturspezifisch = eine bestimmte Kultur. Methode: didaktisch = Vorträge/Diskussionen, erfahrungsbasiert = Rollenspiele/Simulationen."
},
{
  "frage": "Ein bikultureller Workshop zur Kommunikation zwischen Deutschland und Japan gehört nach Bolten (2006) zu welchem Quadranten?",
  "a": "Kulturübergreifend / didaktisch",
  "b": "Kulturübergreifend / erfahrungsbasiert",
  "c": "Kulturspezifisch / didaktisch",
  "d": "Kulturspezifisch / erfahrungsbasiert",
  "richtig": "d",
  "begruendung": "Bikulturell = SPEZIFISCH zwei konkrete Kulturen. Workshop mit Interaktion = ERFAHRUNGSBASIERT. Klausurfalle: 'Workshop' klingt nach Lehrformat, ist aber erfahrungsbasiert. Merke: Vortrag = didaktisch, Rollenspiel = erfahrungsbasiert."
},
{
  "frage": "Welche Aussage zu kulturspezifischen vs. kulturübergreifenden Trainings ist korrekt?",
  "a": "Kulturspezifische Trainings vermitteln Kenntnisse über eine konkrete Zielkultur, kulturübergreifende sensibilisieren allgemein dafür, wie Kultur Erleben und Verhalten beeinflusst.",
  "b": "Kulturübergreifende Trainings sind grundsätzlich wirkungsloser als kulturspezifische.",
  "c": "Kulturspezifische Trainings verzichten vollständig auf Wissensvermittlung.",
  "d": "Beide Ansätze schließen sich aus und können nicht kombiniert werden.",
  "richtig": "a",
  "begruendung": "Wichtig: Die Ansätze KÖNNEN und SOLLEN kombiniert werden — auch innerhalb eines einzelnen Trainings. Klausurfalle: D klingt logisch, ist aber falsch."
},
{
  "frage": "Welches Feld wird im Studienmaterial als Einsatzgebiet für interkulturelle Trainings genannt?",
  "a": "Astronautentraining für interplanetare Missionen",
  "b": "Ausschließlich diplomatischer Dienst",
  "c": "Sportvereine und Freizeitorganisationen",
  "d": "Gesundheitswesen, Bildungskontexte, Polizeiarbeit, Flucht und Integration",
  "richtig": "d",
  "begruendung": "Die vier konkret genannten Einsatzgebiete bitte merken. Klausurfalle: Bei Aufzählungs-Fragen prüfen, ob die Auflistung VOLLSTÄNDIG dem Studienmaterial entspricht."
},
{
  "frage": "Bei welchen Ebenen setzen interkulturelle Trainings primär an?",
  "a": "Ausschließlich auf der Makrosystem-Ebene (Massenmedien, Regierungen).",
  "b": "Nur auf der Mikrosystem-Ebene (Familie, Freunde).",
  "c": "Primär beim Individuum (Kompetenzentwicklung) und zugleich bei übergeordneten Zielen wie dem Diversitätsklima in der Organisation; Rahmenbedingungen anderer Ebenen werden mitberücksichtigt.",
  "d": "Auf der Lokalitäten-Ebene, ohne Bezug zum Individuum.",
  "richtig": "c",
  "begruendung": "Bronfenbrenner-Modell (Mikro/Meso/Makro/Lokalität/Organisation). Trainings beginnen beim INDIVIDUUM, zielen aber auch auf die ORGANISATION (Diversitätsklima) und beachten den weiteren Kontext."
},
{
  "frage": "Welcher Faktor wird im Studienmaterial NICHT als Erfolgsfaktor für interkulturelle Trainings genannt?",
  "a": "Professionelle Konzeption, Durchführung und Evaluation",
  "b": "Eigenschaften der Trainer*innen und Teilnehmenden",
  "c": "Möglichst kostenintensive Materialien und externe Räumlichkeiten",
  "d": "Unterstützung des Trainingstransfers",
  "richtig": "c",
  "begruendung": "Kosten oder externe Räumlichkeiten sind KEINE genannten Erfolgsfaktoren. Wichtig sind hingegen: Bedarfsanalyse, Freiwilligkeit, Eigenschaften der Beteiligten, organisationale Unterstützung, Trainingstransfer."
},
{
  "frage": "Warum ist eine Bedarfsanalyse vor einem interkulturellen Training wichtig?",
  "a": "Damit das Training möglichst lang und kostspielig wird.",
  "b": "Damit ein zielgruppengerechtes Trainingskonzept entwickelt werden kann; ein an sich wirksames Training kann sein Ziel verfehlen, wenn es nicht zur Zielgruppe passt.",
  "c": "Damit nachgewiesen werden kann, dass kein Training notwendig ist.",
  "d": "Damit Trainer*innen die Teilnehmenden im Vorfeld kategorisieren können.",
  "richtig": "b",
  "begruendung": "Zentral: Auch ein 'effektives' Training scheitert, wenn es nicht zur Zielgruppe passt. Empfehlung: mehrere Quellen heranziehen (Interviews mit Vorgesetzten, Fragebögen bei Mitarbeitenden)."
},
{
  "frage": "Was sagt das Studienmaterial zur Frage 'Freiwilligkeit vs. Teilnahmepflicht'?",
  "a": "Freiwillige Teilnahme ist eindeutig immer wirksamer.",
  "b": "Verpflichtende Teilnahme ist eindeutig immer wirksamer.",
  "c": "Die Frage ist empirisch nicht untersucht.",
  "d": "Es gibt keine klare Antwort: Freiwilligkeit geht zwar mit höherer Offenheit einher, doch verpflichtende Teilnahme kann ebenfalls positive Effekte haben — insbesondere weil Personen mit negativen Diversitätseinstellungen freiwillig kaum teilnehmen würden.",
  "richtig": "d",
  "begruendung": "Klassische 'Es kommt darauf an'-Frage. Beide Optionen haben Vor- und Nachteile. Klausurfalle: Absolute Aussagen (A, B) sind in der Wissenschaft selten richtig."
},
{
  "frage": "Was sind Meta-Stereotype (Vorauer & Sasaki, 2009)?",
  "a": "Annahmen darüber, wie ein Mitglied einer anderen Gruppe die Eigengruppe sieht.",
  "b": "Besonders starke und unveränderliche Stereotype über die eigene Gruppe.",
  "c": "Stereotype über fiktive Gruppen, die in Trainings simuliert werden.",
  "d": "Statistisch nachgewiesene durchschnittliche Eigenschaften einer Kultur.",
  "richtig": "a",
  "begruendung": "Meta-Stereotyp = 'Was denken DIE über UNS?' Diese Gedanken können positive Effekte von Perspektivübernahme blockieren (nicht-intendierter Effekt). Fremdwort: 'meta' = übergeordnet, also Stereotyp über das Stereotyp."
},
{
  "frage": "Welche Aussage zu nicht-intendierten Effekten interkultureller Trainings ist korrekt?",
  "a": "Perspektivübernahme hat immer ausschließlich positive Effekte.",
  "b": "Perspektivübernahme kann Meta-Stereotype aktivieren und so die intendierten positiven Effekte blockieren.",
  "c": "Nicht-intendierte Effekte treten nur bei sehr kurzen Trainings auf.",
  "d": "Nicht-intendierte Effekte sind ausschließlich positiv und werden bewusst herbeigeführt.",
  "richtig": "b",
  "begruendung": "Perspektivübernahme ist eine beliebte Methode, kann aber nach hinten losgehen, wenn die Person an negative Fremdbilder denkt. Fremdwort: intendiert = beabsichtigt; nicht-intendiert = unbeabsichtigte Nebenwirkung."
},
{
  "frage": "Auf welcher Kompetenzdimension sind interkulturelle Trainings laut Meta-Analysen (Bezrukova et al., 2016) am wirkungsvollsten?",
  "a": "Affektive Dimension",
  "b": "Verhaltensbezogene Dimension",
  "c": "Kognitive Dimension",
  "d": "Spirituelle Dimension",
  "richtig": "c",
  "begruendung": "Sehr klausurrelevant! Forschungs-Praxis-Lücke: KOGNITIVE Maßnahmen (Wissensvermittlung) sind am wirksamsten, ABER die Praxis fokussiert auf AFFEKTIVE. Daraus: Forderung nach evidenzbasierter Praxis."
},
{
  "frage": "Welcher Schritt gehört NICHT zum 6-Schritte-Modell der evidenzbasierten Konzeption nach Stephan & Stephan (2013)?",
  "a": "Klärung der Trainingsziele (messbar und spezifisch)",
  "b": "Auswahl relevanter Theorien",
  "c": "Überprüfung der Wirksamkeit der Intervention",
  "d": "Verkauf des Trainings an möglichst viele zahlende Kunden",
  "richtig": "d",
  "begruendung": "Die 6 Schritte: Kulturen → Ziele (messbar) → Theorien → Prozesse → Methoden → Evaluation. Kommerzielles ist KEIN Teil des Modells."
},
{
  "frage": "Welche Reihenfolge der ersten drei Schritte ist im Modell von Stephan & Stephan (2013) korrekt?",
  "a": "Methodenwahl → Theorienauswahl → Zielklärung",
  "b": "Auswahl involvierter Kulturen → Klärung der Trainingsziele → Auswahl relevanter Theorien",
  "c": "Evaluation → Auswahl der Kulturen → Zielklärung",
  "d": "Theorienauswahl → Auswahl der Kulturen → Methodenwahl",
  "richtig": "b",
  "begruendung": "Merksatz: KULTUREN → ZIELE → THEORIEN → PROZESSE → METHODEN → EVALUATION. Logik: Erst WEN, dann WAS, dann WARUM (Theorie), dann WIE, dann ob's funktioniert."
},
{
  "frage": "Warum sollten Trainingsziele nach Stephan & Stephan (2013) 'messbar und spezifisch' formuliert werden?",
  "a": "Damit das Erreichen dieser Ziele nachgewiesen und erfasst werden kann (Voraussetzung für Evaluation).",
  "b": "Damit das Training teurer verkauft werden kann.",
  "c": "Damit die Teilnehmenden überfordert werden.",
  "d": "Messbarkeit ist im Modell nicht relevant.",
  "richtig": "a",
  "begruendung": "Spezifische, messbare Ziele sind die Grundlage jeder Evaluation: Nur was operationalisiert ist, lässt sich überprüfen. Fremdwort: spezifisch = klar abgegrenzt, operationalisieren = messbar machen."
},
{
  "frage": "Was war das übergeordnete Ziel der theoriebasierten Trainingsintervention von Ehrke et al. (2014)?",
  "a": "Die Mitgliedschaft in der Eigengruppe stärker zu betonen.",
  "b": "Geschlechtsspezifische Karrieren zu fördern.",
  "c": "Die Vielfalt innerhalb von übergeordneten Gruppen stärker zu erkennen und im Anschluss aktiv zu suchen.",
  "d": "Die Differenzen zwischen Männern und Frauen besonders zu betonen.",
  "richtig": "c",
  "begruendung": "Theoretischer Hintergrund: Eigengruppenprojektionsmodell. Wenn die übergeordnete Kategorie als VIELFÄLTIGER wahrgenommen wird, sinkt die Abwertung von Fremdgruppen. Vielfalt erkennen ≠ Differenzen betonen."
},
{
  "frage": "Welche theoretische Grundlage diente dem Training von Ehrke et al. (2014)?",
  "a": "Theorie der kognitiven Dissonanz",
  "b": "Selbstbestimmungstheorie",
  "c": "Bindungstheorie nach Bowlby",
  "d": "Eigengruppenprojektionsmodell (Mummendey & Wenzel, 1999)",
  "richtig": "d",
  "begruendung": "Das Eigengruppenprojektionsmodell: Gruppen werden vor dem Hintergrund einer gemeinsamen Oberkategorie bewertet. Wird die Oberkategorie als vielfältig wahrgenommen, verbessert sich die Bewertung der Fremdgruppe. Fremdwort: projizieren = übertragen."
},
{
  "frage": "Welches zentrale Ergebnis zeigte die Evaluation des Trainings von Ehrke et al. (2014)?",
  "a": "Das Training hatte keinerlei messbare Effekte.",
  "b": "Die wahrgenommene Vielfalt einer übergeordneten Gruppe wurde erhöht und sexistische Einstellungen wurden verringert; die Einstellungsreduktion wurde durch die wahrgenommene Vielfalt mediiert.",
  "c": "Sexistische Einstellungen wurden verstärkt.",
  "d": "Nur kognitive Einstellungen veränderten sich, nicht aber emotionale.",
  "richtig": "b",
  "begruendung": "Mediation: Die wahrgenommene Vielfalt VERMITTELT den Effekt des Trainings auf die Einstellungen (Training → Vielfaltswahrnehmung ↑ → Sexismus ↓). Fremdwort: mediieren = vermitteln, als Zwischenvariable wirken."
},
{
  "frage": "Was bedeutet es, wenn ein Effekt 'mediiert' wird?",
  "a": "Eine Drittvariable VERMITTELT den Effekt zwischen einer unabhängigen und einer abhängigen Variablen (UV → Mediator → AV).",
  "b": "Eine Drittvariable verstärkt oder schwächt den Zusammenhang abhängig von ihrer Ausprägung.",
  "c": "Der Effekt verschwindet komplett.",
  "d": "Die Variablen sind unkorreliert.",
  "richtig": "a",
  "begruendung": "Klausurrelevante methodische Grundlage. Mediation = Vermittlung. Moderation = Bedingungsabhängigkeit. Klausurfalle: Option B beschreibt Moderation, nicht Mediation — beliebte Verwechslung."
},
{
  "frage": "Welche Aussage zur Evaluationspraxis im Diversity-Trainingsbereich (Rohmann et al., 2017) ist korrekt?",
  "a": "Evaluationen finden meist durch unabhängige Forschungsinstitute mit Prä-Post-Follow-Up-Designs statt.",
  "b": "Evaluationen sind im Diversity-Bereich gesetzlich vorgeschrieben.",
  "c": "Evaluationen finden meist durch die Trainer*innen selbst statt, mit Fragebogen/Selbstaussagen direkt nach dem Training; Prä-Post-Follow-Up-Designs sind selten.",
  "d": "Wirksamkeitsüberprüfung wird als Evaluationsziel von Trainer*innen ausgeschlossen.",
  "richtig": "c",
  "begruendung": "Zentrale Forschungs-Praxis-Lücke: Trainer*innen evaluieren SELBST (statt unabhängig), mit ZUFRIEDENHEIT (statt Wirksamkeit), DIREKT nach dem Training (statt Follow-Up). Klausurfalle: A klingt 'wissenschaftlich', beschreibt aber den Soll- nicht den Ist-Zustand."
},
{
  "frage": "Welche Evaluationskriterien werden in der Praxis am häufigsten herangezogen?",
  "a": "Verhaltensbeobachtung durch externe Gutachter*innen",
  "b": "Physiologische Maße (z. B. Kortisol-Spiegel)",
  "c": "Längsschnittliche Berufserfolgsmaße über mehrere Jahre",
  "d": "Zufriedenheit der Teilnehmenden und subjektive Erfolgseinschätzungen",
  "richtig": "d",
  "begruendung": "Wichtig: Zufriedenheit ≠ Wirksamkeit! Ein Training kann begeistern und trotzdem unwirksam sein. Fremdwort: subjektiv = aus Sicht der Person, nicht objektiv überprüft."
},
{
  "frage": "Welche Methoden werden in der Diversity-Trainings-Evaluation am häufigsten eingesetzt?",
  "a": "Fragebögen und Selbstaussagen",
  "b": "Experimentelle Studien mit Kontrollgruppe",
  "c": "Standardisierte neuropsychologische Tests",
  "d": "Teilnehmende Beobachtung durch externe Forscher*innen",
  "richtig": "a",
  "begruendung": "Fragebögen/Selbstaussagen sind methodisch schwach: messen Wahrnehmung statt Verhalten, anfällig für soziale Erwünschtheit. Klausurfalle: Option B wäre methodisch wünschenswert, ist aber selten umgesetzt."
},
{
  "frage": "Zu welchem Zeitpunkt findet die Evaluation interkultureller Trainings in der Praxis am häufigsten statt?",
  "a": "6 Monate nach dem Training (Follow-Up)",
  "b": "Direkt nach dem Training",
  "c": "1 Jahr vor dem Training",
  "d": "Ausschließlich durch wiederholte Prä-Post-Follow-Up-Designs",
  "richtig": "b",
  "begruendung": "Direkte Post-Messungen erfassen nur kurzfristige Eindrücke, nicht aber langfristige Verhaltensänderungen oder Trainingstransfer. Klausurfalle: Die Aussage '80% führen Follow-Up durch' ist FALSCH — Follow-Up ist selten."
},
{
  "frage": "Was bedeutet 'Trainingstransfer' im Kontext interkultureller Trainings?",
  "a": "Den Übertrag von Trainingsgebühren auf das Konto der Trainer*innen.",
  "b": "Den geografischen Umzug der Teilnehmenden ins Ausland.",
  "c": "Die Umsetzung des im Training Gelernten im Alltag bzw. Arbeitskontext, die durch geeignete Maßnahmen und ein transferförderliches Klima unterstützt werden sollte.",
  "d": "Den Übertrag der Trainingsinhalte in andere Sprachen.",
  "richtig": "c",
  "begruendung": "Trainingstransfer = Anwendung des Gelernten in der Praxis. Schulungen für Vorgesetzte können ein transferförderliches Klima schaffen. Sichtbare Wirksamkeit verstärkt wiederum die Anwendung."
},
{
  "frage": "Welcher Ansatz zur Qualitätssicherung interkultureller Trainings wird genannt?",
  "a": "Verzicht auf jegliche Bewertung, um Trainer*innen nicht zu demotivieren",
  "b": "Reine Selbstbewertung der Teilnehmenden ohne weitere Kriterien",
  "c": "Ausschließlich finanzielle Kennzahlen",
  "d": "Bewertung interkultureller Trainings durch Checklisten (z. B. Mazziotta et al., 2016)",
  "richtig": "d",
  "begruendung": "Checklisten ermöglichen eine systematische Bewertung anhand klar definierter Qualitätskriterien. Bezug zur Pflichtliteratur."
},
{
  "frage": "Welche Kritik wird an der Wirksamkeitsforschung zu interkulturellen Trainings geübt?",
  "a": "Es liegen vergleichsweise wenige Untersuchungen vor, die methodische Mindestanforderungen erfüllen; zudem werden Trainings wenig evaluiert.",
  "b": "Es gibt zu viele methodisch hochwertige Untersuchungen.",
  "c": "Wirksamkeit wurde abschließend nachgewiesen, weitere Forschung sei unnötig.",
  "d": "Die Forschung beschränkt sich auf qualitative Einzelfallstudien.",
  "richtig": "a",
  "begruendung": "Trotz Popularität des Themas ist die methodische Qualität vieler Studien gering — daher die Forderung nach evidenzbasierter Praxis. Klausurfalle: Beliebtheit eines Themas sagt nichts über Forschungsqualität aus."
},
{
  "frage": "Welche zwei Werke werden als Pflichtliteratur angegeben?",
  "a": "Bronfenbrenner (1979) & Berry (1980)",
  "b": "Lott (2010) Multiculturalism and Diversity & Mazziotta, Piper & Rohmann (2016) Interkulturelle Trainings",
  "c": "Hofstede (2001) & Triandis (1995)",
  "d": "Kolb (1984) & Brislin & Yoshida (1984)",
  "richtig": "b",
  "begruendung": "Lott (Kap. 1–2, S. 1–16) liefert den Kulturbegriff; Mazziotta et al. liefern den Trainings-Überblick. Klausurfalle: Bronfenbrenner, Berry, Kolb werden zwar erwähnt, sind aber NICHT die formale Pflichtliteratur."
},
{
  "frage": "Was beschreibt das Konzept des 'frame switching' im Kontext von Lotts Kulturbegriff?",
  "a": "Den Wechsel von einer Sprache in eine andere im Gespräch.",
  "b": "Den Tausch von Trainingsmaterialien zwischen Trainer*innen.",
  "c": "Veränderungen, die eine Person bei der Interpretation von Ereignissen oder Problemen aus dem Rahmen verschiedener kultureller Identitäten vornimmt.",
  "d": "Den biologisch bedingten Wechsel zwischen kulturellen Verhaltensmustern.",
  "richtig": "c",
  "begruendung": "Da jede Person mehreren kulturellen Gruppen angehört, kann sie je nach Kontext zwischen verschiedenen 'Rahmen' (frames) der Interpretation wechseln. Fremdwort: frame = Bezugsrahmen, Deutungsrahmen."
},
{
  "frage": "Welche Aussage entspricht NICHT dem Kulturbegriff von Lott (2010)?",
  "a": "Kultur wird durch soziale Interaktionen aufrechterhalten.",
  "b": "Kultur reflektiert die Anpassung an historische, politische, ökonomische und soziale Realitäten.",
  "c": "Eine Person kann gleichzeitig mehreren kulturellen Gruppen angehören.",
  "d": "Kultur ist die mikrosystematische Lebenswelt einer Person, und kulturelle Unterschiede werden durch biologische Unterschiede determiniert.",
  "richtig": "d",
  "begruendung": "Bei 'NICHT'/'FALSCH'-Fragen doppelt prüfen! Biologistische Erklärungen widersprechen Lotts soziokulturellem Kulturbegriff fundamental. Fremdwort: determiniert = festgelegt, bestimmt."
},
{
  "frage": "Welches theoretische Ziel verfolgt die Übung, gegensätzlich erscheinende Gruppenkombinationen (z. B. 'reicher Student') zu generieren?",
  "a": "Flexibler und offener mit Stereotypen umzugehen, auch inkonsistente Informationen in Betracht zu ziehen, und so Vorurteile zu reduzieren.",
  "b": "Stereotype zu verstärken, indem man sie häufig wiederholt.",
  "c": "Den IQ der Teilnehmenden zu messen.",
  "d": "Soziale Hierarchien zu festigen.",
  "richtig": "a",
  "begruendung": "Die Übung ist THEORIEBASIERT entwickelt: Ungewohnte Paarungen brechen automatische Assoziationen auf → Stereotypreduktion. Empirisch nachgewiesen."
},
{
  "frage": "Welche zentrale Forderung leiten Stephan & Stephan (2013) aus der Forschungs-Praxis-Lücke ab?",
  "a": "Abschaffung interkultureller Trainings",
  "b": "Mehr evidenzbasierte Praxis für Diversity-Trainings",
  "c": "Verzicht auf jegliche wissenschaftliche Theorie",
  "d": "Ausschließliche Orientierung an Trainer*innen-Intuition",
  "richtig": "b",
  "begruendung": "Evidenzbasiert = wissenschaftlich fundiert: Theorien, Forschungsergebnisse und Evaluation systematisch einbeziehen — statt sich nur auf Intuition zu stützen. Fremdwort: Evidenz = wissenschaftlicher Beleg."
},
{
  "frage": "Welcher Widerspruch besteht zwischen Forschungslage und Praxis im Bereich Diversity-Trainings?",
  "a": "Forschung und Praxis stimmen vollständig überein.",
  "b": "Forschung zeigt affektive Dimensionen als am wirkungsvollsten, Praxis adressiert vorwiegend kognitive.",
  "c": "Forschung zeigt kognitive Dimensionen als am wirkungsvollsten, Praxis adressiert vorwiegend affektive Kompetenzen.",
  "d": "Beide Bereiche ignorieren die verhaltensbezogene Dimension komplett.",
  "richtig": "c",
  "begruendung": "DER zentrale Befund. Merkhilfe: 'Forschung = Kopf (kognitiv), Praxis = Herz (affektiv)'. Sehr klausurrelevant — beliebte Verwechslungsfalle."
},
{
  "frage": "Welche Aussage zur Wirksamkeit und Evaluation interkultureller Trainings ist KORREKT?",
  "a": "Mehr als 80% der Trainings führen eine Follow-Up-Befragung durch.",
  "b": "Trainingsmaßnahmen auf der affektiven Dimension sind bedeutend wirkungsvoller als auf der kognitiven.",
  "c": "Diversity-Trainings werden besonders häufig auf ihre Wirksamkeit evaluiert.",
  "d": "Perspektivübernahme kann Meta-Stereotype aktivieren und dadurch intendierte positive Effekte blockieren.",
  "richtig": "d",
  "begruendung": "Nur D ist korrekt. A und C widersprechen der Befundlage (Follow-Up selten, wenig Evaluation), B vertauscht die Dimensionen."
},
{
  "frage": "Welche Aussage zur Rolle von Theorien bei der Konzeption interkultureller Trainings ist korrekt?",
  "a": "Psychologische Theorien liefern den großen Beitrag der Psychologie zur Konzeption von Diversity-Trainings; die Forschungsergebnisse werden in der Praxis aber teilweise nicht angemessen rezipiert.",
  "b": "Theorien sind für die Trainingskonzeption irrelevant.",
  "c": "Theorien sollen ausschließlich aus der Soziologie, nicht aus der Psychologie stammen.",
  "d": "Nur Theorien aus dem Jahr 2020 oder später sind verwendbar.",
  "richtig": "a",
  "begruendung": "Es gibt viele psychologische Forschungsergebnisse, die für Trainings nützlich wären, aber in der Praxis nicht ankommen. Fremdwort: rezipieren = aufnehmen, zur Kenntnis nehmen, anwenden."
},
{
  "frage": "Welche Methoden setzte das theoriebasierte Training von Ehrke et al. (2014) ein?",
  "a": "Ausschließlich Vorträge ohne Interaktion",
  "b": "Wissensvermittlung, interaktive Methoden (z. B. Übungen, Diskussionen) und Filmausschnitte",
  "c": "Hypnose und Meditation",
  "d": "Reine Online-Selbstlernmodule ohne Trainerinteraktion",
  "richtig": "b",
  "begruendung": "Methodenvielfalt: Das Training kombinierte didaktische, erfahrungsbasierte und mediale Elemente — gezielt ausgewählt, um den theoretisch postulierten Prozess (Erhöhung wahrgenommener Vielfalt) auszulösen."
}
];