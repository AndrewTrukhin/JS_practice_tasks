/*Задача 15. З використанням операторів вибору реалізувати гру «Камінь ножниці папір» 
(користувач задає свій варіант, комп’ютер генерує випадковим чином)*/

//alert('Let`s play Rock-Paper-Scissors against AI ')

let myChoice = parseInt(prompt('Make your choice and print "1" for "rock, print "2" for "paper" or print "3" for "scissors"'));

switch (myChoice) {
    case 1:
        myChoice = 'rock';
        console.log('You choosed rock');
        break
    case 2:
        myChoice = 'paper';
        console.log('You choosed paper');
        break
    case 3:
        myChoice = 'scissors';
        console.log('You choosed scissors')
        break
}

let aiChoice = Math.ceil(Math.random() * 3);

switch (aiChoice) {
    case 1:
        aiChoice = 'rock';
        console.log('AI choosed rock');
        break
    case 2:
        aiChoice = 'paper'
        console.log('AI choosed paper')
        break
    case 3: 
        aiChoice = 'scissors'
        console.log('AI choosed scissors')
}

if (myChoice < 1 || myChoice > 3) {
    console.log('You entered wrong data! Please, try again!');
}

else if (myChoice === aiChoice) {
    console.log('It`s a draw!');
}

else if (myChoice === 'rock' && aiChoice === 'scissors' || myChoice === 'scissors' && aiChoice === 'paper' || 
        myChoice === 'paper' && aiChoice === 'rock') {
    console.log(`You win! You chosed ${myChoice} and AI choosed ${aiChoice}`);
}

else {
    console.log(`AI won! You chosed ${myChoice} and AI choosed ${aiChoice}`)
}