import closeModal from './closeModal.js';

function escapeModal(modalBackground) {
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeModal(modalBackground, modalBackground);
        }
    }, {once: true});
}

export default escapeModal;