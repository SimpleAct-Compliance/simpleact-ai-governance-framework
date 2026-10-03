# KI-Governance-Rahmenwerk

**KI-Compliance ist kein Dokument, sondern ein Betriebszustand.** Ein Ordner mit Richtlinien erfüllt keine Pflicht. Erfüllt wird sie durch Register, die aktuell sind, Entscheidungen, die jemand verantwortet, und Nachweise, die ohne Suchaufwand auffindbar sind.

Dieses Repository ist das Dach über den übrigen: Es beschreibt, wie die Teile zusammenhängen — Inventar, Einstufung, Dokumentation, Governance, Überwachung — und wer wofür zuständig ist.

*The operating model that connects inventory, classification, documentation, governance and monitoring under the EU AI Act and the GDPR.*

---

## Warum Richtlinien allein nicht genügen

In Prüfungen fällt selten auf, dass eine Richtlinie fehlt. Es fällt auf, dass

- niemand sagen kann, **welche** KI-Systeme im Haus sind,
- eine Einstufung existiert, aber **niemand** sie verantwortet,
- ein Nachweis existiert, aber zu einer **Version**, die es nicht mehr gibt,
- eine Pflicht zugewiesen ist, aber an eine **Abteilung** statt an eine Person.

Jeder dieser Punkte ist ein Zustandsproblem, kein Textproblem. Deshalb ist dieses Rahmenwerk um fünf Zustände gebaut, nicht um fünf Kapitel.

## Die fünf Bereiche

| Bereich | Die Frage, die er beantwortet | Ausführlich |
|---|---|---|
| **Governance** | Wer entscheidet, wer prüft, wer eskaliert? | [control-domains.md](./framework/control-domains.md) |
| **Inventar** | Welche KI-Systeme gibt es, auch die eingebetteten? | [KI-Inventar](https://github.com/SimpleAct-Compliance/simpleact-ai-system-inventory) |
| **Einstufung** | Welche Pflichten gelten je Einsatzzweck? | [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu) |
| **Dokumentation** | Was ist nachweisbar, und zu welcher Version? | [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template) |
| **Überwachung** | Was ändert sich, und wer bemerkt es? | [Vorfallmanagement](https://github.com/SimpleAct-Compliance/simpleact-incident-management) |

Die Bereiche sind nicht gleich schwer. Zwei davon entscheiden über den Rest: Ohne **Inventar** ist jede Einstufung lückenhaft, und ohne benannte **Zuständigkeit** veraltet jedes Register.

## Der Lebenszyklus

```
  Aufnahme -> Bewertung -> Umsetzung -> Freigabe -> Überwachung
                  ^                                      |
                  +--------- Auslöser ------------------- +
```

Fünf Phasen, und eine Rückkopplung, die in der Praxis am häufigsten fehlt: Es gibt einen Weg hinein, aber keinen zurück. Systeme werden aufgenommen, eingestuft, freigegeben — und dann ändert der Anbieter das Modell, und niemand hat einen Anlass, die Bewertung noch einmal anzusehen. Siehe [lifecycle.md](./framework/lifecycle.md).

## Zwei Fristen, die verwechselt werden

Nach dem **Digital Omnibus** (Verordnung (EU) 2026/1744, in Kraft seit 27.7.2026):

- **Art. 50 Transparenz: seit 2.8.2026 anwendbar** — nicht verschoben
- **Anhang III Hochrisiko: erst ab 2.12.2027** — um 16 Monate verschoben

Und davor liegt eine Pflicht, die seit dem **2.2.2025** gilt und keine Risikoklasse voraussetzt: **Art. 4 KI-Kompetenz**. Anbieter und Betreiber müssen **Maßnahmen ergreifen, um die KI-Kompetenz** der Leute zu fördern, die ihre Systeme bedienen — unabhängig davon, wie das System eingestuft ist. Der Digital Omnibus hat die Vorschrift zum 27.7.2026 neu gefasst und damit abgeschwächt: Ein bestimmtes Niveau je Person muss nicht mehr sichergestellt werden. Vollständige Fristen in [overview.md](./knowledge-base/eu-ai-act/overview.md).

## Inhalt

### Das Rahmenwerk

| Dokument | Inhalt |
|---|---|
| [Überblick](./framework/overview.md) | Zweck, Adressaten, was es leistet und was nicht |
| [Die fünf Bereiche](./framework/control-domains.md) | je Bereich: Zustand, Nachweis, typische Lücke |
| [Lebenszyklus](./framework/lifecycle.md) | fünf Phasen und die Rückkopplung |
| [Das Verfahren](./framework.md) | in Kurzform |
| [Prüfliste](./checklist.md) | zum Durcharbeiten |

### Wissensbasis

| Dokument | Inhalt |
|---|---|
| [Überblick AI Act](./knowledge-base/eu-ai-act/overview.md) | Aufbau, Fristen, was wann gilt |
| [Begriffe](./knowledge-base/eu-ai-act/definitions.md) | die Begriffe, an denen Governance hängt |
| [Rollen](./knowledge-base/eu-ai-act/scope-and-actors.md) | Anbieter, Betreiber, und der unbemerkte Rollenwechsel |
| [Einstufung](./knowledge-base/eu-ai-act/risk-logic.md) | die Klassen, soweit für Governance nötig |
| [Inventar und Governance](./knowledge-base/eu-ai-act/inventory-and-governance.md) | wie Register und Zuständigkeit zusammenhängen |

### Vorlagen

| Vorlage | Zweck |
|---|---|
| [KI-Inventar](./templates/ai-system-inventory-template.md) | ein Eintrag je System und Einsatzzweck |
| [Risikoeinstufung](./templates/risk-classification-template.md) | Ergebnis, Begründung, Annahmen |
| [Technische Dokumentation](./templates/technical-documentation-template.md) | Anhang IV, Abschnitt für Abschnitt |
| [Marktbeobachtung](./templates/post-market-monitoring-template.md) | Art. 72, was beobachtet wird und von wem |

### Weiteres

[Dokumentenbibliothek](./documents/index.md) — die veröffentlichten PDF-Leitfäden auf Deutsch und Englisch · [Produkt-Abbildung](./docs/platform-feature-map.md) · [DSGVO-Arbeitsbereich](./docs/gdpr-workspace.md) · [Paketlogik](./docs/package-matrix.md) · [Redaktionsregeln](./docs/editorial-principles.md) · [Veröffentlichungsmodell](./docs/publishing-model.md) · [Repository-Netz](./docs/repository-network.md)

Maschinenlesbar: [framework/simpleact-framework.json](./framework/simpleact-framework.json) · [llms.txt](./llms.txt)

## In Software umsetzen

[SimpleAct](https://simpleact.de) führt die fünf Bereiche als verbundene Register mit Freigaben, Wiedervorlagen und Prüfprotokoll: **[AI Governance](https://simpleact.de/ai-governance)**

## Stand und Lizenz

Zuletzt aktualisiert: 2026-10-03 · MIT — frei nutzbar, auch kommerziell. Keine Rechtsberatung.
