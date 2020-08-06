import knex from 'knex';
import path from 'path';

//migrations - controlar a versão do banco de dados (estilo Git)

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

export default db;