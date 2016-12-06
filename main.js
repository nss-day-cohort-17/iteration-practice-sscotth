// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

// Example output:
// Current value is 5
// Current value is 15
// Current value is 25
// ...

for (var i=5; i <= 120; i += 10) {
  console.log('Current value is ' + i)
}

// Decrement by division

// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

// Example output:
// Current value is 4096
// Current value is 2048
// Current value is 1024
// ...
var i = 4096
for (;i >= 1;) {
// while (i >= 1) {
  console.log('Current value is ' + i)
  i /= 2
}

// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

// Example output:
// President #1 was George Washington
// President #2 was John Adams
// President #3 was Thomas Jefferson
// ...

var presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison']

// for (var i = 0; i < presidents.length; i++) {
//   console.log('President #' + (i + 1) + ' was ' + presidents[i])
// }

// for (var i = 1; i <= presidents.length; i++) {
//   console.log('President #' + i + ' was ' + presidents[i-1])
// }

// for (
//   var presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison'],
//   i = 0;
//   i < presidents.length;
//   console.log('President #' + i + ' was ' + presidents[i++])
// ) {}

for (var i = 0;; i++) {
  if (i < presidents.length) {
    console.log('President #' + (i + 1) + ' was ' + presidents[i])
  } else {
    break
  }
}
