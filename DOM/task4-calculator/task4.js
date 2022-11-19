//Задача 4. Калькулятор з вибором операції (додавання, віднімання, множення, ділення).

let digitString = ''

const addDigits = (digit) => {  // опис функції яка буде записувати числа в пусту стрінгу
    digitString += digit;
    document.querySelector('#calculationScreen').value = digitString;
}

const deleteLastDigit = () => {   // видаляю останній елемент зі стрінги
    digitString = digitString.slice(0, -1);
    document.querySelector('#calculationScreen').value = digitString;
}

const makeCalculations = () => {        // обраховую результат
    let calculationResult = '';
    calculationResult = eval(digitString);
    digitString = calculationResult;       // стрінгу після кожної операції потрібно оновляти результатом
    document.getElementsByClassName('#calculationScreen').value = digitString;
    document.querySelector('#resultScreen').value = calculationResult;
}

const clearScreen = () => {             // чистий екран
    digitString = '';
    document.querySelector('#calculationScreen').value = 0;
    document.querySelector('#resultScreen').value = 0;
}