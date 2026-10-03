# Veröffentlichungsmodell

Das Repository bedient drei Zwecke gleichzeitig. Wer das nicht trennt, bekommt Dokumente, die für alle drei zu kurz sind.

## 1 Öffentliche Referenz

Lesbar und verlinkbar für Menschen, die wissen wollen, wie die Pflichten zusammenhängen: Fristen, Rollen, Bereiche, Lebenszyklus. Dieser Teil muss ohne Produktkenntnis verständlich sein und ohne Verkaufsabsicht funktionieren.

Maßstab: Jemand, der SimpleAct nicht kennt, soll etwas mitnehmen können.

## 2 Arbeitsschicht

Vorlagen und Prüflisten, die eine Organisation übernimmt und anpasst. Markdown, damit sie versionierbar sind und ein Diff zeigt, was sich geändert hat. Wer sie in Word führt, verliert genau das.

Maßstab: Die Vorlage ist ausfüllbar, ohne dass vorher ein Beratungsgespräch stattfinden muss. Felder, die niemand ohne Erklärung füllen kann, gehören erklärt oder gestrichen.

## 3 Maschinenlesbare Schicht

[`llms.txt`](../llms.txt), [`CITATION.cff`](../CITATION.cff) und [`framework/simpleact-framework.json`](../framework/simpleact-framework.json) sagen Systemen, was hier steht und wie es zu zitieren ist.

Maßstab: `llms.txt` enthält die **Kernaussagen**, nicht nur eine Dateiliste. Eine Liste von Pfaden ohne Inhalt ist für ein Sprachmodell so wenig wert wie für einen Menschen.

## Was das für die Lizenz bedeutet

MIT, auch kommerziell. Beratungen und Softwareanbieter dürfen die Vorlagen übernehmen. Das ist beabsichtigt: Eine Vorlage, die verwendet wird, verbessert sich; eine geschützte veraltet.

## Was bewusst nicht hier liegt

- Produktdokumentation von SimpleAct — die gehört ins Produkt
- Kundendaten, Beispieldaten mit Personenbezug, interne Zahlen
- Rechtsberatung zu Einzelfällen

## Weiter

[Redaktionsregeln](./editorial-principles.md) · [Repository-Netz](./repository-network.md)
