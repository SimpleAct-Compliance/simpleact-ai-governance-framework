# Die fünf Bereiche

Jeder Bereich hat einen **Zustand**, der gehalten werden muss, einen **Nachweis**, der ihn belegt, und eine **typische Lücke**, die in Prüfungen auffällt.

---

## 1 Governance und Zuständigkeit

**Zustand:** Für jedes KI-System ist eine Person benannt, die es verantwortet, und eine zweite, die prüft. Freigaben und Eskalationswege sind beschrieben und werden tatsächlich begangen.

**Nachweis:** Zuständigkeitstabelle mit Namen und Datum; Freigabeprotokolle; Eskalationen mit Ergebnis.

**Typische Lücke:** Zuständigkeit auf Abteilungsebene. „Verantwortlich: IT" ist in einer Prüfung dasselbe wie ein leeres Feld. Die zweite Lücke ist die Prüferrolle, die mit der Eigentümerrolle besetzt ist — dann prüft jemand seine eigene Arbeit, und die Freigabe ist formal.

Dazu: [Governance-Playbook](https://github.com/SimpleAct-Compliance/simpleact-ai-governance-playbook)

## 2 KI-Inventar

**Zustand:** Alle KI-Systeme sind erfasst, je Einsatzzweck, mit Eigentümer, Zweck, Anbieter, Modell und Datenarten. Auch die, die niemand beantragt hat.

**Nachweis:** Register mit Stand und Herkunft je Eintrag; Nachweis, aus welchen Quellen gesucht wurde.

**Typische Lücke:** Vollständigkeit wird behauptet, nicht belegt. Wer nicht sagen kann, **wie** gesucht wurde — Beschaffung, Auslagenerstattung, Anmeldedienst, Netzprotokolle, Release-Notes bestehender Software — hat kein Inventar, sondern eine Liste der bekannten Fälle.

Dazu: [KI-Inventar](https://github.com/SimpleAct-Compliance/simpleact-ai-system-inventory) · [Anbieterregister](https://github.com/SimpleAct-Compliance/simpleact-model-vendor-register)

## 3 Risikoeinstufung

**Zustand:** Je Einsatzzweck liegt eine Einstufung mit Begründung, Annahmen und entscheidender Person vor. Art. 5 wurde vor Anhang III geprüft. Art. 50 wurde unabhängig vom Ergebnis geprüft.

**Nachweis:** Einstufungsbogen je Einsatzzweck, mit Versionsverlauf.

**Typische Lücke:** Das Werkzeug ist eingestuft statt der Einsatzzweck. Eine Zeile „Sprachmodell: minimales Risiko" deckt in der Praxis fünf Verwendungen ab, von denen eine in Anhang III fallen kann.

Dazu: [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu)

## 4 Dokumentation und Nachweise

**Zustand:** Zu jeder Pflicht gibt es einen Nachweis, der auf eine **Version** verweist, einen Freigabestand hat und ohne Suchaufwand auffindbar ist.

**Nachweis:** Nachweisregister mit Freigabezuständen; bei Hochrisiko die technische Dokumentation nach Anhang IV.

**Typische Lücke:** Nachweise ohne Versionsbezug. Ein Screenshot ohne Datum und Systemversion belegt, dass etwas einmal so aussah. Die zweite Lücke: Nachweise liegen verteilt in Postfächern und Laufwerken, und niemand kann sie in einer Prüfung in annehmbarer Zeit vorlegen.

Dazu: [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template) · [Audit-Vorbereitung](https://github.com/SimpleAct-Compliance/simpleact-ai-audit-readiness)

## 5 Überwachung und Meldung

**Zustand:** Es gibt beschriebene Auslöser, die eine Neubewertung anstoßen, und einen Weg, auf dem eine Fehlfunktion gemeldet wird. Beides ist jemandem zugewiesen.

**Nachweis:** Vorfallregister; Protokoll der Auslöserprüfungen, auch der ergebnislosen; Nachweis, dass der Änderungsverlauf des Anbieters gelesen wird.

**Typische Lücke:** Der Jahresturnus als einzige Maßnahme. Die wirksamen Auslöser treten unregelmäßig auf — ein Modellwechsel beim Anbieter kündigt sich nicht zum Jahreswechsel an. Wer nur jährlich prüft, hat im Mittel ein halbes Jahr lang eine Bewertung, die nicht mehr gilt.

Dazu: [Vorfallmanagement](https://github.com/SimpleAct-Compliance/simpleact-incident-management)

---

## Was quer zu allem liegt

**Art. 4 KI-Kompetenz.** Anwendbar seit 2.2.2025, unabhängig von der Risikoklasse. Wer ein System bedient oder beaufsichtigt, muss dafür befähigt sein. Das ist kein eigener Bereich, sondern eine Voraussetzung in allen fünf: Eine menschliche Aufsicht, die nicht versteht, was sie prüft, ist keine Aufsicht.

Dazu: [KI-Kompetenz](https://github.com/SimpleAct-Compliance/elearning)

**Die DSGVO-Seite.** Verarbeitet ein KI-System personenbezogene Daten, laufen Verarbeitungsverzeichnis, Rechtsgrundlage, Betroffenenrechte und gegebenenfalls DSFA parallel. Die Register sollten sich berühren, statt doppelt geführt zu werden — siehe [DSGVO-Arbeitsbereich](../docs/gdpr-workspace.md).

## Weiter

[Lebenszyklus](./lifecycle.md) · [Prüfliste](../checklist.md)
