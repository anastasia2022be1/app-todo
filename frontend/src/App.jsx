import { useState, useEffect } from "react"; // Импортируем хуки useState и useEffect из React
import "./App.css"; // Импортируем CSS-файл для стилизации приложения

function App() {
  // Инициализируем состояние для списка задач
  const [todos, setTodos] = useState([]); // Создаем пустой массив для задач
  const [todoTask, setTodoTask] = useState(""); // Создаем пустую строку для текста новой задачи

  // Функция для получения задач из API
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3005/api/todos"); // HTTP-запрос к API
      if (!res.ok) {
        throw new Error(`Failed to fetch todos: ${res.statusText}`); // Обработка ошибок
      }
      const data = await res.json(); // Извлекаем JSON-данные из ответа
      setTodos(data); // Устанавливаем задачи в состояние
    } catch (error) {
      console.error("Error fetching todos:", error); // Логирование ошибок
    }
  };

  // useEffect-хук для вызова fetchTodos при первом рендере компонента
  useEffect(() => {
    fetchTodos(); // Получаем задачи
  }, []); // Пустой массив зависимостей означает, что вызывается только один раз при загрузке

  // Функция для добавления новой задачи
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    if (todoTask.trim() === "") return; // Проверяем, что ввод не пустой

    const newTodo = {
      task: todoTask, // Устанавливаем задачу
      completed: false, // Новая задача изначально не завершена
    };

    try {
      const res = await fetch("http://localhost:3005/api/todos", {
        method: "POST", // HTTP-метод для добавления
        headers: {
          "Content-Type": "application/json", // Устанавливаем заголовок на JSON
        },
        body: JSON.stringify(newTodo), // Тело запроса в формате JSON
      });

      if (!res.ok) {
        throw new Error(`Failed to add todo: ${res.statusText}`); // Обработка ошибок
      }

      await res.json(); // Обрабатываем ответ (необязательно, но может быть полезно для будущих расширений)
      fetchTodos(); // Обновляем список задач
      setTodoTask(""); // Сбрасываем поле ввода

    } catch (error) {
      console.error("Error adding todo:", error); // Логирование ошибок
    }
  };

  // Функция для удаления задачи
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3005/api/todos/${id}`, {
        method: "DELETE", // HTTP-метод для удаления
      });

      if (!res.ok) {
        throw new Error(`Failed to delete todo: ${res.statusText}`); // Обработка ошибок
      }

      fetchTodos(); // Обновляем список задач после удаления
    } catch (error) {
      console.error("Error deleting todo:", error); // Логирование ошибок
    }
  };

  // Функция для пометки задачи как выполненной или не выполненной
  const handleComplete = async (id, completed) => {
    try {
      const res = await fetch(`http://localhost:3005/api/todos/${id}`, {
        method: "PATCH", // HTTP-метод для обновления
        headers: {
          "Content-Type": "application/json", // Устанавливаем заголовок на JSON
        },
        body: JSON.stringify({ completed: !completed }), // Переключаем статус (выполнена/не выполнена)
      });

      if (!res.ok) {
        throw new Error(`Failed to update todo: ${res.statusText}`); // Обработка ошибок
      }

      await res.json(); // Обрабатываем ответ (необязательно, но может быть полезно для будущих расширений)
      fetchTodos(); // Обновляем список задач после обновления
    } catch (error) {
      console.error("Error updating todo:", error); // Логирование ошибок
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}> {/* Форма для ввода новых задач */}
        <input
          type="text"
          value={todoTask} // Значение поля ввода
          onChange={(e) => setTodoTask(e.target.value)} // Обновляем состояние при изменении ввода
          placeholder="New todo" // Текст-подсказка в поле ввода
        />
        <button type="submit">Add</button> {/* Кнопка для добавления новой задачи */}
      </form>

      <ul>
        {todos.map((todo) => ( // Проходим по всем задачам
          <li
            key={Math.random().toString(16)} // Ключ для каждого элемента списка (не оптимально, лучше использовать уникальный ID)
            style={{
              textDecoration: todo.completed ? "line-through" : "none", // Зачеркивание, если задача выполнена
            }}>
            {todo.task} {/* Отображение описания задачи */}
            <button onClick={() => handleComplete(todo.id, todo.completed)}> {/* Кнопка для отметки задачи как выполненной или нет */}
              {todo.completed ? "Cancel" : "Done"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button> {/* Кнопка для удаления задачи */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App; // Экспортируем компонент App
