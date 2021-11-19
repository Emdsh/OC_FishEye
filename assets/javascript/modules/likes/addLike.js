function addLike(button) {
    const likes = Number.parseInt(button.innerText);
    const photographerLikes = document.getElementById('js-photographer-likes');
    const totalLikes = Number.parseInt(photographerLikes.innerText);

    button.innerText = likes + 1;
    photographerLikes.innerText = totalLikes + 1;
}

export default addLike;