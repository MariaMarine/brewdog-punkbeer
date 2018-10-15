import { displayEmptyFavouritesList } from './DOMService.js';
let favourites = [];

const init = function() {
  if (!localStorage.getItem('favourites')) {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
  return JSON.parse(localStorage.getItem('favourites'));
};
const saveItem = function(itemName, value) {
  localStorage.setItem(itemName, JSON.stringify(value));
};
const getItem = function(itemName) {
  return JSON.parse(localStorage.getItem(itemName));
};
init();
favourites = getItem('favourites');

const isInFavouritesList = (data) => {
  favourites = getItem('favourites');
  return favourites.map((beer) => +beer.id).includes(data[0].id);
};

const addToFavourites = () => {
    $('#beer-single-page').on('click', '#add-to-favs-button', function() {
      const favouriteBeer = ($('#single-beer-id').text());
      favourites.push({
        id: favouriteBeer,
      });
      saveItem('favourites', favourites);
      $('#add-to-favs-button')
        .html('<span class=\'glyphicon glyphicon-remove left-icon\'></span> Remove from favourites')
        .attr('id', 'remove-from-favs-button');
    });
};

const removeFromFavourites = (id) => {
  favourites = getItem('favourites')
    .filter((beer) => beer.id !== id);
  saveItem('favourites', favourites);
  return favourites;
};

const removeFromFavouritesPage = () => {
    $('#favourites').on('click', '#right-icon', function() {
      event.stopPropagation();
      const beerBoxToRemove = $(this).parent().parent().parent();
      $(beerBoxToRemove).fadeOut();
      const beerIDToRemove = $(beerBoxToRemove).get(0).id;
      const updatedFavs = removeFromFavourites(beerIDToRemove);
      if (updatedFavs.length === 0) {
        displayEmptyFavouritesList();
      }
    });
};

const removeFavouriteFromSinglePageView = () => {
  $('#beer-single-page').on('click', '#remove-from-favs-button', function() {
    $('#remove-from-favs-button')
      .html('<span class=\'glyphicon glyphicon-heart left-icon\'></span> Add to favourites')
      .attr('id', 'add-to-favs-button');
      const idToRemove = ($('#single-beer-id').text());
      removeFromFavourites(idToRemove);
  });
};
export {
    addToFavourites,
    isInFavouritesList,
    removeFromFavouritesPage,
    removeFavouriteFromSinglePageView,
    getItem,
  };
