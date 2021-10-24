import getPhotographers from './getPhotographers.js';
import { Photographer } from './photographer.js';

async function buildPhotographer() {
    const api = await getPhotographers();

    const photographers = [];

    api.photographers.forEach(p => photographers.push(new Photographer(p.name, p.id, p.city, p.country, p.tags, p.tagline, p.price, p.portrait, api.media)));
    return photographers;
}

export default buildPhotographer;