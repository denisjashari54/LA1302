# Projekt-Dokumentation

Angelov, Bajramovic, Jashari, Marku

| Datum       | Version | Zusammenfassung                                              |
| ----------- | ------- | ------------------------------------------------------------ |
| 17.11.2023  | 0.0.1   | Beginn der Planungs- und Entwicklungsphase für die Auto-Website. Erstellung der Konzepte für Anmelde- und Registrierfunktionen sowie Struktur der Startseite und Unterseiten. |
| 24.11.2023  | 0.0.2   | Programmierung der Startseite begonnen, Aufteilung und Zuweisung der Unterseiten für verschiedene Automarken. |
| 01.12.2023  | 0.0.3   | Überarbeitung und Detailplanung der Website, Entwicklung der Anmelde- und Registrierfunktion sowie Erweiterung der Unterseiten für die Automarken. |
| 08.12.2023  | 0.0.3   | Revision der Website, Verfeinerung der Funktionen und Designs für die Startseite und die spezifischen Automarken-Seiten. |
| 15.12.2023  | 0.0.4   | Abschluss der Entwicklungsarbeiten, vorläufige Fertigstellung der Auto-Website, Beginn der Vorbereitung auf den Portfolioeintrag. |
| 22.12.2023  | 1.0.0   | Endgültige Version der Auto-Website abgeschlossen, Erstellung der detaillierten Dokumentation und Portfolioeintrag erledigt. |

## 1 Informieren

### 1.1 Ihr Projekt

Eine benutzerfreundliche SPA Website für den Autoverkauf, erstellt mit Vanilla JavaScript, ermöglicht es Kunden, einfach durch Automodelle zu stöbern und zu kaufen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ         | Beschreibung                                     |
| ---- | --------------- | ----------- | ------------------------------------------------ |
| 1    | Muss            | Funktional  | Als ein Benutzer möchte ich die Möglichkeit haben, ein Benutzerkonto zu erstellen (registrieren).  |
| 2    | Muss            | Funktional  | Als ein Benutzer möchte ich mich mit meinem Benutzerkonto anmelden können. |
| 3    | Kann            | Funktional  | Als ein Benutzer möchte ich mein Passwort zurücksetzen können, falls ich es vergessen habe, um wieder auf mein Konto zugreifen zu können. |
| 4    | Muss            | Funktional  | Als ein Benutzer möchte ich die Möglichkeit haben, nach Autos basierend auf die Marke zu filtern um das gewünschte Auto zu finden.|
| 5    | Muss            | Funktional  | Als ein Benutzer möchte ich die Suchergebnisse sortieren können, um die relevantesten Angebote zuerst anzuzeigen, z. B. nach Preis aufsteigend oder absteigend. |
| 6    | Muss            | Funktional  | Als ein Benutzer möchte ich detaillierte Informationen zu jedem gefundenen Auto anzeigen können, einschließlich technischer Daten, Fotos und Verkäuferkontaktinformationen. |
| 7    | Muss            | Qualität    | Als ein Benutzer möchte ich eine benutzerfreundliche und intuitive Website erleben, die einfach zu navigieren ist und klare Anweisungen bietet. |
| 8    | Muss            | Qualität    | Als ein Benutzer möchte ich, dass die Website schnell lädt und reaktionsschnell ist, unabhängig vom verwendeten Gerät oder Browser. |
| 9    | Muss            | Funktional  | Als ein Benutzer möchte ich die Möglichkeit haben, die Option haben ein Auto in meinen Warenkorb zu legen. |
| 10   | Muss            | Funktional  | Als ein Benutzer möchte ich die Option haben, wennn ich angemeldet bin meinen Warenkorb anzusehen. |
| 11   | Kann            | Qualität    | Als ein Benutzer möchte ich detaillierte Bewertungen und Kommentare von anderen Benutzern über die Autos und Verkäufer auf der Website sehen, um fundierte Entscheidungen zu treffen. |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: *Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️*.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

# Mockups

# Startseite
![image](https://github.com/denisjashari54/LA1302/assets/107101355/2443fed5-bcdb-40bb-b3cb-34e4f7e15d0c)


# Unterseite (Porsche, Mercedes, BMW, Audi)
![image](https://github.com/denisjashari54/LA1302/assets/107101355/e998dc05-721e-4fdb-8a12-dc0b8d5f7122)


# Anmelden
![image](https://github.com/denisjashari54/LA1302/assets/107101355/07d0732f-0304-471a-90b2-9375e1a160e1)


# Warenkorb
![image](https://github.com/denisjashari54/LA1302/assets/107101355/e5a3c257-0897-4165-b5a3-3da8aceb5dcd)



## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.



