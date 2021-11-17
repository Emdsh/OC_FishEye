function filterResultsHomepage(filter, reset) {
    const PHOTOGRAPHERS_TILES = document.querySelectorAll('.home-photographer');

    PHOTOGRAPHERS_TILES.forEach(tile => {
        tile.style.display = 'unset';

        if (reset === true) { return; }

        const TAGS = tile.querySelectorAll('.filter__option');
        const MATCH = [];

        TAGS.forEach(tag => {
            if (tag.name === filter) {
                MATCH.push(true);
            }
            if (tag.name !== filter) {
                MATCH.push(false);
            }
        });

        const CHECKSUM = MATCH.reduce((a, b) => a || b);
        if (CHECKSUM === false) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsHomepage;