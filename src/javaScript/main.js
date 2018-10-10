global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import {
  state
} from './state.js';

// Create and scroll beer list

const createBeerTemplate = (data) => {
  return `
        <div id=${data.id} class="col-sm-4 beerThumbnail">
        <div class="panel panel-success">
          <div class="panel-heading">${data.id}</div>
          <div class="panel-body"><img src="${data.image_url}" class="img-responsive"  alt="${data.name}"></div>
          <div class="panel-footer"><strong>${data.name}</strong></div>
        </div>
        </div>
        `;
};
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
$('#collection-container').hide();
$('#beer-single-page').hide();


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

//to become a separate module
const createSingleBeerPage = (clickedOnBeerData) => {
  return `
  <div id ='single-beer-page-wrapper'>
  <div id ='single-beer-image'>
    <img src='${clickedOnBeerData.image_url}' alt='${clickedOnBeerData.name}'>
  </div>
  <div id='single-beer-data'>
    <p>id: <span id='single-beer-id'>${clickedOnBeerData.id}</span></p>
    <p id='single-beer-name'>${clickedOnBeerData.name}</p>
    <p id='single-beer-tagline'>${clickedOnBeerData.tagline}</p>
    <p id='single-beer-description'>${clickedOnBeerData.description}</p>
    <p id='single-beer-food-pairing'><strong>Perfect with:</strong>${clickedOnBeerData.food_pairing}</p>
    <ul id='brew-specifications'>
      <li id='alcohol-percentage'><strong>ABV:</strong>${clickedOnBeerData.abv}</li>
      <li id='beer-color'><strong>EBC:</strong>${clickedOnBeerData.ebc}</li>
      <li id='beer-hoppyness'><strong>IBU:</strong>${clickedOnBeerData.ibu}</li>
    </ul>
    <button id='add-to-favs-button'>Add to favourites</button>
  </div>
  `;
};


const displayOneBeer = (id) => {
  $.get('https://api.punkapi.com/v2/beers/' + id, function (data) {
    $('#beer-single-page').html(
      createSingleBeerPage(data[0])
    )
  })
};

// display beer list
$('#linkToCatalogue').on('click', () => {
  $('.container').children().hide();
  $('#collection-container').show();
})
// display one beer by id
$('#collection-container').on('click', '.beerThumbnail', function () {
  let beerId = this.id;
  $('#collection-container').hide();
  $('#beer-single-page').show();
  displayOneBeer(beerId);
});
// display random beer
$('#random').click(function () {
  $.get('https://api.punkapi.com/v2/beers/random', function (data, status) {
    $('#collection-container').hide();
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
  }); //check for duplicates
  saveItem('favourites', favourites);
  console.log(favourites);
});