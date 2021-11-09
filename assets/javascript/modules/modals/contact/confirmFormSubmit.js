function confirmFormSubmit() {
    const formContent = document.getElementById('contact-form-content');

    formContent.innerHTML = '<h1>Merci de votre email!</h1><button class="contact-form__submit-button close-button">Fermer</button>';
}

export default confirmFormSubmit;