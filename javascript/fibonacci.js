function fibonacci(num) {
  // type your code here
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 0');
  console.log('=>', fibonacci(0));

  console.log('');

  console.log('Expecting: 1');
  console.log('=>', fibonacci(2));

  console.log('');

  console.log('Expecting: 55');
  console.log('=>', fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// I need to add array of numbers next to the prev. one, as many times as there are numbers in the array.
// I can use Set or Hash to make it happen. I'll use Set.

// First we need to create Set and assign it to variable result
// I'll loop thru the proposed array adding each number to the prev. one
