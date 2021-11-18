function titleSort(TILES, TITLES) {
    TITLES = TITLES.map(title => title.toLowerCase());
    const UNRANKED_TITLES = TITLES.slice();
    const RANKED_TITLES = TITLES.sort((a, b) => a.localeCompare(b));

    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_TITLES.findIndex(title => title === RANKED_TITLES[i]);

        TILES[index].style.order = i;
    }
}

export default titleSort;