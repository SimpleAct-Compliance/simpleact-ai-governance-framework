# Lebenszyklus

Fünf Phasen und eine Rückkopplung. Die Rückkopplung ist der Teil, der in der Praxis fehlt.

```
  1 Aufnahme -> 2 Bewertung -> 3 Umsetzung -> 4 Freigabe -> 5 Überwachung
                      ^                                           |
                      +------------- Auslöser -------------------- +
```

---

## 1 Aufnahme

**Was passiert:** Ein Einsatzzweck wird erfasst — nicht ein Werkzeug. Eigentümer, Zweck, Betroffenenkreis, Anbieter, Modell, Datenarten.

**Wer:** der Fachbereich, der es einsetzen will.

**Wann sie misslingt:** wenn die Aufnahme erst stattfindet, nachdem das System läuft. Dann ist die Bewertung eine Nachbegründung, und wenn sie negativ ausfällt, entsteht Druck, sie zu drehen.

**Praktischer Hebel:** einen Aufnahmeweg, der weniger Aufwand ist als der Umweg daran vorbei. Ein Formular mit acht Feldern wird ausgefüllt, eines mit vierzig wird umgangen.

## 2 Bewertung

**Was passiert:** Einstufung je Einsatzzweck, Rollenbestimmung (Anbieter oder Betreiber), Datenschutzprüfung, Festlegung der erforderlichen Nachweise.

**Wer:** die benannte Person für Einstufungen, mit Prüfer.

**Wann sie misslingt:** wenn das Ergebnis eine Klasse ohne Begründung ist. Eine Klasse ohne Begründung ist in zwei Jahren wertlos, weil niemand mehr rekonstruieren kann, auf welcher Annahme sie beruhte.

## 3 Umsetzung

**Was passiert:** Die Pflichten der Klasse werden in Maßnahmen übersetzt und zugewiesen — Kennzeichnung, menschliche Aufsicht, Protokollierung, technische Dokumentation, Schulung.

**Wer:** je Maßnahme eine Person mit Termin.

**Wann sie misslingt:** wenn Maßnahmen zugewiesen werden, ohne zu prüfen, ob die Person dafür Zeit hat. Eine Zuständigkeitstabelle, in der eine Person achtzehnmal steht, ist eine Dokumentation der Überlast, nicht der Governance.

## 4 Freigabe

**Was passiert:** Vor Inbetriebnahme wird geprüft, ob die Maßnahmen tatsächlich wirksam sind — nicht, ob sie geplant sind. Kennzeichnung im Produkt sichtbar, Aufsicht tatsächlich ausübbar, Nachweise abgelegt.

**Wer:** eine Person, die nicht die Umsetzende ist.

**Wann sie misslingt:** wenn die Freigabe eine Unterschrift unter eine Liste ist. Die nützliche Frage ist nicht „ist der Haken gesetzt", sondern „zeig mir die Kennzeichnung im laufenden System".

## 5 Überwachung

**Was passiert:** Beobachtung im Betrieb, Vorfallbearbeitung, Prüfung der Auslöser.

**Wer:** der Eigentümer, mit einem Verfahren, das auch funktioniert, wenn er im Urlaub ist.

**Wann sie misslingt:** wenn Überwachung „jährliche Überprüfung" bedeutet. Siehe unten.

---

## Die Rückkopplung

Der Weg von Phase 5 zurück zu Phase 2 ist der schwächste Teil jedes Governance-Modells, weil ihn niemand anstößt. Es gibt kein Ereignis, das ihn auslöst — jedenfalls keines, das die Organisation von selbst bemerkt.

Sechs Auslöser gehören in jeden Eintrag:

| Auslöser | Bemerkt man ihn ohne Vorkehrung? |
|---|---|
| Zweckbestimmung geändert | meist ja, über den Fachbereich |
| Modellwechsel beim Anbieter | **nein** |
| neue Datenquelle oder Datenart | oft nicht |
| erweiterter Nutzerkreis | manchmal |
| Wegfall der menschlichen Aufsicht | **nein**, das geschieht schleichend |
| Rechtsänderung | nur wenn jemand dafür zuständig ist |

Die drei Nein-Zeilen brauchen eine eigene Vorkehrung. Für den Modellwechsel ist das billigste Mittel ein fester Testsatz — zwanzig Eingaben mit erwarteten Ausgaben, monatlich durchlaufen. Für den Wegfall der Aufsicht hilft eine Kennzahl: Wie viele Ausgaben wurden im letzten Monat tatsächlich geändert? Fällt sie gegen Null, ist die Aufsicht formal geworden, ohne dass jemand eine Entscheidung getroffen hätte.

## Was alte Stände angeht

Eine neue Bewertung ersetzt die alte nicht. In einer Prüfung lautet die Frage nicht, wie ein System heute bewertet ist, sondern wie es bewertet war, als ein bestimmter Vorfall passierte.

## Weiter

[Die fünf Bereiche](./control-domains.md) · [Prüfliste](../checklist.md) · [Vorlage Marktbeobachtung](../templates/post-market-monitoring-template.md)
