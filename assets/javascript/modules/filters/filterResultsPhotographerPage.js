function filterResultsPhotographerPage(filter, reset) {
    const PORTFOLIO_TILES = document.querySelectorAll('.portfolio__element');

    PORTFOLIO_TILES.forEach(tile => {
        tile.style.display = 'unset';

        if (reset === true) { return; }

        const TAG = tile.querySelector('.portfolio__element-tag');

        if(TAG.textContent !== filter) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsPhotographerPage;