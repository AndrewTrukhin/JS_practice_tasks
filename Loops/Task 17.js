//17. З клавіатури вводиться початкове значення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.

// Спрощений варіант

let sum = 0;
let currentValue = 0;

while (sum < 100) {
    currentValue = parseInt(prompt('Enter some value to plus until it is less than 100'));
    sum += currentValue;
}

document.write(sum)




// Перша версія (ускладнено)

/*let totalValue = 100;
let sum = 0;
let currentValue = 0;
const startingValue = parseInt(prompt('Enter starting value'));

while (100 > sum) {

    currentValue = parseInt(prompt('Enter some value to plus until it is less than 100'));
    if (sum === 0) {
        sum = startingValue + currentValue;
    }
    else {
        sum += currentValue;
    }
}

document.write(sum)*/