const sprite = document.querySelector(".sprite");
const hiddenDiv = document.querySelector(".hiddenDiv");

// Функция для изменения спрайта при открытии и закрытии
function toggleSprite() {
  if (hiddenDiv.style.display === "none") {
    sprite.querySelector("use").setAttribute("href", "/cocktails-Bar/assets/sprite-224d9901.svg#icon-chevron-down");
  } else {
    sprite.querySelector("use").setAttribute("href", "/cocktails-Bar/assets/sprite-224d9901.svg#icon-chevron-up");
  }
}

// Добавляем обработчик события для клика на спрайт
sprite.addEventListener("click", function () {
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "flex";
  } else {
    hiddenDiv.style.display = "none";
  }
  toggleSprite();
});