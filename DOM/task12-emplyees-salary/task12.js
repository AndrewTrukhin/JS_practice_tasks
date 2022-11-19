// Задача 12. Сформувати список працівників (ПІБ, посада, заробітна плата). Потім видалити працівників, у яких заробітна плата більша за 3000.

// отримуємо доступ до елементів
const names = document.getElementById('name');
const position = document.getElementById('position');
const salary = document.getElementById('salary');
const addButton = document.getElementById('addButton');
const filterButton = document.getElementById('filterButton');
const ol = document.getElementById('list');

// прив'язуємо подію до кнопки
addButton.addEventListener('click', () => {
    if (!names.value || !position.value || !salary.value) { // якщо хоча б одне поле пусте - нічого не робимо
        return
    }
    createList(names.value, position.value, parseFloat(salary.value).toFixed(2));
});

// створюємо список
const createList = (nameValue, positionValue, salaryValue) => {
    const li = document.createElement('li');
    ol.appendChild(li);
    li.id = salary.value; // присвоємо ID елементу li для відслідковування суми
    li.className = 'li';
    li.textContent = nameValue + ' ' + positionValue + ' - ' + salaryValue + ' ' + 'UAH';
};

filterButton.addEventListener('click', () => {
    const listElements = document.querySelectorAll('li');
    const thresholdSalary = 3000;
    for (const li of listElements) { 
        console.log(li, listElements)
        if (li.id > thresholdSalary) { // порівнюємо суму по ID
            li.remove();
        }
    }
});