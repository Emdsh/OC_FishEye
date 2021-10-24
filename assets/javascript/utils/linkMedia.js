import { Media } from './media.js';

function linkMedia(media, photographerId) {
    const photographerMedia = [];

    media.forEach(m => {
        if(m.photographerId === photographerId) {
            photographerMedia.push(new Media(m.title, m.image||m.video, m.tags, m.likes||0));
        }
    })

    return photographerMedia;
}

export default linkMedia;