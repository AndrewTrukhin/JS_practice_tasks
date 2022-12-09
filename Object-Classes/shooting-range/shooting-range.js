/*Задача 5. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Поля(властивості):	Масив, у якому зберігається поле з зайцями
Методи (дії):	    Метод пострілу (задається позиція пострілу)
                    Виведення ігрового поля*/

class ShootingRange {
    constructor(arrElemetsQty) {
        this.shootingRangeField = this.createArray(arrElemetsQty);
    }
    createArray(arrElemetsQty) {
        const cellsArr = [];
        for (let i = 0; i < arrElemetsQty; i++) {
            cellsArr[i] = Math.round(Math.random());
        }
        console.log(cellsArr)
        return cellsArr
    }
    renderShootingRange() {
        const parent = document.querySelector('body');
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < this.shootingRangeField.length; i++) {
            const td = document.createElement('td');
            td.style.backgroundColor = 'grey';
            td.textContent = `Cell №${i + 1}`;
            td.id = `${i + 1}`;
            tr.appendChild(td);
        }
        parent.appendChild(table);
        const startGameButton = document.createElement('button');
        startGameButton.id = 'play';
        parent.appendChild(startGameButton);
        startGameButton.type = 'button';
        startGameButton.textContent = 'Make a shot';
    }
    makeShot() {
        let rabbitQty = this.shootingRangeField.filter(item => item === 1).length;
        document.querySelector('#play').addEventListener('click', () => {
            let shotPosition = parseInt(prompt(`Choose any of all ${this.shootingRangeField.length} cells to shoot a hidden rabbit`, 1));
            let cell = document.getElementById(`${shotPosition}`);
            if (this.shootingRangeField[shotPosition - 1] === 1) {
                cell.style.backgroundColor = 'green';
                cell.textContent = 'You shot a hare';
                rabbitQty--
                if (rabbitQty === 0) {
                    alert('You killed all hidden rabbits!')
                }
            }
            else {
                cell.style.background = 'red';
                cell.textContent = 'You missed';
            }
        });
    }
    play() {
        this.renderShootingRange();
        this.makeShot(); 
    }
}
const maxArrElements = 10;
const shootRange = new ShootingRange(maxArrElements);
shootRange.play();