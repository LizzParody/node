// process arguments, sum the numbers of the array
console.log(process.argv);
[ '/usr/local/Cellar/node/8.4.0/bin/node',
  '/Users/lizparody/Documents/javascript/node/02_process_argv.js',
  '1',
  '2',
  '3' ]

console.log(process.argv.slice(2).map((x) => parseInt(x, 10)).reduce((a, b) => a + b));
//or
var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
