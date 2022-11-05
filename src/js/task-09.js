// Напиши скрипт, який змінює кольори фону елемента <body>
//  через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

const widgetEl = document.querySelector(".widget");
const spanEl = widgetEl.querySelector(".color");
const btnEl = widgetEl.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickBtn() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  spanEl.textContent = color;
}
btnEl.addEventListener("click", onClickBtn);
