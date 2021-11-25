function popularitySort(tiles, likes) {
    likes = likes.map(like => Number.parseInt(like));
    const unrankedLikes = likes.slice();
    const rankedLikes = likes.sort((a, b) => b - a);

    const rankedTiles = [];
    
    for(let i = 0; i < tiles.length; i += 1) {
        const index = unrankedLikes.findIndex(like => like === rankedLikes[i]);
        unrankedLikes[index] = -1;
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default popularitySort;