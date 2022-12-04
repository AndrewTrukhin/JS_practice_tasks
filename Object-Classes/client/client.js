/* Задача. Створити об’єкт «Клієнт»
Клієнт  
Поля(властивості):  ПІБ, Номер рахунку, Кількість коштів
Методи (дії):       Зняття грошей з рахунку; Додавання грошей на рахунок;
ВАРІАНТ 1 ЛІТЕРАЛ;
Варіант 2 Функція з прототипами;
Варіант 3 Класи ECMASCRIPT 6*/


// ВАРІАНТ 1 ЛІТЕРАЛ
/*const client = {
    clientName: 'Andrii Trukhin Mykolayovych',
    clientBankAccount: 'UA533003350000000262032191663',
    clientMoneyAmount: 16850.39,

    withdrawMoney: function (withdraw) {
        return this.clientMoneyAmount -= withdraw
    },
    refundMoney: function (refund) {
        return this.clientMoneyAmount += refund
    },
    render: function (withdraw, refund) {
        let withdrawMoneyResult = this.withdrawMoney(withdraw);
        let refundMoneyResult = this.refundMoney(refund);
        document.write(`${this.clientName} has made withdraw of money from account ${this.clientBankAccount}. Money left: ${withdrawMoneyResult} <br>`);
        document.write(`${this.clientName} has made refund of money from account ${this.clientBankAccount}. Money left: ${refundMoneyResult} <br>`)
    }
}
const moneyToWithdraw = 50.39;
const moneyToRefund = 500;
client.render(moneyToWithdraw, moneyToRefund);*/


// Варіант 2 Функція з прототипами
/*function Client(name, account, money) {
    this.clientName = name;
    this.clientBankAccount = account;
    this.clientMoneyAmount = money;

    Client.prototype.withdrawMoney = function (someMoney) {
        return this.clientMoneyAmount -= someMoney;
    }

    Client.prototype.refundMoney = function (someMoney) {
        return this.clientMoneyAmount += someMoney;
    }

    Client.prototype.render = function (withdraw, refund) {
        let withdrawMoneyResult = this.withdrawMoney(withdraw);
        let refundMoneyResult = this.refundMoney(refund);
        document.write(`${this.clientName} has made withdraw of money from account ${this.clientBankAccount}. Money left: ${withdrawMoneyResult} <br>`);
        document.write(`${this.clientName} has made refund of money from account ${this.clientBankAccount}. Money left: ${refundMoneyResult} <br>`);
    }
}
const moneyToWithdraw = 50.39;
const moneyToRefund = 500;
const clientObj = new Client('Trukhin Andrii', 'UA533003350000000262032191663', 16850.39);
clientObj.render(moneyToWithdraw, moneyToRefund);*/



//Варіант 3 Класи ECMASCRIPT 6
class Client {
    constructor(name, account, money) {
        this.clientName = name;
        this.clientBankAccount = account;
        this.clientMoneyAmount = money;
    }
 
    withdrawMoney(someMoney) {
        return this.clientMoneyAmount -= someMoney;
    }
 
    refundMoney(someMoney) {
        return this.clientMoneyAmount += someMoney;
    }

    render(withdraw, refund) {
        let withdrawMoneyResult = this.withdrawMoney(withdraw);
        let refundMoneyResult = this.refundMoney(refund);
        document.write(`${this.clientName} has made withdraw of money from account ${this.clientBankAccount}. Money left: ${withdrawMoneyResult} <br>`);
        document.write(`${this.clientName} has made refund of money from account ${this.clientBankAccount}. Money left: ${refundMoneyResult} <br>`);
    }
}
const clientObj = new Client('Trukhin Andrii', 'UA533003350000000262032191663', 16850.39);
const moneyToWithdraw = 50.39;
const moneyToRefund = 500;
clientObj.render(moneyToWithdraw, moneyToRefund);