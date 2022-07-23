/*Задача 2.2
Модифікувати попереднє завдання ввівши не номер операції, а саму операцію*/

const firstNumber = parseFloat(prompt('Enter first number'));

const secondNumber = parseFloat(prompt('Enter second number'));

const operationSymbol = prompt('Enter a symbol of operation you would like to do');

switch (operationSymbol) {
    case '+':
        console.log(firstNumber + secondNumber);
        break
    case '-':
        console.log(firstNumber - secondNumber);
        break
    case '*':
        console.log(firstNumber * secondNumber);
        break
    case '/':
        console.log(firstNumber / secondNumber);
        break
    default:
        console.log('Oops, you did something wrong:(')
}