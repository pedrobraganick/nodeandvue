async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        user: 'postgres',
        host: 'postgres',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
      });

    //apenas testando a conexão
    const client = await pool.connect();

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

module.exports = {connect}