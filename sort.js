// sort  ---> shajano*****---->2vabe shajano jay

// Ascending --- choto theke bro
//Descending---- bro theke choto

const person = ["skib", "tamim", "mahamudulla Riyad", "Liton Das"];
const soratedPerson = person.sort();
console.log(soratedPerson);

const numbers = ["10", "20", "43", "12", "28", "46", "48", "14"];
// choto thelke bro
const numbers_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
const numbers_dsc = [...numbers].sort(function (a, b) {
  return b - a;
});

console.log(numbers_asc);
console.log(numbers_dsc);
