// How to loop over the array objects, make calculations and add it as a new property to the object array/ For example:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Karla", "Max"] },
  { weight: 8, curFood: 200, owners: ["Anelya"] },
  { weight: 13, curFood: 275, owners: ["Venera", "Almas"] },
  { weight: 32, curFood: 340, owners: ["Tima"] },
];

const recommendedFoodPortion = function (dogs) {
  dogs.forEach(
    (dog) => (dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28))
  );
};
recommendedFoodPortion(dogs);
console.log(dogs);

// References:
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
