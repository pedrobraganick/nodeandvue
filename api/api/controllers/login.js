const jwt = require('jsonwebtoken');
const { SECRET } = require('../secret');

module.exports = () => {
    const bd = require('../repositories/login');
    const controller = {};
    controller.login =  (req, res) => bd.logar(req.body).then(
        (rep) => {
            if(rep){
                const id = rep.login;
                const token = jwt.sign({id}, SECRET, {expiresIn: 300})
                res.status(200).json({auth: true, token: token, user: rep.nome});
            }
            else
                res.json({auth: false, token: null});
        }
    );
  
    return controller;
  }