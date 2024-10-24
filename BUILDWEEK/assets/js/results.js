let urlParams = new URLSearchParams(window.location.search);
let correct = urlParams.get("correct");
let wrong = urlParams.get("wrong");
let totalQuestions = urlParams.get("len");
//modifichiamo il valore dei parametri del testo
let descriptionCorrect = document.querySelector("#correct .description2");
descriptionCorrect.innerHTML = `${correct}/${totalQuestions} questions`;

let descriptionWrong = document.querySelector("#wrong .description2");
descriptionWrong.innerHTML = `${wrong}/${totalQuestions} questions`;

//calcoli per percentuali
let correctPerc = (correct * 100) / totalQuestions;
let wrongPerc = (wrong * 100) / totalQuestions;

//modifica valore percentuali pagina
let documentCorrectPerc = document.querySelector("#correct .percent");
documentCorrectPerc.innerHTML = `${correctPerc}%`;

let documentWrongPerc = document.querySelector("#wrong .percent");
documentWrongPerc.innerHTML = `${wrongPerc}%`;

//modifica testo esito esame in pagina
let chartText = document.querySelector(".chart-text");

if (correctPerc >= 60) {
  chartText.innerHTML = `<p id="congrats">Congratulations!</p><p id="passed-text">You passed the exam.</p><p id="passed-info">We'll send you the certificate <br />in few minutes. <br />Check your email (including <br />promotions / spam folder)</p>`;
} else {
  chartText.innerHTML = `<p id="congrats">OPS!</p><p id="passed-text">You haven't passed the exam.</p>`;
  chartText.style = "line-height:20px";
}

//difiniamo le regole del bottone
let nextPageButton = document.getElementById("rate-us");
nextPageButton.onclick = function () {
  window.location.href = "feedback.html";
};

// Sezione sviluppo Pie Chart
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

//canvas.style.boxShadow = "0px 0px 16px 6px rgba(0,0,0,0.89)";
// Dati per il grafico
const data = [correctPerc, wrongPerc]; // Valori percentuali
const colors = ["#00FFFF", "#D20094"]; // Colori

// Funzione per disegnare il grafico a ciambella
function drawDoughnutChart(data, colors) {
  const total = data.reduce((sum, value) => sum + value, 0);
  const radius = 100; // Raggio interno per l'effetto ciambella
  let startAngle = 0;

  // Disegna i segmenti
  data.forEach((value, index) => {
    const sliceAngle = (value / total) * (Math.PI * 2); // Calcola l'angolo del segmento

    // Disegna l'arco
    ctx.beginPath();
    ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle, false); // Arco esterno
    ctx.arc(200, 200, radius, startAngle + sliceAngle, startAngle, true); // Arco interno
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();

    startAngle += sliceAngle; // Aggiorna l'angolo di partenza per il prossimo segmento
  });
}

// Disegna il grafico
drawDoughnutChart(data, colors);
