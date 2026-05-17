const questions = [
  {
    "frage": "Welches grundlegende Verständnis von Empowerment vertrat Rappaport (1987)?",
    "a": "Empowerment ist ein dynamischer Prozess bzw. Mechanismus.",
    "b": "Empowerment ist eine zeitstabile Persönlichkeitsdisposition.",
    "c": "Empowerment ist ein rein individuelles, klinisches Konstrukt.",
    "d": "Empowerment beschreibt einen statischen Endzustand nach einer Therapie.",
    "richtig": "a",
    "begruendung": "Empowerment wird als Mechanismus gesehen, durch den Kontrolle hergestellt wird, nicht als festes Merkmal."
  },
  {
    "frage": "Auf welchen Ebenen findet Empowerment laut Rappaport (1987) statt?",
    "a": "Ausschließlich auf der Ebene von Individuen.",
    "b": "Nur auf der politischen Makro-Ebene eines Staates.",
    "c": "Auf der Ebene von Individuen, Organisationen und Communities.",
    "d": "Rein auf der biologisch-neurologischen Ebene der Stressbewältigung.",
    "richtig": "c",
    "begruendung": "Empowerment ist ein Mehrebenen-Konstrukt."
  },
  {
    "frage": "Was ist ein Kernmerkmal der Empowerment-Definition der Cornell Empowerment Group?",
    "a": "Der Prozess ist wertneutral und verfolgt keine sozialen Ziele.",
    "b": "Empowerment erfolgt primär durch die passive Annahme von Hilfe.",
    "c": "Er ist durch prosoziale Haltungen wie wechselseitigen Respekt und Fürsorge gekennzeichnet.",
    "d": "Empowerment zielt darauf ab, Ressourcen-Privilegien für Eliten zu sichern.",
    "richtig": "c",
    "begruendung": "Die Definition betont die prosozialen Werte und die lokale Verankerung."
  },
  {
    "frage": "Wie unterscheidet sich „Macht zu“ (power to) von „Macht über“ (power over)?",
    "a": "„Macht zu“ ist immer mit Zwang verbunden, „Macht über“ mit Freiheit.",
    "b": "„Macht zu“ beschreibt die Fähigkeit, eigene Ziele selbstbestimmt zu verwirklichen.",
    "c": "„Macht zu“ bezieht sich nur auf finanzielle Ressourcen, nicht auf soziale.",
    "d": "Es gibt keinen theoretischen Unterschied zwischen diesen Formen.",
    "richtig": "b",
    "begruendung": "„Macht zu“ nutzt Ressourcen (Kapital) zur Realisierung eigener Interessen."
  },
  {
    "frage": "Was versteht man unter „Macht vor“ (power from)?",
    "a": "Die Fähigkeit, sich vor unerwünschten Einflussversuchen Dritter zu schützen.",
    "b": "Die Macht, die man durch eine formale Position (Vorgesetzter) erhält.",
    "c": "Den exklusiven Zugang zu Massenmedien und Informationen.",
    "d": "Die psychologische Wirkung von Charisma auf eine Gefolgschaft.",
    "richtig": "a",
    "begruendung": "„Power from“ dient der Abwehr von illegitimer Macht oder Unterdrückung."
  },
  {
    "frage": "Welche Machtgrundlage nach French und Raven basiert auf der Identifikation mit einer charismatischen Person?",
    "a": "Macht durch Legitimation.",
    "b": "Expertenmacht.",
    "c": "Macht durch Identifikation.",
    "d": "Informationsmacht.",
    "richtig": "c",
    "begruendung": "Hier ziehen Personen Befriedigung aus der Nähe zum Machtinhaber."
  },
  {
    "frage": "Ein Experte überzeugt eine Gruppe allein durch den ihm zugeschriebenen Wissensvorsprung. Was ist hier entscheidend?",
    "a": "Dass die Person objektiv das größte Wissen weltweit besitzt.",
    "b": "Dass die Person eine formale Urkunde einer Behörde vorlegt.",
    "c": "Dass die Person über materielle Belohnungsmittel verfügt.",
    "d": "Dass die Geführten der Person diesen Wissensvorsprung subjektiv zuschreiben.",
    "richtig": "d",
    "begruendung": "Für die Wirksamkeit von Expertenmacht ist die Zuschreibung (Attribution) wesentlich, nicht der objektive Beweis."
  },
  {
    "frage": "Welche Form der Machtausübung zielt auf die „Kontrolle von Prozeduren“ ab?",
    "a": "Die Errichtung von Hürden für die Teilnahme an Entscheidungsprozessen.",
    "b": "Die Vergabe von Ehrentiteln an verdiente Mitglieder.",
    "c": "Die physische Bestrafung von Abweichlern.",
    "d": "Die Definition eines Themas als „soziales Problem“ in der Zeitung.",
    "richtig": "a",
    "begruendung": "Dazu gehört die Bestimmung von Tagesordnungen oder formalen Voraussetzungen für Partizipation."
  },
  {
    "frage": "Was ist das Ziel von „Framing“ als Mechanismus der Machtausübung?",
    "a": "Die Einführung von Strafzahlungen bei Regelverstößen.",
    "b": "Die kollektive Deutung eines Sachverhalts so zu gestalten, dass Partikularinteressen als Mehrheitsinteressen erscheinen.",
    "c": "Die Ausbildung von Jugendlichen zu IT-Experten.",
    "d": "Die rein objektive Berichterstattung über wissenschaftliche Fakten.",
    "richtig": "b",
    "begruendung": "Framing beeinflusst die soziale Konstruktion der Realität."
  },
  {
    "frage": "In Kiel wurde ein Projekt zur Partizipation türkischstämmiger Gewerbetreibender durchgeführt. Welcher Indikator wurde auf der Ebene der Organisation erhoben?",
    "a": "Der Vergleich der individuellen politischen Wirksamkeitserwartung.",
    "b": "Die Analyse des Flächenumsatzes im Stadtteil.",
    "c": "Das Wissen über politische Interessenvertretung.",
    "d": "Die Anzahl der Neueintritte in die Interessenvertretung.",
    "richtig": "d",
    "begruendung": "Organisationales Empowerment zeigt sich in Mitgliederzahlen und Engagement innerhalb der Struktur."
  },
  {
    "frage": "Welcher Prozess gehört laut Tabelle 2 im Studienbrief zur individuellen Analyse- und Interventionsebene?",
    "a": "Wissensvermittlung und Kompetenztraining.",
    "b": "Abbau prozeduraler Hürden.",
    "c": "Vernetzung mit anderen Organisationen.",
    "d": "Durchführung gemeinsamer Kampagnen.",
    "richtig": "a",
    "begruendung": "Kompetenzerwerb ist primär ein psychologischer, individueller Vorgang."
  },
  {
    "frage": "Was ist ein Kernaspekt des „Kapazitätsaufbaus“ (capacity building) in einer Community?",
    "a": "Die Maximierung der Abhängigkeit von externen Beratern.",
    "b": "Die Identifikation und Nutzung bereits vorhandener interner Ressourcen (materiell, personell, sozial).",
    "c": "Der ausschließliche Fokus auf die Defizite und Krankheiten der Bewohner.",
    "d": "Die Umsiedlung von Bewohnern in modernere Stadtteile.",
    "richtig": "b",
    "begruendung": "Kapazitätsaufbau folgt einer ressourcenorientierten Perspektive."
  },
  {
    "frage": "Warum wirkt ehrenamtliches Engagement laut Studienbrief oft protektiv auf die Gesundheit?",
    "a": "Weil die körperliche Arbeit im Ehrenamt das Herz-Kreislauf-System trainiert.",
    "b": "Weil durch die Tätigkeit ein Gefühl der Sinngebung entsteht.",
    "c": "Weil Ehrenamtliche von der Steuer befreit werden und weniger finanziellen Stress haben.",
    "d": "Weil das Ehrenamt eine klinische Psychotherapie vollständig ersetzt.",
    "richtig": "b",
    "begruendung": "Psychologische Prozesse der Sinngebung steigern das Wohlergehen."
  },
  {
    "frage": "Das Konzept der „kompetenten Community“ nach Iscoe (1974) beinhaltet das Merkmal „Artikulationsfähigkeit“. Was bedeutet dies?",
    "a": "Dass alle Mitglieder perfekt Hochdeutsch sprechen müssen.",
    "b": "Dass Interessen der eigenen Gruppe klar kommuniziert werden können.",
    "c": "Dass Konflikte innerhalb der Gruppe totgeschwiegen werden.",
    "d": "Dass nur die gewählte Führungsperson reden darf.",
    "richtig": "b",
    "begruendung": "Artikulationsfähigkeit ist die Kompetenz, eigene Belange zur Sprache zu bringen."
  },
  {
    "frage": "Was kennzeichnet eine „optimierte Ressourcennutzung“ in einer kompetenten Community?",
    "a": "Der sofortige Verbrauch aller Mittel für kurzfristige Ziele.",
    "b": "Der Verzicht auf jegliche externe Beratung.",
    "c": "Die effektive und verantwortungsbewusste Nutzung interner und externer Ressourcen unter Langzeitperspektive.",
    "d": "Die ausschließliche Nutzung von staatlichen Fördergeldern.",
    "richtig": "c",
    "begruendung": "Es geht um Nachhaltigkeit und die Einbeziehung beider Ressourcenquellen (intern/extern)."
  },
  {
    "frage": "Welche Rolle spielt Evaluation in einem Empowerment-Prozess?",
    "a": "Sie dient nur der Kontrolle durch Geldgeber und hat keinen inhaltlichen Nutzen.",
    "b": "Sie sollte nach Möglichkeit vermieden werden, um den Prozess nicht zu stören.",
    "c": "Ergebnisse der Evaluation fließen aktiv in die Gestaltung der Lösungsprozesse ein.",
    "d": "Sie wird ausschließlich von externen Experten ohne Beteiligung der Community durchgeführt.",
    "richtig": "c",
    "begruendung": "Evaluation (oft formativ) ist Teil des Lernzyklus der Community."
  },
  {
    "frage": "Was versteht man im Kontext der kompetenten Community unter „Sozialisation für effektive Führung“?",
    "a": "Die Auswahl von Anführern basierend auf deren Erbgut.",
    "b": "Die Abschaffung aller Hierarchien zugunsten von Basisdemokratie.",
    "c": "Trainingsmaßnahmen zum Erwerb von Kompetenzen für aktive Teilnahme und Kontrolle.",
    "d": "Die lebenslange Bindung an einen einzelnen „starken Mann“.",
    "richtig": "c",
    "begruendung": "Mitglieder werden befähigt, selbst Verantwortung und Führungspositionen zu übernehmen."
  },
  {
    "frage": "Empowerment berührt unmittelbar gesellschaftliche Machtfragen. Welche Aussage dazu ist korrekt?",
    "a": "Empowerment ist ein rein unpolitisches Konzept der Selbsthilfe.",
    "b": "Empowerment zielt darauf ab, bestehende Machtungleichheiten zu verändern.",
    "c": "Machtfragen sind für die Community Psychology zweitrangig.",
    "d": "Macht ist im Empowerment-Kontext immer zerstörerisch und negativ.",
    "richtig": "b",
    "begruendung": "Es geht um den Zugang zu Ressourcen für bislang Unterprivilegierte."
  },
  {
    "frage": "Welche Form der Machtausübung nutzt Sanktionierung?",
    "a": "Die Einflussnahme auf die öffentliche Meinung (Framing).",
    "b": "Die Kontrolle über Belohnung und Bestrafung zur Durchsetzung von Interessen.",
    "c": "Das Erstellen einer Tagesordnung für eine Bürgerversammlung.",
    "d": "Das bloße Vorhandensein von Expertenwissen.",
    "richtig": "b",
    "begruendung": "Sanktionierung entspricht dem Alltagsverständnis: Wer Ressourcen hat, kann belohnen oder bestrafen."
  },
  {
    "frage": "In Non-Profit-Organisationen (NPOs) ist materielle Belohnung oft nicht möglich. Was tritt an ihre Stelle?",
    "a": "Es gibt in NPOs keinerlei Machtgrundlagen.",
    "b": "Ausschließlich körperlicher Zwang.",
    "c": "Immaterielle Belohnungen wie öffentliche Auszeichnungen oder Feiern.",
    "d": "Die Androhung von Kündigung ohne Abfindung.",
    "richtig": "c",
    "begruendung": "Immaterielle Werte sind in ehrenamtlichen Strukturen zentral."
  },
  {
    "frage": "Was ist der Hauptunterschied zwischen Expertenmacht und Informationsmacht?",
    "a": "Es gibt keinen Unterschied; beide Begriffe sind synonym.",
    "b": "Expertenmacht ist an die Person gebunden (Zuschreibung), Informationsmacht an den Zugang zu Daten/Kanälen.",
    "c": "Expertenmacht ist immer illegal, Informationsmacht legal.",
    "d": "Expertenmacht wirkt nur bei Kindern, Informationsmacht nur bei Erwachsenen.",
    "richtig": "b",
    "begruendung": "Expertenmacht beruht auf unterstelltem Können; Informationsmacht auf der Kontrolle über den Informationsfluss."
  },
  {
    "frage": "Ein Vorgesetzter wird respektiert, weil seine Rolle im Unternehmen als rechtmäßig anerkannt wird. Dies ist:",
    "a": "Macht durch Bestrafung.",
    "b": "Macht durch Identifikation.",
    "c": "Macht durch Legitimation.",
    "d": "Macht durch Sachkenntnis.",
    "richtig": "c",
    "begruendung": "Beruht auf sozialen Normen und der Akzeptanz von Positionen."
  },
  {
    "frage": "Was beschreibt das Prinzip der „politischen Interessenvertretung“ im Community Empowerment?",
    "a": "Die bloße Teilnahme an einer Wahl alle vier Jahre.",
    "b": "Maßnahmen, um unterprivilegierte Gruppen in die Lage zu versetzen, ihr Schicksal selbst zu bestimmen.",
    "c": "Die finanzielle Unterstützung von Großparteien durch Spenden.",
    "d": "Die totale Isolation der Community vom staatlichen System.",
    "richtig": "b",
    "begruendung": "Es geht um die Veränderung von Ungleichverteilungen von Ressourcen."
  },
  {
    "frage": "Ein Psychologe führt ein Training zur Steigerung der Selbstwirksamkeit durch. Auf welcher Ebene setzt er an?",
    "a": "Gesellschaftliche Ebene.",
    "b": "Community-Ebene.",
    "c": "Organisationsebene.",
    "d": "Individuelle Ebene.",
    "richtig": "d",
    "begruendung": "Selbstwirksamkeit ist ein psychologisches Konstrukt des Individuums."
  },
  {
    "frage": "Welche Aussage über „Macht über“ (power over) ist laut Studienbrief korrekt?",
    "a": "Sie ist grundsätzlich immer moralisch verwerflich.",
    "b": "Sie kann zur Beseitigung sozialer Ungerechtigkeit genutzt werden (z. B. Gesetze gegen Diskriminierung).",
    "c": "Sie beruht niemals auf Normen, sondern immer nur auf körperlicher Gewalt.",
    "d": "Sie ist das eigentliche Endziel jedes Empowerment-Prozesses.",
    "richtig": "b",
    "begruendung": "Macht über andere kann prosoziale Ziele (Gerechtigkeit) durchsetzen."
  },
  {
    "frage": "In einer Community existiert ein „Inventar an konsensual akzeptierten Verfahren zum Konfliktmanagement“. Welches Merkmal ist dies?",
    "a": "Artikulationsfähigkeit.",
    "b": "Effektive Kommunikation.",
    "c": "Konflikt- und Akkommodationsfähigkeit.",
    "d": "Sozialisation für Führung.",
    "richtig": "c",
    "begruendung": "Eine kompetente Community leugnet Konflikte nicht, sondern hat Regeln zu deren Lösung."
  },
  {
    "frage": "Was ist eine wesentliche Voraussetzung für „Macht durch Belohnung“?",
    "a": "Das Individuum B muss die Belohnung als attraktiv wahrnehmen.",
    "b": "Das Individuum A muss ein gewählter Politiker sein.",
    "c": "Die Belohnung muss zwingend aus Bargeld bestehen.",
    "d": "Es darf keine Abhängigkeit zwischen A und B bestehen.",
    "richtig": "a",
    "begruendung": "Nur wenn die Belohnung für B relevant ist, entsteht Macht."
  },
  {
    "frage": "Was kennzeichnet den Kapazitätsaufbau (capacity building) laut Studienbrief?",
    "a": "Die Identifikation von Defiziten steht im Vordergrund.",
    "b": "Vorhandene Stärken werden nutzbar gemacht (z. B. durch Mentoring).",
    "c": "Gebäude werden abgerissen, um Platz für Neues zu schaffen.",
    "d": "Externe Experten übernehmen alle Führungsaufgaben.",
    "richtig": "b",
    "begruendung": "Nutzung interner Ressourcen wie Wissen von Senioren für junge Gründer."
  },
  {
    "frage": "Ein Ziel von Empowerment ist die Förderung der freiwilligen Zusammenarbeit. Was soll dadurch erreicht werden?",
    "a": "Die Community soll abhängiger von staatlichen Zuschüssen werden.",
    "b": "Die Bewohner sollen weniger Zeit für ihre Familien haben.",
    "c": "Die Community soll unabhängiger von externen sozialen Systemen werden.",
    "d": "Die Polizei soll entlastet werden.",
    "richtig": "c",
    "begruendung": "Selbstorganisation stärkt die Autonomie gegenüber externen Institutionen."
  },
  {
    "frage": "Welches der folgenden Elemente ist ein Indikator für Empowerment auf der Ebene der Community?",
    "a": "Steigerung des individuellen Selbstwertgefühls.",
    "b": "Anzahl der Neueintritte in einen Sportverein.",
    "c": "Analyse des Flächenumsatzes (lokale Ökonomie).",
    "d": "Erwerb von Wissen über Mietrecht.",
    "richtig": "c",
    "begruendung": "Community-Indikatoren messen Veränderungen im Gesamtsystem des Sozialraums."
  },
  {
    "frage": "Ein Kernaspekt der Cornell-Definition ist die \"kritische Reflexion\". Was ist damit im Empowerment-Prozess primär gemeint?",
    "a": "Die wissenschaftliche Überprüfung der statistischen Signifikanz von Projekten.",
    "b": "Dass Teilnehmende lernen, soziale und politische Bedingungen ihrer Lage zu hinterfragen.",
    "c": "Die ständige Kritik an der Arbeitsweise der professionellen Helfer.",
    "d": "Die psychologische Aufarbeitung von traumatischen Kindheitserlebnissen.",
    "richtig": "b",
    "begruendung": "Empowerment beinhaltet den Aufbau eines kritischen Bewusstseins über Machtstrukturen."
  },
  {
    "frage": "Welche Machtgrundlage nach French und Raven benötigt KEINE Sanktionen (Belohnung/Bestrafung), da sie auf internalisierten Werten oder institutioneller Reputation beruht?",
    "a": "Informationsmacht.",
    "b": "Macht durch Identifikation.",
    "c": "Macht durch Legitimation.",
    "d": "Expertenmacht.",
    "richtig": "c",
    "begruendung": "Bei der Legitimation akzeptiert B die Macht von A aufgrund von Normen oder Rollen als rechtmäßig."
  },
  {
    "frage": "In der Längsschnittstudie von Moen et al. (1989) wurde ein protektiver Effekt von ehrenamtlichem Engagement nachgewiesen. Welcher Indikator wurde hier konkret verbessert?",
    "a": "Die kognitive Leistungsfähigkeit im Alter.",
    "b": "Die Mortalitätsrate (Sterblichkeitsrate).",
    "c": "Das monatliche Durchschnittseinkommen.",
    "d": "Die Anzahl der sozialen Kontakte zu Familienmitgliedern.",
    "richtig": "b",
    "begruendung": "Die Studie zeigte einen signifikanten Effekt auf die Reduktion der Mortalitätsrate."
  },
  {
    "frage": "Was versteht man unter dem Merkmal „Management der Beziehungen zur weiteren Gesellschaft“ einer kompetenten Community?",
    "a": "Die totale Abschottung der Community gegenüber äußeren Einflüssen.",
    "b": "Das Nutzen externer Ressourcen (z. B. Beratung) bei gleichzeitigem Erhalt der Eigenständigkeit.",
    "c": "Die Übernahme der Community-Verwaltung durch staatliche Behörden.",
    "d": "Dass die Community-Mitglieder ihre Wohnsitze in andere Stadtteile verlegen.",
    "richtig": "b",
    "begruendung": "Eine kompetente Community nutzt externe Expertise strategisch für eigene Ziele."
  },
  {
    "frage": "Welche Form der Machtausübung nutzt die rhetorische Figur der „schweigenden Mehrheit“, um Partikularinteressen durchzusetzen?",
    "a": "Sanktionierung.",
    "b": "Kontrolle von Prozeduren.",
    "c": "Macht durch Bestrafung.",
    "d": "Framing.",
    "richtig": "d",
    "begruendung": "Durch Framing erscheinen eigene Interessen als Mehrheitsinteressen."
  },
  {
    "frage": "Welcher psychologische Prozess wird im Studienbrief als Hauptgrund für die gesundheitsfördernde Wirkung von Ehrenamt angeführt?",
    "a": "Körperliche Aktivierung.",
    "b": "Finanzielle Entlastung.",
    "c": "Sinngebung.",
    "d": "Sozialer Statusgewinn.",
    "richtig": "c",
    "begruendung": "Sinnhaftigkeit innerhalb der Community wirkt positiv auf das Wohlbefinden."
  },
  {
    "frage": "Auf welcher Ebene liegt der Indikator „Kollektive Wirksamkeit“ (collective efficacy)?",
    "a": "Individuelle Ebene.",
    "b": "Organisationsebene.",
    "c": "Community-Ebene.",
    "d": "Gesellschaftliche Ebene.",
    "richtig": "b",
    "begruendung": "Laut Tabelle 2 ist kollektive Wirksamkeit ein organisationaler Indikator."
  },
  {
    "frage": "Was ist die Voraussetzung für „Macht durch Identifikation“?",
    "a": "Dass die Zielperson A über Expertenwissen verfügt.",
    "b": "Dass die Zielperson B ein Gefühl der Verbundenheit zu A verspürt.",
    "c": "Dass Person A die Person B offiziell befördern kann.",
    "d": "Dass Person A den Zugang zu den Massenmedien kontrolliert.",
    "richtig": "b",
    "begruendung": "Identifikationsmacht beruht auf der Attraktivität von A als Bezugsperson für B."
  },
  {
    "frage": "Im Projekt in Kiel wurde die Theorie des Intergruppenkontakts von Pettigrew genutzt. Welches Ziel wurde damit auf der organisationalen Ebene verfolgt?",
    "a": "Die Steigerung des Umsatzes der türkischen Läden.",
    "b": "Der Abbau von Vorurteilen zwischen deutschen und türkischstämmigen Mitgliedern.",
    "c": "Die Wahl eines neuen Bürgermeisters.",
    "d": "Die rein individuelle Beratung der Gewerbetreibenden.",
    "richtig": "b",
    "begruendung": "Strukturierter Kontakt sollte Vorurteile und Berührungsängste abbauen."
  },
  {
    "frage": "Welches Merkmal einer kompetenten Community beschreibt die Existenz von Verfahren zum Konfliktmanagement?",
    "a": "Artikulationsfähigkeit.",
    "b": "Sozialisation für Führung.",
    "c": "Konflikt- und Akkommodationsfähigkeit.",
    "d": "Commitment.",
    "richtig": "c",
    "begruendung": "Es geht um konsensual akzeptierte Verfahren zur Identifikation und Lösung von Konflikten."
  },
  {
    "frage": "Empowerment Evaluation wird von Kritikern manchmal NICHT als echte Evaluation, sondern als was bezeichnet?",
    "a": "Als rein statistisches Verfahren.",
    "b": "Als Organisationsentwicklungsprozess.",
    "c": "Als politisches Propaganda-Werkzeug.",
    "d": "Als klinische Einzeltherapie.",
    "richtig": "b",
    "begruendung": "Da Capacity Building im Vordergrund steht, sehen Kritiker darin eher eine Entwicklung der Organisation als eine neutrale Bewertung."
  },
  {
    "frage": "Was ist der Unterschied zwischen „Macht zu“ und „Macht vor“?",
    "a": "„Macht zu“ ist aktiv (Ziele erreichen), „Macht vor“ ist defensiv (Schutz vor Einfluss).",
    "b": "„Macht zu“ ist immer illegal, „Macht vor“ ist immer legal.",
    "c": "Es gibt keinen Unterschied, es sind Synonyme.",
    "d": "„Macht zu“ bezieht sich nur auf Individuen, „Macht vor“ nur auf Staaten.",
    "richtig": "a",
    "begruendung": "„Macht zu“ (power to) ist die Gestaltungsmacht; „Macht vor“ (power from) ist die Widerstandsmacht gegen Unterdrückung."
  },
  {
    "frage": "Warum ist laut Studienbrief ein „dynamisches“ Verständnis von Empowerment wichtig?",
    "a": "Weil es zeigt, dass Empowerment ein stabiler Charakterzug ist.",
    "b": "Weil es betont, dass Empowerment ein Prozess der Herstellung von Kontrolle ist, kein statischer Zustand.",
    "c": "Weil es die biologische Dynamik des Gehirns widerspiegelt.",
    "d": "Weil es nur in schnelllebigen Großstädten funktioniert.",
    "richtig": "b",
    "begruendung": "Rappaport definiert Empowerment als Mechanismus bzw. Prozess, was im Gegensatz zu zeitstabilen Dispositionen steht."
  },
  {
    "frage": "Was kennzeichnet „Informationsmacht“ im Vergleich zu „Expertenmacht“?",
    "a": "Informationsmacht ist an den Besitz von Diplomen gebunden.",
    "b": "Informationsmacht beruht auf dem Zugang zu Kommunikationskanälen und der Kontrolle von Inhalten.",
    "c": "Expertenmacht ist immer stärker als Informationsmacht.",
    "d": "Informationsmacht kann nur von Wissenschaftlern ausgeübt werden.",
    "richtig": "b",
    "begruendung": "Wer Kanäle (z. B. Medien) kontrolliert, kann die soziale Realität konstruieren."
  },
  {
    "frage": "Was ist ein Ziel von Maßnahmen auf der Community-Ebene laut Tabelle 2?",
    "a": "Durchführung von Kompetenztrainings für Einzelpersonen.",
    "b": "Vernetzung mit anderen Organisationen und Koalitionsbildung.",
    "c": "Erhöhung der individuellen Selbstwirksamkeit.",
    "d": "Abbau von individuellen psychischen Störungen.",
    "richtig": "b",
    "begruendung": "Vernetzung und politische Interessenvertretung sind typische Prozesse auf der Community-Ebene."
  }
];