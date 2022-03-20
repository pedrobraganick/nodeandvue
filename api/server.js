const app = require('./config/express')();
const port = app.get('port');
const db = require('./api/Infra/initDb')


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
  db.initDb();
});