/*Задача 7. 
З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).*/

const personAge = parseInt(prompt('Enter person`s age'));

if (personAge >= 0 && personAge <= 6) {
    console.log('kindergarden child');
}

else if (personAge <= 16) {
    console.log('shoolboy');
}

else if (personAge <=22) {
    console.log('student');
}

else if (personAge <= 64) {
    console.log('working person');
}

else {
    console.log('pensioner');
}