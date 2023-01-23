/*Задача 5. Створити клас TBankomat, який моделює роботу банкомата. 
Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.*/

class TBankomat {
    constructor() {
        this._banknotes = {
            5: 1,
            10: 1,
            20: 1,
            50: 3,
            100: 2,
            200: 1,
        };
    }

    get banknotes() {
        return this._banknotes;
    }

    set banknotes(banknotes) {
        return this._banknotes = banknotes;
    }

    withdrawMoney(moneyToWithdraw) {
        const nominalsArr = Object.keys(this._banknotes)
            .map(Number)
            .sort((a, b) => b - a);
        const banknoteQty = Object.values(this._banknotes).reverse();
        const banknotesToWithdrawArr = [];

        if (moneyToWithdraw % 5 === 0 && moneyToWithdraw > 0) {

            for (let i = 0; i < nominalsArr.length; i++) {
                let nominal = nominalsArr[i];
                let noteQty = banknoteQty[i];

                while (moneyToWithdraw - nominal >= 0 && noteQty > 0) {
                    moneyToWithdraw -= nominal;
                    noteQty--;
                    this._banknotes[nominal]--;
                    banknotesToWithdrawArr.push(nominal);
                }
            }

            if (moneyToWithdraw === 0) {
                return banknotesToWithdrawArr;
            }
            else {
                console.log('Request is exceed ATM`s cash')
            }

        }
        else {
            console.log('ATM can provide sum wich is only dividable to 5');
        }
    }

    getMaxAmount() {
        const nominals = Object.keys(this._banknotes);
        const banknoteQty = Object.values(this._banknotes);
        const moneyPerBanknoteAmount = [];
        
        for (let i = 0; i < nominals.length; i++) {
            moneyPerBanknoteAmount[i] = nominals[i] * banknoteQty[i];
        }

        return moneyPerBanknoteAmount.reduce((total, currValue) => total + currValue, 0);

    }

    getMinAmount() {
        const nominals = Object.keys(this._banknotes).map(Number).sort((a, b) => b - a);
        const banknoteQty = Object.values(this._banknotes).reverse();
    
        for (let i = nominals.length; i >= 0; i--) {
            
            if (banknoteQty[i] > 0) {
                return nominals[i];
            }
        }
    }
}

const ATM = new TBankomat();

console.log(ATM.withdrawMoney(185));

console.log(ATM.getMaxAmount());

console.log(ATM.getMinAmount());