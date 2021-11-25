import loadConstants from './utils/loadConstants.js';
import buildPhotographer from './modules/api/buildPhotographer.js';

import generateHomepage from './modules/pages/generateHomepage.js';
import generatePhotographerPage from './modules/pages/generatePhotographerPage.js';
import photographerPage from './modules/pages/photographerPage.js';

import focusSkipLink from './modules/aria/focusSkipLink.js';
import focusSkipLinkTarget from './modules/aria/focusSkipLinkTarget.js';

import filterResults from './modules/filters/filterResults.js';

import anchor from './modules/anchor/anchor.js';

// for dev - to delete when going to prod
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

// anchor
anchor();

// filter tags
// when user click on a filter
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filterResults(filter.getAttribute('name'), path, filters);
    });
});

// general ARIA
// when the user lands on filter going back up the document
ARIA.filters.forEach(filter => {
    filter.addEventListener('keyup', event => {
        if (event.shiftKey && event.key === 'Tab') {
            focusSkipLink(filter, event);
        }
    });
});

// when the user uses a skip link
ARIA.skipLinks.forEach(link => {
    link.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            focusSkipLinkTarget(link, event);
        }
    });
});