const knex = require('knex')({client: sqlite3});

const knexConfig = require('../knexfile');

const environment = process.env.DB_ENV || 'dev';

module.exports = knex(knexConfig[environment]);
// module.exports = knex(knexConfig.development);

