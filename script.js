document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("notifyForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    form.style.display = "none";

    thankYouMessage.textContent =
      "Thank You! We will notify you when we launch.";

      thankYouMessage.classList.add("show");
  });

});

