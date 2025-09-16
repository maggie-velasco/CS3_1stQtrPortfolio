process.stdin.on('data', (input) => {
  const NUM = Number(input.toString().trim());
  // use NUM variable in your code and start it on the next line
  if (NUM % 2 != 0) {
    console.log('Weird');
  } else if (NUM % 2 == 0 && (NUM >= 2 || NUM <= 5)) {
    console.log('Not Weird');
  } else if (NUM % 2 == 0 && (NUM >= 6 || NUM <= 20)) {
    console.log('Weird');
  } else {
    console.log('Not Weird');
  }

  // end of your code

  process.exit(); // ends the code
});
