import popularitySort from './popularitySort.js';
import dateSort from './dateSort.js';
import titleSort from './titleSort.js';

function sortResults(sortBy) {
    const PORTFOLIO_TILES = document.querySelectorAll('.portfolio__element');
    
    const LIKES = [];
    const DATES = [];
    const TITLES = [];

    PORTFOLIO_TILES.forEach(tile => {
        LIKES.push(tile.querySelector('.portfolio__element-likes').textContent);
        DATES.push(tile.querySelector('.portfolio__element-date').textContent);
        TITLES.push(tile.querySelector('.portfolio__element-title').textContent);
    });

    if (sortBy === 'popularity') {
        popularitySort(PORTFOLIO_TILES, LIKES);
    }

    if (sortBy === 'date') {
        dateSort(PORTFOLIO_TILES, DATES);
    }

    if (sortBy === 'title') {
        titleSort(PORTFOLIO_TILES, TITLES);
    }
}

export default sortResults;