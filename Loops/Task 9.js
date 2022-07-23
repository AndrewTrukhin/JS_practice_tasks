/*Задача 9. Вивести на екран
   0
  000
 00000
0000000
   0
  000
 00000
0000000
   0
  000
 00000
0000000*/

document.write('<pre>')
for (i = 0; i < 3; i++) {

    for (let j = 0; j < 4; j++) {
        for (let k = 3; k > j; k--) {
            document.write(' ')
        }
        for (let l = 0; l <= 2 * j; l++) {
            document.write('0');
        }
        document.write('<br>');
    }
}
document.write('</pre>')