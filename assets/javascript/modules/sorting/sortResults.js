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
    let RANKED_TILES = [];

    PORTFOLIO_TILES.forEach(tile => {
        LIKES.push(tile.querySelector('.portfolio__element-likes').textContent);
        DATES.push(tile.querySelector('.portfolio__element-date').textContent);
        TITLES.push(tile.querySelector('.portfolio__element-title').textContent);
        tile.remove();
    });

    if (sortBy === 'popularity') {
        RANKED_TILES = popularitySort(PORTFOLIO_TILES, LIKES, mainPortfolio);
    }

    if (sortBy === 'date') {
        RANKED_TILES = dateSort(PORTFOLIO_TILES, DATES, mainPortfolio);
    }

    if (sortBy === 'title') {
        RANKED_TILES = titleSort(PORTFOLIO_TILES, TITLES, mainPortfolio);
    }

    RANKED_TILES.forEach(tile => {
        mainPortfolio.insertAdjacentHTML('beforeend', tile.outerHTML);
    });

    const { MODAL_BASICS, ignored, SORTER, LIKES_BUTTONS } = loadConstants('photographer');
    return { MODAL_BASICS, SORTER, LIKES_BUTTONS };
}

export default sortResults;