process.stdin.on('data', (input) => {
  let greeting = input.toString().trim().toUpperCase();
  // use the greeting variable in your code, and start it on the next line
  switch (greeting) {
    case 'HELLO':
      console.log('ENGLISH');
      break;
    case 'MABUHAY':
      console.log('TAGALOG');
      break;
    case 'HOLA':
      console.log('SPANISH');
      break;
    case 'HALLO':
      console.log('GERMAN');
      break;
    case 'BONJOUR':
      console.log('FRENCH');
      break;
    case 'CIAO':
      console.log('ITALIAN');
      break;
    case 'ZDRAVSTUJTE':
      console.log('RUSSIAN');
      break;
    default:
      console.log('UNKNOWN');
  }

  // end of your code
  // do not remove the lines below

  process.exit();
});
