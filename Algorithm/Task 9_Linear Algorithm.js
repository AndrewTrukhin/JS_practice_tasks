/*Скласти програму для розв’язування задачі: йде N-а секунда суток, визначити скільки повних годин і повних хвилин пройшло до цього моменту*/

const second = prompt('Enter second at the moment');

const secondsPerMinute = 60;

const secondsPerHour = 3600;

const fullHours = Math.floor(second / secondsPerHour);

alert(`Full hours passed: ${fullHours}`);

const fullMinutes = Math.floor(second / secondsPerMinute);

alert(`Full minutes passed: ${fullMinutes}`);