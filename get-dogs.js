'use strict'

const axios = require("axios");

const sync = (url) => axios.get(url).then(response => response);

module.exports = sync;