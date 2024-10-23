// startTimer();

//////////////////////////////////////////////////////////

const arrayQuestions = [
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
];

//definiamo variabili da passare alla pagina results
let correctAnswers = 0;
let wrongAnswers = 0;

let questionNumber = 0; //indice domanda di arrayQuestions

let timer;
let startTime;
const totalTime = 60; // tempo totale in secondi
const circle = document.querySelector("circle");
const strokeDashArray = 472; // valore fisso per il cerchio
circle.style.strokeDasharray = strokeDashArray; // imposta il valore dasharray

function startTimer() {
  resetCircle();
  startTime = Date.now(); // imposta l'ora di inizio
  timer = requestAnimationFrame(updateProgressBar); // inizia ad aggiornare la progress bar
}

function updateProgressBar() {
  const currentTime = Date.now(); // ottieni il tempo attuale
  const elapsedTime = (currentTime - startTime) / 1000; // calcola il tempo trascorso in secondi
  const timeLeft = Math.max(totalTime - elapsedTime, 0); // tempo rimanente

  // calcola l'offset in base al tempo rimanente
  const dashOffset = (timeLeft / totalTime) * strokeDashArray;
  circle.style.strokeDashoffset = dashOffset; // imposta l'offset

  // aggiorna il display del timer
  document.getElementById("timer").textContent = Math.ceil(timeLeft); // arrotonda per eccesso

  if (timeLeft <= 0) {
    if (questionNumber === arrayQuestions.length - 1) {
      wrongAnswers += 1;
      window.location.href = "results.html";
    } else {
      questionNumber++;
      wrongAnswers += 1;
      resetCircle(); // resetta il cerchio a vuoto
      showQuestion(arrayQuestions); // passa alla prossima domanda
    }
  } else {
    timer = requestAnimationFrame(updateProgressBar); // continua ad aggiornare la progress bar
  }
}

function resetCircle() {
  circle.style.strokeDashoffset = strokeDashArray; // resetta il cerchio a vuoto
}

//definiamo funzione per visualizzare dinamicamente
function showQuestion(array) {
  startTimer();
  //selezione h1 e inserimento domanda attuale
  const questionTitle = document.querySelector("h1");
  questionTitle.innerText = array[questionNumber].question;
  //selezione e pulizia container
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";
  //selezione e modifica contatore domanda
  const questionCounter = document.querySelector("footer p");
  questionCounter.innerHTML = `QUESTION ${questionNumber + 1} <span> / ${
    arrayQuestions.length
  }</span>`;
  //definiamo funzione per mescolare le risposte giuste e sbagliate
  const shuffleAnswers = (questionNumber) => {
    let allAnswers = [arrayQuestions[questionNumber].correct_answer];
    arrayQuestions[questionNumber].incorrect_answers.forEach((answer) =>
      allAnswers.push(answer)
    );
    return allAnswers.sort(() => Math.random() - 0.5);
  };
  //controllo per numero di domanda e risposta corretta o errata
  let question = array[questionNumber].question;
  let answerArray = shuffleAnswers(questionNumber);
  for (let i = 0; i < answerArray.length; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = answerArray[i];
    newButton.onclick = function () {
      if (questionNumber === arrayQuestions.length - 1) {
        if (newButton.innerText == array[questionNumber].correct_answer) {
          correctAnswers += 1;
          questionNumber++;
        } else {
          wrongAnswers += 1;
          questionNumber++;
        }
        window.location.href = "results.html";
      } else {
        if (newButton.innerText == array[questionNumber].correct_answer) {
          correctAnswers += 1;
          questionNumber++;
          showQuestion(arrayQuestions);
        } else {
          wrongAnswers += 1;
          questionNumber++;
          showQuestion(arrayQuestions);
        }
      }
    };
    //aggiunta bottoni per le risposte
    quizContainer.appendChild(newButton);
  }
  // startTimer();
}

showQuestion(arrayQuestions);
