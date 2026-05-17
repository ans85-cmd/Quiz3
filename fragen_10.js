const questions = [
  {
    "frage": "Was ist die Hauptaufgabe des Community-Psychologen/der Community-Psychologin in Forschungsphase 5?",
    "a": "Die Maßnahme eigenständig durchführen und evaluieren",
    "b": "Den Entscheidungsprozess unterstützen und die Maßnahmenplanung datenbasiert anleiten",
    "c": "Die Zielgruppe über geplante Maßnahmen informieren",
    "d": "Rechtliche Rahmenbedingungen für die Maßnahme festlegen",
    "richtig": "b",
    "begruendung": "Die CP-Rolle ist beratend-anleitend, nicht ausführend. „Datenbasiert” ist ein Schlüsselbegriff: Maßnahmen müssen immer auf vorhandene Daten und Theorie gestützt sein, nicht auf Intuition."
  },
  {
    "frage": "Welcher Schritt kommt in der Konzeption datenbasierter Maßnahmen direkt nach dem „Überblick über das Thema”?",
    "a": "Auswahl der Evaluationsmethoden",
    "b": "Entwicklung der Maßnahmenschritte",
    "c": "Einbettung in den Kontext",
    "d": "Durchführung der Maßnahme",
    "richtig": "c",
    "begruendung": "Die Reihenfolge ist: Überblick → Einbettung in den Kontext → Skizzierung/Vergleich von Maßnahmen → Auswahl & Ausarbeitung → Evaluation."
  },
  {
    "frage": "Was versteht man unter einem Wirkmodell in der Community Psychology?",
    "a": "Ein Modell, das die Wirksamkeit bereits evaluierter Messinstrumente darstellt",
    "b": "Eine Gegenüberstellung verschiedener möglicher Maßnahmen mit ihren Vor- und Nachteilen",
    "c": "Eine theoretisch basierte Darstellung der Zusammenhänge zwischen relevanten Variablen einer Maßnahme",
    "d": "Ein Evaluationsdesign, das den Erfolg der Maßnahme misst",
    "richtig": "c",
    "begruendung": "Ein Wirkmodell zeigt, welche psychologischen Prozesse miteinander zusammenhängen und wie Veränderungen zustande kommen."
  },
  {
    "frage": "Im Wirkmodell zur Aggressionsreduktion (Gollwitzer & Jäger, 2014) werden zwei Mediatoren zwischen „Soziale Kompetenzen” und „Reduktion von Aggression” angenommen. Welche sind das?",
    "a": "Empathie und Frustrationstoleranz",
    "b": "Selbstwirksamkeitserwartungen und sozial-kognitive Kompetenzen",
    "c": "Emotionsregulation und Impulskontrolle",
    "d": "Prosoziales Verhalten und Konfliktlösekompetenz",
    "richtig": "b",
    "begruendung": "Soziale Kompetenzen wirken über Selbstwirksamkeitserwartungen und sozial-kognitive Kompetenzen auf die Reduktion von Aggression."
  },
  {
    "frage": "Warum ist das Wirkmodell auch für die Evaluation einer Maßnahme wichtig?",
    "a": "Es legt fest, welche Messinstrumente generell als valide gelten",
    "b": "Es bestimmt, welche Kontextfaktoren bei der Implementierung zu beachten sind",
    "c": "Es ermöglicht gezielte Messung genau der Prozesse, die verändert werden sollten",
    "d": "Es vergleicht die Maßnahme mit bereits bestehenden Interventionen",
    "richtig": "c",
    "begruendung": "Was verändert werden soll, muss auch gemessen werden. Ohne Wirkmodell bleibt die Evaluation eine Blackbox."
  },
  {
    "frage": "Was ist bei der Kontextanalyse im Rahmen der Maßnahmenplanung zu beachten?",
    "a": "Nur die direkte Zielgruppe der Maßnahme wird analysiert",
    "b": "Ausschließlich rechtliche Rahmenbedingungen sind relevant",
    "c": "Neben der Zielgruppe werden auch weitere betroffene Gruppen und gesetzliche Rahmenbedingungen berücksichtigt",
    "d": "Die Kontextanalyse ersetzt die Bedarfsanalyse",
    "richtig": "c",
    "begruendung": "Eine Maßnahme wirkt immer über mehrere Gruppen hinweg und ist in organisatorische und rechtliche Rahmenbedingungen eingebettet."
  },
  {
    "frage": "Was kennzeichnet eine evidenzbasierte Maßnahmenkonzeption in der Community Psychology?",
    "a": "Die Maßnahme wird ausschließlich auf Basis von Praxiserfahrungen entwickelt",
    "b": "Die Maßnahme basiert auf theoretischem Wissen und vorliegenden Daten, nicht auf einem theoriefreien Raum",
    "c": "Es werden nur Maßnahmen eingesetzt, die bereits in identischen Kontexten erprobt wurden",
    "d": "Die Zielgruppe entscheidet allein, welche Maßnahme durchgeführt wird",
    "richtig": "b",
    "begruendung": "Evidenzbasiert bedeutet: Kombination aus Theorie und Daten als Grundlage der Planung."
  },
  {
    "frage": "Was sind boundary conditions im Kontext des Maßnahmenvergleichs?",
    "a": "Gesetzliche Grenzen für die Durchführung von Interventionen",
    "b": "Bedingungen, unter denen eine Maßnahme aus Kontext A im Kontext B möglicherweise nicht die gleiche Wirkung erzielt",
    "c": "Ethische Mindeststandards für die Durchführung von Interventionen",
    "d": "Finanzielle Obergrenzen für die Maßnahmenentwicklung",
    "richtig": "b",
    "begruendung": "Boundary conditions beschreiben, unter welchen Bedingungen eine Maßnahme übertragbar ist oder nicht."
  },
  {
    "frage": "Welches Kriterium ist laut Vorlesung bei der Grünen Liste Prävention die grundlegendste Anforderung für eine Maßnahme?",
    "a": "Mindestens drei unabhängige Evaluationsstudien mit signifikanten Effekten",
    "b": "Nachgewiesene Kostenwirksamkeit im Vergleich zu bestehenden Maßnahmen",
    "c": "Theoretisch begründbare und nachvollziehbare Wirkannahmen",
    "d": "Internationale Replikation der Ergebnisse",
    "richtig": "c",
    "begruendung": "Die unterste Stufe ist die theoretische Begründbarkeit – erst danach folgen empirische Nachweise."
  },
  {
    "frage": "Was müssen bei der Entwicklung konkreter Maßnahmenschritte unbedingt berücksichtigt werden?",
    "a": "Spezifische Ziele, Methodenauswahl und mögliche Nebenwirkungen",
    "b": "Allgemeine Wirkannahmen, Bedarfsanalyse und Kontextfaktoren",
    "c": "Theoretische Begründung, Zielgruppen und Interessensgruppen",
    "d": "Evaluationsdesign, Messinstrumente und Rückbezug auf das Wirkmodell",
    "richtig": "a",
    "begruendung": "Bei Maßnahmenschritten geht es konkret um Umsetzung, Methoden und mögliche Risiken."
  },
  {
    "frage": "Welches Beispiel aus der Vorlesung illustriert mögliche Nebenwirkungen bei Interventionsmethoden?",
    "a": "Bürgerentscheide können zu unrepräsentativen Ergebnissen führen, wenn zu wenige teilnehmen",
    "b": "Online-Partizipation kann bestimmte Bevölkerungsgruppen ausschließen",
    "c": "Perspektivübernahme kann Meta-Stereotype aktivieren und positive Effekte blockieren",
    "d": "Aktivierende Befragungen können unerwünschte politische Mobilisierung auslösen",
    "richtig": "c",
    "begruendung": "Meta-Stereotype können durch Perspektivübernahme aktiviert werden und die Wirkung einer Intervention sogar verschlechtern."
  },
  {
    "frage": "Welche Partizipationstechnik gehört in der Systematik von Bischoff, Selle & Sinning (2005) zur Kategorie „Erkunden, Informationen beschaffen”?",
    "a": "Bürgerbegehren",
    "b": "Runder Tisch",
    "c": "Aktivierende Befragung",
    "d": "Open Space",
    "richtig": "c",
    "begruendung": "Aktivierende Befragung dient sowohl der Informationsgewinnung als auch der Aktivierung zur Mitwirkung."
  },
  {
    "frage": "Wie läuft eine aktivierende Befragung typischerweise ab?",
    "a": "Kontaktaufnahme → Gesprächseröffnung → Situationsabfrage → Ideenentwicklung → Aktivierung → Mitwirkungsangebot",
    "b": "Problemidentifikation → Bedarfsanalyse → Datenerhebung → Auswertung → Rückmeldung",
    "c": "Informieren → Diskutieren → Abstimmen → Umsetzen → Evaluieren",
    "d": "Einladung → Vortrag → Diskussion → Abstimmung → Protokoll",
    "richtig": "a",
    "begruendung": "Die aktivierende Befragung folgt einem klar strukturierten Ablauf und endet mit einem konkreten Mitwirkungsangebot."
  },
  {
    "frage": "Was unterscheidet die Ausstellung als Partizipationsmethode von einer Bürgerversammlung?",
    "a": "Die Ausstellung ermöglicht formelle Abstimmungen, die Versammlung nur informelle Diskussionen",
    "b": "Die Ausstellung ist leichter zugänglich und hat niedrigere Teilnahmehürden als eine Versammlung",
    "c": "Die Ausstellung richtet sich an Entscheidungsträger, die Versammlung an die Allgemeinheit",
    "d": "Die Ausstellung findet online statt, die Versammlung ist immer ein Präsenzformat",
    "richtig": "b",
    "begruendung": "Ausstellungen sind niedrigschwellig, während Bürgerversammlungen aktives Sprechen in Gruppen erfordern."
  },
  {
    "frage": "Welches Problem bei Bürgerversammlungen wird in der Vorlesung explizit angesprochen?",
    "a": "Sie sind zu kostenintensiv für kleinere Gemeinden",
    "b": "Nur wenige Anwesende trauen sich, ihre Meinung in großer Runde zu äußern",
    "c": "Sie werden von der Bevölkerung grundsätzlich als wenig seriös wahrgenommen",
    "d": "Rechtlich sind Bürgerversammlungen nur bei bestimmten Themen zulässig",
    "richtig": "b",
    "begruendung": "Viele Menschen äußern sich ungern in großen Gruppen – daher ist Moderation entscheidend."
  },
  {
    "frage": "Was sind Beiräte und Ausschüsse in der Systematik der Partizipationstechniken?",
    "a": "Informelle Kooperationsformen für konflikthafte Themen",
    "b": "Online-Beteiligungsformate für spezifische Bevölkerungsgruppen",
    "c": "Formal definierte Beteiligungsformen für fachliche Beratung und Entscheidungsvorbereitung",
    "d": "Techniken der aktivierenden Informationsbeschaffung",
    "richtig": "c",
    "begruendung": "Beiräte sind institutionalisierte, formal definierte Beteiligungsformen mit beratender Funktion."
  },
  {
    "frage": "Was ist unter „blended participation” zu verstehen?",
    "a": "Eine Partizipationsform, bei der Experten und Laien gleichberechtigt zusammenarbeiten",
    "b": "Die Kombination von Online-Beteiligung (E-Participation) mit herkömmlichen Partizipationsmethoden",
    "c": "Ein Verfahren, bei dem verschiedene Interessensgruppen gemeinsam Lösungen erarbeiten",
    "d": "Die schrittweise Steigerung von Beteiligungsintensität über mehrere Phasen",
    "richtig": "b",
    "begruendung": "Blended Participation kombiniert digitale und analoge Beteiligungsformen."
  },
  {
    "frage": "Welches Risiko der E-Participation wird in der Vorlesung besonders betont?",
    "a": "Datenschutzverletzungen durch unzureichend gesicherte Online-Plattformen",
    "b": "Zu hohe Kosten für kleine Organisationen ohne eigene IT-Abteilung",
    "c": "Selektivität – bestimmte Bevölkerungsgruppen werden nicht erreicht, weil sie diese Medien weniger nutzen",
    "d": "Manipulation der Ergebnisse durch externe Akteure",
    "richtig": "c",
    "begruendung": "Selektivität führt dazu, dass bestimmte Gruppen systematisch unterrepräsentiert sind."
  },
  {
    "frage": "Was ist das Kernelement des Runden Tisches als Partizipationsformat?",
    "a": "Schnelle Entscheidungsfindung durch Mehrheitsabstimmung",
    "b": "Gleichberechtigte Diskussion konfliktträchtiger Aufgaben mit dem Ziel gemeinsamer Lösungen",
    "c": "Einseitige Informationsweitergabe von Experten an Bürger:innen",
    "d": "Anonyme Meinungsabgabe ohne direkten Austausch zwischen Beteiligten",
    "richtig": "b",
    "begruendung": "Zentral ist die gleichberechtigte Diskussion mit dem Ziel gemeinsamer Lösungen."
  },
  {
    "frage": "Wann sollte die Methode „Open Space” laut Vorlesung NICHT eingesetzt werden?",
    "a": "Wenn mehr als 50 Personen teilnehmen sollen",
    "b": "Wenn die Themen sehr komplex und fachlich anspruchsvoll sind",
    "c": "Wenn der Weg im Grunde bereits vorgezeichnet ist und nur scheinbare Offenheit besteht",
    "d": "Wenn keine professionelle Moderation verfügbar ist",
    "richtig": "c",
    "begruendung": "Open Space setzt echte Offenheit voraus – sonst entsteht Pseudopartizipation."
  },
  {
    "frage": "Was unterscheidet „Kooperieren” von „Beteiligen” in der Partizipationssystematik?",
    "a": "Kooperieren bezieht sich auf formelle, Beteiligen auf informelle Verfahren",
    "b": "Beim Kooperieren arbeiten alle Beteiligten gleichberechtigt zusammen, beim Beteiligen werden Bürger:innen in Entscheidungsprozesse einbezogen, ohne Gleichberechtigung garantiert zu sein",
    "c": "Kooperieren findet online statt, Beteiligen in Präsenz",
    "d": "Kooperieren ist auf kleine Gruppen beschränkt, Beteiligen richtet sich an die gesamte Bevölkerung",
    "richtig": "b",
    "begruendung": "Kooperieren bedeutet echte Gleichberechtigung, während Beteiligen eine Einbindung mit unterschiedlicher Einflussstärke darstellt."
  },
  {
    "frage": "Welche Aussage zur Rolle von Partizipation als Frühwarnsystem ist korrekt?",
    "a": "Partizipation dient primär dazu, die Öffentlichkeitsarbeit für eine Maßnahme zu verbessern",
    "b": "Durch frühe Einbeziehung von Beteiligten können mögliche Widerstände und Hürden frühzeitig erkannt werden",
    "c": "Frühzeitige Partizipation ersetzt die systematische Datenerhebung in Phase 3",
    "d": "Partizipation als Frühwarnsystem ist nur in politischen Kontexten relevant",
    "richtig": "b",
    "begruendung": "Frühzeitige Beteiligung hilft, Probleme früh zu erkennen und spätere Anpassungen zu vermeiden."
  },
  {
    "frage": "Was sollte beim Evaluationsdesign bereits zu einem frühen Zeitpunkt festgelegt werden?",
    "a": "Die finanzielle Vergütung für Evaluatoren",
    "b": "Das Design und die Messinstrumente, abgestimmt auf das Wirkmodell und die relevanten Indikatoren",
    "c": "Die Zusammensetzung des Community-Beirats für die Nachbefragung",
    "d": "Die Anzahl der Maßnahmendurchführungen vor der ersten Zwischenevaluation",
    "richtig": "b",
    "begruendung": "Das Evaluationsdesign muss früh festgelegt werden, damit die richtigen Variablen gemessen werden können."
  },
  {
    "frage": "Welche der folgenden Aussagen über Partizipation in der Community Psychology ist laut Vorlesung korrekt?",
    "a": "Partizipation ist nur in der Phase der Maßnahmenentwicklung sinnvoll",
    "b": "Partizipation erhöht zwar den Aufwand, nicht aber die Qualität der Maßnahmen",
    "c": "Partizipation sollte in allen Phasen der Interventionsplanung berücksichtigt werden, soweit möglich",
    "d": "Wenn Partizipation nicht umsetzbar ist, sollte zumindest Pseudo-Partizipation eingesetzt werden",
    "richtig": "c",
    "begruendung": "Partizipation ist ein Grundprinzip und sollte über alle Phasen hinweg integriert werden."
  },
  {
    "frage": "Welche Aussage zu bestehenden Maßnahmen bei der Interventionsplanung ist korrekt?",
    "a": "Es ist immer besser, eine neue Maßnahme zu entwickeln als eine bestehende zu übernehmen",
    "b": "Bestehende Maßnahmen können direkt aus einem Kontext in einen anderen übertragen werden",
    "c": "Bestehende Maßnahmen können genutzt, modifiziert oder als Ausgangspunkt für neue Entwicklungen dienen – vorausgesetzt, die Passung zum Kontext wird kritisch geprüft",
    "d": "Nur Maßnahmen, die in der Grünen Liste Prävention gelistet sind, sind als Ausgangspunkt geeignet",
    "richtig": "c",
    "begruendung": "Maßnahmen sollten angepasst werden, nicht blind übernommen oder vollständig neu entwickelt werden."
  },
  {
    "frage": "Welche Aussage zur Rolle der Community-Psycholog:in bei der Durchführung von Maßnahmen ist korrekt?",
    "a": "Die CP führt die Maßnahme immer selbst durch, da nur so die Qualität gesichert werden kann",
    "b": "Die Rolle ist festgelegt: CP-Fachkräfte sind immer nur beratend tätig",
    "c": "Die Rolle kann variieren – von beratend-abgeschlossen über begleitend bis hin zum Training von Durchführenden",
    "d": "Die CP übernimmt ausschließlich die Evaluation, nicht die Durchführung",
    "richtig": "c",
    "begruendung": "Die Rolle ist flexibel und abhängig vom Kontext und den beteiligten Akteuren."
  },
  {
    "frage": "Was unterscheidet das Expertenmodell vom Kooperativen Modell in der Community Psychology?",
    "a": "Im Expertenmodell wird ausschließlich quantitativ geforscht, im kooperativen Modell qualitativ",
    "b": "Im Expertenmodell liegt die Kompetenz bei den Fachleuten, im kooperativen Modell wird gemeinsam mit der Community an Inhalten gearbeitet",
    "c": "Das Expertenmodell setzt auf Partizipation, das kooperative Modell auf reine Fachberatung",
    "d": "Im Expertenmodell werden nur bestehende Maßnahmen eingesetzt, im kooperativen Modell nur neu entwickelte",
    "richtig": "b",
    "begruendung": "Unterschied = Grad der Beteiligung und Kontrolle zwischen Expert:innen und Community."
  },
  {
    "frage": "Was ist laut Vorlesung das Ziel einer maßgeschneiderten Intervention?",
    "a": "Die Maßnahme soll möglichst kostengünstig und schnell umsetzbar sein",
    "b": "Die Maßnahme soll auf die spezifischen Bedürfnisse und den Kontext der Zielgruppe abgestimmt sein, nicht an ihr vorbeigehen",
    "c": "Die Maßnahme soll auf möglichst viele verschiedene Zielgruppen gleichzeitig anwendbar sein",
    "d": "Die Maßnahme soll internationale Standards für Interventionsforschung erfüllen",
    "richtig": "b",
    "begruendung": "Maßgeschneidert bedeutet passgenau auf Zielgruppe und Kontext abgestimmt."
  },
  {
    "frage": "In welchen Anwendungsbereichen werden laut Vorlesung in der Community Psychology Interventionen entwickelt?",
    "a": "Ausschließlich im schulischen und klinisch-psychologischen Bereich",
    "b": "Nur in Bereichen mit nachgewiesener gesellschaftlicher Relevanz wie Armut und Kriminalität",
    "c": "Unter anderem in den Bereichen Umwelt, Gesundheit, Migration, politisches Verhalten und Stadtteilentwicklung",
    "d": "Primär in Organisationen und Unternehmen, da dort die Ressourcen für Evaluationen vorhanden sind",
    "richtig": "c",
    "begruendung": "Community Psychology ist breit aufgestellt und umfasst viele gesellschaftliche Bereiche."
  },
  {
    "frage": "Wie unterscheidet sich eine Bachelorarbeit im Bereich Community Psychology (Maßnahmenkonzeption) von einer realen Interventionsdurchführung?",
    "a": "In der Bachelorarbeit wird die Maßnahme durchgeführt, aber nicht evaluiert",
    "b": "Die Maßnahme wird systematisch entwickelt und theoretisch eingebettet, aber nicht durchgeführt – stattdessen wird ein Evaluationskonzept erstellt",
    "c": "In der Bachelorarbeit werden ausschließlich bestehende Maßnahmen analysiert und verglichen",
    "d": "Die Bachelorarbeit konzentriert sich auf die Datenerhebung, nicht auf die Maßnahmenplanung",
    "richtig": "b",
    "begruendung": "In der Bachelorarbeit wird geplant und konzipiert, aber nicht praktisch umgesetzt."
  },
  {
    "frage": "Was ist beim Beschwerdemanagement als Partizipationsmethode der erste Schritt im Ablauf?",
    "a": "Beschwerde-Auswertung",
    "b": "Beschwerde-Bearbeitung",
    "c": "Stimulierung",
    "d": "Beschwerde-Controlling",
    "richtig": "c",
    "begruendung": "Der erste Schritt ist die Stimulierung – also das aktive Ermöglichen und Kommunizieren von Beschwerdemöglichkeiten."
  },
  {
    "frage": "Was ist eine zentrale Voraussetzung dafür, dass ein Bürgerentscheid möglichst viele Bürger:innen erreicht und repräsentativ ist?",
    "a": "Der Entscheid muss von einer neutralen staatlichen Behörde organisiert werden",
    "b": "Es braucht vielfältige und verständliche Informationen, faire Voraussetzungen sowie ergänzende Mitwirkungsangebote und breite Aktivierung",
    "c": "Nur registrierte Gemeindemitglieder mit Wohnsitz über 5 Jahre dürfen teilnehmen",
    "d": "Der Bürgerentscheid muss von einem Expertengremium vorbereitet werden",
    "richtig": "b",
    "begruendung": "Repräsentativität entsteht durch Zugang, Information und aktive Mobilisierung aller Gruppen."
  },
  {
    "frage": "Warum ist es beim Runden Tisch wichtig, dass die Teilnehmenden „Gewicht” für ihre Gruppe haben?",
    "a": "Damit die Diskussionen effizienter geführt werden können",
    "b": "Damit sichergestellt ist, dass die Person tatsächlich für ihre Gruppe sprechen kann und deren Interessen vertritt",
    "c": "Damit rechtliche Beschlüsse des Runden Tisches bindend sind",
    "d": "Damit die Moderation gezielt Schweigende ansprechen kann",
    "richtig": "b",
    "begruendung": "Teilnehmende müssen ihre Gruppe repräsentieren und deren Interessen authentisch einbringen."
  },
  {
    "frage": "Was ist die besondere Rolle der Moderation beim Open Space im Vergleich zu anderen Partizipationsformaten?",
    "a": "Die Moderation übernimmt beim Open Space eine besonders aktive und steuernde Rolle",
    "b": "Die Moderation hält sich im Hintergrund, organisiert den Rahmen und bereitet vor und nach – die Themenbearbeitung liegt bei den Teilnehmenden",
    "c": "Die Moderation beim Open Space ist optional, da die Teilnehmenden selbst moderieren",
    "d": "Die Moderation bewertet die Ergebnisse und wählt die besten Ideen aus",
    "richtig": "b",
    "begruendung": "Open Space lebt von Selbstorganisation – die Moderation schafft nur den Rahmen."
  },
  {
    "frage": "Warum werden Bürgerversammlungen laut Vorlesung als sinnvoll eingestuft, wenn sie kontinuierlich durchgeführt werden?",
    "a": "Weil dadurch die rechtliche Legitimation der Beschlüsse gestärkt wird",
    "b": "Weil die Bürger:innen so den Eindruck gewinnen, dass ihre Stimme gehört wird und die Veranstaltung keine Alibifunktion hat",
    "c": "Weil nur durch Wiederholung statistisch valide Daten über Bürgermeinungen gesammelt werden können",
    "d": "Weil einmalige Versammlungen zu teuer in der Organisation sind",
    "richtig": "b",
    "begruendung": "Kontinuität schafft Vertrauen und verhindert, dass Partizipation als reine Alibimaßnahme wahrgenommen wird."
  }
  ];