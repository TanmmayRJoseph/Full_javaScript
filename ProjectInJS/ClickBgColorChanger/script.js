const button = document.querySelectorAll(".button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.id;
  });
});
