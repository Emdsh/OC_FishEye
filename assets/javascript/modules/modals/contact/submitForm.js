import submitInputCheck from './submitInputCheck.js';
import errorMessage from './errorMessage.js';
import confirmFormSubmit from './confirmFormSubmit.js';

function submitForm(contactFormInputs, form, formSubmit) {
    const isFormValid = submitInputCheck(contactFormInputs);

    if (isFormValid.checksum) {
        if (!formSubmit.classList.contains('close-button')) {
            contactFormInputs.forEach(input => {
                console.log(`${input.name}: ${input.value}`);
            });
        }

        const MODAL_BASICS = confirmFormSubmit(form, formSubmit);
        return MODAL_BASICS;
    }

    Object.keys(isFormValid).forEach(key => {
        if (key === 'checksum') { return; }

        errorMessage(isFormValid[key].element, isFormValid[key].valid);
    })
}

export default submitForm;