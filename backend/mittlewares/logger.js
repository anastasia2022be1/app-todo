// Простое middleware для логирования запросов
export const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Логирует метод запроса и путь
    next(); // Передает управление следующему middleware
};