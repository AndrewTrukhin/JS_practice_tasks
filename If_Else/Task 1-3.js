/*1.3. Формування накладної. Вводиться назва товару, кількість, ціна і рік.  
Значення року вводиться користувачем або ж дорівнює 2017 (у випадку, якщо користувач не ввів значення). 
Перевірити коректність введених даних . 
У випадку некоректності вивести відповідне повідомлення.*/

const goodsName = prompt('Enter name of the goods');
const goodsQty = prompt('Enter quantity of the goods');
const goodsPrice = prompt('Enter price of the goods');
const goodsYear = prompt('Enter year of the goods') || 2017;

if (goodsName && goodsQty && goodsPrice) {
    alert('All the information accepted')
}
else {
    alert ('You entered incorrect information')
}

//Зворотній варіант вирішення
/*f (!productName || !quantity || !price) {
    alert(`The data entered is incorrect`)
}

else {
    alert(`OK `)
}*/

