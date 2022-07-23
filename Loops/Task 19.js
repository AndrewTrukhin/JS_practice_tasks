/*Задача 19. З клавіатури вводяться два числа N i M (N<M). Вивести на екран числа
N---M
N+1 --- M-1
N+2 --- M-2
N+3 --- M-3
. . . . . . 
Виведення завершити коли число справа стане меншим за число зліва.*/

let numberN = parseInt(prompt('Enter first number'));
let numberM = parseInt(prompt('Enter second, bigger number than the first one'));

document.write(`${numberN} --- ${numberM} <br>`)

while (numberM > numberN) {
    numberN++;
    numberM--
    document.write(`${numberN} --- ${numberM} <br>`)
}


// Ускладнений варіант

/*let numberN = parseInt(prompt('Enter first number'));

let numberM = parseInt(prompt('Enter second, bigger number than the first one'));
let incrementor = 1;

document.write(`${numberN} --- ${numberM} <br>`)

while (numberM > numberN) {
    numberN = numberN + incrementor;
    numberM = numberM - incrementor;
    document.write(`${numberN} --- ${numberM} <br>`)
    incrementor++;
}*/