import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, PATH, FILTERS) {
    const reset = toggleChecked(filter, FILTERS);

    if (PATH === '/BaptisteLizot_5_07902021_pre10112021/') {
        filterResultsHomepage(filter, reset);
    }

    if (PATH === '/BaptisteLizot_5_07902021_pre10112021/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;