// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

const chromeDriverVersion = 'http://chromedriver.storage.googleapis.com/103.0.5060.134/chromedriver_linux64.zip';
console.log(chromeDriverVersion);
const elemsSeparatedByPuctuationRegExp = /\w*[\da-z]/gi; // будь-які букви та цифри більше одного разу та НЕ розділові знаки

const getElementsBetweenPunctuation = (string, regexp) => string.match(regexp);

const separatedElemsArr = getElementsBetweenPunctuation(chromeDriverVersion, elemsSeparatedByPuctuationRegExp);
console.log(separatedElemsArr);

// Вивести лише числовий підрядок

/*const chromeDriverVersion = 'http://chromedriver.storage.googleapis.com/103.0.5060.134/chromedriver_linux64.zip';
console.log(chromeDriverVersion);
const driverVersionExtractRegExp = /\d+(?:\.\d+)+/; 

const getDriverVersion = (string, regexp) => string.match(regexp)[0];

const driverVersion = getDriverVersion(chromeDriverVersion, driverVersionExtractRegExp);
console.log(driverVersion);*/