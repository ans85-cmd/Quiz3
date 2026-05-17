const questions = [
  {
    "frage": "Was ist laut der Zusammenfassung des Studienbriefs ein zentrales Merkmal des Begriffs „Bürgerbeteiligung“ in der Community Psychology?",
    "a": "Es handelt sich um organisierte Aktivitäten von Bürger:innen, um Probleme der Community durch kollektives Handeln zu lösen.",
    "b": "Es beschreibt primär die Teilnahme an Wahlen auf Bundesebene.",
    "c": "Es bezieht sich ausschließlich auf staatlich verordnete Beteiligungsprozesse („Top-Down“).",
    "d": "Es ist ein rein individueller Prozess der Selbstoptimierung ohne sozialen Bezug.",
    "richtig": "a",
    "begruendung": "Community Psychology fokussiert auf kollektive, kooperative Lösungen für lokale Probleme."
  },
  {
    "frage": "Welche Kompetenz beinhaltet die Fähigkeit, Lösungsmöglichkeiten für identifizierte Probleme unter Einbezug relevanter Rahmenbedingungen zu entwickeln?",
    "a": "Soziale Kompetenz.",
    "b": "Analytische Kompetenz.",
    "c": "Organisatorische Kompetenz.",
    "d": "Assimilative Kompetenz.",
    "richtig": "b",
    "begruendung": "Analytische Kompetenz umfasst Problemanalyse und Lösungsentwicklung."
  },
  {
    "frage": "Ein Bürger versteht die unterschiedlichen Bedürfnisse verschiedener Gruppen in seinem Stadtteil und kann Entscheidungsprozesse darauf abstimmen. Welcher Kompetenzkategorie nach dem SB ist dies zuzuordnen?",
    "a": "Kognitive Kompetenz.",
    "b": "Strategische Kompetenz.",
    "c": "Soziale Kompetenz.",
    "d": "Fachliche Kompetenz.",
    "richtig": "c",
    "begruendung": "Soziale Kompetenz beinhaltet die Sensibilität für Bedürfnisse und Perspektiven anderer Gruppen."
  },
  {
    "frage": "Welches ist die erste Stufe im Vier-Stufen-Modell der Partizipation nach Klandermans?",
    "a": "Teilnahmemotivation entwickeln.",
    "b": "Ziel von Mobilisierungsversuchen werden.",
    "c": "Teilnahmebarrieren überwinden.",
    "d": "Teil des Mobilisierungspotenzials werden.",
    "richtig": "d",
    "begruendung": "Die erste Stufe setzt voraus, dass die Person die Überzeugungen bezüglich der Problemsituation teilt."
  },
  {
    "frage": "In Stufe 1 des Modells nach Klandermans ist eine „aktive Partizipation“ dann nicht gegeben, wenn...",
    "a": "die Person die Überzeugungen bezüglich der Problemsituation und Lösung nicht teilt.",
    "b": "die Person zwar motiviert ist, aber keine Zeit für die Teilnahme hat.",
    "c": "die Person nicht über konkrete Aktionen informiert wurde.",
    "d": "soziale Trittbrettfahrer-Erwartungen dominieren.",
    "richtig": "a",
    "begruendung": "Ohne das Teilen der Grundüberzeugung gehört man gar nicht erst zum Mobilisierungspotenzial."
  },
  {
    "frage": "Was kennzeichnet die zweite Stufe („Ziel von Mobilisierungsversuchen werden“) im Prozessmodell?",
    "a": "Die Entwicklung einer Kosten-Nutzen-Kalkulation.",
    "b": "Dass die Person über konkrete Aktionen informiert und erreicht wird.",
    "c": "Die Identifikation mit der sozialen Bewegung.",
    "d": "Der Besitz notwendiger Ressourcen zur Barriereüberwindung.",
    "richtig": "b",
    "begruendung": "Man kann nur teilnehmen, wenn man weiß, wann und wo eine Aktion stattfindet."
  },
  {
    "frage": "Welches Motiv bei der Entwicklung der Teilnahmemotivation (Stufe 3) bezieht sich auf die Erwartung, dass die kollektive Aktion das angestrebte Ziel auch erreicht?",
    "a": "Normatives Motiv.",
    "b": "Belohnungsmotiv.",
    "c": "Kollektives Motiv.",
    "d": "Qualitatives Motiv.",
    "richtig": "c",
    "begruendung": "Das kollektive Motiv verknüpft die Erfolgserwartung der Bewegung mit dem Wert des Ziels."
  },
  {
    "frage": "Das „soziale Trittbrettfahren“ (social loafing) ist eine besondere Herausforderung für welches Motiv?",
    "a": "Das Belohnungsmotiv.",
    "b": "Das Identitätsmotiv.",
    "c": "Das normative Motiv.",
    "d": "Das kollektive Motiv.",
    "richtig": "d",
    "begruendung": "Man profitiert vom kollektiven Gut auch ohne eigenes Engagement."
  },
  {
    "frage": "Ein Jugendlicher nimmt an einer Stadtteilreinigung teil, weil er hofft, dort neue Freunde kennenzulernen. Welchem Motiv nach Klandermans entspricht dies?",
    "a": "Belohnungsmotiv (selektiver Nutzen).",
    "b": "Kollektives Motiv.",
    "c": "Normatives Motiv.",
    "d": "Ideologisches Motiv.",
    "richtig": "a",
    "begruendung": "Belohnungsmotive sind selektive Vorteile wie soziale Kontakte."
  },
  {
    "frage": "Was beschreibt das „normative Motiv“ im Kontext der Partizipation?",
    "a": "Die Übereinstimmung der eigenen Werte mit den Zielen der Bewegung.",
    "b": "Die antizipierten Reaktionen wichtiger Bezugspersonen auf die Teilnahme.",
    "c": "Die Einschätzung, ob man über genügend Zeit verfügt.",
    "d": "Die Freude an der Tätigkeit selbst.",
    "richtig": "b",
    "begruendung": "Das normative Motiv bezieht sich auf soziale Erwartungen des Umfelds."
  },
  {
    "frage": "Eine Person ist hoch motiviert, an einer Demo teilzunehmen, aber das Auto springt nicht an. Welche Stufe des Klandermans-Modells verhindert hier die Partizipation?",
    "a": "Stufe 1.",
    "b": "Stufe 2.",
    "c": "Stufe 4.",
    "d": "Stufe 3.",
    "richtig": "c",
    "begruendung": "Hier scheitert es an der Überwindung praktischer Barrieren."
  },
  {
    "frage": "Welche Funktion haben formale oder informale Netzwerke (z. B. Runde Tische) in Stufe 2 des Mobilisierungsprozesses?",
    "a": "Reduktion von Trittbrettfahren.",
    "b": "Erstellung von Kosten-Nutzen-Bilanzen.",
    "c": "Bereitstellung von Rechtsschutz.",
    "d": "Multiplikationsfunktion.",
    "richtig": "d",
    "begruendung": "Netzwerke helfen, Menschen zu erreichen und zu informieren."
  },
  {
    "frage": "Was ist das Ziel von community-psychologischen Interventionen auf Stufe 1 („Teil werden des Mobilisierungspotenzials“)?",
    "a": "Bewusstseinsbildung bezüglich lokaler Probleme.",
    "b": "Vergabe von Aufwandsentschädigungen.",
    "c": "Durchführung von Rollenspielen zur Barriereüberwindung.",
    "d": "Aufbau von Freundschaftsnetzwerken.",
    "richtig": "a",
    "begruendung": "Bürger sollen die Problemsituation erkennen und Überzeugungen teilen."
  },
  {
    "frage": "Wie können Interventionen auf Stufe 4 (Barrieren) konkret aussehen?",
    "a": "Durchführung von Aufklärungskampagnen in der Presse.",
    "b": "Gemeinsames Antizipieren potenzieller Hindernisse (z. B. im Rollenspiel).",
    "c": "Erhöhung der Identifikation mit der Bewegung.",
    "d": "Werbung für die Ziele der Initiative.",
    "richtig": "b",
    "begruendung": "Man bereitet sich gezielt auf mögliche Hindernisse vor."
  },
  {
    "frage": "Welcher Prozess ist laut SB neben der Kosten-Nutzen-Kalkulation für die Motivationsentwicklung (Stufe 3) von besonderer Bedeutung?",
    "a": "Kognitive Dissonanzreduktion.",
    "b": "Operante Konditionierung.",
    "c": "Identifikationsprozesse.",
    "d": "Reaktanzvermeidung.",
    "richtig": "c",
    "begruendung": "Soziale Identifikation ist neben rationalen Kalkülen zentral."
  },
  {
    "frage": "Laut der Zusammenfassung in Kapitel 5 erfordert die aktive Beteiligung von Bürger:innen...",
    "a": "ausschließlich finanzielle Ressourcen.",
    "b": "eine Trennung von Politik und Alltag.",
    "c": "die vollständige Abwesenheit von Konflikten.",
    "d": "personale und soziale Ressourcen.",
    "richtig": "d",
    "begruendung": "Partizipation benötigt Kompetenzen und Netzwerke."
  },
  {
    "frage": "Was versteht man unter dem Prinzip der „Zirkulation von Ressourcen“ im Kontext von Partizipation?",
    "a": "Den Austausch von Fähigkeiten und Unterstützung innerhalb der Community.",
    "b": "Den ausschließlichen Einsatz von staatlichen Fördergeldern.",
    "c": "Das Abwandern von Talenten aus benachteiligten Vierteln.",
    "d": "Die Konzentration von Macht bei einer kleinen Elite.",
    "richtig": "a",
    "begruendung": "Ressourcen fließen zwischen Mitgliedern hin und her."
  },
  {
    "frage": "Klandermans (1997) baute sein Modell auf einer Theorie auf. Welche war das?",
    "a": "Theorie des sozialen Vergleichs (Festinger).",
    "b": "Theorie des kollektiven Handelns (Olson).",
    "c": "Sozial-kognitive Lerntheorie (Bandura).",
    "d": "Theorie der sozialen Identität (Tajfel).",
    "richtig": "b",
    "begruendung": "Olsons Theorie liefert die Grundlage der Kosten-Nutzen-Logik."
  },
  {
    "frage": "Warum reicht das „kollektive Motiv“ oft nicht aus, um Menschen zur Teilnahme zu bewegen?",
    "a": "Weil die Ziele von Bewegungen meistens unbedeutend sind.",
    "b": "Weil Menschen grundsätzlich asozial handeln.",
    "c": "Weil das Problem des „sozialen Trittbrettfahrens“ besteht.",
    "d": "Weil kollektive Aktionen nie erfolgreich sind.",
    "richtig": "c",
    "begruendung": "Öffentliche Güter begünstigen Nichtteilnehmer."
  },
  {
    "frage": "In welcher Stufe spielt die Frage „Verfüge ich über die nötige Zeit und Mobilität?“ eine entscheidende Rolle für die tatsächliche Teilnahme?",
    "a": "Stufe 1.",
    "b": "Stufe 2.",
    "c": "Stufe 3.",
    "d": "Stufe 4.",
    "richtig": "d",
    "begruendung": "Zeit und Mobilität sind Barrieren bzw. Ressourcen der letzten Stufe."
  },
  {
    "frage": "Welche community-psychologische Maßnahme unterstützt Stufe 2 („Erreicht werden“)?",
    "a": "Verbesserung der Informationsfluss-Systeme und Netzwerke.",
    "b": "Steigerung der Selbstwirksamkeitserwartung durch Erfolgserlebnisse.",
    "c": "Gabe von materiellen Anreizen.",
    "d": "Ausbildung von analytischen Kompetenzen.",
    "richtig": "a",
    "begruendung": "Damit Menschen Ziel von Mobilisierung werden können, müssen sie informiert werden (Netzwerke)."
  },
  {
    "frage": "Ein selektiver Nutzenfaktor (Belohnungsmotiv) ist...",
    "a": "der Erfolg der gesamten Bewegung.",
    "b": "eine Aufwandsentschädigung für den Teilnehmer.",
    "c": "die Verbesserung des Klimas im gesamten Land.",
    "d": "das Teilen gemeinsamer Werte.",
    "richtig": "b",
    "begruendung": "Selektive Faktoren kommen nur denjenigen zugute, die auch wirklich teilnehmen."
  },
  {
    "frage": "Welche Zieldimension von Bürgerbeteiligung wird im SB explizit genannt?",
    "a": "Die Maximierung des individuellen Gewinns.",
    "b": "Die Durchsetzung der Mehrheitsmeinung gegen Minderheiten.",
    "c": "Die Beilegung oder Befriedung von Konflikten innerhalb der Community.",
    "d": "Die Abschaffung formaler politischer Strukturen.",
    "richtig": "c",
    "begruendung": "Eine wichtige Zieldimension ist die Befriedung von Konflikten zwischen Gruppen."
  },
  {
    "frage": "Ein Bürger kann gut organisieren, wer welche Aufgabe bei einem Stadtteilfest übernimmt. Welcher Kompetenz nach dem SB entspricht das am ehesten?",
    "a": "Analytische Kompetenz.",
    "b": "Soziale Kompetenz.",
    "c": "Fachkompetenz.",
    "d": "Organisatorische Kompetenz.",
    "richtig": "d",
    "begruendung": "Organisatorische Kompetenz umfasst Planung und Umsetzung von Aktionen."
  },
  {
    "frage": "Das Klandermans-Modell wurde ursprünglich für welche Art von Prozessen entwickelt?",
    "a": "Analyse von Mobilisierungs- und Partizipationsprozessen in sozialen Bewegungen.",
    "b": "Marktforschung zur Kundenzufriedenheit.",
    "c": "Klinische Diagnose von Sozialphobien.",
    "d": "Personalauswahl in Großunternehmen.",
    "richtig": "a",
    "begruendung": "Es stammt aus der Bewegungsforschung, lässt sich aber auf andere Bereiche übertragen."
  },
  {
    "frage": "Wenn eine Person hoch motiviert ist (Stufe 3), führt dies laut Modell...",
    "a": "automatisch zur aktiven Partizipation.",
    "b": "nicht zwingend zur Partizipation, wenn Barrieren auf Stufe 4 zu groß sind.",
    "c": "zum sofortigen Wegfall aller Trittbrettfahrer-Erwartungen.",
    "d": "immer zur Übernahme einer Führungsrolle.",
    "richtig": "b",
    "begruendung": "Die 4. Stufe (Barrieren) kann trotz hoher Motivation die Teilnahme verhindern."
  },
  {
    "frage": "Welche Rolle spielen „Freundschaftsnetzwerke“ laut SB in der Partizipation?",
    "a": "Sie sind irrelevant, da Partizipation ein sachlicher Prozess ist.",
    "b": "Sie dienen nur der emotionalen Ablenkung.",
    "c": "Sie haben eine wichtige Multiplikationsfunktion für Mobilisierungsversuche.",
    "d": "Sie verhindern Partizipation durch sozialen Druck.",
    "richtig": "c",
    "begruendung": "Informale Netzwerke helfen, Informationen über Aktionen zu verbreiten."
  },
  {
    "frage": "Was ist die Voraussetzung dafür, dass eine Person überhaupt zu Stufe 2 des Modells übergeht?",
    "a": "Sie muss bereits Mitglied einer Partei sein.",
    "b": "Sie muss über viel Geld verfügen.",
    "c": "Sie muss alle Barrieren bereits im Vorfeld gelöst haben.",
    "d": "Sie muss Teil des Mobilisierungspotenzials (Stufe 1) sein.",
    "richtig": "d",
    "begruendung": "Ohne die Basisüberzeugungen aus Stufe 1 greifen Mobilisierungsversuche in Stufe 2 nicht."
  },
  {
    "frage": "Ein Bürger unterschreibt eine Petition, weil er sich als „Umweltaktivist“ fühlt und dies Teil seines Selbstbildes ist. Dies ist ein Beispiel für:",
    "a": "Identifikationsprozesse.",
    "b": "Selektive materielle Anreize.",
    "c": "Barriereüberwindung.",
    "d": "Analytische Kompetenz.",
    "richtig": "a",
    "begruendung": "Soziale Identität und Selbstbild sind starke Motoren für Partizipation."
  },
  {
    "frage": "Warum ist „kritisches Bewusstsein“ eine wichtige personale Ressource für Bürgerbeteiligung?",
    "a": "Es führt dazu, dass man alles ablehnt, was vom Staat kommt.",
    "b": "Es ermöglicht, die Problemsituation und ihre Ursachen überhaupt zu erkennen (Stufe 1).",
    "c": "Es ist notwendig, um andere Teilnehmer einzuschüchtern.",
    "d": "Es ersetzt die Notwendigkeit von sozialen Netzwerken.",
    "richtig": "b",
    "begruendung": "Kritisches Bewusstsein ist die Basis für das Teilen von Überzeugungen in Stufe 1."
  },
  {
    "frage": "Was wird unter einem „Collective Action Frame“ im Kontext der Mobilisierung verstanden?",
    "a": "Ein physischer Rahmen, in dem Demonstrationen stattfinden.",
    "b": "Gemeinsam geteilte Überzeugungen bezüglich einer Problemsituation und deren Lösung.",
    "c": "Die rein rechtliche Grundlage für Bürgerbeteiligung in einer Kommune.",
    "d": "Ein individuelles Belohnungssystem für besonders aktive Bürger.",
    "richtig": "b",
    "begruendung": "Zur Mobilisierung müssen Probleme als ungerecht interpretiert und Lösungen geteilt werden."
  },
  {
    "frage": "In welcher Stufe des „Community Readiness Model“ (Edwards et al.) befindet sich eine Community, wenn sie das Problem zwar vage erkennt, aber keine Versuche unternimmt, es anzugehen?",
    "a": "Stufe 1.",
    "b": "Stufe 2.",
    "c": "Stufe 4.",
    "d": "Stufe 3.",
    "richtig": "d",
    "begruendung": "Stufe 3 beschreibt ein vages Problembewusstsein ohne Handlungsimpulse."
  },
  {
    "frage": "Was ist das Ziel der neunten und letzten Stufe („Sicherung der Nachhaltigkeit“) im Community Readiness Model?",
    "a": "Sicherung der Nachhaltigkeit durch flankierende Initiativen.",
    "b": "Die erstmalige Durchführung einer Evaluation der Maßnahmen.",
    "c": "Die Gründung eines lokalen Teams zur Problemvorbereitung.",
    "d": "Die reine Information der Presse über den Erfolg.",
    "richtig": "a",
    "begruendung": "Ziel ist die langfristige Verankerung der erreichten Veränderungen."
  },
  {
    "frage": "Welcher psychologische Mechanismus wird als „Frustrationsimpfung“ bezeichnet?",
    "a": "Die Gabe von finanziellen Boni bei Misserfolg.",
    "b": "Das Antizipieren möglicher Rückschläge, damit diese als weniger aversiv erlebt werden.",
    "c": "Der Ausschluss von Kritikern aus der Bürgerinitiative.",
    "d": "Die Steigerung der Identifikation durch externe Feindbilder.",
    "richtig": "b",
    "begruendung": "Vorbereitung auf Rückschläge erhöht die psychische Widerstandsfähigkeit."
  },
  {
    "frage": "Welche Bedingung fördert laut sozialpsychologischer Forschung die Identifikation der Mitglieder mit ihrer Initiative am stärksten?",
    "a": "Ein starker, autoritärer Anführer.",
    "b": "Der Erhalt von exklusiven materiellen Geschenken.",
    "c": "Das Gefühl, innerhalb der Gruppe respektiert und gleichberechtigt zu sein.",
    "d": "Die vollständige Abwesenheit von anderen Interessengruppen.",
    "richtig": "c",
    "begruendung": "Respekt und Gleichberechtigung fördern starke Gruppenidentifikation."
  },
  {
    "frage": "Was kennzeichnet „kollektive politische Wirksamkeitserwartungen“ im Gegensatz zu individuellen?",
    "a": "Sie beziehen sich nur auf die eigene Fähigkeit, ein Auto zu reparieren.",
    "b": "Sie sind die Überzeugung, dass Probleme durch gemeinsames Handeln der Community gelöst werden können.",
    "c": "Sie sind stabil über alle Lebensbereiche hinweg.",
    "d": "Sie ersetzen analytische Kompetenzen vollständig.",
    "richtig": "b",
    "begruendung": "Es geht um den Glauben an die kollektive Kraft der Gruppe."
  },
  {
    "frage": "Nachbarschaftsorganisationen erfüllen oft die Funktion „mediierender Strukturen“. Was bedeutet das?",
    "a": "Sie blockieren den Kontakt zu staatlichen Stellen.",
    "b": "Sie dienen ausschließlich der Unterhaltung der Bewohner.",
    "c": "Sie dienen der reinen Datenerhebung.",
    "d": "Sie erleichtern die Mobilisierung von Ressourcen auf unterschiedlichen Systemebenen.",
    "richtig": "d",
    "begruendung": "Sie vermitteln zwischen Individuen und größeren sozialen Systemen."
  },
  {
    "frage": "Im Kontext von Community-Koalitionen werden „opponierende Systeme“ definiert als...",
    "a": "Verbündete oder Repräsentanten der politischen Gegenseite.",
    "b": "neutrale Gruppen.",
    "c": "kritische Mitglieder der eigenen Initiative.",
    "d": "staatliche Fördergeber.",
    "richtig": "a",
    "begruendung": "Koalitionen müssen ihre strategischen Gegner identifizieren."
  },
  {
    "frage": "Welche der folgenden Zieldimensionen von Bürgerbeteiligung wird im Studienbrief unterschieden?",
    "a": "Die Erhöhung der Wahlbeteiligung bei Bundestagswahlen.",
    "b": "Die maximale Individualisierung der Problemlösung.",
    "c": "Die Durchsetzung von Partikularinteressen ohne Kompromisse.",
    "d": "Die gemeinsame Suche, Entwicklung und Realisierung von Lösungen für gemeinsame Probleme.",
    "richtig": "d",
    "begruendung": "Kooperative Problemlösung ist eine zentrale Zieldimension."
  },
  {
    "frage": "Warum führt der sozial-ökologische Mehrebenenansatz laut den Altklausur-Quellen zu einer Verringerung der „blaming the victim“-Tendenz?",
    "a": "Weil Opfer grundsätzlich nie schuld sind.",
    "b": "Weil das Individuum vollständig ignoriert wird.",
    "c": "Weil der Kontext und die Umweltbedingungen verstärkt in die Analyse einbezogen werden.",
    "d": "Weil soziale Probleme rein biologisch erklärt werden.",
    "richtig": "c",
    "begruendung": "Durch die Betrachtung von Kontexten wird Schuld nicht allein dem Individuum zugeschrieben."
  }
];