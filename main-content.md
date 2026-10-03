# KI-Governance-Rahmenwerk — Volltext

Dieses Dokument fasst das Rahmenwerk in einem Stück zusammen, für Leser und Systeme, die nicht zwischen Dateien springen wollen. Die Einzeldokumente gehen jeweils tiefer.

## Der Ausgangspunkt

KI-Compliance ist kein Dokument, sondern ein Betriebszustand. Ein Ordner mit Richtlinien erfüllt keine Pflicht; erfüllt wird sie durch Register, die aktuell sind, Entscheidungen, die jemand verantwortet, und Nachweise, die ohne Suchaufwand auffindbar sind.

In Prüfungen fällt selten auf, dass eine Richtlinie fehlt. Es fällt auf, dass niemand sagen kann, welche KI-Systeme im Haus sind; dass eine Einstufung existiert, die niemand verantwortet; dass ein Nachweis sich auf eine Version bezieht, die es nicht mehr gibt; oder dass eine Pflicht einer Abteilung statt einer Person zugewiesen ist.

## Die fünf Bereiche

**Governance und Zuständigkeit.** Je System ein Eigentümer und ein Prüfer, beide namentlich, und beide nicht dieselbe Person. Typische Lücke: Zuständigkeit auf Abteilungsebene — „verantwortlich: IT" ist in einer Prüfung dasselbe wie ein leeres Feld.

**KI-Inventar.** Alle Systeme je Einsatzzweck, mit Anbieter, Modell, Version und Datenarten. Typische Lücke: Vollständigkeit wird behauptet statt belegt. Was zählt, ist der Nachweis der Suche — aus welchen Quellen, wann, mit welchem Ergebnis. Fünf Quellen tragen zusammen: Beschaffung, Auslagenerstattung, Anmeldedienst, aggregierte Netzprotokolle und die Release-Notes bestehender Software. Die letzte ist der häufigste Fall: Ein CRM bekommt eine Zusammenfassungsfunktion, und ab diesem Release verarbeitet ein KI-System Kundendaten, ohne dass ein Projekt existiert.

**Risikoeinstufung.** Je Einsatzzweck eine Klasse mit Begründung, Annahmen und entscheidender Person. Typische Lücke: Das Werkzeug ist eingestuft statt der Einsatzzweck.

**Dokumentation und Nachweise.** Zu jeder Pflicht ein Nachweis mit Versionsbezug, Freigabestand und Fundort. Typische Lücke: Belege ohne Versionsbezug, verteilt über Postfächer.

**Überwachung und Meldung.** Beschriebene Auslöser und ein Meldeweg, beides zugewiesen. Typische Lücke: der Jahresturnus als einzige Maßnahme.

Quer dazu liegt **Art. 4 KI-Kompetenz**, anwendbar seit 2.2.2025 und unabhängig von jeder Risikoklasse. Seit dem 27.7.2026 gilt die vom Digital Omnibus neu gefasste, schwächere Version: **Maßnahmen zur Förderung** der KI-Kompetenz ergreifen, statt ein Niveau je Person sicherzustellen. Das ist kein sechster Bereich, sondern bleibt praktisch eine Voraussetzung in allen fünf: Eine Aufsicht, die nicht versteht, was sie prüft, ist keine Aufsicht.

## Der Lebenszyklus und seine fehlende Rückkopplung

Fünf Phasen — Aufnahme, Bewertung, Umsetzung, Freigabe, Überwachung — und ein Rückweg von der Überwachung in die Bewertung. Der Rückweg ist der schwächste Teil jedes Governance-Modells, weil ihn niemand anstößt.

Sechs Auslöser gehören in jeden Eintrag: geänderte Zweckbestimmung, Modellwechsel beim Anbieter, neue Datenquelle oder Datenart, erweiterter Nutzerkreis, Wegfall der menschlichen Aufsicht, Rechtsänderung. Drei davon bemerkt eine Organisation ohne eigene Vorkehrung **nicht**: den Modellwechsel, den schleichenden Wegfall der Aufsicht und die Rechtsänderung.

Gegen den Modellwechsel hilft ein fester Testsatz — zwanzig Eingaben mit erwarteten Ausgaben, monatlich durchlaufen; die billigste Frühwarnung und die einzige, die ohne Mitwirkung des Anbieters funktioniert. Gegen den Wegfall der Aufsicht hilft eine Kennzahl: Wie viele Ausgaben wurden im letzten Monat tatsächlich geändert? Fällt sie gegen Null, ist die Aufsicht formal geworden, ohne dass jemand das entschieden hätte.

## Rollen

Die Pflichten hängen an der Rolle. Anbieter entwickeln oder bringen unter eigenem Namen in Verkehr; Betreiber setzen unter eigener Verantwortung ein. Nach Art. 25 wird ein Betreiber zum Anbieter, wenn er seinen Namen auf ein Hochrisikosystem setzt, es wesentlich ändert, seine Zweckbestimmung ändert oder ein nicht als Hochrisiko bestimmtes System für einen Hochrisikozweck einsetzt.

Die ersten drei Fälle haben einen Anlass, an dem jemand innehalten könnte. Der vierte hat keinen: Niemand schließt einen Vertrag, niemand ändert Software. Es genügt, ein allgemeines Werkzeug in einem Anhang-III-Bereich einzusetzen. Deshalb gehört die Frage ins Aufnahmeformular, nicht ins Jahresaudit — und zwar konkret: Berührt die Ausgabe Beschäftigung, Bildung, Kreditwürdigkeit, Strafverfolgung, Migration, Justiz, wesentliche Dienstleistungen oder kritische Infrastruktur?

## Fristen

Nach dem Digital Omnibus (Verordnung (EU) 2026/1744, in Kraft seit 27.7.2026): Art. 5 und Art. 4 seit 2.2.2025; GPAI, Governance und Sanktionen seit 2.8.2025; **Art. 50 Transparenz seit 2.8.2026, nicht verschoben**; **Anhang III Hochrisiko erst ab 2.12.2027, um 16 Monate verschoben**; Anhang I ab 2.8.2028; Bestandssysteme bei Behörden ab 2.8.2030.

Die Verschiebung verschafft Zeit für den Pflichtenkatalog bei Hochrisikosystemen — nicht für Inventar und Einstufung, die Voraussetzung dafür sind, überhaupt zu wissen, ob man betroffen ist. Die Arbeit, die jetzt sinnvoll ist, ist deshalb eine andere: wissen, was man hat; Art. 50 umsetzen; Art. 4 erfüllen.

## Die drei Trennungen

**Rechtliche Klasse ≠ interne Risikoeinschätzung** — zwei Felder, weil ein System rechtlich minimal und betrieblich riskant sein kann.

**Eigentümer ≠ Prüfer** — sonst prüft jemand seine eigene Arbeit und die Freigabe ist formal.

**Zugewiesen ≠ ausübbar** — eine Aufsicht, die zeitlich nicht leistbar ist, erfüllt Art. 14 nicht.

## Weg durch das Repository

1. [Überblick](./framework/overview.md) — Zweck und Grenzen
2. [Die fünf Bereiche](./framework/control-domains.md) — Zustand, Nachweis, typische Lücke
3. [Lebenszyklus](./framework/lifecycle.md) — fünf Phasen und die Rückkopplung
4. [Fristen](./knowledge-base/eu-ai-act/overview.md) und [Rollen](./knowledge-base/eu-ai-act/scope-and-actors.md)
5. [Prüfliste](./checklist.md) anwenden
6. Vorlagen füllen: [Inventar](./templates/ai-system-inventory-template.md), [Einstufung](./templates/risk-classification-template.md), [Anhang IV](./templates/technical-documentation-template.md), [Marktbeobachtung](./templates/post-market-monitoring-template.md)

---

Keine Rechtsberatung. Stand: Oktober 2026.
