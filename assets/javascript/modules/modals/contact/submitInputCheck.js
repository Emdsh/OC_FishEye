import { regexConst } from '../../../utils/regexConst.js';

function submitInputCheck(contactFormInputs) {
    const isFormValid = {
        firstName: {
            valid: regexConst.nameRegex.test(contactFormInputs[0].value),
            element: contactFormInputs[0],
        },
        lastName: {
            valid: regexConst.nameRegex.test(contactFormInputs[1].value),
            element: contactFormInputs[1],
        },
        email: {
            valid: regexConst.emailRegex.test(contactFormInputs[2].value),
            element: contactFormInputs[2],
        },
        message: {
            valid: regexConst.messageRegex.test(contactFormInputs[3].value),
            element: contactFormInputs[3],
        },
    };

    const checksum = [];
    Object.keys(isFormValid).forEach(key => checksum.push(isFormValid[key].valid));
    isFormValid.checksum = checksum.reduce((a, b) => a && b);
    
    return isFormValid;
}

export default submitInputCheck;