const logger = require('./logger');

function createOrder(order) {
    logger.info(`Нове замовлення: ${JSON.stringify(order)}`);
    try {
        // логіка створення
    } catch (err) {
        logger.error(`Помилка при створенні замовлення: ${err.message}`);
        throw new Error('ERR-101: Неможливо створити замовлення');
    }
}
