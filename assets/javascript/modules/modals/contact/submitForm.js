import submitInputCheck from './submitInputCheck.js';
import errorMessage from './errorMessage.js';
import confirmFormSubmit from './confirmFormSubmit.js';
import { updateModalsClose } from '../../pages/photographerPage.js';

function submitForm(contactFormInputs, form, formSubmit) {
    const isFormValid = submitInputCheck(contactFormInputs);

    if (isFormValid.checksum) {
        if (!formSubmit.classList.contains('close-button')) {
            contactFormInputs.forEach(input => {
                console.log(`${input.name}: ${input.value}`);
            });
        }

        const MODAL_BASICS = confirmFormSubmit(form, formSubmit);
        updateModalsClose(MODAL_BASICS);
        return MODAL_BASICS;
    }

    Object.keys(isFormValid).forEach(key => {
        if (key === 'checksum') { return; }

        errorMessage(isFormValid[key].element, isFormValid[key].valid);
    })
}

export default submitForm;