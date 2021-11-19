import sortResults from '../sorting/sortResults.js';

import toggleLike from '../likes/toggleLike.js';

import closeModal from '../modals/closeModals.js';
import openModal from '../modals/openModal.js';

import focusOutInputCheck from '../modals/contact/focusOutInputCheck.js';
import textCounter from '../modals/contact/textCounter.js';
import submitForm from '../modals/contact/submitForm.js';

function updatePortfolio(MODAL_BASICS, SORTER, LIKES_BUTTONS) {
    // sort by menu
    ({ MODAL_BASICS, SORTER, LIKES_BUTTONS } = sortResults(SORTER.value));

    //lightbox modal open
    MODAL_BASICS.lightbox.openButtons.forEach((btn) => {
        btn.addEventListener('click', () => { 
            openModal(MODAL_BASICS.lightbox.background); 
        });
    });

    // likes 
    LIKES_BUTTONS.forEach(btn =>{
        btn.addEventListener('click', () => {
            toggleLike(btn);
        });
    });

    return { MODAL_BASICS, SORTER, LIKES_BUTTONS };
}

function updateModalsClose(MODAL_BASICS) {
    // modals close
    MODAL_BASICS.general.closeButtons.forEach((btn) => { 
        btn.addEventListener('click', () => { 
            closeModal(MODAL_BASICS.contact.background, MODAL_BASICS.lightbox.background); 
        });
    });
}

function photographerPage(MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS) {
    ({ MODAL_BASICS, SORTER, LIKES_BUTTONS } = updatePortfolio(MODAL_BASICS, SORTER, LIKES_BUTTONS));

    // sort by menu
    SORTER.addEventListener('input', () => {
        ({ MODAL_BASICS, SORTER, LIKES_BUTTONS } = updatePortfolio(MODAL_BASICS, SORTER, LIKES_BUTTONS));
    });
    
    updateModalsClose(MODAL_BASICS);

    // contact modal open
    MODAL_BASICS.contact.openButton.addEventListener('click', () => { 
        openModal(MODAL_BASICS.contact.background); 
    });
    
    // contact modal validation
    if (CONTACT_MODAL.form) {
        CONTACT_MODAL.inputs.all.forEach((input) => {
            input.addEventListener('focusout', () => { 
                focusOutInputCheck(input); 
            });
        });
    
        ['keyup', 'keydown'].forEach(event => {
            CONTACT_MODAL.inputs.message.addEventListener(event, () => { 
                textCounter(CONTACT_MODAL.inputs.message); 
            });
        });
    
        CONTACT_MODAL.submit.button.addEventListener('click', () => { 
            MODAL_BASICS = submitForm(CONTACT_MODAL.inputs.all, CONTACT_MODAL.form, CONTACT_MODAL.submit.button);
            updateModalsClose(MODAL_BASICS);
        });
    }
}

export default photographerPage;