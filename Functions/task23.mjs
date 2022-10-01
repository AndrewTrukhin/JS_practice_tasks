//23 Створити підпрограми для знаходження n-го члена та суми суми перших n членів геометричної прогресії, за відомими першим членом та знаменником

import { calcGeometricProgressionMembersSum, calcGeometricProgressionMember_N } from "./helpers/mathAlgebrFormulas.mjs";


const geometicProgressionFirstMember = 1;
const progressionDenominator = 2;
const geometicProgressionSearchedMember = 10;


const geometicProgressionMember_N = calcGeometricProgressionMember_N(geometicProgressionFirstMember, progressionDenominator, geometicProgressionSearchedMember); // викликаю результат n-го члена запишемо у змінну
console.log(`n-member of geometic progression is ${geometicProgressionMember_N}`);

const geometicProgressionMembersSum = calcGeometricProgressionMembersSum(geometicProgressionFirstMember, progressionDenominator, geometicProgressionMember_N); // викликаю результат суми перших n членів арифметичної прогресії
console.log(`Sum of geometic progression is ${geometicProgressionMembersSum}`);