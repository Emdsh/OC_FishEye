function filterResultsHomepage(filter, reset) {
    const photographerTiles = document.querySelectorAll('.home-photographer');

    photographerTiles.forEach(tile => {
        tile.style.display = 'block';

        if (reset === true) { return; }

        const tags = tile.querySelectorAll('.filter__option');
        const match = [];

        tags.forEach(tag => {
            if (tag.name === filter) {
                match.push(true);
            }
            if (tag.name !== filter) {
                match.push(false);
            }
        });

        const checksum = match.reduce((a, b) => a || b);
        if (checksum === false) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsHomepage;