const input = document.querySelector('input');
let previousValue = '', firstThreeNumbers = '';

function updateValue(v) {
    if (/\d+$/g.test(v)) {
        return v;
    }
    return v.slice(0, -1);
}

function formatPhoneNumber(inputValue) {
    if (inputValue.length === 4 && previousValue.length < inputValue.length) {
        firstThreeNumbers = inputValue.slice(0, 3);
        return `+(${firstThreeNumbers}) - ${inputValue[3]}`;
    }
    return inputValue;
}

function resetFormatting(inputValue) {
    console.log(previousValue.length);

    if (inputValue.length === 10 && previousValue.length > inputValue.length) {
        return firstThreeNumbers
    }
    return inputValue;
}

input.addEventListener('input', (e) => {
    let inputValue = e.target.value;

    // Update the value, ensuring only digits
    inputValue = updateValue(inputValue);

    // Apply formatting if necessary
    inputValue = formatPhoneNumber(inputValue);

    // Revert formatting when deleting characters
    inputValue = resetFormatting(inputValue);

    input.value = inputValue;
    previousValue = inputValue;
});