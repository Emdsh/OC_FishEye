import buildPhotographer from './modules/api/buildPhotographer.js';

import generateHomepage from './modules/pages/generateHomePage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';

import closeModal from './modules/modals/closeModals.js';
import openModal from './modules/modals/openModal.js';

import focusOutInputCheck from './modules/modals/contact/focusOutInputCheck.js';

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

    contactModalButton.addEventListener('click', () => { openModal(contactModalBackground); });

    lightboxModalButtons.forEach((btn) => btn.addEventListener('click', () => { openModal(lightboxModalBackground); }));

    closeModalsButtons.forEach((btn) => btn.addEventListener('click', () => { closeModal(contactModalBackground, lightboxModalBackground); }));

    // contact modal validation
    const contactFormInputs = document.querySelectorAll('input.contact-form__text-input, textarea.contact-form__text-input');

    contactFormInputs.forEach((input) => input.addEventListener('focusout', () => { focusOutInputCheck(input); }));
}