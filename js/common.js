function inputField(elementId) {

    const getInputField = document.getElementById(elementId);
    const inputFieldString = getInputField.value;
    const inputField = parseFloat(inputFieldString);
    return inputField;




}

function textField(elementId) {
    const textField = document.getElementById(elementId);
    return textField;
}