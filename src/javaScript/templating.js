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

const createSingleBeerPage = (data) => {
  return `
  <div id ='single-beer-page-wrapper'>
  <div>
    <img src='${data.image_url}' alt='${data.name}'>
    </div>
    <div id='single-beer-data'>
    <p class='beer-id'>Beer № <span id='single-beer-id'>${data.id}</span></p>
    <p id='single-beer-name'><h1> ${data.name}</h1></p>
    <p id='single-beer-tagline'><h3>${data.tagline}</h3></p><br>
    <div class="btn-group-vertical" role="group">
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-flash left-icon"></span> ABV: ${data.abv}%</button>
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-tint left-icon"></span> EBC: ${data.ebc}</button>
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-grain left-icon"></span> IBU: ${data.ibu}</button>
      </div>
    <br>
    <p id='single-beer-description'>${data.description}</p>
    <p id='single-beer-food-pairing'><strong>Perfect with:</strong> ${data.food_pairing}</p>
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
  createFavouritesTemplate,
};
