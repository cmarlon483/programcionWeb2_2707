document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value.trim());
    const num2 = parseFloat(document.getElementById("num2").value.trim());
    const sum = num1 + num2;
    document.getElementById("resultado").textContent = "La suma es: " + sum;
});
