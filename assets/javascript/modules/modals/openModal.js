import trapFocus from './trapFocus.js';

function openModal(modalBackground) {
    modalBackground.style.display = 'unset';
    trapFocus(modalBackground);
}

export default openModal;