function checkIfLiked(button) {
    if(button.classList.contains('liked')) {
        return 'pending';
    }

    if(sessionStorage.getItem(`${button.previousElementSibling.textContent}`) === null) {
        return false;
    }

    return true;
}

export default checkIfLiked;