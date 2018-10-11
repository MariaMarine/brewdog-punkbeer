import { createSingleBeerPage } from './templating.js';

const displayOneBeer = (id) => {
  $.get('https://api.punkapi.com/v2/beers/' + id, function (data) {
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
    )
  })
};
const setHomeButton = () => {
  $('#home').on('click', showHomepage);
};
const showHomepage = () => {
  $('body').css({
    "background-image": "url(../../home.jpg)",
    "background-size": "cover"
  });
  $('.container').children().hide();
  $('#home-container').show();
};
const displayBeerList = () => {
  $('#linkToCatalogue').on('click', () => {
    $('body').css({
      "background-image": "none"
    });
    $('.container').children().hide();
    $('#collection-container').show();
  })
};
const displayOneBeerById = () => {
  $('#collection-container').on('click', '.beerThumbnail', function () {
    let beerId = this.id;
    $('body').css({
      "background-image": "none"
    });
    $('.container').children().hide();
    $('#beer-single-page').show();
    displayOneBeer(beerId);
  })
};
const displayAbout = () => {
  $('#about').on('click', function () {
    $('body').css({
      "background-image": "none"
    });
    $.get('../../README.html', function (data, status) {
      $('#about-container').html(data)
    });
    $('.container').children().hide();
    $('#about-container').show();
  })
};
const displayRandomBeer = () => {
  $('#random').click(function () {
    $.get('https://api.punkapi.com/v2/beers/random', function (data, status) {
      $('body').css({
        "background-image": "none"
      });
      $('.container').children().hide();
      $('#beer-single-page').show();
      $('#beer-single-page').html(
        createSingleBeerPage(data[0])
      );
    });
  });
};

export {
  displayOneBeer,
  setHomeButton,
  showHomepage,
  displayBeerList,
  displayOneBeerById,
  displayAbout,
  displayRandomBeer,
}