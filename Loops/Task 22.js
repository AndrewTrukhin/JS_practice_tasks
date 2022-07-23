/*Зачача 22. Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число 
(застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).*/

let intervalEnd = parseInt(prompt('Pick any positive integer number and set up interval where it is'));
let intervalStart = 0;
let divider = 2;
let midInterval = Math.floor((intervalStart + intervalEnd) / divider);
let chooseInterval;

do {
	chooseInterval = parseInt(prompt(`Press "1" if your picked number is ${midInterval}; 
    Press "2" if your picked number is bigger than ${midInterval}; 
    Press "3" if your picked number is smaller than ${midInterval}`));

	switch (chooseInterval) {
		case 1:
			alert(`AI always beats humans! You picked a number ${midInterval} !`);
			break
		case 2:
			intervalStart = midInterval;
			midInterval = Math.round((intervalStart + intervalEnd) / divider);
			if (midInterval === intervalEnd) {
				alert(`AI always beats humans! You picked a number ${midInterval} !`);
			}
			break
		case 3:
			intervalEnd = midInterval;
			midInterval = Math.floor((intervalStart + intervalEnd) / divider);
			if (midInterval === intervalStart) {
				alert(`AI always beats humans! You picked a number ${midInterval} !`);
			}
			break
		default:
			alert('You pressed wrong number');
	}
} while (chooseInterval !== 1 && midInterval !== intervalEnd && midInterval !== intervalStart)


// Варіант з двома запитаннями

/*let intervalEnd = parseInt(prompt('Pick any positive integer number and set up interval where it is'));
let intervalStart = 0;
let divider = 2;
let midInterval = Math.floor((intervalStart + intervalEnd) / divider);

do {
	let isSecretNumberBigger;

	isSecretNumberGuessed = confirm(`Is your picked number equals ${midInterval} ?`);

	if (isSecretNumberGuessed) {
		alert(`AI always beats humans! You picked a number ${midInterval} !`);
	}
	else {
		isSecretNumberBigger = confirm(`Is your picked number bigger than ${midInterval} ?`);

		if (isSecretNumberBigger) {
			intervalStart = midInterval;
			midInterval = Math.round((intervalStart + intervalEnd) / divider);
			if (midInterval === intervalEnd) {
				alert(`AI always beats humans! You picked a number ${midInterval} !`);
			}
		}
		else {
			intervalEnd = midInterval;
			midInterval = Math.floor((intervalStart + intervalEnd) / divider);
			if (midInterval === intervalStart) {
				alert(`AI always beats humans! You picked a number ${midInterval} !`);
			}
		}
	}

} while (!isSecretNumberGuessed && midInterval !== intervalEnd && midInterval !== intervalStart)*/