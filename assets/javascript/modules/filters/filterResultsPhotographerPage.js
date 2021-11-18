function filterResultsPhotographerPage(filter, reset) {
    const PORTFOLIO_TILES = document.querySelectorAll('.portfolio__element');

    PORTFOLIO_TILES.forEach(tile => {
        tile.style.display = 'unset';

        if (reset === true) { return; }

        const TAGS = tile.querySelectorAll('.portfolio__element-tag');
        const MATCH = [];

        TAGS.forEach(tag => {
            if(tag.textContent === filter) {
                MATCH.push(true);
            }
            if(tag.textContent !== filter) {
                MATCH.push(false);
            }
        });

        const CHECKSUM = MATCH.reduce((a, b) => a || b);
        if(CHECKSUM === false) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsPhotographerPage;