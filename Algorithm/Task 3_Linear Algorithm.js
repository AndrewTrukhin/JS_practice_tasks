/*З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. 
Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.*/

const crayfishPrice = prompt('Set price per kg of the crayfish');

const crayfishQty = prompt('Enter quantity (kg) of the crayfish you would like to sell');

const totalValueCrayfish = crayfishPrice * crayfishQty;

alert(`Total value of the crayfish = ${totalValueCrayfish.toFixed(2)}`);

const shrimpValue = prompt('Set price per kg of the shrimps');

const shrimpQty = prompt('Enter quantity (kg) of the shrimps you would like to sell');

const totalValueShrimp = shrimpValue * shrimpQty;

alert(`Total value of the shrimps = ${totalValueShrimp.toFixed(2)}`);

const sumValueAllGoods = totalValueCrayfish + totalValueShrimp;

alert(`Total value of the crayfish and shrimps = ${sumValueAllGoods.toFixed(2)}`);