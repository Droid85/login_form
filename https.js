class HTTP {
    static #API = 'https://jsonplaceholder.typicode.com/';

    get(endpoint) {
        return fetch(HTTP.#API + endpoint)
    }
}
