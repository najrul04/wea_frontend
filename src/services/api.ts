export const fetchForestData = async () => {
    const response = await fetch('http://localhost:3000/forest/data');
    if(!response.ok) {
        throw new Error('Failed to fetch forest data');
    }
    return  response.json();
}