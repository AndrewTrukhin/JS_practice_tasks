/*1.2. З клавіатури вводиться ціна товару і кількість грошей. 
Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.*/

const gamepadPrice = parseFloat(prompt('Here is the price of the gamepad'));
const moneyAmount = parseFloat(prompt('How much money do you have?'));
const moneyLeft = moneyAmount - gamepadPrice;
const lotteryTicketPrice = 4;

if (moneyAmount < gamepadPrice) {
    console.log('Sorry, you do not have enough money:(');
}

else if (moneyLeft >= lotteryTicketPrice) {
    confirm('Thank You for this buying ! Would You like to buy a lottery ticket which costs 4 hryvnya?'); 

}
else {
    console.log('Congratulations, you have bought a new gamepad:)');
}