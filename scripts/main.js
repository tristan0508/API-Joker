import { getJoke, useJoke } from './JokeProvider.js';
import { Joke } from './Joke.js';

const punchBtn = document.querySelector(".request-punch-btn");
const jokeBtn = document.querySelector(".request-joke-btn");
const jokeSetup = document.querySelector(".joke-setup");
const jokePunch = document.querySelector(".joke-punchline");
const jokeType = document.querySelector("#jokeOptions");

let joke;
jokeType.addEventListener("click", (jokeType) => {
  if (jokeType.target.value === "default") {
    joke = getJoke("default")

  }
  if (jokeType.target.value === "programming") {
    joke = getJoke("programming")

  }
  if (jokeType.target.value === "knock-knock") {
    joke = getJoke("knock-knock")

  }
  if (jokeType.target.value === "general") {
    joke = getJoke("general")

  }
  return joke;

});

jokeBtn.addEventListener("click", () => {
    let jokeFunc = useJoke()
    jokeSetup.innerHTML = `Setup: ${Joke(jokeFunc.setup)}`;
    jokePunch.innerHTML = "";

punchBtn.addEventListener("click", () => {
    jokePunch.innerHTML = `Punch: ${Joke(jokeFunc.punchline)}`;
    });
});
