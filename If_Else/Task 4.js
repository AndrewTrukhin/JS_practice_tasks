// Задача 4. З клавіатури вводиться кількість балів. Вивести на екран оцінку (задовільно, добре чи відмінно)

const scoreAmount = parseInt(prompt('Enter achived score'));

switch (scoreAmount) {
    case 2:
        console.log('Unsatisfied')
        break
    case 3:
        console.log('Satisfied')
        break
    case 4:
        console.log('Good')
        break
    case 5:
        console.log('Excellent')
        break
    default:
        console.log('You entered inappropriate number')
}