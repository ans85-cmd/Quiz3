const questions = [
  {
    "frage": "Welches Verständnis von Stress hat sich in der Community Psychology weitgehend durchgesetzt?",
    "a": "Stress als rein physiologische Reaktion auf äußere Bedrohungen.",
    "b": "Stress als rein objektiver Umweltreiz (Stressor).",
    "c": "Das kognitiv-transaktionale Begriffsverständnis nach Lazarus.",
    "d": "Die Definition von Stress als rein emotionales Defizit.",
    "richtig": "c",
    "begruendung": "In der Community Psychology wird Stress als transaktionales Geschehen zwischen Umweltanforderungen und der Person definiert."
  },
  {
    "frage": "Was charakterisiert das „Primary Appraisal“ im Modell von Lazarus und Folkman?",
    "a": "Die Einschätzung, ob genügend Ressourcen zur Bewältigung vorhanden sind.",
    "b": "Die Bewertung eines Umweltereignisses als günstig, irrelevant oder schädlich.",
    "c": "Die rückblickende Bewertung einer bereits abgeschlossenen Handlung.",
    "d": "Die rein körperliche Stressreaktion wie erhöhter Puls.",
    "richtig": "b",
    "begruendung": "Beim Primary Appraisal wird beurteilt, ob ein Ereignis das Wohlergehen bedroht, irrelevant ist oder positiv wirkt."
  },
  {
    "frage": "Eine bevorstehende Prüfung wird als „Herausforderung“ (Challenge) eingestuft. Was bedeutet dies laut Studienbrief?",
    "a": "Die Person erwartet ausschließlich negative Konsequenzen und Verluste.",
    "b": "Die Situation wird als irrelevant für das eigene Leben angesehen.",
    "c": "Es werden trotz Anstrengung auch positive Konsequenzen wie Erfolgserlebnisse erwartet.",
    "d": "Die Person hat bereits aufgegeben, die Situation zu beeinflussen.",
    "richtig": "c",
    "begruendung": "Herausforderungen zeichnen sich dadurch aus, dass sie positive Emotionen und Erfolgserlebnisse ermöglichen können."
  },
  {
    "frage": "Was wird im „Secondary Appraisal“ primär bewertet?",
    "a": "Ob die Situation schädlich oder irrelevant ist.",
    "b": "Die Verfügbarkeit von Bewältigungsmöglichkeiten und Ressourcen.",
    "c": "Die soziale Erwünschtheit der eigenen Stressreaktion.",
    "d": "Die langfristigen kulturellen Folgen des Stressors.",
    "richtig": "b",
    "begruendung": "Hier geht es darum, ob die eigenen Fähigkeiten und Mittel ausreichen, um mit dem Stressor umzugehen."
  },
  {
    "frage": "Was beschreibt der Begriff „Reappraisal“?",
    "a": "Eine erste, intuitive Schreckreaktion auf einen Reiz.",
    "b": "Die Suche nach sozialer Unterstützung in der Community.",
    "c": "Eine Neubewertung der Situation aufgrund neuer Informationen oder Erfahrungen.",
    "d": "Die Unterdrückung von Emotionen zur Stressreduktion.",
    "richtig": "c",
    "begruendung": "Reappraisal ist ein dynamischer Prozess, bei dem die Einschätzung angepasst wird, wenn neue Aspekte hinzukommen."
  },
  {
    "frage": "Was versteht man unter „dispositionellem Optimismus“?",
    "a": "Die situative Hoffnung, dass eine spezifische Prüfung gut läuft.",
    "b": "Eine generalisierte positive Ergebniserwartung über verschiedene Situationen hinweg.",
    "c": "Das Vertrauen, dass andere Menschen alle Probleme lösen werden.",
    "d": "Eine external-fatale Kontrollüberzeugung.",
    "richtig": "b",
    "begruendung": "Es handelt sich um eine relativ zeit- und situationsstabile Persönlichkeitseigenschaft."
  },
  {
    "frage": "Welche Form der Kontrollüberzeugung ist mit einer geringeren Stressbelastung assoziiert?",
    "a": "External-fatale Kontrollüberzeugung (Schicksal).",
    "b": "External-soziale Kontrollüberzeugung (Macht anderer).",
    "c": "Internale Kontrollüberzeugung (Einfluss durch eigenes Handeln).",
    "d": "Kognitive Vermeidung der Kontrollfrage.",
    "richtig": "c",
    "begruendung": "Das Gefühl, selbst Einfluss nehmen zu können (internal), reduziert das Stressempfinden."
  },
  {
    "frage": "Welches Konstrukt gehört NICHT zum Konzept der „Hardiness“ nach Kobasa?",
    "a": "Commitment (Engagement).",
    "b": "Control (Kontrolle).",
    "c": "Challenge (Herausforderung).",
    "d": "Cohesion (Kohäsion).",
    "richtig": "d",
    "begruendung": "Hardiness besteht aus Engagement, Kontrolle und Herausforderung. Kohäsion ist ein Merkmal von Familiensystemen (Olson)."
  },
  {
    "frage": "Was ist ein zentrales Element des Kohärenzsinns (Salutogenese)?",
    "a": "Die Überzeugung, dass die Welt verständlich, handhabbar und bedeutsam ist.",
    "b": "Die Fähigkeit, Stressoren komplett zu vermeiden.",
    "c": "Die absolute Abhängigkeit von professionellen Helfern.",
    "d": "Die Einschätzung aller Ereignisse als rein positiv.",
    "richtig": "a",
    "begruendung": "Kohärenzsinn umfasst Verstehbarkeit, Handhabbarkeit und Sinnhaftigkeit."
  },
  {
    "frage": "Skinner et al. (2003) kritisieren traditionelle Coping-Klassifikationen. Welchen Aspekt heben sie stattdessen hervor?",
    "a": "Dass jede Strategie nur genau eine Funktion hat.",
    "b": "Die Bedeutung von Anpassungsprozessen zur Verbesserung der Passung zwischen Selbst und Umwelt.",
    "c": "Dass Konfrontation immer besser ist als Vermeidung.",
    "d": "Dass Coping rein genetisch bedingt ist.",
    "richtig": "b",
    "begruendung": "Sie sehen Bewältigung als Versuch, die Passung zwischen Individuum und Umweltanforderungen zu optimieren."
  },
  {
    "frage": "Welches der folgenden Kriterien schlagen Zeidner und Saklofske (1996) zur Bewertung der Coping-Effektivität vor?",
    "a": "Die vollständige Unterdrückung jeglicher Emotionen.",
    "b": "Das Ausmaß der Steigerung des subjektiven Wohlbefindens.",
    "c": "Die Anzahl der gleichzeitig angewandten Strategien.",
    "d": "Die finanzielle Entschädigung für den Stressor.",
    "richtig": "b",
    "begruendung": "Eines der acht Kriterien ist die Steigerung des Wohlbefindens des Individuums und seines Umfelds."
  },
  {
    "frage": "Welches physiologische Maß wird zur Beurteilung von effektivem Coping herangezogen?",
    "a": "Die Senkung des IQ-Werts während des Stressors.",
    "b": "Das Ausmaß der Reduktion stressspezifischer physiologischer Reaktionen (z. B. Cortisol).",
    "c": "Die Erhöhung der Körpertemperatur auf über 39 Grad.",
    "d": "Die Geschwindigkeit des Haarwachstums.",
    "richtig": "b",
    "begruendung": "Eine funktionale Bewältigung sollte die körperliche Stressantwort messbar reduzieren."
  },
  {
    "frage": "Was bedeutet „Wiederherstellung sozialer Funktionsfähigkeit“ als Coping-Kriterium?",
    "a": "Dass die Person keine sozialen Kontakte mehr benötigt.",
    "b": "Dass die Person ihre Rollen in Partnerschaft oder Beruf wieder ausfüllen kann.",
    "c": "Dass die Person alle alten Freunde durch neue ersetzt.",
    "d": "Dass die Person eine Führungsposition in der Community übernimmt.",
    "richtig": "b",
    "begruendung": "Es geht um die Rückkehr zu normativ definierten Beziehungen und Aufgaben."
  },
  {
    "frage": "Warum ist die Berücksichtigung der sozialen Dimension laut Community Psychology wichtig?",
    "a": "Weil Stressbewältigung ein rein privater Prozess ist.",
    "b": "Weil Individuen in soziale Netzwerke eingebettet sind, die durch Stress mitbetroffen sind.",
    "c": "Damit man anderen die Schuld am eigenen Stress geben kann.",
    "d": "Weil soziale Kontakte die einzige Ressource für Coping darstellen.",
    "richtig": "b",
    "begruendung": "Das Wohlbefinden des unmittelbaren Umfelds ist Teil eines ganzheitlichen Gesundheitsbegriffs."
  },
  {
    "frage": "In der Studie zu HIV-Infizierten (Baumgartner, 2007) zeigte sich, dass...",
    "a": "Konfrontatives Handeln bei unheilbaren Krankheiten immer am besten ist.",
    "b": "Emotionsorientiertes Coping bei der Akzeptanz der Erkrankung als Teil der Identität helfen kann.",
    "c": "Drogenmissbrauch eine funktionale Strategie zur Langzeitbewältigung ist.",
    "d": "Soziale Faktoren keinen Einfluss auf den Krankheitsverlauf haben.",
    "richtig": "b",
    "begruendung": "Bei chronischen, unheilbaren Stressoren kann Emotionsfokussierung hilfreicher sein als reiner Problemfokus."
  },
  {
    "frage": "Wie wird „Familie“ im Grundgesetz (Art. 6) der BRD behandelt?",
    "a": "Es gibt dort eine exakte Definition, wer zur Familie gehört.",
    "b": "Ehe und Familie stehen unter dem besonderen Schutze der staatlichen Ordnung.",
    "c": "Familie wird als veraltetes Konstrukt definiert.",
    "d": "Nur Familien mit mindestens drei Kindern werden geschützt.",
    "richtig": "b",
    "begruendung": "Das Grundgesetz schützt sie prominent, definiert sie aber nicht präzise."
  },
  {
    "frage": "Wie definiert Schneewind (2009) Familien aus psychologischer Sicht?",
    "a": "Als reine Wohngemeinschaft ohne emotionale Bindung.",
    "b": "Als Varianten intimer Beziehungssysteme mit intra- und intergenerationalen Konstellationen.",
    "c": "Ausschließlich als Kleinfamilie (Vater, Mutter, Kind).",
    "d": "Als ökonomische Zweckbündnisse zur Ressourcenteilung.",
    "richtig": "b",
    "begruendung": "Zentral sind die Intimität der Beziehungen und die Mehrgenerationalität."
  },
  {
    "frage": "Was beschreibt das systemische Merkmal der „Selbstorganisation“ in Familien?",
    "a": "Die Unfähigkeit, sich an äußere Krisen anzupassen.",
    "b": "Die Fähigkeit, sich innerhalb der eigenen Grenzen selbst zu erhalten und anzupassen.",
    "c": "Dass jedes Familienmitglied völlig unabhängig von den anderen handelt.",
    "d": "Dass der Staat die interne Struktur der Familie vorgibt.",
    "richtig": "b",
    "begruendung": "Familien können sich an veränderte Bedingungen (z. B. Krisen) aktiv anpassen."
  },
  {
    "frage": "Was ist der Unterschied zwischen Familienstress und einem Familienstressor?",
    "a": "Es gibt keinen Unterschied; beide Begriffe sind synonym.",
    "b": "Der Stressor ist das Ereignis (Input), Stress ist der resultierende Druck im System.",
    "c": "Stress ist immer positiv, Stressoren sind immer negativ.",
    "d": "Ein Stressor betrifft nur Individuen, Stress betrifft nur die Community.",
    "richtig": "b",
    "begruendung": "Stressoren sind Einwirkungen mit Veränderungspotenzial; Stress ist der Zustand der Spannung im System."
  },
  {
    "frage": "Ein Familienmitglied erkrankt chronisch. Welches Klassifikationskriterium für Stressoren ist hier primär betroffen?",
    "a": "Externaler Stressor.",
    "b": "Ursprung (interner Stressor).",
    "c": "Naturgegebenheit.",
    "d": "Geringe Intensität.",
    "richtig": "b",
    "begruendung": "Da die Ursache innerhalb der Familie liegt, handelt es sich um einen internen Stressor."
  },
  {
    "frage": "Welcher Stressor wirkt auf die „Gesamtstichprobe“ der Familie (Verbreitung)?",
    "a": "Ein Streit zwischen zwei Geschwistern.",
    "b": "Der Tod eines Elternteils.",
    "c": "Ein schlechtes Zeugnis eines Kindes.",
    "d": "Ein individuelles Hobby eines Elternteils.",
    "richtig": "b",
    "begruendung": "Der Tod eines Elternteils betrifft das gesamte Familiensystem grundlegend."
  },
  {
    "frage": "Ein plötzlicher Arbeitsplatzverlust ist ein Beispiel für welches Merkmal?",
    "a": "Sukzessive Entwicklung.",
    "b": "Abruptheit des Eintritts.",
    "c": "Hohe Vorhersehbarkeit.",
    "d": "Interner Ursprung.",
    "richtig": "b",
    "begruendung": "Ereignisse wie Entlassungen treten meist plötzlich ein."
  },
  {
    "frage": "Was unterscheidet normative von non-normativen Stressoren?",
    "a": "Normative Stressoren sind immer illegal.",
    "b": "Normative Stressoren sind erwartbar (z. B. Auszug der Kinder), non-normative sind unvorhergesehen (z. B. Unfall).",
    "c": "Non-normative Stressoren sind für alle Familien gleich.",
    "d": "Normative Stressoren führen nie zu Stress.",
    "richtig": "b",
    "begruendung": "Normativ bezieht sich auf typische Übergänge im Lebenslauf."
  },
  {
    "frage": "Auf welchen drei Dimensionen basiert das Circumplex-Modell von Olson?",
    "a": "Intelligenz, Einkommen, Wohnort.",
    "b": "Kohäsion, Adaptabilität, Kommunikation.",
    "c": "Macht, Liebe, Konflikt.",
    "d": "Erziehung, Gene, Umwelt.",
    "richtig": "b",
    "begruendung": "Diese drei Variablen charakterisieren das Zusammenleben laut Olson."
  },
  {
    "frage": "Was versteht Olson unter „Familienkohäsion“?",
    "a": "Die Fähigkeit, Regeln ständig zu ändern.",
    "b": "Das Ausmaß der positiven emotionalen Bindung zwischen den Mitgliedern.",
    "c": "Die Anzahl der gemeinsamen Quadratmeter Wohnfläche.",
    "d": "Die rein finanzielle Abhängigkeit der Kinder von den Eltern.",
    "richtig": "b",
    "begruendung": "Es geht um emotionale Nähe und Verbundenheit."
  },
  {
    "frage": "Welche Ausprägung der Adaptabilität gilt im Circumplex-Modell als „balanciert“ (optimal)?",
    "a": "Rigide (keine Veränderung).",
    "b": "Chaotisch (ständige Veränderung).",
    "c": "Strukturiert oder flexibel (moderate Ausprägung).",
    "d": "Emotional verstrickt.",
    "richtig": "c",
    "begruendung": "Mittlere Werte auf den Dimensionen gelten als funktional für die Stressbewältigung."
  },
  {
    "frage": "Eine Familie, die durch „extreme Nähe und mangelnde Freiräume“ charakterisiert ist, befindet sich auf der Kohäsionsdimension im Bereich...",
    "a": "Losgelöst (disengaged).",
    "b": "Getrennt (separated).",
    "c": "Verbunden (connected).",
    "d": "Verstrickt (enmeshed).",
    "richtig": "d",
    "begruendung": "„Verstrickt“ (enmeshed) bedeutet eine übermäßig hohe Kohäsion, die Individualität einschränkt."
  },
  {
    "frage": "Was kennzeichnet eine „chaotische“ Adaptabilität?",
    "a": "Klare Rollenverteilung und stabile Regeln.",
    "b": "Fehlende Führung und dramatische Rollenwechsel.",
    "c": "Autoritäre Führung durch ein Familienoberhaupt.",
    "d": "Gelegentliche Anpassung von Regeln bei Bedarf.",
    "richtig": "b",
    "begruendung": "Chaotische Systeme haben keine klare Struktur und sind unberechenbar."
  },
  {
    "frage": "Welche Rolle spielt die „Kommunikation“ im Modell von Olson?",
    "a": "Sie ist ein reiner Störfaktor bei der Stressbewältigung.",
    "b": "Sie ist eine moderierende Dimension, die Kohäsion und Adaptabilität fördert.",
    "c": "Sie ist nur für Familien mit hohem Bildungsstand relevant.",
    "d": "Sie ersetzt die Dimension der Adaptabilität vollständig.",
    "richtig": "b",
    "begruendung": "Gute Kommunikation hilft der Familie, sich auf den anderen Dimensionen zu bewegen."
  },
  {
    "frage": "Ein „rigides“ Familiensystem zeichnet sich aus durch...",
    "a": "Demokratische Entscheidungsfindung.",
    "b": "Autoritäre Führung und strikte Disziplin.",
    "c": "Zu viel Veränderung bei geringem Anlass.",
    "d": "Hohe emotionale Wärme.",
    "richtig": "b",
    "begruendung": "Rigide Systeme halten starr an Regeln fest und lassen kaum Veränderungen zu."
  },
  {
    "frage": "Was versteht Putnam (2000) unter „sozialem Kapital“?",
    "a": "Das rein finanzielle Vermögen einer Stadt.",
    "b": "Soziale Netzwerke und die daraus resultierenden Normen der Reziprozität und Vertrauenswürdigkeit.",
    "c": "Den Besitz von Immobilien innerhalb einer Nachbarschaft.",
    "d": "Die Anzahl der Polizisten in einem Viertel.",
    "richtig": "b",
    "begruendung": "Soziales Kapital bezieht sich auf die Verbindung zwischen Individuen und deren kollektiven Nutzen."
  },
  {
    "frage": "Wann neigen Menschen laut dem Text stärker dazu, sich über ihre ethnische Zugehörigkeit zu definieren?",
    "a": "Wenn sie sich in einer Situation befinden, die diese Zugehörigkeit besonders hervorhebt (Distinktheit).",
    "b": "Wenn sie zur numerischen Mehrheit in einer Gesellschaft gehören.",
    "c": "Wenn das Thema der Diskussion völlig neutral ist (z. B. Wetter).",
    "d": "Wenn sie keine sozialen Kontakte haben.",
    "richtig": "a",
    "begruendung": "Situationale Faktoren und die Minderheitenposition erhöhen die Salienz der Identität."
  },
  {
    "frage": "Kollektive Identifikation kann als Copingstrategie dienen, weil sie...",
    "a": "...das Individuum isoliert.",
    "b": "...den Zugang zu kollektiven Ressourcen und Unterstützung ermöglicht.",
    "c": "...jegliche Form von Stress sofort beendet.",
    "d": "...die Notwendigkeit individueller Anstrengung ersetzt.",
    "richtig": "b",
    "begruendung": "Die Gruppe bietet Schutz und geteilte Ressourcen zur Stressbewältigung."
  },
  {
    "frage": "Welche Ebene der Stressprävention zielt auf den „Aufbau von community-basierten Angeboten“ ab?",
    "a": "Individuelle Ebene.",
    "b": "Familieninterne Ebene.",
    "c": "Community-Ebene.",
    "d": "Biologische Ebene.",
    "richtig": "c",
    "begruendung": "Dies ist eine strukturelle Maßnahme im sozialen Umfeld."
  },
  {
    "frage": "Was beschreibt das Prinzip der „Reziprozität“ im Kontext des sozialen Kapitals?",
    "a": "Dass man nur gibt, wenn man sofort eine Bezahlung erhält.",
    "b": "Ein System gegenseitiger Hilfeleistung und Erwartung von Gegenseitigkeit.",
    "c": "Die einseitige Abhängigkeit der Community vom Staat.",
    "d": "Den völligen Verzicht auf Unterstützung durch andere.",
    "richtig": "b",
    "begruendung": "Reziprozität ist ein Grundpfeiler funktionierender Gemeinschaften nach Putnam [20]."
  },
  {
    "frage": "Was ist ein „Stressor“ im Sinne der kognitiv-transaktionalen Theorie NICHT?",
    "a": "Arbeitslosigkeit.",
    "b": "Ein Streit.",
    "c": "Die objektive Unfähigkeit, zu atmen.",
    "d": "Eine bevorstehende Prüfung.",
    "richtig": "c",
    "begruendung": "Ein Stressor im psychologischen Sinne muss als belastend eingeschätzt werden können [4]."
  },
  {
    "frage": "Welches Konstrukt misst das „Way of Coping Questionnaire“ von Folkman und Lazarus?",
    "a": "Den Blutdruck während einer Krise.",
    "b": "Spezifische Coping-Strategien wie „Planvolles Problemlösen“ oder „Distanzierung“.",
    "c": "Die Anzahl der Familienmitglieder.",
    "d": "Den ökonomischen Status einer Community.",
    "richtig": "b",
    "begruendung": "Das Instrument erfasst verschiedene Subskalen der Bewältigung [8]."
  },
  {
    "frage": "Eine Familie zieht um, und das Kind kommt in einen neuen Kindergarten. Wie ist dieser Stressor einzustufen?",
    "a": "Chronisch und unvorhersehbar.",
    "b": "Kurzfristig (Dauer der Anpassung) und normativ (Übergang).",
    "c": "Interner Stressor mit geringer Intensität.",
    "d": "Externaler Stressor mit fataler Ursache.",
    "richtig": "b",
    "begruendung": "Solche Übergänge sind oft kurzfristig zu bewältigen und Teil der normalen Entwicklung [14, 15]."
  },
  {
    "frage": "Das Konzept der „Handhabbarkeit“ im Kohärenzsinn bedeutet...",
    "a": "...dass man alles alleine schaffen muss.",
    "b": "...dass man darauf vertraut, dass Ressourcen zur Bewältigung der Anforderungen verfügbar sind.",
    "c": "...dass das Leben keine Anforderungen stellt.",
    "d": "...dass man andere Menschen manipulieren kann.",
    "richtig": "b",
    "begruendung": "Es geht um die Überzeugung, dass die Schwierigkeiten des Lebens lösbar sind [6]."
  },
  {
    "frage": "Welcher Vorteil ergibt sich aus der funktionalen Sicht auf Coping als „Passung“?",
    "a": "Man kann Menschen leichter in „gute“ und „schlechte“ Bewältiger einteilen.",
    "b": "Es lenkt den Blick darauf, wie Strategien die Übereinstimmung zwischen Selbst und Umwelt verbessern.",
    "c": "Es spart Zeit bei der Diagnose.",
    "d": "Es macht professionelle Hilfe überflüssig.",
    "richtig": "b",
    "begruendung": "Coping wird als dynamischer Anpassungsprozess verstanden [7, 8]."
  },
  {
    "frage": "Was unterscheidet psychologischen Stress laut der kognitiv-transaktionalen Theorie grundlegend von früheren Ansätzen?",
    "a": "Stress wird primär als physiologischer Output (z. B. Adrenalinausschüttung) definiert.",
    "b": "Stress wird ausschließlich als objektiver Umweltreiz (Stressor) verstanden.",
    "c": "Stress ist das Ergebnis einer subjektiven Einschätzung der Anforderungs-Bewältigungs-Beziehung.",
    "d": "Es wird nicht mehr zwischen Eustress und Distress unterschieden.",
    "richtig": "c",
    "begruendung": "Stress ist hier ein „transaktionales Geschehen“, das erst durch die kognitive Bewertung der Person entsteht."
  },
  {
    "frage": "In welcher Phase der kognitiven Bewertung wird geprüft, ob eine Situation eine Bedrohung oder eine Herausforderung darstellt?",
    "a": "Secondary Appraisal.",
    "b": "Reappraisal.",
    "c": "Primary Appraisal.",
    "d": "Coping-Analyse.",
    "richtig": "c",
    "begruendung": "Das Primary Appraisal bewertet die Bedeutung eines Ereignisses für das Wohlergehen (günstig, irrelevant, schädlich/Bedrohung/Herausforderung)."
  },
  {
    "frage": "Ein Student denkt vor einer Klausur: „Ich habe nicht genug Zeit zum Lernen und keine guten Zusammenfassungen.“ Welcher Prozess findet hier statt?",
    "a": "Primary Appraisal.",
    "b": "Secondary Appraisal.",
    "c": "Emotionsfokussiertes Coping.",
    "d": "Dispositioneller Optimismus.",
    "richtig": "b",
    "begruendung": "Das Secondary Appraisal beurteilt die Verfügbarkeit von Bewältigungsmöglichkeiten und Ressourcen (Zeit, Material, Kompetenz)."
  },
  {
    "frage": "Was charakterisiert eine „Herausforderung“ (Challenge) im Gegensatz zur „Bedrohung“ (Threat)?",
    "a": "Die Herausforderung ist objektiv immer leichter zu bewältigen.",
    "b": "Die Herausforderung ist bereits abgeschlossen (Schaden/Verlust).",
    "c": "Die Herausforderung ermöglicht im Falle der Bewältigung positive Emotionen und Erfolgserlebnisse.",
    "d": "Bei einer Herausforderung ist kein Secondary Appraisal mehr nötig.",
    "richtig": "c",
    "begruendung": "Herausforderungen sind positiv besetzt, da sie Entwicklungspotenzial bieten."
  },
  {
    "frage": "Wann findet laut Lazarus und Folkman ein „Reappraisal“ statt?",
    "a": "Bevor das Ereignis überhaupt eingetreten ist.",
    "b": "Wenn neue Informationen über die Anforderungs-Bewältigungs-Beziehung vorliegen.",
    "c": "Ausschließlich nach einem totalen Scheitern der Bewältigung.",
    "d": "Nur wenn soziale Unterstützung von außen hinzukommt.",
    "richtig": "b",
    "begruendung": "Die Einschätzung wird dynamisch angepasst, wenn sich die Situation oder das Wissen darüber ändert."
  },
  {
    "frage": "Welches Item stammt am wahrscheinlichsten aus dem „Life Orientation Test“ (LOT) zur Messung des dispositionellen Optimismus?",
    "a": "„Ich habe meine Gefühle unter Kontrolle.",
    "b": "„In unsicheren Zeiten erwarte ich gewöhnlich das Beste.",
    "c": "„Ich bin für mein Schicksal selbst verantwortlich.",
    "d": "„Mein Leben ist sinnvoll und erklärbar.",
    "richtig": "b",
    "begruendung": "Der LOT misst die generalisierte Erwartung positiver Ereignisse."
  },
  {
    "frage": "Wie unterscheiden sich internale Kontrollüberzeugung und Selbstwirksamkeitserwartung?",
    "a": "Es gibt keinen Unterschied; beide Begriffe sind synonym.",
    "b": "Kontrollüberzeugung bezieht sich auf das Ergebnis („ich habe Einfluss“), Selbstwirksamkeit auf die eigene Kompetenz („ich kann das“).",
    "c": "Selbstwirksamkeit ist immer external, Kontrollüberzeugung immer internal.",
    "d": "Kontrollüberzeugungen sind stabil, Selbstwirksamkeit ist rein situativ.",
    "richtig": "b",
    "begruendung": "Der Fokus verschiebt sich von der Kausalattribution (Kontrolle) zur Einschätzung der Handlungskompetenz (Selbstwirksamkeit)."
  },
  {
    "frage": "Jemand glaubt, dass seine Gesundheit allein vom „Zufall“ oder „Schicksal“ abhängt. Dies ist eine...",
    "a": "internal-soziale Kontrollüberzeugung.",
    "b": "external-fatale Kontrollüberzeugung.",
    "c": "external-soziale Kontrollüberzeugung.",
    "d": "niedrige Selbstwirksamkeitserwartung.",
    "richtig": "b",
    "begruendung": "Externale Überzeugungen werden unterteilt in „Macht anderer“ (sozial) oder „unpersönliche Faktoren“ wie Schicksal (fatal)."
  },
  {
    "frage": "Welche Komponente gehört NICHT zur „Hardiness“ nach Kobasa?",
    "a": "Commitment (Engagement).",
    "b": "Control (Kontrolle).",
    "c": "Challenge (Herausforderung).",
    "d": "Coherence (Kohärenz).",
    "richtig": "d",
    "begruendung": "Die „3 Cs“ sind Engagement, Kontrolle und Herausforderung. Kohärenz ist ein eigenständiges Modell von Antonovsky."
  },
  {
    "frage": "Was versteht man unter „Reziprozität“ in einem sozialen Netzwerk?",
    "a": "Die Einseitigkeit der Hilfeleistung.",
    "b": "Das Prinzip der Gegenseitigkeit des Austauschs.",
    "c": "Die räumliche Nähe der Netzwerkmitglieder.",
    "d": "Die rechtliche Verpflichtung zur Hilfe.",
    "richtig": "b",
    "begruendung": "Ein stabiles Netzwerk basiert auf dem Geben und Nehmen."
  },
  {
    "frage": "Eine Person sagt: „Ich habe aufgegeben, zu erreichen, was ich möchte.“ Welcher Coping-Subskala des „Way of Coping Questionnaire“ entspricht dies?",
    "a": "Distanzierung.",
    "b": "Flucht/Vermeidung.",
    "c": "Resignation (ähnlich wie in der HIV-Studie beschrieben).",
    "d": "Anerkennung von Verantwortlichkeit.",
    "richtig": "c",
    "begruendung": "Resignation ist eine passive, oft dysfunktionale Form der Bewältigung."
  }
];