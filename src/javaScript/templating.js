const createBeerTemplate = (data) => {
  return `
        <div id=${data.id} class="col-sm-4 beerThumbnail">
        <div class="panel panel-default display-cursor">
          <div class="panel-heading"><p><strong>${data.name}</strong></p></div>
          <div class="panel-body">
            <div class="col-sm-6"><img src="${data.image_url}" class="img-responsive"  alt="${data.name}"></div>
            <div class="btn-group-vertical col-sm-6" role="group" id="object-position-1">
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-flash left-icon"></span> ABV: ${data.abv}%</button>
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-tint left-icon"></span> EBC: ${data.ebc}</button>
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-grain left-icon"></span> IBU: ${data.ibu}</button></div>
            </div>
          <div class="panel-footer">${data.tagline} <span id="right-icon" class="glyphicon glyphicon-chevron-right"></span></div>
        </div>
        </div>
        `;
};

const createSingleBeerPage = (clickedOnBeerData) => {
  return `
  <div id ='single-beer-page-wrapper'>
  <div>
    <img src='${clickedOnBeerData.image_url}' alt='${clickedOnBeerData.name}'>
    </div>
    <div id='single-beer-data'>
    <p class='beer-id'>Beer № <span id='single-beer-id'>${clickedOnBeerData.id}</span></p>
    <p id='single-beer-name'><h1> ${clickedOnBeerData.name}</h1></p>
    <p id='single-beer-tagline'><h3>${clickedOnBeerData.tagline}</h3></p><br>
    <div class="btn-group-vertical" role="group">
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-flash left-icon"></span> ABV: ${clickedOnBeerData.abv}%</button>
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-tint left-icon"></span> EBC: ${clickedOnBeerData.ebc}</button>
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-grain left-icon"></span> IBU: ${clickedOnBeerData.ibu}</button>
      </div>
    <br>
    <p id='single-beer-description'>${clickedOnBeerData.description}</p>
    <p id='single-beer-food-pairing'><strong>Perfect with:</strong> ${clickedOnBeerData.food_pairing}</p>
    <button id='add-to-favs-button' type="button" class="btn btn-default"><span class="glyphicon glyphicon-heart left-icon"></span> Add to favourites</button>
  </div>
  `;
};

const createFavouritesTemplate = (data) => {
  return `
      <div id=${data.id} class="col-sm-4 beerThumbnail">
      <div class="panel panel-default">
        <div id="remove-beer" class="panel-footer"><strong>${data.name}</strong>
          <span id="right-icon" class="glyphicon glyphicon-remove"></span></div>
        <div id ="fav-beer-body" class="panel-body display-cursor">
        <div class="col-sm-6"><img src="${data.image_url}" class="img-responsive"  alt="${data.name}"></div>
            <div class="btn-group-vertical col-sm-6" role="group" id="object-position-1">
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-flash left-icon"></span> ABV: ${data.abv}%</button>
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-tint left-icon"></span> EBC: ${data.ebc}</button>
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-grain left-icon"></span> IBU: ${data.ibu}</button></div>
        </div>
        </div>
        `;
};

export {
  createBeerTemplate,
  createSingleBeerPage,
  createFavouritesTemplate
};