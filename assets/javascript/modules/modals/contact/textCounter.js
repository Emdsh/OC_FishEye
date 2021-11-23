function textCounter(contactFormMessage) {
    const characterAmount = contactFormMessage.value.length;
    const characterCounter = document.getElementById('character-counter');

    const requiredCharacterAmount = 20 - characterAmount;
    if (requiredCharacterAmount < 0) { return; }

    characterCounter.innerText = `Caractères requis: ${requiredCharacterAmount}`;
}

export default textCounter;