/*Задача 2.1
З клавіатури вводяться два числа. Вибравши номер операції обчислити результат.*/

const firstNumber = parseFloat(prompt('Enter first number'));

const secondNumber = parseFloat(prompt('Enter second number'));

const operationNumber = prompt('Enter a number of operation you would like to do when 1 is "+", 2 is "-", 3 is "*", 4 is "/"');

switch (operationNumber) {
    case '1':
        console.log(firstNumber + secondNumber);
        break
    case '2':
        console.log(firstNumber - secondNumber);
        break
    case '3':
        console.log(firstNumber * secondNumber);
        break
    case '4':
        console.log(firstNumber / secondNumber);
        break
    default:
        console.log('Oops, you did something wrong:(')
}