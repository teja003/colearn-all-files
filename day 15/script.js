// +, -, *, **, /, %, ++, --
// =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??=
// &&, ||, !, ??
// ==, ===, !=, !==, >, >=, <, <=
// &, |, ~, ^, <<, >>


let num = 10;
let num1 = 10;
// console.log(num <= num1);
// console.log(5 > 6); // false
// console.log(7 > 6); // true
// console.log(7 < 7); // false
// console.log(9 < 7); // false
// console.log(9 != 9); // false
// console.log(9 != 20); // true
// console.log(9 > 2); // true
// console.log(9 >= 2); // true
// console.log(9 <= 2); // false
// console.log(9 == 2); // false

let snum = '100';

let res = snum/'10'

// console.log(typeof res);

let v1 = "Teja" + 20;
console.log(typeof v1);

let v2 = "Teja"+20+1
console.log(v2)

let v3 = 23+1+"Teja"
console.log(v3);

let v4 = 23+1-"10 jkgyg"
console.log(v4)

let v5 = 50 / "JS"
console.log(v5);
console.log(typeof v5);

console.log(isNaN(v5));
console.log(isNaN(v4));

console.log(NaN - 5);
console.log(NaN + 5);

let v6 = "10.55days"
console.log(typeof v6);
v6 = parseFloat(v6)
console.log(typeof v6);
console.log(typeof v6.toString());

console.log(v6.valueOf())
console.log(v6.toPrecision(3))