class Car {
    constructor(carBrand, tankVolume, fuelAvailable, sitsQty, passangersQty) {
        this.carBrand = carBrand;
        this.tankVolume = tankVolume;
        this.fuelAvailable = fuelAvailable;
        this.sitsQty = sitsQty;
        this.passangersQty = passangersQty;
    }
    render() {
        // створення контейнера
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.className = 'container';
        body.appendChild(container);

        // створення верхнього абзацу для виведення властивостей об'єкту
        const carBrandParagraph = document.createElement('p');
        carBrandParagraph.innerText = 'Car brand: ';
        const carBrandSpan = document.createElement('span');
        carBrandSpan.id = 'carBrand';
        carBrandSpan.innerText = `${this.carBrand}`;
        container.appendChild(carBrandParagraph);
        carBrandParagraph.appendChild(carBrandSpan);

        const tankVolumeParagraph = document.createElement('p');
        tankVolumeParagraph.innerText = 'Tank volume: ';
        const tankVolumeSpan = document.createElement('span');
        tankVolumeSpan.id = 'tankVolume';
        tankVolumeSpan.innerText = `${this.tankVolume}`;
        container.appendChild(tankVolumeParagraph);
        tankVolumeParagraph.appendChild(tankVolumeSpan);

        const fuelAvailableParagraph = document.createElement('p');
        fuelAvailableParagraph.innerText = 'Available fuel: ';
        const fuelAvailableSpan = document.createElement('span');
        fuelAvailableSpan.id = 'fuelAvailable';
        fuelAvailableSpan.innerText = `${this.fuelAvailable}`;
        container.appendChild(fuelAvailableParagraph);
        fuelAvailableParagraph.appendChild(fuelAvailableSpan);

        const sitsQtyParagraph = document.createElement('p');
        sitsQtyParagraph.innerText = 'Sits quantity: ';
        const sitsQtySpan = document.createElement('span');
        sitsQtySpan.id = 'sitsQty';
        sitsQtySpan.innerText = `${this.sitsQty}`;
        container.appendChild(sitsQtyParagraph);
        sitsQtyParagraph.appendChild(sitsQtySpan);

        // створення div для методу заправки
        const refuel = document.createElement('div');
        refuel.id = 'fuelDiv';
        container.appendChild(refuel);

        // створення параграфу для тексту
        const refuelText = document.createElement('p');
        refuelText.textContent = 'Refuel a car:';
        refuelText.className = 'refuelText';
        refuel.appendChild(refuelText);

        // створення повзунка
        const refuelAmount = document.createElement('input');

        // функція для присвоєння декількох атрибутів
        const setMultipleAttributes = (element, attributes) => {
            for (let key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }
        setMultipleAttributes(refuelAmount, {
            'id': 'refuelAmount', 'type': 'range', 'min': '1', 'max': `${this.tankVolume}` - `${this.fuelAvailable}`,
            'value': '1', 'step': '1'
        });
        refuel.appendChild(refuelAmount);

        // виведення результату повзунка
        const refuelOutput = document.createElement('output');
        refuelOutput.id = 'refuelOutput';
        refuelOutput.value = '1';
        refuel.appendChild(refuelOutput);
        refuelAmount.addEventListener('input', () => {
            document.getElementById('refuelOutput').value = document.getElementById('refuelAmount').value;
        });

        // створення кнопки дозаправки
        const refuelButton = document.createElement('button');
        refuelButton.textContent = 'Refuel';
        refuelButton.id = 'refuel';
        refuelButton.onclick = this.refuel.bind(this);
        refuel.appendChild(refuelButton);

        // створення абзацу для виведення результату дозаправки
        const refuelResult = document.createElement('p');
        const spanrefuelResult = document.createElement('span');
        spanrefuelResult.id = 'refuelResult';
        refuel.appendChild(refuelResult);
        refuelResult.appendChild(spanrefuelResult);

        // створення div для виведення к-ті пасажирів
        const passangersQty = document.createElement('div');
        passangersQty.id = 'passangersQtyMain';
        passangersQty.textContent = 'Quantity of passangers: ';
        container.appendChild(passangersQty);
        const spantPassQty = document.createElement('span');
        spantPassQty.id = 'spanPassQty';
        spantPassQty.innerText = `${this.showPassangersQty()}`;
        passangersQty.appendChild(spantPassQty);

        // створення віднімання пасажирів
        const minusPassangersDiv = document.createElement('div');
        minusPassangersDiv.className = 'passangersQty';
        minusPassangersDiv.id = 'minusPassangersDiv';
        container.appendChild(minusPassangersDiv);
        const minusPassangersButton = document.createElement('button');
        minusPassangersButton.id = 'minusButton';
        minusPassangersButton.textContent = 'Minus passangers';
        minusPassangersButton.onclick = this.minusPassangers.bind(this);
        minusPassangersDiv.appendChild(minusPassangersButton);

        // опис для методу додавання к-ті пасажирів
        const addButtonDiv = document.createElement('div');
        addButtonDiv.className = 'passangersQty';
        addButtonDiv.id = 'addButtonDiv';
        container.appendChild(addButtonDiv);
        const addPassangersButton = document.createElement('button');
        addPassangersButton.id = 'addButton';
        addPassangersButton.textContent = 'Add passangers';
        addPassangersButton.onclick = this.addPassangers.bind(this);
        addButtonDiv.appendChild(addPassangersButton);
    }
    refuel() {
        this.fuelAvailable += +document.getElementById('refuelAmount').value;
        document.getElementById('refuelOutput').value = `${this.tankVolume}` - `${this.fuelAvailable}`;
        document.getElementById('refuelAmount').setAttribute('max', `${this.tankVolume}` - `${this.fuelAvailable}`);
        if (this.fuelAvailable === this.tankVolume) {
            alert('The car is fully refueled');
            document.getElementById('fuelAvailable').innerText = `${this.tankVolume}`;
        }
        else {
            document.getElementById('fuelAvailable').innerText = `${this.fuelAvailable}`;
        }
    }
    showPassangersQty() {
        return this.passangersQty;
    }
    minusPassangers() {
        if (this.passangersQty <= 0) {
            alert('There are no any passangers in this car');
            document.getElementById('spanPassQty').innerText = '0';
        }
        else {
            this.passangersQty--
            document.getElementById('spanPassQty').innerText = `${this.passangersQty}`;
        }
    }
    addPassangers() {
        if (this.passangersQty >= this.sitsQty) {
            alert('This car can not take more passangers');
            document.getElementById('spanPassQty').innerText = `${this.sitsQty}`;
        }
        else if (this.passangersQty < this.sitsQty) {
            this.passangersQty++
            document.getElementById('spanPassQty').innerText = `${this.passangersQty}`;
        }
    }
}
const taxiBrand = 'Mercedes-Benz';
const taxiTankVolume = 65;
const taxiAvailableFuel = 10;
const taxiPassangerSits = 3;
const taxiPassangersQty = 1;
const taxi = new Car(taxiBrand, taxiTankVolume, taxiAvailableFuel, taxiPassangerSits, taxiPassangersQty);
taxi.render();