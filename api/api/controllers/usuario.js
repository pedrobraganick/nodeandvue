module.exports = () => {
    const bd = require('../repositories/usuario');
    const controller = {};
    controller.create = (req, res) => 
    {
        bd.insertUsuario(req.body).then((rep) => {
            if(rep)
                res.status(200).json(req.body)
            else
                res.status(204).json();
        })
    },

    controller.existe = (req, res) => 
    {
        bd.existe(req.query.login).then((rep) => {
            if(rep)
                res.status(200).json(rep)
            else
                res.status(204).json();
        })
    };
  
    return controller;
  }