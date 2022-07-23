/*З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити скільки гривень і копійок є у даній сумі.
 Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок*/

const coinsAmount = prompt('How many coins do you have?', 245);

const findHryvnyaAmountResult = Math.floor(coinsAmount / 100);

alert(`You have ${findHryvnyaAmountResult} hryvnya`);

const coinsleft = coinsAmount % 100;

alert(`You have ${coinsleft} coins`);