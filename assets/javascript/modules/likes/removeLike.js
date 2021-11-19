function removeLike(button, likes, photographerLikes, totalLikes) {
    button.innerText = likes - 1;
    photographerLikes.innerText = totalLikes - 1;
    button.classList.remove('liked');
    sessionStorage.removeItem(`${button.previousElementSibling.textContent}`);
}

export default removeLike;