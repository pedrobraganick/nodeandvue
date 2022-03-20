module.exports = () => {
    const bd = require('../repositories/saldo');
    const controller = {};
    controller.getSaldo = (req, res) => 
    {
        bd.getSaldo(req.query.login).then((rep) => {
            if(rep)
                res.status(200).json(rep)
            else
                res.status(204).json();
        })
    };
  
    return controller;
  }