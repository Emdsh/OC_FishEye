function popularitySort(TILES, LIKES) {
    for(let i = 0; i < TILES.length; i += 1) {
        const max = Math.max(...LIKES);

        if (max === -1) { return; }

        const index = LIKES.indexOf(`${max}`);
        LIKES.splice(index, 1, "-1");

        TILES[index].style.order = i;
    }
}

export default popularitySort;