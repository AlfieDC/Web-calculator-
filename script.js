const display = document.getElementById('display');
const themeSwitch = document.getElementById('themeSwitch');

// Handle button clicks
function appendCharacter(char) {
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
}

function calculateResult() {
    try {
        let result = eval(display.innerText);
        if (result === Infinity || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = 'Error';
    }
}

// 🎹 Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

// 🌙 Dark mode toggle
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeSwitch.checked = true;
}
