// Задача 3. Конвертер валют.

const convertCurrency = () => {
    const inputElements = document.getElementsByTagName('input');
    const moneyAmount = parseFloat(inputElements[0].value);
    const currencyExchangeRate = parseFloat(inputElements[1].value);
    const convertedCurrency = (moneyAmount / currencyExchangeRate).toFixed(2);

    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i] == document.getElementById('result')) {
            inputElements[i].value = convertedCurrency;
            break
        }
    }
}