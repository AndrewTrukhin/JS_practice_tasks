/* Задача 14. З клавіатури вводиться рівень доступу. Вивести на екран текстове представлення.
1.Аднміністратор
2.Менеджер
3.Редактор
4.Користувач*/

/*const accessLevel = prompt('Enter your level of acces (administrator; manager; editor; user)', 'user');

switch (accessLevel) {
    case 'administrator':
        console.log('You are have administrator level access')
        break
    case 'manager':
        console.log('You are have manager level access')
        break
    case 'editor':
        console.log('You are have editor level access')
        break
    case 'user':
        console.log('You are have user level access')
        break
    default:
        console.log('You entered wrong data')
}*/

//Задача 14.1. Змінити попереднє завдання вивівши «працівник», якщо це перші 3 пункти.

const accessLevel = prompt('Enter your level of acces (administrator; manager; editor; user)', 'user');

switch (accessLevel) {
    case 'administrator':
    case 'manager':
    case 'editor':
        console.log('Employee')
        break
    case 'user':
        console.log('You have user level access')
        break
    default:
        console.log('You entered wrong data')
}
