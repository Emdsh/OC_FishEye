import lightboxMediaPlay from './lightboxMediaPlay.js';

function lightboxNavigation(LIGHTBOX_DATA, START_ID, LIGHTBOX_MEDIA, LIGHTBOX_TITLE) {
    const LIGHTBOX_FORWARD = document.querySelector('.lightbox__forward');
    const LIGHTBOX_BACKWARD = document.querySelector('.lightbox__backward');
    let currentIndex = START_ID;

    function checkKey(event) {
        if (event.key === 'ArrowRight') {
            moveLightboxForward();
        }
        if (event.key === 'ArrowLeft') {
            moveLightboxBackward();
        }
        if (event.key === 'Enter') {
            if (event.target.classList.contains('lightbox__forward')) {
                moveLightboxForward();
            }
            if (event.target.classList.contains('lightbox__backward')) {
                moveLightboxBackward();
            }
        }
    }

    function moveLightboxForward() {
        currentIndex += 1;
    
        if (LIGHTBOX_DATA[currentIndex] === undefined) {
            currentIndex = 0;
        }
        
        updateLightbox();
    }

    function moveLightboxBackward() {
        currentIndex -= 1;

        if (LIGHTBOX_DATA[currentIndex] === undefined) {
            currentIndex = LIGHTBOX_DATA.length - 1;
        }

        updateLightbox();
    }

    function updateLightbox() {
        LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[currentIndex].media.outerHTML;
        LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[currentIndex].title;
    }
    
    LIGHTBOX_FORWARD.addEventListener('click', moveLightboxForward);
    LIGHTBOX_BACKWARD.addEventListener('click', moveLightboxBackward);
    document.body.addEventListener('keydown', checkKey);

    lightboxMediaPlay(true);
}

export default lightboxNavigation;