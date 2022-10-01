// Задача 16. Дано вік 5 працівників. Визначити скільки серед них є пенсіонерів.

const employeesAge = [58, 67, 34, 65, 38];
const thresholdAge = 65;
let pensionersQty = 0;

const getPensionersQty = (workersAgeList, pensioners, age) => {
    for (let i = 0; i < workersAgeList.length; i++) {
        if (workersAgeList[i] >= age) {
            pensioners++;
        }
    }
    console.log(pensioners);
}
getPensionersQty(employeesAge, pensionersQty, thresholdAge);