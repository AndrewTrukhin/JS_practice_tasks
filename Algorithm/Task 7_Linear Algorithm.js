//Скласти алгоритм, який обчислює цілу і дробову частину даного числа х.

const fractionNumber = prompt('X = (Enter any fraction number)');

const integerNumberResult = Math.floor(fractionNumber);

alert(`Here is a result as integer = ${integerNumberResult}`);

/*const floatResult = fractionNumber - integerNumberResult;

alert (`Here is a result as fraction = ${floatResult}`);*/

let floatResult = fractionNumber % integerNumberResult;

floatResult = Number(floatResult.toFixed(2));

alert(`Here is a result as fraction = ${floatResult}`);

const anotherInteger = floatResult * 100;

alert(`Here is a result as new integer = ${anotherInteger}`);