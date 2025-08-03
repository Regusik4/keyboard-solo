const words = ['apple', 'mountain', 'mirror', 'cancer', 'choice', 'reference', 'simple', 'husband'];

let currentWord = "";
let currentCharIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let wordMistakes = 0;

const wordContainer = document.getElementById("wordContainer");
const correctCountElement = document.querySelector(".correct-count");
const wrongCountElement = document.querySelector(".wrong-count");
const wordMistakesElement = document.querySelector(".word-mistakes");

function displayWord() {
    wordContainer.innerHTML = ""; 
    currentWord.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = "black"; 
        wordContainer.appendChild(span);
    });
}

function resetGame() {
    currentCharIndex = 0;
    wordMistakes = 0;
    currentWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    correctCountElement.textContent = 0;
    wrongCountElement.textContent = 0;
    wordMistakesElement.textContent = 0;
}

document.addEventListener("keydown", (event) => {
    const inputChar = event.key.toLowerCase(); 
    const spans = wordContainer.querySelectorAll('span');
    if (inputChar === currentWord[currentCharIndex].toLowerCase()) { 
        correctCount++;
        spans[currentCharIndex].style.color = 'green'; 
        currentCharIndex++; 
    } else {
        wrongCount++;
        wordMistakes++;
        if (currentCharIndex < spans.length) {
            spans[currentCharIndex].style.color = 'red'; 
        }
    }

    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    wordMistakesElement.textContent = wordMistakes;

    if (currentCharIndex === currentWord.length) {
        alert('Слово введено правильно!');
        resetGame();
    }
});

resetGame();