function lightboxForward(LIGHTBOX_FORWARD, LIGHTBOX_DATA, LIGHTBOX_MEDIA, LIGHTBOX_TITLE, i) {
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
    });

    return i;
}

export default lightboxForward;