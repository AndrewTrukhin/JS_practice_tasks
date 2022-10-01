// Задача 17. Дано ціни 4 товарів. Визначити, скільки кожного виду товарів може купити користувач за наявну у нього кількість грошей.

const goodsListArr = ['Beer', 'Wine', 'Rum', 'Whiskey'];
const priceListArr = [30, 150, 450, 750];
const userMoney = parseFloat(prompt('How much money do you have?'));
const everyGoodsQty = [];

const getUserGoods = (goodsName, goodsPrice, money, availableGoods) => {
    for (let i = 0; i < goodsPrice.length; i++) {
        if (money >= goodsPrice[i]) {
            availableGoods[i] = Math.floor(money / goodsPrice[i]);
            console.log(`You can buy ${goodsName[i]}: ${availableGoods[i]} pcs.`);
        }
    }
}
getUserGoods(goodsListArr, priceListArr, userMoney, everyGoodsQty);