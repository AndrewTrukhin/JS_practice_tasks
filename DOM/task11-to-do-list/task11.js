// Задача 11. Сформувати список завдань ( з можливістю подальшого вилучення).


const addAndDeleteTask = () => {
    const inputData = document.querySelector('#task');
    const deleteButton = document.createElement('input');
    const li = document.createElement('li');
    // якщо строка пуста то нічого не робимо
    if (inputData.value === '') {
        return
    }
    else {
        //стилізуємо div в якому буде список
        const div = document.querySelector('#listDiv');
        div.className = 'div';
        // створимо список завдань та кнопку видалення
        const parentForLi = document.querySelector('#ol');
        const newTask = document.createTextNode(inputData.value);
        inputData.value = '';
        li.appendChild(newTask);
        parentForLi.appendChild(li);
        deleteButton.type = 'button';
        deleteButton.className = 'button';
        deleteButton.value = 'Delete';
        deleteButton.name = 'delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.id = 'del';
    }

    const taskList = document.getElementsByTagName('li');
    for (const task of taskList) {
        task.appendChild(deleteButton);
    }

    // видалення завдань
    deleteButton.addEventListener('click', (e) => {
        const parentForLi = document.querySelector('#ol');
        parentForLi.removeChild(li)
    })
}
