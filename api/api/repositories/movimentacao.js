const { connect } = require("../Infra/db");
const { AlterarSlado } = require("./saldo");

async function insertMovimentacao(movimentacao){
    if(!movimentacao || !movimentacao.valor || movimentacao.valor < 0)
        return;

    const client = await connect();
    const sql = 'INSERT INTO movimentacao (login_origem, login_destino, valor_transferido) VALUES ($1, $2, $3)';
    const values = [movimentacao.login_origem, movimentacao.login_destino, movimentacao.valor];
    const mov =  await client.query(sql, values);
    await AlterarSlado(movimentacao.login_origem, (-1) * movimentacao.valor)
    await AlterarSlado(movimentacao.login_destino, movimentacao.valor)
    return mov;

}

async function getMovimentacao(login_origem){
    if(!login_origem)
        return;

    const client = await connect();
    const sql = 'SELECT * FROM movimentacao WHERE login_origem = $1';
    const values = [login_origem];
    const mov =  await client.query(sql, values);
    if(mov.rows)
        return mov.rows;
    

}

module.exports = {insertMovimentacao, getMovimentacao}