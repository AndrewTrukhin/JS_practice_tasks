// Задача 20. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.

const hemoglobinLevelArr = [115, 120, 130, 110, 90, 117, 95];
const hemoglobinThresholdLvl = 115;

const getHemoglobinLvl = (hemoglobinLvlArr, hemoglobinThreshold) => hemoglobinLvlArr.filter(item => item < hemoglobinThreshold);

const hemoglobinLowerTresholdArr = getHemoglobinLvl(hemoglobinLevelArr, hemoglobinThresholdLvl);
console.log(hemoglobinLowerTresholdArr);