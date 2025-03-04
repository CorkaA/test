const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function func_3(array) {
    if (array[0] > array[1]) {
        let max = array[0];
        let min = array[1];
        array[0] = min;
        array[1] = max;
    }

    let a = array[0];
    let b = array[1];
    let prime = [];

    for (let num = a; num <= b; num++) {
        let start = 2;
        while (num % start !== 0) {
            start++;
        }

        if (start === num) {
            prime.push(num);
        }
    }

    return prime;
}

let inpArray = [];
let count = 0;

function enterNum() {
    readline.question('Введите число: ', function (input) {
        inpArray.push(parseInt(input));
        count++;

        if (count < 2) {
            enterNum();
        }
        else {
            readline.close();
            console.log(func_3(inpArray));
        }
    });
}

enterNum();