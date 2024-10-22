// Sezione sviluppo Pie Chart
/*const canvas = document.getElementById("chart");
const context = canvas.getContext("2d");
const data = [66.7, 33.3];
const colors = ["#00FFFF", "#D20094"];
const total = data.reduce((a, b) => a + b, 0);
let startAngle = 0;

for (let i = 0; i < data.length; i++) {
  const sliceAngle = (data[i] / total) * 2 * Math.PI;
  context.beginPath();
  context.moveTo(200, 200);
  context.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
  context.closePath();
  context.fillStyle = colors[i];
  context.fill();
  startAngle += sliceAngle;
}
/*context.beginPath();
context.moveTo(200, 200);
context.arc(200, 200, 70, 0, 2 * Math.PI);
context.strokeStyle = "transparent";
context.stroke();
context.beginPath();
context.arc(canvas.width / 2, canvas.height / 2, innerRadius, 0, 2 * Math.PI);
context.fillStyle = "rgba(255, 255, 255, 0)"; // Trasparente
context.fill();*/
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
canvas.style.transform = "rotate(30deg)";
//canvas.style.boxShadow = "0px 0px 16px 6px rgba(0,0,0,0.89)";
// Dati per il grafico
const data = [66.7, 33.3]; // Valori percentuali
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
