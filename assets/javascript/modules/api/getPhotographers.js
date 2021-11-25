async function getPhotographers(PATH) {
    if (PATH === '/OC_FishEye/') {
        try {
            const response = await fetch('./assets/api/api.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
    
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    if (PATH === '/OC_FishEye/photographer/') {
        try {
            const response = await fetch('../assets/api/api.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
    
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

export default getPhotographers;