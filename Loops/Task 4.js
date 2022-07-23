/*Задача 4. Вивести на екран
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- -- 
\/ \/ \/ \/ \/ \/ \/*/

let repeatLoopQuantity = 3;
let nullQuantity = 7;
let doubleSmallLineQuantity = 7;
let symbolVictoryQuantity = 7;

document.write('<pre>');

for (let i = 0; i < repeatLoopQuantity; i++) {
    for (let j = 0; j < nullQuantity; j++) {
        document.write('00 ');
    }
    document.write('<br>');

    for (let k = 0; k < doubleSmallLineQuantity; k++) {
        document.write('-- ');
    }
    document.write('<br>');

    for (let l = 0; l < symbolVictoryQuantity; l++) {
        document.write('\\/ ');
    }
    document.write('<br>');
}

document.write('</pre>');