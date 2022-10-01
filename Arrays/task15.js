// Задача 15. Дано назви та ціни 4 товарів. Вивести назви товарів, ціна яких не перевищує 1000грн

const goodsListArr = ['Computer', 'Cell phone', 'Charging device', 'Lithium battery'];
const priceListArr = [45000, 7500, 150, 500];
const thresholdPrice = 1000;

const showGoodsListToTreshold = (goodsName, goodsPrice, edgePrice) => {
    for (let i = 0; i < goodsPrice.length; i++) {
        if (goodsPrice[i] <= edgePrice) {
            console.log(goodsName[i]);
        }
    }
}
showGoodsListToTreshold(goodsListArr, priceListArr, thresholdPrice);