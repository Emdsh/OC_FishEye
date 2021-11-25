// get the data out of the API
async function getPhotographers(path) {
    if (path === '/BaptisteLizot_5_07902021_pre10112021/') {
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

    if (path === '/BaptisteLizot_5_07902021_pre10112021/photographer/') {
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