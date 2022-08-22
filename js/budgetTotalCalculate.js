document.getElementById('calculate-total-button').addEventListener('click', function () {
    const managerExpensesInputField = document.getElementById('manager-expenses');
    const managerExpensesString = managerExpensesInputField.value;
    const managerExpenses = parseFloat(managerExpensesString);

    const coachExpensesInputField = document.getElementById('coach-expenses');
    const coachExpensesString = coachExpensesInputField.value;
    const coachExpenses = parseFloat(coachExpensesString);

    const playerExpensesString = document.getElementById('player-expenses').innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const totalExpenses = managerExpenses + coachExpenses + playerExpenses;
    const total = document.getElementById('total');

    total.innerText = totalExpenses;


})