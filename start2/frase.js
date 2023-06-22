const words = [ "interfacce web", "single page app", "app native"];
let currentWordIndex = 0;
const wordElements = document.getElementsByClassName("parole");

function changeWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  for (let i = 0; i < wordElements.length; i++) {
    wordElements[i].textContent = words[currentWordIndex];
  }
}

setInterval(changeWord, 3000);
