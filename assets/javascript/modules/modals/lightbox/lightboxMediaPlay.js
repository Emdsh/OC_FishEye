function lightboxMediaPlay(lightboxOpen) {
    function playMedia(event) {
        if (event.key === ' ') {
            const mediaElement = document.querySelector('.lightbox__media');
            if (mediaElement.tagName === 'VIDEO') {
                if (mediaElement.paused) {
                    return mediaElement.play();
                }
                if (mediaElement.play) {
                    return mediaElement.pause();
                }
            }
        }
    }

    if (lightboxOpen === true) {
        document.body.addEventListener('keydown', playMedia);
    }

    if(lightboxOpen === false) {
        document.body.removeEventListener('keydown', playMedia);
    }
}

export default lightboxMediaPlay;