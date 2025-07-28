// const list = [1721,979, 366, 299, 675, 1456];

// // let result;

// for (let a= 0; a < list.length; a++) {

// for (let b=a+1; b <list.length; b++) {

// for (let c=b+1;c<list.length; c++)

// if(list[a]+list[b]+list[c]===2020){

// num1 = list[a],

// num2=list[b];

// num3= list[c];

// console.log(`the three numbers are ${num1}, ${num2} and ${num3}`);

// output=list[a]+list[b]+list[c];

// console.log(`Sum of three numbers are ${output}`);

// product=list[a]*list[b]*list[c];

// console.log(`Product of those three numbers are ${product}`);

// break
// }
// }
// }

// console assert(result 241861950, The result is not correct, it is $(result), but should be 241 as 1950


const list = [1721,979, 366, 299, 675, 1456];

// let result;

for (let a= 0; a < list.length; a++) {

for (let b=a+1; b <list.length; b++) {


if(list[a]+list[b]===2020){

num1 = list[a],

num2 = list[b];


console.log(`the two numbers are ${num1}, ${num2} `);

output=list[a]+list[b];

console.log(`Sum of two numbers are ${output}`);

product=list[a]*list[b];

console.log(`Product of those two numbers are ${product}`);

break
}
}
}