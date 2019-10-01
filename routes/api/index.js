const api = require('express').Router();
const currTimestamp = require('./whoami');

api.use('/whoami', currTimestamp);


module.exports = api;