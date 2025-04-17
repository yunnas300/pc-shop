app.use((err, req, res, next) => {
    res.status(500).render('error', { message: 'Помилка сервера. Спробуйте пізніше.' });
});
