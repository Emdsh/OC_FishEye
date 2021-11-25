function titleSort(tiles, titles) {
    titles = titles.map(title => title.toLowerCase());
    const unrankedTitles = titles.slice();
    const rankedTitles = titles.sort((a, b) => a.localeCompare(b));

    const rankedTiles = [];
    
    for(let i = 0; i < tiles.length; i += 1) {
        const index = unrankedTitles.findIndex(title => title === rankedTitles[i]);
        unrankedTitles[index] = -1;
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default titleSort;