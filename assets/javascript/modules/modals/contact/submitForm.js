import submitInputCheck from './submitInputCheck.js';
import errorMessage from './errorMessage.js';

function submitForm(contactFormInputs, form) {
    const isFormValid = submitInputCheck(contactFormInputs);

    if (isFormValid.checksum) {
        sessionStorage.setItem('formStatus', 'submitted');

        return form.submit(contactFormInputs);
    }

    Object.keys(isFormValid).forEach(key => {
        if (key === 'checksum') { return; }

        errorMessage(isFormValid[key].element, isFormValid[key].valid);
    })
}

export default submitForm;