import closeModal from './closeModal.js';

function escapeModal(modalBackground) {
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            if (modalBackground) {
                closeModal(modalBackground, modalBackground);
            }
        }
    });
}

export default escapeModal;