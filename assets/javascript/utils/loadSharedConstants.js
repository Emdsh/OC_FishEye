function loadSharedConstants() {
    const ARIA = {
        filters: document.querySelectorAll('.filter__option'),
        skipLinks: document.querySelectorAll('.skip-link'),
    };

    const FILTERS = document.querySelectorAll('.filter__option');

    return { ARIA, FILTERS };
}

export default loadSharedConstants;