function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  boxStorage: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  amount = refs.input.value;
  const markupStorage = [];
  for (let i = 1; i <= amount; i += 1) {
    let markupEl = `<div class="box-${i}"></div>`;
    markupStorage.push(markupEl);
  }
  const markup = markupStorage.join("");
  refs.boxStorage.insertAdjacentHTML("afterbegin", markup);
  for (let i = 0; i < amount; i += 1) {
    refs.boxStorage.children[i].style.width = String(30 + 10 * i) + "px";
    refs.boxStorage.children[i].style.height = String(30 + 10 * i) + "px";
    refs.boxStorage.children[i].style.backgroundColor = getRandomHexColor();
  }
  refs.input.value = "";
}

function destroyBoxes() {
  refs.boxStorage.innerHTML = "";
}

function checkCorrectInputGenering() {
  refs.input.value > Number(refs.input.max)
    ? (refs.createBtn.disabled = true)
    : (refs.createBtn.disabled = false);
}

refs.createBtn.addEventListener("click", createBoxes);
refs.input.addEventListener("input", checkCorrectInputGenering);
refs.destroyBtn.addEventListener("click", destroyBoxes);
