global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import * as favouritesService from './favouritesService.js';
import * as DOMService from './DOMService.js';
import { setClearFiltersButton } from './searchAndFilter.js';
import { setSearchButton } from './searchAndFilter.js';


DOMService.initiateDOMElements();
$('.container').children().hide();
$('#home').show();


favouritesService.addToFavourites();
favouritesService.removeFromFavourites();
// nz za6to sa callnati. moje bi e test;
// updateSearchState();
// clearAllFilters();

setClearFiltersButton();
setSearchButton();
