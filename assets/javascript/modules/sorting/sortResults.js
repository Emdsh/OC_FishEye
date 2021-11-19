import loadConstants from '../../utils/loadConstants.js';
import popularitySort from './popularitySort.js';
import dateSort from './dateSort.js';
import titleSort from './titleSort.js';

function sortResults(sortBy) {
    const PORTFOLIO_TILES = document.querySelectorAll('.portfolio__element');
    const mainPortfolio = document.querySelector('main.portfolio');
    
    const LIKES = [];
    const DATES = [];
    const TITLES = [];

    PORTFOLIO_TILES.forEach(tile => {
        LIKES.push(tile.querySelector('.portfolio__element-likes').textContent);
        DATES.push(tile.querySelector('.portfolio__element-date').textContent);
        TITLES.push(tile.querySelector('.portfolio__element-title').textContent);
        tile.remove();
    });

    if (sortBy === 'popularity') {
        popularitySort(PORTFOLIO_TILES, LIKES, mainPortfolio);
    }

    if (sortBy === 'date') {
        dateSort(PORTFOLIO_TILES, DATES, mainPortfolio);
    }

    if (sortBy === 'title') {
        titleSort(PORTFOLIO_TILES, TITLES, mainPortfolio);
    }

    const { MODAL_BASICS, ignored, SORTER } = loadConstants('photographer');
    return { MODAL_BASICS, SORTER };
}

export default sortResults;