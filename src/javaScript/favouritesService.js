let favourites = [];
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
      console.log(favourites);
    });
};

const removeFromFavourites = () => {
    $('#favourites').on('click', '#remove-beer', function() {
      const beerBoxToRemove = $(this).parent().parent();
      $(beerBoxToRemove).remove();
      const beerIDToRemove = $(beerBoxToRemove).get(0).id;
      console.log(beerIDToRemove);
      favourites = getItem('favourites')
        .filter((beer) => beer.id !== beerIDToRemove);
      saveItem('favourites', favourites);
      console.log(favourites);
    });
};

export {
    addToFavourites,
    removeFromFavourites,
    getItem,
  };
