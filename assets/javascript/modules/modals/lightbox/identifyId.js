function identifyId(btn, MODAL_BASICS) {
    let i = 0;
    let startId = undefined;

    MODAL_BASICS.lightbox.openButtons.forEach(element => {
        if(element === btn) {
            startId = i;
        }
        i += 1;
    });

    return startId;
}

export default identifyId;