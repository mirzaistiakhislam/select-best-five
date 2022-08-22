document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayer = inputField('per-player');  // connected with common.js
    const playerExpenses = textField('player-expenses');  // connected with common.js

    if (selectFive.length > 5) {
        playerExpenses.innerText = 5 * perPlayer;
    }
    else {
        playerExpenses.innerText = selectFive.length * perPlayer;
    }
})

document.getElementById('calculate-total-button').addEventListener('click', function () {

    const managerExpenses = inputField('manager-expenses'); //connected with common.js
    const coachExpenses = inputField('coach-expenses');  // connected with common.js

    const playerExpensesTextField = textField('player-expenses'); // connected with common.js   
    const playerExpenses = parseFloat(playerExpensesTextField.innerText);

    const totalExpenses = managerExpenses + coachExpenses + playerExpenses;

    const total = textField('total');  // connected with common.js
    total.innerText = totalExpenses;

})

