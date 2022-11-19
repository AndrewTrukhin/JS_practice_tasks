/* Задача 1. Створити об’єкт «Діапазон» (тут і далі- це значить створити Класс, а потім на основі класу – обєкт. І використати всі методи.
    Діапазон    
Поля (властивості): Нижня межа, Верхня межа
Методи (дії):   Перевірка того, чи належить діапазону
Генерування випадкового числа з вказаного діапазону*/


// Створюю класc
class Range {
    // всередині класу за допомогою конструктора створюю поля (верхня і нижня межа).
    constructor(inner, upper) {
        this.innerEdge = inner;
        this.upperEdge = upper;
    }
    // методи
    isInRange(randomValue) {
        return (randomValue >= this.innerEdge && randomValue <= this.upperEdge);
    }

    getRandomNumInRange() {
        return Math.floor(Math.random() * (this.upperEdge - this.innerEdge + 1)) + this.innerEdge;
    }

    render() {
        document.write(`Inner edge is: ${this.innerEdge} <br> Upper edge is: ${this.upperEdge} <br>`);
        document.write(`Number ${randomNumForInRangeCheck} is in range: ${this.isInRange(randomNumForInRangeCheck)} <br>`);
        document.write(`Random number in range is: ${this.getRandomNumInRange()}`);
    }
}

// Тепер я створю сам об'єкт при чому я повинен задати аргументи які будуть передані у параметри класу
let rangeObj = new Range(1, 10); // 
const randomNumForInRangeCheck = Math.ceil(Math.random() * 15);
// викликаю кожний метод
rangeObj.isInRange(randomNumForInRangeCheck); // в цьому випадку при виклику я повинен пердати значення як аргумент
rangeObj.getRandomNumInRange();
rangeObj.render();