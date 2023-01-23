/*7 Задача. Розробити клас «Банер» 
поля:
    •	Масив шляхів картинок (передається у конструктор при створенні)
    •	Поточна картинка
    •	URL адреса, куди переходить користувач при натисканні на картинку (передається у конструктор при створенні)
    •	Кількість секунд до автоматичного оновлення зображення на банері

методи:
    •	Зміна картинки (випадковим чином з масиву вибирається інша картинка і встановлюється як поточна)
    •	Метод генерування розмітки render
    •	Запуск автоматичного оновлення (виклику попереднього методу автоматично з використанням setInterval)*/

class Banner {
    constructor(imgPathArr, linksArr, refreshTime) {
        this.imgPathArr = imgPathArr;
        this.linksArr = linksArr;
        this.refreshTime = refreshTime;
        this.currentIndex = 0;
    }

    changeImg() {
        this.currentIndex = Math.floor(Math.random() * this.imgPathArr.length);
    }

    render() {
        let image = `<a href="${this.linksArr[this.currentIndex]}"><img height="600" width="800" src=${this.imgPathArr[this.currentIndex]}></a>`;
        document.getElementById('baner').innerHTML = image;
    }

    refreshImg() {
        const stopTimer = 15000;
        const intervalRefreshing = setInterval(() => {
            this.changeImg()
            this.render()
        }, this.refreshTime);
        setTimeout(() => clearInterval(intervalRefreshing), stopTimer);
    }
}

const imgPathArr = [
    'baner/img-harbour.jpg',
    'baner/img-paradise.jpg',
    'baner/img-wildbeach.jpg',
    'baner/img-tree.jpg',
];
const linksArr = [
    'https://manolistravel.gr/excursions-reader/elafonisi-chania.html',
    'https://manolistravel.gr/excursions-reader/gramvousa-balos.html',
    'https://www.greeka.com/cyclades/paros/beaches/golden-beach/',
    'https://www.visitgreece.gr/islands/crete/',
];
const changeImgTime = 1000;

const greeceBanner = new Banner(imgPathArr, linksArr, changeImgTime);


/*<button>Наведи на меня</button>
<div hidden>Подсказка к кнопке</div>

const trigger = document.querySelector('button')
const hint = document.querySelector('div')

let hideTimeoutId = null

trigger.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeoutId)
  hint.hidden = false
})

trigger.addEventListener('mouseleave', () => {
  hideTimeoutId = setTimeout(() => {
    hint.hidden = true
  }, 1000)
})*/