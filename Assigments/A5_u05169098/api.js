const BASE_URL = 'https://swapi.dev/api/people/';


export async function getCharacterById(id) {

    try 
    {
        const response = await fetch(`${BASE_URL}${id}/`);

        if (!response.ok) {
            throw new Error(`Character with ID ${id} not found.`);
        }
        
        const data = await response.json();
        return data;
    } 
    catch (error) 
    {
        console.error('Error fetching character by ID:', error);
        return { error: error.message };
    }
}


export async function getCharacterByName(name) 
{
    try {
        const response = await fetch(`${BASE_URL}?search=${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data.');
        }
        const data = await response.json();
        if (data.results.length === 0) {
            throw new Error('Character not found.');
        }
        return data.results[0];     
    } 
    catch (error) 
    {
        console.error('Error fetching character by name:', error);
        return { error: error.message };
    }
}

