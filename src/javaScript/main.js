global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import * as favouritesService from './favouritesService.js';
import * as DOMService from './DOMService.js';
import { updateSearchState } from './searchAndFilter.js';
import { clearAllFilters } from './searchAndFilter.js';


DOMService.initiateDOMElements()
$('.container').children().hide();
$('#home').show();


favouritesService.addToFavourites();
favouritesService.removeFromFavourites();

updateSearchState();
clearAllFilters();
