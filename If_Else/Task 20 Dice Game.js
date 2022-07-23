/*Задача 20. Гра в кості. Правила гри:
1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);
2) якщо випадає парне число, то кількість балів збільшується на це число;
3) якщо випадає непарне число, то кількість балів зменшується на це число;
4) виграє той, у кого кількість балів більша.*/

let confirmToStartGame = confirm('First player start. Press "Ok" if you want to start the game and to make a throw');

// Перший гравець кидає !!!!!!!

if (confirmToStartGame) {
    let throwResult = Math.ceil(Math.random() * 6);
    let firstPlayerScoresSum = 0;
    if (throwResult % 2 === 0) {
        firstPlayerScoresSum = throwResult * 2;
    }
    else {
        firstPlayerScoresSum = firstPlayerScoresSum - throwResult;
    }
    console.log(`First player has got ${firstPlayerScoresSum} scores after the first throw`);

    const isSecondThrow = confirm('Would you like to throw again ?');

    // Перший гравець кидає другий раз !!!!!!!

    if (isSecondThrow) {
        throwResult = Math.ceil(Math.random() * 6);

        if (throwResult % 2 === 0) {
            throwResult = throwResult * 2;
            firstPlayerScoresSum = firstPlayerScoresSum + throwResult;
        }
        else {
            firstPlayerScoresSum = firstPlayerScoresSum - throwResult;
        }
        console.log(`First player has got ${throwResult} scores after second throw`);
        console.log(`First player gained total scores: ${firstPlayerScoresSum}`);
    }

    //Другий гравець кидає !!!!!!

    alert(`Now it's Second's player turn`);
    throwResult = Math.ceil(Math.random() * 6);
    let secondPlayerScoresSum
    if (throwResult % 2 === 0) {
        secondPlayerScoresSum = throwResult * 2;
    }
    else {
        secondPlayerScoresSum = secondPlayerScoresSum - throwResult;
    }

    console.log(`Second player has got ${secondPlayerScoresSum} scores after the first throw`);

    const isSecondPlayerSecondThrow = confirm('Would you like to throw again ?');

    // Другий гравець кидає другий раз !!!!!!

    if (isSecondPlayerSecondThrow) {
        throwResult = Math.ceil(Math.random() * 6);

        if (throwResult % 2 === 0) {
            throwResult = throwResult * 2;
            secondPlayerScoresSum = secondPlayerScoresSum + throwResult;
        }
        else {
            secondPlayerScoresSum = secondPlayerScoresSum - throwResult;
        }
        console.log(`Second player has got ${throwResult} scores after the second throw`);
        console.log(`Second player gained total scores: ${secondPlayerScoresSum}`);
    }

    if (firstPlayerScoresSum > secondPlayerScoresSum) {
        alert(`First player has ${firstPlayerScoresSum} scores and Second player has ${secondPlayerScoresSum}! First player won!`);
    }

    else if (firstPlayerScoresSum < secondPlayerScoresSum) {
        alert(`First player has ${firstPlayerScoresSum} scores and Second player has ${secondPlayerScoresSum}! Second player won!`);
    }
    else {
        alert(`First player and Second player has equal scores quantity! It's a draw!`);
    }
}
else {
    console.log('The game has not begun');
}