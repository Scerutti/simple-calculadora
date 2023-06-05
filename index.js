document.onkeydown = function (event) {
    var key = event.key;
    var validKeys = /[0-9\+\-\*\/\=\.]|Backspace|Delete/;

    if (validKeys.test(key)) {
        event.preventDefault();

        if (key >= '0' && key <= '9') {
            appendNumber(parseInt(key));
        } else if (key === '.' && !document.getElementById('result').value.includes('.')) {
            appendNumber('.');
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            appendOperator(key);
        } else if (key === 'Backspace' || key === 'Delete') {
            clearLastCharacter();
        }
    }
};

document.onkeyup = function (event) {
    var key = event.key;

    if (key === 'Enter' || key === '=') {
        calculate();
    }
};

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculate() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    document.getElementById('result').value = result;

    var historyContainer = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.textContent = expression + ' = ' + result;
    historyContainer.appendChild(historyItem);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function clearLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}