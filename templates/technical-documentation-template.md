# Vorlage: Technische Dokumentation (Anhang IV)

Pflicht für **Anbieter** von Hochrisikosystemen nach Art. 11 in Verbindung mit Anhang IV. Betreiber brauchen sie nicht — es sei denn, sie sind nach Art. 25 zum Anbieter geworden, was häufiger vorkommt als vermutet.

Die Gliederung folgt Anhang IV. Die ausführliche Fassung mit Hinweisen zu jedem Abschnitt steht in der [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template).

**System:** ___  **Version:** ___  **Stand:** ___  **Verantwortlich (Person):** ___

---

## 1 Allgemeine Beschreibung

- Zweckbestimmung, Anbieter, Version
- vorgesehene Betreiber und Nutzergruppen
- Form der Bereitstellung (Software, eingebettet, als Dienst)
- Hardware, auf der es läuft
- Benutzerschnittstellen
- Betriebsanleitung für Betreiber

## 2 Entwicklung und Verfahren

- Entwicklungsschritte, Fremdbestandteile, vortrainierte Modelle
- Entwurfsentscheidungen mit Begründung — auch die verworfenen Alternativen
- Systemarchitektur, Rechenressourcen
- Datenanforderungen: Herkunft, Umfang, Aufbereitung, Kennzeichnung, Bereinigung
- menschliche Aufsicht: wie sie technisch ermöglicht wird
- Validierung und Test: Verfahren, Metriken, Ergebnisse, Testprotokolle

Abschnitt 2 ist der aufwendigste und der Grund, weshalb eine nachträgliche Dokumentation teuer ist. Entwurfsentscheidungen lassen sich nach zwei Jahren nicht rekonstruieren; sie müssen während der Entwicklung festgehalten werden.

## 3 Überwachung, Funktionsweise, Kontrolle

- Genauigkeit, Robustheit, Cybersicherheit — mit Messwerten
- vorhersehbare unbeabsichtigte Ergebnisse und Risikoquellen
- Grenzen des Systems: was es nicht leistet
- Spezifikationen der Eingabedaten
- Angaben, die Betreiber für die Auslegung der Ausgaben brauchen

Der Abschnitt „Grenzen" wird oft zu knapp gehalten. Er ist der Teil, auf den Betreiber sich verlassen — und der Teil, der in einem Vorfall gelesen wird.

## 4 Risikomanagementsystem

Beschreibung nach Art. 9: identifizierte Risiken, Bewertung, Maßnahmen, Restrisiko, und warum das Restrisiko vertretbar ist.

## 5 Änderungen am Lebenszyklus

| Datum | Änderung | Wesentlich nach Art. 3 Nr. 23? | Folge | Durch |
|---|---|---|---|---|
| | | | | |

Diese Tabelle ist der praktisch wichtigste Teil der ganzen Dokumentation. Sie beantwortet die Frage, die in jeder Prüfung kommt: Welcher Stand war zu welchem Zeitpunkt in Betrieb?

## 6 Normen

Angewandte harmonisierte Normen, oder — wo keine angewandt wurden — die Beschreibung der stattdessen getroffenen Lösungen.

## 7 EU-Konformitätserklärung

Verweis auf die Erklärung, mit Datum und Unterzeichner.

## 8 Beobachtung nach dem Inverkehrbringen

Verweis auf den Plan nach Art. 72 und die vorliegenden Berichte. Vorlage: [post-market-monitoring-template.md](./post-market-monitoring-template.md)

---

## Drei Regeln, die über die Brauchbarkeit entscheiden

**Jeder Abschnitt verweist auf eine Version.** „Aktuell" ist keine Angabe. Ohne Versionsbezug belegt die Dokumentation einen Zeitpunkt, nicht einen Zustand.

**Lücken werden benannt, nicht gefüllt.** Ein Abschnitt mit „liegt nicht vor, verantwortlich ___, Termin ___" ist in einer Prüfung besser als ein Abschnitt mit Füllsätzen. Füllsätze fallen auf und stellen den Rest in Frage.

**Fremdbestandteile werden benannt.** Wer ein Modell eines Dritten verwendet, dokumentiert, welches, in welcher Version, und welche Angaben der Anbieter dazu liefert — und welche nicht.

## Offene Punkte

| Abschnitt | Was fehlt | Verantwortlich | Termin |
|---|---|---|---|
| | | | |
