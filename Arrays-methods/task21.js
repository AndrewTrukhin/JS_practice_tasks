// Задача 21. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

const priceArray = [999, 1000, 1300, 800, 1700, 2500];
const lowThresholdPrice = 1000;
const highThresholdPrice = 2000;

const getSumBetweenThreshold = ((priceArr, lowPrice, highPrice) => priceArr
    .filter((item => item >= lowPrice && item < highPrice))  // спочатку я прибираю з масива зайві елементи
    .reduce((totalValue, currentValue) => totalValue + currentValue)); // потім додаю, те, що лишилося

const sumBetweenThreshold = getSumBetweenThreshold(priceArray, lowThresholdPrice, highThresholdPrice);
console.log(sumBetweenThreshold);


// Варіант вирішення з чистим reduce


/*const priceArray = [999, 1000, 1300, 800, 1700, 2500];
const lowThresholdPrice = 1000;
const highThresholdPrice = 2000;


const getSumBetweenThreshold = ((priceArr, lowPrice, highPrice) => {
    return priceArr.reduce((totalValue, currentValue) => currentValue >= lowPrice && currentValue < highPrice ? totalValue + currentValue : totalValue, 0)
});


const sumBetweenThreshold = getSumBetweenThreshold(priceArray, lowThresholdPrice, highThresholdPrice);
console.log(sumBetweenThreshold);*/