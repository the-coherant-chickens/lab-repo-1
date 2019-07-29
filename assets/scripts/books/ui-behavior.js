'use strict'

const store = require('../store')
const showVideosTemplate = require('../templates/video-listing.handlebars')

const indexBooksSuccess = responseData => {
  store.books = responseData.books

  const booksHtml = showVideosTemplate({ videos: store.videos })

  $('#books-index').append(videosHtml)
}

const indexBooksFail = function () {
  failureMessage('Cannot Load Videos')
}
