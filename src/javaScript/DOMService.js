import {
  createSingleBeerPage, createFavouritesTemplate,
} from './templating.js';
import { initializeBeerList } from './infiniteScrollService.js'
import { getItem, isInFavouritesList } from './favouritesService.js';

let $container;
const setBeerCatalogueButton = () => {
  $('body').on('click', '.link-to-catalogue', () => {
    initializeBeerList($container)
    $('body').css({
      'background-image': 'none',
    });
    $('.container').children().hide();
    $('#collection-container').show();
  });
};
const displayOneBeer = (id) => {
  $.get('https://api.punkapi.com/v2/beers/' + id, function(data) {
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
      );
      $('#beer-single-page').show();
      addFavouriteListButton(data);
  });
};
const addFavouriteListButton = (data) => {
  if (isInFavouritesList(data)) {
    $('#single-beer-food-pairing')
      .after('<button id=\'remove-from-favs-button\' type=\'button\' class=\'btn btn-default\'><span class=\'glyphicon glyphicon-remove left-icon\'></span> Remove from favourites</button>');
  } else {
    $('#single-beer-food-pairing')
      .after('<button id=\'add-to-favs-button\' type=\'button\' class=\'btn btn-default\'><span class=\'glyphicon glyphicon-heart left-icon\'></span> Add to favourites</button>');
  }
};
const setHomeButton = () => {
  $('.home').on('click', showHomepage);
};
const showHomepage = () => {
  $('body').css({
    'background-image': 'url(src/images/home.jpg)',
    'background-size': 'cover',
  });
  $('.container').children().hide();
  $('#home-container').show();
};
const setTumbnailAsButton = () => {
  $('#collection-container').on('click', '.beerThumbnail', function() {
    const beerId = this.id;
    $('body').css({
      'background-image': 'none',
    });
    $('.container').children().hide();
    displayOneBeer(beerId);
  });
};
const setAboutButton = () => {
  $('#about').on('click', function() {
    $('body').css({
      'background-image': 'none',
    });
    $.get('../../README.html', function(data, status) {
      $('#about-container').html(data);
    });
    $('.container').children().hide();
    $('#about-container').show();
  });
};
const setRandomBeerButton = () => {
  $('body').on('click', '.random', function() {
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('body').css({
        'background-image': 'none',
      });
      $('.container').children().hide();
      $('#beer-single-page').show();
      $('#beer-single-page').html(
        createSingleBeerPage(data[0])
      );
      addFavouriteListButton(data);
    });
  });
};
const displayFavouriteBeerInfo= () => {
  $('#favourites').on('click', '.panel-body', function() {
    const beerIDToShow = $($(this).parent().parent()).get(0).id;
    $('.container').children().hide();
    displayOneBeer(beerIDToShow);
  });
};

const initiateDOMElements = () => {
  setHomeButton();
  showHomepage();
  setBeerCatalogueButton();
  setTumbnailAsButton();
  setAboutButton();
  setRandomBeerButton();
  setFavouritesButton();
  displayFilterButton();
  displayFavouriteBeerInfo();
};

const displayFavourites = (beers) => {
  $('#favourites').empty();
  beers.forEach((id) => {
    $.get('https://api.punkapi.com/v2/beers/' + id, function(data, status) {
      $('#favourites').append(
        createFavouritesTemplate(data[0])
      );
    });
  });
  $('.container').children().hide();
  $('#favourites').show();
};

const displayEmptyFavouritesList = () => {
  $('#favourites').html(
    '<div class=\'row\'><div class =\'col-sm-4\'><img src=\'src/images/empty_glass.jpg\'></div><div class=\'col-sm-8\'><h1>Your list of favourites is empty!</h1><h3><p class=\'link-to-catalogue display-cursor\'>Browse our catalogue and find your favourite beer now.</p></h3><br><button type=\'button\' class=\'btn btn-default random\'>I\'m feeling lucky!</button></div></div>');
  $('.container').children().hide();
  $('#favourites').show();
};
const setFavouritesButton = () => {
  $('#linktoFavourites').on('click', function() {
    $('body').css({
      'background-image': 'none',
    });
    const favourites = getItem('favourites').map((fav) => fav.id);
    if (favourites.length === 0) {
      displayEmptyFavouritesList();
    } else {
      displayFavourites(favourites);
    }
  });
};
// name to be changed to setFilterButton
const displayFilterButton = function() {
  $('#filterBeersButton').click(function() {

    $('body').css({
      'background-image': 'none',
    });
    $('.container').children().hide();
    $('#collection-container').show();
    $('#filterContainer').show();
  });
};
export {
  initiateDOMElements,
  // displayOneBeer,
  // setHomeButton,
  // showHomepage,
  // setBeerCatalogueButton,
  // setTumbnailAsButton,
  // setAboutButton,
  // setRandomBeerButton,
  // setFavouritesButton,
  // displayFilterButton,
  displayEmptyFavouritesList
};
