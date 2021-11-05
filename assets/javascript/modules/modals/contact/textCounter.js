function textCounter(contactFormMessage) {
    const characterAmout = contactFormMessage.value.length;
    const characterCounter = document.getElementById('character-counter');

    if (characterCounter) {
        characterCounter.remove();
    }

    contactFormMessage.insertAdjacentHTML('beforebegin', `<p id="character-counter" class="contact-form__character-counter">${characterAmout}/20</p>`);
}

export default textCounter;