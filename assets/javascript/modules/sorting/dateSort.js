function dateSort(TILES, DATES) {
    DATES = DATES.map(date => new Date(date));
    const UNRANKED_DATES = DATES.slice();
    const RANKED_DATES = DATES.sort((a, b) => b - a);
    
    for (let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_DATES.findIndex(date => date === RANKED_DATES[i]);

        TILES[index].style.order = i;
    }
}

export default dateSort;