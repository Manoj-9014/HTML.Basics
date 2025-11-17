const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('.button');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const percentBtn = document.getElementById('percent');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');

let currentInput = '';


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === 'AC') {
            
            currentInput = '';
            inputBox.value = '0';
        } else if (value === 'DE') {
            
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput || '0';
        } else if (value === '=') {
            try {
                
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch (error) {
                inputBox.value = 'Error';
            }
        } else if (value === '%') {
            
            currentInput = (parseFloat(currentInput) / 100).toString();
            inputBox.value = currentInput;
        } else {
            
            if (currentInput === '0') {
                currentInput = value; // Replace initial zero
            } else {
                currentInput += value;
            }
            inputBox.value = currentInput;
        }
    });
});


divideBtn.addEventListener('click', () => appendOperator('/'));
multiplyBtn.addEventListener('click', () => appendOperator('*'));
subtractBtn.addEventListener('click', () => appendOperator('-'));
addBtn.addEventListener('click', () => appendOperator('+'));

function appendOperator(operator) {
    if (currentInput !== '0') {
        currentInput += operator;
        inputBox.value = currentInput;
    }
}