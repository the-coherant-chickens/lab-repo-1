'use strict'

const store = require('../store')
const showBooksTemplate = require('../templates/book-listing.handlebars')


const successMessage = message => {
  $('#book-status').text(message).fadeIn(1000)
  $('#book-status').addClass('success')
  $('#book-status').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
  $('#book-status').text(message).fadeOut(3000)
}

const failureMessage = message => {
  $('#book-status').text(message)
  $('#book-status').addClass('failure')
  $('#book-status').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const indexBooksSuccess = responseData => {

  successMessage('Here ara ya books guyzzz!')
  store.books = responseData.books

  const booksHtml = showBooksTemplate({ books: store.books })

  $('#content').append(booksHtml)
}

const indexBooksFail = function () {
  failureMessage('Cannot Load Books')
}

const clearBooks = () => {
  successMessage('Be Gone Books!')

  $('#content').html('')
}

module.exports = {
  indexBooksSuccess,
  indexBooksFail,
  clearBooks
}
