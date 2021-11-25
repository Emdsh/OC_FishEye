function anchor() {
    const anchor = document.getElementById('skip-to-main');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            anchor.classList.add('visible');
        }
        if (window.scrollY < 100) {
            anchor.classList.remove('visible');
        }
    });
}

export default anchor;