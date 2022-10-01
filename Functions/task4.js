/*Задача 4. Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення. */

const getSum = (firstNumber, secondNumber, thirdNumber, fourthNumber) => firstNumber + secondNumber + thirdNumber + fourthNumber; // Стрілкова функція знаходить суму

const getProduct = (firstNumber, secondNumber, thirdNumber, fourthNumber) => firstNumber * secondNumber * thirdNumber * fourthNumber; // Стрілкова функція знаходить добуток

const getAverage = (firstNumber, secondNumber, thirdNumber, fourthNumber) => 
getSum(firstNumber, secondNumber, thirdNumber, fourthNumber) / 4;

const getMinimal = (firstNumber, secondNumber, thirdNumber, fourthNumber) => { // Багаторядкова стрілкова функція знаходить мінімальне значення
    let minimalNumber = firstNumber;

    if (secondNumber < firstNumber) {
        minimalNumber = secondNumber;
    }

    if (thirdNumber < minimalNumber) {
        minimalNumber = thirdNumber;
    }

    if (fourthNumber < minimalNumber) {
        minimalNumber = fourthNumber;
    }
    return minimalNumber;
}

const num1 = parseInt(prompt('Enter the first number'));
const num2 = parseInt(prompt('Enter the second number'));
const num3 = parseInt(prompt('Enter the third number'));
const num4 = parseInt(prompt('Enter the fourth number'));


const numbersAmount = getSum(num1, num2, num3, num4);
alert(`Sum of the entered four numbers is: ${numbersAmount}`); // Викликаємо функцію яка знаходить суму

const numbersProduct = getProduct(num1, num2, num3, num4);
alert(`Product of the entered four numbers is: ${numbersProduct}`); // Викликаємо функцію яка знаходить добуток

const averageResult = getAverage(num1, num2, num3, num4); // Треба в змінну функцію пистаи чи не треба ???
alert(`Average of the entered four numbers is: ${averageResult}`); // Викликаємо функцію яка знаходить середнє арифметичне

const minimalNumberResult = getMinimal(num1, num2, num3, num4);
alert(`Minimal number of the entered four numbers is: ${minimalNumberResult}`); // Викликаємо функцію яка знаходить мінімальне число