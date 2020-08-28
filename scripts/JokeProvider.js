let joke;

// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

export const useJoke = () => {
    return joke;
}

export const getJoke = () =>{
    return fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(response => joke = response);
};




