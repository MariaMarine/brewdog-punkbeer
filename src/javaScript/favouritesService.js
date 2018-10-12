let favourites = [];
import { displayEmptyFavouritesList } from './DOMService.js';

const init = function() {
  if (!localStorage.getItem('favourites')) {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  };
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

const addToFavourites = () => {
    $('#beer-single-page').on('click', '#add-to-favs-button', function() {
      const favouriteBeer = ($('#single-beer-id').text());
      favourites.push({
        id: favouriteBeer,
      });
      saveItem('favourites', favourites);
    });
};
const removeFromFavourites = () => {
    $('#favourites').on('click', '#right-icon', function() {
      const beerBoxToRemove = $(this).parent().parent().parent();
      $(beerBoxToRemove).fadeOut();;
      const beerIDToRemove = $(beerBoxToRemove).get(0).id;
      favourites = getItem('favourites')
        .filter((beer) => beer.id !== beerIDToRemove);
      if (favourites.length === 0){
        displayEmptyFavouritesList();
      }
      saveItem('favourites', favourites);
    });
};

export {
    addToFavourites,
    removeFromFavourites,
    getItem,
  };
