/*8. Задача. Розробити кредитний калькулятор як окремий клас.
Поля	Відсоток за використання кредитних коштів
        Мінімальний строк кредиту (у місяцях)
        Максимальний строк
Методи	Підрахунок кількості виплачених коштів щомісяця
        Підрахунок загальної кількості переплати*/

class creditCalculator {
    constructor(creditRate, minCreditPeriod, maxCreditPeriod) {
        this.userCreditRate = creditRate;
        this.minCreditPeriod = minCreditPeriod;
        this.maxCreditPeriod = maxCreditPeriod;
        this.userCreditPeriod = undefined;
        this.userCreditAmount = undefined;
        this.userMonthlyPayment = undefined;
        this.userOverpaymentAmount = undefined;
    }
    createElement(elementName, attributes) {
        const element = document.createElement(elementName);
        for (const key in attributes) {
            element[key] = attributes[key];
        }
        return element
    }

    render() {
        document.querySelector('body').className = 'body';

        // контейнер
        const container = this.createElement('div', {
            className: 'container',
            id: 'main',
        });
        document.querySelector('body').appendChild(container);

        // заголовок
        const headline = this.createElement('h1', {
            className: 'h1',
            innerText: 'Credit calculator',
        });
        container.appendChild(headline);

        // відсоткова ставка
        const rateParagraph = this.createElement('p', {
            className: 'paragraph',
            innerText: 'Credit rate : %',
        });
        container.appendChild(rateParagraph);

        const rateInput = this.createElement('input', {
            className: 'input',
            id: 'creditRate',
        });
        container.appendChild(rateInput);

        // виклик методу для виведення відсоткової ставки
        this.showPercentRate();

        // кредитний період
        const creditPeriodParagraph = this.createElement('paragraph', {
            className: 'paragraph',
            innerText: 'Credit month quantity :',
        });
        container.appendChild(creditPeriodParagraph);

        const creditPeriodInput = this.createElement('input', {
            type: 'range',
            className: 'input',
            id: 'creditMonthQty',
            min: `${this.minCreditPeriod}`,
            max: `${this.maxCreditPeriod}`,
            value: `${this.minCreditPeriod}`
        });

        const output = this.createElement('output', {
            id: 'output',
            value: `${this.minCreditPeriod}`,
        })
        creditPeriodParagraph.appendChild(output);

        // функція на оживлення інпута
        creditPeriodInput.addEventListener('input', () => {
            const inputRange = document.querySelector('#creditMonthQty');
            const output = document.querySelector('#output');
            output.value = inputRange.value;
            this.userCreditPeriod = output.value;
        });
        container.appendChild(creditPeriodInput);

        // сума кредиту
        const creditAmountParagraph = this.createElement('p', {
            className: 'paragraph',
            innerText: 'Amount of credit :',
        });
        container.appendChild(creditAmountParagraph);

        const creditAmountInput = this.createElement('input', {
            className: 'input',
            id: 'creditAmount',
        });
        container.appendChild(creditAmountInput);

        // щомісячний платіж
        const monthlyPaymentParagraph = this.createElement('p', {
            className: 'paragraph',
            innerText: 'Monthly payment :',
        });
        container.appendChild(monthlyPaymentParagraph);

        const monthlyPaymentInput = this.createElement('input', {
            className: 'input',
            id: 'monthlyPayment',
        });
        container.appendChild(monthlyPaymentInput);

        // сума переплати
        const overpaymentParagraph = this.createElement('p', {
            className: 'paragraph',
            innerText: 'Overpayment sum :',
        });
        container.appendChild(overpaymentParagraph);

        const overpaymentInput = this.createElement('input', {
            className: 'input',
            id: 'overpaymentSum',
        });
        container.appendChild(overpaymentInput);

        // кнопка розрахунку
        const calcButton = this.createElement('button', {
            className: 'button',
            id: 'calcButton',
            innerText: 'Calculate',
        });

        calcButton.addEventListener('click', () => {
            this.getMonthlyPaymentAmount();
            this.getOverpaymentSum();
        });
        container.appendChild(calcButton);
    }

    showPercentRate() {
        document.querySelector('#creditRate').value = this.userCreditRate;
    }

    getMonthlyPaymentAmount() {
        const percent = 100;
        this.userCreditAmount = document.querySelector('#creditAmount').value;
        this.userCreditRate = document.querySelector('#creditRate').value;
        this.userMonthlyPayment = (this.userCreditAmount * this.userCreditRate / percent).toFixed(2);
        document.querySelector('#monthlyPayment').value = this.userMonthlyPayment;
    }

    getOverpaymentSum() {
        this.userCreditPeriod = document.querySelector('#creditMonthQty').value;
        this.userMonthlyPayment = (this.userMonthlyPayment * document.querySelector('#creditMonthQty').value).toFixed(2);
        document.querySelector('#overpaymentSum').value = this.userMonthlyPayment;
    }
}
const percentRate = 15;
const minMonthCreditPeriod = 6;
const maxMonthCreditPeriod = 36;
const loanCalculator = new creditCalculator(percentRate, minMonthCreditPeriod, maxMonthCreditPeriod);
loanCalculator.render();