document.getElementById("calcForm").addEventListener("submit", 
    function(event) {
        event.preventDefault(); // Prevent form submission
        let num1 = parseFloat(document.getElementById("num1").value).trim();
        let num2 = parseFloat(document.getElementById("num2").value).trim();

        let operation = document.getElementById("operation").value;

        let resultado;

        switch (operation) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multiplicacion":
                if (num1 === 0 || num2 === 0) {
                    resultado = 0;
                } else {
                    resultado = num1 * num2;
                }
                break;
            case "division":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Error: División por cero no permitida";
                }
                break;
            default:
                resultado = "Operación no válida";
        }
        

});