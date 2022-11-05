// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const storageEl = [];
const listEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  storageEl.push(itemEL);
});
listEl.append(...storageEl);
