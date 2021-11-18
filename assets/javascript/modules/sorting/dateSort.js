function dateSort(TILES, DATES) {
    const NUMBERS_FROM_DATES = DATES.map(item => item.replace(/\-/g,''));
    
    for (let i = 0; i < TILES.length; i += 1) {
        const index = NUMBERS_FROM_DATES.findIndex(max => max == Math.max(...NUMBERS_FROM_DATES));
        NUMBERS_FROM_DATES.splice(index, 1, "-1");

        TILES[index].style.order = i;
    }
}

export default dateSort;