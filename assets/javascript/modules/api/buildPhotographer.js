import getPhotographers from './getPhotographers.js';
import { Photographer } from '../../utils/photographer.js';

// builds an array of photographers
async function buildPhotographer() {
    // get the data out of the API
    const api = await getPhotographers();

    const photographers = [];

    // create photographer objects from the API
    api.photographers.forEach(photographer => photographers.push(new Photographer(photographer, api.media)));
    
    return photographers;
}

export default buildPhotographer;