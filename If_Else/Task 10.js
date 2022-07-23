/*Задача 10. Родина їде на відпочинок автомобілем. 
З клавіатури вводиться наявна кількість літрів палива, витрати палива на 100 кілометрів та відстань, яку необхідно подолати. 
Вивести на екран чи потрібно, чи не потрібно буде додатково заправляти автомобіль.*/

const fuelQty = parseFloat(prompt('Enter how much fuel do you have in your tank'));

const fuelSpendPer100km = parseFloat(prompt('Enter how much fuel does your car spend per 100 km'));

const distanceToDrive = parseFloat(prompt('Enter the distance you want to drive'));

const fuelToDriveDistance = distanceToDrive / fuelSpendPer100km;

console.log(fuelToDriveDistance)

if (fuelToDriveDistance >= fuelQty) {
    console.log('You don`t need to refuel');
}
else {
    console.log('You need to refuel')
}