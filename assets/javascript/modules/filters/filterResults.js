import toggleChecked from './toggleChecked.js';
import filterResultsHomepage from './filterResultsHomepage.js';
import filterResultsPhotographerPage from './filterResultsPhotographerPage.js';

function filterResults(filter, path, filters) {
    const reset = toggleChecked(filter, filters);

    if (path === '/BaptisteLizot_5_07902021_pre10112021/') {
        filterResultsHomepage(filter, reset);
    }

    if (path === '/BaptisteLizot_5_07902021_pre10112021/photographer/') {
        filterResultsPhotographerPage(filter, reset);
    }
}

export default filterResults;