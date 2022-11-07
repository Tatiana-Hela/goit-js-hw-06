function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const createBtnRef = controlsRef.querySelector("[data-create]");
const destroyBtnRef = controlsRef.querySelector("[data-destroy]");
const inputRef = controlsRef.querySelector("input");
const boxesRef = document.querySelector("#boxes");

function onClick() {
  const amount = inputRef.valueAsNumber;
  if (!amount) return;
  const markup = createBoxes(amount);
  updatePages(markup);
}

function createBoxes(amount) {
  const markup = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const elem = `<div class="item" style="width: ${size}px;
    height: ${size}px;
    background: ${getRandomHexColor()}"><div>`;
    size += 10;
    markup.push(elem);
  }
  return markup.join("");
}
function updatePages(markup = "") {
  boxesRef.innerHTML = markup;
}
createBtnRef.addEventListener("click", onClick);
destroyBtnRef.addEventListener("click", () => {
  inputRef.value = "";
  updatePages();
});
