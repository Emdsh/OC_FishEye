function loadConstants() {
    const ARIA = {
        filters: document.querySelectorAll('.filter__option'),
        skipLinks: document.querySelectorAll('.skip-link'),
    };

    const FILTERS = document.querySelectorAll('.filter__option');

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

    return { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER };
}

export default loadConstants;