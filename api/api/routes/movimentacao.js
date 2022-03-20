module.exports = app => {
    const controller = require('../controllers/movimentacao')();
  
    app.route('/api/v1/movimentacao')
      .post(controller.create);

    app.route('/api/v1/movimentacao')
      .get(controller.get);
  }