const questions = [
  {
    "frage": "Ferdinand Tönnies unterscheidet zwischen „Gemeinschaft“ und „Gesellschaft“. Welches Merkmal ist laut SB kennzeichnend für die „Gesellschaft“?",
    "a": "Die soziale Bejahung beruht auf einem Wesenwillen.",
    "b": "Das Kollektiv dient primär der Maximierung des individuellen Nutzens.",
    "c": "Individuen ordnen ihre Eigeninteressen konsequent dem Gemeinwohl unter.",
    "d": "Die Bindung basiert auf historisch gewachsenen, emotionalen Urvertrauen.",
    "richtig": "b",
    "begruendung": "In der Gesellschaft steht der Tauschwert und der individuelle Nutzen im Vordergrund, während die Gemeinschaft auf emotionaler Verbundenheit basiert."
  },
  {
    "frage": "Was ist ein zentrales Definitionsmerkmal einer lokal-administrativen Community?",
    "a": "Sie basiert ausschließlich auf freiwilliger Wahl der Mitgliedschaft.",
    "b": "Sie ist durch zeitstabile, emotional involvierende interpersonale Beziehungen definiert.",
    "c": "Sie stellt oft die kleinste räumlich-administrative Einheit im öffentlich-verwaltungsmäßigen Aufbau dar.",
    "d": "Sie umfasst nur Personen, die sich über gemeinsame politische Ziele definieren.",
    "richtig": "c",
    "begruendung": "Lokal-administrative Communities sind Gebietskörperschaften (Gemeinden, Stadtteile) mit klarer geografischer und rechtlicher Abgrenzung."
  },
  {
    "frage": "Inwiefern unterscheidet sich eine sozial-relationale Community von einer bloßen sozialen Kategorie (z. B. „die Brillenträger“)?",
    "a": "Durch das Vorhandensein zeitstabiler und emotional involvierender interpersonaler Beziehungen.",
    "b": "Durch die schiere Anzahl der Mitglieder (mindestens 150 Personen).",
    "c": "Allein durch die räumliche Nähe der Mitglieder zueinander.",
    "d": "Durch das Fehlen jeglicher Außengrenzen.",
    "richtig": "a",
    "begruendung": "Eine Community erfordert im Gegensatz zur bloßen Kategorie reale soziale Interaktionen und Bindungen."
  },
  {
    "frage": "Was versteht man unter dem Begriff des „Identitätsunternehmers“?",
    "a": "Ein Stadtplaner, der Wohnviertel nach rein ökonomischen Kriterien entwirft.",
    "b": "Ein Mitglied der Community, das sich weigert, die internen Normen zu befolgen.",
    "c": "Eine Autorität, die Diskurse nutzt, um die Identität einer Community im Sinne eigener Ziele zu definieren.",
    "d": "Ein externer Berater, der das Image eines Stadtteils für Touristen aufwertet.",
    "richtig": "c",
    "begruendung": "Identitätsunternehmer versuchen, durch Deutungshoheit den Konsens über die Gruppenidentität zu steuern."
  },
  {
    "frage": "Welches Problem beschreibt der SB im Zusammenhang mit dem Image von benachteiligten Stadtteilen?",
    "a": "Ein zu positives Fremdbild führt zu einer Überlastung der lokalen Ressourcen.",
    "b": "Das negative Fremdbild kann die Bereitschaft der Bewohner schwächen, sich für den Stadtteil einzusetzen.",
    "c": "Bewohner identifizieren sich grundsätzlich nie mit einem Ort, der ein schlechtes Image hat.",
    "d": "Medienberichte über benachteiligte Viertel sind laut Studien grundsätzlich immer objektiv.",
    "richtig": "b",
    "begruendung": "Ein Stigma von außen kann die interne Bindung und das Engagement untergraben (Internalisierung des negativen Images)."
  },
  {
    "frage": "Seymour Sarason (1974) gilt als Wegbereiter des „Sense of Community“ (SoC). Wie beschreibt er diesen Kernbegriff?",
    "a": "Als rein rationales Kosten-Nutzen-Kalkül der Mitglieder.",
    "b": "Als Wahrnehmung von Ähnlichkeit, Interdependenz und das Gefühl, Teil einer stabilen Struktur zu sein.",
    "c": "Als einen Zustand, der nur in kleinen Dörfern, aber nicht in Städten existieren kann.",
    "d": "Als Verpflichtung, die eigene Individualität zugunsten der Gruppe vollständig aufzugeben.",
    "richtig": "b",
    "begruendung": "Sarason betont die psychologische Wahrnehmung der Einbettung in ein verlässliches soziales Gefüge."
  },
  {
    "frage": "Welches sind die vier Komponenten des Sense of Community nach McMillan und Chavis (1986)?",
    "a": "Macht, Status, Anerkennung, Erfolg.",
    "b": "Ort, Zeit, Interaktion, Struktur.",
    "c": "Mitgliedschaft, Einfluss, Integration und Bedürfnisbefriedigung, gemeinsame emotionale Verbundenheit.",
    "d": "Sicherheit, Investition, Grenzen, Symbole.",
    "richtig": "c",
    "begruendung": "Dies ist das einflussreichste Modell zur Strukturierung des SoC."
  },
  {
    "frage": "Welches Element gehört laut McMillan & Chavis zur Komponente „Mitgliedschaft“?",
    "a": "Die Wahrnehmung, dass die eigenen Bedürfnisse durch die Gruppe gestillt werden.",
    "b": "Die emotionale Sicherheit, die durch Akzeptanz und Respekt in der Gruppe entsteht.",
    "c": "Der Glaube an die kollektive Wirksamkeit der Gruppe bei politischen Protesten.",
    "d": "Die bidirektionale Beziehung zwischen individuellem und kollektivem Einfluss.",
    "richtig": "b",
    "begruendung": "Emotionale Sicherheit ist einer der fünf Aspekte der Mitgliedschaft (neben Grenzen, Symbolen etc.)."
  },
  {
    "frage": "Was bewirken „Grenzen“ im Modell von McMillan und Chavis?",
    "a": "Sie dienen ausschließlich der Ausgrenzung von Minoritäten.",
    "b": "Sie definieren die Zugehörigkeit und bieten den Mitgliedern dadurch Schutz und Sicherheit.",
    "c": "Sie müssen physisch (z. B. durch Zäune) sichtbar sein, um psychologisch zu wirken.",
    "d": "Sie verhindern, dass die Community Einfluss auf die restliche Gesellschaft ausüben kann.",
    "richtig": "b",
    "begruendung": "Grenzen schaffen einen „geschützten Raum“, in dem Vertrauen wachsen kann."
  },
  {
    "frage": "Wie wird „Einfluss“ im SoC-Modell konzeptualisiert?",
    "a": "Als Einbahnstraße: Nur die Community darf das Individuum beeinflussen.",
    "b": "Mitglieder fühlen sich stärker zugehörig, wenn sie wahrnehmen, selbst Einfluss auf die Gruppe zu haben.",
    "c": "Einfluss wird ausschließlich über die finanzielle Stärke eines Mitglieds definiert.",
    "d": "In einer wahren Community darf es keinerlei gegenseitige Beeinflussung geben.",
    "richtig": "b",
    "begruendung": "Es besteht eine Dynamik: Das Individuum will Einfluss haben, muss sich aber auch den Normen der Gruppe anpassen."
  },
  {
    "frage": "Was verbirgt sich hinter der Komponente „Integration und Bedürfnisbefriedigung“?",
    "a": "Die totale Angleichung aller Mitglieder an einen Einheitsstandard.",
    "b": "Dass die Mitgliedschaft in der Community belohnend sein muss (Ressourcenaustausch).",
    "c": "Die administrative Eingliederung von Migranten in die Gemeinde.",
    "d": "Der Verzicht auf individuelle Bedürfnisse zum Wohle der Gemeinschaft.",
    "richtig": "b",
    "begruendung": "McMillan nennt dies die „community economy“ – man gehört dazu, weil man dort bekommt, was man braucht."
  },
  {
    "frage": "Was ist laut McMillan und Chavis das „Herzstück“ einer Community?",
    "a": "Die gemeinsame emotionale Verbundenheit.",
    "b": "Die Einhaltung der administrativen Satzung.",
    "c": "Die geografische Abgrenzung zu Nachbarstadtteilen.",
    "d": "Der wirtschaftliche Wohlstand der Mitglieder.",
    "richtig": "a",
    "begruendung": "Ohne die affektive Bindung durch gemeinsame Geschichte und Erlebnisse bleibt die Struktur seelenlos."
  },
  {
    "frage": "Welcher Faktor stärkt die „gemeinsame emotionale Verbundenheit“ laut Theorie besonders?",
    "a": "Die Vermeidung von jeglichem Kontakt zwischen den Mitgliedern.",
    "b": "Das Teilen von bedeutsamen Ereignissen (z. B. Krisen oder Erfolge).",
    "c": "Eine möglichst große räumliche Distanz zwischen den Wohnorten.",
    "d": "Die Anwesenheit eines externen Feindbildes (ausschließlich).",
    "richtig": "b",
    "begruendung": "Gemeinsam durchstandene Ereignisse schmieden die Mitglieder emotional zusammen."
  },
  {
    "frage": "Der „Sense of Community Index“ (SCI) nach Perkins et al. nutzt wie viele Items?",
    "a": "4 Items.",
    "b": "12 Items.",
    "c": "24 Items.",
    "d": "40 Items.",
    "richtig": "b",
    "begruendung": "Der klassische Kurzfragebogen basiert auf 12 Fragen, die die vier Komponenten abdecken."
  },
  {
    "frage": "Welche Persönlichkeitsfaktoren korrelieren laut SB positiv mit dem Sense of Community?",
    "a": "Neurotizismus und Introversion.",
    "b": "Verträglichkeit und Extraversion.",
    "c": "Gewissenhaftigkeit und Offenheit für Erfahrungen (nur diese beiden).",
    "d": "Ein hohes Maß an Dominanzstreben.",
    "richtig": "b",
    "begruendung": "Prosoziale Tendenzen und Kontaktfreudigkeit erleichtern die Bindung an eine Community."
  },
  {
    "frage": "Welcher Zusammenhang wurde bezüglich der Größe einer Community und dem SoC gefunden?",
    "a": "Je größer die Stadt, desto höher der SoC.",
    "b": "Die Größe hat keinen Einfluss gezeigt.",
    "c": "In kleineren Einheiten (z. B. kleine Unis) ist der SoC oft stärker ausgeprägt.",
    "d": "Nur Communities mit exakt 150 Mitgliedern erreichen hohe Werte.",
    "richtig": "c",
    "begruendung": "Kleinere Strukturen ermöglichen häufiger die für den SoC notwendigen interpersonalen Kontakte."
  },
  {
    "frage": "Was ist eine bekannte Konsequenz eines hohen Sense of Community?",
    "a": "Ein höheres Risiko für psychische Erkrankungen.",
    "b": "Ein gesteigertes individuelles Wohlbefinden und bessere psychische Gesundheit.",
    "c": "Eine Abnahme politischer Partizipation.",
    "d": "Eine Zunahme von Kriminalität.",
    "richtig": "b",
    "begruendung": "SoC wirkt als Schutzfaktor für die psychische Resilienz."
  },
  {
    "frage": "Wie unterscheidet sich „Ortsidentität“ (place identity) vom „Sense of Community“?",
    "a": "Ortsidentität bezieht sich auf die kognitive Einbeziehung der physischen Umgebung in das Selbstbild.",
    "b": "Es gibt keinen Unterschied.",
    "c": "Ortsidentität ist rein emotional.",
    "d": "SoC bezieht sich auf Gebäude.",
    "richtig": "a",
    "begruendung": "Ortsidentität ist ein umweltpsychologisches Konzept, SoC eher sozialpsychologisch."
  },
  {
    "frage": "Was kritisierten verschiedene Autoren an der vier-faktoriellen Struktur von McMillan und Chavis?",
    "a": "Dass das Modell zu simpel sei.",
    "b": "Dass die Struktur empirisch oft nicht konsistent bestätigt wurde.",
    "c": "Dass die emotionale Komponente fehlt.",
    "d": "Dass es nur virtuell anwendbar sei.",
    "richtig": "b",
    "begruendung": "Faktorenanalysen zeigten oft instabile Ladungen oder hohe Interkorrelationen."
  },
  {
    "frage": "Welche zusätzlichen Facetten für den SoC schlugen Omoto und Snyder (2010) vor?",
    "a": "Religion und Politik.",
    "b": "Erfolg (success) und Vermächtnis (legacy).",
    "c": "Finanzen und Macht.",
    "d": "Tradition und Innovation.",
    "richtig": "b",
    "begruendung": "Erfolg meint kollektive Selbstwirksamkeit, Vermächtnis die Weitergabe von Werten."
  },
  {
    "frage": "Was ist der Vorschlag von Bess et al. (2002) zur begrifflichen Klärung des SoC?",
    "a": "Man sollte den Begriff ganz durch „Kohäsion“ ersetzen.",
    "b": "Unterscheidung zwischen „Psychological Sense of Community“ (Individuum) und „Sense of Community“ (Kollektiv).",
    "c": "SoC sollte nur noch für geografische Einheiten verwendet werden.",
    "d": "Den Begriff ins Deutsche als „Gemeinschaftsgeist“ zu übersetzen.",
    "richtig": "b",
    "begruendung": "Dies soll helfen, die Analyseebenen (Individuum vs. Eigenschaft des Systems) sauber zu trennen."
  },
  {
    "frage": "Was kennzeichnet die „gerechte Community“ (just community) nach Newbrough (1995)?",
    "a": "Die totale Unterordnung des Individuums unter staatliche Vorgaben.",
    "b": "Die Balance zwischen Gemeinschaft, individueller Freiheit und sozialer Gerechtigkeit.",
    "c": "Ein System, in dem es keinerlei Regeln oder Grenzen mehr gibt.",
    "d": "Eine Community, die ausschließlich aus Experten besteht.",
    "richtig": "b",
    "begruendung": "Es ist ein normatives Modell zur Austarierung widersprüchlicher Werte in einer Demokratie."
  },
  {
    "frage": "Rudolf Moos (1973, 1984) vergleicht das „Sozialklima“ womit?",
    "a": "Mit dem Wetterbericht einer Region.",
    "b": "Mit der Persönlichkeit eines Individuums.",
    "c": "Mit dem Bruttosozialprodukt einer Gemeinde.",
    "d": "Mit der architektonischen Beschaffenheit von Räumen.",
    "richtig": "b",
    "begruendung": "So wie Individuen Persönlichkeiten haben, haben Umgebungen ein spezifisches „Klima“."
  },
  {
    "frage": "Welches ist EINE der drei Hauptdimensionen des Sozialklimas nach Moos?",
    "a": "Wirtschaftliche Produktivität.",
    "b": "Persönliche Entwicklungschancen.",
    "c": "Geografische Lage.",
    "d": "Ethnische Homogenität.",
    "richtig": "b",
    "begruendung": "Die drei Dimensionen sind: Soziale Beziehungen, Persönliche Entwicklung, Systemaufrechterhaltung/-wandel."
  },
  {
    "frage": "Was wird in der Dimension „Systemaufrechterhaltung und Systemwandel“ bei Moos erfasst?",
    "a": "Wie freundlich die Menschen zueinander sind.",
    "b": "Inwieweit die Umgebung Autonomie und Wachstum fördert.",
    "c": "Das Ausmaß an Ordnung, Organisation und Klarheit der Regeln.",
    "d": "Die Anzahl der Parteien im Gemeinderat.",
    "richtig": "c",
    "begruendung": "Hier geht es um die strukturelle Kontrolle und die Veränderbarkeit des Systems."
  },
  {
    "frage": "Was sind „suprapersonale Faktoren“ in der Theorie des Sozialklimas?",
    "a": "Die religiösen Visionen der Gründerväter.",
    "b": "Merkmale der sozialen Konfiguration der Mitglieder (z. B. Altersschichtung, Bildungsniveau).",
    "c": "Faktoren, die durch göttliche Fügung entstehen.",
    "d": "Gesetzliche Vorgaben der Europäischen Union.",
    "richtig": "b",
    "begruendung": "Das Klima wird durch die kollektiven Merkmale der anwesenden Personen geprägt."
  },
  {
    "frage": "Welche Annahme trifft Moos bezüglich der Auswirkungen des Sozialklimas (Kurvilinearitätsannahme)?",
    "a": "Je extremer eine Klimadimension ausgeprägt ist, desto besser.",
    "b": "Moderate Ausprägungen sind oft vorteilhafter als extreme .",
    "c": "Das Klima hat nur bei Kindern Auswirkungen.",
    "d": "Es gibt keinen Zusammenhang zwischen Klima und Wohlbefinden.",
    "richtig": "b",
    "begruendung": "Extrem hohe Werte können einengend oder innovationsfeindlich wirken."
  },
  {
    "frage": "Welches methodische Problem entsteht bei der Aggregierung individueller Urteile zum „Sozialklimaindex“?",
    "a": "Man darf keine Mittelwerte aus subjektiven Daten bilden.",
    "b": "Informationen über die interindividuelle Variabilität (Uneinigkeit) gehen verloren.",
    "c": "Die Befragten lügen grundsätzlich.",
    "d": "Sozialklima lässt sich nur durch Beobachtung erfassen.",
    "richtig": "b",
    "begruendung": "Ein Mittelwert kann unterschiedliche Verteilungen verschleiern."
  },
  {
    "frage": "James Kelly (1966) formulierte vier ökologische Prinzipien. Welches gehört DAZU?",
    "a": "Sukzession.",
    "b": "Individualisierung.",
    "c": "Hierarchisierung.",
    "d": "Kommerzialisierung.",
    "richtig": "a",
    "begruendung": "Die Prinzipien sind: Interdependenz, Zirkulation von Ressourcen, Adaptation und Sukzession."
  },
  {
    "frage": "Was besagt das ökologische Prinzip der „Interdependenz“?",
    "a": "Dass jeder Mensch für sich allein verantwortlich ist.",
    "b": "Dass Teile eines Systems miteinander verknüpft sind und Änderungen sich fortpflanzen.",
    "c": "Dass Ressourcen immer im Kreis fließen müssen.",
    "d": "Dass sich nur die Stärksten durchsetzen.",
    "richtig": "b",
    "begruendung": "Ein Eingriff an einer Stelle hat Folgen für andere Bereiche."
  },
  {
    "frage": "Welchen historischen Hintergrund hat die „Marienthalstudie“ (1933)?",
    "a": "Die Untersuchung der Auswirkungen von Massenarbeitslosigkeit auf ein Dorf.",
    "b": "Den Bau einer neuen Fabrik.",
    "c": "Frühe Computerforschung.",
    "d": "Die Folgen von Reichtum.",
    "richtig": "a",
    "begruendung": "Jahoda et al. zeigten den Zerfall des sozialen Gefüges durch Arbeitslosigkeit."
  },
  {
    "frage": "Was versteht Kelly unter der „Zirkulation von Ressourcen“?",
    "a": "Den reinen Geldfluss.",
    "b": "Die Art und Weise, wie Potenziale (Geld, Wissen, Hilfe) verteilt und genutzt werden.",
    "c": "Abfallrecycling.",
    "d": "Zeitlich begrenzten Ressourceneinsatz.",
    "richtig": "b",
    "begruendung": "Es geht um den Austausch lokaler Stärken."
  },
  {
    "frage": "Im Kontext der „Adaptation“: Was beschreibt der Begriff „Assimilation“?",
    "a": "Das Individuum verändert aktiv die Umwelt.",
    "b": "Das Individuum passt sich den bestehenden Anforderungen der Umwelt an.",
    "c": "Auflösung der Community.",
    "d": "Verschmelzung zweier Communities.",
    "richtig": "b",
    "begruendung": "Assimilation beschreibt die Anpassung des Individuums."
  },
  {
    "frage": "Was beschreibt die „Akkommodation“ im Prozess der Adaptation?",
    "a": "Die Umwelt verändert sich, um den Bedürfnissen der Individuen gerecht zu werden.",
    "b": "Unterwerfung unter Gesetze.",
    "c": "Wohnungswechsel.",
    "d": "Sozialer Rückzug.",
    "richtig": "a",
    "begruendung": "Adaptation ist ein wechselseitiger Prozess."
  },
  {
    "frage": "Worauf bezieht sich das Prinzip der „Sukzession“?",
    "a": "Rangfolge der Anführer.",
    "b": "Zeitliche Dimension und Veränderungsgeschichte eines Systems.",
    "c": "Erbfolge.",
    "d": "Krisenabfolge.",
    "richtig": "b",
    "begruendung": "Vergangenheit ist zentral für das Verständnis der Gegenwart."
  },
  {
    "frage": "Warum ist die „Interventionsgeschichte“ laut SB für Community-Psychologen so wichtig?",
    "a": "Zur Namenskenntnis früherer Projekte.",
    "b": "Weil frühere Projekte die aktuelle Erfolgserwartung beeinflussen.",
    "c": "Zur Budgetkontrolle.",
    "d": "Sie ist unwichtig.",
    "richtig": "b",
    "begruendung": "Eine Niederlagengeschichte beeinflusst neue Interventionen."
  },
  {
    "frage": "Welcher Begriff beschreibt den Prozess der kulturellen Anpassung bei längerfristigem Kontakt zweier Gruppen?",
    "a": "Akkulturation.",
    "b": "Akkommodation.",
    "c": "Sukzession.",
    "d": "Kohäsion.",
    "richtig": "a",
    "begruendung": "Akkulturation beschreibt kulturelle Wandlungsprozesse."
  },
  {
    "frage": "Eine Community wird im SB oft als „sozial-ökologisches System“ bezeichnet. Was ist ein Merkmal solcher Systeme?",
    "a": "Isolation von der Umwelt.",
    "b": "Multiple Ebenen (Individuum, Gruppe, Organisation, Gesellschaft).",
    "c": "Konfliktfreiheit.",
    "d": "Zeitliche Stabilität.",
    "richtig": "b",
    "begruendung": "Systemebenen sind miteinander verknüpft."
  },
  {
    "frage": "Was ist laut SB eine wichtige „Antezedenz“ für lokalen SoC?",
    "a": "Viele Parkplätze.",
    "b": "Affektive Ortsbindung (place attachment).",
    "c": "Grenzenlosigkeit.",
    "d": "Rationalität.",
    "richtig": "b",
    "begruendung": "Emotionale Ortsbindung fördert SoC."
  },
  {
    "frage": "Welches spirituelle Element wird in der Komponente „Shared Emotional Connection“ genannt?",
    "a": "Religionspflicht.",
    "b": "Sinnstiftung durch Verbundenheit mit einer Gemeinschaft.",
    "c": "Übernatürliche Kräfte.",
    "d": "Keines.",
    "richtig": "b",
    "begruendung": "McMillan beschreibt ein Gefühl von Sinnhaftigkeit durch Zugehörigkeit."
  },
  {
    "frage": "Was ist ein typisches Beispiel für „Zirkulation von Ressourcen“ in einer Community?",
    "a": "Der Bau einer Mauer um ein Villenviertel.",
    "b": "Ein lokaler Tauschring für Dienstleistungen (Nachbarschaftshilfe).",
    "c": "Die Abwanderung qualifizierter Arbeitskräfte in andere Städte.",
    "d": "Das ausschließliche Horten von privatem Kapital.",
    "richtig": "b",
    "begruendung": "Hier werden vorhandene Kompetenzen innerhalb des Systems nutzbar gemacht."
  },
  {
    "frage": "Wenn Moos von „Dimensionen der persönlichen Entwicklung“ spricht, was meint er damit?",
    "a": "Ob die Mitglieder der Gruppe mehr Gehalt bekommen.",
    "b": "Ob der soziale Kontext Autonomie, Fertigkeitserwerb und Selbstbestimmung fördert.",
    "c": "Wie viele Kinder in der Community geboren werden.",
    "d": "Dass jedes Mitglied einen Therapeuten zugewiesen bekommt.",
    "richtig": "b",
    "begruendung": "Es geht um das Wachstumspotenzial, das eine Umgebung dem Einzelnen bietet."
  },
  {
    "frage": "Welches theoretische Konzept schlugen Bess et al. (2002) vor, um die individuelle Wahrnehmung des Sense of Community begrifflich von der Eigenschaft des Systems abzugrenzen?",
    "a": "Systemic Sense of Community.",
    "b": "Psychological Sense of Community.",
    "c": "Individual Belonging Index.",
    "d": "Collective Cohesion Score.",
    "richtig": "b",
    "begruendung": "Dies dient der Präzisierung der Analyseebene."
  },
  {
    "frage": "In der ethnografischen Studie von Carol Stack (1974) wurde beobachtet, wie Bewohner eines Sozialwohnungsbaus Möbel und Kinderbetreuung über Familiengrenzen hinweg austauschten. Welches ökologische Prinzip wird hier primär illustriert?",
    "a": "Sukzession.",
    "b": "Adaptation.",
    "c": "Zirkulation von Ressourcen.",
    "d": "Interdependenz.",
    "richtig": "c",
    "begruendung": "Es geht um die Art und Weise, wie Potenziale (Ressourcen) innerhalb des Systems fließen und genutzt werden."
  },
  {
    "frage": "Die „Marienthalstudie“ von Jahoda et al. ist ein zentrales Beispiel für welches Prinzip, da sie zeigt, wie globale wirtschaftliche Krisen die kleinsten administrativen Einheiten (Dörfer) direkt beeinflussen?",
    "a": "Sukzession.",
    "b": "Interdependenz.",
    "c": "Personelle Ressourcenverteilung.",
    "d": "Assimilation.",
    "richtig": "b",
    "begruendung": "Interdependenz bedeutet, dass Veränderungen in einem (Teil-)System Auswirkungen auf alle damit verbundenen Systeme haben."
  },
  {
    "frage": "Was versteht man unter dem Begriff „Vermächtnis“ (legacy) im erweiterten SoC-Modell nach Omoto und Snyder (2010)?",
    "a": "Die finanzielle Erbschaft, die ein Mitglied der Community hinterlässt.",
    "b": "Den historischen Ursprung der Community-Symbole.",
    "c": "Ein Gefühl der Verantwortlichkeit für zukünftige Generationen der Community.",
    "d": "Den rechtlichen Status der Community als Gebietskörperschaft.",
    "richtig": "c",
    "begruendung": "Diese Facette erklärt, warum Menschen sich engagieren, auch wenn sie selbst nicht mehr davon profitieren werden."
  },
  {
    "frage": "Warum ist die „Interventionsgeschichte“ eines Stadtteils laut Sukzessionsprinzip für neue Projekte entscheidend?",
    "a": "Weil man nur so die alten Fördergelder abrechnen kann.",
    "b": "Weil gescheiterte Maßnahmen zu kollektiver Ohnmacht und geringer Erfolgserwartung führen können.",
    "c": "Weil nur alte Interventionen als „tradierte Normen“ gelten.",
    "d": "Weil Sukzession ausschließlich die biologische Abfolge von Bewohnern meint.",
    "richtig": "b",
    "begruendung": "Frühere Erfahrungen prägen die Bereitschaft zur Mitarbeit an neuen Projekten massiv."
  }
];