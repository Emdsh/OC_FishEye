import linkMedia from "./linkMedia.js";

export class Photographer {
    constructor(name, id, city, country, tags, tagline, price, portrait, media) {
        this.portrait = `/assets/images/photographers/portrait/${portrait}`;
        this.name = name;
        this.location = `${city}, ${country}`;
        this.tagline = tagline;
        this.price = `${price}€/jour`;
        this.tags = tags;
        this.media = linkMedia(media, id);
    }
}