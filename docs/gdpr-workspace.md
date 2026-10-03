# DSGVO-Arbeitsbereich

Die KI-Verordnung tritt neben die DSGVO, nicht an deren Stelle. Für ein KI-System, das personenbezogene Daten verarbeitet, laufen beide Pflichtenkataloge parallel — und in der Praxis ist der datenschutzrechtliche der, der zuerst geprüft wird: Datenschutzaufsichten prüfen seit Jahren, KI-Marktüberwachung ist neu.

## Wo sich die Register berühren

| KI-Seite | Datenschutzseite | Was die Verbindung erspart |
|---|---|---|
| Inventareintrag | Eintrag im Verarbeitungsverzeichnis (Art. 30) | doppelte Pflege von Zweck, Daten, Empfängern |
| Einstufung Hochrisiko | Prüfung, ob DSFA nach Art. 35 nötig ist | das Übersehen der Pflicht |
| Anbieter und Modell | Auftragsverarbeiter, AVV, Unterauftragsverarbeiter | Widersprüche zwischen Vertrag und Register |
| Vorfall | Datenschutzverletzung nach Art. 33 | das Verwechseln der zwei Fristen |
| Verarbeitungsort | Drittlandübermittlung, SCC, TIA | eine Lücke, die erst bei der Prüfung auffällt |

**Doppelte Pflege ist der häufigste Grund, aus dem Register veralten.** Wer dieselbe Angabe an zwei Stellen führt, hat sie nach einem halben Jahr an einer von beiden falsch.

## Die beiden Folgenabschätzungen

Sie werden regelmäßig vermengt:

| | DSFA | Grundrechte-Folgenabschätzung |
|---|---|---|
| Rechtsgrundlage | Art. 35 DSGVO | Art. 27 AI Act |
| Auslöser | voraussichtlich hohes Risiko für Betroffene | bestimmte Hochrisiko-Konstellationen, vor allem öffentliche Stellen und bestimmte private Betreiber |
| Blickwinkel | Schutz personenbezogener Daten | Grundrechte insgesamt |
| Wer | Verantwortlicher | Betreiber |

Eine DSFA ersetzt keine Grundrechte-Folgenabschätzung, und umgekehrt. Sie können aber auf denselben Erhebungen aufbauen — das ist der Sinn der Verzahnung.

Ausführlich: [DSFA und FRIA](https://github.com/SimpleAct-Compliance/simpleact-dpia-dsfa-workflow)

## Die zwei Meldefristen

| | Art. 73 AI Act | Art. 33 DSGVO |
|---|---|---|
| Gegenstand | schwerwiegender Vorfall bei einem Hochrisikosystem | Verletzung des Schutzes personenbezogener Daten |
| Adressat | Marktüberwachungsbehörde | Datenschutzaufsicht |
| Frist | gestaffelt nach Art des Vorfalls | **72 Stunden ab Kenntnis** |

Ein Ereignis kann beide auslösen. Die 72 Stunden laufen ab Kenntnis, nicht ab Aufklärung: Eine unvollständige Meldung innerhalb der Frist ist richtig, eine vollständige danach ist verspätet.

Ausführlich: [Datenschutzverletzungen](https://github.com/SimpleAct-Compliance/simpleact-gdpr-data-breach-management)

## Module im Produkt

**Grundlage:** Verarbeitungsverzeichnis, DSFA-Vorgang, Datenpannenregister mit Fristen, Löschprotokoll, Schulungs- und Awareness-Nachweise, DSGVO-Prüfliste.

**Betrieb:** Betroffenenanfragen mit Fristenlogik, AVV- und Auftragsverarbeiterstatus, TOMs und Kontrollzuordnung, Datenschutzhinweise, Registerexport.

**Enterprise:** DSB-Profil und Rollenlogik, Übermittlungsverfolgung mit TIA-Status, Eskalation mit Webhook-Anbindung, Behördenpakete und Exportbündel.

## Was ausdrücklich nicht dazugehört

Diese Grenzen gehören genannt, damit niemand sie voraussetzt:

- kein Consent-Banner und kein Cookie-Scanner für Websites
- kein automatisches Löschen in Fremdsystemen
- keine automatische Suche, Ausgabe oder Löschung von Betroffenendaten in Fremdsystemen
- keine Vertragsunterzeichnung für AVVs
- kein Rechtstextgenerator und keine Rechtsberatung
- kein Datenportabilitätsdienst für Art. 15 und 20
- keine eigene Eskalations-App über die Webhook-Verträglichkeit hinaus
- kein vollständiges Lernmanagementsystem

Die drei Punkte zu Fremdsystemen sind die wichtigsten: Ein Register kann festhalten, **dass** gelöscht wurde und von wem — es kann nicht an Ihrer Stelle in einem Drittsystem löschen.

## Weiter

[DSGVO-Grundlagen](https://github.com/SimpleAct-Compliance/simpleact-gdpr-compliance-workspace) · [Produkt-Abbildung](./platform-feature-map.md) · [Die fünf Bereiche](../framework/control-domains.md)
