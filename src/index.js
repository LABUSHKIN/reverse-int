// reverse-int --- смотреть в консоли (включив все консоли) и все будет понятно

let n = -991;
console.log (n);

 module.exports = function reverse (n) {
let Arr = Math.abs(n);

//let arr2 = num.toString(Arr);
//console.log (Arr);
let Arr1 = Arr.toString();
//console.log(Arr1); console.log(typeof Arr1);
let Arr2 = Arr1.split('');
//console.log(Arr2);
let Arr3 = Arr2.reverse();
//console.log(Arr3);
let Arr4 = Arr3.join('');
//console.log(Arr);
//console.log(typeof Arr4);
return Arr4;
 };
