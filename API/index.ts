const app = require('./src/app');
const port = process.env.PORT || 3200;

app.listen(port, async () => {
    console.log('Aplicação executando na porta ', port);
});
