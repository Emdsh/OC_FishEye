function toggleChecked (filter, filters) {
    let reset = undefined;

    filters.forEach(f => {
        if (f.name === filter) {
            if(f.classList.contains('checked')) {
                f.classList.remove('checked');
                return reset = true;
            }
            f.classList.add('checked');
        }

        if (f.name !== filter) {
            f.classList.remove('checked');
        }
    });
    
    return reset;
}

export default toggleChecked;