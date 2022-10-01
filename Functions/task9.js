/*Задача 9. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення),
тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>*/

const showBanner = (title, imgPath, globalLink) => {
    document.write(`${title} <br>`);
    document.write(`<a href="${globalLink}"><img height="500px" width="700px" src="${imgPath}"></a>`)
}
const headline = 'Try to play Legue of Legends! You could be an asassin on the field of summoners rift!';
const imageZedPath = 'js/images/Zed.jpg'
const leagueoflegendsLink = 'https://www.leagueoflegends.com/ru-ru/how-to-play/?_gl=1*14l66gi*_ga*MTczMzk3MjU3NS4xNjU4OTkyNzU3*_ga_FXBJE5DEDD*MTY1ODk5Mjc1Ni4xLjEuMTY1ODk5MjkwNC41MQ..&_ga=2.162122484.974680830.1658992757-1733972575.1658992757'

showBanner(headline, imageZedPath, leagueoflegendsLink);

// Для закріплення матеріалу

/*document.write('<br>');

const headlineMatchReview = 'FC Dynamo Kyiv kicks out FC Fenerbahce';
const imageDynamoVsFenerbahce = 'js/images/Fenerbahce_vs_Dynamo.jpg';
const matchReviewLink = 'https://champions.football.ua/news/483704-fenerbakhche-dinamo-zvit.html';

showBanner(headlineMatchReview, imageDynamoVsFenerbahce, matchReviewLink); // Виклик функції з посиланням на огляд матчу*/