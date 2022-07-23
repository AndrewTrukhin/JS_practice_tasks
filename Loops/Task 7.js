/*Задача 7. Вивести на екран
0
00
000
0000
00000*/

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write('0');
    }
    document.write('<br>')
}