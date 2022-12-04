/* Задача 1. Створити об’єкт «Діапазон» (тут і далі- це значить створити Класс, а потім на основі класу – обєкт. І використати всі методи. 
Поля (властивості): Нижня межа, Верхня межа
Методи (дії):       Перевірка того, чи належить діапазону
                    Генерування випадкового числа з вказаного діапазону*/

class Range {
    constructor(inner, upper) {
        this.innerEdge = inner;
        this.upperEdge = upper;
    }
    isInRange(randomValue) {
        return (randomValue >= this.innerEdge && randomValue <= this.upperEdge);
    }
    getRandomNumInRange() {
        return Math.floor(Math.random() * (this.upperEdge - this.innerEdge + 1)) + this.innerEdge;
    }
    render(randomNumForInRangeCheck) {

        const isInRangeResult = this.isInRange(randomNumForInRangeCheck);
        const randomNumInRange = this.getRandomNumInRange();
        document.write(`Inner edge is: ${this.innerEdge} <br> Upper edge is: ${this.upperEdge} <br>`);
        document.write(`Number ${randomNumForInRangeCheck} is in range: ${isInRangeResult} <br>`);
        document.write(`Random number in range is: ${randomNumInRange}`);
    }
}

const range = new Range(1, 10); //
const randomNumForInRangeCheck = Math.ceil(Math.random() * 15);
range.render(randomNumForInRangeCheck);