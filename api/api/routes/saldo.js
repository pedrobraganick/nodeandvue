module.exports = app => {
    const controller = require('../controllers/saldo')();
  
    app.route('/api/v1/saldo')
      .get(controller.getSaldo);
  }