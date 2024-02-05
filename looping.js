// // // Looping Tecniq
// // 1.. for loop
// // 2.. while loop
// // 3.. do while
// // 4.. for of ----> ignore
// // 5.. for in --> objct loop korar jono
let foods = ["lau", "sim", "pepe", "pui shak", "misty lau"];

for (let food of foods) {
  //   console.log(food);A
}
// for loop
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1000];
// for loop
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

for (let numbers of number) {
  console.log(numbers);
}

// while loop
let i = 0;
while (i < number.length) {
  console.log(number[i]);
  i++;
}

// while loop

let nem = [1, 2, 3, 4, 5, 8, 8, 5, 6, 1];
let n = 0;
while (n < nem.length) {
  console.log(nem[n]);
  n++;
}
