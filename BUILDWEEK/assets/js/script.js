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

// const amount = document.getElementById("level");
// console.log(amount);
let difficulty = "";
let amount = 0;
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const num_1 = document.getElementById("num_1");
const num_2 = document.getElementById("num_2");
const num_3 = document.getElementById("num_3");
easy.onclick = function () {
  difficulty = "easy";
};
medium.onclick = function () {
  difficulty = "medium";
};
hard.onclick = function () {
  difficulty = "hard";
};
num_1.onclick = function () {
  amount = parseInt(num_1.innerText);
  // amount = 5;
};
num_2.onclick = function () {
  amount = parseInt(num_2.innerText);
  // amount = 10;
};
num_3.onclick = function () {
  amount = parseInt(num_3.innerText);
  // amount = 20;
};
let arrayQuestions = [];
async function getQuestions(difficulty, amount) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}`
    );
    const data = await response.json();
    arrayQuestions = data.results;
    // return arrayQuestions;
    const jsonArray = JSON.stringify(arrayQuestions);
    const url = `benchmark.html?array=${encodeURIComponent(jsonArray)}`;
    window.location.href = url;
  } catch (error) {
    console.log("errore nel recupero delle domande");
    const main = document.querySelector("main");
    const new_alert = document.createElement("p");
    new_alert.classList.add("alert");
    new_alert.innerText = " * errore nel recupero delle domande";
    main.appendChild(new_alert);
    return [];
  }
}

//funzione per bottone proceed in welcome page
const main = document.querySelector("main");

let counter = 0;
proceed_button.onclick = function () {
  if (difficulty === "" && amount === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("alert");

    main.appendChild(errorMessage);
    errorMessage.style.display = "block";
    errorMessage.textContent = "* Insert difficulty and amount ";
  } else if (difficulty === "" && amount !== 0) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("alert");

    main.appendChild(errorMessage);
    errorMessage.style.display = "block";
    errorMessage.textContent = "* Insert difficulty ";
  } else if (difficulty !== "" && amount === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("alert");

    main.appendChild(errorMessage);
    errorMessage.style.display = "block";
    errorMessage.textContent = "* Insert number of questions ";
  } else {
    if (checkbox.checked == true) {
      getQuestions(difficulty, amount);
      //se la checkbox è spuntata manda al benchmark
      // const jsonArray = JSON.stringify(getQuestions(difficulty, amount));
      // const url = `benchmark.html?array=${jsonArray}`;
      // window.location.href = url;
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
  }
};

let new_buttons = document.querySelectorAll(".btn-selection");
new_buttons.forEach((element) => {
  element.addEventListener("click", function () {
    new_buttons.forEach((element) => {
      element.classList.remove("selected");
    });
    element.classList.add("selected");
  });
});
let new_buttons_2 = document.querySelectorAll(".btn-selection_2");
new_buttons_2.forEach((element) => {
  element.addEventListener("click", function () {
    new_buttons_2.forEach((element) => {
      element.classList.remove("selected");
    });
    element.classList.add("selected");
  });
});
