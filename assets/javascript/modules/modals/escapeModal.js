import closeModal from './closeModal.js';

function escapeModal(modalBackground) {
    function checkKey(event) {
        if (event.key === 'Escape') {
            if (modalBackground) {
                closeModal(modalBackground, modalBackground);
            }
        }
    }

    document.body.addEventListener('keydown', checkKey);
}

export default escapeModal;