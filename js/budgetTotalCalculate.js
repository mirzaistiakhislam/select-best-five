document.getElementById('calculate-total-button').addEventListener('click', function () {

    const managerExpenses = inputField('manager-expenses');
    const coachExpenses = inputField('coach-expenses');

    const playerExpensesTextField = textField('player-expenses');
    playerExpenses = parseFloat(playerExpensesTextField.innerText);


    const totalExpenses = managerExpenses + coachExpenses + playerExpenses;

    const total = textField('total');
    total.innerText = totalExpenses;


})