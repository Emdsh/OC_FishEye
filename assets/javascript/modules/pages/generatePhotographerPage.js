import loadConstants from "../../utils/loadConstants.js";
import { Video } from '../../utils/video.js';

function generatePhotographerPage(photographers) {
    let photographer = new URLSearchParams(window.location.search).get('p');

    let photographerIndex = undefined;
    for (let i = 0; i < photographers.length; i += 1) {
        if (encodeURIComponent(photographers[i].name.replace(/\s|\-/g, '')) === photographer) {
            photographerIndex = i;
        }
    }
    if (photographerIndex === undefined) { return; }

    const pageTitle = document.getElementById('js-page-title');
    const photographerName = document.getElementById('js-photographer-name');
    const photographerLocation = document.getElementById('js-photographer-location');
    const photographerTagline = document.getElementById('js-photographer-tagline');
    const photographerTags = document.getElementById('js-photographer-tags');
    const photographerPortrait = document.getElementById('js-photographer-portrait');
    const photographerLikes = document.getElementById('js-photographer-likes');
    const photographerPricing = document.getElementById('js-photographer-pricing');
    const contactTitle = document.getElementById('js-contact-title');
    const mainPortfolio = document.querySelector('main.portfolio');

    let photographerFilters = '';
    for (let i = 0; i < photographers[photographerIndex].tags.length; i += 1){
        let photographerTag =   `<li>
                                    <span class="screenreader-only">${photographers[photographerIndex].tags[i]}</span>
                                    <button name="${photographers[photographerIndex].tags[i]}" class="filter__option" aria-hidden="true">#${photographers[photographerIndex].tags[i]}</button>
                                </li>`;
            
        photographerFilters += photographerTag;  
    }

    let photographerPortfolio = '';
    for (let i = 0; i < photographers[photographerIndex].media.length; i += 1) {
        
        let mediaElement = `<img src="${photographers[photographerIndex].media[i].path}" alt="${photographers[photographerIndex].media[i].alt}" class="portfolio__element-media" tabindex="0">`;

        if (photographers[photographerIndex].media[i] instanceof Video) {
            mediaElement = `<video src="${photographers[photographerIndex].media[i].path}" alt="${photographers[photographerIndex].media[i].alt}" class="portfolio__element-media" tabindex="0"></video>
                            <div class="portfolio__element-media--video"></div>`;
        }

        let photographerMedia = `<figure class="portfolio__element">
                                    ${mediaElement}

                                    <figcaption class="portfolio__element-metadata">
                                        <p class="portfolio__element-title" tabindex="0">${photographers[photographerIndex].media[i].title}</p>
                                        <p class="portfolio__element-likes" aria-label="likes" tabindex="0">${photographers[photographerIndex].media[i].likes}</p>
                                        <p class="portfolio__element-tag screenreader-only" aria-hidden="true">${photographers[photographerIndex].media[i].tag}</p>
                                        <p class="portfolio__element-date screenreader-only" aria-hidden="true">${photographers[photographerIndex].media[i].date}</p>
                                    </figcaption>
                                </figure>`;

        photographerPortfolio += photographerMedia;
    }

    const portfolioElements = document.querySelectorAll('.portfolio__element');
    if (portfolioElements) {
        portfolioElements.forEach(element => {
            element.remove();
        });
    }

    pageTitle.innerText = `FishEye — ${photographers[photographerIndex].name}`;
    photographerName.innerText = photographers[photographerIndex].name;
    photographerLocation.innerText = photographers[photographerIndex].location;
    photographerTagline.innerText = photographers[photographerIndex].tagline;
    photographerTags.innerHTML = photographerFilters;
    photographerPortrait.innerHTML = `<img src="${photographers[photographerIndex].portrait}" alt="" class="photographer-tile__picture" tabindex="0">`
    photographerLikes.innerText = photographers[photographerIndex].likes;
    photographerPricing.innerText = photographers[photographerIndex].price;
    contactTitle.innerText = `Contactez-moi\n${photographers[photographerIndex].name}`;
    mainPortfolio.insertAdjacentHTML('beforeend', photographerPortfolio);

    const { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS } = loadConstants('all');
    return { ARIA, FILTERS, MODAL_BASICS, CONTACT_MODAL, SORTER, LIKES_BUTTONS };
}

export default generatePhotographerPage;