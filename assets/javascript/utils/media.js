export class Media {
    constructor(title, media, tags, likes) {
        this.path = `/assets/images/photographers/media/${media}`;
        this.title = title;
        this.likes = likes;
        this.tags = tags;
    }
}
