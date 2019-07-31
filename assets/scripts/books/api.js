'use strict'

const config = require('../config')
const store = require('../store')

const indexBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/ideas',
    method: 'GET',
  })
}

module.exports = {
  indexBooks
}
