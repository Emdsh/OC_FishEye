// get the data out of the API
async function getPhotographers(path) {
    if (path === '/OC_FishEye/') {
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

    if (path === '/OC_FishEye/photographer/') {
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