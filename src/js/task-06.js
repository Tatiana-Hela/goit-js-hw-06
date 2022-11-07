// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається
// в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const textInputEl = document.querySelector("#validation-input");
const validationInputEl = Number(textInputEl.getAttribute("data-length"));

textInputEl.addEventListener("blur", onBlur);

function addRemoveColor(remove, add) {
  textInputEl.classList.remove(remove);
  textInputEl.classList.add(add);
}

function onBlur(event) {
  if (event.currentTarget.value.length === validationInputEl) {
    addRemoveColor("invalid", "valid");
  } else {
    addRemoveColor("valid", "invalid");
  }
}
