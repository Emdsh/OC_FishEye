function filterResultsPhotographerPage(filter, reset) {
    const portfolioTiles = document.querySelectorAll('.portfolio__element');

    portfolioTiles.forEach(tile => {
        tile.style.display = 'block';

        if (reset === true) { return; }

        const tag = tile.querySelector('.portfolio__element-tag');

        if(tag.textContent !== filter) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsPhotographerPage;