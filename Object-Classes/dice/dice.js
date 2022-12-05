/*Задача 3. Створити об’єкт «Гральний кубик»
Поля(властивості):	Кількість граней
Методи (дії):	    Перевірка того, чи належить діапазону
                    Генерування випадкового числа з вказаного діапазону*/

class Dice {
    constructor(sideQty) {
        this.sideQty = sideQty;
    }
    isInRange(randomNum) {
        return (randomNum <= this.sideQty && randomNum >= 1);
    }
    getRandomNum() {
        return Math.ceil(Math.random() * this.sideQty);
    }
    render() {
        let randomNumInRange = this.getRandomNum();
        let isInRange = this.isInRange(randomNumInRange);
        document.write(`Random number is: ${randomNumInRange} <br>It is in range: ${isInRange}`);
    }
}

const diceCube = new Dice(6);
diceCube.render();