function focusSkipLink(filter, event) {
    event.preventDefault();
    
    const skipLink = filter.closest('nav.filter').querySelector('a.skip-link');
    skipLink.focus();
}

export default focusSkipLink;