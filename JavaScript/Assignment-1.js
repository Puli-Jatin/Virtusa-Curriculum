//this is console.log
//console.log(1);
//console.log(2);
//console.log(3);
////=======================================//

////var & const//
//let a = 10;
//let b = 20;
//let c = a + b;
//console.log(c);

//var a = 25;
//console.log(a);

//const car = "BMW";
//console.log(car);
////=======================================//

//Strings //

//let email = 'diuase@dsfhu.com';
//console.log(email);

//String Concatenation//

//let firstName = 'Diu';
//let lastName = 'Ase';
//let fullName = firstName + ' ' + lastName;
//console.log(fullName);

//getting characters from a string //
//console.log(fullName[0]);
//console.log(fullName[1]);
//console.log(fullName[2]);
//console.log(fullName[3]);
//String length //
//console.log(fullName.length);
//String methods //
//console.log(fullName.toUpperCase());
//console.log(fullName.toLowerCase());
//console.log(firstName.toUpperCase());
//console.log(lastName.toLowerCase());
//let X = email.indexOf('@');
//console.log(X);

//String methods continued //

//let email = 'i am a studen @ diu.com';

//let result = email.lastIndexOf('@');
//let result = email.slice(0,10);
//let result = email.substring(4,8);
//let result = email.replace('s' , 'N');

//console.log(result);
// //=======================================//


//math operations //

//let radius = 10;
//const pi = 3.14;
//let output = pi * radius ** 2;
//console.log(output);

// //========================================//

// let length = 5;
// //length = length + 2;
// length += 2;
// length -= 2;
// length *= 2;
// length += 10;
// console.log(length);



// for (let i = 0; i < 5; i++) {
//   console.log('In loop:', i);
// }
// console.log('Loop finished');



// const names = ['Puli', 'Jatin', 'Rao'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }



// const names = ['Shawn', 'Mario', 'Luigi'];
// for (let i = 0; i < names.length; i++) {
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }



// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }


// const names = ['ABC', 'PQR', 'XYZ'];
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }


// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);



// const age = 25;
// if (age > 20) {
//   console.log('You are over 20 years old');
// }


// const Jatin = ['Puli', 'Jatin', 'Rao', 'N'];
// if (Jatin.length > 3) {
//   console.log("That's a lot of Jatins");
// }


// const password = 'pass';
// if (password.length >= 8) {
//   console.log('Password is long enough');
// } else {
//   console.log('Password is not long enough');
// }


// const password = 'password123';
// if (password.length >= 12) {
//   console.log('That password is mighty strong');
// } else if (password.length >= 8) {
//   console.log('Password is long enough');
// } else {
//   console.log('Password is not long enough');
// }


// const password = 'securepass@123';
// if (password.length >= 12 && password.includes('@')) {
//   console.log('That password is mighty strong');
// }


// const password = 'pass@';
// if (password.length >= 8 || password.includes('@')) {
//   console.log('Password is strong enough');
// }

// const user = false;
// if (!user) {
//   console.log('You must be logged in to continue');
// }


const scores = [25, 0, 30, 100, 40];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log('Score:', scores[i]);
}
