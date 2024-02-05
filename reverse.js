const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

numbers.reverse();
console.log(numbers);
// // for off loop
const foods = ["lau", "misty kumra", "badam", "lal shak"];
const r_food = [];
for (const food of foods) {
  r_food.unshift(food);
}
console.log(r_food);

// for loop
const rev_foods = [];

for (let i = foods.length - 1; i >= 0; i--) {
  const num = foods[i];
  console.log(num);
  rev_foods.push(num);
}
console.log(rev_foods);
