/*24	Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії, за відомими першим членом та знаменником. 
Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.*/

import { calcDecreasingGeometricProgressionSum, isDecreasingGeometricProgression } from "./helpers/mathAlgebrFormulas.mjs";

const decreasingGeometicProgressionFirstMember = 0.5;
const progressionDenominator = 2;

const isDecreasingGeoProg = isDecreasingGeometricProgression(progressionDenominator); //Викликаю перевірку чи є геометрична прогресія спадною 

if (isDecreasingGeoProg) {
    const decreasingGeometricProgressionSum = calcDecreasingGeometricProgressionSum(decreasingGeometicProgressionFirstMember, progressionDenominator); // викликаю результат суми та запишемо у змінну
    console.log(`Sum of decreasing geometric progression is ${decreasingGeometricProgressionSum}`);
}
else {
    console.log('Sorry, this progression is not decreasing one');
}