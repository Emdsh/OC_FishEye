import sortResults from '../sorting/sortResults.js';

import toggleLike from '../likes/toggleLike.js';

import closeModal from '../modals/closeModal.js';
import openModal from '../modals/openModal.js';

import focusOutInputCheck from '../modals/contact/focusOutInputCheck.js';
import textCounter from '../modals/contact/textCounter.js';
import submitForm from '../modals/contact/submitForm.js';

import fillLightbox from '../modals/lightbox/fillLightbox.js';

function updatePortfolio(modalBasics, contactModal, sorter, likesButtons) {
    // sort by menu
    ({ modalBasics, contactModal, sorter, likesButtons } = sortResults(sorter.value));

    //lightbox modal open
    modalBasics.lightbox.openButtons.forEach((btn) => {
        btn.addEventListener('click', () => { 
            openModal(modalBasics.lightbox.background);
            fillLightbox(btn, modalBasics);
        });
        btn.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                openModal(modalBasics.lightbox.background);
                fillLightbox(btn, modalBasics);
            }
        });
    });

    // likes 
    likesButtons.forEach(btn =>{
        btn.addEventListener('click', () => {
            toggleLike(btn);
        });
        btn.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                toggleLike(btn);
            }
        });
    });

    return { modalBasics, contactModal, sorter, likesButtons };
}

export function updateModalsClose(modalBasics) {
    // modals close
    modalBasics.general.closeButtons.forEach((btn) => { 
        btn.addEventListener('click', () => { 
            closeModal(modalBasics.contact.background, modalBasics.lightbox.background); 
        });
        btn.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                closeModal(modalBasics.contact.background, modalBasics.lightbox.background);
            }
        });
    });
}

function photographerPage(modalBasics, contactModal, sorter, likesButtons) {
    ({ modalBasics, contactModal, sorter, likesButtons } = updatePortfolio(modalBasics, contactModal, sorter, likesButtons));

    // sort by menu
    sorter.addEventListener('input', () => {
        ({ modalBasics, contactModal, sorter, likesButtons } = updatePortfolio(modalBasics, contactModal, sorter, likesButtons));
    });
    
    updateModalsClose(modalBasics);

    // contact modal open
    modalBasics.contact.openButton.addEventListener('click', () => { 
        openModal(modalBasics.contact.background); 
    });
    
    // contact modal validation
    if (contactModal.form) {
        contactModal.inputs.all.forEach((input) => {
            input.addEventListener('focusout', () => { 
                focusOutInputCheck(input); 
            });
        });
    
        ['keyup', 'keydown'].forEach(event => {
            contactModal.inputs.message.addEventListener(event, () => { 
                textCounter(contactModal.inputs.message); 
            });
        });
    
        contactModal.submit.button.addEventListener('click', () => { 
            ({ modalBasics, contactModal, sorter, likesButtons } = submitForm(contactModal.inputs.all, contactModal.form, contactModal.submit.button));
        });
    }
}

export default photographerPage;