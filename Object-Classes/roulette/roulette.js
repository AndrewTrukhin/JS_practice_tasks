/*Задача 4. Створити об’єкт «Рулетка»
Поля(властивості):	Масив, у якому зберігаються бали ігрового барабану
Методи (дії):	    Метод для випадкового визначення кількості балів
                    Виведення ігрового барабану на екран (у формі таблиці)*/

class Roulette {
    constructor(scores) {
        this.scores = scores;
    }
    getRandomScore() {
        const randomIndex = Math.floor(Math.random() * this.scores.length);
        let randomScore = this.scores[randomIndex];
        return randomScore
    }
    renderRoulette() {
        const parent = document.querySelector('body');
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);
        let userScore = this.getRandomScore();
        for (let i = 0; i <= this.scores.length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            if (i === 0) {
                td.textContent = 'Scores';
            }
            else {
                td.textContent = `${this.scores[i - 1]}`;
                td.style.backgroundColor = 'red';
                if (userScore === this.scores[i - 1]) {
                    td.style.backgroundColor = 'green';
                }
            }
        }
        parent.appendChild(table);
        const scoreMessage = document.createTextNode(`You have got a score: ${userScore}`);
        parent.appendChild(scoreMessage);
    }
}
const scores = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const roulette = new Roulette(scores);
roulette.renderRoulette();