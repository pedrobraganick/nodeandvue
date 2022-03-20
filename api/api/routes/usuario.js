module.exports = app => {
    const controller = require('../controllers/usuario')();
  
    app.route('/api/v1/usuario')
      .post(controller.create);

      app.route('/api/v1/usuario')
      .get(controller.existe);
  }