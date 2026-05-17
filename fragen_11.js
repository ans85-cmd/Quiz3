const questions = [
  {
    "frage": "Welche Selbst-Dimension ist laut dem Bedürfnisbasierten Modell der Versöhnung (Shnabel & Nadler, 2008) bei der Opfergruppe durch einen Konflikt bedroht?",
    "a": "Moralisches Image und Zugehörigkeit",
    "b": "Soziale Akzeptanz und Communion",
    "c": "Kontrolle, Autonomie und Macht",
    "d": "Empowerment und Selbstwirksamkeit",
    "richtig": "c",
    "begruendung": "Opfer verlieren das Gefühl, den Lauf der Dinge beeinflussen zu können – das ist die Agency-Dimension. Täter hingegen sind in ihrer kommunalen Identität bedroht."
  },
  {
    "frage": "Was ist laut dem Bedürfnisbasierten Modell der Versöhnung das zentrale Bedürfnis der Tätergruppe nach einem Konflikt?",
    "a": "Empowerment durch die Opfergruppe",
    "b": "Moralische Akzeptanz durch die Opfergruppe",
    "c": "Wiederherstellung von Kontrolle und Autonomie",
    "d": "Vergebung durch externe Dritte",
    "richtig": "b",
    "begruendung": "Täter brauchen moralische Akzeptanz durch die Opfergruppe – das stellt ihre kommunale Identität wieder her."
  },
  {
    "frage": "Im Feldexperiment in Liberia (Mazziotta et al., 2014) stand welche Frage im Vordergrund?",
    "a": "Ob Opfer eher zur Versöhnung bereit sind als Täter",
    "b": "Ob der Fokus auf die eigene Täterrolle die Kontaktbereitschaft erhöht",
    "c": "Ob Entschuldigungen die Empathie dauerhaft steigern können",
    "d": "Ob Stammeszugehörigkeit die Versöhnungsbereitschaft moderiert",
    "richtig": "b",
    "begruendung": "Das Experiment manipulierte den Fokus (Täter vs. Opfer) und untersuchte die Auswirkungen auf Kontaktbereitschaft."
  },
  {
    "frage": "Welches Ergebnis konnte im Liberia-Feldexperiment nicht bestätigt werden?",
    "a": "Der Täter-Fokus erhöhte das Bedürfnis nach sozialer Akzeptanz",
    "b": "Das Bedürfnis nach sozialer Akzeptanz wirkte direkt auf die Kontaktbereitschaft",
    "c": "Der Opfer-Fokus erhöhte das Bedürfnis nach Empowerment",
    "d": "Der Täter-Fokus erhöhte die Intergruppenempathie direkt",
    "richtig": "c",
    "begruendung": "Die Empowerment-Hypothese war nicht signifikant."
  },
  {
    "frage": "Welcher Mediationspfad wurde im Liberia-Feldexperiment empirisch unterstützt?",
    "a": "Täter-Fokus → Bedürfnis nach sozialer Akzeptanz → Intergruppenempathie → Kontaktbereitschaft",
    "b": "Opfer-Fokus → Bedürfnis nach Empowerment → Kontaktbereitschaft",
    "c": "Täter-Fokus → Intergruppenempathie → Bedürfnis nach sozialer Akzeptanz",
    "d": "Täter-Fokus → Bedürfnis nach Empowerment → Intergruppenempathie → Kontaktbereitschaft",
    "richtig": "a",
    "begruendung": "Der bestätigte Pfad lief über soziale Akzeptanz und Empathie zur Kontaktbereitschaft."
  },
  {
    "frage": "Was beschreibt der Begriff „Wettstreit um die Opferrolle” im Kontext des Bedürfnisbasierten Modells?",
    "a": "Täter instrumentalisieren Opfer durch Entschuldigungen",
    "b": "Opfer konkurrieren um Anerkennung",
    "c": "Externe entscheiden über Opferstatus",
    "d": "Beide Konfliktparteien versuchen, sich als Opfer darzustellen",
    "richtig": "d",
    "begruendung": "Beide Seiten sehen sich oft als Opfer – Rollen sind nicht eindeutig."
  },
  {
    "frage": "Was ist laut dem Liberia-Experiment der Effekt des Täter-Fokus auf die Kontaktbereitschaft?",
    "a": "Kein Effekt",
    "b": "Nur indirekt über Empowerment",
    "c": "Direkter und indirekter Effekt über Empathie und Akzeptanz",
    "d": "Negativer Effekt",
    "richtig": "c",
    "begruendung": "Zusätzlich zum indirekten Effekt gab es auch einen direkten Effekt auf Empathie."
  },
  {
    "frage": "Welche praktische Implikation lässt sich aus dem Liberia-Experiment ableiten?",
    "a": "Opfer sollen sich zuerst entschuldigen",
    "b": "Versöhnung braucht externe Vermittler",
    "c": "Medien sind hinderlich",
    "d": "Täter-Fokus kann durch Framing Kontaktbereitschaft erhöhen",
    "richtig": "d",
    "begruendung": "Framing beeinflusst Rollenwahrnehmung und damit Versöhnungsprozesse."
  },
  {
    "frage": "Welche Aussage zum Bedürfnisbasierten Modell der Versöhnung ist korrekt?",
    "a": "Nur direkt Betroffene entwickeln Bedürfnisse",
    "b": "Täter brauchen Empowerment",
    "c": "Eine Seite muss verzichten",
    "d": "Gruppenzugehörigkeit reicht aus, um Bedürfnisse auszulösen",
    "richtig": "d",
    "begruendung": "Bedürfnisse entstehen auf Gruppenebene – auch ohne direkte Betroffenheit."
  },
  {
    "frage": "Welche Stichprobe wurde im Feldexperiment in Liberia verwendet?",
    "a": "73 Personen aus einer Gruppe",
    "b": "146 Studierende",
    "c": "16 Stammesführer",
    "d": "146 Personen aus 16 ethnischen Gruppen, 73 weiblich",
    "richtig": "d",
    "begruendung": "Die Stichprobe war heterogen und erhöht die externe Validität."
  },
  {
    "frage": "Welche Rolle nimmt Versöhnung im Friedensprozess ein?",
    "a": "Erster Schritt vor Waffenstillstand",
    "b": "Ersatz für Friedensabkommen",
    "c": "Parallel zur Konfliktlösung",
    "d": "Letzter Schritt zur Heilung psychischer Wunden",
    "richtig": "d",
    "begruendung": "Versöhnung erfolgt nach Konfliktlösung und dient der Heilung psychischer Wunden."
  },
  {
    "frage": "Wie beschreibt das Bedürfnisbasierte Modell die Bedrohung des Selbstbildes in Konflikten?",
    "a": "Beide Gruppen erleben gleiche Bedrohungen",
    "b": "Nur Opfer erleben Bedrohung",
    "c": "Die Bedrohung ist asymmetrisch",
    "d": "Nur bei physischer Gewalt",
    "richtig": "c",
    "begruendung": "Opfer verlieren Agency, Täter verlieren Communion – unterschiedliche Bedrohungen."
  },
  {
    "frage": "Wie kann die Opfergruppe der Tätergruppe helfen, deren bedrohte Selbst-Dimension wiederherzustellen?",
    "a": "Durch Entschuldigungen",
    "b": "Durch Rückzug",
    "c": "Durch Vergebung, Empathie und Akzeptanz",
    "d": "Durch externe Petitionen",
    "richtig": "c",
    "begruendung": "Täter brauchen Akzeptanz und moralische Wiederintegration."
  },
  {
    "frage": "Wie kann die Tätergruppe der Opfergruppe helfen, deren bedrohte Selbst-Dimension wiederherzustellen?",
    "a": "Durch Vergebung",
    "b": "Durch Rückzug",
    "c": "Durch Gerichtsverfahren",
    "d": "Durch Entschuldigung, Anerkennung und Ermächtigung",
    "richtig": "d",
    "begruendung": "Opfer brauchen Empowerment – Täter stellen dieses durch Anerkennung wieder her."
  },
  {
    "frage": "Welche Selbst-Dimensionen sind bei der Tätergruppe bedroht?",
    "a": "Kontrolle und Macht",
    "b": "Empowerment",
    "c": "Selbstwirksamkeit",
    "d": "Moralisches Image und Zugehörigkeit",
    "richtig": "d",
    "begruendung": "Täter verlieren ihre kommunale Identität (Communion)."
  },
  {
    "frage": "Was ist das angestrebte Ergebnis des Modells?",
    "a": "Identitätsangleichung",
    "b": "Rechtliche Aufarbeitung",
    "c": "Reduzierte Selbstbedrohung und erhöhte Versöhnungsbereitschaft",
    "d": "Auflösung der Gruppen",
    "richtig": "c",
    "begruendung": "Wechselseitige Bedürfnisbefriedigung reduziert Bedrohung und steigert Versöhnung."
  },
  {
    "frage": "Welche Intervention wird beim Wettstreit um die Opferrolle empfohlen?",
    "a": "Klare Täterdefinition",
    "b": "Gemeinsamkeiten betonen und Austausch ermöglichen",
    "c": "Gerichtliche Zuordnung",
    "d": "Unterstützung nur für Opfer",
    "richtig": "b",
    "begruendung": "Gemeinsames Erzählen reduziert Konkurrenz um Opferstatus."
  },
  {
    "frage": "Was unterscheidet das Liberia-Experiment von Laborexperimenten?",
    "a": "Keine Kontrollgruppe",
    "b": "Natürliches Umfeld mit real Betroffenen",
    "c": "Nur physiologische Daten",
    "d": "Keine Aufklärung",
    "richtig": "b",
    "begruendung": "Feldexperiment erhöht externe Validität."
  },
  {
    "frage": "Warum ist Versöhnung nach Konflikten besonders wichtig?",
    "a": "Gruppen leben getrennt",
    "b": "Gerichte verlangen Versöhnung",
    "c": "Gruppen leben oft weiter zusammen",
    "d": "Einzige Präventionsmethode",
    "richtig": "c",
    "begruendung": "Enge Koexistenz erfordert psychologische Versöhnung."
  },
  {
    "frage": "Welche abhängige Variable wurde im Liberia-Experiment gemessen?",
    "a": "Aggression",
    "b": "Gruppenidentifikation",
    "c": "Kontaktbereitschaft",
    "d": "Entschuldigung",
    "richtig": "c",
    "begruendung": "Kontaktbereitschaft ist zentral für Versöhnung."
  },
  {
    "frage": "Was beschreibt „Kollektivschuld”?",
    "a": "Nur direkte Beteiligung",
    "b": "Zukunftsverantwortung",
    "c": "Schuld durch Gruppenmitgliedschaft",
    "d": "Juristisches Konzept",
    "richtig": "c",
    "begruendung": "Gruppenzugehörigkeit reicht aus, um Schuldgefühle zu erleben."
  },
  {
    "frage": "Welche dysfunktionalen Strategien werden genutzt?",
    "a": "Dialog",
    "b": "Gerichte",
    "c": "Opfer werden Täter, Täter relativieren",
    "d": "Kontaktvermeidung",
    "richtig": "c",
    "begruendung": "Diese Strategien verhindern Versöhnung."
  },
  {
    "frage": "Was zeigte Shnabel et al. (2009)?",
    "a": "Empowerment hilft Tätern",
    "b": "Empowerment hilft Opfern, Akzeptanz Tätern",
    "c": "Beide wirken gleich",
    "d": "Nur Entschuldigungen wirken",
    "richtig": "b",
    "begruendung": "Bedürfnispassung ist entscheidend."
  },
  {
    "frage": "Was ist der „Königsweg” zur Versöhnung?",
    "a": "Externe Vermittler",
    "b": "Gerichte",
    "c": "Direkter Dialog",
    "d": "Trennung",
    "richtig": "c",
    "begruendung": "Direkter Austausch erfüllt Bedürfnisse am besten."
  },
  {
    "frage": "Wann helfen Drittparteien laut Modell?",
    "a": "Wenn neutral",
    "b": "Wenn offiziell",
    "c": "Wenn sie Gemeinsamkeiten mit Gegenseite haben",
    "d": "Wenn sie empowern",
    "richtig": "c",
    "begruendung": "Gemeinsame Identität erhöht Glaubwürdigkeit."
  },
  {
    "frage": "Was beschreibt der Begriff „Kollektivschuld” im Kontext des Bedürfnisbasierten Modells?",
    "a": "Schuldgefühle, die nur entstehen, wenn man selbst direkt beteiligt war",
    "b": "Kollektive Verantwortung für zukünftige Konflikte",
    "c": "Schuldgefühle für Taten der eigenen Gruppe ohne direkte Beteiligung",
    "d": "Ein juristisches Konzept zur Verurteilung",
    "richtig": "c",
    "begruendung": "Kollektivschuld entsteht durch Gruppenzugehörigkeit, auch ohne persönliche Beteiligung."
  },
  {
    "frage": "Welche dysfunktionalen Strategien nutzen Opfer und Täter laut Barth et al. (2018)?",
    "a": "Dialog und Entschuldigungen",
    "b": "Mediation und Gerichte",
    "c": "Opfer werden selbst zu Tätern; Täter bagatellisieren Taten",
    "d": "Kontaktvermeidung",
    "richtig": "c",
    "begruendung": "Diese Strategien verschärfen Konflikte statt sie zu lösen."
  },
  {
    "frage": "Was zeigte die Studie von Shnabel et al. (2009)?",
    "a": "Empowerment wirkt bei Tätern stärker",
    "b": "Empowerment hilft Opfern; Akzeptanz hilft Tätern",
    "c": "Beide wirken gleich",
    "d": "Nur Entschuldigungen wirken",
    "richtig": "b",
    "begruendung": "Bedürfnispassung ist entscheidend für Versöhnung."
  },
  {
    "frage": "Was empfiehlt das Modell als „Königsweg” zur Versöhnung?",
    "a": "Externe Vermittler",
    "b": "Gerichtliche Aufarbeitung",
    "c": "Direkter Dialog und wechselseitige Bedürfnisbefriedigung",
    "d": "Räumliche Trennung",
    "richtig": "c",
    "begruendung": "Direkter Austausch erfüllt Bedürfnisse beider Seiten."
  },
  {
    "frage": "Wann können Drittparteien zur Versöhnung beitragen?",
    "a": "Wenn sie neutral sind",
    "b": "Wenn sie offizielle Autorität haben",
    "c": "Wenn sie Gemeinsamkeiten mit der Gegenseite haben",
    "d": "Wenn sie nur empowern",
    "richtig": "c",
    "begruendung": "Gemeinsame Identität erhöht Glaubwürdigkeit."
  },
  {
    "frage": "Welche zwei Wege reduzieren den Wettstreit um die Opferrolle?",
    "a": "Entschuldigungen und Gerichte",
    "b": "Gemeinsame Opferrolle oder gemeinsame Täterrolle betonen",
    "c": "Trennung und individuelle Aufarbeitung",
    "d": "Medienberichte und Entschädigung",
    "richtig": "b",
    "begruendung": "Beide Strategien verhindern Konkurrenz um Opferstatus."
  },
  {
    "frage": "Was zeigte die südafrikanische Wahrheits- und Versöhnungskommission?",
    "a": "Scheiterte vollständig",
    "b": "Erfolgreich durch Opferstimme und Humanisierung der Täter",
    "c": "UN entscheidend",
    "d": "Nur Opfer profitierten",
    "richtig": "b",
    "begruendung": "Opfer erhielten Stimme; Täter wurden als Menschen wahrgenommen."
  },
  {
    "frage": "Warum wurde die Empowerment-Hypothese im Liberia-Experiment nicht bestätigt?",
    "a": "Messfehler",
    "b": "Empowerment irrelevant",
    "c": "Beide Gruppen sahen sich als Opfer",
    "d": "Manipulation misslang",
    "richtig": "c",
    "begruendung": "Hoher Opferstatus bei allen Teilnehmern nivellierte Unterschiede."
  },
  {
    "frage": "Was zeigte die Inhaltsanalyse im Täter-Fokus?",
    "a": "Detailreiche Berichte",
    "b": "Verweigerung",
    "c": "Psychologische Distanzierung und Rechtfertigung",
    "d": "Nur Opfersicht",
    "richtig": "c",
    "begruendung": "Täter distanzieren sich zum Schutz des Selbstbildes."
  },
  {
    "frage": "Welche zwei psychologischen Pfade entstehen bei Konfrontation mit Gruppentaten?",
    "a": "Empathie vs. Rache",
    "b": "Individuell vs. kollektiv",
    "c": "Moralisches Engagement vs. moralische Distanzierung",
    "d": "Akzeptanz vs. Empowerment",
    "richtig": "c",
    "begruendung": "Beide Pfade beeinflussen Versöhnung unterschiedlich."
  },
  {
    "frage": "Welche Motive stehen hinter dem Wettstreit um Opferrollen?",
    "a": "Prestige und Geld",
    "b": "Verbündete gewinnen und Gewalt legitimieren",
    "c": "Strafvermeidung",
    "d": "Selbstwirksamkeit",
    "richtig": "b",
    "begruendung": "Strategisch und psychologisch motiviert."
  },
  {
    "frage": "Welche Stufen des Friedensprozesses beschreibt Kelman (2004)?",
    "a": "Waffenstillstand → Versöhnung → Frieden",
    "b": "Konfliktbeilegung → Konfliktlösung → Versöhnung",
    "c": "Verhandlung → Mediation → Integration",
    "d": "Deeskalation → Dialog → Stabilität",
    "richtig": "b",
    "begruendung": "Versöhnung ist die letzte Stufe."
  },
  {
    "frage": "Warum ist eine Entschuldigung der Täter wirksam?",
    "a": "Stellt Moral vollständig wieder her",
    "b": "Gibt Opfern Entscheidungsmacht",
    "c": "Beendet Verantwortung",
    "d": "Empowert Täter",
    "richtig": "b",
    "begruendung": "Opfer gewinnen Agency zurück."
  },
  {
    "frage": "Was signalisiert Vergebung den Tätern?",
    "a": "Keine Konsequenzen",
    "b": "Sie werden als Menschen akzeptiert",
    "c": "Taten sind gerechtfertigt",
    "d": "Konflikt ist beendet",
    "richtig": "b",
    "begruendung": "Vergebung stärkt Communion."
  },
  {
    "frage": "Was gilt für einseitige Bedürfnisbefriedigung?",
    "a": "Guter erster Schritt",
    "b": "Ausreichend",
    "c": "Hindert Versöhnung",
    "d": "Nur mit Vermittlern wirksam",
    "richtig": "c",
    "begruendung": "Wechselseitigkeit ist notwendig."
  },
  {
    "frage": "Welches zusätzliche Outcome wird gemessen?",
    "a": "Kontakt",
    "b": "Versöhnungsverhalten",
    "c": "Wahlen",
    "d": "Gesundheit",
    "richtig": "b",
    "begruendung": "Verhalten ergänzt Einstellungen."
  },
  {
    "frage": "Welche Einschränkung nennen Mazziotta et al. (2014)?",
    "a": "Nur auf Afrika übertragbar",
    "b": "Keine Kausalität",
    "c": "Weitere Replikation nötig",
    "d": "Manipulation schwach",
    "richtig": "c",
    "begruendung": "Generalisierbarkeit muss geprüft werden."
  },
  {
    "frage": "Welche Einschränkung zur Anerkennung von Täterhandlungen?",
    "a": "Bildung erhöht Anerkennung",
    "b": "Mehr Beteiligung = weniger Anerkennung",
    "c": "Alter entscheidend",
    "d": "Nur Medien relevant",
    "richtig": "b",
    "begruendung": "Selbstbild-Bedrohung steigt mit Beteiligung."
  },
  {
    "frage": "Welche Analysemethode wurde verwendet?",
    "a": "SEM",
    "b": "Regression",
    "c": "Bootstrapping-Mediation",
    "d": "Faktorenanalyse",
    "richtig": "c",
    "begruendung": "Bootstrapping erlaubt robuste Mediationsanalyse."
  },
  {
    "frage": "Warum war Liberia ein geeigneter Kontext?",
    "a": "Klare Täterrollen",
    "b": "Alle Gruppen waren Täter und Opfer",
    "c": "UN-Prozess",
    "d": "Stabile Kooperation",
    "richtig": "b",
    "begruendung": "Unklare Rollen machten das Modell testbar."
  }
  ];