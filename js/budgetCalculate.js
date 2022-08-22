document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayer = inputField('per-player');

    const playerExpenses = textField('player-expenses');
    playerExpenses.innerText = (selectFive.length) * perPlayer;

})

