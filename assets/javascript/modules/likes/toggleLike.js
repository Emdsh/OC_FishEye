import checkIfLiked from './checkIfLiked.js';
import addLike from './addLike.js';
import removeLike from './removeLike.js';

function toggleLike(button) {
    const isLiked = checkIfLiked(button);

    const likes = Number.parseInt(button.innerText);
    const photographerLikes = document.getElementById('js-photographer-likes');
    const totalLikes = Number.parseInt(photographerLikes.innerText);

    if (isLiked === false) {
        addLike(button, likes, photographerLikes, totalLikes);
    }

    if (isLiked === 'pending') {
        removeLike(button, likes, photographerLikes, totalLikes)
    }

    if (isLiked === true) {
        return;
    }
}

export default toggleLike;