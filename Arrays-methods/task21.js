// Задача 21. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

const priceArray = [999, 1000, 1300, 800, 1700, 2500];
const lowThresholdPrice = 1000;
const highThresholdPrice = 2000;

const getSumBetweenThreshold = ((totalValue, currentValue) => {
    
    if (currentValue >= lowThresholdPrice && currentValue < highThresholdPrice) {
        console.log(`${totalValue} + ${currentValue}`)
        return totalValue + currentValue;
    }
});

const sumBetweenThreshold = priceArray.reduce(getSumBetweenThreshold, 0)
console.log(sumBetweenThreshold);