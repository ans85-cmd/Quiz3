const questions = [
  {
    "frage": "Was ist laut Studienbrief ein wesentliches Merkmal community-psychologischer Forschung und Anwendung?",
    "a": "Die strikte räumliche Trennung von Forschenden und Beforschten.",
    "b": "Die partizipationsorientierte Anlage von Forschung und Intervention.",
    "c": "Die ausschließliche Nutzung von Laborexperimenten zur Kausalitätsprüfung.",
    "d": "Die Priorisierung der universitären Verwertbarkeit vor dem Nutzen für die Community.",
    "richtig": "b",
    "begruendung": "CP-Forschung definiert sich über die Einbeziehung der Betroffenen in den Prozess."
  },
  {
    "frage": "Mit welcher Frage sollten sich Community-Psycholog*innen laut SB NICHT zwingend vor Projektbeginn auseinandersetzen?",
    "a": "Dem persönlichen Wissenschaftsverständnis.",
    "b": "Den Wegen der Beteiligung von Community-Mitgliedern.",
    "c": "Der Berücksichtigung kultureller Aspekte.",
    "d": "Der Maximierung der statistischen Effektstärke zulasten der ökologischen Validität.",
    "richtig": "d",
    "begruendung": "Die vier Bereiche sind: Wissenschaftsverständnis, Beteiligung, Kultur und Analyseebene."
  },
  {
    "frage": "Welches methodische Vorgehen wird für eine konstruktivistisch orientierte CP-Forschung bevorzugt eingesetzt?",
    "a": "Qualitative Methoden wie Tiefeninterviews oder Exploration subjektiver Theorien.",
    "b": "Standardisierte Fragebögen mit rein dichotomen Antwortformaten.",
    "c": "Doppelblindstudien in einem hochkontrollierten Laborsetting.",
    "d": "Mathematische Simulationen ohne Kontakt zur realen Community.",
    "richtig": "a",
    "begruendung": "Konstruktivismus betont den Kontext und die subjektive Sicht, was qualitative Methoden erfordert."
  },
  {
    "frage": "Was ist eine Kernkomponente von Vertrauen nach Boon und Holmes (1991)?",
    "a": "Die vollständige finanzielle Absicherung aller Beteiligten.",
    "b": "Das Vorliegen einer jahrelangen privaten Freundschaft vor Projektbeginn.",
    "c": "Die Erwartung, dass das Gegenüber die eigene Verletzlichkeit nicht ausnutzt.",
    "d": "Die schriftliche Zusicherung, dass keine kritischen Ergebnisse veröffentlicht werden.",
    "richtig": "c",
    "begruendung": "Vertrauen basiert auf der Erwartung wohlwollenden Verhaltens in einer Abhängigkeitsbeziehung."
  },
  {
    "frage": "Welche interpersonale Voraussetzung ist laut Colquitt et al. (2007) entscheidend für die wahrgenommene Vertrauenswürdigkeit?",
    "a": "Ein hoher akademischer Titel und eine renommierte Universität.",
    "b": "Wohlwollen, Verlässlichkeit und moralische Integrität.",
    "c": "Die Fähigkeit, komplexe Fachbegriffe fehlerfrei anzuwenden.",
    "d": "Ein distanziertes und rein sachliches Auftreten.",
    "richtig": "b",
    "begruendung": "Kompetenz allein reicht nicht; Integrität und Wohlwollen sind entscheidend."
  },
  {
    "frage": "Wann ist der Aufbau von Vertrauen laut Studienbrief ein besonders zentrales Thema?",
    "a": "Wenn die Forschenden selbst Mitglieder der Community sind.",
    "b": "Wenn das Projekt bereits seit vielen Jahren erfolgreich läuft.",
    "c": "Wenn ausschließlich anonyme Online-Umfragen durchgeführt werden.",
    "d": "Wenn die Forschenden von „Außen“ kommen und keine Vorbeziehungen haben.",
    "richtig": "d",
    "begruendung": "Fehlende Interaktionserfahrung macht Vertrauen zur kritischen Anfangsphase."
  },
  {
    "frage": "Welcher Aspekt beschreibt einen Teil der „psychopolitischen Validität“?",
    "a": "Die Berücksichtigung des Einflusses von Faktoren auf der Makrosystemebene.",
    "b": "Die rein statistische Signifikanz politischer Meinungsbilder.",
    "c": "Dass Ergebnisse nur in regierungsnahen Zeitungen veröffentlicht werden.",
    "d": "Die Verpflichtung der Community, ihre politische Einstellung anzupassen.",
    "richtig": "a",
    "begruendung": "Psychopolitische Validität prüft Machtverhältnisse und Makrofaktoren."
  },
  {
    "frage": "Welches Ziel verfolgt die Kommunikation von Forschungsergebnissen im Sinne der psychopolitischen Validität?",
    "a": "Viele Zitationen in Fachjournalen.",
    "b": "Stärkere politische Kontrolle der Community.",
    "c": "Dass Mitglieder der Community Makrofaktoren und deren Einfluss besser verstehen.",
    "d": "Geheimhaltung der Daten bis zum Projektende.",
    "richtig": "c",
    "begruendung": "Forschung soll Menschen befähigen, ihre Lebensbedingungen zu verstehen und zu gestalten."
  },
  {
    "frage": "Welches Problem kann bei der Messung von kultureller Identität in Fragebögen die Validität gefährden?",
    "a": "Zu viel Alltagssprache.",
    "b": "Mehrsprachigkeit der Teilnehmenden.",
    "c": "Einbeziehung von Identifikation statt Kategorisierung.",
    "d": "Die ausschließliche Verwendung dichotomer Kategorien (z. B. nur „deutsch“ ODER „türkisch“).",
    "richtig": "d",
    "begruendung": "Dichotome Kategorien ignorieren komplexe und duale Identitäten."
  },
  {
    "frage": "Was sollte bei der Planung forschungsökonomischer Fragen laut Studienbrief geklärt werden?",
    "a": "Wie man Community-Mitglieder zu unbezahlter Arbeit verpflichtet.",
    "b": "Die materiellen, finanziellen und personellen Ressourcen sowie Zeitperspektiven.",
    "c": "Open-Access-Gebühren.",
    "d": "Kommerzialisierung der Ergebnisse.",
    "richtig": "b",
    "begruendung": "Realistische Ressourcenplanung ist Voraussetzung für den Projekterfolg."
  },
  {
    "frage": "Warum ist die kritische Reflexion des persönlichen Wissenschaftsverständnisses erforderlich?",
    "a": "Um die Stärken und Schwächen des wissenschaftlichen Vorgehens einschätzen zu können.",
    "b": "Um qualitative Methoden zu vermeiden.",
    "c": "Um die Community von der Überlegenheit der Wissenschaft zu überzeugen.",
    "d": "Um ethische Bedenken juristisch auszuschließen.",
    "richtig": "a",
    "begruendung": "Reflexion prüft die Angemessenheit der Methoden für die Fragestellung."
  },
  {
    "frage": "Womit beginnt partizipative Forschung und Anwendung laut der Zusammenfassung in Kapitel 6?",
    "a": "Mit der Auswertung vorhandener Sekundärdaten.",
    "b": "Mit komplexen Mixed-Methods-Designs.",
    "c": "Mit dem Aufbau einer tragfähigen Beziehung zur Community.",
    "d": "Mit sofortiger Intervention.",
    "richtig": "c",
    "begruendung": "Ohne Beziehung keine Partizipation."
  },
  {
    "frage": "Welche Rolle spielen informelle Kontakte (z. B. gemeinsames Essen) laut CP-Ansatz?",
    "a": "Sie sind unprofessionell.",
    "b": "Sie lassen akademische oder soziale Statusdifferenzen in den Hintergrund treten.",
    "c": "Sie dienen der Kontrolle sozialer Erwünschtheit.",
    "d": "Sie ersetzen ethische Einwilligung.",
    "richtig": "b",
    "begruendung": "Informelle Kontakte bauen Barrieren ab und fördern Augenhöhe."
  },
  {
    "frage": "Warum kann Sprache laut CP ein „Herrschaftsinstrument“ sein?",
    "a": "Weil nur die Landessprache valide Daten erlaubt.",
    "b": "Weil Menschen ohne Schriftsprache keine Kultur besitzen.",
    "c": "Weil Dialekte Varianz erhöhen.",
    "d": "Weil Fachvokabular Laien von Informationen ausschließen kann.",
    "richtig": "d",
    "begruendung": "Expertenmacht wird oft über Sprache ausgeübt; CP fordert inklusive Kommunikation."
  },
  {
    "frage": "Was kennzeichnet ein „Community Research Panel“?",
    "a": "Ein formales Gremium zur Steuerung der Kommunikation und Mitbestimmung.",
    "b": "Eine geheime Beobachtergruppe.",
    "c": "Ein statistisches Analyseverfahren.",
    "d": "Eine Focus-Group ohne Entscheidungskompetenz.",
    "richtig": "a",
    "begruendung": "Panels strukturieren die Partizipation durch Repräsentation."
  },
  {
    "frage": "Wer sollte laut SB bei methodischen Fragen die Federführung behalten?",
    "a": "Die jüngsten Community-Mitglieder.",
    "b": "Ein externer Notar.",
    "c": "In der Regel die Wissenschaftler*innen.",
    "d": "Alle Beteiligten per Mehrheitsentscheid.",
    "richtig": "c",
    "begruendung": "Beteiligung bedeutet nicht Überforderung bei komplexer Methodik."
  },
  {
    "frage": "Welcher Faktor führt laut Studienbrief am häufigsten zum Scheitern partizipativer Bestrebungen?",
    "a": "Zu viele Ressourcen.",
    "b": "Zu geringe Komplexität.",
    "c": "Universitäre Methodenverbote.",
    "d": "Fehlendes Problembewusstsein oder mangelnde Motivation in der Community.",
    "richtig": "d",
    "begruendung": "Ohne Problembewusstsein findet keine Partizipation statt."
  },
  {
    "frage": "Welches Risiko besteht für Forschende in partizipativen Projekten?",
    "a": "Ein Karriererisiko durch zeitintensive Prozesse und langsamere Publikationen.",
    "b": "Ausschluss aus Fachgesellschaften.",
    "c": "Gehaltsteilung.",
    "d": "Methodenverbot.",
    "richtig": "a",
    "begruendung": "CP-Projekte sind zeitaufwendig und oft akademisch weniger honoriert."
  },
  {
    "frage": "Wie wird „Kultur“ in der Community Psychology vorwiegend verstanden?",
    "a": "Als biologische Abstammung.",
    "b": "Als Lebenswelt einer sozialen Gruppe.",
    "c": "Als nationale Zugehörigkeit.",
    "d": "Als Hochkultur.",
    "richtig": "b",
    "begruendung": "Kultur umfasst soziale Lebensbedingungen und Gruppenzugehörigkeit."
  },
  {
    "frage": "Was ist das Kernproblem der „Fremdgruppen-homogenisierung“?",
    "a": "Zu viele Gruppen.",
    "b": "Selbstabwertung.",
    "c": "Die Annahme, alle Mitglieder einer Community seien gleich.",
    "d": "Nur Einzelfallforschung.",
    "richtig": "c",
    "begruendung": "Diversität innerhalb von Communities wird unterschätzt."
  },
  {
    "frage": "Was bedeutet „idiomatisch angemessene Übersetzung“ bei der sprachlichen Adaptation?",
    "a": "Eine sinngemäße Anpassung an den kulturellen Sprachgebrauch.",
    "b": "Eine wörtliche Übersetzung jedes einzelnen Wortes per Lexikon.",
    "c": "Das Ersetzen aller Fachbegriffe durch einfache Bildsprache.",
    "d": "Die Übersetzung aller Items in eine neutrale Kunstsprache wie Esperanto.",
    "richtig": "a",
    "begruendung": "Nur die sinngemäße Anpassung garantiert die inhaltliche Äquivalenz der Messung."
  },
  {
    "frage": "Welches Antwortverhalten ist typisch für Personen aus ostasiatischen Kulturen bei positiven Selbstbeschreibungen?",
    "a": "Eine extreme Tendenz zur Mitte (immer nur der neutrale Wert).",
    "b": "Eine starke Tendenz zu den extremen Polen der Skala.",
    "c": "Eine bewusste Verweigerung der Antwort bei persönlichen Fragen.",
    "d": "Eine kulturell bedingte Bescheidenheitstendenz (modesty bias).",
    "richtig": "d",
    "begruendung": "Positive Selbstbeschreibungen fallen aufgrund kultureller Normen oft zurückhaltender aus."
  },
  {
    "frage": "Was beschreibt eine „ethnozentrische Verzerrung“ in der Forschung?",
    "a": "Die statistisch korrekte Einbeziehung ethnischer Minderheiten.",
    "b": "Die Bewertung fremder Kulturen basierend auf den Standards der eigenen Kultur.",
    "c": "Dass Forschende ihre eigene Identität komplett ablegen können.",
    "d": "Das Erlernen einer fremden Sprache, um Probanden besser zu manipulieren.",
    "richtig": "b",
    "begruendung": "Eigene kulturelle Maßstäbe werden unbewusst als Norm gesetzt."
  },
  {
    "frage": "Warum ist die Berücksichtigung unterschiedlicher Systemebenen ressourcenintensiv?",
    "a": "Weil man für jede Ebene einen eigenen Professor einstellen muss.",
    "b": "Weil die Ethikkommissionen die Analyse von Makroebenen meist verbieten.",
    "c": "Weil sie theoretisch und methodisch hochkomplex ist.",
    "d": "Weil Probanden auf der Makroebene grundsätzlich nicht antworten.",
    "richtig": "c",
    "begruendung": "Die Koordination von Mikro-, Meso- und Makroebenen erfordert hohen Planungsaufwand."
  },
  {
    "frage": "Wie wird interkulturelle Kompetenz laut Studienbrief am effektivsten erworben?",
    "a": "Durch das bloße Auswendiglernen von Nationalflaggen und Hauptstädten.",
    "b": "Indem man kulturelle Unterschiede ignoriert und „farbenblind“ forscht.",
    "c": "Durch das ausschließliche Lesen von Reiseführern über das Zielgebiet.",
    "d": "Durch eine Kombination aus Wissen, Reflexion und Handlungsfertigkeiten.",
    "richtig": "d",
    "begruendung": "Interkulturelle Kompetenz erfordert Wissen, Selbstreflexion und praktische Erfahrung."
  },
  {
    "frage": "Was ist eine häufige Ursache für Vertrauenskrisen in Kooperationen?",
    "a": "Ineffektive Kommunikation und daraus resultierende Missverständnisse.",
    "b": "Die Verwendung von zu viel Alltagssprache durch die Wissenschaftler.",
    "c": "Das Fehlen von finanziellen Verlusten während der Projektlaufzeit.",
    "d": "Eine zu detaillierte schriftliche Fixierung der gemeinsamen Ziele.",
    "richtig": "a",
    "begruendung": "Mangelnde Transparenz und Kommunikation untergraben Vertrauen."
  },
  {
    "frage": "Auf welcher Basis sollte der Schwerpunkt der Analyseebene gewählt werden?",
    "a": "Durch eine geheime Abstimmung im Forschungsteam.",
    "b": "Auf Basis theoretischer, praktischer und ökonomischer Erwägungen.",
    "c": "Rein nach dem aktuellen Budget der fördernden Partei.",
    "d": "Grundsätzlich immer auf der Individualebene.",
    "richtig": "b",
    "begruendung": "Die Analyseebene muss begründet und projektangemessen gewählt werden."
  },
  {
    "frage": "Welche Disziplinen bieten laut Studienbrief hilfreiche Ansätze für die „adressatenorientierte Kommunikation“?",
    "a": "Quantenphysik und theoretische Mathematik.",
    "b": "Ausschließlich die klassische Verhaltensbiologie.",
    "c": "Die stadt- und raumplanerischen Disziplinen.",
    "d": "Paläontologie und Archäologie.",
    "richtig": "c",
    "begruendung": "Diese Disziplinen verfügen über Erfahrung in nutzerorientierter Kommunikation."
  },
  {
    "frage": "Was ist ein Merkmal partizipativer Forschung hinsichtlich der Zeit?",
    "a": "Sie erfordert in der Regel eine längerfristige Perspektive.",
    "b": "Sie ist schneller abgeschlossen als Laborforschung.",
    "c": "Sie hat kein Zeitlimit.",
    "d": "Sie muss innerhalb eines Semesters enden.",
    "richtig": "a",
    "begruendung": "Beziehungsaufbau und Mitbestimmung benötigen Zeit."
  },
  {
    "frage": "Welches Beispiel gehört laut Phinney (1990) zur Komponente der „ethnischen Verhaltensweisen“?",
    "a": "Wissen über politische Geschichte.",
    "b": "Gefühl von Stolz.",
    "c": "Statistische Kategorisierung.",
    "d": "Kochen und Essen traditioneller Speisen der Herkunftskultur.",
    "richtig": "d",
    "begruendung": "Verhaltensweisen sind sichtbare kulturelle Praktiken."
  },
  {
    "frage": "Was ist ein zentrales Ziel von qualitativen Methoden in der CP?",
    "a": "Generalisierung auf die Weltbevölkerung.",
    "b": "Die Exploration eines interessierenden Gegenstandes.",
    "c": "Ausschaltung des Kontexts.",
    "d": "Zeitersparnis.",
    "richtig": "b",
    "begruendung": "Qualitative Methoden dienen dem Verstehen und Entdecken."
  },
  {
    "frage": "Wann spricht man von einem Mixed-Methods-Design?",
    "a": "Bei Nutzung mehrerer statistischer Tests.",
    "b": "Bei gleichzeitiger Befragung mehrerer Gruppen.",
    "c": "Wenn quantitative Daten durch qualitative Interviews ergänzt werden.",
    "d": "Bei mehrsprachiger Publikation.",
    "richtig": "c",
    "begruendung": "Mixed Methods kombinieren quantitative Breite mit qualitativer Tiefe."
  },
  {
    "frage": "Was ist laut Studienbrief der entscheidende Unterschied zwischen „Kontrolle abgeben“ und „Kontrolle teilen“?",
    "a": "Kontrolle teilen heißt nur beraten.",
    "b": "Kontrolle teilen bedeutet gemeinsame Ausübung von Kontrolle im Forschungsprozess.",
    "c": "Kontrolle abgeben ist Voraussetzung für Validität.",
    "d": "Beide Begriffe sind synonym.",
    "richtig": "b",
    "begruendung": "Teilen bedeutet partnerschaftliches Gestalten, nicht Machtverlust."
  },
  {
    "frage": "Warum ist die Messung religiöser Identität mit nur einer Kategorie problematisch?",
    "a": "Religion ist irrelevant.",
    "b": "Statistische Power steigt.",
    "c": "Subkategorien und Unterschiede werden ignoriert.",
    "d": "Teilnehmende werden überfordert.",
    "richtig": "c",
    "begruendung": "Grobe Kategorisierung senkt die Validität der Messung."
  },
  {
    "frage": "Wie unterscheidet sich die Kommunikation der Ergebnisse gegenüber der Community von der gegenüber der Scientific Community?",
    "a": "Sie ist nur ein Nebenprodukt.",
    "b": "Fachbegriffe sind zwingend notwendig.",
    "c": "Wissenschaftliche Texte sind für alle gleich geeignet.",
    "d": "Sie erfordert eigene, adressatenorientierte Kommunikationsformen.",
    "richtig": "d",
    "begruendung": "Community-Kommunikation ist eigenständig und adressatenspezifisch."
  },
  {
    "frage": "Was ist eine zentrale Gefahr bei der Interpretation kultureller Leistungsunterschiede?",
    "a": "Übersehen sozioökonomischer Drittvariablen.",
    "b": "Zu hohe interne Validität.",
    "c": "Kulturelle Irrelevanz.",
    "d": "Verfälschung durch Drittvariablen.",
    "richtig": "a",
    "begruendung": "Unterschiede sind häufig sozial statt kulturell bedingt."
  },
  {
    "frage": "Wie beeinflusst die akademische Kultur CP-Projekte?",
    "a": "Sie fördert sie stark.",
    "b": "Sie kann ein Hindernis durch Publikationsdruck darstellen.",
    "c": "Sie verbietet qualitative Forschung.",
    "d": "Sie bietet finanzielle Anreize.",
    "richtig": "b",
    "begruendung": "Langwierige partizipative Prozesse stehen im Konflikt mit Karrierelogiken."
  },
  {
    "frage": "Was ist ein Vorteil der Berücksichtigung dualer Identitäten?",
    "a": "Geringere Komplexität.",
    "b": "Höhere Validität der Identitätsmessung.",
    "c": "Geringere Identifikation.",
    "d": "Vermeidung von Akquieszenz.",
    "richtig": "b",
    "begruendung": "Duale Identitäten bilden komplexe Lebensrealitäten besser ab."
  },
  {
    "frage": "Welches Ziel verfolgt die Etablierung eines „Runden Tisches“?",
    "a": "Durchsetzung von Forschungszielen.",
    "b": "Reine Datenerhebung.",
    "c": "Gemeinsame Beratung zur konsensualen Entscheidungsfindung.",
    "d": "Auswahl kritikfreier Mitglieder.",
    "richtig": "c",
    "begruendung": "Runde Tische dienen dem Dialog und der gemeinsamen Lösung."
  },
  {
    "frage": "Welcher Aspekt gehört zur psychopolitischen Validität nach Prilleltensky (2003)?",
    "a": "Politische Mandate für Forschende.",
    "b": "Ausschließliche Mikroebenenanalyse.",
    "c": "Regierungskonforme Ergebnisverwendung.",
    "d": "Erwerb von Fähigkeiten durch Community-Mitglieder zur Gestaltung ihrer Lebensbedingungen.",
    "richtig": "d",
    "begruendung": "Psychopolitische Validität bemisst sich am Empowerment- und Gestaltungspotenzial."
  },
  {
    "frage": "Wie definiert der Postpositivismus in der CP das Erreichen von Objektivität?",
    "a": "Nicht durch die Haltung einzelner Personen, sondern durch transparente Regeln und Intersubjektivität.",
    "b": "Durch die vollständige Eliminierung aller persönlichen Werte der Forscher*innen.",
    "c": "Durch den ausschließlichen Einsatz von Tiefeninterviews ohne statistische Auswertung.",
    "d": "Objektivität wird im Postpositivismus als unerreichbar und daher irrelevant abgelehnt.",
    "richtig": "a",
    "begruendung": "Da vollständige Neutralität unmöglich ist, wird Objektivität durch Transparenz, Regeln und kritische Intersubjektivität angestrebt."
  },
  {
    "frage": "Welcher Effekt ist laut Studienbrief typisch für Majoritäten bei der Wahrnehmung von Minoritäten?",
    "a": "Sie nehmen Minoritäten als deutlich vielfältiger wahr als ihre eigene Gruppe.",
    "b": "Sie nehmen die Fremdgruppe als homogener wahr als die eigene Gruppe (Fremdgruppenhomogenisierung).",
    "c": "Sie ignorieren kulturelle Unterschiede vollständig (Farbenblindheit).",
    "d": "Sie passen ihre eigenen Normen sofort an die der Minorität an.",
    "richtig": "b",
    "begruendung": "Majoritäten neigen dazu, die Fremdgruppe als homogener wahrzunehmen, was zur Fehleinschätzung von Communities führen kann."
  }
];