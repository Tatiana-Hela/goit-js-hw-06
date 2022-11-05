// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у спиcку ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemsEL = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEL.length}`);
console.log("");
itemsEL.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listEL = item.lastElementChild;
  console.log(`Elements: ${listEL.children.length}`);
  console.log("");
});
