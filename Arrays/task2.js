/*Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.*/

let scores = [];
let poorScoresQty = 0;
let excellentAndGoodScoresQty = 0;
let lowerThanAverageScoresQty = 0;
const poorScore = 2;
const goodScore = 4;
const scoreQty = parseInt(prompt('Enter all scores quantity', 10));

for (let i = 0; i < scoreQty; i++) {
    scores[i] = parseInt(prompt('Enter score points from "2" to "5"', 5));
}

for (let i = 0; i < scoreQty; i++) {
    if (scores[i] === poorScore) {
        poorScoresQty++;
    }

    if (scores[i] >= goodScore) {
        excellentAndGoodScoresQty++;
    }

    if (scores[i] < goodScore) {
        lowerThanAverageScoresQty++;
    }
}
console.log(`Poor scores: ${poorScoresQty}\nExcellent and good scores:${excellentAndGoodScoresQty}\nLower than average scores:${lowerThanAverageScoresQty}`);



/* Ще один варіант

let scores = [];
currentScore = 0;

let poorScoresQty = 0;
let excellentAndGoodScoresQty = 0;
let lowerThanAverageScoresQty = 0;
const poorScore = 2;
const goodScore = 4;
let i = 0;

do {
    currentScore = parseInt(prompt('Enter all scores here!', 5));
    scores[i] = currentScore;
    i++;
    console.log(scores)
} while (currentScore)

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == poorScore) {
        poorScoresQty++;
    }

    if (scores[i] >= goodScore) {
        excellentAndGoodScoresQty++;
    }

    if (scores[i] < goodScore) {
        lowerThanAverageScoresQty++;
    }
}
console.log(`Poor scores: ${poorScoresQty}\nExcellent and good scores:${excellentAndGoodScoresQty}\nLower than average scores:${lowerThanAverageScoresQty}`);*/