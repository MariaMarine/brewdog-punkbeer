global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import * as favouritesService from './favouritesService.js';
import * as DOMService from './DOMService.js';
import { updateSearchState } from './searchAndFilter';
import { initializeBeerList } from './infiniteScrollService.js'

DOMService.initiateDOMElements()
$('.container').children().hide();
$('#home').show();
// Create and scroll beer list
let $container;
initializeBeerList($container)


favouritesService.addToFavourites();
favouritesService.removeFromFavourites();

updateSearchState();