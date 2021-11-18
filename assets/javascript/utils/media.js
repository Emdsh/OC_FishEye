export class Media {
    constructor(media, title, tags, likes, date) {
        this._path = media;
        this._title = title;
        this._likes = likes;
        this._tag = tags;
        this._date = date;
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

    get tag() {
        return this._tag;
    }

    get date() {
        return this._date;
    }
}