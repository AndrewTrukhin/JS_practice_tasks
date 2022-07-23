/*Задача 25.З клавіатури вводиться вартість одиниці товару. 
Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.*/

const goodsPrice = parseFloat(prompt('Enter crayfish price per one kg', 0.1));
const goodsQty = parseFloat(prompt('Enter quantity (kg) of crayfish you would like to buy', 0.1));
const totalGoodsPrice = (goodsPrice * goodsQty).toFixed(2);

if (goodsPrice && goodsQty) {
    alert(`The goods will costs you: ${totalGoodsPrice} hryvnias`);
}

let currentMoney;
let moneyAmount = 0;

do {
    currentMoney = parseInt(prompt('Enter money to buy the goods', 0.1));
    moneyAmount += currentMoney;

} while (totalGoodsPrice > moneyAmount || currentMoney === null);

if (moneyAmount) {
    alert(`You entered money in amount: ${moneyAmount} hryvnias`)
}