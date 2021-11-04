export class Media {
    constructor(media, title, tags, likes) {
        this._path = media;
        this._title = title;
        this._likes = likes;
        this._tags = tags;
    }

    set addLikes(value) {
        if(!isNaN(value)) {
            this._likes += value;
        }
    }

    get path() {
        return `/assets/images/photographers/media/${this._path}`;
    }

    get title() {
        return this._title;
    }

    get likes() {
        return this._likes;
    }

    get tags() {
        return this._tags;
    }
}