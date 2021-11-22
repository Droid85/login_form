class HTTP {
    static #API = 'https://jsonplaceholder.typicode.com/';//this for test

    send(endpoint, authData) {
        return fetch(HTTP.#API + endpoint, {
            method: 'POST',
            body: JSON.stringify(authData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}
