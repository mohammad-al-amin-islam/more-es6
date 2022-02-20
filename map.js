const array = [1, 2, 3, 4];
const output = [];
// old system 
/* const double = x => x * 2;
for (const number of array) {
    const result = double(number);
    output.push(result);
};

console.log(output); */

//handle with map 
//it will do loop through each element
//it will call provided function
//result will push into array by itself

//const output2 = array.map(double);
const output2 = array.map(x => x * 2);
console.log(output2);


// another map practice
const numbers = [1, 3, 4, 6, 7, 5];
const makeSquares = numbers.map(x => x * x);
console.log(makeSquares);
