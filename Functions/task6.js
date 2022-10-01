/*Задача 6. Створити функції, які переводять:
1)	Сантиметри у дюйми;
2)	Кілограми у фунти;
3)	Кілометри у милі.*/

const calcInch = (centimeter) => { // Описуємо функцію переводу сантиметрів у дюйми
    const inchPercm = 0.3937;
    return (centimeter * inchPercm).toFixed(2);
}
const calcPound = (kilogram) => { // Описуємо функцію переводу кілограм у фунти
    const poundPerKilo = 0.454;
    return (kilogram * poundPerKilo).toFixed(2);
}
const calcMiles = (kilometer) => { // Описуємо функцію переводу кілометрів у милі
    const milePerKilometer = 1.6093;
    return (kilometer * milePerKilometer).toFixed(2)
}

const centimeterNumber = parseFloat(prompt('Enter number of centimeters to calculate inches')); // водимо
const inchesCalulated = calcInch(centimeterNumber);
alert(`There are ${inchesCalulated} inches in ${centimeterNumber} centimeter(s)`); // викликаємо

const kilogramNumber = parseFloat(prompt('Enter number of kilogrames to calculate pounds'));
const poundsCalculated = calcPound(kilogramNumber);
alert(`There are ${poundsCalculated} pounds in ${kilogramNumber} kilograme(s)`);

const kilometersNumber = parseFloat(prompt('Enter number of kilometers to calculate miles'));
const kilometersNumberCalculated = calcMiles(kilometersNumber);
alert(`There are ${kilometersNumberCalculated} miles in ${kilometersNumber} kilometer(s)`);