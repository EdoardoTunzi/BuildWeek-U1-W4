document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const moreInfoButton = document.querySelector(".btn");
  const feedbackInput = document.querySelector('input[type="text"]');
  const errorMessage = document.getElementById("error-message");
  let rating = 0;

  stars.forEach((star, index) => {
    star.style.filter = "grayscale(100%)";

    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        s.style.filter = i <= index ? "none" : "grayscale(100%)";
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s, i) => {
        s.style.filter = i < rating ? "none" : "grayscale(100%)";
      });
    });

    star.addEventListener("click", () => {
      rating = index + 1;
      stars.forEach((s, i) => {
        s.style.filter = i < rating ? "none" : "grayscale(100%)";
      });
    });
  });

  moreInfoButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (rating === 0) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Inserisci una valutazione";
    } else if (feedbackInput.value.trim() === "") {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Inserisci un feedback";
    } else {
      errorMessage.style.display = "none";

      let url;
      if (rating <= 5) {
        url = "bad-feedback.html";
      } else if (rating <= 8) {
        url = "medium-feedback.html";
      } else {
        url = "good-feedback.html";
      }
      window.location.href = url;
    }
  });
});
