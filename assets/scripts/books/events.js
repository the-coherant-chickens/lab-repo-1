'use strict'

const api = require('./api')
const ui = require('./ui')

// shows all books
const onIndexBooks = event => {
  event.preventDefault()

  api.indexBooks()
    .then(ui.indexBooksSuccess)
    .catch(ui.indexBooksFail)
}

module.exports = {
  onIndexBooks
}
