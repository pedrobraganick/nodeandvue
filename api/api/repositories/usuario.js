const { connect } = require("../Infra/db");
const { insertSaldo } = require("./saldo");

async function insertUsuario(usuario){
    const client = await connect();
    const us = await existe(usuario.login)
    if(!us && usuario.login && usuario.senha){
        const sql = 'INSERT INTO usuario(nome,login,senha) VALUES ($1,$2,$3);';
        const values = [usuario.nome, usuario.login, usuario.senha];
        const novoCli = await client.query(sql, values);
        await insertSaldo(usuario.login)
        return novoCli;
    }
}

async function existe(usuario){
    const client = await connect();
    const us = await client.query('SELECT login FROM usuario where login = $1', [usuario]);
    if(us.rows[0] ){
        return us.rows[0];
    }
}

module.exports = {insertUsuario, existe}