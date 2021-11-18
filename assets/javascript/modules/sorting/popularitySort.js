function popularitySort(TILES, LIKES) {
    for(let i = 0; i < TILES.length; i += 1) {
        const index = LIKES.findIndex(max => max == Math.max(...LIKES));
        LIKES.splice(index, 1, "-1");
        
        TILES[index].style.order = i;
    }
}

export default popularitySort;