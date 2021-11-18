function titleSort(TILES, TITLES) {
    const UNRANKED_TITLES = TITLES.slice();
    const RANKED_TITLES = TITLES.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_TITLES.findIndex(title => title === RANKED_TITLES[i]);
        UNRANKED_TITLES.splice(index, 1, "");

        TILES[index].style.order = i;
    }
}

export default titleSort;