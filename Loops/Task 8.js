/*Задача 8. Вивести на екран
0
00
000
0000
00000
0
00
000
0000
00000
0
00
000
0000
00000*/

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k <= j; k++) {
            document.write('0');
        }
        document.write('<br>')
    }
}