function dateSort(TILES, DATES, mainPortfolio) {
    DATES = DATES.map(date => new Date(date));
    const UNRANKED_DATES = DATES.slice();
    const RANKED_DATES = DATES.sort((a, b) => b - a);

    const RANKED_TILES = [];
    
    for (let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_DATES.findIndex(date => date === RANKED_DATES[i]);
        UNRANKED_DATES[index] = -1;
        RANKED_TILES.push(TILES[index]);
    }

    RANKED_TILES.forEach(tile => {
        mainPortfolio.insertAdjacentHTML('beforeend', tile.outerHTML);
    });
}

export default dateSort;