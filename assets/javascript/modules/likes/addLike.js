function addLike(button, likes, photographerLikes, totalLikes) {
    button.innerText = likes + 1;
    photographerLikes.innerText = totalLikes + 1;
    button.classList.add('liked');
    sessionStorage.setItem(`${button.previousElementSibling.textContent}`, `${Date.now()}`);
   
    setTimeout(() => {
        button.classList.remove('liked');
    }, 10000);
}

export default addLike;