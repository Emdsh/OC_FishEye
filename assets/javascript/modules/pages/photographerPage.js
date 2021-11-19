import sortResults from '../sorting/sortResults.js';

import closeModal from '../modals/closeModals.js';
import openModal from '../modals/openModal.js';

import focusOutInputCheck from '../modals/contact/focusOutInputCheck.js';
import textCounter from '../modals/contact/textCounter.js';
import submitForm from '../modals/contact/submitForm.js';
import confirmFormSubmit from '../modals/contact/confirmFormSubmit.js';

function updatePortfolio(MODAL_BASICS, SORTER) {
    // sort by menu
    ({ MODAL_BASICS, SORTER } = sortResults(SORTER.value));

    //lightbox modal open
    MODAL_BASICS.lightbox.openButtons.forEach((btn) => {
        btn.addEventListener('click', () => { 
            openModal(MODAL_BASICS.lightbox.background); 
        });
    });

    return { MODAL_BASICS, SORTER };
}

function photographerPage(MODAL_BASICS, CONTACT_MODAL, SORTER) {
    ({ MODAL_BASICS, SORTER } = updatePortfolio(MODAL_BASICS, SORTER));

    // sort by menu
    SORTER.addEventListener('input', () => {
        ({ MODAL_BASICS, SORTER } = updatePortfolio(MODAL_BASICS, SORTER));
    });
    
    // contact modal open
    MODAL_BASICS.contact.openButton.addEventListener('click', () => { 
        openModal(MODAL_BASICS.contact.background); 
    });
    
    // modals close
    MODAL_BASICS.general.closeButtons.forEach((btn) => { 
        btn.addEventListener('click', () => { 
            closeModal(MODAL_BASICS.contact.background, MODAL_BASICS.lightbox.background); 
        });
    });
    
    // contact modal submitted check
    if (CONTACT_MODAL.submit.status === 'submitted') {
        openModal(MODAL_BASICS.contact.background);
        confirmFormSubmit();
        sessionStorage.clear();
    }
    
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
            submitForm(CONTACT_MODAL.inputs.all, CONTACT_MODAL.form); 
        });
    }
}

export default photographerPage;