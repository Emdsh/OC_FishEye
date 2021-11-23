import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, PATH, FILTERS) {
    const reset = toggleChecked(filter, FILTERS);

    if (PATH === '/OC_FishEye/') {
        filterResultsHomepage(filter, reset);
    }

    if (PATH === '/OC_FishEye/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;