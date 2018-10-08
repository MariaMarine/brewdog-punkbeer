
const createBeerTemplate = (data) => {
  return `
  <div>
    <img src='${data.image_url}' alt='${data.name}'>
  </div>
  <div id='beer-data'>
    <p><strong>id:</strong><span id='beer-id'> ${data.id}</span></p>
    <p><strong>name:</strong> ${data.name}</p>
    <p><strong>tagline:</strong> ${data.tagline}</p>
    <p><strong>first brewed:</strong> ${data.first_brewed}</p>
    <p><strong>description:</strong> ${data.description}</p>
    <p><strong>food pairing:</strong> ${data.food_pairing}</p>
  </div>
  `;
};

//to become a separate module
const createSingleBeerPage = (clickedOnBeerData) => {
  return `
  <div id ='single-beer-page-wrapper'>
  <div id ='single-beer-image'>
    <img src='${clickedOnBeerData.image_url}' alt='${clickedOnBeerData.name}'>
  </div>
  <div id='single-beer-data'>
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
  $('#random-beer-button').click(function() {
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('#beer').html(
        createBeerTemplate(data[0])
        );
      });
    });
  $('#beer').click(() => {
    console.log($('#beer-id').text());
    //random beer data, to be replaced with clicked-on beer data
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('#beer-single-page').html(
        createSingleBeerPage(data[0])
        );
      });
    });
    $('#beer-single-page').on('click','#add-to-favs-button', function() {
      console.log($('#single-beer-name').text());
    });
  });
