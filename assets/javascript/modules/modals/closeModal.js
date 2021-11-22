import { enableScroll } from './toggleScroll.js';
import lightboxMediaPlay from './lightbox/lightboxMediaPlay.js';

function closeModal(contactModalBackground, lightboxModalBackground) {
    contactModalBackground.style.display = 'none';
    lightboxModalBackground.style.display = 'none';
    lightboxMediaPlay(false);
    enableScroll();
}

export default closeModal;