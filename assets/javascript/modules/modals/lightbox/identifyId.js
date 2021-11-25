function identifyId(btn, modalBasics) {
    let i = 0;
    let startId = undefined;

    modalBasics.lightbox.openButtons.forEach(element => {
        if(element === btn) {
            startId = i;
        }
        i += 1;
    });

    return startId;
}

export default identifyId;