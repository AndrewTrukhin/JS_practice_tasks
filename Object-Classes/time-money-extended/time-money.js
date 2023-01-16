/*Задача 3. Створити клас TPair, який представляє пару чисел і містить методи для їх збільшення/зменшення на 1. 
Реалізувати класи нащадки TTime (“години.хвилини”) та TMoney (“гривні.копійки”). 
Згенерувати поступово випадковим чином N пар (час, гроші), де час – тривалість виконання роботи, 
а гроші – вартість однієї хвилини роботи працівників.
Обчислити витрати на виконання кожної із робіт.*/

class TPair {
    constructor(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }

    increaseFirstNum() {
        this.firstNum++;
    }

    increaseSecondNum() {
        this.secondNum++;
    }

    decreaseFirstNum() {
        this.firstNum--;
    }

    decreaseSecondNum() {
        this.secondNum--;
    }
}
const age = 18;
const accountQty = 1;
const pair = new TPair(age, accountQty);

console.log(pair);


//нащадок - ЧАС
class TTime extends TPair {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum);
    }

    increaseHours(hoursToIncrease) {
        const hoursPerDay = 24;

        if (this.firstNum + hoursToIncrease >= hoursPerDay) {
            this.firstNum = (this.firstNum + hoursToIncrease) % hoursPerDay;
        }
        else {
            this.firstNum += hoursToIncrease
        }
    }

    increaseMinutes(minutesToIncrease) {
        const minutesPerHour = 60;

        if (this.secondNum + minutesToIncrease >= minutesPerHour) {
            this.secondNum = (this.secondNum + minutesToIncrease) % minutesPerHour;
        }
        else {
            this.secondNum += minutesToIncrease;
        }
    }

    decreaseHours(hoursToDecrease) {
        const minHours = 0;
        const hoursPerDay = 24;

        if (this.firstNum - hoursToDecrease < minHours) {
            this.firstNum = Math.abs((hoursPerDay - hoursToDecrease) % hoursPerDay);
        }
        else {
            this.firstNum -= hoursToDecrease;
        }
    }

    decreaseMinutes(minutesToDecrease) {
        const minMinutes = 0;
        const minutesPerHour = 60;
        if (this.secondNum - minutesToDecrease < minMinutes) {
            this.secondNum = Math.abs((minutesPerHour - minutesToDecrease) % minutesPerHour);
        }
        else {
            this.secondNum -= minutesToDecrease;
        }
    }

    toString() {
        return `Current time is ${this.firstNum} hours ${this.secondNum} minutes`;
    }

}
const hours = 23;
const minutes = 59;
const time = new TTime(23, 59);

console.log(time);

// нащадок - ГРОШІ
class TMoney extends TPair {
    constructor(firstNum, secondNum) {
        super(firstNum, secondNum);
    }

    increaseHryvnyas(hryvnyasToIncrease) {
        const maxHryvnyas = 500;

        if (hryvnyasToIncrease > maxHryvnyas) {
            console.log(`Invalid parameter. Limit for hryvnyas amount is: ${maxHryvnyas}`);
        }
        else {
            this.firstNum += hryvnyasToIncrease;
        }
    }

    increaseCoins(coinsToIncrease) {
        const coinsPerHryvnya = 100;

        if (this.secondNum + coinsToIncrease >= coinsPerHryvnya) {
            this.secondNum = (this.secondNum + coinsToIncrease) % coinsPerHryvnya;
        }
        else {
            this.secondNum += coinsToIncrease;
        }
    }

    decreaseHryvnyas(hryvnyasToDecrease) {
        const minHryvnyas = 0;

        if (this.firstNum - hryvnyasToDecrease < minHryvnyas) {
            this.firstNum = 0;
        }
        else {
            this.firstNum -= hryvnyasToDecrease;
        }
    }

    decreaseCoins(coinsToDecrease) {
        const minCoins = 0;
        const coinsPerHryvnya = 100;

        if (this.secondNum - coinsToDecrease < minCoins) {
            this.secondNum = Math.abs((coinsPerHryvnya - coinsToDecrease)) % coinsPerHryvnya;
        }
        else {
            this.secondNum -= coinsToDecrease;
        }
    }

    toString() {
        return `Current money is ${this.firstNum} hryvnyas ${this.secondNum} coins`;
    }
}
const money = new TMoney(10, 50);
console.log(money)

class TWork {
    constructor(hours, minutes, hryvnyas, coins) {
        this.workTime = new TTime(hours, minutes);
        this.workMoney = new TMoney(hryvnyas, coins);
    }

    getWorkCost() {
        const hours = this.workTime.firstNum;
        const minutes = this.workTime.secondNum;
        const minutesPerHour = 60;
        const totalMinutes = hours * minutesPerHour + minutes;

        const hryvnyas = this.workMoney.firstNum;
        const coins = this.workMoney.secondNum;
        const coinsPerHryvnya = 100;
        const totalCoins = hryvnyas * coinsPerHryvnya + coins;
        const totalMoney = (totalCoins / coinsPerHryvnya).toFixed(2);

        const workCosts = (+totalMoney * totalMinutes).toFixed(2);
        return `Total time of the work will cost ${workCosts}`;
    }
}

const workQty = 4;

for (let i = 0; i < workQty; i++) {
    const randomHoursQty = Math.ceil(Math.random() * 23);
    const randomMinutesQty = Math.ceil(Math.random() * 59);
    const randomHryvnyasQty = Math.ceil(Math.random() * 200);
    const randomCoinsQty = Math.ceil(Math.random() * 99);

    const workCosts = new TWork(randomHoursQty, randomMinutesQty, randomHryvnyasQty, randomCoinsQty);
    console.log(workCosts.getWorkCost());
}