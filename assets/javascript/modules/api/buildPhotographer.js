import getPhotographers from './getPhotographers.js';
import { Photographer } from '../../utils/photographer.js';

async function buildPhotographer(PATH) {
    const api = await getPhotographers(PATH);

    const photographers = [];

    api.photographers.forEach(photographer => photographers.push(new Photographer(photographer, api.media)));
    return photographers;
}

export default buildPhotographer;