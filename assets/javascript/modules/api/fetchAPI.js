async function fetchAPI() {
    try {
        const response = await fetch('assets/api/api.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        return await response.json();
    }

    catch (error) {
        console.log(error);
    }
}

export default fetchAPI;