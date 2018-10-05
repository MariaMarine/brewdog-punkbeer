
const createBeerTemplate = (data) => {
  return `
  <div>
    <img src='${data.image_url}' alt='${data.name}'>
  </div>
  <div id='beer-data'>
    <p><strong>id:</strong> ${data.id}</p>
    <p><strong>name:</strong> ${data.name}</p>
    <p><strong>tagline:</strong> ${data.tagline}</p>
    <p><strong>first brewed:</strong> ${data.first_brewed}</p>
    <p><strong>description:</strong> ${data.description}</p>
    <p><strong>food pairing:</strong> ${data.food_pairing}</p>
  </div>
  `;
};

$(document).ready(function() {
  $('button').click(function() {
    $.get('https://api.punkapi.com/v2/beers/random', function(data, status) {
      $('#beer').html(
        createBeerTemplate(data[0])
        );
      });
    });
  });
