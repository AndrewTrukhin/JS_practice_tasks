/* 14) Додаткова задача: Розробити онлайн калькулятор для кредитування. Задаються: 
•	Ім’я клієнта (використати <input type=”text” …>);
•	сума кредиту (використати <input type =”number” …>); 
•	кількість місяців (використати <input type=”range” …).
Визначити загальну суму, яку треба буде оплатити :
(загальна сума = сума кредиту + кількість місяців * 20% від суми кредитування)*/

const userName = document.getElementById('name');
const creditAmount = document.getElementById('creditSum');
const creditRate = document.getElementById('rate');
const monthsQty = document.getElementById('period');
const button = document.getElementById('calcButton');
const result = document.getElementById('result');

// функція для відображення range
monthsQty.addEventListener('input', () => {
    let output = document.getElementById('periodOutput');
    output.innerHTML = monthsQty.value;
});

// функція для обрахування результату
button.addEventListener('click', () => {
    const totalSum = parseFloat(creditAmount.value) + parseInt(monthsQty.value) * parseFloat(creditRate.value);
    result.value = userName.value + ' must refund ' + (totalSum).toFixed(2) + ' UAH';
})