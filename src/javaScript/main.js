global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import { state } from './state.js';
import { createBeerTemplate } from './templating.js';
import * as favouritesService from './favouritesService.js';
import * as DOMService from './DOMService.js';

// Create and scroll beer list

const $container = $('#collection-container').infiniteScroll({
  path: function() {
    return `https://api.punkapi.com/v2/beers?page=${state.pageNumber}&per_page=20`;
  },
  // load response as flat text
  responseType: 'json',
  status: '.scroll-status',
  history: false,
});
$container.on('load.infiniteScroll', function(event, data) {
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

// display home

  DOMService.setHomeButton();
  DOMService.showHomepage();
// display beer list

DOMService.displayBeerList();
// display one beer by id

DOMService.displayOneBeerById();
// display about

DOMService.displayAbout();
// display random beer

DOMService.displayRandomBeer();
// display favourites

DOMService.displayFavourites();
// favorites

favouritesService.addToFavourites();
favouritesService.removeFromFavourites();
