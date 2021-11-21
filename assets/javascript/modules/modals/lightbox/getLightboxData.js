function getLightboxData(MODAL_BASICS) {
    const LIGHTBOX_DATA = []

    MODAL_BASICS.lightbox.openButtons.forEach(element => {
        const MEDIA = element.cloneNode(false);
        MEDIA.className = 'lightbox__media';
        const TITLE = element.parentElement.lastElementChild.querySelector('.portfolio__element-title').innerText;
        LIGHTBOX_DATA.push({
            'media': MEDIA,
            'title': TITLE
        });
    });

    return LIGHTBOX_DATA;
}

export default getLightboxData;