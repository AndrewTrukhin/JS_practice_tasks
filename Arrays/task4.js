/* Задача 4. Описати літерал, що зберігає ____ та вивести його.
1.	оцінки за екзамен в національній системі (відмінно, добре, …).
2.	дні тижня.
3.	місяці року.
4.	жіночі імена (щонайменше 7 шт.)
5.	чоловічі імена (щонайменше 7 шт.)
6.	кольори веселки.
7.	імена студентів Вашої групи.
8.	прізвища студентів Вашої групи.
9.	назви фруктів (щонайменше 7 шт.)
10.	назви овочів (щонайменше 7 шт.)
11.	оцінки за екзамен в системі ECTS (A,B,…).*/

const examScores = ['good', 'good', 'fair', 'excellent'];
const daysWeek = ['Friday', 'Satturday', 'Sunday'];
const monthsYear = ['June', 'July', 'August'];
const womenNames = ['Jessica', 'Cameron', 'Kate', 'Angelina', 'Scarlett', 'Chloe', 'Jennifer', 'Sandra', 'Uma'];
const menNames = ['Tom', 'Bruce', 'Hugh', 'Leonardo', 'Brad', 'Morgan', 'Denzel', 'Keanu', 'Christian'];
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const classmateNames = ['Alexander', 'Victor', 'Julia', 'Lena', 'Bogdan'];
const classmateSurnames = ['Holub', 'Zhuk', 'Khmelenko', 'Nakonechna', 'Tymots'];
const fruitNames = ['apple', 'pear', 'pineapple', 'banana', 'orange', 'grape', 'kiwi'];
const vegetableNames = ['potato', 'tomato', 'cucumber', 'cabbage', 'carrot', 'red pepper'];
const examScoresEctsSystem = ['B', 'C', 'E', 'A'];

for (let i = 0; i < examScores.length; i++) {
    console.log(`Score ${i + 1}: ${examScores[i]}`);
}

for (let i = 0; i < daysWeek.length; i++) {
    console.log(`Day of the week ${i + 1}: ${daysWeek[i]}`);
}

for (let i = 0; i < monthsYear.length; i++) {
    console.log(`Month of the year ${i + 1}: ${monthsYear[i]}`);
}

for (let i = 0; i < womenNames.length; i++) {
    console.log(`Female name ${i + 1}: ${womenNames[i]}`);
}

for (let i = 0; i < menNames.length; i++) {
    console.log(`Male name ${i + 1}: ${menNames[i]}`);
}

for (let i = 0; i < rainbowColors.length; i++) {
    console.log(`Rainbow color ${i + 1}: ${rainbowColors[i]}`);
}

for (let i = 0; i < classmateNames.length; i++) {
    console.log(`Academy classmate name ${i + 1}: ${classmateNames[i]}`);
}

for (let i = 0; i < classmateSurnames.length; i++) {
    console.log(`Academy classmate surnamename ${i + 1}: ${classmateSurnames[i]}`);
}

for (let i = 0; i < fruitNames.length; i++) {
    console.log(`Fruit name ${i + 1}: ${fruitNames[i]}`);
}

for (let i = 0; i < vegetableNames.length; i++) {
    console.log(`VegetableName name ${i + 1}: ${vegetableNames[i]}`);
}

for (let i = 0; i < examScoresEctsSystem.length; i++) {
    console.log(`ECTS system score ${i + 1}: ${examScoresEctsSystem[i]}`);
}