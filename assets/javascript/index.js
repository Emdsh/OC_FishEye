import generateHomepage from './modules/pages/generateHomePage.js';
import buildPhotographer from './utils/buildPhotographer.js';

const photographers = await buildPhotographer();

generateHomepage(photographers);