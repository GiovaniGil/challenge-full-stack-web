const mainDbConfig = require('./knexfile');
//console.log('mainDbConfig', mainDbConfig)

const knex = require('knex')(mainDbConfig);
//console.log('knex', knex)


module.exports = { knex }
