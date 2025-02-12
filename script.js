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
    try {
        // Evaluate the expression in the display
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        display.value = 'Error';
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