/* Задача15. Розробити систему бронювання номера у готелі:
Після бронювання відображається усі інформація, яку надав користувач*/

// Створення елементів та присвоєння їм підготовлених стилей
//Створення шапки та її виведення
const parent = document.querySelector('body');
const header = document.createElement('header');
header.className = 'header';
parent.appendChild(header);

// стоврення заголовку та його виведення
const headline = document.createElement('h1');
header.appendChild(headline);
const headlineText = document.createTextNode('DreamHotel-365');
headline.className = 'h1';
headline.appendChild(headlineText);

//створення малюнку всередині шапки
const headerImage = document.createElement('img');
headerImage.setAttribute('src', 'dreamhotel-logo.jpg');
headerImage.className = 'headImg';
header.appendChild(headerImage);

// створення навігаційного меню
const nav = document.createElement('nav');
nav.className = 'nav';
header.appendChild(nav);

// створення списку з кнопками всередині
const ul = document.createElement('ul');
ul.className = 'ul';
nav.appendChild(ul);
const navigationMenuElementsNamesArray = ['Back to main', ['Your country', 'Ukraine', 'Austria', 'Germany', 'Spain', 'Greece', 'Other country'], 'Language', 'Sign up', 'Sign in'];
for (let i = 0; i < navigationMenuElementsNamesArray.length; i++) {
    const li = document.createElement('li');
    li.className = 'navLi';
    ul.appendChild(li);

    if (Array.isArray(navigationMenuElementsNamesArray[i])) {
        const select = document.createElement('select');
        select.className = 'select';
        li.appendChild(select);
        for (let j = 0; j < navigationMenuElementsNamesArray[i].length; j++) {
            const option = document.createElement('option');
            option.className = 'option';
            option.value = navigationMenuElementsNamesArray[i][j];
            option.textContent = navigationMenuElementsNamesArray[i][j];
            select.appendChild(option);
        }
    }
    else {
        const button = document.createElement('button');
        button.textContent = navigationMenuElementsNamesArray[i];
        button.type = 'button';
        button.className = 'button';
        button.id = 'return';
        li.appendChild(button);
    }
}

// Створення тіла основного контенту
const main = document.createElement('main');
main.className = 'main';
parent.appendChild(main);

// створення форми та div з параграфами та інпутами всередині
const form = document.createElement('form');
form.action = '/form/submit';
form.method = 'post';
form.className = 'form';
main.appendChild(form);

const div = document.createElement('div');
div.className = 'searchBox';
form.appendChild(div);

const rangeParagraph = document.createElement('p');
rangeParagraph.className = 'searchParagraph';
div.appendChild(rangeParagraph);
const rangeLabel = document.createElement('label');
rangeLabel.htmlFor = 'reviews';
rangeLabel.className = 'label';
rangeLabel.textContent = 'Reviews rate :';
rangeParagraph.appendChild(rangeLabel);
const rangeInput = document.createElement('input');
rangeInput.type = 'range';
rangeInput.className = 'input';
rangeInput.id = 'reviews';
rangeInput.min = '0.0';
rangeInput.max = '10.0';
rangeInput.step = '0.1';
rangeInput.value = '0.0';
rangeParagraph.appendChild(rangeInput);
const output = document.createElement('output');
output.setAttribute('id', 'outputReview');
output.value = '0.0';
rangeParagraph.appendChild(output);

const arriveDateParagraph = document.createElement('p');
arriveDateParagraph.className = 'searchParagraph';
div.appendChild(arriveDateParagraph);
const arriveDateLabel = document.createElement('label');
arriveDateLabel.className = 'label';
arriveDateLabel.htmlFor = 'arriveDate';
arriveDateLabel.textContent = 'Arrive date :';
arriveDateParagraph.appendChild(arriveDateLabel);
const arriveDateInput = document.createElement('input');
arriveDateInput.type = 'date';
arriveDateInput.className = 'input';
arriveDateInput.id = 'arriveDate';
arriveDateParagraph.appendChild(arriveDateInput);

const leaveDateParagraph = document.createElement('p');
leaveDateParagraph.className = 'searchParagraph';
div.appendChild(leaveDateParagraph);
const leaveDateLabel = document.createElement('label');
leaveDateLabel.className = 'label';
leaveDateLabel.htmlFor = 'leaveDate';
leaveDateLabel.textContent = 'Leave date :';
leaveDateParagraph.appendChild(leaveDateLabel);
const leaveDateInput = document.createElement('input');
leaveDateInput.type = 'date';
leaveDateInput.className = 'input';
leaveDateInput.id = 'leaveDate';
leaveDateParagraph.appendChild(leaveDateInput);

const visitorsQtyParagraph = document.createElement('p');
visitorsQtyParagraph.className = 'searchParagraph';
div.appendChild(visitorsQtyParagraph);
const visitorsQtyLabel = document.createElement('label');
visitorsQtyLabel.className = 'label';
visitorsQtyLabel.htmlFor = 'visitorsQty';
visitorsQtyLabel.textContent = 'Quantity of visitors :';
visitorsQtyParagraph.appendChild(visitorsQtyLabel);
const visitorsQtyInput = document.createElement('input');
visitorsQtyInput.type = 'number';
visitorsQtyInput.className = 'input';
visitorsQtyInput.id = 'visitorsQty';
visitorsQtyParagraph.appendChild(visitorsQtyInput);

const roomsQtyParagraph = document.createElement('p');
roomsQtyParagraph.className = 'searchParagraph';
div.appendChild(roomsQtyParagraph);
const roomsQtyLabel = document.createElement('label');
roomsQtyLabel.className = 'label';
roomsQtyLabel.htmlFor = 'roomsQty';
roomsQtyLabel.textContent = 'Quantity of rooms :';
roomsQtyParagraph.appendChild(roomsQtyLabel);
const roomsQtyInput = document.createElement('input');
roomsQtyInput.type = 'number';
roomsQtyInput.className = 'input';
roomsQtyInput.id = 'roomsQty';
roomsQtyParagraph.appendChild(roomsQtyInput);

const reserveParagraph = document.createElement('p');
reserveParagraph.className = 'searchParagraph';
div.appendChild(reserveParagraph);
const reserveButton = document.createElement('button');
reserveButton.type = 'button';
reserveButton.className = 'button';
reserveButton.textContent = 'reserve';
reserveButton.id = 'reserve';
reserveParagraph.appendChild(reserveButton);

// створення aside всередині main з посиланнями та фото
const aside = document.createElement('aside');
aside.className = 'aside';
main.appendChild(aside);
const linkTextArray = ['Business trip', 'Recovery rest', 'Tourism travel', 'Vacation trip'];
const imgSrcArray = ['business-img.jpg', 'recovery.jpg', 'tourism.jpg', 'vacation.jpg'];
for (let i = 0; i < imgSrcArray.length; i++) {
    const link = document.createElement('a');
    link.className = 'purpose';
    link.href = '#';
    link.textContent = linkTextArray[i];
    aside.appendChild(link);
    const img = document.createElement('img');
    img.setAttribute('src', imgSrcArray[i]);
    link.appendChild(img);
}

// Створення підвалу та його виведення
const footer = document.createElement('footer');
footer.className = 'footer';
parent.appendChild(footer);
const footerDiv = document.createElement('div');
footerDiv.className = 'footerDiv';
footer.appendChild(footerDiv);
const footerParagraph = document.createElement('p');
footerParagraph.className = 'footerParagraph';
footerDiv.appendChild(footerParagraph);

// створення контактів
const contactDataArray = ['Contact : Andrii Trukhin;', 'andrewexlege@ukr.net;', '+38 097 909 12 38;', 'Check my profile on GitHub'];
for (let i = 0; i < contactDataArray.length; i++) {
    if (contactDataArray[i] === 'Check my profile on GitHub') {
        const contactLink = document.createElement('a');
        contactLink.href = 'https://github.com/AndrewTrukhin';
        contactLink.target = '_blank';
        contactLink.textContent = 'Check my profile on GitHub';
        footerParagraph.appendChild(contactLink);
    }
    else {
        const contactText = document.createTextNode(contactDataArray[i]);
        footerParagraph.appendChild(contactText);
        footerParagraph.appendChild(document.createElement('br'));
    }
}

// створення параграфу та кнопки відправки e-mail
const updateParagraph = document.createElement('p');
updateParagraph.className = 'footerParagraph';
footerDiv.appendChild(updateParagraph);
const updateLabel = document.createElement('label');
updateLabel.className = 'updateLabel';
updateLabel.htmlFor = 'emailInput';
updateLabel.textContent = 'Sign up to receive new updates :';
updateParagraph.appendChild(updateLabel);
const emailForUpdateInput = document.createElement('input');
emailForUpdateInput.type = 'email';
emailForUpdateInput.className = 'footerInput';
emailForUpdateInput.id = 'emailInput';
emailForUpdateInput.placeholder = 'Your e-mail...';
updateParagraph.appendChild(emailForUpdateInput);
const sendEmailButton = document.createElement('button');
sendEmailButton.type = 'button';
sendEmailButton.className = 'button';
sendEmailButton.textContent = 'Send';
sendEmailButton.id = 'updateButton';
updateParagraph.appendChild(sendEmailButton);

// створення параграфу та інпута checkbox
const checkboxParagraph = document.createElement('p');
checkboxParagraph.className = 'footerParagraph';
footerDiv.appendChild(checkboxParagraph);
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.className = 'email';
checkboxInput.id = 'checkForUptade';
checkboxParagraph.appendChild(checkboxInput);
const checkboxLabel = document.createElement('label');
checkboxLabel.htmlFor = 'checkForUptade';
checkboxLabel.className = 'checkboxLabel';
checkboxLabel.textContent = 'Send me a link to install DreamHotel-365 Application';
checkboxParagraph.appendChild(checkboxLabel);

// функція на оживлення інпута range
document.getElementById('reviews').addEventListener('input', () => {
    let outputForRange = document.getElementById('outputReview');
    outputForRange.value = document.getElementById('reviews').value;
});

// функція на збір та віиведення обраної користувачем інформації
reserveButton.addEventListener('click', () => {
    const countryList = document.getElementsByClassName('option');
    let userCountry;
    for (const country of countryList) {
        if (country.selected) {
            userCountry = country.value;
        }
    }
    const userReviewsRate = document.getElementById('reviews').value;
    const userArriveDate = document.getElementById('arriveDate').value;
    const userLeaveDate = document.getElementById('leaveDate').value;
    const userVisitorsQty = document.getElementById('visitorsQty').value;
    const userRoomsQty = document.getElementById('roomsQty').value;
    const isUserWishGetLinkForApp = document.querySelector('#checkForUptade');
    confirm(`Press "Ok" if You were looking for the information as follows:\nYou are travelling form: ${userCountry};\nYou are looking for hotel with reviews rate: ${userReviewsRate};\nArriving date: ${userArriveDate};\nLeaving date: ${userLeaveDate};\nQuantity of visitors: ${userVisitorsQty};\nQuantity of rooms: ${userRoomsQty};\nYou wish to get a link with our App: ${isUserWishGetLinkForApp.checked}`)
});
