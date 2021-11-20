import trapFocus from './trapFocus.js';
import { disableScroll } from './toggleScroll.js';
import escapeModal from './escapeModal.js';

function openModal(modalBackground) {
    modalBackground.style.display = 'unset';
    trapFocus(modalBackground);
    disableScroll();
    escapeModal(modalBackground);
}

export default openModal;