//function declaration

// function greet(params) {
//     console.log('Hello there');
//     }

// greet();
// greet();
// greet();


// //function expression
// const speak = function (params) {
//     console.log('good day!');
//     }

// speak();
// speak();
// speak();

// arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
//     };

//     speak();
//     speak('shaun');

// returning values

// const calcArea = function (radius) {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

//Arrow function 

const calcArea = radius => 3.14 **2;

const area = calcArea(5);
console.log(area);

//practise arrow function

// const greet = function () {
//     return 'hellow, world';
// }

const greet = () => 'hello world'

console.log(greet());


// const bill = function (products, tax) {
//     let total = 0;
//     for (let index = 0; index < products.length; index++) {
//        total += products[index] + products[index] * tax;
//     }
//     return total;
// }


const bill = (products, tax) => {
  let total = 0;
      for (let index = 0; index < products.length; index++) {
         total += products[index] + products[index] * tax;
      }
      return total;
}

console.log(bill([10,15,30], 0.2));
