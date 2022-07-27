const dogs = [
  { weight: 22, curFood: 250, owners: ["Karla", "Max"] },
  { weight: 8, curFood: 200, owners: ["Anelya"] },
  { weight: 13, curFood: 275, owners: ["Venera", "Almas"] },
  { weight: 32, curFood: 340, owners: ["Tima"] },
];

console.log(dogs.slice().sort((a, b) => a.curFood - b.curFood));
