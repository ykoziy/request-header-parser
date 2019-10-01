const api = require('express').Router();
const whoami = require('./whoami');

api.use('/whoami', whoami);


module.exports = api;