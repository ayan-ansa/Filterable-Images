const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");

let filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  cards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all" ) {
      card.classList.remove("hide");
    }
  });
};
buttons.forEach((button) => button.addEventListener("click", filterCards));
