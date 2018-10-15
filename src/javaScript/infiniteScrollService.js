import { state } from './state.js';
import { createBeerTemplate } from './templating.js';

const initializeBeerList = (callback) => {
  state.pageNumber = 1;

  const buildInitialRequest = () => {
    return `https://api.punkapi.com/v2/beers?page=${state.pageNumber}&per_page=20`;
  };

  const buildRequestURL = callback || buildInitialRequest;

  $('#collection-container').replaceWith('<div id="collection-container" class="row"></div>');

  const $container = $('#collection-container').infiniteScroll({
    path: buildRequestURL,
    responseType: 'json',
    status: '.scroll-status',
    history: false
  });
  $container.on('load.infiniteScroll', function(event, data) {
    state.pageNumber += 1;
    // compile data into HTML
    const itemsHTML = data.map(createBeerTemplate).join('');
    // convert HTML string into elements
    const $items = $(itemsHTML);
    // append item elements
    $container.infiniteScroll('appendItems', $items);
  });
    // load initial page
  $container.infiniteScroll('loadNextPage');
  }

export { initializeBeerList };