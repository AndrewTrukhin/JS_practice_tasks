/* Задача 11. є стрінги
chromedriver_103.0.5060.134.zip
chromedrivers/chromedriver_linux64.zip
треба щоб коли є версія - вертало версію 103.0.5060.134
а коли нема - то нічого*/

const chromeDriverVersion = 'chromedriver_103.0.5060.134.zip';
console.log(chromeDriverVersion);
const driverVersionExtractRegExp = /\d+(?:\.\d+)+/; 

const getDriverVersion = (string, regexp) => regexp.test(string) ? string.match(regexp)[0] : ' ';

const driverVersion = getDriverVersion(chromeDriverVersion, driverVersionExtractRegExp);
console.log(driverVersion);