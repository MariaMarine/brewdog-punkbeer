import * as $ from 'jquery';
import { state } from './state.js';
import { initializeBeerList } from './infiniteScrollService.js';

$('.navbar').on('click','#search', function () {
    $('#filterContainer').css({'visibility':'visible'});
    $('#search')
        .html("<i class='glyphicon glyphicon-remove-circle'></i>")
        .attr("id", "close-search");

        $('body').on('keypress', function(event) {
           if(event.originalEvent.key === 'Enter') {
                updateSearchState();
                displayFilteredBeers();             
           }           
        });
 });

$('.navbar').on('click','#close-search', function () {
    $('#filterContainer').css({'visibility':'hidden'});
    $('#close-search')
        .html("Search")
        .attr("id", "search");
        setClearFiltersButton();

        $('body').off('keypress');
 });

const createRequestUrl = () => {
    let requestUrl = `https://api.punkapi.com/v2/beers?`;

    if (state.name !== '') {
        requestUrl += `beer_name=${state.name}`
    }

    if (state.alcoholPercent !== 'all') {
        requestUrl += '&';
        if (state.alcoholPercent === 'normal') {
            requestUrl += `abv_lt=6`;
        } else if (state.alcoholPercent === 'strong') {
            requestUrl += `abv_lt=10&abv_gt=6`;
        } else if (state.alcoholPercent === 'magical') {
            requestUrl += `abv_gt=10`;
        }
    };
    if (state.colourIntensity !== 'all') {
        requestUrl += '&';
        if (state.colourIntensity === 'pale') {
            requestUrl += `ebc_lt=19`;
        } else if (state.colourIntensity === 'amberBrown') {
            requestUrl += `ebc_lt=49&ebc_gt=19`;
        } else if (state.colourIntensity === 'dark') {
            requestUrl += `ebc_gt=49`;
        }
    };

    if (state.hoppyness !== 'all') {
        requestUrl += '&';
        if (state.hoppyness === 'mild') {
            requestUrl += `ibu_lt=19`;
        } else if (state.hoppyness === 'hoppy') {
            requestUrl += `ibu_lt=59&ibu_gt=19`;
        } else if (state.hoppyness === 'superHoppy') {
            requestUrl += `ibu_gt=59`;
        }
    }
    requestUrl += `&page=${state.pageNumber}`;
    
    return requestUrl;
};

const updateSearchState = () => {
    state.name = $('#beerName').val();
    state.alcoholPercent = $('#alcoholSelect').val();
    state.colourIntensity = $('#colorSelect').val();
    state.hoppyness = $('#hoppynessSelect').val();
    state.pageNumber = 1;
};

const setSearchButton = () => {
    $('#searchButton').on('click', function () {
        updateSearchState();
        displayFilteredBeers();
    });
};
const displayFilteredBeers = () => {
    // create page of beers
    $('#collection-container').empty();
    initializeBeerList(createRequestUrl);
    // show the page of beers
    $('body').css({
        'background-image': 'none'
    });
    $('.container').children().hide();
    $('#collection-container').show();
};


const setClearFiltersButton = () => {
    let urlForAllBeers = `https://api.punkapi.com/v2/beers?`;

    $('#clearButton').on('click', function () {
        // clear state
        state.name = $('#beerName').val('');
        state.alcoholPercent = $('#alcoholSelect').val('all');
        state.colourIntensity = $('#colorSelect').val('all');
        state.hoppyness = $('#hoppynessSelect').val('all');
    })
}




export {
    setClearFiltersButton,
    setSearchButton,
};
