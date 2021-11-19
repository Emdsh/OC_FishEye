function sharedConstants() {
    const ARIA = {
        filters: document.querySelectorAll('.filter__option'),
        skipLinks: document.querySelectorAll('.skip-link'),
    };

    const FILTERS = document.querySelectorAll('.filter__option');

    return { ARIA, FILTERS };
}

function photographerConstants() {
    const MODAL_BASICS = {
        general: {
            closeButtons: document.querySelectorAll('.close-button'),
        },
        contact: {
            openButton: document.getElementById('contact-button'),
            background: document.getElementById('contact-form__background'),
        },
        lightbox: {
            openButtons: document.querySelectorAll('.portfolio__element-media'),
            background: document.getElementById('lightbox__background'),
        },
    };
    
    const CONTACT_MODAL = {
        form: document.forms.contact,
        inputs: {
            all: document.querySelectorAll('input.contact-form__text-input, textarea.contact-form__text-input'),
            message: document.getElementById('contact-form__message'),
        },
        submit: {
            status: sessionStorage.getItem('formStatus'),
            button: document.getElementById('contact-form__submit-button'),
        },
    };
    
    const SORTER = document.getElementById('sorting-menu');

    return { MODAL_BASICS, CONTACT_MODAL, SORTER };
}

function loadConstants(request) {
    let { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER } = {};

    if (request === 'all') {
        ({ ARIA, FILTERS } = sharedConstants());
        ({ MODAL_BASICS, CONTACT_MODAL, SORTER } = photographerConstants());
        return { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER };
    }
    if (request === 'shared') {
        ({ ARIA, FILTERS } = sharedConstants());
        return { ARIA, FILTERS };
    }
    if (request === 'photographer') {
        ({ MODAL_BASICS, CONTACT_MODAL, SORTER } = photographerConstants());
        return { MODAL_BASICS, CONTACT_MODAL, SORTER };
    }
}

export default loadConstants;