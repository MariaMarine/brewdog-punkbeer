import { createSingleBeerPage, createFavouritesTemplate } from './templating.js';

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

const displayFavourites = () => {
  $('#linktoFavourites').on('click', function () {
    $('body').css({
      "background-image": "none"
    });
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
}

const addToFavourites = () => {
$('#beer-single-page').on('click', '#add-to-favs-button', function () {
  const favouriteBeer = ($('#single-beer-id').text());
  favourites.push({
    id: favouriteBeer
  });
  saveItem('favourites', favourites);
  console.log(favourites);
});
}

const removeFromFavourites = () => {

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
}
export {
  displayOneBeer,
  setHomeButton,
  showHomepage,
  displayBeerList,
  displayOneBeerById,
  displayAbout,
  displayRandomBeer, 
  displayFavourites,
  addToFavourites, 
  removeFromFavourites
}