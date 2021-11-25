function dateSort(tiles, dates) {
    dates = dates.map(date => new Date(date));
    const unrankedDates = dates.slice();
    const rankedDates = dates.sort((a, b) => b - a);

    const rankedTiles = [];
    
    for (let i = 0; i < tiles.length; i += 1) {
        const index = unrankedDates.findIndex(date => date === rankedDates[i]);
        unrankedDates[index] = -1;
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default dateSort;