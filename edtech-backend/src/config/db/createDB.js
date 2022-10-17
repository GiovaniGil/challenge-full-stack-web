const {
  DB_NAME,
  DB_POOL_MIN,
  DB_POOL_MAX,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
} = require('../../config/databaseConfig');

const config = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    port: DB_PORT ,
    user: DB_USERNAME,
    password: DB_PASSWORD,
  },
  pool: {
    min: parseInt(DB_POOL_MIN),
    max: parseInt(DB_POOL_MAX),
  },
  migrations: {
    tableName: 'migrations',
    directory: __dirname + '/migrations',
  },
  seeds: {
    directory: __dirname + '/seeds',
  },
};

const knex = require('knex')(config); 
knex
  .raw(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
  .then(() => { console.log('created') })
  .catch((error) => { console.log(error) })
  .finally(() => { process.exit(0) })
