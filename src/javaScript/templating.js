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

const createSingleBeerPage = (clickedOnBeerData) => {
  return `
  <div id ='single-beer-page-wrapper'>
  <div>
    <img src='${clickedOnBeerData.image_url}' alt='${clickedOnBeerData.name}'>
    </div>
    <div id='single-beer-data'>
    <p>ID: <span id='single-beer-id'>${clickedOnBeerData.id}</span></p>
    <p  id='single-beer-name'><strong>Name: </strong> ${clickedOnBeerData.name}</p>
    <p id='single-beer-tagline'>${clickedOnBeerData.tagline}</p>
    <p id='single-beer-description'><strong>Description:</strong> <br>${clickedOnBeerData.description}</p>
    <p id='single-beer-food-pairing'><strong>Perfect with:<br></strong>${clickedOnBeerData.food_pairing}</p>
    <ul id='brew-specifications'>
      <li id='alcohol-percentage'><strong>ABV:</strong>${clickedOnBeerData.abv}</li>
      <li id='beer-color'><strong>EBC:</strong>${clickedOnBeerData.ebc}</li>
      <li id='beer-hoppyness'><strong>IBU:</strong>${clickedOnBeerData.ibu}</li>
    </ul>
    <button id='add-to-favs-button'>Add to favourites</button>
  </div>
  `;
};

export {
  createBeerTemplate,
  createSingleBeerPage,
};