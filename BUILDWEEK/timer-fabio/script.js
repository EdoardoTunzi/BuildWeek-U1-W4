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
    resetCircle(); // resetta il cerchio a vuoto
    showNextQuestion(); // passa alla prossima domanda
  } else {
    timer = requestAnimationFrame(updateProgressBar); // continua ad aggiornare la progress bar
  }
}

function resetCircle() {
  circle.style.strokeDashoffset = strokeDashArray; // resetta il cerchio a vuoto
}

function showNextQuestion() {
  // logica per mostrare la prossima domanda
  startTimer(); // riavvia il timer per la prossima domanda
}

startTimer(); // avvia il timer
