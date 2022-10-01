//Задача 5. Створити функцію, яка для 3 заданих чисел знаходить кількість парних.

const getEvenNumbers = (num1, num2, num3) => { // описуємо
    let evenNumbersQty = 0;
    if (num1 % 2 === 0) {
        evenNumbersQty++
    }

    if (num2 % 2 === 0) {
        evenNumbersQty++
    }

    if (num3 % 2 === 0) {
        evenNumbersQty++
    }
    return evenNumbersQty;
}
const firstNumber = parseInt(prompt('Enter numbers here')); // вводимо
const secondNumber = parseInt(prompt('Enter numbers here'));
const thirdNumber = parseInt(prompt('Enter numbers here'));

const evenNumbersQty = getEvenNumbers(firstNumber, secondNumber, thirdNumber); 
alert(`Even numbers quantity is: ${evenNumbersQty}`); // викликаємо