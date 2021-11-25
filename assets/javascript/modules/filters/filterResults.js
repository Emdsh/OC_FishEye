import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, path, filters) {
    const reset = toggleChecked(filter, filters);

    if (path === '/') {
        filterResultsHomepage(filter, reset);
    }

    if (path === '/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;