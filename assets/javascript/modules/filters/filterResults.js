import generateHomepage from '../pages/generateHomePage.js';
import generatePhotographerPage from '../pages/generatePhotographerPage.js';

function filterResults(filter, unfilteredPhotographers, path, event) {
    event.preventDefault();

    const filteredPhotographers = []

    unfilteredPhotographers.forEach(photographer => {
        if (photographer.tags.includes(filter)) {
            filteredPhotographers.push(photographer);
        }
    });

    filteredPhotographers.forEach(photographer => {
        const filteredMedia = [];

        photographer.media.forEach(media => {
            if (media.tags.includes(filter)) {
                filteredMedia.push(media);
            }
        });

        photographer.media = filteredMedia;
    });

    if (path === '/' || path === '/index') {
        generateHomepage(filteredPhotographers);
    }

    if (path.includes('photographer')) {
        generatePhotographerPage(filteredPhotographers);
    }
}

export default filterResults;