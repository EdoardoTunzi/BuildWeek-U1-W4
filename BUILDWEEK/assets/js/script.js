const checkbox = document.getElementById("box");

const proceed_button = document.getElementById("proceed_button");
//funzione per colorare il pulsante proceed dopo aver spuntato la checkbox
checkbox.onclick = function () {
  if (checkbox.checked == true) {
    proceed_button.style =
      "margin-left: 200px;background-color: #00ffff;color: #0c1839;font-weight: bold;padding: 15px;padding-inline: 50px;font-size: 20px;border: none;";
  } else {
    proceed_button.style = "background-color:white";
  }
};

//funzione per bottone proceed in welcome page
let counter = 0;
proceed_button.onclick = function () {
  if (checkbox.checked == true) {
    //se la checkbox è spuntata manda al benchmark
  } else {
    //se la checkbox non è spuntata mostra un alert
    if (counter === 0) {
      const main = document.querySelector("main");
      const new_alert = document.createElement("p");
      new_alert.classList.add("alert");
      new_alert.innerText = " * Please validate the checkbox to continue!";
      main.appendChild(new_alert);
      counter += 1;
    }
  }
};
