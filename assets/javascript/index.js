import loadConstants from './utils/loadConstants.js';
import buildPhotographer from './modules/api/buildPhotographer.js';

import generateHomepage from './modules/pages/generateHomePage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';
import photographerPage from './modules/pages/photographerPage.js';

import focusSkipLink from './modules/aria/focusSkipLink.js';
import focusSkipLinkTarget from './modules/aria/focusSkipLinkTarget.js';

import filterResults from './modules/filters/filterResults.js';

// import constants
let { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS } = loadConstants('all');

// indentify the page
const PATH = location.pathname.replace('index.html','');

// fetch data from the API
const PHOTOGRAPHERS = await buildPhotographer();

// generate pages
if (PATH === '/') {
    ({ ARIA, FILTERS } = generateHomepage(PHOTOGRAPHERS));
}

if (PATH === '/photographer/') {
    ({ ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS } = generatePhotographerPage(PHOTOGRAPHERS));
    photographerPage(MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS);
}

// filter tags
FILTERS.forEach(filter => {
    filter.addEventListener('click', () => {
        filterResults(filter.getAttribute('name'), PATH, FILTERS);
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