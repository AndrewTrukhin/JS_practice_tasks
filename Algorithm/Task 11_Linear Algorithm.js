/*З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп). Визначити скільки гривень і копійок є у даній сумі*/

const coinsValue = parseInt(prompt('Enter value of your coins'));

const coinsAmount = parseInt(prompt('Enter amount of your coins'));

const findHryvnyaAmount = coinsValue * coinsAmount;

const findHryvnyaAmountResult = Math.floor(findHryvnyaAmount / 100);

const findCoinsAmountResult = findHryvnyaAmount % 100;

alert(`You have ${findHryvnyaAmountResult} hryvnya and ${findCoinsAmountResult} coins`);