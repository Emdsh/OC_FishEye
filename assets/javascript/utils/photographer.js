import linkMedia from "./linkMedia.js";
import sumLikes from "./sumLikes.js";

export class Photographer {
    constructor(photograph, media) {
        this._portrait = photograph.portrait;
        this._name = photograph.name;
        this._city = photograph.city;
        this._country = photograph.country;
        this._tagline = photograph.tagline;
        this._price = photograph.price;
        this._tags = photograph.tags;
        this._media = linkMedia(media, photograph.id);
        this._likes = sumLikes(media, photograph.id);
    }

    set addLikes(value) {
        if(!isNaN(value)) {
            this._likes += value;
        }
    }

    get portrait() {
        return `/assets/images/photographers/portrait/${this._portrait}`;
    }

    get name() {
        return this._name;
    }

    get location() {
        return `${this._city}, ${this._country}`;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return `${this._price}€/jour`;
    }

    get tags() {
        return this._tags;
    }

    get media() {
        return this._media;
    }

    get likes() {
        return this._likes;
    }
}