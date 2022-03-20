const { connect } = require("../Infra/db");

async function insertSaldo(login){
    const client = await connect();
    const sql = 'INSERT INTO saldo(login, saldo) VALUES ($1,$2);';
    const values = [login, 100];
    return await client.query(sql, values);
}

async function AlterarSlado(login, saldo){
    const client = await connect();
    const sql = 'UPDATE saldo set saldo = (saldo + $1) where login = $2';
    const values = [saldo, login];
    return await client.query(sql, values);
}

async function getSaldo(login){
    const client = await connect();
    const us = await client.query('SELECT login, saldo FROM saldo where login = $1', [login]);
    if(us.rows[0]){
        return us.rows[0];
    }
}

module.exports = {insertSaldo, AlterarSlado, getSaldo}