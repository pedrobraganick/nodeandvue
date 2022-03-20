
const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const cors        = require('cors')

module.exports = () => {
  const app = express();
  app.use(cors())
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());

  //routs
  require('../api/routes/login')(app);
  require('../api/routes/usuario')(app);
  require('../api/routes/movimentacao')(app);
  require('../api/routes/saldo')(app);

  return app;
};