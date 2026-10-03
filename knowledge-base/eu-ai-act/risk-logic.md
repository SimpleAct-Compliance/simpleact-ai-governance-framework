# Die Klassen, soweit Governance sie braucht

Dieses Repository stuft nicht ein — das tut die [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu). Hier steht, was ein Governance-Modell über die Klassen wissen muss, damit die richtigen Pflichten an die richtigen Leute gehen.

## Die Reihenfolge

Die Prüfung ist geordnet, und die Ordnung hat einen Grund:

1. **KI-System** nach Art. 3 Nr. 1?
2. **Ausnahme** (Militär, F&E, rein privat)?
3. **Verbotene Praktik** nach Art. 5? — Ein Treffer beendet die Prüfung.
4. **Hochrisiko** nach Anhang I oder III?
5. **Transparenzpflicht** nach Art. 50? — gilt zusätzlich.

Wer mit Schritt 4 beginnt, prüft das Falsche zuerst. Ein Verbot lässt sich nicht durch Dokumentation heilen: Wenn Schritt 3 anspricht, ist der Pflichtenkatalog aus Schritt 4 gegenstandslos, weil das System gar nicht betrieben werden darf.

## Was jede Klasse für die Organisation bedeutet

| Klasse | Wer wird hier zuständig | Hauptaufwand |
|---|---|---|
| **Verboten** (Art. 5) | Geschäftsführung | Betrieb einstellen, Entscheidung dokumentieren |
| **Hochrisiko** | Anbieter- oder Betreiberpflichten, je nach Rolle | technische Dokumentation, Risikomanagement, Aufsicht, Protokollierung |
| **Transparenz** (Art. 50) | Produkt und Entwicklung | Kennzeichnung im Produkt, nicht in der Richtlinie |
| **Minimal** | Fachbereich und Inventarpflege | Eintrag halten, KI-Kompetenz, Wiedervorlage |

Die zweite Spalte ist die, die in Organisationen fehlt. Eine Klasse ohne Zuständigen erzeugt keine Arbeit und damit keine Erfüllung.

## Drei Stellen, an denen Governance typisch scheitert

**Art. 5 wird übersprungen.** Weil die bekannten Fälle exotisch klingen — Sozialbewertung, Manipulation. Die weniger exotischen: Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen, und das ungezielte Auslesen von Gesichtsbildern aus dem Netz. Beides kommt in gekaufter Software vor.

**Die Ausnahme nach Art. 6 Abs. 3 wird als Freibrief gelesen.** Sie verlangt eine **dokumentierte Bewertung** und greift nicht, sobald profiliert wird. Im Governance-Modell gehört sie an eine Stelle mit Freigabe, nicht in eine Selbsteinschätzung des Fachbereichs.

**Art. 50 wird als niedrigere Stufe behandelt.** Es ist keine Stufe, sondern eine zusätzliche Ebene. Ein Hochrisikosystem mit Chatfunktion hat beides.

## Die zweite Achse: Modelle mit allgemeinem Verwendungszweck

GPAI-Pflichten liegen quer zur Risikoklasse und treffen in erster Linie den **Modellanbieter**, nicht den Betreiber. Wer ein Sprachmodell über eine Schnittstelle nutzt, wird davon nicht zum GPAI-Anbieter — hat aber ein Interesse daran, dass der Modellanbieter seine Pflichten erfüllt, weil die eigene Dokumentation darauf aufbaut.

Im Inventar gehört deshalb festgehalten: **welches Modell, welche Version, welcher Anbieter**. Ohne diese drei Angaben ist die eigene Dokumentation nicht fortschreibbar.

## Die Pflicht ohne Klasse

**Art. 4 KI-Kompetenz**, anwendbar seit 2.2.2025, seit 27.7.2026 in der neuen Fassung: Verlangt sind **Maßnahmen zur Förderung** der KI-Kompetenz, nicht mehr ein sichergestelltes Niveau je Person. Die Pflicht hängt an keiner Klasse.

Dass sie abgeschwächt wurde, macht sie praktisch nicht entbehrlich: Wer nicht weiß, wie ein Modell irrt, kann seine Ausgabe nicht beurteilen — und damit steht und fällt die menschliche Aufsicht nach Art. 14.

## Weiter

[Rollen](./scope-and-actors.md) · [Inventar und Governance](./inventory-and-governance.md) · [Vorlage Einstufung](../../templates/risk-classification-template.md)
