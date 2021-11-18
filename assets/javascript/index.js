import loadSharedConstants from './utils/loadSharedConstants.js';
import { MODAL_BASICS, CONTACT_MODAL, SORTER } from './utils/otherConstants.js';
import buildPhotographer from './modules/api/buildPhotographer.js';

import generateHomepage from './modules/pages/generateHomePage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';

import focusSkipLink from './modules/aria/focusSkipLink.js';
import focusSkipLinkTarget from './modules/aria/focusSkipLinkTarget.js';

import filterResults from './modules/filters/filterResults.js';
import sortResults from './modules/sorting/sortResults.js';

import closeModal from './modules/modals/closeModals.js';
import openModal from './modules/modals/openModal.js';

import focusOutInputCheck from './modules/modals/contact/focusOutInputCheck.js';
import textCounter from './modules/modals/contact/textCounter.js';
import submitForm from './modules/modals/contact/submitForm.js';
import confirmFormSubmit from './modules/modals/contact/confirmFormSubmit.js';

// import constants
let { ARIA, FILTERS } = loadSharedConstants();

// indentify the page
const PATH = location.pathname.replace('index.html','');

// fetch data from the API
const PHOTOGRAPHERS = await buildPhotographer();

// generate pages
if (PATH === '/') {
    ({ ARIA, FILTERS } = generateHomepage(PHOTOGRAPHERS));
}

if (PATH === '/photographer/') {
    ({ ARIA, FILTERS } = generatePhotographerPage(PHOTOGRAPHERS));
}

// filter tags
FILTERS.forEach(filter => {
    filter.addEventListener('click', () => {
        filterResults(filter.getAttribute('name'), PATH, FILTERS);
    });
});

// general ARIA
ARIA.filters.forEach(filter => {
    filter.addEventListener('keyup', event => {
        if (event.shiftKey && event.key === 'Tab') {
            focusSkipLink(filter, event);
        }
    });
});

ARIA.skipLinks.forEach(link => {
    link.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            focusSkipLinkTarget(link, event);
        }
    });
});

if (PATH === '/photographer/') {
    // modals open
    MODAL_BASICS.contact.openButton.addEventListener('click', () => { 
        openModal(MODAL_BASICS.contact.background); 
    });

    MODAL_BASICS.lightbox.openButtons.forEach((btn) => {
        btn.addEventListener('click', () => { 
            openModal(MODAL_BASICS.lightbox.background); 
        });
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
        update();
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