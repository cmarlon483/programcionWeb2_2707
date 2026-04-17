
function appendNumber(value) {
    document.getElementById("display").value += value;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function cleanWindow() {
    document.getElementById("display").value = "";
}

function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    
    if (expression) {
        try {
            var result = eval(expression);
            display.value = result;
        } catch (e) {
            display.value = "Error"; // Por si la operación es inválida
            setTimeout(cleanWindow, 1500); // Limpia el error tras 1.5 seg
        }
    }
}


document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    // Detectar números (0-9)
    if (tecla >= '0' && tecla <= '9') {
        appendNumber(tecla);
    }

    // Detectar operadores básicos
    if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        appendOperator(tecla);
    }

    // Detectar punto decimal
    if (tecla === '.' || tecla === ',') {
        appendNumber('.');
    }

    // Calcular al presionar Enter
    if (tecla === 'Enter') {
        event.preventDefault(); // Evita que se disparen otros botones
        calculate();
    }

    // Limpiar pantalla al presionar Escape o la letra 'c'
    if (tecla === 'Escape' || tecla.toLowerCase() === 'c') {
        cleanWindow();
    }

    // Borrar el último carácter con Retroceso (Backspace)
    if (tecla === 'Backspace') {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
});