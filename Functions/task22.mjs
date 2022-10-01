//22. Створити підпрограми для знаходження n-го члена та суми перших n членів арифметичної прогресії, за відомими першим членом та різницею

import { calcarithmeticProgressionMembersSum, calcArithmeticProgressionMember_N } from "./helpers/mathAlgebrFormulas.mjs";


const arithmeticProgressionFirstMember = 1;
const progressionStep = 2;
const arithmeticProgressionSearchedMember = 100;


const arithmeticProgressionMember_N = calcArithmeticProgressionMember_N(arithmeticProgressionFirstMember, progressionStep, arithmeticProgressionSearchedMember); // викликаю результат n-го члена запишемо у змінну
console.log(`n-member of arithmetic progression is ${arithmeticProgressionMember_N}`);

const arithmeticProgressionMembersSum = calcarithmeticProgressionMembersSum(arithmeticProgressionFirstMember, arithmeticProgressionMember_N, arithmeticProgressionSearchedMember); // викликаю результат суми перших n членів арифметичної прогресії
console.log(`Sum of arithmetic progression is ${arithmeticProgressionMembersSum}`);









// Калькулятор арифметичної прогресії


/*const arithmeticProgressionFirstMember = parseInt(prompt('Enter first member "a1" to start arithmetic progression', 1));
const progressionStep = parseInt(prompt('Enter which step number will be used for arithmetic progression', 2));
const arithmeticProgressionLastMember = parseInt(prompt('Enter the last member where you want to stop arithmetic progression', 100));

const calcArithmeticProgressionMember_N = (firstNum, progressionStep, lastNum) => firstNum + (lastNum - 1) * progressionStep; // Описую функцію, яка знайде n-й член
const arithmeticProgressionMember_N = calcArithmeticProgressionMember_N(arithmeticProgressionFirstMember, progressionStep, arithmeticProgressionLastMember); // викликаю результат n-го члена запишемо у змінну
console.log(`n-member of arithmetic progression is ${arithmeticProgressionMember_N}`);

const calcarithmeticProgressionMembersSum = (firstNum, lastNum, nMember) => lastNum * (firstNum + nMember) / 2; // Описую функцію, яка знайде суму перших n членів арифметичної прогресії
const arithmeticProgressionMembersSum = calcarithmeticProgressionMembersSum(arithmeticProgressionFirstMember, arithmeticProgressionLastMember, arithmeticProgressionMember_N); // викликаю результат суми перших n членів арифметичної прогресії
console.log(`Sum of arithmetic progression is ${arithmeticProgressionMembersSum}`);*/