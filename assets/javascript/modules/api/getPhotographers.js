// get the data out of the API
<<<<<<< HEAD
async function getPhotographers(PATH) {
    if (PATH === '/OC_FishEye/') {
=======
async function getPhotographers(path) {
    if (path === '/BaptisteLizot_5_07902021_pre10112021/') {
>>>>>>> main
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

<<<<<<< HEAD
    if (PATH === '/OC_FishEye/photographer/') {
=======
    if (path === '/BaptisteLizot_5_07902021_pre10112021/photographer/') {
>>>>>>> main
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