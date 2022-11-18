// Задача1. Розробити тестувальник для перевірки на знання таблиці множення (дитина вказує свою відповідь і натискає кнопку, внизу відображається правильна відповідь ) :

const getRandomNums = () => {                               // опис функції на формування випадкових чисел
    const firstRandomNum = Math.ceil(Math.random() * 9);    // якщо двум інпутам присвоїти одну змінну - випадкові числа будуть завжди однакові
    const secondRandomNum = Math.ceil(Math.random() * 9);
    document.getElementById('firstNum').value = firstRandomNum;
    document.getElementById('secondNum').value = secondRandomNum;
}


const checkMultiplicationResult = () => {                   // опис функції на отримання результату множення
    const firstNumber = document.getElementById('firstNum').value;
    const secondNumber = document.getElementById('secondNum').value;
    const productResult = firstNumber * secondNumber;
    document.getElementById('result').value = productResult;
}

const showNotificationAndChangeColor = () => {              // опис функції на показ повідомлення та зміну кольору в залежності від результату
    const firstNumber = document.getElementById('firstNum').value;
    const secondNumber = document.getElementById('secondNum').value;
    const productResult = firstNumber * secondNumber;
    const userNum = +document.getElementById('answer').value;
    const isProductResult = productResult === userNum;
    const resultParagraph = document.getElementById('notification');

    if (isProductResult) {
        resultParagraph.style.backgroundColor = 'green';
        resultParagraph.textContent = 'Your answer is correct';
    }
    else {
        resultParagraph.style.backgroundColor = 'rgb(160, 10, 10)';
        resultParagraph.textContent = 'Your answer is not correct';
    }
}