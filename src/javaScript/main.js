global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('jquery-bridget');
require('infinite-scroll');
import * as DOMService from './DOMService.js';
import { setClearFiltersButton } from './searchAndFilter.js';
import { setSearchButton } from './searchAndFilter.js';

DOMService.initiateDOMElements();

setClearFiltersButton();
setSearchButton();
