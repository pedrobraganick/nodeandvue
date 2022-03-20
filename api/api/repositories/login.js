const { connect } = require("../Infra/db");

async function logar(usuario){
    const client = await connect();
    const us = await client.query('SELECT login, senha,nome FROM usuario where login = $1 and senha = $2', [usuario.login, usuario.senha]);
    if(us.rows[0]){
        return us.rows[0];
    }
}

module.exports = {logar}