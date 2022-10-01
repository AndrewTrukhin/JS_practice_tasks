// File with functions fo algebra formulas

export const calcArithmeticProgressionMember_N = (firstNum, progressionStep, searchedNum) =>
    firstNum + (searchedNum - 1) * progressionStep; // Описую функцію, яка знайде n-й член арифметичної прогресії

export const calcarithmeticProgressionMembersSum = (firstNum, nMember, searchedNum) =>
    (firstNum + nMember) / 2 * searchedNum; // Описую функцію, яка знайде суму перших n членів арифметичної прогресії

export const calcGeometricProgressionMember_N = (firstNum, denominator, searchedNum) =>
    firstNum * (Math.pow(denominator, searchedNum - 1)); // Описую функцію, яка знайде n-й член геометричної прогремії

export const calcGeometricProgressionMembersSum = (firstNum, denominator, nMember) =>
    nMember * denominator - firstNum / (denominator - 1); // Описую функцію, яка знайде суму перших n членів геометричної прогресії

export const isDecreasingGeometricProgression = (denominator) =>
    (1 - denominator) !== 0 && (1 - denominator) < 1 // Описую функцію на перевірку чи є геометрична прогресія спадною

export const calcDecreasingGeometricProgressionSum = (firstNum, denominator) =>
    firstNum / (1 - denominator); // Описую функцію, яка знайде суму нескінченної спадної геометричної прогресії

export const calcDiscriminant = (a, b, c) => Math.pow(b, 2) - 4 * a * c; //  Описую функцію, яка знайде дискримінант

export const calcFirstSquareRoot = (a, b, discriminant) => (-b + Math.sqrt(discriminant)) / (2 * a); // Описую функцію, яка знайде перший квадратний корінь

export const calcSecondSquareRoot = (a, b, discriminant) => (-b - Math.sqrt(discriminant)) / (2 * a); // Описую функцію, яка знайде другий квадратний корінь

export const calcSingleSquareRoot = (a, b) => -b / (2 * a); // Описую функцію, яка знайде єдиний квадратний корінь

export const showSquareRootsQty = (a, b, discriminant) => { // Описую функцію, яка покаже кількість квадратних коренів
    if (discriminant > 0) {
        const x1 = calcFirstSquareRoot(a, b, discriminant);
        const x2 = calcSecondSquareRoot(a, b, discriminant);
        console.log(`There are two roots. \n The first root is: ${x1} and the second root is: ${x2}`);
    }
    else if (discriminant === 0) {
        const x = calcSecondSquareRoot(a, b);
        console.log(`There is one root. It is: ${x}`);
    }
    else {
        console.log(`There is no real roots in this quadrantic`);
    }
}

export const getdepositPeriodMonths = (yearsQty, monthsQty) => { // Описую функцію, яка знайде кількість місяців депозиту у введених роках
    const depositPeriodMonths = yearsQty * monthsQty;
    return depositPeriodMonths;
}

export const calcPercentPerMonth = (percent, monthsQty) => percent / monthsQty; // Описую функцію, яка знайде відсоток за місяць

export const calcTotalDepositIncome = (depositSum, percent, period) => { // Описую функцію, яка знайде дохід від депозиту за усі місяці
    const divider = 100;
    for (let i = 0; i < period; i++) {
        depositSum += depositSum * percent / divider;
        console.log(`iteration: ${i}, ${depositSum}`)
    }
    return depositSum.toFixed(2);
}