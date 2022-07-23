//16. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.

let currentLetter = '';
let reversedRow = '';

do {
    reversedRow = currentLetter + reversedRow;
    currentLetter = prompt('Enter letters here. The process will be over when you enter "a"');

} while (currentLetter !== 'a');

document.write(reversedRow)

/*for (let i = lettersRow.length - 1; i >= 0; i--) {
    //document.write(`Here is a reversed row: ${lettersRow[i]}`);
    document.write(lettersRow[i])
}*/