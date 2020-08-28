import { getJoke, useJoke } from './JokeProvider.js';
import { Joke } from './Joke.js';

const punchBtn = document.querySelector(".request-punch-btn");
const jokeBtn = document.querySelector(".request-joke-btn");
const jokeSetup = document.querySelector(".joke-setup");
const jokePunch = document.querySelector(".joke-punchline");



let joke = "";

jokeBtn.addEventListener("click", (e) => {
  getJoke().then(() => {
    joke = useJoke()
    jokeSetup.innerHTML = `Setup: ${Joke(joke.setup)}`;
  })



punchBtn.addEventListener("click", (e) => {
  // getJoke().then(() => {
    joke = useJoke()
    jokePunch.innerHTML = `Punch: ${Joke(joke.punchline)}`;
  })
});





// TODO: fetch a joke from the Joke API and render it to the DOM