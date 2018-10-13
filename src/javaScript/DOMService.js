import {
  createSingleBeerPage, createFavouritesTemplate,
} from './templating.js';
import { getItem } from './favouritesService.js';

const displayOneBeer = (id) => {
  $.get('https://api.punkapi.com/v2/beers/' + id, function(data) {
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
    );
  });
};
const setHomeButton = () => {
  $('#home').on('click', showHomepage);
};
const showHomepage = () => {
  $('body').css({
    'background-image': 'url(../../home.jpg)',
    'background-size': 'cover',
  });
  $('.container').children().hide();
  $('#home-container').show();
};
const setBeerCatalogueButton = () => {
  $('body').on('click', '.link-to-catalogue', () => {
    $('body').css({
      'background-image': 'none',
    });
    $('.container').children().hide();
    $('#collection-container').show();
  });
};
const setTumbnailAsButton = () => {
  $('#collection-container').on('click', '.beerThumbnail', function() {
    const beerId = this.id;
    $('body').css({
      'background-image': 'none',
    });
    $('.container').children().hide();
    $('#beer-single-page').show();
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
    });
  });
};

const displayFavouriteBeerInfo= () => {
  $('#favourites').on('click', '.panel-body', function() {
    const beerIDToShow = $($(this).parent().parent()).get(0).id;
    console.log(beerIDToShow);
    $('.container').children().hide();
    $('#beer-single-page').show();
    displayOneBeer(beerIDToShow);
  });
}

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

const displayEmptyFavouritesList = () => {
  $('#favourites').html(
    "<div class='row'><div class ='col-sm-4'><img src='src/images/empty_glass.jpg'></div><div class='col-sm-8'><h1>Your list of favourites is empty!</h1><h3><p class='link-to-catalogue display-cursor'>Browse our catalogue and find your favourite beer now.</p></h3><br><button type='button' class='btn btn-default random'>I'm feeling lucky!</button></div></div>");
  $('.container').children().hide();
  $('#favourites').show();
}

const setFavouritesButton = () => {
  $('#linktoFavourites').on('click', function() {
    $('body').css({
      'background-image': 'none',
    });
    const favSet = new Set();
    const favourites = getItem('favourites');
      favourites.forEach((beer) => {
      favSet.add(beer.id);
      });
    const uniqueFavouriteBeers = Array.from(favSet);
    if (uniqueFavouriteBeers.length === 0){
      displayEmptyFavouritesList();
    } else {
    uniqueFavouriteBeers.forEach((id) => {
      $('#favourites').empty();
      $.get('https://api.punkapi.com/v2/beers/' + id, function(data, status) {
        $('#favourites').append(
          createFavouritesTemplate(data[0])
        );
      });
    });
    $('.container').children().hide();
    $('#favourites').show();
  }
  });
};
// name to be changed to setFilterButton
const displayFilterButton = function(){
  $('#filterBeersButton').click(function(){
    $('.container').children().hide();
    $('body').css({
      'background-image': 'none',
    });
    $('#filterContainer').show();

  });
}



export {
  initiateDOMElements,
  displayOneBeer,
  setHomeButton,
  showHomepage,
  setBeerCatalogueButton,
  setTumbnailAsButton,
  setAboutButton,
  setRandomBeerButton,
  setFavouritesButton,
  displayFilterButton,
  displayEmptyFavouritesList
};


