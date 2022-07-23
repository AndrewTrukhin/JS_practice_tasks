/*Задача 11. Користувач може здійснити покупку у одному із двох відділів («побутова техніка» або «інструменти»). 
При цьому у кожному із відділів йому будуть пропонувати один із перерахованих товарів:
«побутова техніка»:
-	телевізор;
-	праска;
-	планшет;
    «інструменти»
-	лопата;
-	граблі;
-	мітла;
-	пила.
 Вивести на екран назву товару, яку вибрав користувач.*/

const choosingDepartment = parseInt(prompt('Print "1" to enter household devices departmnet OR print "2" to enter tools department'));

if (choosingDepartment === 1) {
    const choosingHouseholdDevices = parseInt(prompt('Choose device entering numbers from "1" to "3" (1 - TV set; 2 - Iron; 3- tablet'));
    switch (choosingHouseholdDevices) {
        case 1:
            console.log('TV set')
            break
        case 2:
            console.log('Iron')
            break
        case 3:
            console.log('tablet')
            break
        default:
            console.log('You eneterd incorrect number')
    }
}

else if (choosingDepartment === 2) {
    const choosingTools = parseInt(prompt('Choose device entering numbers from "1" to "4" (1 - spade; 2 - rake; 3 - broom; 4 - saw'));
    switch (choosingTools) {
        case 1:
            console.log('spade')
            break
        case 2:
            console.log('rake')
            break
        case 3:
            console.log('broom')
            break
        case 4:
            console.log('saw')
            break
        default:
            console.log('You entered incorrect number')
    }
}

else {
    console.log('You entered incorrect number')
}