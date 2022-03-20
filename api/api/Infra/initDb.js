const con = require("./db");

async function initDb(){
    CreateDataBase();

}

async function CreateDataBase(){
    var client = await con.connect();

    const res = await client.query("SELECT 1 FROM information_schema.tables WHERE  table_schema = 'public' AND    table_name   = 'usuario'")

    if(!res.rows[0]){

        await client.query("CREATE TABLE usuario (login varchar not null primary key, senha varchar not null, nome varchar null)");
    
        await client.query("CREATE TABLE saldo (login varchar not null primary key, saldo decimal(10,2) not null)")
    
        await client.query("CREATE TABLE movimentacao (id_transacao INT GENERATED ALWAYS AS IDENTITY primary key, data timestamp with time zone not null default now(), login_origem varchar not null, login_destino varchar not null, valor_transferido decimal(10,2) not null)")
    }


}

module.exports = {initDb}