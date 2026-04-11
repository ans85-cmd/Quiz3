const questions = [
  {
    "frage": "Welcher Grundwert der Community Psychology nach Dalton et al. (2007) bezieht sich spezifisch auf die faire Allokation von Ressourcen und Chancen in einer Gesellschaft?",
    "a": "Soziale Gerechtigkeit.",
    "b": "Empowerment.",
    "c": "Respekt vor menschlicher Diversität.",
    "d": "Bürgerbeteiligung.",
    "richtig": "a",
    "begruendung": "Soziale Gerechtigkeit umfasst laut Studienbrief die Verteilungs- und Verfahrensgerechtigkeit von Ressourcen und Macht [1]."
  },
  {
    "frage": "Was ist laut Marybeth Shinn und Siobhan Toohey (2003) das Hauptmerkmal des „Context Minimization Error“?",
    "a": "Die statistische Vernachlässigung von Ausreißern in Feldstudien.",
    "b": "Die bewusste Reduktion von Forschungsvariablen auf biologische Faktoren.",
    "c": "Ein methodischer Fehler bei der Auswahl von Kontrollgruppen.",
    "d": "Die Tendenz von Psycholog*innen, den Einfluss des sozialen Kontexts auf das Individuum zu unterschätzen.",
    "richtig": "d",
    "begruendung": "Psycholog*innen neigen dazu, die Wirkung von Nachbarschaften und Communities in ihren Theorien zu ignorieren [2]."
  },
  {
    "frage": "In welche Ebene des sozial-ökologischen Mehrebenenansatzes fallen laut Studienbrief „Dörfer“, „Städte“ oder „lokale Nachbarschaften“?",
    "a": "Mikrosysteme.",
    "b": "Organisationen.",
    "c": "Lokal-administrative Communities.",
    "d": "Makrosysteme.",
    "richtig": "c",
    "begruendung": "Diese Ebene umfasst geografische und administrative Einheiten, die mehrere Mikrosysteme und Organisationen beherbergen [2]."
  },
  {
    "frage": "Welches wissenschaftliche Ideal kritisiert Julian Rappaport (1977) im Rahmen der „wissenschaftlichen Krise“ der Psychologie?",
    "a": "Die Forderung nach einer wertfreien, rein objektiven Forschung.",
    "b": "Die Anwendung qualitativer Methoden in der Grundlagenforschung.",
    "c": "Die Einbeziehung von Laienexperten in den Forschungsprozess.",
    "d": "Die starke Orientierung an gesellschaftlich relevanten Problemen.",
    "richtig": "a",
    "begruendung": "Rappaport kritisierte, dass die Psychologie versuchte, wertfrei zu sein und dabei ihre gesellschaftliche Relevanz verlor [3]."
  },
  {
    "frage": "Was versteht Robert Putnam (2000) unter dem Begriff „Soziales Kapital“?",
    "a": "Die finanziellen Rücklagen einer Gemeinde für soziale Projekte.",
    "b": "Beziehungen zwischen Individuen, soziale Netzwerke und das daraus entstehende Vertrauen.",
    "c": "Die Summe der Bildungserfolge innerhalb eines Stadtteils.",
    "d": "Den Marktwert von Immobilien in einer funktionierenden Community.",
    "richtig": "b",
    "begruendung": "Soziales Kapital basiert auf Netzwerken, Reziprozität und sozialem Vertrauen [3, 4]."
  },
  {
    "frage": "Das „Verhältnismäßigkeitsprinzip“ dient in der Community Psychology als Leitlinie wofür?",
    "a": "Zur Berechnung der optimalen Gruppengröße in Mikrosystemen.",
    "b": "Zur Bestimmung des Budgets für Interventionsmaßnahmen.",
    "c": "Zur Rechtfertigung der Priorisierung eines Wertes bei einem Wertedilemma.",
    "d": "Zur Evaluation der statistischen Signifikanz von Feldexperimenten.",
    "richtig": "c",
    "begruendung": "Es besagt, dass die Priorisierung eines Wertes nur gerechtfertigt ist, wenn Nachteile in angemessenem Verhältnis zu den Vorteilen stehen [3]."
  },
  {
    "frage": "Welches historische Ereignis gilt als die Geburtsstunde der US-amerikanischen Community Psychology?",
    "a": "Die Rede von Martin Luther King Jr. vor der APA 1967.",
    "b": "Die Swampscott-Konferenz im Jahr 1965.",
    "c": "Die Veröffentlichung von Bronfenbrenners Ökologie-Modell 1979.",
    "d": "Die Gründung der ersten psychiatrischen Institutsambulanz.",
    "richtig": "b",
    "begruendung": "In Swampscott wurde das Feld der Community Psychology erstmals fachlich definiert [3]."
  },
  {
    "frage": "Was charakterisiert die „Verfahrensgerechtigkeit“ (procedural justice)?",
    "a": "Dass das Ergebnis der Ressourcenverteilung für alle Mitglieder identisch ist.",
    "b": "Dass der Modus der Verteilung (das Verfahren) als fair und angemessen wahrgenommen wird.",
    "c": "Die Schnelligkeit, mit der soziale Probleme gelöst werden.",
    "d": "Die gesetzliche Verpflichtung zur Gleichbehandlung vor Gericht.",
    "richtig": "b",
    "begruendung": "Sie bezieht sich darauf, ob die Prinzipien der Verteilung (z.B. Mitspracherecht) fair sind [1]."
  },
  {
    "frage": "Wie definiert der Studienbrief die Rolle des „teilnehmenden Konzeptbildners“ (participant conceptualizer)?",
    "a": "Als Forscher, der distanziert beobachtet, um Objektivität zu wahren.",
    "b": "Als Aktivist, der politische Ziele ohne wissenschaftliche Basis verfolgt.",
    "c": "Als Psychologe, der für Klienten entscheidet, welches Umfeld für sie am besten ist.",
    "d": "Als Experte, der wissenschaftliches Wissen mit dem Erfahrungswissen der Community verbindet.",
    "richtig": "d",
    "begruendung": "Diese Rolle verknüpft Forschung und Praxis partnerschaftlich [3, 5]."
  },
  {
    "frage": "Warum ist die CP in Deutschland weniger als eigenständiges Fach an Universitäten institutionalisiert als in den USA?",
    "a": "Weil Themen der CP in Deutschland bereits durch Fächer wie Gesundheits- oder Umweltpsychologie abgedeckt werden.",
    "b": "Weil es in Deutschland keine relevanten sozialen Brennpunkte gibt.",
    "c": "Weil die deutsche Psychologie ausschließlich klinisch orientiert ist.",
    "d": "Weil die rechtlichen Rahmenbedingungen Forschung in Communities verbieten.",
    "richtig": "a",
    "begruendung": "Etablierte Teildisziplinen in Deutschland haben viele Themen der CP bereits „besetzt“ [3]."
  },
  {
    "frage": "Welcher Forscher prägte den Satz: „Nichts ist so praktisch wie eine gute Theorie“?",
    "a": "Julian Rappaport.",
    "b": "Kurt Lewin.",
    "c": "Urie Bronfenbrenner.",
    "d": "Robert Putnam.",
    "richtig": "b",
    "begruendung": "Lewin gilt als Pionier der Verbindung von Grundlagenforschung und praktischer Anwendung (Aktionsforschung) [3]."
  },
  {
    "frage": "Was beschreibt das „Interdependenzprinzip“ innerhalb der sozial-ökologischen Perspektive?",
    "a": "Dass Individuen in einer Community völlig autark handeln sollten.",
    "b": "Dass Veränderungen in einem Systemteil Auswirkungen auf andere Teile und Ebenen haben können.",
    "c": "Dass nur die ökonomische Makroebene das individuelle Verhalten steuert.",
    "d": "Dass Forschung und Anwendung streng getrennt voneinander existieren müssen.",
    "richtig": "b",
    "begruendung": "Systeme sind vernetzt; eine Maßnahme an einer Stelle erzeugt Welleneffekte im Gesamtsystem [3]."
  },
  {
    "frage": "Welcher Wert der CP betont, dass Community-Mitglieder als „Experten ihres eigenen Lebens“ in Prozesse einbezogen werden sollten?",
    "a": "Empirische Fundierung.",
    "b": "Individuelles Wohlergehen.",
    "c": "Partnerschaftliche Orientierung.",
    "d": "Soziale Gerechtigkeit.",
    "richtig": "c",
    "begruendung": "Diese Haltung reflektiert den Respekt vor dem erfahrungsbasierten Wissen der Mitglieder [3, 6]."
  },
  {
    "frage": "Was ist ein zentrales Ziel eines „salutogenetischen“ Ansatzes in der CP?",
    "a": "Die medikamentöse Behandlung von psychischen Störungen vor Ort.",
    "b": "Die Identifikation und Mobilisierung von Ressourcen zur Problembewältigung.",
    "c": "Die Isolation von Risikogruppen zur Vermeidung von Ansteckungseffekten.",
    "d": "Die rein statistische Erfassung von Krankheitsraten in einem Stadtteil.",
    "richtig": "b",
    "begruendung": "CP fokussiert auf Stärken und Ressourcen (Salutogenese) statt nur auf Defizite [3]."
  },
  {
    "frage": "Welcher Begriff beschreibt die Tendenz, die Ursache für soziale Notlagen primär in den Defiziten der Betroffenen selbst zu suchen?",
    "a": "Context Minimization Error.",
    "b": "Blaming the victim.",
    "c": "Psychologischer Reduktionismus.",
    "d": "Sozialer Determinismus.",
    "richtig": "b",
    "begruendung": "„Blaming the victim“ schreibt die Verantwortung für Probleme dem Individuum zu, statt die Umweltbedingungen zu prüfen [3]."
  },
  {
    "frage": "In der Community Psychology ist Forschung typischerweise wie angelegt?",
    "a": "Partizipationsorientiert.",
    "b": "Streng hierarchisch.",
    "c": "Rein labor-experimentell.",
    "d": "Theorie-fern.",
    "richtig": "a",
    "begruendung": "Mitglieder der Community haben Einfluss auf die Gestaltung und bringen eigene Ressourcen ein [5]."
  },
  {
    "frage": "Was ist laut Studienbrief ein Merkmal von „Mikrosystemen“?",
    "a": "Es handelt sich um großflächige administrative Einheiten.",
    "b": "Sie zeichnen sich durch direkte interpersonelle Interaktionen aus (z.B. Familie, Freundeskreis).",
    "c": "Sie existieren nur in der digitalen Welt.",
    "d": "Sie haben keinen Einfluss auf das individuelle Wohlbefinden.",
    "richtig": "b",
    "begruendung": "Mikrosysteme sind die unmittelbarsten Umwelten des Individuums [2]."
  },
  {
    "frage": "Welcher Wert verpflichtet die CP dazu, Theorien und Interventionen auf systematisch gewonnene Daten zu stützen?",
    "a": "Empowerment.",
    "b": "Sense of Community.",
    "c": "Empirische Fundierung.",
    "d": "Verteilungs-Gerechtigkeit.",
    "richtig": "c",
    "begruendung": "CP sieht sich als empirische Wissenschaft, die dem Kanon der Genauigkeit und Skepsis verpflichtet ist [3]."
  },
  {
    "frage": "Was bedeutet „Sense of Community“ nach Sarason (1974)?",
    "a": "Die Verpflichtung, alle individuellen Ziele für die Gruppe aufzugeben.",
    "b": "Die Wahrnehmung von Zusammengehörigkeit und gegenseitiger Abhängigkeit.",
    "c": "Ein statistisches Maß für die Bevölkerungsdichte.",
    "d": "Ein Gefühl der Überlegenheit gegenüber anderen sozialen Gruppen.",
    "richtig": "b",
    "begruendung": "Es ist das Gefühl, Teil einer verlässlichen und unterstützenden Struktur zu sein [7]."
  },
  {
    "frage": "Warum ist die CP oft interdisziplinär ausgerichtet?",
    "a": "Weil Psychologen alleine keine Erlaubnis für Feldforschung haben.",
    "b": "Weil soziale Probleme komplex sind und auch politische oder ökonomische Aspekte umfassen.",
    "c": "Weil das Studium der CP zu wenig psychologische Inhalte bietet.",
    "d": "Weil es in den USA keine Trennung zwischen Soziologie und Psychologie gibt.",
    "richtig": "b",
    "begruendung": "Communities werden durch historische, politische und soziale Realitäten geprägt, was unterschiedliche Fachperspektiven erfordert [3]."
  },
  {
    "frage": "Welches Modell sieht die CP als Gegenmodell zur individuumszentrierten Psychologie?",
    "a": "Das kognitive Verhaltenstherapie-Modell.",
    "b": "Der sozial-ökologische Mehrebenenansatz.",
    "c": "Das psychoanalytische Triebmodell.",
    "d": "Das rein biologische Krankheitsmodell.",
    "richtig": "b",
    "begruendung": "CP betrachtet Individuen in ihren räumlich und sozial definierten Kontexten [2, 5]."
  },
  {
    "frage": "Was ist laut Dalton et al. (2007) kein Synonym für Bürgerbeteiligung, sondern ein eigenständiger Wert?",
    "a": "Die Einbeziehung von Bürger*innen in kollektive Problemlösungen.",
    "b": "Das passive Empfangen von Sozialleistungen.",
    "c": "Die finanzielle Entschädigung von Ehrenamtlichen.",
    "d": "Die bloße Information der Öffentlichkeit über politische Pläne.",
    "richtig": "a",
    "begruendung": "Bürgerbeteiligung ist ein aktives Verfahren und ein demokratischer Wert an sich [8]."
  },
  {
    "frage": "Auf welcher Ebene wirken kulturelle Überzeugungen und Ideologien?",
    "a": "Individualsystem.",
    "b": "Organisation.",
    "c": "Lokal-administrative Ebene.",
    "d": "Makrosystem.",
    "richtig": "d",
    "begruendung": "Das Makrosystem umfasst die inklusivste Ebene, wie Kulturen oder politische Systeme [2]."
  },
  {
    "frage": "Was forderte Martin Luther King Jr. 1967 in seiner Rede vor der APA?",
    "a": "Dass Psychologen sich mehr auf Laborexperimente konzentrieren sollten.",
    "b": "Dass die Psychologie die Bürgerrechtsbewegung aktiv unterstützen solle.",
    "c": "Eine Erhöhung der Honorare für Therapeuten.",
    "d": "Die Gründung einer neuen Weltreligion auf psychologischer Basis.",
    "richtig": "b",
    "begruendung": "Er forderte die Psychologen auf, sich den brennenden sozialen Fragen der Zeit (Rassismus, Armut) zuzuwenden [3]."
  },
  {
    "frage": "Welcher Wert bezieht sich auf das körperliche, psychische und materielle Wohlsein?",
    "a": "Soziale Gerechtigkeit.",
    "b": "Individuelles und familiäres Wohlergehen.",
    "c": "Empowerment.",
    "d": "Sense of Community.",
    "richtig": "b",
    "begruendung": "Wohlergehen wird in der CP umfassend (nicht nur psychisch) definiert [7]."
  },
  {
    "frage": "Was charakterisiert eine „Organisation“ im Unterschied zu einem „Mikrosystem“?",
    "a": "In Organisationen gibt es niemals direkten Kontakt zwischen Menschen.",
    "b": "Organisationen sind weniger komplex als Mikrosysteme.",
    "c": "Organisationen haben typischerweise eine formalere Struktur (z.B. Satzungen).",
    "d": "Organisationen sind immer profit-orientiert.",
    "richtig": "c",
    "begruendung": "Organisationen (z.B. Schulen, Vereine) haben formale Regeln und Ziele [2]."
  },
  {
    "frage": "Welcher Forscher kritisierte den „Psychologischen Reduktionismus“?",
    "a": "Julian Rappaport.",
    "b": "Kurt Lewin.",
    "c": "Urie Bronfenbrenner.",
    "d": "Robert Putnam.",
    "richtig": "a",
    "begruendung": "Rappaport kritisierte die Einengung auf das Individuum unter Vernachlässigung des Kontexts [3]."
  },
  {
    "frage": "Was ist das Ziel von „Empowerment“ auf Community-Ebene?",
    "a": "Dass alle Bürger das Gleiche verdienen.",
    "b": "Dass Menschen lernen, sich besser an ungerechte Zustände anzupassen.",
    "c": "Die Erhöhung der kollektiven Kontrolle über wichtige Ressourcen und Lebensbedingungen.",
    "d": "Die Abschaffung aller Gesetze.",
    "richtig": "c",
    "begruendung": "Empowerment zielt auf die Erweiterung von Handlungsspielräumen und Macht [3]."
  },
  {
    "frage": "Warum stehen Werte in der CP oft in einem „Spannungsverhältnis“?",
    "a": "Weil Community-Psychologen sich oft streiten.",
    "b": "Weil die Priorisierung eines Wertes (z.B. Gerechtigkeit) zu Lasten eines anderen (z.B. Diversität) gehen kann.",
    "c": "Weil es in der CP keine klaren Definitionen gibt.",
    "d": "Weil die Forschungsergebnisse den Werten meist widersprechen.",
    "richtig": "b",
    "begruendung": "In der Praxis entstehen oft Wertedilemmata, die Abwägung erfordern [9, 10]."
  },
  {
    "frage": "Was bezeichnet der Begriff „proximale Systeme“?",
    "a": "Systeme, die zeitlich weit in der Zukunft liegen.",
    "b": "Systeme, die das Individuum nur indirekt über das Internet beeinflussen.",
    "c": "Systeme, die räumlich und sozial nahe am Individuum liegen (z.B. Familie).",
    "d": "Systeme, die nur aus professionellen Helfern bestehen.",
    "richtig": "c",
    "begruendung": "Proximale Systeme bieten die unmittelbarsten Kontaktmöglichkeiten [2]."
  },
  {
    "frage": "Was ist laut Studienbrief die primäre Motivation der Anwendungswissenschaft?",
    "a": "Erkenntnis um der Erkenntnis willen.",
    "b": "Die Lösung praktischer Probleme.",
    "c": "Die Erhöhung der Zitationsrate.",
    "d": "Die Widerlegung alter Theorien.",
    "richtig": "b",
    "begruendung": "Während Grundlagenforschung nach allgemeiner Erkenntnis strebt, ist Anwendung problemgetrieben [3]."
  },
  {
    "frage": "Welcher Wert schließt „moralischen Relativismus“ explizit aus?",
    "a": "Bürgerbeteiligung.",
    "b": "Sense of Community.",
    "c": "Respekt vor menschlicher Diversität.",
    "d": "Empirische Fundierung.",
    "richtig": "c",
    "begruendung": "Respekt vor anderen Kulturen bedeutet nicht, dass man keine eigenen ethischen Standards mehr haben darf [3]."
  },
  {
    "frage": "Was beschreibt die „Verteilungs-Gerechtigkeit“ (distributive justice)?",
    "a": "Ob das Verfahren der Ressourcenverteilung fair war.",
    "b": "Ob das Ergebnis der Allokation als gerecht wahrgenommen wird.",
    "c": "Dass jeder exakt das gleiche Gehalt bekommt.",
    "d": "Die Anzahl der verteilten Broschüren in einer Nachbarschaft.",
    "richtig": "b",
    "begruendung": "Sie fokussiert auf das tatsächliche Resultat der Verteilung von Chancen und Pflichten [1]."
  },
  {
    "frage": "Was ist ein typisches Berufsfeld für Absolvent*innen der Community Psychology?",
    "a": "Klassische Psychoanalyse in privater Praxis.",
    "b": "Politikberatung und Evaluation sozialer Programme.",
    "c": "Pharmazeutische Forschung im Labor.",
    "d": "Durchführung von Gehirn-Scans in der Neurologie.",
    "richtig": "b",
    "begruendung": "CP-Arbeit findet oft in der Beratung von Organisationen, Kommunen und in der Prävention statt [3]."
  },
  {
    "frage": "Welche Rolle spielt das „Soziale Kapital“ für die Gesundheit einer Community?",
    "a": "Gar keine, da Gesundheit nur genetisch bedingt ist.",
    "b": "Es fungiert als Ressource für gegenseitige Unterstützung und Vertrauen.",
    "c": "Es dient lediglich der Erhöhung des Steueraufkommens.",
    "d": "Es ist ein Hindernis für individuellen Erfolg.",
    "richtig": "b",
    "begruendung": "Netzwerke und Reziprozität stärken die Widerstandsfähigkeit einer Community [4]."
  },
  {
    "frage": "Was charakterisiert das „Individualsystem“ in der CP-Analyse?",
    "a": "Die isolierte Untersuchung von Genen und Hormonen.",
    "b": "Das Erleben und Handeln einer Person in ihren Kontexten.",
    "c": "Die komplette Vernachlässigung der individuellen Psyche.",
    "d": "Die Analyse von Personen ohne jeglichen sozialen Kontakt.",
    "richtig": "b",
    "begruendung": "Auch auf der Individualebene wird der Kontext immer mitgedacht [2, 5]."
  },
  {
    "frage": "Welcher Wert wird laut Studienbrief durch Bürgerbeteiligung gestärkt?",
    "a": "Die administrative Effizienz.",
    "b": "Die Vermeidung jeglicher Meinungsverschiedenheiten.",
    "c": "Die demokratische Mitgestaltung und kollektive Wirksamkeit.",
    "d": "Die finanzielle Einsparung durch unbezahlte Arbeit.",
    "richtig": "c",
    "begruendung": "Beteiligung ist ein Wert an sich und fördert die Demokratie [8]."
  },
  {
    "frage": "In welchem Jahrzehnt begann die Institutionalisierung der CP in den USA massiv?",
    "a": "1920er.",
    "b": "1940er.",
    "c": "1960er.",
    "d": "1990er.",
    "richtig": "c",
    "begruendung": "Die Gründung 1965 in Swampscott markiert den Beginn [3]."
  },
  {
    "frage": "Was ist laut Studienbrief ein Ziel der CP über die „Explikation“ hinaus?",
    "a": "Die rein theoretische Modellbildung ohne Praxisbezug.",
    "b": "Ein Beitrag zur Lösung praktischer Probleme.",
    "c": "Die Ausbildung von ausschließlich klinischen Therapeuten.",
    "d": "Die Abschaffung der empirischen Sozialforschung.",
    "richtig": "b",
    "begruendung": "CP ist explizit eine anwendungsorientierte Wissenschaft [5]."
  },
  {
    "frage": "Welches Prinzip besagt, dass eine Familie als System balanciert sein kann?",
    "a": "Das ökonomische Gleichgewichtsprinzip.",
    "b": "Das Prinzip der sozialen Kontrolle.",
    "c": "Das Interdependenzprinzip (auf Mikro-Ebene).",
    "d": "Das Verhältnismäßigkeitsprinzip.",
    "richtig": "c",
    "begruendung": "Interdependenz beschreibt die Wechselwirkungen innerhalb von Systemen (wie Familien) [3]."
  },
  {
    "frage": "Was kennzeichnet das fachliche Selbstverständnis der Community Psychology in Bezug auf das Verhältnis von Forschung und Praxis?",
    "a": "Die strikte methodische Trennung von Grundlagenforschung und Anwendungsmodellen.",
    "b": "Die bewusste Verzahnung von theoretischer Grundlagenforschung und gesellschaftlich relevanter Anwendung.",
    "c": "Die Konzentration auf rein theoretische Erkenntnisse ohne die Absicht einer praktischen Problemlösung.",
    "d": "Der Verzicht auf empirische Datenerhebung zugunsten von politischem Aktivismus.",
    "richtig": "b",
    "begruendung": "Ein Kernmerkmal der CP ist die Einheit von Forschung und Aktion (nach Lewin), um wissenschaftliche Erkenntnisse direkt für soziale Verbesserungen nutzbar zu machen."
  },
  {
    "frage": "Inwiefern unterscheidet sich die Community Psychology (CP) grundlegend von der traditionellen Klinischen Psychologie?",
    "a": "Die CP ist primärpräventiv und ressourcenorientiert (salutogenetisch) ausgerichtet, statt defizitorientiert zu therapieren.",
    "b": "Die CP befasst sich ausschließlich mit der medikamentösen Behandlung in psychiatrischen Einrichtungen.",
    "c": "Die CP lehnt die Einbeziehung des sozialen Kontexts bei der Entstehung von Störungen ab.",
    "d": "Es gibt keinen Unterschied, da CP lediglich eine andere Bezeichnung für klinische Gruppenpsychologie ist.",
    "richtig": "a",
    "begruendung": "CP verfolgt einen systemischen und präventiven Ansatz, der Stärken (Ressourcen) fördert, während die klassische Klinische Psychologie oft am individuellen Defizit (Pathogenese) ansetzt."
  },
  {
    "frage": "Welches Prinzip des sozial-ökologischen Ansatzes wird deutlich, wenn die wirtschaftliche Situation eines Stadtteils (lokal-administrativ) die Entwicklungschancen der dort lebenden Kinder (Mikrosystem) beeinflusst?",
    "a": "Das Prinzip der statischen Hierarchie.",
    "b": "Das Prinzip der linearen Kausalität.",
    "c": "Das Interdependenzprinzip.",
    "d": "Das Prinzip der individuellen Isolation.",
    "richtig": "c",
    "begruendung": "Das Interdependenzprinzip besagt, dass Systemebenen miteinander vernetzt sind und Veränderungen in einem Teil Effekte auf andere Ebenen haben können [1]."
  },
  {
    "frage": "Wie begegnet die Community Psychology dem potenziellen Konflikt zwischen dem Wert „Respekt vor Diversität“ und universellen ethischen Standards?",
    "a": "Durch die Forderung nach einer vollständigen kulturellen Assimilation aller Minderheiten.",
    "b": "Durch die Verpflichtung auf einen moralischen Relativismus, der alle Praktiken ungefiltert akzeptiert.",
    "c": "Durch die kritische Reflexion, die Respekt vor Vielfalt ermöglicht, ohne die eigenen ethischen Grundwerte (z.B. Menschenrechte) aufzugeben.",
    "d": "Indem Diversität in der Forschung ignoriert wird, um Konflikte zu vermeiden.",
    "richtig": "c",
    "begruendung": "Respekt vor Diversität bedeutet Anerkennung von Vielfalt, darf aber nicht zu moralischem Relativismus führen, bei dem „alles egal“ ist. Eigene Werte bleiben als Kompass bestehen."
  },
  {
    "frage": "Was ist eine zentrale Voraussetzung für die Durchführung „echter“ partizipativer Forschung in einer Community?",
    "a": "Dass die Psycholog*innen als einzige Experten die Richtung des Projekts vorgeben.",
    "b": "Dass Partizipation lediglich als isoliertes Ereignis am Ende einer Studie stattfindet.",
    "c": "Dass möglichst viele Fachbegriffe verwendet werden, um die eigene Kompetenz zu unterstreichen.",
    "d": "Die Anerkennung und Einbeziehung der Community-Mitglieder als „Experten ihres eigenen Lebens“.",
    "richtig": "d",
    "begruendung": "Partizipative Forschung erfordert, dass die Betroffenen nicht als Forschungsobjekte, sondern als Partner mit wertvollem Erfahrungswissen gesehen werden."
  }
];