import loadConstants from "../../utils/loadConstants.js";

function generateHomepage(photographers) {
    let injectHTML = '<h1 tabindex="0" class="home-title">Nos photographes</h1>';

    for (let i = 0; i < photographers.length; i += 1) {
        let photographerFilters = '';

        let photographerMain = `<a href="photographer/?p=${encodeURIComponent(photographers[i].name.replace(/\s|\-/g, ''))}" aria-label="${photographers[i].name}">
                                    <figure>
                                        <img src="${photographers[i].portrait}" alt="" class="home-photographer__picture">
            
                                        <figcaption>
                                            <h2 class="home-photographer__name">${photographers[i].name}</h2>
                                        </figcaption>
                                    </figure>
                                </a>

                                <div tabindex="0">
                                    <p class="home-photographer__location">${photographers[i].location}</p>
                                    <p class="home-photographer__description">${photographers[i].tagline}</p>
                                    <p class="home-photographer__pricing">${photographers[i].price}</p>
                                </div>`;

        for (let j = 0; j < photographers[i].tags.length; j += 1) {
            let photographerTag =   `<li>
                                        <span class="screenreader-only">${photographers[i].tags[j]}</span>
                                        <button name="${photographers[i].tags[j]}" class="filter__option" aria-hidden="true">#${photographers[i].tags[j]}</button>
                                    </li>`;
            
            photographerFilters += photographerTag;                        
        }

        let photographerFooter =    `<footer>
                                        <nav class="filter">
                                            <a href="#photographer-${i+1}" class="skip-link">Passer ce menu</a>

                                            <ul class="filter__list">
                                                ${photographerFilters}
                                            </ul>
                                        </nav>
                                    </footer>`;

        let photographerFull =  `<article id="photographer-${i}" class="home-photographer">
                                    ${photographerMain}
                                    
                                    ${photographerFooter}
                                </article>`;

        injectHTML += photographerFull;
    }

    const main = document.getElementById('main');
    main.innerHTML = injectHTML;

    const { ARIA, FILTERS } = loadConstants('shared');
    return { ARIA, FILTERS };
}

export default generateHomepage;