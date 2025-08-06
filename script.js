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
        span.classList.add("symbol");
        wordContainer.appendChild(span);
    });
}

function resetGame() {
    currentCharIndex = 0;
    wordMistakes = 0;
    currentWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    wordMistakesElement.textContent = wordMistakes;
}

document.addEventListener("keydown", (event) => {
    const inputChar = event.key.toLowerCase(); 
    const spans = wordContainer.querySelectorAll('span');

    if (inputChar === currentWord[currentCharIndex].toLowerCase()) { 
        spans[currentCharIndex].classList.remove('w');
        spans[currentCharIndex].classList.add('c');
        currentCharIndex++; 
    } else {
        wordMistakes++;
        if (currentCharIndex < spans.length) {
            spans[currentCharIndex].classList.add('w'); 
        }
    }

    wordMistakesElement.textContent = wordMistakes;

    if (currentCharIndex === currentWord.length) {
        if (wordMistakes === 0) {
            correctCount++;
        } else {
            wrongCount++;
        }

        correctCountElement.textContent = correctCount;
        wrongCountElement.textContent = wrongCount;

        resetGame();
    }
});

resetGame();