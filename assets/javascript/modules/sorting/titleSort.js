function titleSort(TILES, TITLES, mainPortfolio) {
    TITLES = TITLES.map(title => title.toLowerCase());
    const UNRANKED_TITLES = TITLES.slice();
    const RANKED_TITLES = TITLES.sort((a, b) => a.localeCompare(b));

    const RANKED_TILES = [];
    
    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_TITLES.findIndex(title => title === RANKED_TITLES[i]);
        UNRANKED_TITLES[index] = -1;
        RANKED_TILES.push(TILES[index]);
    }

    return RANKED_TILES;
}

export default titleSort;