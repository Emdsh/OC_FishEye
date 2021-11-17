import { Media } from './media.js';

export class Video extends Media {
    constructor(media, title, tags, likes, date) {
        super(media, title, tags, likes, date);
    }
}