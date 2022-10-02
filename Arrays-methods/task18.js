// Задача 18. Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).

let pricelistArr = [99.99, 1300, 1477.99, 111, 2400];
const thresholdPrice = 1000;
const bigDiscount = 0.8;
const smallDiscount = 0.95;

const getDіscount = (priceArr, threshold, discount1, discount2) => priceArr.map(item => item > threshold ? (item * discount1).toFixed(2) : (item * discount2).toFixed(2));
const discountedPricelistArr = getDіscount(pricelistArr, thresholdPrice, bigDiscount, smallDiscount);
console.log(discountedPricelistArr);