function checkIfLiked(button) {
    const hasBeenClicked = sessionStorage.getItem(`${button.previousElementSibling.textContent}`);
    const timeClicked = Number.parseInt(hasBeenClicked);

    if(button.classList.contains('liked')) {
        if (hasBeenClicked !== null) {
            if(Date.now() - timeClicked >= 9080) {
                button.classList.remove('liked');
                return true;
            }
            return 'pending';
        }
    }

    if(hasBeenClicked === null) {
        return false;
    }

    return true;
}

export default checkIfLiked;