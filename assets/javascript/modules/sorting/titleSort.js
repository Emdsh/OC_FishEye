function titleSort(TILES, TITLES, mainPortfolio) {
    TITLES = TITLES.map(title => title.toLowerCase());
    const UNRANKED_TITLES = TITLES.slice();
    const RANKED_TITLES = TITLES.sort((a, b) => a.localeCompare(b));

    const RANKED_TILES = [];
    
    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_TITLES.findIndex(title => title === RANKED_TITLES[i]);

        RANKED_TILES.push(TILES[index]);
    }

    RANKED_TILES.forEach(tile => {
        mainPortfolio.insertAdjacentHTML('beforeend', tile.outerHTML);
    });
}

export default titleSort;