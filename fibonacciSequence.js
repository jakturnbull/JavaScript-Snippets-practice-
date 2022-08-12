function fibonacciGenerator(n) {

  var fibonacciArray = [];
  if (n === 1) {
    fibonacciArray.push(0);
  } else if (n === 2) {
    fibonacciArray.push(0);
    fibonacciArray.push(1);
  } else {
    fibonacciArray.push(0);
    fibonacciArray.push(1);
    for(var i = 2; i<n; i++){
    fibonacciArray.push(fibonacciArray[i-1]+fibonacciArray[i-2])
    }
  }
  return fibonacciArray;
}
output = fibonacciGenerator(30);
console.log(output);
