//Задача 8. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

const showRandomImage = (imgPath1, imgPath2, imgPath3, imgPath4) => {
    let imagePath = Math.ceil(Math.random() * 4);
    if (imagePath === 1) imagePath = imgPath1;
    if (imagePath === 2) imagePath = imgPath2;
    if (imagePath === 3) imagePath = imgPath3;
    if (imagePath === 4) imagePath = imgPath4;
    document.write(`<img src=${imagePath}>`);
}
const nautilusImagePath = "js/images/Nautilus.jpg";
const shenImagePath = "js/images/Shen_impulse.jpg";
const yasuoImagePath = "js/images/Yasuo.jpg";
const zedImagePath = "js/images/Zed.jpg";

showRandomImage(nautilusImagePath, shenImagePath, yasuoImagePath, zedImagePath);