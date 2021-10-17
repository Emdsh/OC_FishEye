import { regexConst } from '../../../utils/regexConst.js';

function focusOutInputCheck(input) {
    if (input.name === 'firstName') {
        errorMessage({firstName: regexConst.nameRegex.test(input.value)})
    }

    if (input.name === 'lastName') {
        errorMessage({lastName: regexConst.nameRegex.test(input.value)})
    }

    if (input.name === 'email') {
        errorMessage({email: regexConst.emailRegex.test(input.value)})
    }

    if (input.name === 'message') {
        errorMessage({message: regexConst.messageRegex.test(input.value)})
    }
}

export default focusOutInputCheck;