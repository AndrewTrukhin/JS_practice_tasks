/*Задача 8. Розробити клас «Список новин» за прикладом рубрики новин на сайті ukr.net
Поля:	•	Заголовок категорії новин
        •	Список новин (час додавання інформації у список новини, текстовий заголовок новин і відповідний URL, джерело інформації) (передається у конструктор при створенні)
        •	Поточний список з 5 поточних новин (новин, які відображаються )
        •	Кількість секунд до автоматичного оновлення списку
Методи:	•	Метод генерування випадковим чином 5 поточних новин
        •	Метод генерування розмітки render
        •	Запуск автоматичного оновлення (виклику попереднього методу автоматично з використанням setInterval)*/

class NewsLine {
    constructor(appearanceTime, link, source) {
        this.createdAt = appearanceTime;
        this.link = link;
        this.source = source;
    }
}

class NewsBlock {
    constructor(newsCategory, currentNewsList, refreshTime) {
        this.newsCategory = newsCategory;
        this.currentNewsList = currentNewsList;
        this.refreshTime = refreshTime;
    }

    get newsCategory() {
        return this._newsCategory;
    }

    set newsCategory(value) {
        if (value === 'War in Ukraine') {
            return this._newsCategory = value;
        }
        else {
            return
        }
    }

    generateNews() {
        const newsQtyToShow = 5;
        document.write(`${this.newsCategory} <br>`);

        for (let i = 0; i < newsQtyToShow; i++) {
            let randomIndex = Math.floor(Math.random() * this.currentNewsList.length);

            for (const key in this.currentNewsList[randomIndex]) {
                document.write(this.currentNewsList[randomIndex][key]);
            }
            document.write('<br>');
            this.currentNewsList.splice(randomIndex, 1);
        }
    }

    refreshNewsList() {
        const intervalId = setInterval(() => this.generateNews(), this.refreshTime);
        setTimeout(() => {
            clearInterval(intervalId)
        }, this.refreshTime)
    }
}

const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    const currentTime = hours + ':' + minutes;
    return currentTime
}

const news1 = new NewsLine(getCurrentTime(),
    '<a href="https://www.president.gov.ua/en/news/rosiya-stala-najbilshoyu-teroristichnoyu-organizaciyeyu-svit-76089"> Russians declared about more acts of terrorism</a>', ' (President`s office)');
const news2 = new NewsLine(getCurrentTime(),
    '<a href="https://www.abc.net.au/news/2023-01-13/russia-claims-it-has-control-of-ukrainian-town-of-soledar/101855090"> Fight for Soledar</a>', ' (Censor net)');
const news3 = new NewsLine(getCurrentTime(),
    '<a href="https://www.weforum.org/agenda/2022/04/ukraine-economy-decline-war/"> Ukrainian economy is going down</a>', ' (Ukrainska pravda)');
const news4 = new NewsLine(getCurrentTime(),
    '<a href="https://sprotyv.mod.gov.ua/en/2023/01/14/russians-continue-to-mobilize-but-cannot-hide-from-the-underground-a-review-from-tot/"> Russians continue hidden mobilization</a>', ' (Stopkor)');
const news5 = new NewsLine(getCurrentTime(),
    '<a href="https://www.americanprogress.org/article/americas-electoral-future-3/"> Future elections in USA</a>', ' (Politics.ua)');
const news6 = new NewsLine(getCurrentTime(),
    '<a href="https://www.pravda.com.ua/eng/news/2022/11/24/7377872/"> Russian forces attack 3 areas in Sumy Oblast, damaging a residential building</a>', ' (Pravda)');
const news7 = new NewsLine(getCurrentTime(),
    '<a href="https://www.pravda.com.ua/eng/news/2023/01/20/7385874/"> US share with UN proof of North Korea supplying weapons to Russia</a>', ' (Pravda)');

const warUkraineNewsArr = [];
const newsCategory = 'War in Ukraine';
const timeForRefreshNewsLine = 5000;

warUkraineNewsArr.push(news1, news2, news3, news4, news5, news6, news7);

const newsBlock1 = new NewsBlock('War in Ukraine', warUkraineNewsArr, timeForRefreshNewsLine);