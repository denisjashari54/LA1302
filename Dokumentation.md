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
| 6    | Muss            | Funktional  | Als ein Benutzer möchte ich detaillierte Informationen zu jedem gefundenen Auto anzeigen können, einschließlich technischer Daten und Fotos. |
| 7    | Muss            | Qualität    | Als ein Benutzer möchte ich eine benutzerfreundliche und intuitive Website erleben, die einfach zu navigieren ist und klare Anweisungen bietet. |
| 8    | Muss            | Qualität    | Als ein Benutzer möchte ich, dass die Website schnell lädt und reaktionsschnell ist, unabhängig vom verwendeten Gerät oder Browser. |
| 9    | Muss            | Funktional  | Als ein Benutzer möchte ich die Möglichkeit haben, ein Auto in meinen Warenkorb zu legen. |
| 10   | Muss            | Funktional  | Als ein Benutzer möchte ich die Option haben, wennn ich angemeldet bin meinen Warenkorb anzusehen. |
| 11   | Kann            | Qualität    | Als ein Benutzer möchte ich detaillierte Bewertungen und Kommentare von anderen Benutzern über die Autos auf der Website sehen, um fundierte Entscheidungen zu treffen. |

### 1.3 Testfälle

| TC-№ | Ausgangslage       | Eingabe                     | Erwartete Ausgabe                                    |
| ----- | ------------------ | --------------------------- | ---------------------------------------------------- |
| 1.1   | Startseite         | Klick auf "Registrieren"    | Registrierungsformular wird angezeigt                |
| 1.2   | Registrierungsformular | Ausgefülltes Formular         | Bestätigungsnachricht über erfolgreiche Registrierung |
| 2.1   | Startseite         | Klick auf "Anmelden"        | Anmeldeformular wird angezeigt                       |
| 2.2   | Anmeldeformular    | Eingabe von Benutzerdaten   | Zugang zum Benutzerkonto                             |
| 3.1   | Anmeldeformular    | Klick auf "Passwort vergessen" | Formular zum Zurücksetzen des Passworts            |
| 3.2   | Passwort zurücksetzen Formular | Eingabe von Benutzer-Email | Anweisungen zum Zurücksetzen des Passworts per Email |
| 4.1   | Fahrzeugangebotsseite | Auswahl einer Automarke aus dem Filter | Liste von Autos der gewählten Marke                |
| 5.1   | Suchergebnisse     | Sortierung auswählen        | Sortierte Liste der Suchergebnisse                   |
| 6.1   | Auto-Liste         | Klick auf ein Auto          | Detailansicht des gewählten Autos mit technischen Daten und Fotos |
| 7.1   | Beliebige Seite    | Navigation durch die Website | Einfache und intuitive Nutzung der Website          |
| 8.1   | Beliebige Seite    | Zugriff von verschiedenen Geräten/Browsern | Schnelles Laden und reaktionsschnelle Darstellung |
| 9.1   | Auto-Liste         | Klick auf "In den Warenkorb legen" | Bestätigung, dass das Auto zum Warenkorb hinzugefügt wurde |
| 10.1  | Während angemeldet | Klick auf "Warenkorb"       | Anzeige der Inhalte des Warenkorbs                   |
| 11.1  | Auto-Detailansicht | Scrollen zu Bewertungen     | Anzeige von Bewertungen und Kommentaren anderer Benutzer |


### 1.4 Diagramme

### Mockups

#### Startseite
![image](https://github.com/denisjashari54/LA1302/assets/107101355/2443fed5-bcdb-40bb-b3cb-34e4f7e15d0c)


#### Unterseite (Porsche, Mercedes, BMW, Audi)
![image](https://github.com/denisjashari54/LA1302/assets/107101355/e998dc05-721e-4fdb-8a12-dc0b8d5f7122)


#### Anmelden
![image](https://github.com/denisjashari54/LA1302/assets/107101355/07d0732f-0304-471a-90b2-9375e1a160e1)


#### Warenkorb
![image](https://github.com/denisjashari54/LA1302/assets/107101355/e5a3c257-0897-4165-b5a3-3da8aceb5dcd)



## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A | 15.06.2023 | Marku | Entwicklung der Registrierungsfunktion für Benutzerkonten. | 120' |
| 2.A | 22.06.2023 | Jashari | Implementierung der Anmeldefunktion für Benutzerkonten. | 120' |
| 3.A | 29.06.2023 | Bajramovic | Implementierung der Funktion zum Zurücksetzen von Passwörtern. | 60' |
| 4.A | 06.07.2023 | Angelov | Entwicklung der Filterfunktion für Autosuche nach Marken. | 180' |
| 5.A | 13.07.2023 | Marku | Implementierung der Sortierfunktion für Suchergebnisse. | 120' |
| 6.A | 20.07.2023 | Jashari | Programmierung der Detailansicht für Autos mit Fotos und Daten. | 180' |
| 7.A | 27.07.2023 | Bajramovic | Optimierung der Benutzerfreundlichkeit und Intuitivität der Website. | 240' |
| 8.A | 03.08.2023 | Angelov | Sicherstellung der Ladegeschwindigkeit und Responsivität der Website. | 240' |
| 9.A | 10.08.2023 | Marku | Integration der Warenkorbfunktion für ausgewählte Autos. | 120' |
| 10.A | 17.08.2023 | Jashari | Entwicklung der Warenkorbansicht für angemeldete Benutzer. | 120' |
| 11.A | 24.08.2023 | Bajramovic | Integration von Benutzerbewertungen und Kommentaren zu Autos. | 180' |

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum      | Zuständig   | Geplante Zeit | Tatsächliche Zeit |
| ---- | ---------- | ----------- | ------------- | ----------------- |
| 1.A  | 15.06.2023 | Marku       | 120'          |                   |
| 2.A  | 22.06.2023 | Jashari     | 120'          |                   |
| 3.A  | 29.06.2023 | Bajramovic  | 60'           |                   |
| 4.A  | 06.07.2023 | Angelov     | 180'          |                   |
| 5.A  | 13.07.2023 | Marku       | 120'          |                   |
| 6.A  | 20.07.2023 | Jashari     | 180'          |                   |
| 7.A  | 27.07.2023 | Bajramovic  | 240'          |                   |
| 8.A  | 03.08.2023 | Angelov     | 240'          |                   |
| 9.A  | 10.08.2023 | Marku       | 120'          |                   |
| 10.A | 17.08.2023 | Jashari     | 120'          |                   |
| 11.A | 24.08.2023 | Bajramovic  | 180'          |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum      | Resultat | Tester      |
| ---- | ---------- | -------- | ----------- |
| 1.1  | 12.01.2024 |          | Angelov     |
| 1.2  | 12.01.2024 |          | Jashari     |
| 2.1  | 12.01.2024 |          | Marku       |
| 2.2  | 12.01.2024 |          | Bajramovic  |
| 3.1  | 12.01.2024 |          | Angelov     |
| 3.2  | 12.01.2024 |          | Jashari     |
| 4.1  | 12.01.2024 |          | Marku       |
| 5.1  | 12.01.2024 |          | Bajramovic  |
| 6.1  | 12.01.2024 |          | Angelov     |
| 7.1  | 12.01.2024 |          | Jashari     |
| 8.1  | 12.01.2024 |          | Marku       |
| 9.1  | 12.01.2024 |          | Bajramovic  |
| 10.1 | 12.01.2024 |          | Angelov     |
| 11.1 | 12.01.2024 |          | Jashari     |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.



