import { regexConst } from '../../../utils/regexConst.js';
import errorMessage from './errorMessage.js';

function focusOutInputCheck(input) {
    if (input.name === 'firstName') {
        errorMessage(input, regexConst.nameRegex.test(input.value));
    }

    if (input.name === 'lastName') {
        errorMessage(input, regexConst.nameRegex.test(input.value));
    }

    if (input.name === 'email') {
        errorMessage(input, regexConst.emailRegex.test(input.value));
    }

    if (input.name === 'message') {
        errorMessage(input, regexConst.messageRegex.test(input.value));
    }
}

export default focusOutInputCheck;