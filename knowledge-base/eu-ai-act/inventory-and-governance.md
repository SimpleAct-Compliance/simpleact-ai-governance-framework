# Register und Zuständigkeit

Register veralten nicht, weil sie schlecht entworfen sind, sondern weil niemand namentlich dafür zuständig ist. Das ist der Kern dieses Kapitels.

## Warum das Inventar die Voraussetzung ist

Alles andere baut darauf auf. Eine Einstufung kann nur bewerten, was bekannt ist; ein Nachweis kann nur belegen, was eingestuft wurde. Und das Inventar ist gleichzeitig der Teil, der am längsten dauert — nicht wegen der Felder, sondern wegen der Suche.

Fünf Quellen, die zusammen ein belastbares Bild geben:

| Quelle | Was nur sie findet |
|---|---|
| Beschaffung und Kreditorenliste | eingekaufte Werkzeuge mit Vertrag |
| Auslagenerstattung | Einzelabos, die an der Beschaffung vorbeigehen |
| Anmeldedienst (SSO) | was über die zentrale Anmeldung läuft |
| Netzprotokolle, aggregiert | Dienste ohne Vertrag und ohne Anmeldung |
| Release-Notes bestehender Software | nachträglich ergänzte KI-Funktionen |

Die letzte Zeile ist der häufigste Fall und der unangenehmste: Ein CRM bekommt eine Zusammenfassungsfunktion, ein Bewerbungstool eine Vorsortierung. Es gibt kein Projekt, keine Beschaffung, keinen Antrag — und trotzdem verarbeitet ab diesem Release ein KI-System personenbezogene Daten.

**Was in einer Prüfung zählt, ist nicht die Behauptung der Vollständigkeit, sondern der Nachweis der Suche.** Festhalten: welche Quellen, wann, mit welchem Ergebnis.

Ausführlich: [KI-Inventar](https://github.com/SimpleAct-Compliance/simpleact-ai-system-inventory)

## Zuständigkeit, die trägt

Drei Rollen je Eintrag, mit **Namen**:

| Rolle | Aufgabe | Darf nicht |
|---|---|---|
| **Eigentümer** | hält den Eintrag aktuell, kennt den Einsatzzweck | die eigene Arbeit freigeben |
| **Prüfer** | sieht nach, ob der Eintrag stimmt | mit dem Eigentümer identisch sein |
| **Freigebender** | entscheidet über Inbetriebnahme | nur unterschreiben, ohne zu sehen |

Die rechte Spalte ist die eigentliche Aussage. Eine Freigabe, die der Umsetzende selbst erteilt, ist eine Formalie; in der Aufarbeitung eines Vorfalls fällt das sofort auf.

## Was „nicht bewertet" taugt

Ein ausdrücklich offener Punkt mit Person und Termin ist ein **gültiges Ergebnis**. Er ist in einer Prüfung besser als eine geratene Einstufung, weil er zeigt, dass die Lücke bekannt ist und bearbeitet wird. Ein leeres Feld zeigt dasselbe Nichtwissen ohne den Beleg, dass jemand es gemerkt hat.

## Die Verbindungen, die ein Eintrag tragen muss

Ein Register, das nur auf sich selbst verweist, erzeugt Doppelarbeit. Jeder Eintrag braucht Verweise auf:

- **Verarbeitungsverzeichnis** nach Art. 30 DSGVO, sofern personenbezogene Daten
- **Folgenabschätzungen** — DSFA nach Art. 35 DSGVO, und bei Hochrisiko in bestimmten Konstellationen die Grundrechte-Folgenabschätzung nach Art. 27 AI Act
- **Anbieterregister** — welches Modell, welche Version, welche Zusagen
- **Vorfallverfahren** — wohin eine Fehlfunktion gemeldet wird
- **Schulungsstand** — wer darf bedienen und beaufsichtigen (Art. 4)
- **Nachweisregister** — welche Belege zu diesem Eintrag gehören

Fehlt eine Verbindung, fällt das nicht im Alltag auf, sondern in der Prüfung — und dann als Lücke in der Governance, nicht als vergessenes Feld.

## Woran man sieht, dass es funktioniert

Nicht an der Zahl der Einträge. An drei anderen Größen:

1. **Wie viele Einträge haben einen Eigentümer mit Namen?** Unter 100 % ist jeder fehlende Name eine Lücke mit Adresse.
2. **Wie wurden Auslöser bemerkt?** Steht über Monate nur „Zufall", fehlt ein Verfahren.
3. **Wie viele Ausgaben wurden im letzten Monat tatsächlich geändert?** Fällt diese Zahl gegen Null, ist die menschliche Aufsicht formal geworden.

Die dritte ist die unbequemste und die aussagekräftigste.

## Weiter

[Die fünf Bereiche](../../framework/control-domains.md) · [Lebenszyklus](../../framework/lifecycle.md) · [Vorlage Inventar](../../templates/ai-system-inventory-template.md)
