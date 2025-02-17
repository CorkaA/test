const readline = require('readline').createInterface( {
    input: process.stdin,
    output: process.stdout,
  });

function func_2(array) {

  let min = array[0];
  for (let i=0; i< array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
}

  let common = [];
  for (let i = 2; i<= min; i++) { 
    let divisibility = true;
    for (let j=0; j< array.length; j++) {
        if (array[j] % i !== 0) {
            divisibility = false;
            break;
        }
    }
    if (divisibility) {
        common.push(i);
    }
}
  return common;
}

readline.question("Введите числа через пробел: ", function(input) {
    const array = input.split(" ").map(function(item) {
        return parseInt(item);
    });
    console.log(func_2(array));
    readline.close();
})