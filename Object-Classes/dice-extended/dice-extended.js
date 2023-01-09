/*Задача 1. Створити клас Dice, який представляє гральний кубик (одне поле faceQty - кліькістьграней) і дозволяє генерувати випадкове 
число від 1 до кількості граней. 
Потім на основі цього класу створити клас, який дозволяє вказати не тільки кількість 
граней, а й кількість спроб - attemptCount (при цьому як випадкове число повертається середнє значення).*/

class Dice {
    constructor(faceQty) {
        this.faceQty = faceQty;
    }

    createElement(elementName, attributes) {
        const element = document.createElement(elementName);
        for (const key in attributes) {
            if (key === 'innerText') {
                element.innerText = attributes[key];
            }
            else {
                element.setAttribute(key, attributes[key]);
            }
        }   
        return element
    }
    
    render() {
        const body = document.querySelector('body');
        const p = this.createElement('p');
        p.innerText = `Dice show: ${this.getRandomNum()}`
        body.appendChild(p);                   
    }

    getRandomNum() {
        this.randomNum = Math.ceil(Math.random() * this.faceQty);
        console.log('random, parent method ---', this.randomNum);
        return this.randomNum
    }
}

const faceQty = 6
const attemptQty = 3
const diceCube = new Dice(faceQty);
diceCube.render();


// розштрюємо клас Dice
class ModifiedDice extends Dice {
    constructor(faceQty, attemptQty) {
        super(faceQty);
        this.attemptQty = attemptQty;
        this.generatedNumbers = this.generateArray(attemptQty)
        this.average = this.getAverage()
    }

    render() {
        const body = document.querySelector('body');
        const p = this.createElement('p');
        p.innerText = `Dice show: ${this.average}`;
        body.appendChild(p);
    }

    generateArray(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            const number = super.getRandomNum();
            array.push(number);
        }
        return array;
    }

    getAmountOfArray(array) {
       return array.reduce((total, curEl)=> total+curEl, 0);
    }

    getAverage() {
        const amount = this.getAmountOfArray(this.generatedNumbers);
        return Math.round(amount / this.attemptQty);
    }
}
const extentedDiceCube = new ModifiedDice(faceQty, attemptQty);
extentedDiceCube.render();
console.log('ext', extentedDiceCube);