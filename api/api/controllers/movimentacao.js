module.exports = () => {
    const bd = require('../repositories/movimentacao');
    const controller = {};
    controller.create = (req, res) => 
    {

        bd.insertMovimentacao(req.body).then((rep) => {
            if(rep)
                res.status(200).json(req.body)
            else
                res.status(204).json();
        })
    },
    controller.get = (req, res) => 
    {
        bd.getMovimentacao(req.query.login_origem).then((rep) => {
            if(rep)
                res.status(200).json(rep);
            else
                res.status(204).json();
        })
    };
  
    return controller;
  }