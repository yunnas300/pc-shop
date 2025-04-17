class OrderError extends Error {
    constructor(message) {
        super(message);
        this.name = 'OrderError';
        this.code = 'ORD-001';
    }
}
module.exports = OrderError;
