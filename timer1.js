const isANumber = (element) => {
  let msg ='';
  if (isNaN( element)) {
    msg = 'it is not a -NAn';
  }
  if (element < 0) {
    msg = 'it is not a valid entry';
  }
  return msg
}

const args = process.argv.slice(2);


const timer = (args, helperFun) => {
  args.forEach(element => {

    const edgeCase = helperFun(Number(element));

    if (!edgeCase) {
      setTimeout(() => {
        console.log(`${element} Seconds`)
        process.stdout.write('\x07');
      }, 500 * element);
    } else {
      console.log(edgeCase)
    }    
  });
  
}
timer(args, isANumber)

