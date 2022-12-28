/*Задача 7. Розробити гру «Вгадай число». Двоє гравців записують свої варіанти. 
Виграє той, у кого число ближче до загаданого комп’ютером. Підраховувати кількість перемог кожного гравця.*/

class Game {
    constructor(maxRange, roundsQty) {
        this.maxRange = maxRange;
        this.roundsQty = roundsQty;
        this.firstPlayerScores = 0;
        this.secondPlayerScores = 0;
        this.isFirstPlayerWinsRound = undefined;
        this.isSecondPlayerWinsRound = undefined;
        this.randomNumber = undefined;
        this.currentRound = 0;
        this.isResultChecked = true;
    }

    createElement(elementName, attributes) {
        const element = document.createElement(elementName);
        for (const key in attributes) {
            element[key] = attributes[key];
        }
        return element
    }

    render() {
        // створення контейнера
        const container = this.createElement('div', {
            className: 'container',
            id: 'main',
        });
        document.querySelector('body').appendChild(container);

        // створення div та кнопки для початку гри та початку наступного раунду
        const startBtnDiv = this.createElement('div', { className: 'startBtnDiv' });
        container.appendChild(startBtnDiv);

        const startButton = this.createElement('button', {
            id: 'start',
            innerText: 'Generete random number',
            //onclick: `${this.getRandomNum}.bind(this)`, //НЕ ПРАЦЮЄ ЛІТЕРАЛ
        });
        startButton.onclick = this.getRandomNum.bind(this);
        startBtnDiv.appendChild(startButton);

        // створення параграфу для відображення поточного раунду гри
        const roundParagraph = this.createElement('p', {
            id: 'roundParagraph',
            innerText: 'Round: ',
        });
        startBtnDiv.appendChild(roundParagraph);


        const roundSpan = this.createElement('span', {
            id: 'roundSpan',
        });
        roundParagraph.appendChild(roundSpan);

        // створення div для для виведення рандомного числа
        const randomNumDiv = this.createElement('div', { className: 'playerDiv' });
        container.appendChild(randomNumDiv);

        const td = this.createElement('td', { id: 'randomNumCell' });
        randomNumDiv.appendChild(td);

        this.renderPlayer(container, 'first', this.firstPlayerScores, this.maxRange);
        this.renderPlayer(container, 'second', this.secondPlayerScores, this.maxRange);

        const buttonResult = this.createElement('button', {
            id: 'resultBtn',
            innerText: 'Check result',
            //onclick: 'this.comparePlayersNums.bind(this)',  //НЕ ПРАЦЮЄ ЛІТЕРАЛ
        });
        buttonResult.onclick = this.comparePlayersNums.bind(this);
        container.appendChild(buttonResult);
    }

    renderPlayer(parent, playerNum, playerScores, numsRange) {

        // створення div для першого гравця
        const playerDiv = this.createElement('div', {
            id: 'problem',
            className: 'playerDiv'
        });
        parent.appendChild(playerDiv);

        // створення label
        const scoresLabel = this.createElement('label', {
            className: 'scoreLable',
            innerText: `${playerNum} player scores`,
        });
        playerDiv.appendChild(scoresLabel);

        // створення вікна для виведення кількості балів першого гравця
        const playerScoresCell = this.createElement('td', {
            className: 'cell',
            id: `${playerNum}PlayerScoresCell`,
            innerText: playerScores,
        });
        playerDiv.appendChild(playerScoresCell);

        /// створення label 
        const answerLabel = this.createElement('label', {
            className: 'answerLabel',
            innerText: `${playerNum} player guess: `,
        });
        playerDiv.appendChild(answerLabel);

        // створення вікна для введення варіанта відповіді першого гравця
        const answerInput = this.createElement('input', {
            className: 'input',
            id: `${playerNum}PlayerAnswerInput`,
            type: 'number',
            min: '1',
            max: numsRange,
        });
        playerDiv.appendChild(answerInput);
    }

    getRandomNum() {
        if (this.isResultChecked) {
            this.isResultChecked = false;
            this.randomNumber = Math.ceil(Math.random() * this.maxRange);
            this.currentRound++;
            document.getElementById('roundSpan').innerText = `${this.currentRound}`;
            const randomNumCell = document.getElementById('randomNumCell');
            const firstPlayerAnswerInput = document.getElementById('firstPlayerAnswerInput');
            const secondPlayerAnswerInput = document.getElementById('secondPlayerAnswerInput');
            randomNumCell.innerText = '';
            firstPlayerAnswerInput.style.borderColor = 'black';
            secondPlayerAnswerInput.style.borderColor = 'black';
            firstPlayerAnswerInput.style.backgroundColor = 'white';
            secondPlayerAnswerInput.style.backgroundColor = 'white';
            firstPlayerAnswerInput.value = '';
            secondPlayerAnswerInput.value = '';
            console.log(this.randomNumber);
            return this.randomNumber
        }
        else {
            randomNumCell.innerText = 'Random number has already been generated';
            return false
        }
    }

    comparePlayersNums() {
        const randomNumCell = document.getElementById('randomNumCell');

        if (!this.isResultChecked) {
            this.isResultChecked = true;

            const firstPlayerAnswerInput = document.getElementById('firstPlayerAnswerInput');
            const secondPlayerAnswerInput = document.getElementById('secondPlayerAnswerInput');
            const firstPlayerScoreCell = document.getElementById('firstPlayerScoresCell');
            const secondPlayerScoreCell = document.getElementById('secondPlayerScoresCell')
            const playerInputs = document.querySelectorAll('input');

            // валідація
            const validatePlayerInput = (answerInput) => {
                const regexValidator = /^([1-9]|1[0-9]|20)$/;
                return regexValidator.test(answerInput.value);
            }

            // перевірка чи сформоване випадкове число
            const validation = (playerInputs, randomNumCell) => {
                const playerInputsArr = Array.from(playerInputs);
                playerInputsArr.forEach((answerInput) => {
                    if (answerInput.value === '') {
                        answerInput.style.borderColor = 'red';
                        randomNumCell.innerText = `Choose numbers in range from 1 to ${this.maxRange}`;
                        return false
                    }
                    if (!validatePlayerInput(answerInput)) {
                        answerInput.style.borderColor = 'red';
                        randomNumCell.innerText = `Choose numbers in range from 1 to ${this.maxRange}`;
                        return false
                    }
                });
            }
            validation(playerInputs, randomNumCell);

            // отримання результатів гравців
            const getPlayerResult = (answerInput) => Math.abs(this.randomNumber - parseInt(answerInput));
            const firstPlayerResult = getPlayerResult(firstPlayerAnswerInput.value);
            const secondPlayerResult = getPlayerResult(secondPlayerAnswerInput.value);

            // перевірка закінчення гри для відміни onclick
            const overTheGameCheck = () => {
                if (this.roundsQty === this.currentRound) {
                    alert('Game over! Check your scores and refresh the window!');
                    document.getElementById('start').onclick = '';
                    document.getElementById('resultBtn').onclick = '';
                }
            }

            // логіка порівняння результатів
            const getPlayerScores = (firstResult, secondResult, firstInput, secondInput, firstScoresCell, secondScoresCell) => {
                if (firstResult < secondResult) {
                    firstInput.style.backgroundColor = 'green';
                    secondInput.style.backgroundColor = 'red';
                    this.firstPlayerScores++;
                    firstScoresCell.innerText = this.firstPlayerScores;
                    this.isFirstPlayerWinsRound = true;
                    this.isSecondPlayerWinsRound = false;
                }
                else if (secondResult < firstResult) {
                    firstInput.style.backgroundColor = 'red';
                    secondInput.style.backgroundColor = 'green';
                    this.secondPlayerScores++;
                    secondScoresCell.innerText = this.secondPlayerScores;
                    this.isFirstPlayerWinsRound = false;
                    this.isSecondPlayerWinsRound = true;
                }
                else if (secondResult === firstResult) {
                    alert('This round is a draw!');

                }
                randomNumCell.innerText = `Random number is: ${this.randomNumber}`;
            }

            getPlayerScores(firstPlayerResult, secondPlayerResult, firstPlayerAnswerInput, secondPlayerAnswerInput,
                firstPlayerScoreCell, secondPlayerScoreCell);

            overTheGameCheck();
        }
        else {
            randomNumCell.innerText = `Press button 'Generate random number'`;
            return false
        }

    }
}
const maxRange = parseInt((prompt('Choose a number to set max range of numbers', 20)));
const roundsQty = parseInt((prompt('Choose a quantity of rounds to over the game', 10)));

const guessNumberGame = new Game(maxRange, roundsQty);
guessNumberGame.render();