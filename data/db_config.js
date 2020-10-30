const knex = require('knex');

const config = require('../knexfile.js');

const env = process.env.ENV || 'development';

const db = knex(config[env]);

module.exports = db;