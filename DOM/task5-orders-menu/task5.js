// Задача 5. Визначення вартості замовлення (за допомогою чекбоксів вибирати першу страву, другу і десерт).

const getTotalPayment = () => {
    let totalSum = 0;
    const inputCheckboxes = document.querySelectorAll('input');

    for (const checkbox of inputCheckboxes) {
        if (checkbox.checked) {
            totalSum += +checkbox.value;
        }
    }
    document.querySelector('#payment').value = (totalSum).toFixed(2);
    if (totalSum === 0) {                                                           // якщо натискати нічого не обираючи - отримаємо повідомлення
        document.querySelector('#payment').value = 'You have not choose anything!';
    }
}

const resetCheckboxes = () => {
    document.querySelector('#payment').value = '';
}