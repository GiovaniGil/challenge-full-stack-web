const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_POOL_MIN, DB_POOL_MAX } = require('../../config/databaseConfig');

module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    multipleStatements: true,
    ssl: false
  },
  debug: false,
  pool: {
    min: parseInt(DB_POOL_MIN),
    max: parseInt(DB_POOL_MAX),
  },
  migrations: {
    tableName: '_knex_migrations',
    directory: __dirname + '/migrations',
  },
  seeds: {
    directory: __dirname + '/seeds',
  },
};
