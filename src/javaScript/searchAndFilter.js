import { state } from './state.js';
import * as $ from 'jquery';

const createRequestUrl = (state) => {
    let requestUrl = `https://api.punkapi.com/v2/beers?`;

    if(state.name !== ''){
        requestUrl += `beer_name=${state.name}`
    }

    if(state.alcoholPercent !== 'all'){
        requestUrl += '&';
        if(state.alcoholPercent === 'normal'){
            requestUrl += `abv_lt=6`;
        } else if (state.alcoholPercent === 'strong'){
            requestUrl += `abv_lt=10&abv_gt=6`;
        }  else if (state.alcoholPercent === 'magical'){
            requestUrl += `abv_gt=10`;
        } 
    };
    
        if(state.colourIntensity !== 'all'){
            requestUrl += '&';
            if(state.colourIntensity === 'pale'){
                requestUrl += `ebc_lt=19`;
            } else if (state.colourIntensity === 'amberBrown'){
                requestUrl += `ebc_lt=49&ebc_gt=19`;
            }  else if (state.colourIntensity === 'dark'){
                requestUrl += `ebc_gt=49`;
            } 
        };

        if(state.hoppyness !== 'all'){
            requestUrl += '&';
                if(state.hoppyness === 'mild'){
                    requestUrl += `ibu_lt=19`;
                } else if (state.hoppyness === 'hoppy'){
                    requestUrl += `ibu_lt=59&ibu_gt=19`;
                }  else if (state.hoppyness === 'superHoppy'){
                    requestUrl += `ibu_gt=59`;
                } 
            }
    
        

return requestUrl;
};

const updateSearchState = () => {
    $('#searchButton').on('click', function(){
        state.name = $('#beerName').val();
        state.alcoholPercent = $('#alcoholSelect').val();
        state.colourIntensity = $('#colorSelect').val();
        state.hoppyness =  $('#hoppynessSelect').val();
        console.log(createRequestUrl(state));
        })
};



const clearAllFilters = () => {
    let urlForAllBeers = `https://api.punkapi.com/v2/beers?`;

    $('#clearButton').on('click', function(){
        state.name = $('#beerName').val('');
        state.alcoholPercent = $('#alcoholSelect').val('all');
        state.colourIntensity = $('#colorSelect').val('all');
        state.hoppyness =  $('#hoppynessSelect').val('all');
        console.log(urlForAllBeers);
    })
}




export { clearAllFilters };
export { updateSearchState };