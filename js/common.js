function inputField(element) {
    const perPlayerInputField = document.getElementById(element);
    const perPlayerString = perPlayerInputField.value;
    const perPlayer = parseFloat(perPlayerString);
    return perPlayer;
}

function textField(element) {
    const playerExpenses = document.getElementById(element);
    return playerExpenses;
}