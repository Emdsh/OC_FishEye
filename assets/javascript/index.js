import closeModal from './modules/closeModals.js';
import openContact from './modules/openContact.js';
import openLightbox from './modules/openLightbox.js';

const contactModalButton = document.getElementById('contact-button');
const contactModalBackground = document.getElementById('contact-form__background');
const lightboxModalButtons = document.querySelectorAll('.portfolio__element-media');
const lightboxModalBackground = document.getElementById('lightbox__background');
const closeModalsButtons = document.querySelectorAll('.close-button');

contactModalButton.addEventListener('click', () => { openContact(contactModalBackground); });

lightboxModalButtons.forEach((btn) => btn.addEventListener('click', () => { openLightbox(lightboxModalBackground); }));

closeModalsButtons.forEach((btn) => btn.addEventListener('click', () => { closeModal(contactModalBackground, lightboxModalBackground); }));