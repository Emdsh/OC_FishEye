import { Image } from './image.js';
import { Video } from './video.js';

function linkMedia(media, photographerId) {
    const photographerMedia = [];

    media.forEach(m => {
        if(m.photographerId === photographerId) {
            if(m.image) {
                photographerMedia.push(new Image(m.image, m.title, m.tags, m.likes))
            }

            if(m.video) {
                photographerMedia.push(new Video(m.video, m.title, m.tags, m.likes))
            }
        }
    })

    return photographerMedia;
}

export default linkMedia;