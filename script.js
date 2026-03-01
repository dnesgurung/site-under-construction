document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("notifyForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    thankYouMessage.textContent =
      "Thank You! We will notify you when we launch.";
  });

  emailInput.value = "";
});
