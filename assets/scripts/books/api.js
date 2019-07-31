'use strict'

const config = require('../config')

const indexBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/ideas',
    method: 'GET'
  })
}

module.exports = {
  indexBooks
}
