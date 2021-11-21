function lightboxBackward(LIGHTBOX_BACKWARD, LIGHTBOX_DATA, LIGHTBOX_MEDIA, LIGHTBOX_TITLE, i) {
    LIGHTBOX_BACKWARD.addEventListener('click', () => {
        i -= 1;

        if (LIGHTBOX_DATA[i] === undefined) {
            i = LIGHTBOX_DATA.length - 1;
        }

        LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
        LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
    });

    LIGHTBOX_BACKWARD.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            i -= 1;

            if (LIGHTBOX_DATA[i] === undefined) {
                i = LIGHTBOX_DATA.length - 1;
            }

            LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
            LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
        }
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') {
            i -= 1;

            if (LIGHTBOX_DATA[i] === undefined) {
                i = LIGHTBOX_DATA.length - 1;
            }

            LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
            LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
        }
    });

    return i;
}

export default lightboxBackward;