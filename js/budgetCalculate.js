document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayer = inputField('per-player');

    const playerExpenses = textField('player-expenses');

    if (selectFive.length > 5) {
        playerExpenses.innerText = 5 * perPlayer;
    }
    else {
        playerExpenses.innerText = selectFive.length * perPlayer;
    }

})

