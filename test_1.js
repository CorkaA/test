const readline = require('readline').createInterface( {
    input: process.stdin,
    output: process.stdout,
  });

function func(num) {

    let n10 = num % 10;
    let n100 = num % 100;
    let ere = n100;

    let nul = [1];
    let a = [2, 3, 4];
    let ov = [0, 5, 6, 7, 8, 9];

    let flag = 0;
    let finish;


    if (nul.includes(n10)) {
        if (n100 == 11) {
            flag = 3;
        }
        else {
            flag = 1;
        }
    }


   if (a.includes(n10)) {
        if (ere == 1) {
            flag = 3;
        }
        else {
            flag = 2;
        }
    }


    if (ov.includes(n10)) {
        flag = 3;
    }


    if (flag == 1) {
        finish = 'компьютер';
}

    if (flag == 2) {
        finish = 'компьютера';
}

    if (flag == 3) {
        finish = 'компьютеров';
}

    let text = num + ' ' + finish;
    return text;
}

readline.question("Введите число компьютеров: ", function(input) {
    let num = parseInt(input);
    console.log(func(num));
    readline.close();
})