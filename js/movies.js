export default class MovieHelper {

    constructor() {
        // Define our API root URL, we can then add specific paths onto the end for different queries
        this.api_root = "https://api.themoviedb.org/3"
        // Define our API key here
        this.api_key = "YOUR_API_KEY"
    }

    // Let's create a function where we can pass an API endpoint and it will return the response
    // We will want to do this a lot, so it makes sense to put it into a function to avoid repeating ourselves
    async apiRequest(endpoint) {
        let url = `${this.api_root}/${endpoint}`
        try {
            const response = await fetch(url, {
                // Pass our API key with the request headers
                headers: {
                    Authorization: `Bearer ${this.api_key}`
                }
            });
            return response
        } catch (error) {
            console.error("Error fetching: ", error)
        }
    }

    // Endpoint details: https://developer.themoviedb.org/reference/discover-movie
    async getMovies() {
        const response = await this.apiRequest("discover/movie")
        const json = await response.json()
        return json.results
    }

}