// To sort an array objects based on its properties in the ascending order, we need to use sort() method. Keep in mind, that sort() method mutates the original array, hence we can make the shallow copy of the original array firts and make changes to it.

const dogs = [
  { weight: 22, curFood: 250, owners: ["Karla", "Max"] },
  { weight: 8, curFood: 200, owners: ["Anelya"] },
  { weight: 13, curFood: 275, owners: ["Venera", "Almas"] },
  { weight: 32, curFood: 340, owners: ["Tima"] },
];

console.log(dogs.slice().sort((a, b) => a.curFood - b.curFood));

// Reference:
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
