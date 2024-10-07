import { Router } from "express";

const todosRouter = Router();

// Array mit Todos
const todos = [
    { id: 1, task: 'Einkaufen gehen', completed: false },
    { id: 2, task: 'Hausaufgaben machen', completed: false },
    { id: 3, task: 'Wäsche waschen', completed: true },
  ];

  // Endpoints
// GET /todos: all todos
todosRouter.get("/", (req, res) => {
    res.status(200).json(todos);
  });
  
  // POST /todos: Добавляет todo 
  todosRouter.post("/", (req, res) => {
    if (!req.body.task) {
      return res.status(400).json({ error: "Muss Task sein" });
    }
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, // Генерация уникального id
      task: req.body.task,
      completed: req.body.completed,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo wurde erstellt", todo: newTodo });
  });
  
  // DELETE /todos/:id: Удаляет todo по id
  todosRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const todoIndex = todos.findIndex(todo => todo.id === id);
  
    if (todoIndex === -1) {
      
      res.status(404).send("Todo wurde nicht gefunden");
    } else {
    
      todos.splice(todoIndex, 1);
      res.status(204).send(); // Возвращаем 204 No Content при успешном удалении
    }
  });

  // PATCH /todos/:id: Обновляет свойства задачи по id
todosRouter.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).send("Todo wurde nicht gefunden");
  }

  // Обновляем только переданные свойства
  if (req.body.task !== undefined) {
    todo.task = req.body.task;
  }
  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  res.status(200).json({ message: "Todo wurde aktualisieren", todo });
});

  export default todosRouter;