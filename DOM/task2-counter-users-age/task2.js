//Задача 2. Користувач задає рік народження. Визначити кількість років користувача

const getUserAge = () => {
    const currentYear = new Date().getFullYear();
    const currentBirthYear = document.querySelector('.data').value;
    const result = currentYear - currentBirthYear;
    document.getElementById('age').value = result;
}