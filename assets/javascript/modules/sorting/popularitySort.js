function popularitySort(TILES, LIKES, mainPortfolio) {
    LIKES = LIKES.map(like => Number.parseInt(like));
    const UNRANKED_LIKES = LIKES.slice();
    const RANKED_LIKES = LIKES.sort((a, b) => b - a);

    const RANKED_TILES = [];
    
    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_LIKES.findIndex(like => like === RANKED_LIKES[i]);
        UNRANKED_LIKES[index] = -1;
        RANKED_TILES.push(TILES[index]);
    }

    return RANKED_TILES;
}

export default popularitySort;