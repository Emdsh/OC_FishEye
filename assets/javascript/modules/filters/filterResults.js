import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, PATH, FILTERS) {
    const reset = toggleChecked(filter, FILTERS);

    if (PATH === '/') {
        filterResultsHomepage(filter, reset);
    }

    if (PATH === '/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;