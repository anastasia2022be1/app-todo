import express from "express";
import { logger } from "./mittlewares/logger.js";
import todosRouter from "./routes/todos.js";
import cors from 'cors';

const app = express();

// Middleware для обработки JSON-запросов
app.use(express.json());

// Middleware für CORS
app.use(cors());

// Подключение логгера (все запросы будут логироваться)
app.use(logger);

// Подключение роутов для управления транспортными средствами
app.use("/api/todos", todosRouter);

// globale Fehlerbehandlung
app.use((err, req, res, next) => {
    console.error("error")
    res.status(500).json({message: 'Something went wrong'})
  })
  
  // default route
  app.use((req, res) => {
    res.status(404).send("Not found");
  })

const PORT = 3005;
app.listen(PORT, () => console.log(`Server läuft unter: http://localhost:${PORT}`));
