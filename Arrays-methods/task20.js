// Задача 20. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.

const hemoglobinLevel = [115, 120, 130, 110, 90, 117, 95];
const hemoglobinThresholdLvl = 115;

const getHemoglobinLvl = (element => element < hemoglobinTresholdLvl);

const hemoglobinLowerTreshold = hemoglobinLevel.filter(getHemoglobinLvl);
console.log(hemoglobinLowerTreshold);