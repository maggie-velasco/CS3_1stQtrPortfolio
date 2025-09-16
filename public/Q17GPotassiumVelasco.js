process.stdin.on('data', function (data)  { // do not change anything on this line
let num = Math.floor(Number(data.toString().trim())); // do not change anything on this line and work with the num variable 
  // test if num has a value and display on the console an error message when needed. 
  if (num <= 0) { 
     console.log(num + ' has no value');
  }
  else if(num > 0) {   
    // get the number of digits and place it in len.
    let len = getLength(num);
    // to get the sum of all individual digits raised to the number of digits found in len
    let sum = getSum(num, len);
    // show the result on the console using ternary operator and templated string.
    console.log('The sum is: '+ sum + ' of '+ num + ' using length of: ' + len);
    console.log((sum == num) ? 'It is an Armstrong number' : 'It is NOT an Armstrong number');
  }
  else {
    console.log('NaN has no value');
  }
  process.exit();  // stops the process and do not change this
}); // do not change this part


// function to determine the number of digits


function getLength(num) {
  let len=0;
  for (; num > 0; len++) {
    num = Math.floor(num / 10); // while removing the ones, len increase
  }
  return len;
 }
// get the sum of the digits that is raised by the number of digits. 
function getSum(tempNum, len) {
  let sum=0;
  let n, result;
  while (tempNum > 0) {
    n = tempNum % 10;
    tempNum = Math.floor(tempNum / 10);
    result = Math.pow(n,len) // The Math.pow() is a method that returns the value of a base No raised to a power (len)
    sum += result;
  }
  return sum;
}
