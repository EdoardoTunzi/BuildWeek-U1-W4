const checkbox = document.getElementById("box");

const proceed_button = document.getElementById("proceed_button");
if (checkbox.checked == true) {
  proceed_button.style =
    "margin-left: 200px;background-color: #00ffff;color: #0c1839;font-weight: bold;padding: 15px;padding-inline: 50px;font-size: 20px;border: none;";
}
checkbox.onclick = function () {
  if (checkbox.checked == true) {
    proceed_button.style =
      "margin-left: 200px;background-color: #00ffff;color: #0c1839;font-weight: bold;padding: 15px;padding-inline: 50px;font-size: 20px;border: none;";
  } else {
    proceed_button.style = "background-color:white";
  }
};

proceed_button.onclick = function () {
  if (checkbox.checked == true) {
  } else {
    const main = document.querySelector("main");
    const new_alert = document.createElement("p");
    new_alert.classList.add("alert");
    new_alert.innerText = " * Please validate the checkbox to continue!";
    main.appendChild(new_alert);
  }
};
