function sumLikes(media, photographerId) {
    const photographerLikes = [];

    media.forEach(m => {
        if(m.photographerId === photographerId) {
            photographerLikes.push(m.likes||0);
        }
    })

    return photographerLikes.reduce((a, b) => a + b);
}

export default sumLikes;