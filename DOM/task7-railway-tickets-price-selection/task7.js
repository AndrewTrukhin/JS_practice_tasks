// Задача 7. Визначення вартості квитків (кількість – число, тип квитка – купе, загальний, плацкарт).

const getTicketsQty = () => {                                               // опис функції по валідації вводу к-ті квитків
    const onlyDigits = /^\d+$/;                                             // поле вводу повинно містити ТІЛЬКИ цифри
    const notification = 'Please, enter only digits!';                      // якщо присутні інші символи - виводимо повідомлення
    const ticketsQtyExceed = 'Sorry, You can buy only 20 tickets at once!'; // якщо перевищенно кількість квитків - виводимо повідомлення
    const ticketsQtyInput = document.querySelector('#ticketsQty').value;

    const showNotification = () => {
        if (!onlyDigits.test(ticketsQtyInput)) {
            console.log(onlyDigits.test(ticketsQtyInput))
            document.querySelector('#ticketsQty').value = notification;
        }
        else if (document.querySelector('#ticketsQty').value > 20) {
            document.querySelector('#ticketsQty').value = ticketsQtyExceed;
        }
    }
    showNotification()

}

const getTotalPrice = () => {
    let totalPrice = 0;
    const ticketsQty = document.querySelector('input').value;
    let optionList = document.getElementsByClassName('price');
    console.log(document.getElementsByTagName('option'))

    for (const option of optionList) {
        console.log(optionList)
        if (option.selected) {
            totalPrice = option.value * ticketsQty;
            break
        }
    }
    document.getElementById('totalPayment').value = (totalPrice).toFixed(2);
}