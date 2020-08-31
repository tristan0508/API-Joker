let joke;

// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

export const useJoke = () => {
    return joke[Math.floor(Math.random()*joke.length)];
};


export const getJoke = async(type) =>{
    let response;
    let data;
    if (type === "default") {
        response = await fetch('https://official-joke-api.appspot.com/jokes/ten')
        data = await response.json();
        joke = data;
};
    if (type === "programming") {
        response = await fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
        data = await response.json();
        joke = data;
};
    if (type === "knock-knock") {
        response = await fetch('https://official-joke-api.appspot.com/jokes/knock-knock/ten')
        data = await response.json();
        joke = data;
};
    if (type === "general") {
        response = await fetch('https://official-joke-api.appspot.com/jokes/general/ten')
        data = await response.json();
        joke = data;
};
    return joke;
};


