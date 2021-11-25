function getLightboxData(modalBasics) {
    const LIGHTBOX_DATA = []

    modalBasics.lightbox.openButtons.forEach(element => {
        const MEDIA = element.cloneNode(false);
        MEDIA.className = 'lightbox__media';

        if (MEDIA.tagName === 'VIDEO') {
            MEDIA.setAttribute('controls', '');
        }

        const TITLE = element.parentElement.lastElementChild.querySelector('.portfolio__element-title').innerText;
        LIGHTBOX_DATA.push({
            'media': MEDIA,
            'title': TITLE
        });
    });

    return LIGHTBOX_DATA;
}

export default getLightboxData;