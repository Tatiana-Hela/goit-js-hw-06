// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const controlInputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

const onChangeFontSize = (event) => {
  spanEL.style.fontSize = String(event.currentTarget.value) + "px";
};

controlInputEl.addEventListener("input", onChangeFontSize);
