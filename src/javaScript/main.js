// import $ from 'jquery';
global.jQuery = global.$ = require('jquery');

require('bootstrap');

const createBeerTemplate = (data) => {
  return `
  <div class="col-sm-4">
  <div class="panel panel-success">
    <div class="panel-heading">${data.id}</div>
    <div class="panel-body"><img src="${data.image_url}" class="img-responsive"  alt="${data.name}"></div>
    <div class="panel-footer">${data.name}</div>
  </div>
  </div>
  `;
};

console.log('poop');
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

$(document).ready(function() {
  $.get('https://api.punkapi.com/v2/beers/?per_page=24', function(data, status) {
    for(const beer of data) {
      $('.row').append(
        createBeerTemplate(beer)
        );
    }
  });
  $('#random').click(function() {
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('.row').hide();
      $('#random-beer').html(
        createBeerTemplate(data[0])
        );
      });
    });
  $('.container').click(() => {
    //random beer data, to be replaced with clicked-on beer data
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('#beer-single-page').html(
        createSingleBeerPage(data[0])
        );
      });
    });
    $('#beer-single-page').on('click','#add-to-favs-button', function() {
      const favouriteBeer = ($('#single-beer-id').text());
      favourites.push({id: favouriteBeer}); //check for duplicates
      saveItem ('favourites', favourites);
      console.log(favourites);
    });
  });
