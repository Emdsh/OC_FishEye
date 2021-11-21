import getLightboxData from './getLightboxData.js';
import identifyId from './identifyId.js';
import lightboxNavigation from './lightboxNavigation.js';

function fillLightbox(btn, MODAL_BASICS) {
    const LIGHTBOX_MEDIA = document.querySelector('.lightbox__media-container');
    const LIGHTBOX_TITLE = document.querySelector('.lightbox__media-title');

    const LIGHTBOX_DATA = getLightboxData(MODAL_BASICS);

    const START_ID = identifyId(btn, MODAL_BASICS);
    
    LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[START_ID].media.outerHTML;
    LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[START_ID].title;

    lightboxNavigation(LIGHTBOX_DATA, START_ID, LIGHTBOX_MEDIA, LIGHTBOX_TITLE);
}

export default fillLightbox;