import { enableScroll } from './toggleScroll.js';

function closeModal(contactModalBackground, lightboxModalBackground) {
    contactModalBackground.style.display = 'none';
    lightboxModalBackground.style.display = 'none';
    enableScroll();
}

export default closeModal;