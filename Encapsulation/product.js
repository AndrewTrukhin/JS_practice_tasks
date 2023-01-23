/*Задача 2. Створити клас Product, що представляє товар на складі
 поля:
     Назва товару
     Кількість одиниць
     Ціна одиниці
 методи:
     зменшення кількості товару
     збільшення кількості товару
     визначення вартості вказаної кількості товару
     нарахування вказаної знижки (у відсотках)
     визначення загальної вартості товару
 На основі цього класу визначити сумарну вартість усіх товарів, та нарахувати знижку на усі товари, ціна яких перевищує 1000 грн.*/

class Product {
    constructor(name, qty, price) {
        this._productName = name;
        this._productQty = qty;
        this._productPrice = price;
    }

    get productName() {
        return this._productName;
    }

    get productQty() {
        return this._productQty;
    }

    get productPrice() {
        return this._productPrice;
    }

    decreaseProductQty(userProductQty) {
        if (this._productQty - userProductQty < 0) {
            return this._productQty = 0;
        }
        else {
            return this._productQty = this._productQty - userProductQty;
        }
    }

    inreaseProductQty(userProductQty) {
        return this._productQty = this._productQty + userProductQty;
    }

    getPricePerProductQty(userProductQty) {
        return userProductQty / this._productPrice;
    }

    getDiscount() {
        const minDiscount = 5;
        const maxDiscount = 20;
        const maxPercent = 100;
        const productValue = this.getTotalProductValue();
        const productValueForDiscount = 1000;

        if (productValue > productValueForDiscount) {
            const convertedDiscount = maxDiscount / maxPercent;
            return (this._productPrice * convertedDiscount).toFixed(2);
        }
        else if (productValue < productValueForDiscount) {
            const convertedDiscount = minDiscount / maxPercent;
            return (this._productPrice * convertedDiscount).toFixed(2);
        }
    }

    getTotalProductValue() {
        return this._productQty * this._productPrice;
    }
}

const apples = new Product('apples', 500, 23.99);
const oranges = new Product('oranges', 350, 69.99);
const bananas = new Product('bananas', 200, 55.99);

const applesValue = apples.getTotalProductValue();
const orangesValue = oranges.getTotalProductValue();
const bananasValue = bananas.getTotalProductValue();
const productValueForDiscount = 1000;
const discountValue = 20;

// визначаємо сумарну вартість
const getTotalProductValue = (applesValue, orangesValue, bananasValue) => {

    const productValueArr = [];
    let totalValue = productValueArr.push(applesValue, orangesValue, bananasValue);
    totalValue = productValueArr.reduce((total, currenValue) => total + currenValue);
    return (totalValue).toFixed(2);
}

const totalProductValue = getTotalProductValue(applesValue, orangesValue, bananasValue);
console.log(totalProductValue);

// визначаємо, де будуть знижки
const getProductDiscont = (applesValue, orangesValue, bananasValue, valueForDiscount, discount) => {
    const maxPercent = 100;
    const productValueArr = [];
    productValueArr.push(applesValue, orangesValue, bananasValue);
    const discountedProductArr = productValueArr
        .filter((item) => item > valueForDiscount)
        .map((item) => discount / maxPercent * item)
    return discountedProductArr
}

const productValueWithDiscountArr = getProductDiscont(applesValue, orangesValue, bananasValue, productValueForDiscount, discountValue);
console.log(productValueWithDiscountArr);