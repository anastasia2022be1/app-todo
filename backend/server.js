import express from "express";
import { logger } from "./middlewares/logger.js"; // Achte darauf, dass der Pfad zu deiner Logger-Middleware korrekt ist
import todosRouter from "./routes/todos.js"; // Router für die Todo-Routen
import cors from 'cors'; // Importiere CORS

const app = express();

// Middleware für die Verarbeitung von JSON-Anfragen
app.use(express.json());

// Middleware für CORS, um Anfragen von anderen Ursprüngen zuzulassen
app.use(cors());

// Verbindung der Logger-Middleware, alle Anfragen werden hier geloggt
app.use(logger);

// Verbinde die Router für Todo-Management
app.use("/api/todos", todosRouter);

// Globale Fehlerbehandlung
app.use((err, req, res, next) => {
    console.error("Error:", err.message); // Protokolliere den Fehler in der Konsole
    res.status(500).json({ message: 'Something went wrong' }); // Sende eine Fehlerantwort zurück
});

// Standardroute für nicht gefundene Routen
app.use((req, res) => {
    res.status(404).send("Not found"); // Sende eine 404-Antwort zurück
});

// Server starten
const PORT = 3005;
app.listen(PORT, () => console.log(`Server läuft unter: http://localhost:${PORT}`));
