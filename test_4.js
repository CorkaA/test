const readline = require(`readline`).createInterface( {
    input: process.stdin,
    output: process.stdout,
  });

class Calc {

    static func_4(len) {

    let tab = ``;
    for (let i=1; i<=len; i++) {
      tab += `\t${i}`
    }
    for (let j=1; j<=len; j++) {
      tab += `\n${j}\t`
      for (let i=1; i<=len; i++) {
        tab += `${i*j}\t`
      }
    }    
    return tab;
    }
}

readline.question("Введите число: ", function(input) {
    let len = parseInt(input);
    console.log(Calc.func_4(len));
    readline.close();
})