global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import { state } from './state.js';
import { createBeerTemplate, createFavouritesTemplate } from'./templating.js';
import * as DOMService from './DOMService.js'

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



// display home

  DOMService.setHomeButton();
  DOMService.showHomepage();
// display beer list

DOMService.displayBeerList();
// display one beer by id

DOMService.displayOneBeerById()
// display about

DOMService.displayAbout();
// display random beer

DOMService.displayRandomBeer();
// favorites
$('#beer-single-page').on('click', '#add-to-favs-button', function () {
  const favouriteBeer = ($('#single-beer-id').text());
  favourites.push({
    id: favouriteBeer
  });
  saveItem('favourites', favourites);
  console.log(favourites);
});

$('#li  nktoFavourites').on('click',  function () {
  const favSet = new Set();
  favourites = getItem('favourites');
    favourites.forEach (beer => {
    const beerid = beer.id;
    favSet.add(beerid);
    });
  const favBeers = Array.from(favSet);
  favBeers.forEach(id => {
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

$('#favourites').on('click', "#remove-beer", function (){
  const beerBoxToRemove = $(this).parent().parent();
  $(beerBoxToRemove).remove();
  const beerIDToRemove = $(beerBoxToRemove).get(0).id;
  console.log(beerIDToRemove);
  favourites = getItem('favourites')
    .filter(beer => beer.id !== beerIDToRemove);
  saveItem('favourites', favourites);
  console.log(favourites);

  
});