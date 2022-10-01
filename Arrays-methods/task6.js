// Задача 6. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).

const carWeightArr = [1900, 1500, 1700, 1300, 1990, 2100];
const thresholdWeight = 2000;
const isAllCarsLightWeight = carWeightArr.every(carWeightArr => carWeightArr < thresholdWeight);
console.log('All cars are light vehicle:', isAllCarsLightWeight);