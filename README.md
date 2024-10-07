# Todo App

Ein vollständiges Todo-App-Projekt, das sowohl ein Backend (RESTful API) mit Express.js als auch ein Frontend mit React.js umfasst. Dieses Projekt ermöglicht es Benutzern, Aufgaben zu erstellen, anzuzeigen, zu aktualisieren und zu löschen.

## Überblick

### Backend

Der Backend-Teil dieses Projekts besteht aus einer RESTful API, die mit Express.js erstellt wurde und CRUD-Operationen für ToDo-Elemente bereitstellt. Die Aufgaben werden in einer in-memory Datenstruktur oder einer JSON-Datei gespeichert, anstatt eine Datenbank wie MongoDB zu verwenden.

### Frontend

Das Frontend ist eine React-Anwendung, die die API verwendet, um ToDo-Elemente anzuzeigen und zu verwalten.

## Technologien

### Backend

- **Node.js** - JavaScript-Laufzeitumgebung
- **Express** - Webanwendungs-Framework für Node.js
- **CORS** - Middleware, um Cross-Origin-Anfragen zu ermöglichen
- **Logger** - Middleware zum Protokollieren von Anfragen

### Frontend

- **React** - JavaScript-Bibliothek für den Aufbau von Benutzeroberflächen

## Installation

### Backend

1. Klonen Sie das Repository:
   
      ```bash
      git clone repository-url
      cd backend

3. Installieren Sie die Abhängigkeiten:

      ```bash
      npm install

4. Starten Sie den Backend-Server:
   
      ```bash
      npm run dev

Der Server läuft nun auf http://localhost:3005.


### Frontend
1. Klonen Sie das Repository:


    ```bash
    git clone repository-url
    cd frontend

2. Installieren Sie die Abhängigkeiten:

    ```bash
    npm install

3. Starten Sie die Frontend-Anwendung:

    ```bash
    npm run dev

Die Anwendung läuft nun auf http://localhost:3000.

## API-Endpunkte

### Backend Endpunkte

1. GET /api/todos
Beschreibung: Gibt eine Liste aller Aufgaben zurück.
Antwort: Ein Array von ToDo-Objekten.

2. POST /api/todos
Beschreibung: Erstellt eine neue Aufgabe.
Body:
{
  "task": "String",
  "completed": "Boolean"
}

Antwort: Das erstellte ToDo-Objekt.

3. PATCH /api/todos/
Beschreibung: Aktualisiert den Status einer Aufgabe (vollständig/unvollständig).
Parameter: id - ID der Aufgabe.
Body:
{
  "completed": "Boolean"
}
Antwort: Das aktualisierte ToDo-Objekt.

4. DELETE /api/todos/
Beschreibung: Löscht eine Aufgabe.
Parameter: id - ID der Aufgabe.
Antwort: Erfolgreiche Bestätigung der Löschung.

### Frontend-Funktionen
Das Frontend bietet eine Benutzeroberfläche zur Verwaltung von ToDo-Elementen. Benutzer können:

- Neue Aufgaben hinzufügen
- Bestehende Aufgaben anzeigen
- Aufgaben als erledigt markieren
- Aufgaben löschen


## Middleware
### Logger Middleware
Die Logger-Middleware im Backend protokolliert alle eingehenden Anfragen und gibt nützliche Informationen in der Konsole aus.

## Beiträge
Beiträge sind willkommen! Bitte erstellen Sie ein Issue oder senden Sie einen Pull-Request.

## Abhängigkeiten
Das Backend verwendet die folgenden Abhängigkeiten:
    
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.21.0",
      "nodemon": "^3.1.7"
    }


## Autor
Anastasia Sevastianova

LinkedIn -  https://www.linkedin.com/in/anastasia-sevastianova;

GitHub - https://github.com/anastasia2022be1/app-todo
