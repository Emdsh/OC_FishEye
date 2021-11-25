import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, path, filters) {
    // check if the filter needs to be reset
    const reset = toggleChecked(filter, filters);

    if (path === '/OC_FishEye/') {
        filterResultsHomepage(filter, reset);
    }

    if (path === '/OC_FishEye/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;