import loadConstants from '../../../utils/loadConstants.js';

function confirmFormSubmit(form, formSubmit) {
    const formTitle = document.getElementById('js-contact-title');

    while (form.childElementCount > 1) {
        form.firstElementChild.remove();
    }

    formTitle.innerText = 'Merci de votre email!';
    formSubmit.innerText = 'Fermer';
    formSubmit.classList.add('close-button');

    const { modalBasics, ignored, _ignored } = loadConstants('photographer');
    return modalBasics;
}

export default confirmFormSubmit;