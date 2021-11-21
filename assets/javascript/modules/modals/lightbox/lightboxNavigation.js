function lightboxNavigation(LIGHTBOX_DATA, START_ID, LIGHTBOX_MEDIA, LIGHTBOX_TITLE) {
    const LIGHTBOX_FORWARD = document.querySelector('.lightbox__forward');
    const LIGHTBOX_BACKWARD = document.querySelector('.lightbox__backward');
    let i = START_ID;

    LIGHTBOX_FORWARD.addEventListener('click', () => {
        i += 1;

        if (LIGHTBOX_DATA[i] === undefined) {
            i = 0;
        }

        LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
        LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
    });
    LIGHTBOX_FORWARD.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            i += 1;
        
            if (LIGHTBOX_DATA[i] === undefined) {
                i = 0;
            }

            LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
            LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
        }
    });
    window.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') {
            i += 1;
        
            if (LIGHTBOX_DATA[i] === undefined) {
                i = 0;
            }

            LIGHTBOX_MEDIA.innerHTML = LIGHTBOX_DATA[i].media.outerHTML;
            LIGHTBOX_TITLE.innerText = LIGHTBOX_DATA[i].title;
        }
    })

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
    })

    window.addEventListener('keydown', event => {
        if (event.key === ' ') {
            const mediaElement = document.querySelector('.lightbox__media');
            if (mediaElement.tagName === 'VIDEO') {
                if (mediaElement.paused) {
                    mediaElement.play();
                } else {
                    mediaElement.pause();
                }
            }
        }
    });
}

export default lightboxNavigation;