//Hello World
console.log("hello")


// variables
var example = 'some string';
console.log(example);


// strings
var someString = 'this is a string'
console.log(someString);


// length of String
var example = 'example string';
console.log(example.length)


// replace method
var pizza = 'pizza is alright'
result = pizza.replace('alright', 'wonderful');
console.log(result);


// numbers
var example = 123456789;
console.log(example);


// round
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);


// number to string
var n = 128;
console.log(n.toString());


// if/else statement
var fruit = 'orange';

if (fruit.length > 5) {
  console.log("The fruit name has more than five characters.");
} else {
  console.log("The fruit name has five characters or less.");
}


// for loop
var total = 0;
var limit = 10;

for (var i = 0; i < limit; i++) {
  total += i;
}

console.log(total);


// array
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);


// filtering arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function (number) {
  return (number % 2 === 0)
});

console.log(filtered);


// accessing arrays
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);


// looping through arrays
var pets =  ['cat', 'dog', 'rat'];
var result = pets.map(function (pet) {
  return pet + 's';
})
console.log(result);


// objects
var pizza = {
   toppings: ['cheese', 'sauce', 'pepperoni'],
   crust: 'deep dish',
   serves: 2
 };

console.log(pizza);


// accessing objects
var food = {
  types: 'only pizza'
};

console.log(food.types);


// functions
function eat(food) {
  return food + ' tasted really good.';
}

console.log(eat('bananas'));


// function arguments
function math(a, b, c) {
  return b * c + a;
}

console.log(math(53, 61, 67));


// variable scope
var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
                console.log("a: "+a+", b: "+b+", c: "+c);

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();
