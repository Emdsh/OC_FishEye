import loadConstants from './utils/loadConstants.js';
import buildPhotographer from './modules/api/buildPhotographer.js';

import generateHomepage from './modules/pages/generateHomepage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';
import photographerPage from './modules/pages/photographerPage.js';

import focusSkipLink from './modules/aria/focusSkipLink.js';
import focusSkipLinkTarget from './modules/aria/focusSkipLinkTarget.js';

import filterResults from './modules/filters/filterResults.js';

// for dev
sessionStorage.clear();

// import constants
let { ARIA, filters, modalBasics, contactModal, sorter, likesButtons } = loadConstants('all');

// indentify the page
const path = location.pathname.replace('index.html','');

// fetch data from the API

const PHOTOGRAPHERS = await buildPhotographer(path);

// generate pages
if (path === '/OC_FishEye/') {
    ({ ARIA, filters } = generateHomepage(PHOTOGRAPHERS));
}

if (path === '/OC_FishEye/photographer/') {
    ({ ARIA, filters, modalBasics, contactModal, sorter, likesButtons } = generatePhotographerPage(PHOTOGRAPHERS));
    photographerPage(modalBasics, contactModal, sorter, likesButtons);
}

// filter tags
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filterResults(filter.getAttribute('name'), path, filters);
    });
});

// general ARIA
ARIA.filters.forEach(filter => {
    filter.addEventListener('keyup', event => {
        if (event.shiftKey && event.key === 'Tab') {
            focusSkipLink(filter, event);
        }
    });
});

ARIA.skipLinks.forEach(link => {
    link.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            focusSkipLinkTarget(link, event);
        }
    });
});