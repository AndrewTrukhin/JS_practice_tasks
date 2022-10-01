// Задача 4. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.

let priceArray = [999, 1000, 1300, 800, 799, 3000];
const thresholdPrice = 1000;
const twentyPercent = 0.2;
const thirtyPercent = 0.3;

priceArray = priceArray.map(element => {
    if (element < thresholdPrice) return +(element += element * twentyPercent).toFixed(2);
    if (element > thresholdPrice) return +(element -= element * thirtyPercent).toFixed(2);
    return element
});
console.log(priceArray);