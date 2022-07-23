//1. Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

// Вирішення за допомогою інструкцій If Else

let firstNumber = parseInt(prompt('Enter number from "1" to "10"'));
let secondNumber = parseInt(prompt('Enter number from "1" to "10" to compare entered numbers'));

if (firstNumber > secondNumber) {
	firstNumber = 0;
	console.log(firstNumber);
}

else if (secondNumber > firstNumber) {
	secondNumber = 0;
	console.log(secondNumber);
}

else {
	firstNumber = 1;
	secondNumber = 1;
	console.log(firstNumber, secondNumber);
}

// Вирішення за допомогою тернарного оператора`

/*let firstNumber = parseInt(prompt('Enter number from "1" to "10"'));

let secondNumber = parseInt(prompt('Enter number from "1" to "10" to compare entered numbers'));

if (firstNumber === secondNumber) {
	firstNumber = secondNumber = 1;
	console.log(firstNumber, secondNumber);
}
else {
    firstNumber > secondNumber 
    ? firstNumber = 0
    : secondNumber = 0
    console.log(firstNumber, secondNumber)
}*/