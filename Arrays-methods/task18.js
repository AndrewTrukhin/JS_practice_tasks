/* Задача 18. Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), 
а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).*/

let pricelistArr = [999, 1300, 1400, 750, 2400];
const thresholdPrice = 1000;
const bigDiscount = 0.8;
const smallDiscount = 0.95;

const getDsicount = (item) => {
    if (item > thresholdPrice) return item -= item * bigDiscount;
    if (item < thresholdPrice) return item -= item * smallDiscount;
}

pricelistArr = pricelistArr.map(getDsicount);
console.log(pricelistArr);