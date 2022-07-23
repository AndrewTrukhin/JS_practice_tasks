/*Задача 11.  Кожне  … Вивести початкові та отримані значення.
1.	двоцифрове натуральне число > 80 збільшити на 7.
2.	двоцифрове натуральне число < 30 збільшити у 5 разів.
3.	натуральне число < 20 збільшити на 10.
4.	двоцифрове натуральне парне число збільшити у 5  разів.
5.	двоцифрове натуральне число > 30 збільшити на 10.
6.	натуральне число < 20 збільшити у 9 разів. 
7.	 двоцифрове натуральне непарне число піднести до квадрата.
8.	трицифрове натуральне число кратне 7 зменшити в 7 разів
9.	двоцифрове натуральне число > 15 збільшити у 9   разів
10.	трицифрове натуральне число зменшити на 100;*/

let incrementorToSeven = 7;
let incrementorByFive = 5;
let incrementorByNine = 9;
let incrementorToTen = 10;
let incrementorByHundred = 100;
let currentNumber = prompt('Enter any natural integer number up to "999"');

for (let i = 0; currentNumber; i++) {
    currentNumber = parseInt(currentNumber);
    document.write(`<br> <b> Number ${i + 1} - ${currentNumber} </b> <br> --------------------------------------------------------------- <br>`);

    if (currentNumber > 80 && currentNumber < 100) { // 1.	двоцифрове натуральне число > 80 збільшити на 7
        document.write(`Increase double-digit natural number > 80 on 7 = ${currentNumber + incrementorToSeven} <br>`);
    }

    if (currentNumber < 30 && currentNumber > 9) { // 2.	двоцифрове натуральне число < 30 збільшити у 5 разів.
        document.write(`Increase double-digit natural number < 20 by 5 times = ${currentNumber * incrementorByFive} <br>`);
    }

    if (currentNumber < 20 && currentNumber > 0) { // 3.	натуральне число < 20 збільшити на 10.
        document.write(`Increase nutural number < 20 on 10 = ${currentNumber + incrementorToTen} <br>`);
    }

    if (currentNumber % 2 === 0 && currentNumber > 9 && currentNumber < 100) { // 4.	двоцифрове натуральне парне число збільшити у 5  разів.
        document.write(`Increase double-digit natural doubled number by 5 times = ${currentNumber * incrementorByFive} <br>`);
    }

    if (currentNumber > 30 && currentNumber < 100) { // 5.	двоцифрове натуральне число > 30 збільшити на 10.
        document.write(`Increase doubled double-digit natural number > 30 on 10 = ${currentNumber + incrementorToTen} <br>`);
    }

    if (currentNumber < 20 && currentNumber > 0) { // 6.	натуральне число < 20 збільшити у 9 разів. 
        document.write(`Increase natural number by 9 times = ${currentNumber * incrementorByNine} <br>`);
    }

    if (currentNumber % 2 !== 0 && currentNumber > 9 && currentNumber < 100) { // 7.	 двоцифрове натуральне непарне число піднести до квадрата.
        document.write(`Square up odd double-digit natural number = ${currentNumber * currentNumber} <br>`);
    }

    if (currentNumber > 99 && currentNumber < 1000 && currentNumber % 7 === 0) { //8.	трицифрове натуральне число кратне 7 зменшити в 7 разів
        document.write(`Decrease by 7 times triple-digit natural number which multiple of 7 = ${currentNumber / incrementorToSeven} <br>`);
    }

    if (currentNumber > 15 && currentNumber < 100) { // 9.	двоцифрове натуральне число > 15 збільшити у 9 разів
        document.write(`Increase double-digit natural number > 15 by 9 times = ${currentNumber * incrementorByNine} <br>`);
    }

    if (currentNumber > 99 && currentNumber < 1000) { // 10.	трицифрове натуральне число зменшити на 100;*/
        document.write(`Decrease on 100 times triple-digit natural number = ${currentNumber - incrementorByHundred} <br>`);
    }
    
    currentNumber = prompt('Enter any natural integer number up to "999"');
}