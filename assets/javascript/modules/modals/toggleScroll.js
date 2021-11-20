function preventDefault(event) {
    event.preventDefault();
}

function keyDownPreventDefault(event) {
    const KEY = event.key;
    if (KEY === ' ' || KEY === 'ArrowDown' || KEY === 'ArrowUp') {
        preventDefault(event);
    }
}

export function disableScroll() {
    window.addEventListener('wheel', preventDefault, {passive: false});
    window.addEventListener('touchmove', preventDefault, {passive: false});
    window.addEventListener('keydown', keyDownPreventDefault);
}

export function enableScroll() {
    window.removeEventListener('wheel', preventDefault, {passive: false});
    window.removeEventListener('touchmove', preventDefault, {passive: false});
    window.removeEventListener('keydown', keyDownPreventDefault);
}