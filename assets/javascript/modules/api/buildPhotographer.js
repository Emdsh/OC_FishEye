import getPhotographers from './getPhotographers.js';
import { Photographer } from '../../utils/photographer.js';

async function buildPhotographer() {
    const api = await getPhotographers();

    const photographers = [];

    api.photographers.forEach(photographer => photographers.push(new Photographer(photographer, api.media)));
    return photographers;
}

export default buildPhotographer;