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
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;  
}


//No solo funcione con touche tambein teclado 