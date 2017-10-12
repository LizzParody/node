var fs = require('fs');
console.log(fs.readFileSync('../prueba')); //returns the buffer
console.log(fs.readFileSync('../prueba').toString()); //returns a string
console.log(fs.readFileSync('../prueba').toString().split('\n').length - 1); //returns the number of lines

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1); //returns the number of lines of the process argv
