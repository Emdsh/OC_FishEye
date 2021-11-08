import getFocusableTarget from './getFocusableTarget.js';

function focusSkipLinkTarget(link, event) {
    event.preventDefault();

    const linkTarget = link.getAttribute('href').replace('#','');
    const target = document.getElementById(linkTarget);
    target.focus();

    if (document.activeElement != target) {
        const focusableTarget = getFocusableTarget(target);
        focusableTarget.focus();
    }
}

export default focusSkipLinkTarget;