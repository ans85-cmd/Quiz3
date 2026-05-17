const questions = [
  {
    "frage": "Welche der folgenden Phasen kommt laut Nastasi et al. (2000) in der community-psychologischen Forschung als ERSTE?",
    "a": "Problemidentifikation",
    "b": "Datenerhebung und -analyse",
    "c": "Aufbau kollaborativer Beziehungen zu Schlüsselfiguren",
    "d": "Konzeption datenbasierter Maßnahmen",
    "richtig": "c",
    "begruendung": "Phase 1 ist immer der Aufbau kollaborativer Beziehungen – erst dann folgt die Problemidentifikation. Klausurfalle: Problemidentifikation klingt logisch als erster Schritt, ist aber Phase 2."
  },
  {
    "frage": "Wie viele Forschungsphasen umfasst das Modell von Nastasi et al. (2000)?",
    "a": "4",
    "b": "5",
    "c": "6",
    "d": "8",
    "richtig": "c",
    "begruendung": "Es gibt genau 6 Phasen: Aufbau kollaborativer Beziehungen, Problemidentifikation, Datenerhebung/-analyse, Datenzusammenfassung/Empfehlungen, Konzeption von Maßnahmen, Evaluation. Klausurfalle: Die Leiter der Partizipation hat 8 Stufen – diese Zahl nicht verwechseln."
  },
  {
    "frage": "In welcher Vorlesung der Reihe wird die Forschungsphase 5 (Konzeption datenbasierter Maßnahmen) behandelt?",
    "a": "Vorlesung 3",
    "b": "Vorlesung 2",
    "c": "Vorlesung 4",
    "d": "Vorlesung 1",
    "richtig": "a",
    "begruendung": "Vorlesung 3 = Phase 5 (Konzeption). Vorlesung 2 = Phasen 3+4, Vorlesung 4 = Phase 6 (Evaluation). Klausurfalle: Die Nummerierung von Vorlesung und Phase stimmt nicht überein."
  },
  {
    "frage": "Warum ist Partizipation laut der Vorlesung ein fundamentaler Wert in der Community Psychology?",
    "a": "Weil sie die Forschungskosten reduziert",
    "b": "Weil sie die Kontrolle der Forschenden stärkt",
    "c": "Weil sie die Passung zu den Bedarfen der Zielgruppe erhöht und die Akzeptanz einer Intervention steigert",
    "d": "Weil sie gesetzlich vorgeschrieben ist",
    "richtig": "c",
    "begruendung": "Zwei zentrale Funktionen: bessere Bedarfspassung UND höhere Akzeptanz. Wenn Menschen das Gefühl haben, gehört zu werden, unterstützen sie die Umsetzung stärker. Klausurfalle: Nur einen der beiden Aspekte zu nennen wäre unvollständig."
  },
  {
    "frage": "Was bringen laut Vorlesung die Psycholog*innen in eine Community ein, was Community-Mitglieder nicht haben?",
    "a": "Finanzielle Ressourcen",
    "b": "Community-spezifisches Wissen",
    "c": "Neue Informationen, Theorien und Methoden",
    "d": "Politischen Einfluss",
    "richtig": "c",
    "begruendung": "Die Rollenverteilung ist klar: Community-Mitglieder bringen community-spezifisches Wissen mit, Psychologinnen bringen externes Fachwissen, Theorien und Methoden. Klausurfalle: Option B ist das Wissen der Community-Mitglieder, nicht der Psychologinnen."
  },
  {
    "frage": "Welche drei Stufen bilden laut Arnstein (1969) die „Stufen der Bürgerkontrolle”?",
    "a": "Information, Rücksprache, Beschwichtigung",
    "b": "Therapie, Manipulation, Information",
    "c": "Partnerschaft, Machtübertragung, Bürgerermächtigung",
    "d": "Beschwichtigung, Rücksprache, Partnerschaft",
    "richtig": "c",
    "begruendung": "Stufen 6–8 = echte Bürgerkontrolle: Partnerschaft (6), Machtübertragung (7), Bürgerermächtigung (8). Klausurfalle: Beschwichtigung (5) und Rücksprache (4) sind noch Alibipolitik, nicht Bürgerkontrolle."
  },
  {
    "frage": "Welche Stufen der Partizipationsleiter (Arnstein, 1969) werden als „Alibipolitik” bezeichnet?",
    "a": "Stufen 1 und 2",
    "b": "Stufen 7 und 8",
    "c": "Stufen 4, 5 und 6",
    "d": "Stufen 3, 4 und 5",
    "richtig": "c",
    "begruendung": "Alibipolitik = Stufen 4 (Information), 5 (Rücksprache), 6 (Beschwichtigung). Klausurfalle: Stufe 6 (Beschwichtigung) wird oft fälschlich der Bürgerkontrolle zugeordnet – sie gehört noch zur Alibipolitik."
  },
  {
    "frage": "Auf welchen Ebenen findet Partizipation laut Vorlesung statt?",
    "a": "Nur auf politischer Ebene",
    "b": "Nur auf individueller Ebene",
    "c": "Auf individueller Ebene, in Communities/Gruppen und in größeren Organisationen",
    "d": "Nur auf der Ebene von Interessensgruppen",
    "richtig": "c",
    "begruendung": "Partizipation ist mehrstufig: Individuum, Community/Gruppe und Organisation. Die verschiedenen Ebenen erfordern auch unterschiedliche Rollen der CP. Klausurfalle: Nur eine Ebene zu nennen ist unvollständig."
  },
  {
    "frage": "Welche Rolle übernimmt eine Community-Psychologin, die evidenzbasierte Praxis fördert und empirisches Wissen einbringt?",
    "a": "Broker",
    "b": "Change Agent",
    "c": "Consultant",
    "d": "Researcher",
    "richtig": "d",
    "begruendung": "Der/die Researcher bringt Methoden- und Theoriewissen ein und fördert evidenzbasierte Praxis. Klausurfalle: Consultant berät beide Seiten und fördert Dialog – das ist etwas anderes als Evidenzbasierung."
  },
  {
    "frage": "Was ist der wesentliche Unterschied zwischen dem Expert*innen-Modell und dem kollaborativen Modell laut Nastasi et al. (2000)?",
    "a": "Im kollaborativen Modell gibt es keine Evaluation",
    "b": "Im Expertinnen-Modell hat der/die Forscherin volle Kontrolle, im kollaborativen Modell entwickeln Forscherin und Beteiligte gemeinsam",
    "c": "Das Expertinnen-Modell ist partizipativer als das kollaborative Modell",
    "d": "Das kollaborative Modell wird nur in Schulsettings eingesetzt",
    "richtig": "b",
    "begruendung": "Der Kernunterschied ist die Kontrollverteilung. Klausurfalle: Option C ist eine klassische Umkehrung – das kollaborative Modell ist das partizipativere."
  },
  {
    "frage": "Was müssen Forscher*innen laut Vorlesung bereit sein zu tun, wenn sie das kollaborative Modell anwenden?",
    "a": "Alle Entscheidungen selbst treffen",
    "b": "Die Community vollständig leiten",
    "c": "Kontrolle abzugeben und eventuell nur aus dem Hintergrund zu agieren",
    "d": "Die Interessensgruppen über Ergebnisse zu informieren, ohne sie einzubeziehen",
    "richtig": "c",
    "begruendung": "Das kollaborative Modell erfordert echte Bereitschaft zur Kontrollabgabe – nur aus dem Hintergrund agieren zu können muss akzeptiert werden. Klausurfalle: „Kontrollabgabe” bedeutet nicht vollständigen Rückzug, sondern Hintergrundrolle."
  },
  {
    "frage": "Wie kann das Ausmaß der Kollaboration laut Vorlesung über die Interventionsphasen hinweg beschrieben werden?",
    "a": "Es ist immer konstant hoch",
    "b": "Es ist immer konstant niedrig",
    "c": "Es liegt auf einem Kontinuum und kann sich über die Phasen hinweg verändern",
    "d": "Es wird am Anfang festgelegt und bleibt dann unverändert",
    "richtig": "c",
    "begruendung": "Kollaboration ist dynamisch – sie kann in manchen Phasen hoch, in anderen niedriger sein. Beispielsweise liegt die Datenauswertung oft stärker beim Forschungsteam. Klausurfalle: Die Kurve auf den Folien zeigt deutlich die Schwankungen über die Zeit."
  },
  {
    "frage": "Wann wird Partizipation laut Lind & Tyler (1988) zur Pseudo-Partizipation?",
    "a": "Wenn zu viele Personen beteiligt werden",
    "b": "Wenn der Eindruck entsteht, dass Beiträge keine Beachtung finden",
    "c": "Wenn die Partizipation an einem neutralen Ort stattfindet",
    "d": "Wenn ausschließlich Fachpersonen beteiligt werden",
    "richtig": "b",
    "begruendung": "Bereits der Eindruck fehlender Beachtung reicht aus – auch wenn die Beiträge tatsächlich berücksichtigt wurden. Klausurfalle: Es reicht der subjektive Eindruck, nicht die objektive Realität."
  },
  {
    "frage": "Welche der folgenden Bedingungen führt laut Cohen (1985) zu Pseudo-Partizipation?",
    "a": "Wenn Partizipation als Prozess gestaltet wird",
    "b": "Wenn möglichst viele Gruppen einbezogen werden",
    "c": "Wenn die Akzeptanz der Beteiligten durch Partizipation erkauft werden soll",
    "d": "Wenn ein Ethik-Code eingehalten wird",
    "richtig": "c",
    "begruendung": "Wenn Partizipation nur als Mittel dient, um Zustimmung zu erkaufen ohne echte Mitbestimmung zu ermöglichen, ist das Pseudo-Partizipation. Klausurfalle: Optionen A, B und D sind allesamt Empfehlungen zur Vermeidung von Pseudo-Partizipation."
  },
  {
    "frage": "Was zeigten Froncek & Rohmann (2019) als Folge von Pseudo-Partizipation?",
    "a": "Sie steigert langfristig die Akzeptanz von Maßnahmen",
    "b": "Sie wird als unfair wahrgenommen und kann Verhaltensabsichten mindern",
    "c": "Sie hat nur kurzfristige negative Effekte auf die Stimmung",
    "d": "Sie wirkt sich nur auf das Wohlbefinden, nicht auf das Verhalten aus",
    "richtig": "b",
    "begruendung": "Pseudo-Partizipation mindert konkret die Verhaltensabsichten – z.B. die Bereitschaft, Evaluationsergebnisse umzusetzen. Klausurfalle: Option D trennt Wohlbefinden und Verhalten – beides wird negativ beeinflusst."
  },
  {
    "frage": "Welche Maßnahme hilft laut Churchman, Wiesenfeld & Sadan (2017) dabei, Pseudo-Partizipation zu vermeiden?",
    "a": "Fachjargon einsetzen, um Kompetenz zu signalisieren",
    "b": "Partizipation als einmaliges Ereignis gestalten",
    "c": "Partizipation als kontinuierlichen Prozess initiieren, nicht als isoliertes Ereignis",
    "d": "Nur professionelle Partner*innen einbeziehen",
    "richtig": "c",
    "begruendung": "Partizipation als Prozess mit mehreren Rückkopplungsschleifen schützt vor Pseudo-Partizipation. Klausurfalle: Option B ist die genaue Umkehrung der richtigen Empfehlung."
  },
  {
    "frage": "Warum sind laut Vorlesung die Orte der Partizipation bedeutsam?",
    "a": "Weil in der Universität die beste Infrastruktur vorhanden ist",
    "b": "Weil der Ort signalisiert, ob der Austausch auf gleicher Ebene stattfindet, und für die Community relevante Orte gewählt werden sollten",
    "c": "Weil bestimmte Orte gesetzlich vorgeschrieben sind",
    "d": "Weil neutrale Orte Konflikte vermeiden",
    "richtig": "b",
    "begruendung": "Der Ort ist ein Symbol für Gleichwertigkeit. Die Universität einzuladen kann als Machtgefälle wahrgenommen werden. Klausurfalle: Option D klingt plausibel, steht so aber nicht in den Materialien."
  },
  {
    "frage": "Was umfasst Phase 1 (Aufbau kollaborativer Beziehungen) laut Nastasi, Varjas, Schensul et al. (2000)?",
    "a": "Ableitung von Handlungsempfehlungen und Interventionsplanung",
    "b": "Auswertung der erhobenen Daten und Rückkopplung",
    "c": "Identifikation relevanter Interessensgruppen, Kontaktaufnahme und vertrauensbildende Maßnahmen",
    "d": "Durchführung der Evaluation und Wirksamkeitsprüfung",
    "richtig": "c",
    "begruendung": "Phase 1 umfasst: Interessensgruppen identifizieren (Wer profitiert? Wer hilft? Wer erhält das Problem aufrecht?), Kontakt aufnehmen und Vertrauen aufbauen. Klausurfalle: Handlungsempfehlungen gehören zu Phase 4."
  },
  {
    "frage": "Welche drei Leitfragen helfen laut Vorlesung bei der Identifikation relevanter Interessensgruppen?",
    "a": "Wer finanziert? Wer forscht? Wer evaluiert?",
    "b": "Wer kann profitieren? Wer kann helfen? Wer trägt zur Aufrechterhaltung des Problems bei?",
    "c": "Wer ist zuständig? Wer ist betroffen? Wer ist dagegen?",
    "d": "Wer leitet? Wer dokumentiert? Wer kommuniziert?",
    "richtig": "b",
    "begruendung": "Diese drei Fragen strukturieren die Stakeholder-Analyse in Phase 1 direkt aus den Folien. Klausurfalle: Option C klingt ähnlich, ist aber nicht die in der Vorlesung genannte Formulierung."
  },
  {
    "frage": "Welche Rolle übernimmt die Community-Psycholog*in in Phase 1 laut Nastasi et al. (2000)?",
    "a": "Researcher – bringt empirisches Wissen ein",
    "b": "Broker – vermittelt zwischen Community und Politik",
    "c": "Facilitator – unterstützt das Team beim Erreichen der Ziele mit Sachkenntnis, ohne sich einer Partei zuzuordnen",
    "d": "Change Agent – unterstützt Community-Mitglieder bei aktiver Partizipation",
    "richtig": "c",
    "begruendung": "In Phase 1 ist die CP explizit als Facilitator definiert – neutral und unterstützend, ohne Parteinahme. Klausurfalle: Die anderen Rollen (Broker, Change Agent etc.) sind allgemeine CP-Rollen, nicht die spezifische Rolle in Phase 1."
  },
  {
    "frage": "Was umfasst Phase 2 (Problemidentifikation) laut Center for Community Health and Development (2017b)?",
    "a": "Datenerhebung und statistische Auswertung",
    "b": "Identifikation des Forschungsschwerpunkts, Zusammentragen relevanter Informationen, Ursachenklärung und gemeinsame Festlegung von Interventionszielen",
    "c": "Aufbau von Beziehungen zu Schlüsselfiguren und Vertrauensbildung",
    "d": "Evaluation der Maßnahmen und Ableitung von Schlussfolgerungen",
    "richtig": "b",
    "begruendung": "Phase 2 hat vier Elemente: Forschungsschwerpunkt, Informationssammlung, Ursachenklärung und Zieldefinition. Klausurfalle: Vertrauensbildung gehört zu Phase 1, nicht Phase 2."
  },
  {
    "frage": "Welche Rolle übernimmt die CP laut Vorlesung in Phase 2 (Problemidentifikation)?",
    "a": "Facilitator ohne Parteinahme",
    "b": "Broker zwischen Community und Politik",
    "c": "Aktive Rolle bei der Zusammenstellung von Forschungsliteratur und Unterstützung problembezogener Diskussionen zum Konsens",
    "d": "Schlüsselfunktion bei der Methodenberatung und Datenanalyse",
    "richtig": "c",
    "begruendung": "In Phase 2 ist die CP aktiv bei der Literaturrecherche und moderiert Diskussionen zum Konsens über das Problem. Klausurfalle: Option D beschreibt die Rolle in Phase 3, nicht Phase 2."
  },
  {
    "frage": "Was ist ein „Community needs and resources assessment” laut Watson-Thompson et al. (2015)?",
    "a": "Eine standardisierte Befragung zur Messung von Zufriedenheit",
    "b": "Eine umfassende Analyse des historischen und aktuellen Kontexts und Vermögens einer Community, auf bestimmte Themen zu reagieren",
    "c": "Ein Evaluationsinstrument zur Messung von Interventionswirkungen",
    "d": "Ein politisches Planungsdokument für kommunale Entscheidungsträger",
    "richtig": "b",
    "begruendung": "Das Needs Assessment analysiert Kontext UND Ressourcen – nicht nur Probleme. Klausurfalle: Es ist kein reines Evaluationsinstrument und kein politisches Dokument."
  },
  {
    "frage": "Welches der folgenden Merkmale gehört NICHT zu einem community-psychologischen Needs and Resources Assessment laut Watson-Thompson et al. (2015)?",
    "a": "Partizipativ",
    "b": "Präventionsorientiert",
    "c": "Reaktionsorientiert",
    "d": "Aktionsorientiert",
    "richtig": "c",
    "begruendung": "Das Assessment ist partizipativ, präventionsorientiert, ökologisch und aktionsorientiert. Reaktionsorientiert ist kein Merkmal – im Gegenteil, der Präventionsfokus schaut über den Ist-Zustand hinaus. Klausurfalle: Aktionsorientiert und reaktionsorientiert klingen ähnlich – genau lesen."
  },
  {
    "frage": "Warum ist laut Vorlesung eine Bedarfsanalyse wichtig? (Beispiel Newsletter vs. Workshop)",
    "a": "Weil Forschende sonst zu viel Zeit investieren",
    "b": "Weil gesetzliche Vorgaben dies verlangen",
    "c": "Weil man sonst Maßnahmen konzipiert, die an den tatsächlichen Bedarfen vorbeigehen und nicht akzeptiert werden",
    "d": "Weil qualitative Methoden sonst nicht eingesetzt werden können",
    "richtig": "c",
    "begruendung": "Das Beispiel aus der Vorlesung zeigt: Der geplante Newsletter wurde in der Befragung deutlich weniger präferiert als interaktive Workshops. Ohne Bedarfsanalyse wäre die falsche Maßnahme umgesetzt worden. Klausurfalle: Es geht nicht um Methoden, sondern um Passgenauigkeit."
  },
  {
    "frage": "Was bedeutet „präventionsorientiert” im Kontext des Needs Assessments laut Vorlesung?",
    "a": "Dass nur zukünftige Probleme erfasst werden",
    "b": "Dass nicht nur der Ist-Zustand betrachtet wird, sondern auch Ursachen und strukturelle Bedingungen, um künftige Probleme zu verhindern",
    "c": "Dass ausschließlich Präventionsprogramme entwickelt werden",
    "d": "Dass die Evaluation vor der Intervention stattfindet",
    "richtig": "b",
    "begruendung": "Präventionsorientiert bedeutet, über den Ist-Zustand hinauszuschauen und zu fragen, was strukturell geändert werden muss, damit ein Problem künftig nicht wieder entsteht. Klausurfalle: Option A ist eine Vereinfachung – es geht um Ursachen UND Zukunft."
  },
  {
    "frage": "Was bedeutet „ökologisch” als Merkmal des Needs Assessments laut Vorlesung?",
    "a": "Dass Umweltschutzthemen im Fokus stehen",
    "b": "Dass Personen in ihren Kontexten gesehen werden und Umweltfaktoren als Einflussgröße berücksichtigt werden",
    "c": "Dass nur natürliche Ressourcen einer Community erfasst werden",
    "d": "Dass biologische Faktoren im Vordergrund stehen",
    "richtig": "b",
    "begruendung": "Ökologisch meint kontextuell situiert – nicht Ökologie im Sinne von Natur/Umwelt. Klausurfalle: Der Begriff „ökologisch” wird hier im sozialwissenschaftlichen Sinne verwendet, nicht im naturwissenschaftlichen."
  },
  {
    "frage": "Welche praktischen Punkte nennt Nastasi et al. (2000) für den Aufbau kollaborativer Beziehungen?",
    "a": "Schnelle Datenerhebung, statistische Auswertung, Ergebnispräsentation",
    "b": "Treffen zu angemessenen Zeiten, Orientierung an lokalen Normen, durchgehende Beratung der Interessensgruppen",
    "c": "Entwicklung eines Fragebogens, Pilottestung, Haupterhebung",
    "d": "Literaturrecherche, Hypothesenbildung, Experimentaldesign",
    "richtig": "b",
    "begruendung": "Diese drei praktischen Punkte stehen direkt auf Folie 14. Klausurfalle: Option A klingt nach Forschungsablauf, gehört aber zu späteren Phasen."
  },
  {
    "frage": "Warum ist es wichtig, nicht-professionelle Partner*innen in Phase 1 zu befähigen?",
    "a": "Damit sie die Datenanalyse selbst durchführen können",
    "b": "Damit sie die notwendigen Fähigkeiten und das Wissen haben, die für den Beteiligungsprozess erforderlich sind",
    "c": "Damit sie die Rolle der Forscher*innen übernehmen können",
    "d": "Damit keine Schulung mehr nötig ist",
    "richtig": "b",
    "begruendung": "Echte Partizipation setzt voraus, dass Community-Mitglieder auch in der Lage sind, sich sinnvoll einzubringen. Sonst wäre Partizipation eine Überforderung. Klausurfalle: Es geht nicht um Datenanalyse, sondern um Beteiligungskompetenz."
  },
  {
    "frage": "Was umfasst das Planning Sheet „Connecting Targets and Agents of Change” (Center for Community Health and Development, 2017a)?",
    "a": "Zeitplan, Budget und Personalplanung",
    "b": "Verhaltensweisen/Bedingungen die das Problem verursachen, Personen die betroffen sind (Targets of Change) und Personen die zur Verbesserung beitragen können (Agents of Change)",
    "c": "Forschungshypothesen, Messinstrumente und Auswertungsverfahren",
    "d": "Evaluationskriterien, Erfolgsindikatoren und Kontrollgruppen",
    "richtig": "b",
    "begruendung": "Das Planning Sheet aus Folie 17 strukturiert genau diese drei Spalten. Klausurfalle: Es ist kein Evaluationsinstrument, sondern ein Planungsinstrument für die Problemidentifikation."
  },
  {
    "frage": "Welche Stufen gehören laut Arnstein (1969) zur Kategorie „Keine Beteiligung”?",
    "a": "Manipulation (Stufe 1) und Therapie (Stufe 2)",
    "b": "Information (Stufe 4) und Rücksprache (Stufe 5)",
    "c": "Partnerschaft (Stufe 6) und Machtübertragung (Stufe 7)",
    "d": "Therapie (Stufe 2) und Information (Stufe 4)",
    "richtig": "a",
    "begruendung": "Die untersten zwei Stufen (Manipulation und Therapie) = keine Beteiligung. Klausurfalle: Therapie klingt nach etwas Positivem – ist hier aber die unterste Partizipationsstufe."
  },
  {
    "frage": "Welche Punkte nennt Churchman, Wiesenfeld & Sadan (2017) als Teil eines Ethik-Codes bei partizipativer Forschung?",
    "a": "Effizienz und Kostenminimierung",
    "b": "Schnelligkeit und Standardisierung",
    "c": "Transparenz und Vertraulichkeit",
    "d": "Objektivität und Replizierbarkeit",
    "richtig": "c",
    "begruendung": "Der Ethik-Code umfasst laut Folie 12 explizit Transparenz (über den Prozess) und Vertraulichkeit (über Beiträge). Klausurfalle: Objektivität und Replizierbarkeit sind Merkmale quantitativer Methoden, kein Ethik-Code."
  },
  {
    "frage": "Warum sollten laut Nastasi et al. (2000) in Phase 1 direkte Kontakte zwischen Interessensgruppen hergestellt werden?",
    "a": "Um die Datenerhebung zu beschleunigen",
    "b": "Um verschiedene Schlüsselfiguren, die möglicherweise unterschiedliche oder konfliktreiche Interessen haben, an einen Tisch zu bringen",
    "c": "Um die Forschenden zu entlasten",
    "d": "Um eine Kontrollgruppe zu bilden",
    "richtig": "b",
    "begruendung": "Gerade bei Konflikten innerhalb einer Community ist es wichtig, alle Parteien zusammenzubringen. Das Beispiel aus dem Transkript: Konflikte in der Nachbarschaft. Klausurfalle: Es geht nicht um Effizienz, sondern um Repräsentation aller Perspektiven."
  },
  {
    "frage": "Was wird bei der Ursachenklärung in Phase 2 laut Center for Community Health and Development (2017b) unterschieden?",
    "a": "Quantitative und qualitative Faktoren",
    "b": "Individuelle und kollektive Ressourcen",
    "c": "Persönliche Faktoren und Umweltfaktoren",
    "d": "Kurzfristige und langfristige Ursachen",
    "richtig": "c",
    "begruendung": "Die Ursachenklärung fragt explizit nach persönlichen Faktoren (z.B. Verhalten) UND Umweltfaktoren (z.B. strukturelle Bedingungen). Klausurfalle: Diese Unterscheidung ist typisch für den sozial-ökologischen Ansatz der CP – nicht nur das Individuum ist verantwortlich."
  },
  {
    "frage": "Was beschreibt laut Vorlesung das Ziel von Partizipation im Hinblick auf die Zusammenarbeit?",
    "a": "Das Durchsetzen der Interessen der Forschenden",
    "b": "Das Durchsetzen der Interessen der stärksten Interessensgruppe",
    "c": "Kooperation und nicht das Durchsetzen individueller Interessen",
    "d": "Die Minimierung des Aufwands für alle Beteiligten",
    "richtig": "c",
    "begruendung": "Das übergeordnete Ziel ist immer Kooperation – nicht Interessensdurchsetzung einzelner Gruppen. Klausurfalle: In der Praxis versuchen Gruppen oft ihre Interessen durchzusetzen – das ist aber explizit nicht das Ziel partizipativer Forschung."
  }
];