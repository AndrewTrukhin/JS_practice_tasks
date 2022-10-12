// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік)

const birthDate = '01.01.2022';
const birthDateRegExp = /^(0[1-9]|[12][0-9]|3[01])[.](0[0-9]|1[12])[.]\d{4}$/

const getDate = (string, regexp) => regexp.test(string);

const dateExtracted = getDate(birthDate, birthDateRegExp);
console.log(dateExtracted);