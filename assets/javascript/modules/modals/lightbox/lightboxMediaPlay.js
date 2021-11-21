function lightboxMediaPlay() {
    window.addEventListener('keydown', event => {
        if (event.key === ' ') {
            const mediaElement = document.querySelector('.lightbox__media');
            if (mediaElement.tagName === 'VIDEO') {
                if (mediaElement.paused) {
                    return mediaElement.play();
                } else {
                    return mediaElement.pause();
                }
            }
        }
    });
}

export default lightboxMediaPlay;