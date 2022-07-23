/*Задача 19. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.
За один крок заєць може стрибнути у будь-яку із вільних клітинок. 
Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. 
Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. 
Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.*/

const randomRabbitPositionRow = Math.ceil(Math.random() * 2);
const randomRabbitPositionColumn = Math.ceil(Math.random() * 2);                    
let placingTrapRow = parseInt(prompt('Press "1" or "2" for placing a trap in respective row'));
let placingTrapColumn = parseInt(prompt('Press "1" or "2" for placing a trap in respective column'));
let randomRabbitJumpRow = Math.ceil(Math.random() * 2);
let randomRabbitJumpColumn = Math.ceil(Math.random() * 2);

if (randomRabbitPositionRow === randomRabbitJumpRow && randomRabbitPositionColumn === randomRabbitJumpColumn) {
    randomRabbitJumpRow = Math.ceil(Math.random() * 2);
    randomRabbitJumpColumn = Math.ceil(Math.random() * 2);
}

const isRabbitCaught = (placingTrapRow === randomRabbitJumpRow && placingTrapColumn === randomRabbitJumpColumn);

if (isRabbitCaught) {
    console.log('Congratulations! You have won 100 scores');
}

else {
    console.log('Rabbit wasn`t caught on his first jump')
    randomRabbitJumpRow = Math.ceil(Math.random() * 2);
    randomRabbitJumpColumn = Math.ceil(Math.random() * 2);
    if (isRabbitCaught) {
        console.log('Congratulations! You have won 50 scores');
    }
    else {
        console.log('Rabbit wasn`t caught on his second jump. You didn`t catch a rabbit:(');
    }
}