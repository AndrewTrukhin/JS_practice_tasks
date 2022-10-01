// Задача 3. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.

const priceArray = [999, 1000, 1300, 800, 799, 3000];
const thresholdPrice = 1000;
const refreshedPriceArray = priceArray.filter(item => item < thresholdPrice);

console.log(refreshedPriceArray);