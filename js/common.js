function inputField(element) {
    const getInputField = document.getElementById(element);
    const inputFieldString = getInputField.value;
    const inputField = parseFloat(inputFieldString);
    return inputField;
}

function textField(element) {
    const playerExpenses = document.getElementById(element);
    return playerExpenses;
}