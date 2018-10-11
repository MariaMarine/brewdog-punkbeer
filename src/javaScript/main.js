global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import { state } from './state.js';
import { createBeerTemplate, createSingleBeerPage, createFavouritesTemplate } from'./templating.js';

// Create and scroll beer list

let $container = $('#collection-container').infiniteScroll({
  path: function () {
    return `https://api.punkapi.com/v2/beers?page=${state.pageNumber}&per_page=20`;
  },
  // load response as flat text
  responseType: 'json',
  status: '.scroll-status',
  history: false,
});
$container.on('load.infiniteScroll', function (event, data) {
  state.pageNumber += 1;
  // compile data into HTML
  const itemsHTML = data.map(createBeerTemplate).join('');
  // convert HTML string into elements
  const $items = $(itemsHTML);
  // append item elements
  $container.infiniteScroll('appendItems', $items);
});
//   // load initial page
$container.infiniteScroll('loadNextPage');
$('.container').children().hide();
$('#home').show();

//to become a separate module
let favourites = [];

const init = function () {
  if (!localStorage.getItem('favourites')) {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
  return JSON.parse(localStorage.getItem('favourites'));
}

const saveItem = function (itemName, value) {
  localStorage.setItem(itemName, JSON.stringify(value));
}

const getItem = function (itemName) {
  return JSON.parse(localStorage.getItem(itemName));
}
init();
favourites = getItem('favourites');

const displayOneBeer = (id) => {
  $.get('https://api.punkapi.com/v2/beers/' + id, function (data) {
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
    )
  })
};

<<<<<<< HEAD
// display home
const setHomeButton = () => {
$('#home').on('click', showHomepage);
};
const showHomepage = () => {
    $('body').css({"background-image": "url(../../home.jpg)", "background-size": "cover"});
=======
// display about
$('#home').on('click', function () {
  $.get('../../home.jpg', function (data, status) {
    $('#home-container').html(data)
    });
>>>>>>> 595c55e6adc3e55d9ebdb16331be2b40aeacf679
    $('.container').children().hide();
    $('#home-container').show();
  };
setHomeButton();
showHomepage();
// display beer list
$('#linkToCatalogue').on('click', () => {
  $('body').css({"background-image": "none"});
  $('.container').children().hide();
  $('#collection-container').show();
})
// display one beer by id
$('#collection-container').on('click', '.beerThumbnail', function () {
  let beerId = this.id;
  $('body').css({"background-image": "none"});
  $('.container').children().hide();
  $('#beer-single-page').show();
  displayOneBeer(beerId);
});
// display about

$('#about').on('click', function () {
  $.get('../../README.html', function (data, status) {
    $('#about-container').html(data)
    });
    $('.container').children().hide();
    $('#about-container').show();
});

// display random beer
$('#random').click(function () {
  $.get('https://api.punkapi.com/v2/beers/random', function (data, status) {
    $('body').css({"background-image": "none"});
    $('.container').children().hide();
    $('#beer-single-page').show();
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
    );
  });
});
// favorites
$('#beer-single-page').on('click', '#add-to-favs-button', function () {
  const favouriteBeer = ($('#single-beer-id').text());
  favourites.push({
    id: favouriteBeer
  }); 
  saveItem('favourites', favourites);
  console.log(favourites);
});

$('#linktoFavourites').on('click',  function () {
  const favSet = new Set();
  favourites = getItem('favourites');
    favourites.forEach (beer => {
    const beerid = beer.id;
    favSet.add(beerid);
    });
  const favBeers = Array.from(favSet);
  favBeers.forEach(id => {
    console.log (id);
    $.get('https://api.punkapi.com/v2/beers/' + id, function (data, status) {
      $('#favourites').append(
        createFavouritesTemplate(data[0])
      );
    });
  });
  $('#favourites').empty();
  $('.container').children().hide();
  $('#favourites').show();
});