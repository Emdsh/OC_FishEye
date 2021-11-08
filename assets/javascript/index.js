import buildPhotographer from './modules/api/buildPhotographer.js';

import focusSkipLink from './modules/aria/focusSkipLink.js';
import focusSkipLinkTarget from './modules/aria/focusSkipLinkTarget.js';

import generateHomepage from './modules/pages/generateHomePage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';

import closeModal from './modules/modals/closeModals.js';
import openModal from './modules/modals/openModal.js';

import focusOutInputCheck from './modules/modals/contact/focusOutInputCheck.js';
import textCounter from './modules/modals/contact/textCounter.js';
import submitForm from './modules/modals/contact/submitForm.js';

// identify which page the user is on
const path = location.pathname.replace('.html','');

// fetch data from the API
const photographers = await buildPhotographer();

// generate pages
if (path === '/' || path === '/index') {
    generateHomepage(photographers);
}

if (path.includes('photographer')) {

    generatePhotographerPage(photographers);

    // modals
    const contactModalButton = document.getElementById('contact-button');
    const contactModalBackground = document.getElementById('contact-form__background');
    const lightboxModalButtons = document.querySelectorAll('.portfolio__element-media');
    const lightboxModalBackground = document.getElementById('lightbox__background');
    const closeModalsButtons = document.querySelectorAll('.close-button');

    contactModalButton.addEventListener('click', () => { 
        openModal(contactModalBackground); 
    });

    lightboxModalButtons.forEach((btn) => {
        btn.addEventListener('click', () => { 
            openModal(lightboxModalBackground); 
        });
    });

    closeModalsButtons.forEach((btn) => { 
        btn.addEventListener('click', () => { 
            closeModal(contactModalBackground, lightboxModalBackground); 
        });
    });

    // contact modal validation
    const contactForm = document.forms.contact;
    const contactFormInputs = document.querySelectorAll('input.contact-form__text-input, textarea.contact-form__text-input');
    const contactFormMessage = document.getElementById('contact-form__message');
    const contactModalSubmit = document.getElementById('contact-form__submit-button');

    contactFormInputs.forEach((input) => {
        input.addEventListener('focusout', () => { 
            focusOutInputCheck(input); 
        });
    });

    ['keyup', 'keydown'].forEach(event => {
        contactFormMessage.addEventListener(event, () => { 
            textCounter(contactFormMessage); 
        });
    });

    contactModalSubmit.addEventListener('click', () => { 
        submitForm(contactFormInputs, contactForm); 
    });
}

// general ARIA
const filters = document.querySelectorAll('.filter__option');
filters.forEach(filter => {
    filter.addEventListener('keyup', event => {
        if (event.shiftKey && event.key === 'Tab') {
            focusSkipLink(filter, event);
        }
    });
});

const skipLinks = document.querySelectorAll('.skip-link');
skipLinks.forEach(link => {
    link.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            focusSkipLinkTarget(link, event);
        }
    });
});