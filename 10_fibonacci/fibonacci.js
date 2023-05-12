const fibonacci = function(num) {
let i;
let fib = [0, 1];
if (num < 0) {
  return "OOPS";
} else {
  for (i = fib.length; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib);
  }
}
return fib[num];


};

// Do not edit below this line
module.exports = fibonacci;
