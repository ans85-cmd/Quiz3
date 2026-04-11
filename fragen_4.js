const questions = [
  {
    "frage": "Welches grundlegende Verständnis von Empowerment vertrat Rappaport (1987)?",
    "a": "Empowerment ist ein dynamischer Prozess bzw. Mechanismus [1].",
    "b": "Empowerment ist eine zeitstabile Persönlichkeitsdisposition [1].",
    "c": "Empowerment ist ein rein individuelles, klinisches Konstrukt [1, 2].",
    "d": "Empowerment beschreibt einen statischen Endzustand nach einer Therapie [1].",
    "richtig": "a",
    "begruendung": "Empowerment wird als Mechanismus gesehen, durch den Kontrolle hergestellt wird, nicht als festes Merkmal [1]."
  },
  {
    "frage": "Auf welchen Ebenen findet Empowerment laut Rappaport (1987) statt?",
    "a": "Ausschließlich auf der Ebene von Individuen [1, 2].",
    "b": "Nur auf der politischen Makro-Ebene eines Staates [2].",
    "c": "Auf der Ebene von Individuen, Organisationen und Communities [1, 2].",
    "d": "Rein auf der biologisch-neurologischen Ebene der Stressbewältigung [1, 3].",
    "richtig": "c",
    "begruendung": "Empowerment ist ein Mehrebenen-Konstrukt [2]."
  },
  {
    "frage": "Was ist ein Kernmerkmal der Empowerment-Definition der Cornell Empowerment Group?",
    "a": "Der Prozess ist wertneutral und verfolgt keine sozialen Ziele [4, 5].",
    "b": "Empowerment erfolgt primär durch die passive Annahme von Hilfe [4, 5].",
    "c": "Er ist durch prosoziale Haltungen wie wechselseitigen Respekt und Fürsorge gekennzeichnet [4, 5].",
    "d": "Empowerment zielt darauf ab, Ressourcen-Privilegien für Eliten zu sichern [4].",
    "richtig": "c",
    "begruendung": "Die Definition betont die prosozialen Werte und die lokale Verankerung [4]."
  },
  {
    "frage": "Wie unterscheidet sich „Macht zu“ (power to) von „Macht über“ (power over)?",
    "a": "„Macht zu“ ist immer mit Zwang verbunden, „Macht über“ mit Freiheit [6, 7].",
    "b": "„Macht zu“ beschreibt die Fähigkeit, eigene Ziele selbstbestimmt zu verwirklichen [7].",
    "c": "„Macht zu“ bezieht sich nur auf finanzielle Ressourcen, nicht auf soziale [8].",
    "d": "Es gibt keinen theoretischen Unterschied zwischen diesen Formen [6].",
    "richtig": "b",
    "begruendung": "„Macht zu“ nutzt Ressourcen (Kapital) zur Realisierung eigener Interessen [7, 8]."
  },
  {
    "frage": "Was versteht man unter „Macht vor“ (power from)?",
    "a": "Die Fähigkeit, sich vor unerwünschten Einflussversuchen Dritter zu schützen [8].",
    "b": "Die Macht, die man durch eine formale Position (Vorgesetzter) erhält [6, 10].",
    "c": "Den exklusiven Zugang zu Massenmedien und Informationen [11, 12].",
    "d": "Die psychologische Wirkung von Charisma auf eine Gefolgschaft [13].",
    "richtig": "a",
    "begruendung": "„Power from“ dient der Abwehr von illegitimer Macht oder Unterdrückung [8]."
  },
  {
    "frage": "Welche Machtgrundlage nach French und Raven basiert auf der Identifikation mit einer charismatischen Person?",
    "a": "Macht durch Legitimation [10].",
    "b": "Expertenmacht [11].",
    "c": "Macht durch Identifikation [14].",
    "d": "Informationsmacht [11, 12].",
    "richtig": "c",
    "begruendung": "Hier ziehen Personen Befriedigung aus der Nähe zum Machtinhaber [13]."
  },
  {
    "frage": "Ein Experte überzeugt eine Gruppe allein durch den ihm zugeschriebenen Wissensvorsprung. Was ist hier entscheidend?",
    "a": "Dass die Person objektiv das größte Wissen weltweit besitzt [11].",
    "b": "Dass die Person eine formale Urkunde einer Behörde vorlegt [10].",
    "c": "Dass die Person über materielle Belohnungsmittel verfügt [15, 16].",
    "d": "Dass die Geführten der Person diesen Wissensvorsprung subjektiv zuschreiben [11].",
    "richtig": "d",
    "begruendung": "Für die Wirksamkeit von Expertenmacht ist die Zuschreibung (Attribution) wesentlich, nicht der objektive Beweis [11]."
  },
  {
    "frage": "Welche Form der Machtausübung zielt auf die „Kontrolle von Prozeduren“ ab?",
    "a": "Die Errichtung von Hürden für die Teilnahme an Entscheidungsprozessen [17].",
    "b": "Die Vergabe von Ehrentiteln an verdiente Mitglieder [16].",
    "c": "Die physische Bestrafung von Abweichlern [16].",
    "d": "Die Definition eines Themas als „soziales Problem“ in der Zeitung [18].",
    "richtig": "a",
    "begruendung": "Dazu gehört die Bestimmung von Tagesordnungen oder formalen Voraussetzungen für Partizipation [17]."
  },
  {
    "frage": "Was ist das Ziel von „Framing“ als Mechanismus der Machtausübung?",
    "a": "Die Einführung von Strafzahlungen bei Regelverstößen [19].",
    "b": "Die kollektive Deutung eines Sachverhalts so zu gestalten, dass Partikularinteressen als Mehrheitsinteressen erscheinen [20].",
    "c": "Die Ausbildung von Jugendlichen zu IT-Experten [21].",
    "d": "Die rein objektive Berichterstattung über wissenschaftliche Fakten [20].",
    "richtig": "b",
    "begruendung": "Framing beeinflusst die soziale Konstruktion der Realität [18, 20]."
  },
  {
    "frage": "In Kiel wurde ein Projekt zur Partizipation türkischstämmiger Gewerbetreibender durchgeführt. Welcher Indikator wurde auf der Ebene der Organisation erhoben?",
    "a": "Der Vergleich der individuellen politischen Wirksamkeitserwartung [22].",
    "b": "Die Analyse des Flächenumsatzes im Stadtteil [23].",
    "c": "Das Wissen über politische Interessenvertretung [24, 25].",
    "d": "Die Anzahl der Neueintritte in die Interessenvertretung [22, 26].",
    "richtig": "d",
    "begruendung": "Organisationales Empowerment zeigt sich in Mitgliederzahlen und Engagement innerhalb der Struktur [22, 26]."
  },
  {
    "frage": "Welcher Prozess gehört laut Tabelle 2 im Studienbrief zur individuellen Analyse- und Interventionsebene?",
    "a": "Wissensvermittlung und Kompetenztraining [27].",
    "b": "Abbau prozeduraler Hürden [27].",
    "c": "Vernetzung mit anderen Organisationen [27].",
    "d": "Durchführung gemeinsamer Kampagnen [27].",
    "richtig": "a",
    "begruendung": "Kompetenzerwerb ist primär ein psychologischer, individueller Vorgang [27, 28]."
  },
  {
    "frage": "Was ist ein Kernaspekt des „Kapazitätsaufbaus“ (capacity building) in einer Community?",
    "a": "Die Maximierung der Abhängigkeit von externen Beratern [21, 30].",
    "b": "Die Identifikation und Nutzung bereits vorhandener interner Ressourcen (materiell, personell, sozial) [31].",
    "c": "Der ausschließliche Fokus auf die Defizite und Krankheiten der Bewohner [21].",
    "d": "Die Umsiedlung von Bewohnern in modernere Stadtteile [32].",
    "richtig": "b",
    "begruendung": "Kapazitätsaufbau folgt einer ressourcenorientierten Perspektive [21]."
  },
  {
    "frage": "Warum wirkt ehrenamtliches Engagement laut Studienbrief oft protektiv auf die Gesundheit?",
    "a": "Weil die körperliche Arbeit im Ehrenamt das Herz-Kreislauf-System trainiert [33].",
    "b": "Weil durch die Tätigkeit ein Gefühl der Sinngebung entsteht [34].",
    "c": "Weil Ehrenamtliche von der Steuer befreit werden und weniger finanziellen Stress haben [33].",
    "d": "Weil das Ehrenamt eine klinische Psychotherapie vollständig ersetzt [34, 35].",
    "richtig": "b",
    "begruendung": "Psychologische Prozesse der Sinngebung steigern das Wohlergehen [34, 36]."
  },
  {
    "frage": "Das Konzept der „kompetenten Community“ nach Iscoe (1974) beinhaltet das Merkmal „Artikulationsfähigkeit“. Was bedeutet dies?",
    "a": "Dass alle Mitglieder perfekt Hochdeutsch sprechen müssen [37].",
    "b": "Dass Interessen der eigenen Gruppe klar kommuniziert werden können [37].",
    "c": "Dass Konflikte innerhalb der Gruppe totgeschwiegen werden [38].",
    "d": "Dass nur die gewählte Führungsperson reden darf [37, 39].",
    "richtig": "b",
    "begruendung": "Artikulationsfähigkeit ist die Kompetenz, eigene Belange zur Sprache zu bringen [37]."
  },
  {
    "frage": "Was kennzeichnet eine „optimierte Ressourcennutzung“ in einer kompetenten Community?",
    "a": "Der sofortige Verbrauch aller Mittel für kurzfristige Ziele [40].",
    "b": "Der Verzicht auf jegliche externe Beratung [40].",
    "c": "Die effektive und verantwortungsbewusste Nutzung interner und externer Ressourcen unter Langzeitperspektive [39, 40].",
    "d": "Die ausschließliche Nutzung von staatlichen Fördergeldern [40].",
    "richtig": "c",
    "begruendung": "Es geht um Nachhaltigkeit und die Einbeziehung beider Ressourcenquellen (intern/extern) [39]."
  },
  {
    "frage": "Welche Rolle spielt Evaluation in einem Empowerment-Prozess?",
    "a": "Sie dient nur der Kontrolle durch Geldgeber und hat keinen inhaltlichen Nutzen [39].",
    "b": "Sie sollte nach Möglichkeit vermieden werden, um den Prozess nicht zu stören [39].",
    "c": "Ergebnisse der Evaluation fließen aktiv in die Gestaltung der Lösungsprozesse ein [41].",
    "d": "Sie wird ausschließlich von externen Experten ohne Beteiligung der Community durchgeführt [39].",
    "richtig": "c",
    "begruendung": "Evaluation (oft formativ) ist Teil des Lernzyklus der Community [41]."
  },
  {
    "frage": "Was versteht man im Kontext der kompetenten Community unter „Sozialisation für effektive Führung“?",
    "a": "Die Auswahl von Anführern basierend auf deren Erbgut [39].",
    "b": "Die Abschaffung aller Hierarchien zugunsten von Basisdemokratie [39].",
    "c": "Trainingsmaßnahmen zum Erwerb von Kompetenzen für aktive Teilnahme und Kontrolle [39].",
    "d": "Die lebenslange Bindung an einen einzelnen „starken Mann“ [39].",
    "richtig": "c",
    "begruendung": "Mitglieder werden befähigt, selbst Verantwortung und Führungspositionen zu übernehmen [39]."
  },
  {
    "frage": "Empowerment berührt unmittelbar gesellschaftliche Machtfragen. Welche Aussage dazu ist korrekt?",
    "a": "Empowerment ist ein rein unpolitisches Konzept der Selbsthilfe [41].",
    "b": "Empowerment zielt darauf ab, bestehende Machtungleichheiten zu verändern [41, 42].",
    "c": "Machtfragen sind für die Community Psychology zweitrangig [5, 41].",
    "d": "Macht ist im Empowerment-Kontext immer zerstörerisch und negativ [6, 9].",
    "richtig": "b",
    "begruendung": "Es geht um den Zugang zu Ressourcen für bislang Unterprivilegierte [42]."
  },
  {
    "frage": "Welche Form der Machtausübung nutzt Sanktionierung?",
    "a": "Die Einflussnahme auf die öffentliche Meinung (Framing) [20].",
    "b": "Die Kontrolle über Belohnung und Bestrafung zur Durchsetzung von Interessen [12, 19].",
    "c": "Das Erstellen einer Tagesordnung für eine Bürgerversammlung [17].",
    "d": "Das bloße Vorhandensein von Expertenwissen [11, 43].",
    "richtig": "b",
    "begruendung": "Sanktionierung entspricht dem Alltagsverständnis: Wer Ressourcen hat, kann belohnen oder bestrafen [19]."
  },
  {
    "frage": "In Non-Profit-Organisationen (NPOs) ist materielle Belohnung oft nicht möglich. Was tritt an ihre Stelle?",
    "a": "Es gibt in NPOs keinerlei Machtgrundlagen [15].",
    "b": "Ausschließlich körperlicher Zwang [16].",
    "c": "Immaterielle Belohnungen wie öffentliche Auszeichnungen oder Feiern [16].",
    "d": "Die Androhung von Kündigung ohne Abfindung [16].",
    "richtig": "c",
    "begruendung": "Immaterielle Werte sind in ehrenamtlichen Strukturen zentral [16]."
  },
  {
    "frage": "Was ist der Hauptunterschied zwischen Expertenmacht und Informationsmacht?",
    "a": "Es gibt keinen Unterschied; beide Begriffe sind synonym [11, 12].",
    "b": "Expertenmacht ist an die Person gebunden (Zuschreibung), Informationsmacht an den Zugang zu Daten/Kanälen [11, 12].",
    "c": "Expertenmacht ist immer illegal, Informationsmacht legal [11, 12].",
    "d": "Expertenmacht wirkt nur bei Kindern, Informationsmacht nur bei Erwachsenen [11, 12].",
    "richtig": "b",
    "begruendung": "Expertenmacht beruht auf unterstelltem Können; Informationsmacht auf der Kontrolle über den Informationsfluss [11, 12]."
  },
  {
    "frage": "Ein Vorgesetzter wird respektiert, weil seine Rolle im Unternehmen als rechtmäßig anerkannt wird. Dies ist:",
    "a": "Macht durch Bestrafung [16].",
    "b": "Macht durch Identifikation [14].",
    "c": "Macht durch Legitimation [10].",
    "d": "Macht durch Sachkenntnis [11].",
    "richtig": "c",
    "begruendung": "Beruht auf sozialen Normen und der Akzeptanz von Positionen [10]."
  },
  {
    "frage": "Was beschreibt das Prinzip der „politischen Interessenvertretung“ im Community Empowerment?",
    "a": "Die bloße Teilnahme an einer Wahl alle vier Jahre [42].",
    "b": "Maßnahmen, um unterprivilegierte Gruppen in die Lage zu versetzen, ihr Schicksal selbst zu bestimmen [42].",
    "c": "Die finanzielle Unterstützung von Großparteien durch Spenden [36, 42].",
    "d": "Die totale Isolation der Community vom staatlichen System [30, 42].",
    "richtig": "b",
    "begruendung": "Es geht um die Veränderung von Ungleichverteilungen von Ressourcen [42]."
  },
  {
    "frage": "Ein Psychologe führt ein Training zur Steigerung der Selbstwirksamkeit durch. Auf welcher Ebene setzt er an?",
    "a": "Gesellschaftliche Ebene [28, 44].",
    "b": "Community-Ebene [29, 44].",
    "c": "Organisationsebene [29, 44].",
    "d": "Individuelle Ebene [28, 44].",
    "richtig": "d",
    "begruendung": "Selbstwirksamkeit ist ein psychologisches Konstrukt des Individuums [27, 28]."
  },
  {
    "frage": "Welche Aussage über „Macht über“ (power over) ist laut Studienbrief korrekt?",
    "a": "Sie ist grundsätzlich immer moralisch verwerflich [6, 9].",
    "b": "Sie kann zur Beseitigung sozialer Ungerechtigkeit genutzt werden (z. B. Gesetze gegen Diskriminierung) [7].",
    "c": "Sie beruht niemals auf Normen, sondern immer nur auf körperlicher Gewalt [6, 9].",
    "d": "Sie ist das eigentliche Endziel jedes Empowerment-Prozesses [41, 46].",
    "richtig": "b",
    "begruendung": "Macht über andere kann prosoziale Ziele (Gerechtigkeit) durchsetzen [7, 9]."
  },
  {
    "frage": "In einer Community existiert ein „Inventar an konsensual akzeptierten Verfahren zum Konfliktmanagement“. Welches Merkmal ist dies?",
    "a": "Artikulationsfähigkeit [37].",
    "b": "Effektive Kommunikation [37, 38].",
    "c": "Konflikt- und Akkommodationsfähigkeit [38].",
    "d": "Sozialisation für Führung [39].",
    "richtig": "c",
    "begruendung": "Eine kompetente Community leugnet Konflikte nicht, sondern hat Regeln zu deren Lösung [38]."
  },
  {
    "frage": "Was ist eine wesentliche Voraussetzung für „Macht durch Belohnung“?",
    "a": "Das Individuum B muss die Belohnung als attraktiv wahrnehmen [15].",
    "b": "Das Individuum A muss ein gewählter Politiker sein [10].",
    "c": "Die Belohnung muss zwingend aus Bargeld bestehen [16].",
    "d": "Es darf keine Abhängigkeit zwischen A und B bestehen [15].",
    "richtig": "a",
    "begruendung": "Nur wenn die Belohnung für B relevant ist, entsteht Macht [15, 16]."
  },
  {
    "frage": "Was kennzeichnet den Kapazitätsaufbau (capacity building) laut Studienbrief?",
    "a": "Die Identifikation von Defiziten steht im Vordergrund [21].",
    "b": "Vorhandene Stärken werden nutzbar gemacht (z. B. durch Mentoring) [21, 32].",
    "c": "Gebäude werden abgerissen, um Platz für Neues zu schaffen [31, 32].",
    "d": "Externe Experten übernehmen alle Führungsaufgaben [21, 30].",
    "richtig": "b",
    "begruendung": "Nutzung interner Ressourcen wie Wissen von Senioren für junge Gründer [21, 32]."
  },
  {
    "frage": "Ein Ziel von Empowerment ist die Förderung der freiwilligen Zusammenarbeit. Was soll dadurch erreicht werden?",
    "a": "Die Community soll abhängiger von staatlichen Zuschüssen werden [30, 33].",
    "b": "Die Bewohner sollen weniger Zeit für ihre Familien haben [33].",
    "c": "Die Community soll unabhängiger von externen sozialen Systemen werden [30, 33].",
    "d": "Die Polizei soll entlastet werden [33].",
    "richtig": "c",
    "begruendung": "Selbstorganisation stärkt die Autonomie gegenüber externen Institutionen [30, 33]."
  },
  {
    "frage": "Welches der folgenden Elemente ist ein Indikator für Empowerment auf der Ebene der Community?",
    "a": "Steigerung des individuellen Selbstwertgefühls [27].",
    "b": "Anzahl der Neueintritte in einen Sportverein [26, 27].",
    "c": "Analyse des Flächenumsatzes (lokale Ökonomie) [23, 47].",
    "d": "Erwerb von Wissen über Mietrecht [24, 27].",
    "richtig": "c",
    "begruendung": "Community-Indikatoren messen Veränderungen im Gesamtsystem des Sozialraums [23]."
  },
  {
    "frage": "Ein Kernaspekt der Cornell-Definition ist die \"kritische Reflexion\". Was ist damit im Empowerment-Prozess primär gemeint?",
    "a": "Die wissenschaftliche Überprüfung der statistischen Signifikanz von Projekten.",
    "b": "Dass Teilnehmende lernen, soziale und politische Bedingungen ihrer Lage zu hinterfragen.",
    "c": "Die ständige Kritik an der Arbeitsweise der professionellen Helfer.",
    "d": "Die psychologische Aufarbeitung von traumatischen Kindheitserlebnissen.",
    "richtig": "b",
    "begruendung": "Empowerment beinhaltet den Aufbau eines kritischen Bewusstseins über Machtstrukturen [1-3]."
  },
  {
    "frage": "Welche Machtgrundlage nach French und Raven benötigt KEINE Sanktionen (Belohnung/Bestrafung), da sie auf internalisierten Werten oder institutioneller Reputation beruht?",
    "a": "Informationsmacht.",
    "b": "Macht durch Identifikation.",
    "c": "Macht durch Legitimation.",
    "d": "Expertenmacht.",
    "richtig": "c",
    "begruendung": "Bei der Legitimation akzeptiert B die Macht von A aufgrund von Normen oder Rollen als rechtmäßig [4, 5]."
  },
  {
    "frage": "In der Längsschnittstudie von Moen et al. (1989) wurde ein protektiver Effekt von ehrenamtlichem Engagement nachgewiesen. Welcher Indikator wurde hier konkret verbessert?",
    "a": "Die kognitive Leistungsfähigkeit im Alter.",
    "b": "Die Mortalitätsrate (Sterblichkeitsrate).",
    "c": "Das monatliche Durchschnittseinkommen.",
    "d": "Die Anzahl der sozialen Kontakte zu Familienmitgliedern.",
    "richtig": "b",
    "begruendung": "Die Studie zeigte einen signifikanten Effekt auf die Reduktion der Mortalitätsrate [6]."
  },
  {
    "frage": "Was versteht man unter dem Merkmal „Management der Beziehungen zur weiteren Gesellschaft“ einer kompetenten Community?",
    "a": "Die totale Abschottung der Community gegenüber äußeren Einflüssen.",
    "b": "Das Nutzen externer Ressourcen (z. B. Beratung) bei gleichzeitigem Erhalt der Eigenständigkeit.",
    "c": "Die Übernahme der Community-Verwaltung durch staatliche Behörden.",
    "d": "Dass die Community-Mitglieder ihre Wohnsitze in andere Stadtteile verlegen.",
    "richtig": "b",
    "begruendung": "Eine kompetente Community nutzt externe Expertise strategisch für eigene Ziele [7, 8]."
  },
  {
    "frage": "Welche Form der Machtausübung nutzt die rhetorische Figur der „schweigenden Mehrheit“, um Partikularinteressen durchzusetzen?",
    "a": "Sanktionierung.",
    "b": "Kontrolle von Prozeduren.",
    "c": "Macht durch Bestrafung.",
    "d": "Framing.",
    "richtig": "d",
    "begruendung": "Durch Framing erscheinen eigene Interessen als Mehrheitsinteressen [9, 10]."
  },
  {
    "frage": "Welcher psychologische Prozess wird im Studienbrief als Hauptgrund für die gesundheitsfördernde Wirkung von Ehrenamt angeführt?",
    "a": "Körperliche Aktivierung.",
    "b": "Finanzielle Entlastung.",
    "c": "Sinngebung.",
    "d": "Sozialer Statusgewinn.",
    "richtig": "c",
    "begruendung": "Sinnhaftigkeit innerhalb der Community wirkt positiv auf das Wohlbefinden [11, 12]."
  },
  {
    "frage": "Auf welcher Ebene liegt der Indikator „Kollektive Wirksamkeit“ (collective efficacy)?",
    "a": "Individuelle Ebene.",
    "b": "Organisationsebene.",
    "c": "Community-Ebene.",
    "d": "Gesellschaftliche Ebene.",
    "richtig": "b",
    "begruendung": "Laut Tabelle 2 ist kollektive Wirksamkeit ein organisationaler Indikator [13]."
  },
  {
    "frage": "Was ist die Voraussetzung für „Macht durch Identifikation“?",
    "a": "Dass die Zielperson A über Expertenwissen verfügt.",
    "b": "Dass die Zielperson B ein Gefühl der Verbundenheit zu A verspürt.",
    "c": "Dass Person A die Person B offiziell befördern kann.",
    "d": "Dass Person A den Zugang zu den Massenmedien kontrolliert.",
    "richtig": "b",
    "begruendung": "Identifikationsmacht beruht auf der Attraktivität von A als Bezugsperson für B [5]."
  },
  {
    "frage": "Im Projekt in Kiel wurde die Theorie des Intergruppenkontakts von Pettigrew genutzt. Welches Ziel wurde damit auf der organisationalen Ebene verfolgt?",
    "a": "Die Steigerung des Umsatzes der türkischen Läden.",
    "b": "Der Abbau von Vorurteilen zwischen deutschen und türkischstämmigen Mitgliedern.",
    "c": "Die Wahl eines neuen Bürgermeisters.",
    "d": "Die rein individuelle Beratung der Gewerbetreibenden.",
    "richtig": "b",
    "begruendung": "Strukturierter Kontakt sollte Vorurteile und Berührungsängste abbauen [14-16]."
  },
  {
    "frage": "Welches Merkmal einer kompetenten Community beschreibt die Existenz von Verfahren zum Konfliktmanagement?",
    "a": "Artikulationsfähigkeit.",
    "b": "Sozialisation für Führung.",
    "c": "Konflikt- und Akkommodationsfähigkeit.",
    "d": "Commitment.",
    "richtig": "c",
    "begruendung": "Es geht um konsensual akzeptierte Verfahren zur Identifikation und Lösung von Konflikten [7, 8]."
  },
  {
    "frage": "Empowerment Evaluation wird von Kritikern manchmal NICHT als echte Evaluation, sondern als was bezeichnet?",
    "a": "Als rein statistisches Verfahren.",
    "b": "Als Organisationsentwicklungsprozess.",
    "c": "Als politisches Propaganda-Werkzeug.",
    "d": "Als klinische Einzeltherapie.",
    "richtig": "b",
    "begruendung": "Da Capacity Building im Vordergrund steht, sehen Kritiker darin eher eine Entwicklung der Organisation als eine neutrale Bewertung [17]."
  },
  {
    "frage": "Was ist der Unterschied zwischen „Macht zu“ und „Macht vor“?",
    "a": "„Macht zu“ ist aktiv (Ziele erreichen), „Macht vor“ ist defensiv (Schutz vor Einfluss).",
    "b": "„Macht zu“ ist immer illegal, „Macht vor“ ist immer legal.",
    "c": "Es gibt keinen Unterschied, es sind Synonyme.",
    "d": "„Macht zu“ bezieht sich nur auf Individuen, „Macht vor“ nur auf Staaten.",
    "richtig": "a",
    "begruendung": "„Macht zu“ (power to) ist die Gestaltungsmacht; „Macht vor“ (power from) ist die Widerstandsmacht gegen Unterdrückung [18, 19]."
  },
  {
    "frage": "Warum ist laut Studienbrief ein „dynamisches“ Verständnis von Empowerment wichtig?",
    "a": "Weil es zeigt, dass Empowerment ein stabiler Charakterzug ist.",
    "b": "Weil es betont, dass Empowerment ein Prozess der Herstellung von Kontrolle ist, kein statischer Zustand.",
    "c": "Weil es die biologische Dynamik des Gehirns widerspiegelt.",
    "d": "Weil es nur in schnelllebigen Großstädten funktioniert.",
    "richtig": "b",
    "begruendung": "Rappaport definiert Empowerment als Mechanismus bzw. Prozess, was im Gegensatz zu zeitstabilen Dispositionen steht [3, 20]."
  },
  {
    "frage": "Was kennzeichnet „Informationsmacht“ im Vergleich zu „Expertenmacht“?",
    "a": "Informationsmacht ist an den Besitz von Diplomen gebunden.",
    "b": "Informationsmacht beruht auf dem Zugang zu Kommunikationskanälen und der Kontrolle von Inhalten.",
    "c": "Expertenmacht ist immer stärker als Informationsmacht.",
    "d": "Informationsmacht kann nur von Wissenschaftlern ausgeübt werden.",
    "richtig": "b",
    "begruendung": "Wer Kanäle (z. B. Medien) kontrolliert, kann die soziale Realität konstruieren [21, 22]."
  },
  {
    "frage": "Was ist ein Ziel von Maßnahmen auf der Community-Ebene laut Tabelle 2?",
    "a": "Durchführung von Kompetenztrainings für Einzelpersonen.",
    "b": "Vernetzung mit anderen Organisationen und Koalitionsbildung.",
    "c": "Erhöhung der individuellen Selbstwirksamkeit.",
    "d": "Abbau von individuellen psychischen Störungen.",
    "richtig": "b",
    "begruendung": "Vernetzung und politische Interessenvertretung sind typische Prozesse auf der Community-Ebene [13, 23]."
  }
];