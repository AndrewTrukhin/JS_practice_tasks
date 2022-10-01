//Задача 3. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

const goodsName = ['Car', 'Computer', 'TV set', 'Bicycle', 'Rare book'];
const goodsPrice = [250000, 35000, 30000, 20000, 1500];

const userMoney = parseFloat(prompt('Enter your money amount to show what goods you can buy'));

for (let i = 0; i < goodsPrice.length; i++) {
    if (userMoney >= goodsPrice[i]) {
        console.log(`You can buy a: ${goodsName[i]}. It's price: ${goodsPrice[i]}`);
    }
}