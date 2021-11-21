import lightboxBackward from './lightboxBackward.js';
import lightboxForward from './lightboxForward.js';
import lightboxMediaPlay from './lightboxMediaPlay.js';

function lightboxNavigation(LIGHTBOX_DATA, START_ID, LIGHTBOX_MEDIA, LIGHTBOX_TITLE) {
    const LIGHTBOX_FORWARD = document.querySelector('.lightbox__forward');
    const LIGHTBOX_BACKWARD = document.querySelector('.lightbox__backward');
    let i = START_ID;

    i = lightboxForward(LIGHTBOX_FORWARD, LIGHTBOX_DATA, LIGHTBOX_MEDIA, LIGHTBOX_TITLE, i);
    i = lightboxBackward(LIGHTBOX_BACKWARD, LIGHTBOX_DATA, LIGHTBOX_MEDIA, LIGHTBOX_TITLE, i)
    lightboxMediaPlay();
}

export default lightboxNavigation;