/*
    The user can press b and it should beep right away
    The user can input any number from 1 to 9 and it should
        immediately output "setting timer for x seconds...", and
        beep after that number of seconds has passed
    The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

*/


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', key => {
  
  if (key === 'b') {
    process.stdout.write('. \n');
  }

  if (key >= 1 && key <= 9) {
    process.stdout.write(`setting the timer for ${key} seconds...\n`);

    setTimeout(() => {
      process.stdout.write('. \n');
      process.stdout.write('\x07');
    }, (key * 1000));
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});