/*10.	Користувач вводить числа поки не натисне відміну. Знайти 
1.	кількість парних;
2.	добуток непарних;
3.	суму двоцифрових;
4.	середнє арифметичне додатних;
5.	найбільше від’ємне;
6.	кількість більших за перше число;
7.	середнє геометричне додатних;
8.	найменше з них;
9.	кількість трицифрових;
10.	добуток кратних 5;*/

let evenNumbersCount = 0;
let multipleOddNumbers = 0;
let doubleNumbersSum = 0;
let possitiveNumbersCount = 0;
let possitiveNumbersSum = 0;
let averageOfPossitiveNumbers = 0;
let biggestNegativeNumber = 0;
let firstNumber = 0;
let biggerNumbersThanFirst = 0;
let positiveNumbersProduct = 0;
let smallestNumber = +Infinity;
let tripleNumberCount = 0;
let multiplicityToFive = 0;
let currentNumber = prompt('Enter any integer number');

for (let i = 0; currentNumber; i++) {
    currentNumber = parseInt(currentNumber);

    if (currentNumber % 2 === 0) {              // знаходимо кількість парних
        evenNumbersCount++
    }
    else {                                      // знаходимо добуток непарних
        if (multipleOddNumbers === 0) { 
            multipleOddNumbers = currentNumber;
        }
        else {
            multipleOddNumbers = multipleOddNumbers * currentNumber;
        }
    }

    if (currentNumber <= -10 && currentNumber >= -99 || currentNumber >= 10 && currentNumber <= 99) { // знаходимо суму двоцифрових
        doubleNumbersSum = doubleNumbersSum + currentNumber; 
    }

    if (currentNumber >= 0) {                                                                   // знаходимо середнє арифметичне
        possitiveNumbersCount++;                                                                // знаходимо кількість додатних
        possitiveNumbersSum = possitiveNumbersSum + currentNumber;                              // знаходимо суму додатних
    }
    else { 
        biggestNegativeNumber = currentNumber;  // знаходимо найбільше від'ємне
    }
    

    if (firstNumber === 0) {                    // знаходимо кількість більших за перше число
        firstNumber = currentNumber;
    }
    if (currentNumber > firstNumber) {
        biggerNumbersThanFirst++
    }

    /*if (firstNumber === undefined) {          // знаходимо кількість більших за перше число з присвоєнням underfined
        firstNumber = currentNumber;
    }
        if (currentNumber > firstNumber) {
            biggerNumbersThanFirst++
        }*/

    if (currentNumber > 0) {                                    // знаходимо середнє геометричне додатних
        if (positiveNumbersProduct === 0) {                     
            positiveNumbersProduct = currentNumber;
        }
        else {
            positiveNumbersProduct = positiveNumbersProduct * currentNumber; 
        }
    }

    if (currentNumber < smallestNumber && currentNumber > 0) {  // знаходимо найменше з додатних;
        smallestNumber = currentNumber;
    }

    if (currentNumber <= -100 && currentNumber >= -999 || currentNumber >= 100 && currentNumber <= 999) { // знаходимо кількість трицифрових
        tripleNumberCount++;
    }

    if (currentNumber % 5 === 0) {                                  // знаходимо добуток кратний 5
        if (multiplicityToFive === 0) {                            
            multiplicityToFive = currentNumber;
        }
        else {
            multiplicityToFive = multiplicityToFive * currentNumber;
        }
    }
    currentNumber = (prompt('Enter any integer number'));
}

document.write(`even count: ${evenNumbersCount}`);
document.write('<br>');

document.write(`multiple odd count: ${multipleOddNumbers}`);
document.write('<br>');

document.write(`sum of double numbers: ${doubleNumbersSum}`);
document.write('<br>');

averageOfPossitiveNumbers = possitiveNumbersSum / possitiveNumbersCount;
document.write(`average of possitive numbers: ${averageOfPossitiveNumbers}`);
document.write('<br>');

document.write(`biggest negative number: ${biggestNegativeNumber}`);
document.write('<br>');

document.write(`bigger numbers than the first one: ${biggerNumbersThanFirst}`);
document.write('<br>');

positiveNumbersProduct = Math.sqrt(positiveNumbersProduct);
document.write('<br>');

document.write(`the smallest number is: ${smallestNumber}`);
document.write('<br>');

document.write(`triple number count: ${tripleNumberCount}`);
document.write('<br>');

document.write(`multiplecity to number five: ${multiplicityToFive}`);