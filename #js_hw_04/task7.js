// Задание 7 - дополнительное, выполнять не обязательно

// 1. Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару)
// Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
const orderB = { orange: 10, pork: 2, bread: 1 };

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };

// let getPriceOrder = function (productsPrice, orders) {
//   let total = 0;
//   for (let keyProduct in productsPrice) {
//     for (let keyOrder in orders) {
//       if (keyOrder === keyProduct) {
//         total += productsPrice[keyProduct] * orders[keyOrder];
//       }
//     }
//   }
//   return total;
// };

// console.log(getPriceOrder(productsPrice, orderB));

// 2.Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні.
// Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) //
// isObjectEmpty({name: 'user, age: {21}}) // false

// let isObjectEmpty = function (argument1) {
//   let newArr = Object.keys(argument1);
//   if (newArr.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

let isObjectEmpty = function (argument1) {
  for (let key of argument1) {
    return false;
  }
  return true;
};

console.log(isObjectEmpty({}));

// 3.Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам ,
// а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// const SIZES = {

// BIG: { price: 25, cal: 100, time: 15 },
// SMALL : { price : 15, cal: 50, time: 7 },
// MEDIUM: { price : 15, cal: 50, time: 7 }
// },
// const STUFFING = {
// CHEESE: { price : 6.5, cal: 45, time: 2 },
// BEACON : { price : 10, cal: 70, time: 6 },
// TOMATO : { price : 12.1, cal: 4, time: 5 },
// CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
// MUSTARD: { price : 3, cal: 5, time: 1 },
// KETCHUP = { price : 4.2, cal: 20, time: 1.5 },
// BOLOGNESE = { price : 7.5, cal: 50, time: 3 }
// }
// Створити всі методи і перевірити чи вони працюють
