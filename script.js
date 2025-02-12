// Get the display element
const display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const expression = display.value;

    try {
        // Use a safe evaluator function
        const result = safeEval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Safe evaluator function
function safeEval(expression) {
    // Remove any characters that are not numbers, operators, or parentheses
    const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, '');

    // Use Function constructor as a safer alternative (still not perfect, but better than eval)
    // Note: This is for demonstration purposes. A full parser is recommended for production.
    try {
        return new Function(`return ${sanitizedExpression}`)();
    } catch (error) {
        throw new Error('Invalid expression');
    }
}
// Optional: Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow numbers, operators, and decimal point
    if (/[0-9+\-*/.%]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});