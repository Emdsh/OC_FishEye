function popularitySort(TILES, LIKES) {
    LIKES = LIKES.map(like => Number.parseInt(like));
    const UNRANKED_LIKES = LIKES.slice();
    const RANKED_LIKES = LIKES.sort((a, b) => b - a);

    for(let i = 0; i < TILES.length; i += 1) {
        const index = UNRANKED_LIKES.findIndex(like => like === RANKED_LIKES[i]);

        TILES[index].style.order = i;
    }
}

export default popularitySort;